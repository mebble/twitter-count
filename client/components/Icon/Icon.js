import React from 'react';

const icons = {
    verified: {
        paths: (
            <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5c-1.51 0-2.816.917-3.437 2.25-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
        ),
        viewBox: '0 0 24 24'
    },
    twitter: {
        paths: (
            <path d="M403.632,74.18c-9.113,4.041-18.573,7.229-28.28,9.537c10.696-10.164,18.738-22.877,23.275-37.067  l0,0c1.295-4.051-3.105-7.554-6.763-5.385l0,0c-13.504,8.01-28.05,14.019-43.235,17.862c-0.881,0.223-1.79,0.336-2.702,0.336  c-2.766,0-5.455-1.027-7.57-2.891c-16.156-14.239-36.935-22.081-58.508-22.081c-9.335,0-18.76,1.455-28.014,4.325  c-28.672,8.893-50.795,32.544-57.736,61.724c-2.604,10.945-3.309,21.9-2.097,32.56c0.139,1.225-0.44,2.08-0.797,2.481  c-0.627,0.703-1.516,1.106-2.439,1.106c-0.103,0-0.209-0.005-0.314-0.015c-62.762-5.831-119.358-36.068-159.363-85.14l0,0  c-2.04-2.503-5.952-2.196-7.578,0.593l0,0C13.677,65.565,9.537,80.937,9.537,96.579c0,23.972,9.631,46.563,26.36,63.032  c-7.035-1.668-13.844-4.295-20.169-7.808l0,0c-3.06-1.7-6.825,0.485-6.868,3.985l0,0c-0.438,35.612,20.412,67.3,51.646,81.569  c-0.629,0.015-1.258,0.022-1.888,0.022c-4.951,0-9.964-0.478-14.898-1.421l0,0c-3.446-0.658-6.341,2.611-5.271,5.952l0,0  c10.138,31.651,37.39,54.981,70.002,60.278c-27.066,18.169-58.585,27.753-91.39,27.753l-10.227-0.006  c-3.151,0-5.816,2.054-6.619,5.106c-0.791,3.006,0.666,6.177,3.353,7.74c36.966,21.513,79.131,32.883,121.955,32.883  c37.485,0,72.549-7.439,104.219-22.109c29.033-13.449,54.689-32.674,76.255-57.141c20.09-22.792,35.8-49.103,46.692-78.201  c10.383-27.737,15.871-57.333,15.871-85.589v-1.346c-0.001-4.537,2.051-8.806,5.631-11.712c13.585-11.03,25.415-24.014,35.16-38.591  l0,0C411.924,77.126,407.866,72.302,403.632,74.18L403.632,74.18z" />
        ),
        viewBox: '0 0 410.155 410.155',
        attribution: <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    },
    cross: {
        paths: (
            <path d="M213.333,0C95.514,0,0,95.514,0,213.333s95.514,213.333,213.333,213.333  s213.333-95.514,213.333-213.333S331.153,0,213.333,0z M330.995,276.689l-54.302,54.306l-63.36-63.356l-63.36,63.36l-54.302-54.31  l63.356-63.356l-63.356-63.36l54.302-54.302l63.36,63.356l63.36-63.356l54.302,54.302l-63.356,63.36L330.995,276.689z" />
        ),
        viewBox: '0 0 426.667 426.667',
        attribution: <div>Icons made by <a href="https://www.flaticon.com/authors/maxim-basinski" title="Maxim Basinski">Maxim Basinski</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    },
    question: {
        paths: (
            <path d="m22,0c-12.2,0-22,9.8-22,22s9.8,22 22,22 22-9.8 22-22-9.8-22-22-22zm2,34c0,0.6-0.4,1-1,1h-2c-0.6,0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h2c0.6,0 1,0.4 1,1v2zm2.7-8.9c-1.4,1.2-2.4,2-2.7,3.1-0.1,0.5-0.5,0.8-1,0.8h-2c-0.6,0-1.1-0.5-1-1.1 0.4-2.9 2.5-4.5 4.2-5.9 1.8-1.4 2.8-2.3 2.8-4 0-2.8-2.2-5-5-5s-5,2.2-5,5c0,0.2 0,0.4 0,0.6 0.1,0.5-0.2,1-0.7,1.1l-1.9,.6c-0.6,0.2-1.2-0.2-1.3-0.8-0.1-0.5-0.1-1-0.1-1.5 0-5 4-9 9-9s9,4 9,9c0,3.7-2.4,5.6-4.3,7.1z" />
        ),
        viewBox: '0 0 44 44',
        attribution: <div>Icons made by <a href="https://www.flaticon.com/authors/eleonor-wang" title="Eleonor Wang">Eleonor Wang</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    },
    permalink: {
        paths: (
            <>
                <path d="M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003     S232.835,0,149.996,0z M225.363,123.302l-36.686,36.686c-3.979,3.979-9.269,6.17-14.895,6.17c-5.625,0-10.916-2.192-14.895-6.168     l-1.437-1.437l-3.906,3.906l1.434,1.434c8.214,8.214,8.214,21.579,0,29.793l-36.681,36.686c-3.979,3.979-9.269,6.17-14.898,6.17     c-5.628,0-10.919-2.192-14.9-6.173L74.634,216.5c-8.214-8.209-8.214-21.573-0.003-29.79l36.689-36.684     c3.979-3.979,9.269-6.17,14.898-6.17s10.916,2.192,14.898,6.17l1.432,1.432l3.906-3.906l-1.432-1.432     c-8.214-8.211-8.214-21.576-0.005-29.79l36.689-36.686c3.981-3.981,9.272-6.173,14.898-6.173s10.916,2.192,14.898,6.17     l13.868,13.873C233.577,101.723,233.577,115.09,225.363,123.302z" />
                <path d="M142.539,173.459l-7.093,7.093l-11.002-10.999l7.093-7.093l-1.432-1.432c-1.04-1.037-2.422-1.611-3.89-1.611     c-1.471,0-2.853,0.573-3.893,1.611l-36.686,36.681c-2.145,2.147-2.145,5.638,0,7.783l13.87,13.873     c2.083,2.083,5.708,2.08,7.786,0.003l36.681-36.686c2.148-2.147,2.148-5.641,0-7.789L142.539,173.459z" />
                <path d="M200.493,90.643c-1.04-1.04-2.425-1.613-3.896-1.613c-1.471,0-2.856,0.573-3.896,1.616l-36.686,36.684     c-2.142,2.147-2.142,5.638,0.003,7.786l1.434,1.432l10.88-10.883l11.002,11.002l-10.88,10.883l1.434,1.434     c2.083,2.077,5.703,2.08,7.786-0.003l36.684-36.681c2.145-2.147,2.145-5.638,0-7.786L200.493,90.643z" />
            </>
        ),
        viewBox: '0 0 300 300',
        attribution: <div>Icons made by <a href="https://www.flaticon.com/authors/chanut" title="Chanut">Chanut</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    }
};

export default ({ name, fill="#000", width=24, height=24 }) => {
    const { paths, viewBox } = icons[name];
    return (
        <svg className="Icon" width={width} height={height} viewBox={viewBox} style={{ fill }}>
            {paths}
        </svg>
    );
};
