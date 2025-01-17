import { withCtx, createTextVNode, createVNode, withModifiers, useSSRContext } from 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, V as VContainer, b as VRow, d as VCol, T as VBtn } from '../server.mjs';
import { V as VCard, b as VCardTitle, a as VCardText } from './VCard-33e43958.mjs';
import { V as VForm } from './VForm-152f4679.mjs';
import { V as VTextField } from './VTextField-f228ec7c.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/pathe/dist/index.mjs';

const _sfc_main = {
  created() {
    this.dohvatiSlike().then(() => {
      let matchingSlika = this.slike.find((el) => el.id === parseInt(this.$route.query.id));
      matchingSlika = JSON.parse(JSON.stringify(matchingSlika));
      if (matchingSlika) {
        this.naslov = matchingSlika.name;
        this.cijena = matchingSlika.price;
        this.autor = matchingSlika.author;
        this.godina = matchingSlika.year;
        this.tehnika = matchingSlika.technique;
        this.url = matchingSlika.url;
      }
    });
  },
  data() {
    return {
      naslov: "",
      cijena: "",
      autor: "",
      godina: "",
      tehnika: "",
      url: "",
      slike: []
    };
  },
  methods: {
    async dohvatiSlike() {
      try {
        const response = await $fetch(`${this.$config.public.BASE_URL}/products`, {
          method: "GET"
        });
        console.log(response);
        this.slike = response.products;
      } catch (error) {
        console.error("Error making POST request:", error);
      }
    },
    async submitForm() {
      try {
        const response = await $fetch(`${this.$config.public.BASE_URL}/products/${this.$route.query.id}`, {
          method: "PUT",
          body: {
            name: this.naslov,
            price: this.cijena,
            author: this.autor,
            year: this.godina,
            technique: this.tehnika,
            url: this.url,
            seller_id: 1
          }
        });
        this.$router.push("/kupovina");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(VContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, { justify: "center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                sm: "8",
                md: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, { class: "small-card" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCardTitle, {
                            class: "text-h6 text-center",
                            style: { "color": "#2b9300" }
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Ure\u0111ivanje umjetnine`);
                              } else {
                                return [
                                  createTextVNode("Ure\u0111ivanje umjetnine")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VForm, { onSubmit: $options.submitForm }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(VTextField, {
                                        modelValue: $data.naslov,
                                        "onUpdate:modelValue": ($event) => $data.naslov = $event,
                                        label: "Naslov umjetnine",
                                        required: "",
                                        persistent: ""
                                      }, null, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(VTextField, {
                                        modelValue: $data.cijena,
                                        "onUpdate:modelValue": ($event) => $data.cijena = $event,
                                        label: "Cijena umjetnine",
                                        required: "",
                                        persistent: ""
                                      }, null, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(VTextField, {
                                        modelValue: $data.autor,
                                        "onUpdate:modelValue": ($event) => $data.autor = $event,
                                        label: "Autor umjetnine",
                                        required: "",
                                        persistent: ""
                                      }, null, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(VTextField, {
                                        modelValue: $data.godina,
                                        "onUpdate:modelValue": ($event) => $data.godina = $event,
                                        label: "Godina stvaranja",
                                        required: "",
                                        persistent: ""
                                      }, null, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(VTextField, {
                                        modelValue: $data.tehnika,
                                        "onUpdate:modelValue": ($event) => $data.tehnika = $event,
                                        label: "Tehnika",
                                        required: "",
                                        persistent: ""
                                      }, null, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(VTextField, {
                                        modelValue: $data.url,
                                        "onUpdate:modelValue": ($event) => $data.url = $event,
                                        label: "URL",
                                        required: "",
                                        persistent: ""
                                      }, null, _parent7, _scopeId6));
                                      _push7(`<input type="file" accept=".jpg, .jpeg, .png"${_scopeId6}><br${_scopeId6}><br${_scopeId6}>`);
                                      _push7(ssrRenderComponent(VBtn, {
                                        type: "submit",
                                        color: "green"
                                      }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`Potvrdi`);
                                          } else {
                                            return [
                                              createTextVNode("Potvrdi")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(VTextField, {
                                          modelValue: $data.naslov,
                                          "onUpdate:modelValue": ($event) => $data.naslov = $event,
                                          label: "Naslov umjetnine",
                                          required: "",
                                          persistent: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VTextField, {
                                          modelValue: $data.cijena,
                                          "onUpdate:modelValue": ($event) => $data.cijena = $event,
                                          label: "Cijena umjetnine",
                                          required: "",
                                          persistent: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VTextField, {
                                          modelValue: $data.autor,
                                          "onUpdate:modelValue": ($event) => $data.autor = $event,
                                          label: "Autor umjetnine",
                                          required: "",
                                          persistent: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VTextField, {
                                          modelValue: $data.godina,
                                          "onUpdate:modelValue": ($event) => $data.godina = $event,
                                          label: "Godina stvaranja",
                                          required: "",
                                          persistent: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VTextField, {
                                          modelValue: $data.tehnika,
                                          "onUpdate:modelValue": ($event) => $data.tehnika = $event,
                                          label: "Tehnika",
                                          required: "",
                                          persistent: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VTextField, {
                                          modelValue: $data.url,
                                          "onUpdate:modelValue": ($event) => $data.url = $event,
                                          label: "URL",
                                          required: "",
                                          persistent: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("input", {
                                          type: "file",
                                          ref: "fileInput",
                                          onChange: _ctx.handleFileChange,
                                          accept: ".jpg, .jpeg, .png"
                                        }, null, 40, ["onChange"]),
                                        createVNode("br"),
                                        createVNode("br"),
                                        createVNode(VBtn, {
                                          type: "submit",
                                          color: "green"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Potvrdi")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(`<br${_scopeId5}>`);
                              } else {
                                return [
                                  createVNode(VForm, {
                                    onSubmit: withModifiers($options.submitForm, ["prevent"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: $data.naslov,
                                        "onUpdate:modelValue": ($event) => $data.naslov = $event,
                                        label: "Naslov umjetnine",
                                        required: "",
                                        persistent: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VTextField, {
                                        modelValue: $data.cijena,
                                        "onUpdate:modelValue": ($event) => $data.cijena = $event,
                                        label: "Cijena umjetnine",
                                        required: "",
                                        persistent: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VTextField, {
                                        modelValue: $data.autor,
                                        "onUpdate:modelValue": ($event) => $data.autor = $event,
                                        label: "Autor umjetnine",
                                        required: "",
                                        persistent: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VTextField, {
                                        modelValue: $data.godina,
                                        "onUpdate:modelValue": ($event) => $data.godina = $event,
                                        label: "Godina stvaranja",
                                        required: "",
                                        persistent: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VTextField, {
                                        modelValue: $data.tehnika,
                                        "onUpdate:modelValue": ($event) => $data.tehnika = $event,
                                        label: "Tehnika",
                                        required: "",
                                        persistent: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VTextField, {
                                        modelValue: $data.url,
                                        "onUpdate:modelValue": ($event) => $data.url = $event,
                                        label: "URL",
                                        required: "",
                                        persistent: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode("input", {
                                        type: "file",
                                        ref: "fileInput",
                                        onChange: _ctx.handleFileChange,
                                        accept: ".jpg, .jpeg, .png"
                                      }, null, 40, ["onChange"]),
                                      createVNode("br"),
                                      createVNode("br"),
                                      createVNode(VBtn, {
                                        type: "submit",
                                        color: "green"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Potvrdi")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onSubmit"]),
                                  createVNode("br")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCardTitle, {
                              class: "text-h6 text-center",
                              style: { "color": "#2b9300" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Ure\u0111ivanje umjetnine")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(VForm, {
                                  onSubmit: withModifiers($options.submitForm, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: $data.naslov,
                                      "onUpdate:modelValue": ($event) => $data.naslov = $event,
                                      label: "Naslov umjetnine",
                                      required: "",
                                      persistent: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VTextField, {
                                      modelValue: $data.cijena,
                                      "onUpdate:modelValue": ($event) => $data.cijena = $event,
                                      label: "Cijena umjetnine",
                                      required: "",
                                      persistent: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VTextField, {
                                      modelValue: $data.autor,
                                      "onUpdate:modelValue": ($event) => $data.autor = $event,
                                      label: "Autor umjetnine",
                                      required: "",
                                      persistent: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VTextField, {
                                      modelValue: $data.godina,
                                      "onUpdate:modelValue": ($event) => $data.godina = $event,
                                      label: "Godina stvaranja",
                                      required: "",
                                      persistent: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VTextField, {
                                      modelValue: $data.tehnika,
                                      "onUpdate:modelValue": ($event) => $data.tehnika = $event,
                                      label: "Tehnika",
                                      required: "",
                                      persistent: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VTextField, {
                                      modelValue: $data.url,
                                      "onUpdate:modelValue": ($event) => $data.url = $event,
                                      label: "URL",
                                      required: "",
                                      persistent: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("input", {
                                      type: "file",
                                      ref: "fileInput",
                                      onChange: _ctx.handleFileChange,
                                      accept: ".jpg, .jpeg, .png"
                                    }, null, 40, ["onChange"]),
                                    createVNode("br"),
                                    createVNode("br"),
                                    createVNode(VBtn, {
                                      type: "submit",
                                      color: "green"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Potvrdi")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onSubmit"]),
                                createVNode("br")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCard, { class: "small-card" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, {
                            class: "text-h6 text-center",
                            style: { "color": "#2b9300" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Ure\u0111ivanje umjetnine")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VForm, {
                                onSubmit: withModifiers($options.submitForm, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: $data.naslov,
                                    "onUpdate:modelValue": ($event) => $data.naslov = $event,
                                    label: "Naslov umjetnine",
                                    required: "",
                                    persistent: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VTextField, {
                                    modelValue: $data.cijena,
                                    "onUpdate:modelValue": ($event) => $data.cijena = $event,
                                    label: "Cijena umjetnine",
                                    required: "",
                                    persistent: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VTextField, {
                                    modelValue: $data.autor,
                                    "onUpdate:modelValue": ($event) => $data.autor = $event,
                                    label: "Autor umjetnine",
                                    required: "",
                                    persistent: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VTextField, {
                                    modelValue: $data.godina,
                                    "onUpdate:modelValue": ($event) => $data.godina = $event,
                                    label: "Godina stvaranja",
                                    required: "",
                                    persistent: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VTextField, {
                                    modelValue: $data.tehnika,
                                    "onUpdate:modelValue": ($event) => $data.tehnika = $event,
                                    label: "Tehnika",
                                    required: "",
                                    persistent: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VTextField, {
                                    modelValue: $data.url,
                                    "onUpdate:modelValue": ($event) => $data.url = $event,
                                    label: "URL",
                                    required: "",
                                    persistent: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("input", {
                                    type: "file",
                                    ref: "fileInput",
                                    onChange: _ctx.handleFileChange,
                                    accept: ".jpg, .jpeg, .png"
                                  }, null, 40, ["onChange"]),
                                  createVNode("br"),
                                  createVNode("br"),
                                  createVNode(VBtn, {
                                    type: "submit",
                                    color: "green"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Potvrdi")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onSubmit"]),
                              createVNode("br")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCol, {
                  cols: "12",
                  sm: "8",
                  md: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, { class: "small-card" }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, {
                          class: "text-h6 text-center",
                          style: { "color": "#2b9300" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Ure\u0111ivanje umjetnine")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VForm, {
                              onSubmit: withModifiers($options.submitForm, ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: $data.naslov,
                                  "onUpdate:modelValue": ($event) => $data.naslov = $event,
                                  label: "Naslov umjetnine",
                                  required: "",
                                  persistent: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: $data.cijena,
                                  "onUpdate:modelValue": ($event) => $data.cijena = $event,
                                  label: "Cijena umjetnine",
                                  required: "",
                                  persistent: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: $data.autor,
                                  "onUpdate:modelValue": ($event) => $data.autor = $event,
                                  label: "Autor umjetnine",
                                  required: "",
                                  persistent: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: $data.godina,
                                  "onUpdate:modelValue": ($event) => $data.godina = $event,
                                  label: "Godina stvaranja",
                                  required: "",
                                  persistent: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: $data.tehnika,
                                  "onUpdate:modelValue": ($event) => $data.tehnika = $event,
                                  label: "Tehnika",
                                  required: "",
                                  persistent: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: $data.url,
                                  "onUpdate:modelValue": ($event) => $data.url = $event,
                                  label: "URL",
                                  required: "",
                                  persistent: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("input", {
                                  type: "file",
                                  ref: "fileInput",
                                  onChange: _ctx.handleFileChange,
                                  accept: ".jpg, .jpeg, .png"
                                }, null, 40, ["onChange"]),
                                createVNode("br"),
                                createVNode("br"),
                                createVNode(VBtn, {
                                  type: "submit",
                                  color: "green"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Potvrdi")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onSubmit"]),
                            createVNode("br")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VRow, { justify: "center" }, {
            default: withCtx(() => [
              createVNode(VCol, {
                cols: "12",
                sm: "8",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "small-card" }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, {
                        class: "text-h6 text-center",
                        style: { "color": "#2b9300" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Ure\u0111ivanje umjetnine")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VForm, {
                            onSubmit: withModifiers($options.submitForm, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: $data.naslov,
                                "onUpdate:modelValue": ($event) => $data.naslov = $event,
                                label: "Naslov umjetnine",
                                required: "",
                                persistent: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: $data.cijena,
                                "onUpdate:modelValue": ($event) => $data.cijena = $event,
                                label: "Cijena umjetnine",
                                required: "",
                                persistent: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: $data.autor,
                                "onUpdate:modelValue": ($event) => $data.autor = $event,
                                label: "Autor umjetnine",
                                required: "",
                                persistent: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: $data.godina,
                                "onUpdate:modelValue": ($event) => $data.godina = $event,
                                label: "Godina stvaranja",
                                required: "",
                                persistent: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: $data.tehnika,
                                "onUpdate:modelValue": ($event) => $data.tehnika = $event,
                                label: "Tehnika",
                                required: "",
                                persistent: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: $data.url,
                                "onUpdate:modelValue": ($event) => $data.url = $event,
                                label: "URL",
                                required: "",
                                persistent: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("input", {
                                type: "file",
                                ref: "fileInput",
                                onChange: _ctx.handleFileChange,
                                accept: ".jpg, .jpeg, .png"
                              }, null, 40, ["onChange"]),
                              createVNode("br"),
                              createVNode("br"),
                              createVNode(VBtn, {
                                type: "submit",
                                color: "green"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Potvrdi")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onSubmit"]),
                          createVNode("br")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { edit as default };
//# sourceMappingURL=edit-723782b7.mjs.map
