import './styles.less';
/**
 * Собранный CombinedSelect из старой версии дизайн-системы (@ui/design-system) - 8.14.4 (commit hash: 826f63a5b907dfd6f8c62477f3655af97557fb91)
 * со следующими настройками webpack:
 * @example 
 * experiments: {
        outputModule: true,
    },
    output: {
        libraryTarget: 'module',
        path: path.resolve(`./`),
        filename: './[name]/index.js',
    }
 */
// prettier-ignore
/* eslint-disable */
var e = {
        2149: (e, t, n) => {
            n.d(t, { Z: () => w });
            var o = n(16689),
                r = n.n(o),
                a = n(59003),
                i = n.n(a),
                l = n(57518),
                s = n.n(l),
                c = n(38851);
            const d = s().input.withConfig({ displayName: 'StyledInput', componentId: '-1kwkwm' })(
                () =>
                    `\n    display: block;\n\n    width: 100%;\n    height: auto;\n\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n    border: 0;\n    outline: none;\n    background: none;\n\n    font-size: ${(0,
                    c.yv)('body')};\n    line-height: ${(0, c.Dp)(
                        'body'
                    )};\n\n    font-family: Inter, Helvetica, Arial, sans-serif;\n\n    -webkit-tap-highlight-color: transparent;\n\n    &[type = "number"] {\n        -moz-appearance: textfield;\n    }\n\n    &[type = "number"]::-webkit-inner-spin-button,\n    &[type = "number"]::-webkit-outer-spin-button {\n        -webkit-appearance: none;\n\n        margin: 0;\n    }\n\n    &::placeholder {\n        color: var(--text-tertiary);\n    }\n\n    &:-webkit-autofill {\n        -webkit-transition: background-color 7200s ease-in-out 0s;\n        transition: background-color 7200s ease-in-out 0s;\n    }\n\n    &:autofill {\n        -webkit-transition: background-color 7200s ease-in-out 0s;\n        -o-transition: background-color 7200s ease-in-out 0s;\n        transition: background-color 7200s ease-in-out 0s;\n    }\n`
            );
            var p = n(38549),
                u = n(25103);
            const b = (e, t, n) =>
                    e ? 'var(--body-disabled)' : !n || t || e ? 'var(--base-bg)' : 'var(--body-transparent-hover)',
                m = s().div.withConfig({
                    displayName: 'LightControlBox',
                    componentId: '-19cfnls',
                })`display:flex;justify-content:space-between;width:100%;box-sizing:border-box;border-radius:8px;color:var(--text-primary);padding:${({
                    fieldHeight: e,
                }) =>
                    ((e) => {
                        switch (e) {
                            case 'm':
                                return '9px 12px';
                            case 's':
                                return '5px 12px';
                            default:
                                return '17px 16px';
                        }
                    })(e)};border:1px solid;border-color:${({ disabled: e, focus: t }) =>
                    ((e, t) =>
                        e ? 'var(--support-border-alt)' : !e && t ? 'var(--body-primary)' : 'var(--support-border)')(
                        e,
                        t
                    )};background-color:${({ disabled: e, focus: t }) => b(e, t)};transition-duration:${
                    u.zn
                };transition-property:background-color,border-color;transition-timing-function:ease-in-out;cursor:${({
                    cursor: e,
                }) => e};&:hover{background-color:${({ disabled: e, focus: t }) => b(e, t, !0)};}`;
            var h = n(48755);
            const f = s().label.withConfig({
                displayName: 'Label',
                componentId: '-1v88i47',
            })`display:block;position:absolute;top:${({ fieldHeight: e }) =>
                ((e) => {
                    switch (e) {
                        case 'l':
                            return '18px';
                        case 's':
                            return '6px';
                        default:
                            return '10px';
                    }
                })(e)};left:${({ fieldHeight: e }) =>
                'l' === e
                    ? '16px'
                    : '12px'};padding:0;overflow:hidden;text-overflow:ellipsis;max-width:calc(100% - 30px);white-space:nowrap;opacity:${({
                focus: e,
            }) => (e ? 0 : 1)};pointer-events:'none';transition-duration:${
                u.vi
            };transition-property:opacity;transition-timing-function:ease-in-out;`;
            var g = n(44211);
            const v = ({
                className: e,
                id: t,
                disabled: n,
                fieldHeight: a,
                name: l,
                focus: s,
                children: c,
                button: d,
                caption: u,
                hasValue: b,
                cursor: v,
                onOutsideClick: y,
                onClick: x,
            }) => {
                const w = (0, o.useRef)(),
                    k = i()('light__control__wrapper', e),
                    $ = (e) => {
                        w.current && !w.current.contains(e.target) && y(e);
                    };
                return (
                    (0, o.useEffect)(
                        () =>
                            w && w.current && y
                                ? (document.addEventListener('click', $, { capture: !0 }),
                                  () => {
                                      document.removeEventListener('click', $, { capture: !0 });
                                  })
                                : () => null,
                        [w, y]
                    ),
                    r().createElement(
                        p.im,
                        { id: (0, h.z)(l, t), disabled: n },
                        r().createElement(
                            m,
                            {
                                'ref': w,
                                'className': k,
                                'cursor': v,
                                'disabled': n,
                                'focus': s,
                                'fieldHeight': a,
                                'field-name': l,
                                'onClick': (e) => {
                                    e.persist(), !n && x && x(e);
                                },
                            },
                            !u || b
                                ? null
                                : r().createElement(
                                      f,
                                      {
                                          disabled: n,
                                          focus: s,
                                          className: 'control__label',
                                          htmlFor: l,
                                          fieldHeight: a,
                                      },
                                      r().createElement(g.Z, { variant: n ? 'disabled' : 'secondary' }, u)
                                  ),
                            c,
                            d || null
                        )
                    )
                );
            };
            v.defaultProps = { disabled: !1, focus: !1, fieldHeight: 's', cursor: 'default' };
            const y = v,
                x = (e) => {
                    const {
                            className: t,
                            name: n,
                            disabled: a,
                            value: l,
                            caption: s,
                            fieldHeight: c,
                            autoFocus: p,
                            onChange: u,
                            id: b,
                        } = e,
                        [m, h] = (0, o.useState)(!1),
                        [f, g] = (0, o.useState)(''),
                        v = (0, o.useRef)(),
                        x = i()('base-input__control', t);
                    return (
                        (0, o.useEffect)(() => {
                            g(l);
                        }, [l]),
                        r().createElement(
                            y,
                            {
                                className: x,
                                id: b,
                                disabled: a,
                                fieldHeight: c,
                                name: n,
                                hasValue: Boolean(f),
                                cursor: a ? 'default' : 'text',
                                focus: m,
                                caption: s,
                                onClick: () => {
                                    v.current && v.current.focus();
                                },
                            },
                            r().createElement(d, {
                                ref: v,
                                className: 'input',
                                value: f,
                                disabled: a,
                                autoFocus: p,
                                onChange: (e) => {
                                    const t = e.target.value;
                                    u && !a && u(t), g(t);
                                },
                                onFocus: () => {
                                    a || h(!0);
                                },
                                onBlur: () => {
                                    a || h(!1);
                                },
                            })
                        )
                    );
                };
            (x.defaultProps = Object.assign({}, { disabled: !1, fieldHeight: 's', autoFocus: !1 })),
                (x.displayName = 'BaseInput');
            const w = x;
        },
        72540: (e, t, n) => {
            n.d(t, { Z: () => u });
            var o = n(16689),
                r = n.n(o),
                a = n(59003),
                i = n.n(a),
                l = n(84322),
                s = n(45901),
                c = n(80031),
                d = n(66537);
            const p = (e) => {
                var {
                        children: t,
                        content: n,
                        loading: o,
                        className: a,
                        id: p,
                        onClick: u,
                        disabled: b,
                        textColor: m,
                        variant: h,
                        icon: f,
                        iconDescriptionText: g,
                        useDefaultIconColor: v,
                        minIconWidth: y,
                        minIconHeight: x,
                        hidden: w,
                        justifyContent: k,
                        disableTextWrap: $,
                        href: C,
                        target: E,
                    } = e,
                    O = (function (e, t) {
                        var n = {};
                        for (var o in e)
                            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                                t.indexOf(o[r]) < 0 &&
                                    Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                                    (n[o[r]] = e[o[r]]);
                        }
                        return n;
                    })(e, [
                        'children',
                        'content',
                        'loading',
                        'className',
                        'id',
                        'onClick',
                        'disabled',
                        'textColor',
                        'variant',
                        'icon',
                        'iconDescriptionText',
                        'useDefaultIconColor',
                        'minIconWidth',
                        'minIconHeight',
                        'hidden',
                        'justifyContent',
                        'disableTextWrap',
                        'href',
                        'target',
                    ]);
                const S = (e) => {
                    o || b || !u || u(e);
                };
                if (w) return null;
                const I = i()('button', a),
                    N = () =>
                        f && y && x && g
                            ? r().createElement(
                                  'div',
                                  { style: { minWidth: `${y}px`, minHeight: `${x}px` } },
                                  r().createElement(
                                      l.S,
                                      Object.assign(
                                          {
                                              'id': p,
                                              '$loading': o,
                                              'className': I,
                                              'disabled': b,
                                              'textColor': m,
                                              'variant': h,
                                              'onClick': S,
                                              'icon': f,
                                              'aria-label': g,
                                              'useDefaultIconColor': v,
                                              'justifyContent': k,
                                              'disableTextWrap': $,
                                          },
                                          O
                                      ),
                                      o && !b
                                          ? r().createElement(c.Z, {
                                                'aria-label': 'Загрузка данных',
                                                'size': 16,
                                                'color': (0, d.L)(h, m),
                                            })
                                          : t || n
                                  )
                              )
                            : r().createElement(
                                  l.S,
                                  Object.assign(
                                      {
                                          'id': p,
                                          '$loading': o,
                                          'className': I,
                                          'disabled': b,
                                          'textColor': m,
                                          'variant': h,
                                          'onClick': S,
                                          'icon': f,
                                          'aria-label': g,
                                          'useDefaultIconColor': v,
                                          'justifyContent': k,
                                          'disableTextWrap': $,
                                      },
                                      O
                                  ),
                                  o && !b
                                      ? r().createElement(
                                            r().Fragment,
                                            null,
                                            r().createElement(c.Z, {
                                                'aria-label': 'Загрузка данных',
                                                'size': 16,
                                                'color': (0, d.L)(h, m),
                                            }),
                                            r().createElement(
                                                'span',
                                                { className: 'visually-hidden' },
                                                'Загрузка данных'
                                            )
                                        )
                                      : t || n
                              );
                return C ? r().createElement(s.n, { href: o || b ? void 0 : C, target: E }, N()) : N();
            };
            p.defaultProps = Object.assign(
                {},
                {
                    type: 'button',
                    size: 'l',
                    loading: !1,
                    hidden: !1,
                    disabled: !1,
                    icon: !1,
                    variant: 'primary',
                    iconPosition: 'left',
                    justifyContent: 'center',
                    autoWidth: !1,
                    useDefaultIconColor: !1,
                    disableTextWrap: !1,
                    iconDescriptionText: '',
                    target: '_self',
                }
            );
            const u = p;
        },
        66537: (e, t, n) => {
            n.d(t, { L: () => o });
            const o = (e, t) =>
                'custom' === e
                    ? t
                    : 'secondary' === e ||
                      'transparent' === e ||
                      'control-icon' === e ||
                      'brand-secondary' === e ||
                      'tertiary' === e
                    ? 'var(--text-primary)'
                    : e.endsWith('alt')
                    ? `var(--text-${e.slice(0, -4)}`
                    : 'var(--text-with-background)';
        },
        49543: (e, t, n) => {
            n.d(t, { Z: () => r });
            var o = n(72540);
            o.Z.displayName = 'Button';
            const r = o.Z;
        },
        45901: (e, t, n) => {
            n.d(t, { n: () => r });
            var o = n(57518);
            const r = n.n(o)().a.withConfig({ displayName: 'StyledA', componentId: '-w1tzhi' })`text-decoration:none;`;
        },
        84322: (e, t, n) => {
            n.d(t, { S: () => s });
            var o = n(57518),
                r = n.n(o),
                a = n(38851),
                i = n(25103);
            const l = ['secondary', 'error-alt', 'success-alt', 'warning-alt'],
                s = r().button.withConfig({
                    displayName: 'StyledButton',
                    componentId: '-1k90qq',
                })`display:flex;align-items:center;justify-content:${({ justifyContent: e }) =>
                    e || 'center'};width:${({ autoWidth: e }) =>
                    e
                        ? 'auto'
                        : '100%'};border-radius:8px;box-sizing:border-box;background-clip:padding-box;-webkit-tap-highlight-color:transparent;overflow:hidden;transition-property:color,background-color,border-color;transition-duration:${
                    i.zn
                };transition-timing-function:ease-in-out;white-space:${({ disableTextWrap: e }) =>
                    e ? 'nowrap' : 'inherit'};svg{${({ iconPosition: e }) =>
                    'left' === e ? 'margin-right: 8px' : 'margin-left: 8px'}}svg.loader__spinner{margin:0;}${({
                    variant: e,
                    disabled: t,
                    $loading: n,
                }) =>
                    ((e, t, n) =>
                        l.includes(e) && t
                            ? o.css`background-color:var(--body-secondary);`
                            : 'tertiary' === e && t
                            ? o.css`background-color:var(--body-tertiary);`
                            : 'transparent' === e && t
                            ? o.css`background-color:var(--body-transparent);`
                            : t
                            ? o.css`background-color:var(--body-disabled);`
                            : 'on-color' === e
                            ? o.css`background-color:var(--body-on-color);${
                                  !n &&
                                  o.css`
                &:hover {
                    background-color: var(--body-on-color-hover);
                }
                &:focus-visible {
                    background-color: var(--body-on-color-hover);
                }
                &:active {
                    background-color: var(--body-on-color-pressed);
                }
            `
                              }`
                            : 'white' === e
                            ? o.css`background-color:var(--body-tertiary);${
                                  !n &&
                                  o.css`
                &:hover {
                    background-color: var(--body-tertiary-hover);
                }
                &:focus-visible {
                    background-color: var(--body-tertiary-hover);
                }
                &:active {
                    background-color: var(--body-tertiary-focus);
                }
            `
                              }`
                            : 'tertiary' === e
                            ? o.css`background-color:unset;${
                                  !n &&
                                  o.css`
                &:hover {
                    background-color: var(--body-transparent-hover);
                }
                &:active {
                    background-color: var(--body-transparent-focus);
                }
            `
                              }`
                            : 'control-icon' === e
                            ? o.css`background-color:unset;`
                            : o.css`background-color:var(--body-${e});${
                                  !n &&
                                  o.css`
            &:hover {
                background-color: var(--body-${e}-hover);
            }
            &:focus-visible {
                background-color: var(--body-${e}-hover);
            }
            &:active {
                background-color: var(--body-${e}-focus);
            }
        `
                              }`)(e, t, n)};${({ size: e }) =>
                    ((e) => {
                        switch (e) {
                            case 'xxs':
                                return o.css`padding:4px 6px;height:24px;`;
                            case 'xs':
                                return o.css`padding:6px 12px;height:32px;`;
                            case 's':
                                return o.css`padding:10px 16px;height:40px;`;
                            case 'm':
                                return o.css`padding:14px 24px;height:48px;`;
                            default:
                                return o.css`padding:18px 32px;height:56px;`;
                        }
                    })(e)};${({ variant: e, disabled: t, $loading: n, useDefaultIconColor: r }) =>
                    ((e, t, n, r) =>
                        t
                            ? o.css`color:var(--text-disabled);svg path{fill:var(--text-disabled);}`
                            : 'secondary' === e || 'transparent' === e || 'brand-secondary' === e
                            ? o.css`color:var(--text-primary);${
                                  !n &&
                                  !r &&
                                  o.css`
                svg path {
                    fill: var(--text-primary);
                }
            `
                              }`
                            : 'tertiary' === e
                            ? o.css`color:var(--text-primary);${
                                  !n &&
                                  !r &&
                                  o.css`
                svg path {
                    fill: var(--text-primary);
                }

                &:hover {
                    color: var(--body-primary-hover);

                    svg path {
                        fill: var(--body-primary-hover);
                    }
                }

                &:active {
                    color: var(--body-primary-focus);

                    svg path {
                        fill: var(--body-primary-focus);
                    }
                }
            `
                              }`
                            : 'control-icon' === e
                            ? o.css`color:var(--text-secondary);${
                                  !r &&
                                  o.css`
                &:hover {
                    color: var(--text-primary);

                    svg path {
                        fill: var(--text-primary);
                    }
                }
            `
                              }`
                            : 'white' === e
                            ? o.css`color:var(--text-brand-primary);${
                                  !r &&
                                  o.css`
                svg path {
                    fill: var(--text-brand-primary);
                }
            `
                              }`
                            : e.endsWith('alt')
                            ? o.css`color:var(--text-${e.slice(0, -4)}-contrast);${
                                  !n &&
                                  !r &&
                                  o.css`
                svg path {
                    fill: var(--text-${e.slice(0, -4)}-contrast);
                }
            `
                              }`
                            : o.css`color:var(--text-with-background);${
                                  !n &&
                                  !r &&
                                  o.css`
            svg path {
                fill: var(--text-with-background);
            }
        `
                              }`)(e, t, n, r)};${({ variant: e, $loading: t, disabled: n }) =>
                    ((e, t, n) =>
                        'tertiary' !== e || n
                            ? 'tertiary' === e && n
                                ? o.css`border:1px solid var(--support-border-disabled);`
                                : o.css`border:none;`
                            : o.css`border:1px solid var(--body-primary);${
                                  !t &&
                                  o.css`
                &:hover {
                    border: 1px solid var(--body-primary-hover);
                    outline-style: none;
                }

                &:focus {
                    border: 1px solid var(--body-primary-focus);
                    outline-style: none;
                }
            `
                              }`)(e, t, n)};${({ variant: e, icon: t, size: n }) =>
                    t &&
                    ((e, t) => {
                        const n = o.css`padding:7px;svg{margin:0;}`;
                        if ('control-icon' === e) return o.css`width:initial;height:initial;padding:0;svg{margin:0;}`;
                        switch (t) {
                            case 'xxs':
                                return o.css`width:24px;height:24px;${n}`;
                            case 'xs':
                                return o.css`width:32px;height:32px;${n}`;
                            case 's':
                                return o.css`width:40px;height:40px;${n}`;
                            case 'm':
                                return o.css`width:48px;height:48px;${n}`;
                            default:
                                return o.css`width:56px;height:56px;${n}`;
                        }
                    })(e, n)};${({
                    variant: e,
                    color: t,
                    textColor: n,
                    hoverColor: r,
                    disabled: a,
                    $loading: i,
                    useDefaultIconColor: l,
                }) =>
                    'custom' === e &&
                    ((e, t, n, r, a, i) =>
                        r
                            ? o.css`background-color:var(--body-disabled);color:var(--text-disabled);svg path{fill:var(--text-disabled);}`
                            : o.css`color:${t || 'var(--text-with-background)'};background-color:${
                                  e || 'var(--body-primary)'
                              };${
                                  !a &&
                                  !i &&
                                  o.css`
            &:hover {
                background-color: ${n || 'var(--body-primary-hover)'};
            }
            &:focus-visible {
                background-color: ${n || 'var(--body-primary-hover)'};
            }
            &:active {
                background-color: ${n || 'var(--body-primary-focus)'};
            }

            svg path {
                fill: ${t || 'var(--text-with-background)'};
            }
        `
                              }`)(t, n, r, a, i, l)};cursor:${({ disabled: e, $loading: t }) =>
                    e || t ? 'default' : 'pointer'};font-family:${(0, a.BN)('body')};font-size:${({ size: e }) =>
                    'xxs' !== e ? (0, a.yv)('body') : (0, a.yv)('caption')};font-weight:${(0, a.On)(
                    'body',
                    !1
                )};line-height:${({ size: e }) =>
                    'xxs' !== e
                        ? (0, a.Dp)('body')
                        : (0, a.Dp)(
                              'caption'
                          )};&:focus{outline:none;}&:focus-visible{outline:2px solid var(--support-focused);}`;
        },
        80031: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(16689),
                r = n(82896),
                a = n(26402);
            const i = ({ color: e, size: t }) =>
                o.createElement(
                    a.Zh,
                    { className: 'loader__spinner-wrapper', size: t },
                    o.createElement(r.Z, {
                        className: 'loader__spinner',
                        width: String(t),
                        height: String(t),
                        color: e,
                        variant: 'brand-primary',
                    })
                );
        },
        25441: (e, t, n) => {
            n.d(t, { u: () => o });
            const o = 64;
        },
        57443: (e, t, n) => {
            n.d(t, { Z: () => b });
            var o = n(16689),
                r = n.n(o),
                a = n(26402),
                i = n(80031),
                l = n(44211);
            const s = ({ header: e, subheader: t, isInControl: n, hasCustomSpinner: r }) =>
                !e || n || r
                    ? null
                    : o.createElement(
                          a.xv,
                          { className: 'loader__text' },
                          o.createElement(l.Z, { type: 'h5' }, e),
                          t ? o.createElement(l.Z, { htmlTag: 'div', variant: 'secondary' }, t) : null
                      );
            var c = n(25441),
                d = n(77299);
            const p = ({
                    show: e,
                    fullScreen: t,
                    borderRadius: n,
                    spinnerSize: o,
                    time: p,
                    onCountdownEnd: u,
                    isInControl: b,
                    message: m,
                    colorScheme: h,
                }) => {
                    const f = o !== c.u,
                        g = () =>
                            r().createElement(i.Z, {
                                size: o,
                                color: 'onColor' === h ? 'var(--text-with-background)' : 'var(--text-brand-primary)',
                            });
                    return !1 !== e
                        ? r().createElement(
                              a.pT,
                              {
                                  className: 'loader__wrapper',
                                  borderRadius: n,
                                  fullScreen: t,
                                  isInControl: b,
                                  colorScheme: h,
                              },
                              r().createElement(
                                  a.Ed,
                                  Object.assign({ className: 'loader__message-wrapper' }, m, {
                                      isInControl: b,
                                      spinnerSize: o,
                                      hasCustomSpinner: f,
                                  }),
                                  !p || f || b
                                      ? g()
                                      : r().createElement(d.Z, {
                                            time: p,
                                            withDimensions: !1,
                                            renderCountdown: (e, t) =>
                                                r().createElement(
                                                    a.vb,
                                                    null,
                                                    r().createElement(
                                                        l.Z,
                                                        { type: 'h6', variant: 'brand-primary' },
                                                        e,
                                                        ':',
                                                        t
                                                    )
                                                ),
                                            onCountdownEnd: u,
                                            renderContent: g,
                                        }),
                                  r().createElement(s, Object.assign({}, m, { isInControl: b, hasCustomSpinner: f }))
                              ),
                              r().createElement('span', { className: 'visually-hidden' }, 'Происходит загрузка')
                          )
                        : null;
                },
                u = { show: !0, fullScreen: !1, spinnerSize: c.u };
            (p.defaultProps = Object.assign({}, u)), (p.displayName = 'Loader');
            const b = p;
        },
        4624: (e, t, n) => {
            n.d(t, { p: () => i });
            var o = n(57518),
                r = n.n(o),
                a = n(25103);
            const i = r().div.withConfig({ displayName: 'Fade', componentId: '-zemu2y' })`display:flex;position:${(e) =>
                e.fullScreen
                    ? 'fixed'
                    : 'absolute'};z-index:1000;top:-1px;right:-1px;bottom:-1px;left:-1px;align-items:center;justify-content:${(e) =>
                e.isInControl ? 'flex-end' : 'center'};padding-right:${(e) =>
                e.isInControl ? `${a.mh.right}px` : '0'};background-color:${({ colorScheme: e }) =>
                'onColor' === e ? 'var(--opacity-primary)' : 'var(--opacity-white-1)'};border-radius:${(e) =>
                ((e) =>
                    e.borderRadius
                        ? `${e.borderRadius.topLeft || 0} ${e.borderRadius.topRight || 0} ${
                              e.borderRadius.bottomRight || 0
                          } ${e.borderRadius.bottomLeft || 0}`
                        : '0 0 0 0')(e)};`;
        },
        20209: (e, t, n) => {
            n.d(t, { E: () => r });
            var o = n(57518);
            const r = n.n(o)().div.withConfig({
                displayName: 'MessageContainer',
                componentId: '-13mqrot',
            })`text-align:center;background-color:${(e) =>
                !e.header || e.isInControl || e.hasCustomSpinner ? 'transparent' : 'var(--base-bg)'};width:${(e) =>
                e.hasCustomSpinner ? `${e.spinnerSize}px` : 'calc(100% - 32px)'};height:${(e) =>
                e.hasCustomSpinner ? `${e.spinnerSize}px` : 'auto'};padding:${(e) =>
                !e.header || e.isInControl || e.hasCustomSpinner
                    ? '0'
                    : '24px 32px'};border-radius:8px;box-sizing:border-box;max-width:${(e) =>
                e.width || '384'}px;box-shadow:${(e) =>
                !e.header || e.isInControl || e.hasCustomSpinner ? 'none' : '0px 8px 16px var(--shadow-primary)'};`;
        },
        46720: (e, t, n) => {
            n.d(t, { Z: () => r });
            var o = n(57518);
            const r = n.n(o)().div.withConfig({
                displayName: 'SpinnerWrapper',
                componentId: '-15wztqy',
            })`@keyframes rotation{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}display:inline-block;width:${(
                e
            ) => e.size}px;height:${(e) => e.size}px;animation:rotation 0.8s linear infinite;`;
        },
        53621: (e, t, n) => {
            n.d(t, { x: () => i });
            var o = n(57518),
                r = n.n(o),
                a = n(38851);
            const i = r().div.withConfig({
                displayName: 'Text',
                componentId: '-s51scw',
            })`margin-top:24px;& ${a.qY} + ${a.qY}{margin-top:16px;}`;
        },
        20713: (e, t, n) => {
            n.d(t, { v: () => i });
            var o = n(57518),
                r = n.n(o),
                a = n(25441);
            const i = r().div.withConfig({
                displayName: 'TimerWrapper',
                componentId: '-xagnh9',
            })`display:flex;align-items:center;justify-content:center;margin:auto;border:2px solid var(--support-brand-primary-4);border-radius:50%;box-sizing:border-box;width:${a.u}px;height:${a.u}px;`;
        },
        26402: (e, t, n) => {
            n.d(t, { Ed: () => a.E, Zh: () => o.Z, pT: () => r.p, vb: () => l.v, xv: () => i.x });
            var o = n(46720),
                r = n(4624),
                a = n(20209),
                i = n(53621),
                l = n(20713);
        },
        77299: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(16689),
                r = n(93804);
            let a = null;
            const i = ({
                time: e,
                minutesForms: t,
                secondsForms: n,
                withDimensions: i,
                renderContent: l,
                renderCountdown: s,
                onCountdownEnd: c,
            }) => {
                const [d, p] = (0, o.useState)(e || 60),
                    u = () => {
                        a && (clearInterval(a), (a = null));
                    },
                    b = () => {
                        const e = window.setInterval(() => {
                            p((e) => e - 1);
                        }, 1e3);
                        u(), (a = e);
                    };
                return (
                    (0, o.useEffect)(
                        () => (
                            b(),
                            () => {
                                u();
                            }
                        ),
                        []
                    ),
                    (0, o.useEffect)(() => {
                        e !== d && (p(e), u(), b());
                    }, [e]),
                    (0, o.useEffect)(() => {
                        d <= 0 && (c && c(), u());
                    }, [d]),
                    d >= 1 && s
                        ? s(
                              (() => {
                                  const e = Math.floor((d / 60) % 60),
                                      n = (0, r.cQ)(e, t || ['минуту', 'минуты', 'минут']);
                                  return 0 === e && i ? null : i ? `${e} ${n}` : `${e}`;
                              })(),
                              (() => {
                                  const e = Math.floor(d % 60),
                                      t = (0, r.cQ)(e, n || ['секунду', 'секунды', 'секунд']);
                                  return 0 === e && i ? null : i ? `${e} ${t}` : (0, r.vL)(e);
                              })()
                          )
                        : l
                        ? l()
                        : null
                );
            };
            (i.defaultProps = Object.assign(
                {},
                {
                    withDimensions: !0,
                    minutesForms: ['минуту', 'минуты', 'минут'],
                    secondsForms: ['секунду', 'секунды', 'секунд'],
                }
            )),
                (i.displayName = 'RevealingTimer');
            const l = i;
        },
        19634: (e, t, n) => {
            n.d(t, { Z: () => $ });
            var o = n(16689),
                r = n.n(o),
                a = n(59003),
                i = n.n(a),
                l = n(57518),
                s = n.n(l),
                c = n(38549),
                d = n(25103);
            const p = (e, t) => {
                    if (e.disabled) return 'var(--body-disabled)';
                    switch (e.variant) {
                        case 'success':
                            return e.withHover && t ? 'var(--body-success-alt-hover)' : 'var(--body-success-alt)';
                        case 'warning':
                            return e.withHover && t ? 'var(--body-warning-alt-hover)' : 'var(--body-warning-alt)';
                        case 'error':
                            return e.withHover && t ? 'var(--body-error-alt-hover)' : 'var(--body-error-alt)';
                        case 'brand-primary':
                            return e.withHover && t ? 'var(--body-primary-hover)' : 'var(--body-primary)';
                        case 'brand-secondary':
                            return e.withHover && t
                                ? 'var(--support-brand-secondary-2)'
                                : 'var(--support-brand-secondary-1)';
                        default:
                            return e.withHover && t ? 'var(--body-transparent-hover)' : 'var(--base-bg)';
                    }
                },
                u = s().div.withConfig({
                    displayName: 'TagWrapper',
                    componentId: '-1bsuqdx',
                })`display:inline-block;border:${({ variant: e }) =>
                    'brand-secondary' === e || 'brand-primary' === e ? 'none' : '1px solid black'};border-color:${(e) =>
                    ((e) => {
                        if (e.disabled) return 'var(--support-border-alt)';
                        switch (e.variant) {
                            case 'success':
                                return 'var(--support-green-2)';
                            case 'warning':
                                return 'var(--support-orange-2)';
                            case 'error':
                                return 'var(--support-red-2)';
                            default:
                                return 'var(--support-border)';
                        }
                    })(e)};border-radius:${(e) =>
                    ((e) => ('l' === e.size || 'm' === e.size ? '8px' : 'var(--rounding-interactive-ds-full)'))(
                        e
                    )};padding:${(e) =>
                    ((e) =>
                        's' === e.size
                            ? e.iconOnly
                                ? '3px'
                                : '3px 7px'
                            : 'm' === e.size
                            ? e.iconOnly
                                ? '5px'
                                : '5px 11px'
                            : 'l' === e.size
                            ? e.iconOnly
                                ? '9px'
                                : '9px 15px'
                            : e.iconOnly
                            ? '2px'
                            : '0 7px')(e)};cursor:${(e) =>
                    e.clickable ? 'pointer' : 'default'};user-select:none;background-color:${(e) =>
                    p(
                        e
                    )};box-sizing:border-box;transition-property:color,background-color,border-color;transition-duration:${
                    d.zn
                };transition-timing-function:ease-in-out;margin-top:${(e) => {
                    var t;
                    return (null === (t = e.margins) || void 0 === t ? void 0 : t.top) || 0;
                }}px;margin-bottom:${(e) => {
                    var t;
                    return (null === (t = e.margins) || void 0 === t ? void 0 : t.bottom) || 0;
                }}px;margin-left:${(e) => {
                    var t;
                    return (null === (t = e.margins) || void 0 === t ? void 0 : t.left) || 0;
                }}px;margin-right:${(e) => {
                    var t;
                    return (null === (t = e.margins) || void 0 === t ? void 0 : t.right) || 0;
                }}px;&:hover{background-color:${(e) => p(e, !0)};}${c.im}:hover &.tag__variant-${(e) =>
                    e.variant}{background-color:${(e) =>
                    p(Object.assign(Object.assign({}, e), { withHover: !0 }), !0)};}`;
            var b = n(38851);
            const m = (e) => (e.label ? ('s' === e.size || 'xs' === e.size ? '4px' : '8px') : '0'),
                h = (e) =>
                    !e.iconOnly || ('s' !== e.size && 'xs' !== e.size) ? (0, b.Dp)(e.type) : (0, b.Dp)('micro'),
                f = s().div.withConfig({
                    displayName: 'CustomIconWrapper',
                    componentId: '-sbptn5',
                })`display:flex;align-items:center;justify-content:center;width:${(e) => h(e)};height:${(e) =>
                    h(e)};min-width:${(e) => (0, b.Dp)(e.type)};min-height:${(e) => (0, b.Dp)(e.type)};margin-right:${(
                    e
                ) => m(e)};`,
                g = s().div.withConfig({
                    displayName: 'ContentWrapper',
                    componentId: '-1n5n970',
                })`display:flex;align-items:center;`,
                v = s().div.withConfig({ displayName: 'SubLabelWrapper', componentId: '-vdkyb0' })`margin-left:${(e) =>
                    's' === e.size || 'xs' === e.size ? '4px' : '8px'};display:flex;align-items:center;`,
                y = s().div.withConfig({
                    displayName: 'CloseIconWrapper',
                    componentId: '-16sv4e2',
                })`display:flex;align-items:center;justify-content:center;width:${(e) => (0, b.Dp)(e.type)};height:${(
                    e
                ) => (0, b.Dp)(e.type)};min-width:${(e) => (0, b.Dp)(e.type)};min-height:${(e) =>
                    (0, b.Dp)(e.type)};margin-left:${(e) => m(e)};cursor:${(e) =>
                    e.disabled ? 'default' : 'pointer'};`;
            var x = n(44211),
                w = n(12846);
            const k = ({
                id: e,
                className: t,
                label: n,
                subLabel: a,
                Icon: l,
                size: s,
                variant: c,
                disabled: d,
                onLabelClick: p,
                onCloseIconClick: b,
                margins: m,
                locked: h,
            }) => {
                const k = i()('tag', `tag__variant-${c}`, t),
                    $ = () =>
                        d
                            ? 'disabled'
                            : 'brand-primary' === c
                            ? 'with-background'
                            : 'brand-secondary' === c
                            ? 'brand-primary'
                            : 'success' === c
                            ? 'success-contrast'
                            : 'warning' === c
                            ? 'warning-contrast'
                            : 'error' === c
                            ? 'error-contrast'
                            : c,
                    C = (0, o.useMemo)(() => ('s' === s ? 'micro' : 'body'), [s]),
                    E = (0, o.useMemo)(
                        () =>
                            d
                                ? 'disabled'
                                : 'primary' === c
                                ? 'secondary'
                                : 'brand-primary' === c
                                ? 'with-background'
                                : 'brand-secondary' === c
                                ? 'brand-primary'
                                : c,
                        [c]
                    ),
                    O = !n && Boolean(l);
                return r().createElement(
                    u,
                    {
                        id: String(e),
                        className: k,
                        size: s,
                        disabled: d,
                        variant: c,
                        iconOnly: O,
                        margins: m,
                        clickable: !d && !h && Boolean(p),
                        withHover: !d && !h && (Boolean(p) || (!O && Boolean(b))),
                        onClick: (t) => {
                            t.preventDefault(), t.stopPropagation(), d || h || !p || p(e);
                        },
                    },
                    r().createElement(
                        g,
                        null,
                        l
                            ? r().createElement(
                                  f,
                                  { className: 'tag__icon', type: C, iconOnly: O, size: s, label: n },
                                  r().createElement(l, { variant: $(), width: '100%', height: '100%' })
                              )
                            : null,
                        r().createElement(x.Z, { className: 'tag__label', variant: $(), type: C }, n),
                        n && a
                            ? r().createElement(
                                  v,
                                  { className: 'tag__sublabel', size: s },
                                  r().createElement(x.Z, { type: C, variant: E }, a)
                              )
                            : null,
                        O || Boolean(p) || !b
                            ? null
                            : r().createElement(
                                  y,
                                  {
                                      'className': 'tag__remove-btn',
                                      'onClick': (t) => {
                                          t.preventDefault(), t.stopPropagation(), d || h || !b || b(e);
                                      },
                                      'type': C,
                                      'size': s,
                                      'disabled': d || h,
                                      'label': n,
                                      'aria-label': 'Закрыть',
                                      'tabIndex': 0,
                                      'onKeyDown': (t) => {
                                          ('Enter' !== t.key && ' ' !== t.key) ||
                                              (t.preventDefault(), t.stopPropagation(), d || h || !b || b(e));
                                      },
                                  },
                                  r().createElement(w.Z, {
                                      variant: $(),
                                      width: 'xs' === s ? '75%' : '100%',
                                      height: 'xs' === s ? '75%' : '100%',
                                  })
                              )
                    )
                );
            };
            (k.defaultProps = Object.assign({}, { variant: 'primary', size: 'xs', disabled: !1, locked: !1 })),
                (k.displayName = 'Tag');
            const $ = k;
        },
        67027: (e, t, n) => {
            n.d(t, { Z: () => w });
            var o = n(16689),
                r = n.n(o),
                a = n(18910);
            const i = 16,
                l = 8.69,
                s = () => ({ tooltipContentPosition: 'top', style: { top: 0, left: i, width: 'auto' } });
            var c = n(66405),
                d = n.n(c),
                p = n(44211),
                u = n(57518),
                b = n.n(u),
                m = n(25103);
            const h = b().div.withConfig({ displayName: 'StyledContent', componentId: '-1x11mun' })(
                    ({ isOpen: e, isDelayedOpen: t }) =>
                        `\n    visibility: ${t ? 'visible' : 'hidden'};\n    opacity: ${
                            e ? '1' : '0'
                        };\n\n    transition-duration: ${
                            m.zn
                        };\n    transition-property: opacity;\n    transition-timing-function: ease-in-out;\n\n    background-color: var(--base-bg);\n\n    position: absolute;\n    z-index: 400;\n    min-width: 100px;\n    max-width: 234px;\n    border-radius: 4px;\n    padding: 4px 8px;\n    box-shadow: 0px 8px 16px var(--shadow-primary);\n\n    &:focus-visible {\n        visibility: visible;\n        opacity: 1;\n    }\n\n    @media (prefers-reduced-motion: reduce) {\n        transition: none;\n    }\n    `
                ),
                f = b().span.withConfig({ displayName: 'StyledTriangle', componentId: '-1x45f84' })(
                    ({ isOpen: e, isDelayedOpen: t, position: n }) =>
                        `\n    visibility: ${
                            t ? 'visible' : 'hidden'
                        };\n    background-color: var(--base-bg);\n\n    position: absolute;\n    z-index: 401;\n\n    opacity: ${
                            e ? '1' : '0'
                        };\n\n    transition-duration: ${
                            m.vi
                        };\n    transition-property: opacity;\n    transition-timing-function: ease-in-out;\n\n    ${((
                            e
                        ) => {
                            switch (e) {
                                case 'right':
                                    return 'top: calc(50% - 8.69px/2); left: 25px;';
                                case 'bottom':
                                    return 'top: 25px; left: calc(50% - 8.69px/2);';
                                default:
                                    return 'top: -13px; left: calc(50% - 8.69px/2);';
                            }
                        })(
                            n
                        )}\n\n    width: 8.69px;\n    height: 8.69px;\n\n    transform: rotate(-45deg);\n\n    @media (prefers-reduced-motion: reduce) {\n        transition: none;\n    }\n    `
                ),
                g = b().div.withConfig({ displayName: 'StyledTooltip', componentId: '-nxppt1' })(
                    () =>
                        '\n        position: relative; \n        display: flex;\n        margin: auto 0;\n        width: 20px;\n        height: 20px;\n\n        &:focus {\n            outline: none;\n        }\n    \n        &:focus-visible {\n            outline: 2px solid var(--support-focused);\n            border: none;\n            border-radius: 10px;\n        }\n'
                ),
                v = r().forwardRef((e, t) => {
                    const { isOpen: n, isDelayedOpen: o, text: a, style: i } = e;
                    return d().createPortal(
                        r().createElement(
                            h,
                            Object.assign(
                                { ref: t, className: 'tooltip__message', style: i, isOpen: n, isDelayedOpen: o },
                                e
                            ),
                            'string' == typeof a ? r().createElement(p.Z, { type: 'caption' }, a) : a
                        ),
                        document.body
                    );
                });
            var y = n(93804);
            const x = (e) => {
                const { color: t, text: n, isOpen: c, onClick: d, isTableCellMode: p } = e,
                    [u, b] = (0, o.useState)(!1),
                    [m, h] = (0, o.useState)(s()),
                    [x, w] = (0, o.useState)(s()),
                    k = (0, y.dN)(u, 500),
                    $ = (0, o.useRef)(null),
                    C = (0, o.useRef)(),
                    E = (0, o.useCallback)(() => {
                        p ? w(s()) : h(s());
                    }, [p]),
                    O = (0, o.useCallback)(() => {
                        p
                            ? w(
                                  (({ icon: e, tooltip: t }) => {
                                      const n = e.getBoundingClientRect(),
                                          o = t.getBoundingClientRect(),
                                          r = o.height,
                                          a = o.width,
                                          s = n.height,
                                          c = n.width,
                                          d = document.body.offsetWidth,
                                          p = document.documentElement.clientHeight;
                                      let u;
                                      const b =
                                              p - n.bottom < r
                                                  ? Math.ceil(window.pageYOffset + n.top - r - l)
                                                  : Math.floor(window.pageYOffset + n.top + l + s),
                                          m = p - n.bottom < r ? 'top' : 'bottom';
                                      (u = n.left + c / 2 - a / 2), u + a > d - i && (u = d - i - a), u < i && (u = i);
                                      const h = a >= d - 32 ? Math.floor(d - 32) : '';
                                      return {
                                          tooltipContentPosition: m,
                                          style: { top: b, left: Math.floor(u), width: h },
                                      };
                                  })({ icon: C.current, tooltip: $.current })
                              )
                            : h(
                                  (({ icon: e, tooltip: t }) => {
                                      const n = e.getBoundingClientRect(),
                                          o = t.getBoundingClientRect(),
                                          r = o.height,
                                          a = o.width,
                                          s = n.height,
                                          c = n.width,
                                          d = document.body.offsetWidth,
                                          p = document.documentElement.clientHeight;
                                      let u, b, m;
                                      d - n.right - i > a && n.top > r && p - n.bottom > r / 2
                                          ? ((u = window.pageYOffset + n.top + s / 2 - r / 2),
                                            (b = window.pageXOffset + n.left + c + l),
                                            (m = 'right'))
                                          : ((u =
                                                n.top > r
                                                    ? Math.ceil(window.pageYOffset + n.top - r - l)
                                                    : Math.floor(window.pageYOffset + n.top + l + s)),
                                            (m = n.top > r ? 'top' : 'bottom'),
                                            (b = n.left + c / 2 - a / 2),
                                            b + a > d - i && (b = d - i - a),
                                            b < i && (b = i));
                                      const h = a >= d - 32 ? Math.floor(d - 32) : '';
                                      return {
                                          tooltipContentPosition: m,
                                          style: { top: u, left: Math.floor(b), width: h },
                                      };
                                  })({ icon: C.current, tooltip: $.current })
                              );
                    }, [p]),
                    S = () => {
                        b(!1);
                    },
                    I = (0, o.useCallback)(() => {
                        O(), b(!0);
                    }, [O]);
                (0, o.useEffect)(() => {
                    !0 === c && I(), !1 === c && S();
                }, [c, I]),
                    (0, o.useEffect)(() => {
                        k ? O() : E();
                    }, [k, O, E]);
                const N = (e) => {
                        e.preventDefault(), e.stopPropagation(), u || I();
                    },
                    j = (e) => {
                        e.preventDefault(), e.stopPropagation(), u && S();
                    };
                return p
                    ? r().createElement(
                          r().Fragment,
                          null,
                          r().createElement(
                              g,
                              {
                                  'tabIndex': 0,
                                  'className': 'tooltip',
                                  'onMouseEnter': N,
                                  'onMouseLeave': j,
                                  'onFocus': I,
                                  'onBlur': S,
                                  'role': 'tooltip',
                                  'aria-label': 'Всплывающая подсказка',
                                  'aria-describedby': 'tooltip-hint',
                              },
                              r().createElement(v, { ref: $, text: n, isDelayedOpen: k, isOpen: u, style: x.style }),
                              r().createElement(f, {
                                  'isOpen': u,
                                  'isDelayedOpen': k,
                                  'position': x.tooltipContentPosition,
                                  'aria-hidden': 'true',
                              }),
                              r().createElement(a.Z, { ref: C, color: 'transparent', className: 'tooltip__icon' })
                          ),
                          r().createElement('span', { id: 'tooltip-hint', className: 'visually-hidden' }, n)
                      )
                    : r().createElement(
                          r().Fragment,
                          null,
                          r().createElement(
                              g,
                              {
                                  'tabIndex': 0,
                                  'className': 'tooltip',
                                  'onMouseEnter': N,
                                  'onMouseLeave': j,
                                  'onClick': (t) => {
                                      t.preventDefault(), t.stopPropagation(), d && 'function' == typeof d && d(e);
                                  },
                                  'onFocus': I,
                                  'onBlur': S,
                                  'role': 'tooltip',
                                  'aria-label': 'Всплывающая подсказка',
                                  'aria-describedby': 'tooltip-hint',
                              },
                              r().createElement(v, { ref: $, isDelayedOpen: k, text: n, isOpen: u, style: m.style }),
                              r().createElement(f, {
                                  'isOpen': u,
                                  'isDelayedOpen': k,
                                  'position': m.tooltipContentPosition,
                                  'aria-hidden': 'true',
                              }),
                              r().createElement(a.Z, { ref: C, color: t, className: 'tooltip__icon' })
                          ),
                          r().createElement('span', { id: 'tooltip-hint', className: 'visually-hidden' }, n)
                      );
            };
            (x.defaultProps = Object.assign({}, { color: 'var(--text-tertiary)', isOpen: !1, isTableCellMode: !1 })),
                (x.displayName = 'Tooltip');
            const w = x;
        },
        44211: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(16689),
                r = n.n(o),
                a = n(59003),
                i = n.n(a),
                l = n(38851);
            const s = ({
                type: e,
                variant: t,
                children: n,
                color: o,
                className: a,
                htmlTag: s,
                family: c,
                size: d,
                height: p,
                bold: u,
            }) => {
                const b = i()('typography', a),
                    m = ((e, t) => t || (e.startsWith('h') ? e : 'span'))(e, s);
                return r().createElement(
                    l.qY,
                    { as: m, className: b, type: e, variant: t, color: o, family: c, size: d, height: p, bold: u },
                    n
                );
            };
            (s.defaultProps = Object.assign({}, { type: 'body', variant: 'primary', bold: !1 })),
                (s.displayName = 'Typography');
            const c = s;
        },
        38851: (e, t, n) => {
            n.d(t, { BN: () => a, Dp: () => s, On: () => i, qY: () => d, yv: () => l });
            var o = n(78837),
                r = n(57518);
            const a = (e) => (e.startsWith('h') ? 'Gerbera, sans-serif' : 'Inter, sans-serif'),
                i = (e, t) => (!e.startsWith('h') && t ? '700' : 'subtitle' === e || e.startsWith('h') ? '500' : '400'),
                l = (e, t) => {
                    switch (e) {
                        case 'h1':
                            return t ? '36px' : '44px';
                        case 'h2':
                            return t ? '32px' : '36px';
                        case 'h3':
                            return t ? '26px' : '32px';
                        case 'h4':
                            return t ? '20px' : '28px';
                        case 'h5':
                            return t ? '18px' : '24px';
                        case 'h6':
                            return t ? '16px' : '20px';
                        case 'subtitle':
                            return t ? '16px' : '17px';
                        case 'caption':
                            return '13px';
                        case 'micro':
                            return '11px';
                        default:
                            return '15px';
                    }
                },
                s = (e, t) => {
                    switch (e) {
                        case 'h1':
                            return t ? '40px' : '48px';
                        case 'h2':
                            return '40px';
                        case 'h3':
                            return t ? '30px' : '36px';
                        case 'h4':
                            return t ? '24px' : '32px';
                        case 'h5':
                            return t ? '22px' : '28px';
                        case 'h6':
                        case 'subtitle':
                            return t ? '20px' : '24px';
                        case 'caption':
                            return '16px';
                        case 'micro':
                            return t ? '13px' : '14px';
                        default:
                            return '20px';
                    }
                },
                c = (e, t) => t || `var(--text-${e})`,
                d = n.n(r)().span.withConfig({ displayName: 'StyledText', componentId: '-1npvns3' })(
                    ({ type: e, color: t, family: n, size: r, height: d, variant: p, bold: u }) => {
                        if ('custom' !== e)
                            return `\n                font-family: ${a(
                                e
                            )};\n                font-style: normal;\n                font-weight: ${i(
                                e,
                                u
                            )};\n                font-size: ${l(e, !0)};\n                line-height: ${s(
                                e,
                                !0
                            )};\n                color: ${c(
                                p,
                                t
                            )};\n\n                b {\n                    font-weight: 700;\n                }\n\n                b& {\n                    font-weight: 700;\n                } \n\n                @media (min-width: ${
                                o.breakpoints.tablet
                            }px) {\n                    font-size: ${l(e)};\n                    line-height: ${s(
                                e
                            )};\n                }\n            `;
                        let b = null;
                        Number.isNaN(Number(r)) ? r && 'string' == typeof r && (b = r) : (b = `${r}px`);
                        let m = null;
                        return (
                            Number.isNaN(Number(d)) ? d && 'string' == typeof d && (m = d) : (m = `${d}px`),
                            `\n            font-family: ${
                                n || a('body')
                            };\n            font-style: normal;\n            font-weight: ${i(
                                'body',
                                u
                            )};\n            font-size: ${b || l('body')};\n            line-height: ${
                                m || s('body')
                            };\n            color: ${c(
                                p,
                                t
                            )};\n\n            b {\n                font-weight: 700;\n            }\n\n            b& {\n                font-weight: 700;\n            } \n    `
                        );
                    }
                );
        },
        39423: (e, t, n) => {
            function o(e) {
                return e.filter((e) => '' !== e).length > 1 ? e.join(', ') : e;
            }
            n.d(t, { Sc: () => o, mk: () => r });
            const r = (e, t) => (!t && e ? 'var(--text-error)' : t ? 'var(--text-disabled)' : 'var(--text-tertiary)');
            var a;
            !(function (e) {
                (e.RUR = 'RUR'), (e.USD = 'USD'), (e.EUR = 'EUR'), (e.KZT = 'KZT');
            })(a || (a = {})),
                a.USD,
                a.RUR,
                a.EUR,
                a.KZT;
        },
        90082: (e, t, n) => {
            n.d(t, { K: () => i });
            var o = n(57518),
                r = n.n(o),
                a = n(44211);
            const i = r()(a.Z).withConfig({
                displayName: 'BasicControlCaption',
                componentId: '-1tzf38w',
            })`display:block;${({ hasTooltip: e }) => (e ? 'margin-right: 8px' : '')};`;
        },
        10210: (e, t, n) => {
            n.d(t, { W: () => i });
            var o = n(57518),
                r = n.n(o),
                a = n(25103);
            const i = r().div.withConfig({
                displayName: 'ButtonWrapper',
                componentId: '-14la1jt',
            })`display:flex;justify-content:center;align-items:${({ alignItems: e }) => e};padding-right:${
                a.mh.right
            }px;cursor:default;& button:not(:first-child),& > div:not(:first-child){margin-left:8px;white-space:nowrap;}`;
        },
        71199: (e, t, n) => {
            n.d(t, { v: () => r });
            var o = n(57518);
            const r = n.n(o)().div.withConfig({
                displayName: 'ContentWrapper',
                componentId: '-cgj24m',
            })`display:block;flex-grow:1;opacity:${(e) =>
                e.focus || e.delayedFocus || e.hasValue || !e.caption || e.isRangeInput ? '1' : '0'};pointer-events:${(
                e
            ) => (e.focus || e.hasValue || !e.caption || e.isRangeInput ? 'all' : 'none')};max-width:${(e) =>
                ((e) => {
                    const { tooltip: t, button: n, showClearButton: o, hasValue: r } = e,
                        a = o && r,
                        i = !!n || !!t;
                    return a && i ? 'calc(100% - 63px)' : a || i ? 'calc(100% - 35px)' : '100%';
                })(e)};`;
        },
        43408: (e, t, n) => {
            n.d(t, { X: () => l });
            var o = n(57518),
                r = n.n(o),
                a = n(25103);
            const i = (e, t) =>
                    e.disabled && !e.isRangeInput
                        ? 'var(--body-disabled)'
                        : e.disabled || e.locked || !e.hasErrors
                        ? !t || e.focus || e.disabled
                            ? 'var(--base-bg)'
                            : 'var(--body-transparent-hover)'
                        : 'var(--body-error-alt)',
                l = r().div.withConfig({ displayName: 'ControlBox', componentId: '-1m4so28' })(
                    (e) => o.css`
        display: flex;
        position: relative;

        width: 100%;
        ${e.hideMultiLineLabels ? 'height: 56px' : ''};

        box-sizing: border-box;
        border-radius: ${e.isRangeInput ? '8px 8px 0 0' : '16px'};

        color: var(--text-primary);

        padding: 0;

        border: 1px solid;
        border-color: ${((e) =>
            e.disabled
                ? 'var(--support-border-alt)'
                : e.disabled || e.locked || !e.hasErrors
                ? e.disabled || e.locked || 'success' !== e.status
                    ? e.disabled || e.locked || !e.focus
                        ? 'var(--support-border)'
                        : 'var(--body-primary)'
                    : 'var(--body-success)'
                : 'var(--body-error)')(e)};

        background-color: ${i(e)};

        pointer-events: ${e.locked ? 'none' : 'all'};

        cursor: ${e.cursor};

        transition-duration: ${a.zn};
        transition-property: background-color, border-color;
        transition-timing-function: ease-in-out;

        &:hover {
            background-color: ${i(e, !0)};
        }
    `
                );
        },
        90079: (e, t, n) => {
            n.d(t, { E: () => r });
            var o = n(57518);
            const r = n.n(o)().div.withConfig({
                displayName: 'ControlTopAnchor',
                componentId: '-1ay60rv',
            })`position:absolute;top:0;left:0;width:100%;height:0;margin:auto;`;
        },
        30438: (e, t, n) => {
            n.d(t, { k: () => i });
            var o = n(57518),
                r = n.n(o),
                a = n(38851);
            const i = r().div.withConfig({ displayName: 'Hint', componentId: '-whxc8c' })(
                ({ hasErrors: e, hintMargin: t, variant: n }) =>
                    `\n  display: flex;\n\n  margin-top: ${
                        t ? `${t}px` : '4px'
                    };\n  align-items: center;\n  font-size: ${(0, a.yv)('caption')};\n  line-height: ${(0, a.Dp)(
                        'caption'
                    )};\n\n  color: ${((e, t) =>
                        t ? 'var(--text-error)' : 'onColor' === e ? 'var(--text-tertiary)' : 'var(--text-secondary)')(
                        n,
                        e
                    )};\n\n  & svg {\n        width: 15px;\n        height: 15px;\n\n        min-width: 15px;\n        min-height: 15px;\n\n        margin-right: 4px;\n\n        align-self: flex-start;\n        margin-top: 3px;\n\n        & path {\n            fill: var(--text-error);\n        }\n  };\n`
            );
        },
        59292: (e, t, n) => {
            n.d(t, { _: () => s });
            var o = n(57518),
                r = n.n(o),
                a = n(38851),
                i = n(25103);
            const l = (e, t, n) =>
                    e ? 'var(--text-disabled)' : !t && n ? 'var(--text-error-contrast)' : 'var(--text-secondary)',
                s = r().label.withConfig({
                    displayName: 'Label',
                    componentId: '-lcm44f',
                })(({ focus: e, locked: t, hasValue: n, disabled: o, hasErrors: r }) => ({
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    padding: 0,
                    fontSize: e || n ? (0, a.yv)('caption') : (0, a.yv)('body'),
                    fontWeight: (0, a.On)('body', !1),
                    lineHeight: e || n ? (0, a.Dp)('caption') : (0, a.Dp)('body'),
                    color: l(o, t, r),
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: 'calc(100% - 30px)',
                    whiteSpace: 'nowrap',
                    transform: e || n ? 'translate(16px, 8px)' : 'translate(16px, 18px)',
                    transformOrigin: 'top left',
                    pointerEvents: 'none',
                    transitionDuration: i.zn,
                    transitionProperty: 'all',
                    transitionTimingFunction: 'ease-in-out',
                }));
        },
        97395: (e, t, n) => {
            n.d(t, { p: () => r });
            var o = n(57518);
            const r = n.n(o)().div.withConfig({
                displayName: 'TooltipWrapper',
                componentId: '-1tham81',
            })`display:flex;justify-content:center;align-items:center;`;
        },
        17567: (e, t, n) => {
            n.d(t, { i: () => r });
            var o = n(57518);
            const r = n.n(o)().div.withConfig({
                displayName: 'Wrapper',
                componentId: '-dto7mj',
            })`display:block;position:relative;flex-grow:1;font-family:Inter,sans-serif;pointer-events:${(e) =>
                e.locked ? 'none' : 'all'};`;
        },
        38549: (e, t, n) => {
            n.d(t, {
                Ev: () => p.E,
                KL: () => d.K,
                W4: () => s.W,
                X6: () => o.X,
                __: () => r._,
                im: () => a.i,
                kW: () => i.k,
                pf: () => c.p,
                vs: () => l.v,
            });
            var o = n(43408),
                r = n(59292),
                a = n(17567),
                i = n(30438),
                l = n(71199),
                s = n(10210),
                c = n(97395),
                d = n(90082),
                p = n(90079);
        },
        48755: (e, t, n) => {
            n.d(t, { z: () => o });
            const o = (e, t) => t || (e ? `${e}-control` : '');
        },
        91043: (e, t, n) => {
            n.d(t, { Z: () => z });
            var o = n(16689),
                r = n.n(o),
                a = n(59003),
                i = n.n(a),
                l = n(70223),
                s = n(61758),
                c = n(38549),
                d = n(39423),
                p = n(57443),
                u = n(67027),
                b = n(57518),
                m = n.n(b);
            const h = m().div.withConfig({ displayName: 'BasicControlBox', componentId: '-1bjcrjt' })`${({
                    isRangeInput: e,
                }) => (e ? '' : 'display: flex; position: relative;')}`,
                f = m().div.withConfig({
                    displayName: 'CaptionContainer',
                    componentId: '-1p2veon',
                })`display:flex;margin-bottom:${({ captionMargin: e }) => e}px;`;
            var g = n(48755);
            const v = ({
                hidden: e,
                locked: t,
                name: n,
                children: o,
                className: a,
                errors: l,
                errorIcon: s,
                tooltip: b,
                variant: m,
                caption: v,
                showTooltip: y,
                onTooltipClick: x,
                hint: w,
                disabled: k,
                hintMargin: $,
                id: C,
                isRangeInput: E,
                withSubcaption: O,
            }) => {
                const S = l && l.length > 0,
                    I = i()('control__wrapper', { control_error: S }, a),
                    N = () => (b ? r().createElement(u.Z, { text: b, isOpen: y, onClick: x }) : null);
                return e
                    ? null
                    : r().createElement(
                          c.im,
                          { id: (0, g.z)(n, C) },
                          v &&
                              r().createElement(
                                  f,
                                  { captionMargin: O ? 4 : 16 },
                                  v
                                      ? r().createElement(
                                            c.KL,
                                            {
                                                htmlTag: 'p',
                                                type: 'subtitle',
                                                variant: 'onColor' === m ? 'with-background' : 'primary',
                                                hasTooltip: Boolean(b),
                                            },
                                            v
                                        )
                                      : null,
                                  N()
                              ),
                          r().createElement(h, { 'isRangeInput': E, 'className': I, 'field-name': n }, o, !v && N()),
                          r().createElement(p.Z, { show: t, colorScheme: m, spinnerSize: 20 }),
                          (() => {
                              if (!t && !k && S) {
                                  const e = (0, d.Sc)([...l]).toString();
                                  if (e)
                                      return r().createElement(
                                          c.kW,
                                          { className: 'control__hint', hintMargin: $, variant: m, hasErrors: !0 },
                                          s && s,
                                          e
                                      );
                              }
                              return w
                                  ? r().createElement(
                                        c.kW,
                                        { className: 'control__hint', variant: m, hintMargin: $ },
                                        w
                                    )
                                  : null;
                          })()
                      );
            };
            v.defaultProps = { isRangeInput: !1, hidden: !1, locked: !1, variant: 'default' };
            const y = v;
            var x = n(38851);
            const w = m().div.withConfig({
                    displayName: 'CheckboxContainer',
                    componentId: '-1xiin1v',
                })`display:flex;position:relative;padding-left:${(e) =>
                    'toggle' === e.variant
                        ? 44
                        : 28}px;margin:0;border:none;outline:none;background:none;min-height:${(0, x.Dp)(
                    'body'
                )};text-decoration:none;line-height:${(0, x.Dp)(
                    'body'
                )};white-space:nowrap;-webkit-touch-callout:none;user-select:none;-webkit-tap-highlight-color:transparent;`,
                k = m().input.withConfig({
                    displayName: 'Input',
                    componentId: '-6gyl24',
                })`display:inline-block;position:absolute;z-index:-1;top:0;left:0;width:${(e) =>
                    'toggle' === e.variant
                        ? 36
                        : 20}px;height:20px;margin:0;padding:0;border:none;outline:none;box-shadow:none;background:transparent;opacity:1;appearance:none;cursor:${(
                    e
                ) =>
                    !e.disabled &&
                    'pointer'};}&:focus{outline:none;}&:focus-visible{outline:2px solid var(--support-focused);border-radius:4px;}`;
            var $ = n(44211);
            const C = m()($.Z).withConfig({ displayName: 'Text', componentId: '-es277z' })`margin:0;padding-right:${(
                e
            ) => e.hasTooltip && '8px'};text-align:left;white-space:normal;cursor:${(e) => !e.disabled && 'pointer'};`;
            var E = n(25103);
            const O = (e, t, n) =>
                    e.disabled
                        ? 'var(--body-disabled)'
                        : !e.checked && Array.isArray(e.errors) && e.errors.length
                        ? 'default' === e.colorScheme
                            ? 'var(--body-error-alt)'
                            : 'var(--body-primary)'
                        : t
                        ? e.checked && !e.disabled
                            ? 'default' === e.colorScheme
                                ? 'var(--body-primary-hover)'
                                : 'var(--body-tertiary-hover)'
                            : 'default' === e.colorScheme
                            ? 'var(--body-transparent-hover)'
                            : 'var(--body-tertiary-hover)'
                        : n
                        ? e.checked && !e.disabled
                            ? 'default' === e.colorScheme
                                ? 'var(--body-primary-focus)'
                                : 'var(--body-tertiary-focus)'
                            : 'default' === e.colorScheme
                            ? 'var(--body-transparent-focus)'
                            : 'var(--body-tertiary-focus)'
                        : e.checked && !e.disabled
                        ? 'default' === e.colorScheme
                            ? 'var(--body-primary)'
                            : 'var(--body-tertiary)'
                        : 'default' === e.colorScheme
                        ? 'var(--base-bg)'
                        : 'var(--body-primary)',
                S = m().span.withConfig({
                    displayName: 'CheckboxIcon',
                    componentId: '-42l89b',
                })`display:flex;justify-content:center;align-items:center;position:absolute;z-index:1;top:0;left:0;margin:0;padding:0;width:20px;height:20px;border-radius:4px;box-sizing:border-box;border:${(
                    e
                ) =>
                    `1px solid ${((e) =>
                        e.disabled
                            ? e.checked
                                ? 'var(--body-disabled)'
                                : 'var(--support-border-alt)'
                            : Array.isArray(e.errors) && e.errors.length
                            ? 'var(--body-error)'
                            : e.checked
                            ? 'default' === e.colorScheme
                                ? 'var(--body-primary)'
                                : 'var(--body-tertiary)'
                            : 'var(--support-border)')(e)}`};background-color:${(e) => O(e)};transition-duration:${
                    E.zn
                };transition-property:background-color,border-color;transition-timing-function:ease-in-out;cursor:${(
                    e
                ) => !e.disabled && 'pointer'};&:hover{background-color:${(e) => O(e, !0)};}&:focus{background-color:${(
                    e
                ) => O(e, !1, !0)};}& svg{transform:${({ checked: e }) =>
                    e ? 'scale(1)' : 'scale(0)'};transition-duration:${
                    E.zn
                };transition-property:transform;transition-timing-function:ease-in-out;& path{transition-duration:${
                    E.zn
                };transition-property:fill;transition-timing-function:ease-in-out;fill:${(e) =>
                    ((e) =>
                        e.checked && 'default' === e.colorScheme
                            ? e.disabled
                                ? 'var(--text-disabled)'
                                : 'var(--text-with-background)'
                            : e.checked && 'onColor' === e.colorScheme
                            ? e.disabled
                                ? 'var(--text-disabled)'
                                : 'var(--text-primary)'
                            : 'transparent')(e)};}}`,
                I = (e, t) =>
                    e.disabled
                        ? 'var(--body-disabled)'
                        : t
                        ? e.checked && !e.disabled
                            ? 'default' === e.colorScheme
                                ? 'var(--body-primary-hover)'
                                : 'var(--body-tertiary-hover)'
                            : 'default' === e.colorScheme
                            ? 'var(--base-5)'
                            : 'var(--body-tertiary-hover)'
                        : e.checked && !e.disabled
                        ? 'default' === e.colorScheme
                            ? 'var(--body-primary)'
                            : 'var(--body-tertiary)'
                        : 'default' === e.colorScheme
                        ? 'var(--base-4)'
                        : 'var(--body-tertiary-focus)',
                N = m().span.withConfig({
                    displayName: 'ToggleIcon',
                    componentId: '-1phdtk2',
                })`display:inline-block;position:absolute;z-index:1;top:0;left:0;box-sizing:border-box;margin:0;padding:0;vertical-align:top;width:36px;height:20px;border-radius:20px;background-color:${(
                    e
                ) => I(e)};border:1px solid ${(e) =>
                    !e.disabled && Array.isArray(e.errors) && e.errors.length
                        ? 'var(--body-error)'
                        : 'transparent'};transition-duration:${
                    E.zn
                };transition-property:background-color;transition-timing-function:ease-in-out;cursor:${(e) =>
                    !e.disabled &&
                    'pointer'};&::before{content:'';display:block;position:absolute;z-index:2;top:1px;left:${(e) =>
                    e.checked ? 17 : 1}px;transition-duration:${
                    E.zn
                };transition-property:left;transition-timing-function:ease-in-out;width:16px;height:16px;border-radius:50%;background-color:${(
                    e
                ) =>
                    'default' === e.colorScheme
                        ? 'var(--text-with-background)'
                        : 'var(--text-brand-primary)'};background-color:${(e) =>
                    e.disabled && 'var(--text-disabled)'};cursor:${(e) =>
                    !e.disabled && 'pointer'};}&:hover,&:focus{background-color:${(e) =>
                    I(e, !0)};}@media (prefers-reduced-motion: reduce){&::before{transition:none;}}`;
            const j = (e) => {
                const {
                        name: t,
                        disabled: n,
                        locked: a,
                        tooltip: c,
                        value: d,
                        children: p,
                        label: u,
                        className: b,
                        errors: m,
                        variant: h,
                        radioGroupId: f,
                        inputValue: g,
                        onEditStart: v,
                        onChange: x,
                        onEditEnd: $,
                        renderCustomLabel: E,
                        mixedMode: O,
                        colorScheme: I,
                    } = e,
                    j = (function (e, t) {
                        var n = {};
                        for (var o in e)
                            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                                t.indexOf(o[r]) < 0 &&
                                    Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                                    (n[o[r]] = e[o[r]]);
                        }
                        return n;
                    })(e, [
                        'name',
                        'disabled',
                        'locked',
                        'tooltip',
                        'value',
                        'children',
                        'label',
                        'className',
                        'errors',
                        'variant',
                        'radioGroupId',
                        'inputValue',
                        'onEditStart',
                        'onChange',
                        'onEditEnd',
                        'renderCustomLabel',
                        'mixedMode',
                        'colorScheme',
                    ]),
                    [z, _] = (0, o.useState)(m);
                return (
                    (0, o.useEffect)(() => {
                        m || _([]), m && Array.isArray(m) && _(m);
                    }, [m]),
                    r().createElement(
                        y,
                        Object.assign({}, j, {
                            tooltip: c,
                            hintMargin: 16,
                            locked: a,
                            disabled: n,
                            name: t,
                            errors: f ? [] : z,
                            variant: I,
                            className: i()('checkbox__control', b),
                        }),
                        r().createElement(
                            w,
                            {
                                className: 'checkbox',
                                variant: h,
                                onFocus: () => {
                                    _([]), v && v(e);
                                },
                            },
                            r().createElement(
                                'label',
                                { htmlFor: t },
                                r().createElement(k, {
                                    type: 'checkbox',
                                    disabled: n || a,
                                    checked: !!d,
                                    id: t,
                                    name: t,
                                    value: g,
                                    variant: h,
                                    radioGroup: f,
                                    onChange: (t) => {
                                        t.preventDefault(), t.stopPropagation(), x && x(e, t.target.checked), $ && $(e);
                                    },
                                }),
                                'toggle' === h
                                    ? r().createElement(N, {
                                          className: 'checkbox__icon',
                                          checked: !!d,
                                          disabled: n || a,
                                          errors: z,
                                          colorScheme: I,
                                      })
                                    : r().createElement(
                                          S,
                                          {
                                              className: 'checkbox__icon',
                                              checked: !!d,
                                              disabled: n || a,
                                              errors: z,
                                              colorScheme: I,
                                          },
                                          O
                                              ? r().createElement(s.Z, { width: '16px', height: '16px' })
                                              : r().createElement(l.Z, { width: '16px', height: '16px' })
                                      ),
                                E && 'function' == typeof E
                                    ? E(e, d)
                                    : r().createElement(
                                          C,
                                          {
                                              className: 'checkbox__label',
                                              type: 'body',
                                              variant: 'default' === I ? 'primary' : 'with-background',
                                              hasTooltip: !!c,
                                              disabled: n,
                                          },
                                          p || u
                                      )
                            )
                        )
                    )
                );
            };
            (j.defaultProps = Object.assign(
                {},
                {
                    variant: 'default',
                    colorScheme: 'default',
                    disabled: !1,
                    locked: !1,
                    hidden: !1,
                    mixedMode: !1,
                    showTooltip: !1,
                }
            )),
                (j.displayName = 'Checkbox');
            const z = j;
        },
        42289: (e, t, n) => {},
        14128: (e, t, n) => {
            n(42289);
        },
        4850: (e, t, n) => {
            n.d(t, { ZP: () => le, $g: () => re });
            var o = n(16689),
                r = n.n(o),
                a = n(59003),
                i = n.n(a);
            const l = require('simplebar-react');
            var s = n.n(l),
                c = n(78837),
                d = n(38549),
                p = n(39423),
                u = n(57443),
                b = n(67027),
                m = n(12846),
                h = n(49543);
            const f = ({ hasError: e, disabled: t, onClick: n }) =>
                r().createElement(
                    h.Z,
                    {
                        variant: 'control-icon',
                        iconDescriptionText: 'Очистить поле ввода',
                        icon: !0,
                        onClick: n,
                        disabled: t,
                    },
                    r().createElement(m.Z, { color: (0, p.mk)(e, t), className: 'clear-value-btn' })
                );
            var g = n(48755);
            const v = r().forwardRef(
                (
                    {
                        hideMultiLineLabels: e,
                        hidden: t,
                        disabled: n,
                        locked: a,
                        focus: l,
                        delayedFocus: s,
                        hasValue: c,
                        cursor: m,
                        isMulti: h,
                        showClearButton: v,
                        handleClearButtonClick: y,
                        alignItems: x,
                        isRangeInput: w,
                        id: k,
                        onClick: $,
                        onOutsideClick: C,
                        strictTarget: E,
                        caption: O,
                        name: S,
                        children: I,
                        className: N,
                        errors: j,
                        errorIcon: z,
                        hint: _,
                        button: M,
                        tooltip: D,
                        showTooltip: R,
                        onTooltipClick: L,
                        status: T,
                        scrollTopBreakpoint: P,
                        scrollTopOffset: Z,
                        screenWidthShortcut: A,
                    },
                    W
                ) => {
                    const B = (0, o.useMemo)(() => {
                            return (
                                (e = A),
                                'desktop' === (t = P) ||
                                    ('tablet' === t && ('mobile' === e || 'tablet' === e)) ||
                                    ('mobile' === t && 'mobile' === e)
                            );
                            var e, t;
                        }, [A, P]),
                        V = j && j.length > 0,
                        H = i()('control__wrapper', { control_error: V || 'error' === T }, N),
                        F = (0, o.useRef)(),
                        q = (0, o.useRef)(),
                        Y = v && c;
                    (0, o.useEffect)(() => {
                        l &&
                            (() => {
                                if ((null == q ? void 0 : q.current) && B) {
                                    const { top: e } = q.current.getBoundingClientRect();
                                    window.scrollTo({ top: e + window.scrollY - Z, behavior: 'smooth' });
                                }
                            })();
                    }, [l]);
                    const U = (e) => {
                        F.current && !F.current.contains(e.target) && C(e);
                    };
                    return (
                        (0, o.useEffect)(
                            () =>
                                F && F.current && C
                                    ? (document.addEventListener('click', U, { capture: !0 }),
                                      () => {
                                          document.removeEventListener('click', U, { capture: !0 });
                                      })
                                    : () => null,
                            [F, C]
                        ),
                        t
                            ? null
                            : r().createElement(
                                  d.im,
                                  { ref: W, id: (0, g.z)(S, k), disabled: n, locked: a },
                                  r().createElement(d.Ev, { ref: q }),
                                  r().createElement(
                                      d.X6,
                                      {
                                          'ref': F,
                                          'className': H,
                                          'disabled': n,
                                          'locked': a,
                                          'focus': l,
                                          'cursor': m,
                                          'status': T,
                                          'hasErrors': V || 'error' === T,
                                          'field-name': S,
                                          'caption': O,
                                          'isMulti': h,
                                          'isRangeInput': w,
                                          'onClick': (e) => {
                                              e.persist(),
                                                  n ||
                                                      a ||
                                                      (E &&
                                                          e.target &&
                                                          F.current &&
                                                          e.target === F.current &&
                                                          $ &&
                                                          $(e),
                                                      !E && $ && $(e));
                                          },
                                          'hideMultiLineLabels': e,
                                      },
                                      O
                                          ? r().createElement(
                                                d.__,
                                                {
                                                    disabled: n,
                                                    locked: a,
                                                    hasErrors: V || 'error' === T,
                                                    hasValue: c,
                                                    focus: l,
                                                    className: 'control__label',
                                                    htmlFor: S,
                                                },
                                                O
                                            )
                                          : null,
                                      r().createElement(
                                          d.vs,
                                          {
                                              isRangeInput: w,
                                              caption: O,
                                              focus: l,
                                              delayedFocus: s,
                                              button: M,
                                              tooltip: D,
                                              showClearButton: v,
                                              hasValue: c,
                                          },
                                          I
                                      ),
                                      a
                                          ? null
                                          : M || Y || D
                                          ? r().createElement(
                                                d.W4,
                                                { className: 'control__button', alignItems: x },
                                                Y
                                                    ? r().createElement(f, {
                                                          hasError: !(!j || !j.length) || 'error' === T,
                                                          disabled: n || a,
                                                          onClick: y,
                                                      })
                                                    : null,
                                                !Y && D
                                                    ? r().createElement(
                                                          d.pf,
                                                          null,
                                                          r().createElement(b.Z, { text: D, isOpen: R, onClick: L })
                                                      )
                                                    : null,
                                                M || null
                                            )
                                          : null,
                                      r().createElement(u.Z, {
                                          borderRadius: {
                                              topLeft: '8px',
                                              topRight: '8px',
                                              bottomRight: '8px',
                                              bottomLeft: '8px',
                                          },
                                          show: a,
                                          isInControl: !0,
                                          spinnerSize: 20,
                                      })
                                  ),
                                  (() => {
                                      if (!a && !n && V) {
                                          const e = (0, p.Sc)([...j]).toString();
                                          if (e)
                                              return r().createElement(
                                                  d.kW,
                                                  { className: 'control__hint', hasErrors: !0 },
                                                  z && z,
                                                  e
                                              );
                                      }
                                      return 'string' == typeof _
                                          ? r().createElement(d.kW, { className: 'control__hint' }, _)
                                          : _ || null;
                                  })()
                              )
                    );
                }
            );
            v.defaultProps = {
                disabled: !1,
                locked: !1,
                focus: !1,
                hasValue: !1,
                cursor: 'default',
                isMulti: !1,
                showClearButton: !1,
                alignItems: 'center',
                isRangeInput: !1,
                scrollTopOffset: 0,
            };
            const y = (0, c.withScreenSize)(v);
            var x = n(57518),
                w = n.n(x);
            const k = require('react-text-mask');
            var $ = n.n(k),
                C = n(38851),
                E = n(25103);
            const O = (e) => {
                    if (!e) return E.mh;
                    const { focused: t, value: n, margins: o, hasValue: r } = e,
                        a = r || Boolean(n);
                    let { top: i, bottom: l } = E.mh;
                    const { right: s, left: c } = E.mh;
                    return (
                        (a || t) && ((i = 27), (l = 7)),
                        {
                            top: i - ((null == o ? void 0 : o.top) || 0),
                            right: s - ((null == o ? void 0 : o.right) || 0),
                            bottom: l - ((null == o ? void 0 : o.bottom) || 0),
                            left: c - ((null == o ? void 0 : o.left) || 0),
                        }
                    );
                },
                S = (e) => {
                    const { top: t, right: n, bottom: o, left: r } = e;
                    return `${t || 0}px ${n || 0}px ${o || 0}px ${r || 0}px`;
                },
                I = (e) => {
                    const t = O(e);
                    return S(t);
                },
                N = (e) => {
                    var t;
                    return `\n    display: block;\n\n    width: 100%;\n    height: auto;\n\n    margin: 0;\n    padding: ${
                        e.paddings ? S(e.paddings) : I({ focused: Boolean(e.$focused), value: String(e.value) })
                    };\n    box-sizing: border-box;\n\n    border: 0;\n    outline: none;\n    background: none;\n    opacity: ${
                        e.value ? 1 : 0
                    };\n\n    color: ${
                        e.disabled ? 'var(--text-disabled)' : 'var(--text-primary)'
                    };\n    pointer-events: ${
                        e.$locked || (null === (t = e.divisionValueArray) || void 0 === t ? void 0 : t.length) > 0
                            ? 'none'
                            : 'all'
                    };\n    font-size: ${(0, C.yv)('body')};\n    line-height: ${(0, C.Dp)(
                        'body'
                    )};\n\n    font-family: Inter, Helvetica, Arial, sans-serif;\n\n    -webkit-tap-highlight-color: transparent;\n\n    &[type = "number"] {\n        -moz-appearance: textfield;\n    }\n\n    &[type = "number"]::-webkit-inner-spin-button,\n    &[type = "number"]::-webkit-outer-spin-button {\n        -webkit-appearance: none;\n\n        margin: 0;\n    }\n\n    &:focus {\n        opacity: 1;\n    }\n\n    &::placeholder {\n        color: var(--text-tertiary);\n    }\n\n    &:-webkit-autofill {\n        -webkit-transition: background-color 7200s ease-in-out 0s;\n        transition: background-color 7200s ease-in-out 0s;\n    }\n\n    &:autofill {\n        -webkit-transition: background-color 7200s ease-in-out 0s;\n        -o-transition: background-color 7200s ease-in-out 0s;\n        transition: background-color 7200s ease-in-out 0s;\n    }\n`;
                },
                j = w().input.withConfig({ displayName: 'StyledInput', componentId: '-1qywqmn' })(N),
                z =
                    (w()($()).withConfig({ displayName: 'StyledMaskedInput', componentId: '-161vto2' })(N),
                    w().div.withConfig({
                        displayName: 'SingleSelectedValue',
                        componentId: '-rq7low',
                    })`grid-area:1/ 1/ 2/ 3;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-box-align:center;display:flex;align-items:center;height:auto;margin:0;padding:0;box-sizing:border-box;color:${(
                        e
                    ) =>
                        e.disabled
                            ? 'var(--text-disabled)'
                            : 'var(--text-primary)'};font-size:15px;line-height:20px;font-family:Inter,Helvetica,Arial,sans-serif;-webkit-tap-highlight-color:transparent;&[type='number']{-moz-appearance:textfield;}&[type='number']::-webkit-inner-spin-button,&[type='number']::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}&::placeholder{color:var(--text-secondary);}`),
                _ = w().div.withConfig({
                    displayName: 'InputContainer',
                    componentId: '-1ydrr87',
                })`grid-area:1/ 1/ 2/ 3;grid-template-columns:0px min-content;flex:1 1 auto;width:100%;${({
                    hasValue: e,
                    showAllSelectedLabel: t,
                }) => (e && t ? 'margin-bottom: 7px' : '')};`,
                M = w().div.withConfig({
                    displayName: 'ValueContainer',
                    componentId: '-1gi4l26',
                })`display:grid;max-width:100%;`,
                D = w().li.withConfig({ displayName: 'SelectItem', componentId: '-1mirq03' })(
                    ({ disabled: e, hovered: t, isLoading: n, isSelectedItem: o, checkboxOptions: r }) =>
                        `\n    background-color: ${
                            o && !e
                                ? 'var(--body-tertiary-toggled)'
                                : t && !e
                                ? 'var(--body-transparent-hover)'
                                : 'var(--base-bg)'
                        };\n\n    padding: ${
                            n ? '0' : r ? '10px 8px 9px' : '10px 16px'
                        };\n\n    overflow-wrap: break-word;\n   ${
                            !e && o && t ? 'box-shadow: inset 0px 0px 0px 1px var(--body-primary-hover);' : ''
                        }\n    \n    max-width: calc(100% - 8px);\n    min-height: ${
                            n ? '40px' : 'auto'
                        };\n    overflow: ${
                            n ? 'hidden' : 'auto'
                        };\n    box-sizing: border-box;\n    margin-bottom: 4px;\n\n    &:last-child {\n        margin-bottom: 0;\n    }\n\n    border-radius:8px;\n\n    &:focus {\n        outline: none;\n    }\n\n    &:focus-visible {\n        outline: 2px solid var(--support-focused);\n        border: none;\n    }\n`
                ),
                R = w().ul.withConfig({ displayName: 'SelectItems', componentId: '-t5bulu' })(
                    (e) =>
                        `\n    @keyframes dropDownAppear {\n        from {\n            transform: translateY(-16px);\n            opacity: 0;\n        }\n        to {\n            transform: translateY(0);\n            opacity: 1;\n        }\n    }\n\n    @keyframes dropDownDisappear {\n        from {\n            transform: translateY(0);\n            opacity: 1;\n        }\n        to {\n            transform: translateY(-16px);\n            opacity: 0;\n        }\n    }\n\n    position: absolute;\n    display: block;\n    outline: 0;\n    margin: 12px -1px 0 -1px;\n    min-width: calc(100% + 2px);\n    width: calc(100% + 2px);\n    box-sizing: border-box;\n    box-shadow: 0px 8px 16px var(--shadow-primary);\n    border-radius: 8px;\n    left: 0;\n    overflow: ${
                            e.hasItems ? 'visible' : 'hidden'
                        };\n    z-index: 20;\n    padding: 8px;\n    background-color: var(--base-bg);\n\n    animation-name: ${
                            e.focus ? 'dropDownAppear' : 'dropDownDisappear'
                        };\n    animation-duration: ${
                            E.zn
                        };\n    animation-timing-function: ease-in-out;\n\n    @media (prefers-reduced-motion: reduce) {\n        animation: none;\n    }\n\n    .simplebar-track.simplebar-vertical {\n        width: 8px;\n        right: -4px;\n    }\n\n    &:focus {\n        outline: none;\n    }\n\n    &:focus-visible {\n        outline: 2px solid var(--support-focused);\n        border: none;\n    }\n`
                ),
                L = w().div.withConfig({
                    displayName: 'Wrapper',
                    componentId: '-1sf2a8s',
                })`overflow:hidden;max-width:100%;padding:${({ hasValue: e, focused: t }) =>
                    I({ focused: t, hasValue: e })};padding-bottom:${({ hasMultilineLabels: e, hasValue: t }) =>
                    e && t
                        ? '0'
                        : ''};&:focus{outline:none;}&:focus-visible{outline:2px solid var(--support-focused);border:none;border-radius:2px;}`,
                T = w().div.withConfig({ displayName: 'LabelWrapper', componentId: '-f65c4s' })(
                    ({ isMulti: e, showWrapper: t, showAllSelectedLabel: n }) =>
                        e
                            ? `\n                max-width: 100%;\n                display: flex;\n                flex-wrap: ${
                                  n ? 'wrap' : 'no-wrap'
                              };\n                ${
                                  t
                                      ? ''
                                      : x.css`
                              position: absolute;
                              top: -1000px;
                              left: -1000px;
                          `
                              };\n            `
                            : 'max-width: 100%;'
                ),
                P = w().div.withConfig({ displayName: 'OptionsTitle', componentId: '-2th7lr' })(
                    () => 'padding: 12px 16px 4px 16px;'
                ),
                Z = w().div.withConfig({ displayName: 'DropdownIconWrapper', componentId: '-69xozu' })`transform:${({
                    isOpen: e,
                }) => (e ? 'rotate(180deg)' : 'rotate(0)')};transition-duration:${
                    E.zn
                };transition-property:transform;transition-timing-function:ease-in-out;width:20px;height:20px;@media (prefers-reduced-motion: reduce){transition:none;}`,
                A = w().div.withConfig({
                    displayName: 'DropdownInputContainer',
                    componentId: '-vsmcnt',
                })`padding:0px 8px 4px;&::after{content:'';display:block;padding-top:8px;border-bottom:1px solid var(--support-border);}`;
            var W = n(91043),
                B = n(44211),
                V = n(19634),
                H = n(33616),
                F = n(93804);
            const q = { top: 0, right: 0, bottom: 0, left: 0 },
                Y = 'Pick-all',
                U = [{ label: 'Выбрать все', code: Y }],
                K = (e) => void 0 !== e,
                X = (e) => e.reduce((e, t) => Object.assign(Object.assign({}, e), { [t.code]: t }), {}),
                G = (e, t) => {
                    const n = t ? e.filter(({ code: e }) => e !== Y) : e,
                        o = e.find(({ code: e }) => e === Y),
                        r = n.sort((e, t) =>
                            e.isSelected && !t.isSelected ? -1 : !e.isSelected && t.isSelected ? 1 : 0
                        );
                    return t ? [o, ...r] : r;
                },
                Q = (e, t) => e.filter((e) => !(null == t ? void 0 : t.some((t) => t === e.code))),
                J = (e, t) =>
                    t.map((e) => e.label.toLowerCase()).includes(e.toLowerCase())
                        ? t
                        : [...t, { code: e, label: e, isCreatable: !0 }],
                ee = (e) => (e ? 249 : 216);
            const te = ({
                items: e,
                isMulti: t,
                value: n,
                creatable: r,
                checkboxOptions: a,
                isPickAllOptionsItem: i,
                showValueInInput: l,
                useFullItem: s,
                debounceTimer: c,
                isAsyncSearchable: d,
                isSearchable: p,
                isCombined: u,
                isOpen: b,
                inputRef: m,
                optionsLoadingErrorMessage: h,
                onOptionsSearch: f,
                setErrorState: g,
                setIsOpen: v,
                onChange: y,
                onEditEnd: x,
                onEditStart: w,
            }) => {
                const [k, $] = (0, o.useState)(null),
                    [C, E] = (0, o.useState)(''),
                    [O, S] = (0, o.useState)([]),
                    [I, N] = (0, o.useState)(e),
                    [j, z] = (0, o.useState)(e),
                    _ = (0, o.useRef)(void 0),
                    [M, D] = (0, o.useState)(!1),
                    [R, L] = (0, o.useState)(e || []),
                    [T, P] = (0, o.useState)(!0),
                    Z = (0, o.useMemo)(
                        () =>
                            ((e, t, n, o) => {
                                if (!e) return null;
                                if (Array.isArray(e)) return null;
                                if ('string' == typeof e || 'number' == typeof e) {
                                    const r = null == t ? void 0 : t.find((t) => t.code === e);
                                    return r || (!n && !o) ? r : { label: e, code: e };
                                }
                                return (null == t ? void 0 : t.find((t) => t.code === e.code)) || e;
                            })(n, e, d, r),
                        [n, e, d, r]
                    ),
                    A = K(n),
                    W = (e, t) => {
                        b &&
                            (x(),
                            p &&
                                setTimeout(() => {
                                    var e;
                                    null === (e = null == m ? void 0 : m.current) || void 0 === e || e.blur();
                                }, 0),
                            T || P(!0),
                            (l && t) || E(''),
                            t !== C && E(t || ''),
                            v(!1));
                    },
                    B = (e) => {
                        e &&
                            (A || $(e),
                            E(l ? e.label : ''),
                            d &&
                                (null == R ? void 0 : R.length) &&
                                L(R.filter((t) => String(t.label) === String(e.label))),
                            y && e.code !== (null == Z ? void 0 : Z.code) && y(s ? e : e.code),
                            T || P(!0),
                            l ? W(0, e.label) : W());
                    },
                    V = (0, o.useMemo)(
                        () =>
                            ((e, t, n, o, r, a) => {
                                if (t) {
                                    if (K(e) && Array.isArray(e)) {
                                        if (n) return a ? [...e] : e.filter((e) => o.some((t) => t.code === e.code));
                                        const t = [...new Set(e)],
                                            r = X(o),
                                            i = null == t ? void 0 : t.map((e) => r[e]);
                                        return null == i ? void 0 : i.filter((e) => void 0 !== e);
                                    }
                                    return r;
                                }
                                return null;
                            })(n, t, s, e, k, u),
                        [n, e, t, s, k, u]
                    ),
                    H = (e) => {
                        if (!e) return;
                        if (u) return y([e]), E(''), void W();
                        const t = e.code === Y,
                            n = ((e) => e.filter((e) => e.code !== Y))(t ? R : [...(V || []), e]);
                        if (A) y && y(s ? [...n] : n.map((e) => e.code)), a && E('');
                        else {
                            const e = n.map((e) => e.code);
                            $(n), S(e), E(''), y && y(s ? n : e);
                        }
                        if (a) {
                            const n = j.map((n) =>
                                    t
                                        ? Object.assign(Object.assign({}, n), { isSelected: !0 })
                                        : n.code === e.code
                                        ? Object.assign(Object.assign({}, e), { isSelected: !0 })
                                        : n
                                ),
                                o = n.reduce(
                                    (e, t, n, o) =>
                                        !(!t.isSelected && t.code !== Y) && (!(void 0 !== o[n + 1] || !e) || e),
                                    !0
                                )
                                    ? n.map((e) => Object.assign(Object.assign({}, e), { isSelected: !0 }))
                                    : n,
                                r = G(o, i);
                            L(r), z(r), N(r);
                        } else {
                            const t = I.filter((t) => t.code !== e.code);
                            L(t), N(t);
                        }
                        a || W();
                    },
                    q = (e, t) => 1 === e.length && e[0].label.toLowerCase() === t.toLowerCase(),
                    U = c && f ? (0, o.useCallback)((0, F.Ds)(f, c), [c, f]) : f,
                    ee = (n) => {
                        if ((n && T && P(!1), n || P(!0), E(n), d))
                            return (
                                (p = n),
                                (o = void 0),
                                (l = void 0),
                                (c = function* () {
                                    if (!p || !U) return L([]), D(!1), void (_.current = void 0);
                                    try {
                                        const e = (_.current = {});
                                        D(!0);
                                        const t = yield U(p),
                                            n = [{ code: p, label: p, isCreatable: !0 }];
                                        if (
                                            ((t && Array.isArray(t)) || (r && p ? L(n) : (L([]), g([h])), W()),
                                            t && !t.length && r && p ? L(n) : L([]),
                                            t && t.length)
                                        ) {
                                            if (O.length) {
                                                const n = Q(t, O);
                                                if (e !== _.current) return;
                                                if (!n) return L([]), g([h]), void W();
                                                L(n);
                                            } else {
                                                if (e !== _.current) return;
                                                (t && Array.isArray(t)) || (r && p ? L(n) : (L([]), g([h])), W()),
                                                    L(r && p ? J(p, t) : t);
                                            }
                                            q(t, p) && ($(null), B(t[0]));
                                        }
                                    } catch (e) {
                                        return L([]), g([h]), void W();
                                    } finally {
                                        D(!1);
                                    }
                                }),
                                void new ((s = void 0) || (s = Promise))(function (e, t) {
                                    function n(e) {
                                        try {
                                            a(c.next(e));
                                        } catch (e) {
                                            t(e);
                                        }
                                    }
                                    function r(e) {
                                        try {
                                            a(c.throw(e));
                                        } catch (e) {
                                            t(e);
                                        }
                                    }
                                    function a(t) {
                                        var o;
                                        t.done
                                            ? e(t.value)
                                            : ((o = t.value),
                                              o instanceof s
                                                  ? o
                                                  : new s(function (e) {
                                                        e(o);
                                                    })).then(n, r);
                                    }
                                    a((c = c.apply(o, l || [])).next());
                                })
                            );
                        var o, l, s, c, p;
                        const u = ((n) => {
                                if (t) {
                                    if (!V) return e;
                                    const t = X(V),
                                        o = a ? j : e,
                                        r = o.filter((e) => !t[e.code]);
                                    return a ? (n ? r : o) : r;
                                }
                                return e;
                            })(n),
                            b = u.filter((e) => e.label.toLowerCase().includes(n.toLowerCase()));
                        if (0 === b.length)
                            return r && n ? void L([{ code: n, label: n, isCreatable: !0 }]) : void L([]);
                        if ((L(r && n ? J(n, b) : b), q(b, n)))
                            if (t) {
                                if ((H(b[0]), a)) {
                                    const t = e.map((e) =>
                                            e.code === b[0].code
                                                ? Object.assign(Object.assign({}, b[0]), { isSelected: !0 })
                                                : e
                                        ),
                                        n = G(t, i);
                                    z(n), W();
                                }
                            } else B(b[0]);
                    },
                    te = ((e, t, n, o, r) => (o ? e : r ? t : n))(V, Z, k, t, A);
                return (
                    (0, o.useEffect)(() => {
                        l && E((null == Z ? void 0 : Z.label) || ''),
                            !Z && n && !t && y && y(null),
                            t &&
                                (null == n ? void 0 : n.length) > (null == V ? void 0 : V.length) &&
                                y &&
                                y(V.map((e) => e.code));
                    }, [n]),
                    {
                        onSelectOption: t ? H : B,
                        onRemoveOption: (t) => {
                            var o;
                            if (u)
                                return (
                                    w(), y([Object.assign(Object.assign({}, t), { remove: !0 })]), void (b ? W() : x())
                                );
                            const r =
                                    null === (o = null == V ? void 0 : V.filter((e) => e.code !== t.code)) ||
                                    void 0 === o
                                        ? void 0
                                        : o.map((e) => e.code),
                                l = t.code === Y;
                            if (a) {
                                const e = j.map((e) =>
                                        l
                                            ? Object.assign(Object.assign({}, e), { isSelected: !1 })
                                            : e.code === t.code
                                            ? { code: t.code, label: t.label }
                                            : e
                                    ),
                                    n = G(e, i),
                                    o =
                                        !l && t.code
                                            ? n.map((e) =>
                                                  e.code === Y
                                                      ? Object.assign(Object.assign({}, e), { isSelected: !1 })
                                                      : e
                                              )
                                            : n;
                                L(o), z(o), N([...I, t]), S((e) => e.filter((e) => e !== t.code)), E('');
                            } else L(Q(e, r)), N([...I, t]), S((e) => e.filter((e) => e !== t.code)), E('');
                            if (A) {
                                if (y) {
                                    if (Array.isArray(n)) {
                                        const e = l
                                            ? []
                                            : n.filter((e) =>
                                                  s && 'string' != typeof e && 'number' != typeof e
                                                      ? (null == e ? void 0 : e.code) !== t.code
                                                      : e !== t.code
                                              );
                                        if (e.length) return y(e), void x();
                                    }
                                    y(null), x();
                                }
                            } else {
                                if (
                                    ($((e) => {
                                        const n = l ? [] : e.filter(({ code: e }) => e !== t.code);
                                        return n.length ? n : null;
                                    }),
                                    b || w(),
                                    y)
                                ) {
                                    const e = s ? V.filter((e) => e.code !== t.code) : O.filter((e) => e !== t.code);
                                    y(e);
                                }
                                b || x();
                            }
                        },
                        inputValue: C,
                        selectedValue: te,
                        isLoading: M,
                        options: R,
                        optionsWithSelectedItems: j,
                        setOptionsWithSelectedItems: z,
                        onInputChange: (e) => {
                            const t = e.target.value;
                            ee(t);
                        },
                        onDropdownInputChange: ee,
                        setSelectedValue: $,
                        setOptions: L,
                        setInputValue: E,
                        filteredOptions: Q,
                        showValue: T,
                        closeMenu: W,
                    }
                );
            };
            var ne = n(2149);
            const oe = (e) => {
                    const {
                            className: t,
                            name: n,
                            errors: a,
                            locked: l,
                            caption: c,
                            disabled: d,
                            items: b,
                            showValueInInput: m,
                            value: f,
                            creatable: g,
                            useFullItem: v,
                            placeholder: x,
                            isMulti: w,
                            searchInDropdown: k,
                            showAllSelectedLabel: $,
                            checkboxOptions: C,
                            pickAllOptions: S,
                            clearable: I,
                            optionsTitle: N,
                            notFoundMessage: Y,
                            debounceTimer: K,
                            onOptionsSearch: Q,
                            acyncSearchMessage: J,
                            optionsLoadingErrorMessage: oe,
                            onEditStart: re,
                            onEditEnd: ae,
                            onChange: ie,
                            async: le,
                            searchable: se,
                            autoComplete: ce,
                            isCombined: de,
                            autoOpenNextStep: pe,
                            status: ue,
                            inputDisabled: be,
                        } = e,
                        me = (function (e, t) {
                            var n = {};
                            for (var o in e)
                                Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                            if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                                var r = 0;
                                for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                                    t.indexOf(o[r]) < 0 &&
                                        Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                                        (n[o[r]] = e[o[r]]);
                            }
                            return n;
                        })(e, [
                            'className',
                            'name',
                            'errors',
                            'locked',
                            'caption',
                            'disabled',
                            'items',
                            'showValueInInput',
                            'value',
                            'creatable',
                            'useFullItem',
                            'placeholder',
                            'isMulti',
                            'searchInDropdown',
                            'showAllSelectedLabel',
                            'checkboxOptions',
                            'pickAllOptions',
                            'clearable',
                            'optionsTitle',
                            'notFoundMessage',
                            'debounceTimer',
                            'onOptionsSearch',
                            'acyncSearchMessage',
                            'optionsLoadingErrorMessage',
                            'onEditStart',
                            'onEditEnd',
                            'onChange',
                            'async',
                            'searchable',
                            'autoComplete',
                            'isCombined',
                            'autoOpenNextStep',
                            'status',
                            'inputDisabled',
                        ]),
                        he = !(!w || void 0 !== se) || se,
                        fe = Boolean(le && se),
                        ge = w && C,
                        ve = w && $,
                        ye = he && g,
                        xe = (0, o.useRef)(),
                        we = (0, o.useRef)(),
                        ke = (0, o.useRef)(),
                        $e = (0, o.useRef)(),
                        Ce = (0, o.useRef)(),
                        Ee = (0, o.useRef)(),
                        [Oe, Se] = (0, o.useState)(null),
                        [Ie, Ne] = (0, o.useState)(0),
                        [je, ze] = (0, o.useState)(!1),
                        [_e, Me] = (0, o.useState)(null),
                        [De, Re] = (0, o.useState)(a),
                        Le = (0, F.dN)(je, E.IN),
                        Te = (null == De ? void 0 : De.length) || 'error' === ue,
                        Pe = w && C && S,
                        Ze = se && k;
                    (0, o.useEffect)(() => {
                        a || Re([]), a && Array.isArray(a) && Re(a);
                    }, [a]);
                    const {
                            onSelectOption: Ae,
                            onRemoveOption: We,
                            selectedValue: Be,
                            setSelectedValue: Ve,
                            options: He,
                            optionsWithSelectedItems: Fe,
                            setOptionsWithSelectedItems: qe,
                            isLoading: Ye,
                            inputValue: Ue,
                            onInputChange: Ke,
                            onDropdownInputChange: Xe,
                            setInputValue: Ge,
                            setOptions: Qe,
                            filteredOptions: Je,
                            showValue: et,
                            closeMenu: tt,
                        } = te({
                            items: b,
                            showValueInInput: m,
                            isMulti: w,
                            useFullItem: v,
                            debounceTimer: K,
                            isAsyncSearchable: fe,
                            onOptionsSearch: Q,
                            setErrorState: Re,
                            optionsLoadingErrorMessage: oe,
                            onEditEnd: () => {
                                ae && ae(e);
                            },
                            onEditStart: () => {
                                re && re(e);
                            },
                            isOpen: je,
                            isSearchable: he,
                            isCombined: de,
                            inputRef: xe,
                            setIsOpen: ze,
                            value: f,
                            creatable: ye,
                            checkboxOptions: ge,
                            isPickAllOptionsItem: Pe,
                            onChange: (t) => {
                                ie && ie(e, t);
                            },
                        }),
                        nt = (0, o.useMemo)(
                            () =>
                                w ? Boolean(null == Be ? void 0 : Be.length) : Boolean(null == Be ? void 0 : Be.code),
                            [w, Be]
                        ),
                        ot = (t) => {
                            var n;
                            if (!je) {
                                re && re(e);
                                const t = Array.isArray(b) && b.length > 0;
                                if (de && !t && !g) return;
                                if (
                                    (he &&
                                        (null === (n = null == xe ? void 0 : xe.current) || void 0 === n || n.focus()),
                                    w || fe || Qe(Array.isArray(b) ? b : []),
                                    fe && (null == He ? void 0 : He.length) && !m && Qe([]),
                                    w)
                                ) {
                                    if (he && Array.isArray(Be) && Be.length && !ge) {
                                        const e = Be.map((e) => e.code);
                                        Qe(Je(b, e));
                                    }
                                    if (ge && he && Array.isArray(Be) && Be.length) {
                                        const e = X(Be),
                                            t = (ge ? Fe : He).map((t) => {
                                                var n;
                                                return t.code ===
                                                    (null === (n = e[t.code]) || void 0 === n ? void 0 : n.code)
                                                    ? Object.assign(Object.assign({}, t), { isSelected: !0 })
                                                    : t;
                                            }),
                                            n = G(t, Pe);
                                        Qe(n), qe(n);
                                    }
                                    if (he && !(null == Be ? void 0 : Be.length)) {
                                        const e = Pe ? U : [];
                                        Qe([...e, ...b]), ge && qe([...e, ...b]);
                                    }
                                }
                                Re([]), Me(null), ze(!0);
                            }
                            je && t && t.target.parentElement.parentElement !== we.current && xe.current.focus();
                        };
                    (0, o.useEffect)(() => {
                        if (de) {
                            const e = Array.isArray(b) && b.length > 0;
                            Qe(e ? b : []), !pe || l || d || (!e && !g) ? tt() : (ot(), xe.current.focus());
                        }
                    }, [b, de, pe, xe, Qe]),
                        (0, o.useEffect)(() => {
                            const t = we.current,
                                n = ke.current,
                                o = (o) => {
                                    if (
                                        (w ||
                                            !I ||
                                            !Be ||
                                            Ue ||
                                            o.target !== xe.current ||
                                            ('Backspace' !== o.key && 'Delete' !== o.key) ||
                                            (ie && v && ie(Object.assign({}, e), { code: '', label: '' }),
                                            ie && !v && ie(Object.assign({}, e), null),
                                            Ge(''),
                                            Ve(v ? { code: '', label: '' } : null)),
                                        w &&
                                            o.target === xe.current &&
                                            'Backspace' === o.key &&
                                            !Ue &&
                                            Be &&
                                            Be.length > 0 &&
                                            We(Be[Be.length - 1]),
                                        je)
                                    ) {
                                        const e = He.map((e) => e.code),
                                            r = e.findIndex((e) => e === _e),
                                            a = e.length - 1;
                                        if ('ArrowDown' === o.key) {
                                            if (t && r === e.length - 1) t.scrollTo(0, 0);
                                            else if (t && n) {
                                                const { clientHeight: e } = t,
                                                    { clientHeight: o, offsetTop: r } = n;
                                                r + o >= e && t.scrollBy(0, o + 4);
                                            }
                                            Me(-1 !== r ? e[r + 1 > a ? 0 : r + 1] : e[0]);
                                        }
                                        if ('ArrowUp' === o.key) {
                                            if (!t || (n && 0 !== r)) {
                                                if (t && n) {
                                                    const { clientHeight: e, scrollHeight: o } = t,
                                                        { clientHeight: r, offsetTop: a } = n;
                                                    a < o - e + r && t.scrollBy(0, -(r + 4));
                                                }
                                            } else t.scrollTo(0, t.scrollHeight);
                                            Me(-1 !== r ? e[r - 1 < 0 ? a : r - 1] : e[a]);
                                        }
                                        if ('Enter' === o.key && _e) {
                                            const e = He.find((e) => e.code === _e);
                                            (null == e ? void 0 : e.isSelected) ? We(e) : (Ve(null), Ae(e)), ge && tt();
                                        }
                                    }
                                };
                            return (
                                document.addEventListener('keydown', o),
                                () => {
                                    document.removeEventListener('keydown', o);
                                }
                            );
                        }, [_e, He, je, Be]),
                        (0, o.useEffect)(() => {
                            Le && $e.current.recalculate();
                        }, [He, Le]);
                    const rt = (e, t) => {
                        'enter' === t && Me(e.code), 'leave' === t && Me(null);
                    };
                    function at() {
                        !je || Be
                            ? ((this.placeholder = ''), (this.style.minWidth = ''))
                            : ((this.placeholder = x || ''),
                              (this.style.minWidth = (x ? 9 * (x.length + 1) : 9) + 'px'));
                        let e = 0;
                        if (Ee.current) {
                            const { width: t } = Ee.current.getBoundingClientRect(),
                                { left: n, right: o } = O({ focused: je, hasValue: nt }),
                                r = t - n - o;
                            e = Math.round(r);
                        }
                        const t = 10 * (this.value.length + 1),
                            n = e > 0 && t > e ? e : t;
                        this.style.width = `${n}px`;
                    }
                    (0, o.useEffect)(() => {
                        xe.current && (xe.current.addEventListener('input', at), at.call(xe.current));
                    });
                    const it = () => {
                        je && (m ? tt(null, null == Be ? void 0 : Be.label) : tt());
                    };
                    return (
                        (0, o.useEffect)(() => {
                            var e;
                            if (w && !$) {
                                const t = Ce.current,
                                    n = Ee.current,
                                    o = null == t ? void 0 : t.clientWidth,
                                    r = null == n ? void 0 : n.clientWidth,
                                    a = 62,
                                    i = null == Be ? void 0 : Be.length,
                                    l = [];
                                if (Be && i) {
                                    const n =
                                        null === (e = null == t ? void 0 : t.firstChild) || void 0 === e
                                            ? void 0
                                            : e.clientWidth;
                                    ((n < r && 1 === i) || (i > 1 && n + a < r)) && l.push(Be[0]);
                                    const s = i && n + a > r ? i : i - 1;
                                    (o >= r || i > 1) && i > 0 && s > 0 ? Ne(s) : Ie > 0 && Ne(0);
                                } else Ie > 0 && Ne(0);
                                Se(l);
                            }
                        }, [Be, w, $]),
                        r().createElement(
                            y,
                            Object.assign({}, me, {
                                status: ue,
                                caption: c,
                                name: n,
                                locked: l,
                                className: i()('select__control', t),
                                errors: De,
                                disabled: d,
                                focus: je,
                                delayedFocus: Le,
                                showClearButton: I,
                                handleClearButtonClick: (t) => {
                                    t.stopPropagation(),
                                        (() => {
                                            if (
                                                (Ve(v && !w ? { code: '', label: '' } : null),
                                                re && !je && re(e),
                                                ie && v && !w && ie(Object.assign({}, e), { code: '', label: '' }),
                                                !ie || (v && !w) || ie(Object.assign({}, e), null),
                                                ae && !je && ae(e),
                                                w)
                                            ) {
                                                const e = Pe ? [...U, ...b] : b;
                                                Qe(e), ge && qe(e);
                                            }
                                            m && (Ge(''), Qe([]), Re([]));
                                        })();
                                },
                                alignItems: 'center',
                                hasValue: nt,
                                button: r().createElement(
                                    h.Z,
                                    {
                                        'variant': 'control-icon',
                                        'icon': !0,
                                        'onClick': je ? it : ot,
                                        'disabled': d || l,
                                        'aria-label': je ? 'Свернуть список' : 'Развернуть список',
                                    },
                                    r().createElement(
                                        Z,
                                        { isOpen: je },
                                        r().createElement(H.Z, { color: (0, p.mk)(Boolean(Te), d) })
                                    )
                                ),
                                isMulti: w,
                                hideMultiLineLabels: !ve,
                                onClick: ot,
                                onOutsideClick: it,
                            }),
                            r().createElement(
                                L,
                                {
                                    'ref': Ee,
                                    'hasValue': nt,
                                    'focused': je,
                                    'hasMultilineLabels': w && ve,
                                    'className': 'select__wrapper',
                                    'role': 'combobox',
                                    'tabIndex': 0,
                                    'aria-label': c,
                                },
                                r().createElement(
                                    'div',
                                    { style: { display: 'inline-block' } },
                                    r().createElement(
                                        T,
                                        {
                                            showWrapper: !0,
                                            showAllSelectedLabel: ve,
                                            isMulti: w,
                                            className: 'select__label-wrapper',
                                        },
                                        (() => {
                                            if (w) {
                                                const e = ve ? Be : Oe;
                                                return null == e
                                                    ? void 0
                                                    : e.map((e) =>
                                                          r().createElement(V.Z, {
                                                              key: `${n}_${e.code}`,
                                                              id: e.code,
                                                              className: 'select__label-value',
                                                              disabled: d,
                                                              locked: l,
                                                              variant: !l && Te ? 'error' : 'primary',
                                                              onCloseIconClick: () => We(e),
                                                              label: e.label,
                                                              margins: { right: 8, bottom: $ ? 7 : 0 },
                                                          })
                                                      );
                                            }
                                            return null;
                                        })(),
                                        Ie > 0 &&
                                            r().createElement(V.Z, {
                                                className: 'select__hide-value-count',
                                                disabled: d,
                                                locked: l,
                                                id: `all-selected-${Ie}`,
                                                variant: !l && Te ? 'error' : 'primary',
                                                label: `+${Ie}`,
                                                margins: { right: 8, bottom: $ ? 7 : 0 },
                                            }),
                                        r().createElement(
                                            M,
                                            null,
                                            Be &&
                                                et &&
                                                !m &&
                                                r().createElement(
                                                    z,
                                                    {
                                                        className: 'select__single-selected-value',
                                                        onClick: () => {
                                                            null == xe || xe.current.focus();
                                                        },
                                                        disabled: d,
                                                    },
                                                    Be.label
                                                ),
                                            r().createElement(
                                                _,
                                                {
                                                    hasValue: Boolean(null == Be ? void 0 : Be.length),
                                                    showAllSelectedLabel: ve,
                                                },
                                                r().createElement(j, {
                                                    ref: xe,
                                                    className: 'select__input',
                                                    style: (() => {
                                                        const e = {
                                                            opacity: je || Boolean(Be) || (m && Boolean(Ue)) ? 1 : 0,
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                        };
                                                        return w
                                                            ? Object.assign(Object.assign({}, e), {
                                                                  minWidth: '2px',
                                                                  width: '2px',
                                                              })
                                                            : Object.assign({}, e);
                                                    })(),
                                                    name: `${n}-input`,
                                                    disabled: !se || Ze || d || l || be,
                                                    $locked: l,
                                                    value: Ze ? void 0 : Ue,
                                                    autoFocus: je,
                                                    autoComplete: ce,
                                                    paddings: q,
                                                    onChange: Ze ? void 0 : Ke,
                                                })
                                            )
                                        )
                                    ),
                                    Le &&
                                        r().createElement(
                                            R,
                                            {
                                                'disabled': d || l,
                                                'errors': De,
                                                'hasItems': He.length > 0,
                                                'className': 'select__menu',
                                                'caption': c,
                                                'hasValue': nt,
                                                'focus': je,
                                                'isMulti': w,
                                                'showAllSelectedLabel': ve,
                                                'aria-label': 'Варианты для выбора',
                                                'tabIndex': 0,
                                            },
                                            w &&
                                                Ze &&
                                                r().createElement(
                                                    A,
                                                    null,
                                                    r().createElement(ne.Z, {
                                                        className: 'select__dropdown-input',
                                                        name: `${n}-input`,
                                                        caption: 'Поиск',
                                                        disabled: !he || d || l || be,
                                                        value: Ue,
                                                        onChange: Xe,
                                                        autoFocus: je,
                                                    })
                                                ),
                                            r().createElement(
                                                s(),
                                                {
                                                    ref: $e,
                                                    scrollableNodeProps: { ref: we },
                                                    style: { maxHeight: ee(N) },
                                                },
                                                N &&
                                                    r().createElement(
                                                        P,
                                                        { className: 'select__options-title' },
                                                        r().createElement(
                                                            B.Z,
                                                            { type: 'caption', color: 'var(--text-secondary)' },
                                                            N
                                                        )
                                                    ),
                                                Ye
                                                    ? null
                                                    : He.map((e) =>
                                                          r().createElement(
                                                              D,
                                                              {
                                                                  ref: _e === e.code ? ke : void 0,
                                                                  key: `${n}-item-${null == e ? void 0 : e.code}`,
                                                                  className: 'select__item',
                                                                  id: `${n}-item-${null == e ? void 0 : e.code}`,
                                                                  checkboxOptions: ge,
                                                                  isSelectedItem: null == e ? void 0 : e.isSelected,
                                                                  hovered: _e === e.code,
                                                                  disabled: e.disabled,
                                                                  onClick: (t) => {
                                                                      t.stopPropagation(),
                                                                          t.preventDefault(),
                                                                          e.isSelected ? We(e) : (Ve(null), Ae(e));
                                                                  },
                                                                  onMouseEnter: () => rt(e, 'enter'),
                                                                  onMouseLeave: () => rt(e, 'leave'),
                                                                  role: 'option',
                                                                  tabIndex: 0,
                                                              },
                                                              ge
                                                                  ? r().createElement(W.Z, {
                                                                        name: `${n}-checkboxItem-${
                                                                            null == e ? void 0 : e.code
                                                                        }`,
                                                                        value: !!e.isSelected && Boolean(e.label),
                                                                        label: e.label,
                                                                    })
                                                                  : r().createElement(
                                                                        r().Fragment,
                                                                        null,
                                                                        (null == e ? void 0 : e.isCreatable) &&
                                                                            r().createElement(
                                                                                B.Z,
                                                                                { type: 'caption' },
                                                                                'Добавить: '
                                                                            ),
                                                                        r().createElement(
                                                                            B.Z,
                                                                            {
                                                                                type: 'body',
                                                                                variant: (
                                                                                    null == e ? void 0 : e.isCreatable
                                                                                )
                                                                                    ? 'brand-primary'
                                                                                    : 'primary',
                                                                            },
                                                                            e.label
                                                                        )
                                                                    )
                                                          )
                                                      ),
                                                He.length > 0 && !Ye
                                                    ? null
                                                    : r().createElement(
                                                          D,
                                                          { className: 'select__message', disabled: !0, isLoading: Ye },
                                                          r().createElement(
                                                              B.Z,
                                                              { type: 'body' },
                                                              Ye
                                                                  ? r().createElement(u.Z, { spinnerSize: 40 })
                                                                  : fe && !Ue
                                                                  ? J
                                                                  : Y
                                                          )
                                                      )
                                            )
                                        )
                                )
                            ),
                            w &&
                                !$ &&
                                (null == Be ? void 0 : Be.length) > 0 &&
                                r().createElement(
                                    T,
                                    { ref: Ce, showWrapper: !1, isMulti: w },
                                    r().createElement(V.Z, {
                                        key: `${n}_${Be[0].code}`,
                                        label: Be[0].label,
                                        onCloseIconClick: () => null,
                                        disabled: d,
                                        locked: l,
                                        id: Be[0].code,
                                        variant: !l && Te ? 'error' : 'primary',
                                        margins: { right: 8, bottom: $ ? 7 : 0 },
                                    })
                                )
                        )
                    );
                },
                re = { creatable: !1, disabled: !1, locked: !1, hidden: !1, showTooltip: !1, scrollTopOffset: 0 },
                ae = Object.assign(Object.assign({}, re), {
                    notFoundMessage: 'Hичего не найдено',
                    debounceTimer: 500,
                    acyncSearchMessage: 'Начните вводить для поиска',
                    optionsLoadingErrorMessage:
                        'Ошибка загрузки результатов поиска. Пожалуйста, повторите попытку позднее.',
                }),
                ie = Object.assign(
                    Object.assign(Object.assign({}, ae), { showAllSelectedLabel: !1, checkboxOptions: !0 }),
                    {
                        items: [],
                        showValueInInput: !1,
                        inputDisabled: !1,
                        isCombined: !1,
                        autoOpenNextStep: !1,
                        async: !1,
                        clearable: !1,
                        creatable: !1,
                        pickAllOptions: !1,
                        searchInDropdown: !1,
                    }
                );
            (oe.defaultProps = Object.assign(Object.assign({}, ie), { autoComplete: 'off' })),
                (oe.displayName = 'Select');
            const le = oe;
        },
        79054: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = n(4850).ZP;
        },
        25103: (e, t, n) => {
            n.d(t, { IN: () => o, mh: () => i, vi: () => a, zn: () => r });
            const o = 210,
                r = '0.25s',
                a = '0.6s',
                i = { top: 17, right: 15, bottom: 17, left: 15 };
        },
        9304: (e, t, n) => {
            function o(e, t) {
                let n;
                return (...o) =>
                    new Promise((r) => {
                        n && clearTimeout(n),
                            (n = window.setTimeout(() => {
                                r(e(...o));
                            }, t));
                    });
            }
            n.d(t, { D: () => o });
        },
        93804: (e, t, n) => {
            n.d(t, { vL: () => o.v, Ds: () => l.D, cQ: () => r.c, dN: () => i });
            var o = n(46582),
                r = n(99282),
                a = n(16689);
            function i(e, t) {
                const [n, o] = (0, a.useState)(!1);
                return (
                    (0, a.useEffect)(() => {
                        let r;
                        return (
                            e && !n ? o(!0) : !e && n && (r = window.setTimeout(() => o(!1), t)), () => clearTimeout(r)
                        );
                    }, [e, t, n]),
                    n
                );
            }
            var l = n(9304);
            n(14128);
        },
        99282: (e, t, n) => {
            function o(e, t) {
                const n = Math.abs(e);
                return t[n % 100 > 4 && n % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][n % 10 < 5 ? n % 10 : 5]];
            }
            n.d(t, { c: () => o });
        },
        46582: (e, t, n) => {
            n.d(t, { v: () => o });
            const o = (e) => `0${e}`.slice(-2);
        },
        70223: (e, t, n) => {
            n.d(t, { Z: () => r });
            var o = n(16689);
            const r = (e) => {
                var { color: t, variant: n = 'primary' } = e,
                    r = (function (e, t) {
                        var n = {};
                        for (var o in e)
                            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                                t.indexOf(o[r]) < 0 &&
                                    Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                                    (n[o[r]] = e[o[r]]);
                        }
                        return n;
                    })(e, ['color', 'variant']);
                return o.createElement(
                    'svg',
                    Object.assign(
                        {
                            'width': 20,
                            'height': 20,
                            'fill': 'none',
                            'xmlns': 'http://www.w3.org/2000/svg',
                            'viewBox': '0 0 20 20',
                            'aria-hidden': 'true',
                        },
                        r
                    ),
                    o.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d:
                            'M17.256 4.41a.833.833 0 010 1.18l-9.167 9.166a.833.833 0 01-1.178 0l-4.167-4.167a.833.833 0 011.179-1.178L7.5 12.988l8.577-8.577a.833.833 0 011.179 0z',
                        fill: t || `var(--text-${n})`,
                    })
                );
            };
        },
        33616: (e, t, n) => {
            n.d(t, { Z: () => r });
            var o = n(16689);
            const r = (e) => {
                var { color: t, variant: n = 'primary' } = e,
                    r = (function (e, t) {
                        var n = {};
                        for (var o in e)
                            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                                t.indexOf(o[r]) < 0 &&
                                    Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                                    (n[o[r]] = e[o[r]]);
                        }
                        return n;
                    })(e, ['color', 'variant']);
                return o.createElement(
                    'svg',
                    Object.assign(
                        {
                            'width': 20,
                            'height': 20,
                            'fill': 'none',
                            'xmlns': 'http://www.w3.org/2000/svg',
                            'viewBox': '0 0 20 20',
                            'aria-hidden': 'true',
                        },
                        r
                    ),
                    o.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d:
                            'M4.41 6.91a.833.833 0 011.18 0L10 11.323l4.41-4.411a.833.833 0 111.18 1.178l-5 5a.833.833 0 01-1.18 0l-5-5a.833.833 0 010-1.178z',
                        fill: t || `var(--text-${n})`,
                    })
                );
            };
        },
        18910: (e, t, n) => {
            n.d(t, { Z: () => a });
            var o = n(16689);
            const r = o.forwardRef((e, t) =>
                o.createElement(
                    'svg',
                    Object.assign(
                        {
                            'ref': t,
                            'width': 20,
                            'height': 20,
                            'fill': 'none',
                            'xmlns': 'http://www.w3.org/2000/svg',
                            'viewBox': '0 0 20 20',
                            'aria-hidden': 'true',
                        },
                        e
                    ),
                    o.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d:
                            'M10 2.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM.833 10a9.167 9.167 0 1118.334 0A9.167 9.167 0 01.833 10zm8.334 4.167c0-.46.373-.834.833-.834h.008a.833.833 0 110 1.667H10a.833.833 0 01-.833-.833z',
                        fill: e.color || `var(--text-${e.variant})`,
                    }),
                    o.createElement('path', {
                        d:
                            'M9.089 6.893a1.667 1.667 0 012.511 1.44c0 .391-.304.799-.879 1.182a5.043 5.043 0 01-1.052.528.833.833 0 00.528 1.58l.012-.004a6.702 6.702 0 001.437-.718c.675-.45 1.62-1.292 1.62-2.567a3.333 3.333 0 00-6.477-1.11.833.833 0 001.572.553c.13-.372.389-.685.728-.884z',
                        fill: e.color || `var(--text-${e.variant})`,
                    })
                )
            );
            r.defaultProps = { variant: 'primary' };
            const a = r;
        },
        61758: (e, t, n) => {
            n.d(t, { Z: () => r });
            var o = n(16689);
            const r = (e) => {
                var { color: t, variant: n = 'primary' } = e,
                    r = (function (e, t) {
                        var n = {};
                        for (var o in e)
                            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                                t.indexOf(o[r]) < 0 &&
                                    Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                                    (n[o[r]] = e[o[r]]);
                        }
                        return n;
                    })(e, ['color', 'variant']);
                return o.createElement(
                    'svg',
                    Object.assign(
                        {
                            'width': 20,
                            'height': 20,
                            'fill': 'none',
                            'xmlns': 'http://www.w3.org/2000/svg',
                            'viewBox': '0 0 20 20',
                            'aria-hidden': 'true',
                        },
                        r
                    ),
                    o.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M3.333 10c0-.46.373-.833.834-.833h11.666a.833.833 0 110 1.666H4.167A.833.833 0 013.333 10z',
                        fill: t || `var(--text-${n})`,
                    })
                );
            };
        },
        82896: (e, t, n) => {
            n.d(t, { Z: () => r });
            var o = n(16689);
            const r = (e) => {
                var { color: t, variant: n = 'primary' } = e,
                    r = (function (e, t) {
                        var n = {};
                        for (var o in e)
                            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                                t.indexOf(o[r]) < 0 &&
                                    Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                                    (n[o[r]] = e[o[r]]);
                        }
                        return n;
                    })(e, ['color', 'variant']);
                return o.createElement(
                    'svg',
                    Object.assign(
                        {
                            'width': 20,
                            'height': 20,
                            'fill': 'none',
                            'xmlns': 'http://www.w3.org/2000/svg',
                            'viewBox': '0 0 20 20',
                            'aria-hidden': 'true',
                        },
                        r
                    ),
                    o.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d:
                            'M10 2C9.55817 2 9.2 2.35817 9.2 2.8C9.2 3.24183 9.55817 3.6 10 3.6C13.5346 3.6 16.4 6.46537 16.4 10C16.4 13.5346 13.5346 16.4 10 16.4C6.46537 16.4 3.6 13.5346 3.6 10C3.6 9.55817 3.24183 9.2 2.8 9.2C2.35817 9.2 2 9.55817 2 10C2 14.4183 5.58171 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2Z',
                        fill: t || `var(--text-${n})`,
                    })
                );
            };
        },
        12846: (e, t, n) => {
            n.d(t, { Z: () => r });
            var o = n(16689);
            const r = (e) => {
                var { color: t, variant: n = 'primary' } = e,
                    r = (function (e, t) {
                        var n = {};
                        for (var o in e)
                            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                                t.indexOf(o[r]) < 0 &&
                                    Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                                    (n[o[r]] = e[o[r]]);
                        }
                        return n;
                    })(e, ['color', 'variant']);
                return o.createElement(
                    'svg',
                    Object.assign(
                        {
                            'width': 20,
                            'height': 20,
                            'fill': 'none',
                            'xmlns': 'http://www.w3.org/2000/svg',
                            'viewBox': '0 0 20 20',
                            'aria-hidden': 'true',
                        },
                        r
                    ),
                    o.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d:
                            'M4.41 4.41a.833.833 0 011.18 0L10 8.822l4.41-4.41a.833.833 0 111.18 1.178L11.177 10l4.411 4.41a.833.833 0 01-1.178 1.18L10 11.177 5.59 15.59a.833.833 0 11-1.18-1.178L8.822 10l-4.41-4.41a.833.833 0 010-1.18z',
                        fill: t || `var(--text-${n})`,
                    })
                );
            };
        },
        78837: (e) => {
            e.exports = require('@ui/screen-size-provider');
        },
        59003: (e) => {
            e.exports = require('classnames');
        },
        16689: (e) => {
            e.exports = require('react');
        },
        66405: (e) => {
            e.exports = require('react-dom');
        },
        57518: (e) => {
            e.exports = require('styled-components');
        },
    },
    t = {};
function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var a = (t[o] = { exports: {} });
    return e[o](a, a.exports, n), a.exports;
}
(n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
}),
    (n.d = (e, t) => {
        for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
var o = {};
(() => {
    n.d(o, { Z: () => s });
    var e = n(16689),
        t = n.n(e),
        r = n(25103),
        a = n(79054),
        i = n(4850);
    const l = (n) => {
        var {
                fields: o,
                onChange: i,
                onEditStart: l,
                onEditEnd: s,
                placeholder: c,
                creatable: d,
                hideValueByCondition: p,
                locked: u,
            } = n,
            b = (function (e, t) {
                var n = {};
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                    var r = 0;
                    for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                        t.indexOf(o[r]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                            (n[o[r]] = e[o[r]]);
                }
                return n;
            })(n, [
                'fields',
                'onChange',
                'onEditStart',
                'onEditEnd',
                'placeholder',
                'creatable',
                'hideValueByCondition',
                'locked',
            ]);
        const [m, h] = (0, e.useState)(o[0]),
            [f, g] = (0, e.useState)(o.filter((e) => !e.hidden)),
            [v, y] = (0, e.useState)([]),
            [x, w] = (0, e.useState)([]),
            k = (0, e.useMemo)(
                () => f.findIndex((e) => (null == e ? void 0 : e.name) === (null == m ? void 0 : m.name)),
                [f, m]
            ),
            $ = (0, e.useMemo)(() => f.some((e) => e.locked), [f]);
        (0, e.useEffect)(() => {
            const e =
                (null == m ? void 0 : m.items.map((e) => Object.assign(Object.assign({}, e), { fieldName: m.name }))) ||
                [];
            w(e);
        }, [m, o]),
            (0, e.useEffect)(() => {
                const e = o.filter((e) => !e.hidden);
                g(e);
                const t = [];
                e.forEach((e, n) => {
                    if (n === t.length && e.value) {
                        const n = e.items.find((t) => t.code === e.value);
                        n && t.push(Object.assign(Object.assign({}, n), { fieldName: e.name }));
                    }
                }),
                    y(t),
                    h(e[t.length]);
            }, [o, p]);
        const C = (0, e.useMemo)(
            () =>
                ((e) => {
                    if (!p) return e;
                    const t = [];
                    return (
                        e.forEach((e) => {
                            const { fieldName: n } = e;
                            (n && p && p[n] && 'function' == typeof p[n] && p[n](o)) || t.push(e);
                        }),
                        t
                    );
                })(v),
            [v]
        );
        return t().createElement(
            a.Z,
            Object.assign({}, b, {
                locked: u || $,
                isMulti: !0,
                useFullItem: !0,
                isCombined: !0,
                autoOpenNextStep: k > 0,
                creatable: k >= 0 && d,
                searchable: !0,
                showAllSelectedLabel: !0,
                checkboxOptions: !1,
                items: x,
                value: C,
                optionsTitle: (null == m ? void 0 : m.caption) || '',
                placeholder: (null == m ? void 0 : m.placeholder) || c,
                onChange: (e, t) => {
                    setTimeout(() => {
                        if (t && t[0]) {
                            const { fieldName: e, remove: n, isCreatable: o } = t[0];
                            let r = e;
                            !r && o && (r = m.name);
                            const a = f.findIndex((e) => e.name === r),
                                l = n
                                    ? v.map((e, t) => (t < a ? e : null)).filter((e) => null !== e)
                                    : [...v, Object.assign(Object.assign({}, t[0]), { fieldName: r })];
                            ((e, t) => {
                                var n;
                                i && i(f[e], (null === (n = t[e]) || void 0 === n ? void 0 : n.code) || null);
                            })(a, l),
                                y(l),
                                h(((e, t) => (t ? f[e] : f[e + 1] || null))(a, n));
                        }
                    }, r.IN + 1);
                },
                onEditStart: () => {
                    l && l(m || f[f.length - 1]);
                },
                onEditEnd: () => {
                    s && s(m || f[f.length - 1]);
                },
                inputDisabled: o && !!o[o.length - 1].value,
            })
        );
    };
    (l.defaultProps = Object.assign({}, i.$g)), (l.displayName = 'CombinedSelect');
    const s = l;
})();
var r = o.Z;
export { r as default };
