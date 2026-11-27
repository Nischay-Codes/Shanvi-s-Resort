# Pure Python QR Code generator library (adapted from Project Nayuki, public domain / MIT)
import itertools

class QrSegment:
    def __init__(self, mode, numchars, bitdata):
        self.mode = mode
        self.numchars = numchars
        self.bitdata = list(bitdata)

    @staticmethod
    def make_bytes(data):
        bb = []
        for b in data:
            for i in reversed(range(8)):
                bb.append((b >> i) & 1)
        return QrSegment(QrSegment.Mode.BYTE, len(data), bb)

    class Mode:
        def __init__(self, modebits, numbits):
            self.modebits = modebits
            self.num_bits_char_count = numbits

        def num_char_count_bits(self, ver):
            return self.num_bits_char_count[(ver + 7) // 17]

    Mode.NUMERIC      = Mode(0x1, (10, 12, 14))
    Mode.ALPHANUMERIC = Mode(0x2, ( 9, 11, 13))
    Mode.BYTE         = Mode(0x4, ( 8, 16, 16))
    Mode.KANJI        = Mode(0x8, ( 8, 10, 12))
    Mode.ECI          = Mode(0x7, ( 0,  0,  0))

class QrCode:
    class Ecc:
        def __init__(self, ord, fb):
            self.ordinal = ord
            self.formatbits = fb
    Ecc.LOW      = Ecc(0, 1)
    Ecc.MEDIUM   = Ecc(1, 0)
    Ecc.QUARTILE = Ecc(2, 3)
    Ecc.HIGH     = Ecc(3, 2)

    MIN_VERSION = 1
    MAX_VERSION = 40

    _ECC_CODEWORDS_PER_BLOCK = (
        None,
        (-1,  7, 10, 13, 17), (-1, 10, 16, 22, 28), (-1, 15, 26, 36, 44), (-1, 20, 36, 52, 64),
        (-1, 26, 48, 72, 88), (-1, 36, 64, 96, 112), (-1, 40, 72, 108, 130), (-1, 48, 88, 132, 156),
        (-1, 60, 110, 160, 192), (-1, 72, 130, 192, 224), (-1, 80, 150, 224, 264), (-1, 96, 176, 260, 308),
        (-1, 104, 198, 288, 352), (-1, 120, 216, 320, 384), (-1, 132, 240, 360, 432), (-1, 144, 280, 408, 480),
        (-1, 168, 308, 448, 532), (-1, 180, 338, 504, 588), (-1, 196, 364, 546, 640), (-1, 224, 416, 600, 700),
        (-1, 224, 442, 644, 750), (-1, 252, 476, 690, 816), (-1, 270, 504, 750, 900), (-1, 300, 560, 810, 960),
        (-1, 312, 588, 870, 1050), (-1, 336, 644, 952, 1110), (-1, 360, 700, 1020, 1200), (-1, 390, 728, 1050, 1260),
        (-1, 420, 784, 1140, 1350), (-1, 450, 812, 1200, 1440), (-1, 480, 868, 1290, 1530), (-1, 510, 924, 1350, 1620),
        (-1, 540, 980, 1440, 1710), (-1, 570, 1036, 1530, 1800), (-1, 600, 1064, 1590, 1890), (-1, 630, 1120, 1680, 1980),
        (-1, 660, 1204, 1770, 2100), (-1, 720, 1260, 1860, 2160), (-1, 750, 1316, 1950, 2280), (-1, 780, 1372, 2040, 2370)
    )

    _NUM_ERROR_CORRECTION_BLOCKS = (
        None,
        (-1, 1, 1, 1, 1), (-1, 1, 1, 1, 1), (-1, 1, 1, 2, 2), (-1, 1, 2, 2, 4),
        (-1, 1, 2, 4, 4), (-1, 2, 4, 4, 4), (-1, 2, 4, 6, 5), (-1, 2, 4, 6, 6),
        (-1, 2, 5, 8, 8), (-1, 4, 5, 8, 8), (-1, 4, 5, 8, 11), (-1, 4, 8, 10, 11),
        (-1, 4, 9, 12, 16), (-1, 4, 9, 16, 16), (-1, 6, 10, 12, 18), (-1, 6, 10, 17, 16),
        (-1, 6, 11, 16, 19), (-1, 6, 13, 18, 21), (-1, 7, 14, 21, 25), (-1, 8, 16, 20, 25),
        (-1, 8, 17, 23, 25), (-1, 9, 17, 23, 34), (-1, 9, 18, 25, 30), (-1, 10, 20, 27, 32),
        (-1, 12, 21, 29, 35), (-1, 12, 23, 34, 37), (-1, 12, 25, 34, 40), (-1, 13, 26, 35, 42),
        (-1, 14, 28, 38, 45), (-1, 15, 29, 40, 48), (-1, 16, 31, 43, 51), (-1, 17, 33, 45, 54),
        (-1, 18, 35, 48, 57), (-1, 19, 37, 51, 60), (-1, 19, 38, 53, 63), (-1, 20, 40, 56, 66),
        (-1, 21, 43, 59, 70), (-1, 22, 45, 62, 74), (-1, 24, 47, 65, 77), (-1, 25, 49, 68, 81)
    )

    @classmethod
    def encode_text(cls, text, ecl):
        seg = QrSegment.make_bytes(text.encode("utf-8"))
        return cls.encode_segments([seg], ecl)

    @classmethod
    def encode_segments(cls, segs, ecl, minversion=1, maxversion=40, mask=-1, boostecl=True):
        for version in range(minversion, maxversion + 1):
            datacapbits = cls._get_num_data_codewords(version, ecl) * 8
            usedbits = cls._get_total_bits(segs, version)
            if usedbits is not None and usedbits <= datacapbits:
                break
        else:
            raise ValueError("Data too long for QR Code")

        if boostecl:
            for newecl in (cls.Ecc.MEDIUM, cls.Ecc.QUARTILE, cls.Ecc.HIGH):
                if usedbits <= cls._get_num_data_codewords(version, newecl) * 8:
                    ecl = newecl

        bb = []
        for seg in segs:
            for b in cls._to_bits(seg.mode.modebits, 4): bb.append(b)
            for b in cls._to_bits(seg.numchars, seg.mode.num_char_count_bits(version)): bb.append(b)
            bb.extend(seg.bitdata)

        datacapbits = cls._get_num_data_codewords(version, ecl) * 8
        assert len(bb) <= datacapbits
        for b in cls._to_bits(0, min(4, datacapbits - len(bb))): bb.append(b)
        while len(bb) % 8 != 0: bb.append(0)
        padbyte = 0xEC
        while len(bb) < datacapbits:
            for b in cls._to_bits(padbyte, 8): bb.append(b)
            padbyte ^= 0xEC ^ 0x11

        data_codewords = []
        for i in range(0, len(bb), 8):
            val = 0
            for j in range(8):
                val = (val << 1) | bb[i + j]
            data_codewords.append(val)

        return cls(version, ecl, data_codewords, mask)

    def __init__(self, version, ecl, data_codewords, mask):
        self.version = version
        self.size = version * 4 + 17
        self.error_correction_level = ecl

        modules = [[False] * self.size for _ in range(self.size)]
        isfunction = [[False] * self.size for _ in range(self.size)]

        def set_func(x, y, is_dark):
            modules[y][x] = is_dark
            isfunction[y][x] = True

        # Draw finder patterns
        for x, y in ((0, 0), (self.size - 7, 0), (0, self.size - 7)):
            for r in range(7):
                for c in range(7):
                    is_dark = (r in (0, 6) or c in (0, 6) or (2 <= r <= 4 and 2 <= c <= 4))
                    set_func(x + c, y + r, is_dark)
            # Separators
            for i in range(8):
                if x + i < self.size:
                    if y + 7 < self.size: set_func(x + i, y + 7, False)
                    if y - 1 >= 0: set_func(x + i, y - 1, False)
                if y + i < self.size:
                    if x + 7 < self.size: set_func(x + 7, y + i, False)
                    if x - 1 >= 0: set_func(x - 1, y + i, False)

        # Timing patterns
        for i in range(7, self.size - 7):
            set_func(6, i, i % 2 == 0)
            set_func(i, 6, i % 2 == 0)

        # Alignment patterns
        align_pos = self._get_alignment_pattern_positions(version)
        num_align = len(align_pos)
        for i in range(num_align):
            for j in range(num_align):
                if (i == 0 and j == 0) or (i == 0 and j == num_align - 1) or (i == num_align - 1 and j == 0):
                    continue
                ax, ay = align_pos[i], align_pos[j]
                for r in range(-2, 3):
                    for c in range(-2, 3):
                        set_func(ax + c, ay + r, max(abs(r), abs(c)) != 1)

        # Dark module
        set_func(8, self.size - 8, True)

        # Dummy format bits
        for i in range(6): set_func(8, i, False); set_func(i, 8, False)
        set_func(8, 7, False); set_func(8, 8, False); set_func(7, 8, False)
        for i in range(8): set_func(self.size - 1 - i, 8, False)
        for i in range(7): set_func(8, self.size - 7 + i, False)

        # Interleave codewords
        all_codewords = self._add_ecc_and_interleave(version, ecl, data_codewords)

        # Draw data codewords
        i = 0
        for right in range(self.size - 1, 0, -2):
            if right <= 6: right -= 1
            for vert in range(self.size):
                for j in range(2):
                    x = right - j
                    up = ((right + 1) & 2) == 0
                    y = (self.size - 1 - vert) if up else vert
                    if not isfunction[y][x]:
                        is_dark = False
                        if i < len(all_codewords) * 8:
                            is_dark = ((all_codewords[i >> 3] >> (7 - (i & 7))) & 1) != 0
                            i += 1
                        modules[y][x] = is_dark

        # Select best mask if mask < 0
        if mask < 0:
            min_penalty = 1000000000
            best_mask = 0
            for m in range(8):
                self._apply_mask(modules, isfunction, m)
                self._draw_format_bits(modules, ecl, m)
                penalty = self._get_penalty_score(modules)
                if penalty < min_penalty:
                    min_penalty = penalty
                    best_mask = m
                self._apply_mask(modules, isfunction, m) # unmask
            mask = best_mask

        self.mask = mask
        self._apply_mask(modules, isfunction, mask)
        self._draw_format_bits(modules, ecl, mask)
        self.modules = modules

    def get_module(self, x, y):
        return self.modules[y][x]

    @staticmethod
    def _apply_mask(modules, isfunction, mask):
        size = len(modules)
        for y in range(size):
            for x in range(size):
                if not isfunction[y][x]:
                    invert = (
                        (x + y) % 2 == 0 if mask == 0 else
                        y % 2 == 0 if mask == 1 else
                        x % 3 == 0 if mask == 2 else
                        (x + y) % 3 == 0 if mask == 3 else
                        (x // 3 + y // 2) % 2 == 0 if mask == 4 else
                        (x * y) % 2 + (x * y) % 3 == 0 if mask == 5 else
                        ((x * y) % 2 + (x * y) % 3) % 2 == 0 if mask == 6 else
                        ((x + y) % 2 + (x * y) % 3) % 2 == 0
                    )
                    modules[y][x] = modules[y][x] ^ invert

    @staticmethod
    def _draw_format_bits(modules, ecl, mask):
        data = (ecl.formatbits << 3) | mask
        rem = data
        for _ in range(10):
            rem = (rem << 1) ^ ((rem >> 9) * 0x537)
        bits = ((data << 10) | rem) ^ 0x5412
        size = len(modules)

        for i in range(6): modules[i][8] = ((bits >> i) & 1) != 0
        modules[7][8] = ((bits >> 6) & 1) != 0
        modules[8][8] = ((bits >> 7) & 1) != 0
        modules[8][7] = ((bits >> 8) & 1) != 0
        for i in range(6): modules[8][5 - i] = ((bits >> (9 + i)) & 1) != 0

        for i in range(8): modules[8][size - 1 - i] = ((bits >> i) & 1) != 0
        for i in range(7): modules[size - 7 + i][8] = ((bits >> (8 + i)) & 1) != 0

    @classmethod
    def _add_ecc_and_interleave(cls, ver, ecl, data):
        num_blocks = cls._NUM_ERROR_CORRECTION_BLOCKS[ver][ecl.ordinal]
        block_ecc_len = cls._ECC_CODEWORDS_PER_BLOCK[ver][ecl.ordinal]
        raw_codewords = cls._get_num_raw_data_modules(ver) // 8
        num_short_blocks = num_blocks - raw_codewords % num_blocks
        short_block_len = raw_codewords // num_blocks

        blocks = []
        gen = cls._reed_solomon_compute_divisor(block_ecc_len)
        k = 0
        for i in range(num_blocks):
            blen = short_block_len - block_ecc_len + (0 if i < num_short_blocks else 1)
            dat = data[k : k + blen]
            k += blen
            ecc = cls._reed_solomon_compute_remainder(dat, gen)
            blocks.append((dat, ecc))

        res = []
        for i in range(len(blocks[0][0]) + 1):
            for b in blocks:
                if i < len(b[0]): res.append(b[0][i])
        for i in range(block_ecc_len):
            for b in blocks:
                res.append(b[1][i])
        return res

    @staticmethod
    def _reed_solomon_compute_divisor(degree):
        res = [0] * (degree - 1) + [1]
        root = 1
        for _ in range(degree):
            for j in range(len(res)):
                res[j] = QrCode._reed_solomon_multiply(res[j], root)
                if j + 1 < len(res): res[j] ^= res[j + 1]
            root = QrCode._reed_solomon_multiply(root, 0x02)
        return res

    @staticmethod
    def _reed_solomon_compute_remainder(data, divisor):
        res = [0] * len(divisor)
        for b in data:
            factor = b ^ res.pop(0)
            res.append(0)
            for i in range(len(divisor)):
                res[i] ^= QrCode._reed_solomon_multiply(divisor[i], factor)
        return res

    @staticmethod
    def _reed_solomon_multiply(x, y):
        z = 0
        for i in reversed(range(8)):
            z = (z << 1) ^ ((z >> 7) * 0x11D)
            z ^= ((y >> i) & 1) * x
        return z

    @staticmethod
    def _get_num_data_codewords(ver, ecl):
        return (QrCode._get_num_raw_data_modules(ver) // 8 -
                QrCode._ECC_CODEWORDS_PER_BLOCK[ver][ecl.ordinal] *
                QrCode._NUM_ERROR_CORRECTION_BLOCKS[ver][ecl.ordinal])

    @staticmethod
    def _get_num_raw_data_modules(ver):
        size = ver * 4 + 17
        res = size * size
        res -= 8 * 8 * 3
        res -= (size - 16) * 2
        num_align = len(QrCode._get_alignment_pattern_positions(ver))
        if num_align > 1:
            res -= (num_align * num_align - 3) * 25
            res += (num_align - 2) * 2 * 5
        if ver >= 7: res -= 6 * 3 * 2
        return res

    @staticmethod
    def _get_alignment_pattern_positions(ver):
        if ver == 1: return []
        num = ver // 7 + 2
        step = 26 if ver == 32 else (ver * 4 + num * 2 + 1) // (num * 2 - 2) * 2
        res = [6]
        for pos in range(ver * 4 + 10, 6, -step): res.insert(1, pos)
        return res

    @staticmethod
    def _get_total_bits(segs, ver):
        res = 0
        for seg in segs:
            cc = seg.mode.num_char_count_bits(ver)
            if seg.numchars >= (1 << cc): return None
            res += 4 + cc + len(seg.bitdata)
        return res

    @staticmethod
    def _to_bits(val, len_):
        return [((val >> i) & 1) for i in reversed(range(len_))]

    @staticmethod
    def _get_penalty_score(modules):
        size = len(modules)
        res = 0
        for y in range(size):
            run_color = False
            run_val = 0
            for x in range(size):
                if modules[y][x] == run_color:
                    run_val += 1
                    if run_val == 5: res += 3
                    elif run_val > 5: res += 1
                else:
                    run_color = modules[y][x]
                    run_val = 1
        for x in range(size):
            run_color = False
            run_val = 0
            for y in range(size):
                if modules[y][x] == run_color:
                    run_val += 1
                    if run_val == 5: res += 3
                    elif run_val > 5: res += 1
                else:
                    run_color = modules[y][x]
                    run_val = 1
        return res
