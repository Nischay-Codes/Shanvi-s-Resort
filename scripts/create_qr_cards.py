import sys
import os
sys.path.append('scripts')
from qrcodegen import QrCode
from PIL import Image, ImageDraw, ImageFont

def make_qr_image(url, module_size=24, border=4, dark_color=(24, 61, 50), light_color=(255, 255, 255)):
    qr = QrCode.encode_text(url, QrCode.Ecc.MEDIUM)
    size = qr.size
    total_size = (size + border * 2) * module_size

    im = Image.new('RGB', (total_size, total_size), light_color)
    draw = ImageDraw.Draw(im)

    for y in range(size):
        for x in range(size):
            if qr.get_module(x, y):
                x0 = (x + border) * module_size
                y0 = (y + border) * module_size
                x1 = x0 + module_size
                y1 = y0 + module_size
                draw.rectangle([x0, y0, x1, y1], fill=dark_color)

    return im

def make_qr_svg(url, border=4, dark_color="#183D32", light_color="#FFFFFF"):
    qr = QrCode.encode_text(url, QrCode.Ecc.MEDIUM)
    size = qr.size
    total_size = size + border * 2

    parts = []
    parts.append(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {total_size} {total_size}" shape-rendering="crispEdges">')
    parts.append(f'  <rect width="{total_size}" height="{total_size}" fill="{light_color}"/>')
    parts.append(f'  <path fill="{dark_color}" d="')

    path_data = []
    for y in range(size):
        for x in range(size):
            if qr.get_module(x, y):
                path_data.append(f'M{x + border},{y + border}h1v1h-1z')

    parts.append(' '.join(path_data))
    parts.append('"/>')
    parts.append('</svg>')
    return '\n'.join(parts)

def create_table_stand_card(url, dest_path):
    # Stand card canvas: 1200 x 1800 px (2:3 aspect ratio, printable 4x6 or 5x7 table tent)
    card_w, card_h = 1200, 1800
    im = Image.new('RGB', (card_w, card_h), (24, 61, 50)) # Deep forest green
    draw = ImageDraw.Draw(im)

    # Decorative gold double borders
    draw.rectangle([40, 40, card_w - 40, card_h - 40], outline=(197, 164, 109), width=3)
    draw.rectangle([52, 52, card_w - 52, card_h - 52], outline=(197, 164, 109, 120), width=1)

    # Corner decorative squares
    for cx, cy in [(40, 40), (card_w - 40, 40), (40, card_h - 40), (card_w - 40, card_h - 40)]:
        draw.rectangle([cx - 8, cy - 8, cx + 8, cy + 8], fill=(197, 164, 109))

    # Top Brand Header
    # Load fonts
    try:
        font_serif_lg = ImageFont.truetype('/System/Library/Fonts/Supplemental/Georgia Bold.ttf', 58)
        font_serif_md = ImageFont.truetype('/System/Library/Fonts/Supplemental/Georgia.ttf', 32)
        font_serif_italic = ImageFont.truetype('/System/Library/Fonts/Supplemental/Georgia Italic.ttf', 30)
        font_sans_bold = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial Bold.ttf', 34)
        font_sans_sm = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial.ttf', 26)
        font_sans_xs = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial.ttf', 22)
    except:
        font_serif_lg = font_serif_md = font_serif_italic = font_sans_bold = font_sans_sm = font_sans_xs = ImageFont.load_default()

    # Brand Title
    draw.text((card_w // 2, 130), "SHANVI'S RESORT", fill=(245, 240, 230), font=font_serif_lg, anchor="mm")
    draw.text((card_w // 2, 195), "BASTAR, JAGDALPUR • LUXURY DINING & ROOM SERVICE", fill=(197, 164, 109), font=font_sans_xs, anchor="mm")

    # Divider line with center diamond
    draw.line([(card_w // 2 - 250, 240), (card_w // 2 + 250, 240)], fill=(197, 164, 109), width=2)
    draw.rectangle([card_w // 2 - 5, 235, card_w // 2 + 5, 245], fill=(197, 164, 109))

    # Subtitle
    draw.text((card_w // 2, 285), '"A Taste of Nature, A Touch of Luxury"', fill=(216, 190, 142), font=font_serif_italic, anchor="mm")

    # White QR Code Card Container
    container_w, container_h = 760, 760
    c_x0 = (card_w - container_w) // 2
    c_y0 = 350
    c_x1 = c_x0 + container_w
    c_y1 = c_y0 + container_h

    # Container with soft rounded rect and gold border
    draw.rectangle([c_x0, c_y0, c_x1, c_y1], fill=(255, 255, 255), outline=(197, 164, 109), width=4)

    # Generate QR Code image inside container
    qr_im = make_qr_image(url, module_size=18, border=3, dark_color=(24, 61, 50), light_color=(255, 255, 255))
    qr_w, qr_h = qr_im.size
    qr_pos = (c_x0 + (container_w - qr_w) // 2, c_y0 + (container_h - qr_h) // 2)
    im.paste(qr_im, qr_pos)

    # Action Instruction Box Below QR
    draw.text((card_w // 2, 1170), "SCAN TO EXPLORE DIGITAL MENU", fill=(245, 240, 230), font=font_sans_bold, anchor="mm")
    draw.text((card_w // 2, 1225), "Point your phone camera to browse 299 dishes & call with one tap", fill=(216, 190, 142), font=font_sans_sm, anchor="mm")

    # Call / Extension Badge Box
    b_w, b_h = 800, 190
    b_x0 = (card_w - b_w) // 2
    b_y0 = 1290
    b_x1 = b_x0 + b_w
    b_y1 = b_y0 + b_h
    draw.rectangle([b_x0, b_y0, b_x1, b_y1], fill=(15, 38, 32), outline=(197, 164, 109), width=2)

    draw.text((card_w // 2, b_y0 + 40), "READY TO ORDER FROM YOUR ROOM OR TABLE?", fill=(197, 164, 109), font=font_sans_xs, anchor="mm")
    draw.text((card_w // 2, b_y0 + 95), "In-Room Phone: Ext. 101 / 102", fill=(255, 255, 255), font=font_sans_bold, anchor="mm")
    draw.text((card_w // 2, b_y0 + 145), "Direct Mobile & WhatsApp: +91 94252 88888", fill=(245, 240, 230), font=font_sans_sm, anchor="mm")

    # Features Pill Row
    draw.text((card_w // 2, 1540), "Pure Veg & Non-Veg • Charcoal Tandoor • Made to Order", fill=(216, 190, 142), font=font_sans_xs, anchor="mm")

    # Bottom Address
    draw.text((card_w // 2, 1670), "Khasra No. 1548/2, Jamguda, Kurandi Road, Jagdalpur, Bastar (C.G.) 494001", fill=(245, 240, 230, 160), font=font_sans_xs, anchor="mm")
    draw.text((card_w // 2, 1715), "Shanvi's Luxury Resort • All Rights Reserved", fill=(197, 164, 109), font=font_sans_xs, anchor="mm")

    im.save(dest_path, 'PNG', quality=95)
    print(f"Table stand card saved to {dest_path}")

if __name__ == '__main__':
    # URL can be passed via command line argument: python3 scripts/create_qr_cards.py "https://your-domain.com"
    target_url = sys.argv[1] if len(sys.argv) > 1 else 'http://192.168.5.41:3000/'
    print(f"Generating QR assets for URL: {target_url}")

    os.makedirs('public', exist_ok=True)

    # 1. Square QR image
    qr_clean = make_qr_image(target_url, module_size=20, border=4)
    qr_clean.save('public/qr-menu.png', 'PNG')
    print("Saved public/qr-menu.png")

    # 2. Vector SVG
    svg_data = make_qr_svg(target_url, border=4)
    with open('public/qr-menu.svg', 'w') as f:
        f.write(svg_data)
    print("Saved public/qr-menu.svg")

    # 3. Table Stand Card
    create_table_stand_card(target_url, 'public/shanvis-table-qr-stand.png')

    # Also save to conversation artifacts so it's directly visible
    art_dir = '/Users/alishaanjum/.gemini/antigravity/brain/fea8f6ba-96c8-410a-b4ac-4bcb9980e70a'
    if os.path.exists(art_dir):
        qr_clean.save(os.path.join(art_dir, 'qr-menu.png'), 'PNG')
        create_table_stand_card(target_url, os.path.join(art_dir, 'shanvis-table-qr-stand.png'))
        print("Saved artifacts copies.")

