const btn_txt_input = document.getElementById('btn_txt');
const btn_width_input = document.getElementById('btn_width');
const btn_bg_color_input = document.getElementById('btn_bg_color');
const btn_txt_color_input = document.getElementById('btn_txt_color');
const btn_border_radius_input = document.getElementById('btn_border_radius');
const btn_font_size_input = document.getElementById('btn_font_size');
const btn_render = document.getElementById('btn_render');
const btn_css_output = document.getElementById('btn_css');

initCssBtnProps();
refreshBtnCss();

btn_txt_input.addEventListener('keyup', (event) => {
    const input_value = event.target.value;
    if(input_value.length > 0 && input_value.length <= 20){
        btn_render.innerText = input_value;
        refreshBtnCss();
    }
});

btn_width_input.addEventListener('keyup', (event) => {
    let input_value = Number(event.target.value);
    input_value = event.target.value = Math.max(0, Math.min(100, input_value));
    if(input_value > 0 && input_value <= 100){
        btn_render.style.width = `${input_value}%`;
        refreshBtnCss();
    }
    console.log('Cehe');
});

btn_border_radius_input.addEventListener('input', (event) => {
    const input_value = Number(event.target.value);
    if(input_value > 0){
        btn_render.style.borderRadius = `${input_value}px`;
        refreshBtnCss();
    }
    console.log('Cehe');
});

btn_bg_color_input.addEventListener('input', (event) => {
    const input_value = event.target.value;
    if(input_value.length > 0){
        btn_render.style.backgroundColor = `${input_value}`;
        refreshBtnCss();
    }
    console.log(`${input_value}`);
});

btn_txt_color_input.addEventListener('input', (event) => {
    const input_value = event.target.value;
    if(input_value.length > 0){
        btn_render.style.color = `${input_value}`;
        refreshBtnCss();
    }
    console.log(`${input_value}`);
});

btn_font_size_input.addEventListener('input', (event) => {
    const input_value = event.target.value;
    if(input_value > 0){
        btn_render.style.fontSize = `${input_value}pt`;
        refreshBtnCss();
    }
    console.log(`${input_value}`);
});

document.getElementById('btn_copy_css').addEventListener('click', () => {
    copyToClipBoard();
});

const copyToClipBoard = async () => {
    try {
        await navigator.clipboard.writeText(btn_css_output.innerText);
        console.log('Copied CSS properties: ');
        console.log(btn_css_output.innerText);
        /* Resolved - text copied to clipboard successfully */
    } catch (err) {
        console.error('Failed to copy: ', err);
        /* Rejected - text failed to copy to the clipboard */
    }

    alert('CSS properties copied to clipboard!');
}

function initCssBtnProps() {
    btn_render.style.width = `${(btn_width_input.value = 60)}px`;
    btn_txt_input.value = btn_render.innerText = 'Render';
    btn_render.style.borderRadius = `${(btn_border_radius_input.value = 5)}px`;
    btn_render.style.fontSize = `${(btn_font_size_input.value = 10)}pt`;
    btn_render.style.backgroundColor = btn_bg_color_input.value = '#A9A9A9';
    btn_render.style.color = btn_txt_color_input.value = '#FFFFFF';
}

function refreshBtnCss() {
    const cssText = btn_render.style.cssText;
    console.log(cssText.split(';').length);
    btn_css_output.innerHTML = '#my_btn {<br>';
    for(let prop of cssText.split(';')) {
        if(prop.length == 0) break;
        btn_css_output.innerHTML += `${prop};<br>`;
    }
    btn_css_output.innerHTML += '}';
};