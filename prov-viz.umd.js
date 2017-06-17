(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@ng-bootstrap/ng-bootstrap'), require('lodash'), require('d3'), require('dagre-d3')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@ng-bootstrap/ng-bootstrap', 'lodash', 'd3', 'dagre-d3'], factory) :
	(factory((global['prov-viz'] = global['prov-viz'] || {}),global._angular_core,global._angular_common,global._ngBootstrap_ngBootstrap,global._,global.d3,global.dagreD3));
}(this, (function (exports,_angular_core,_angular_common,_ngBootstrap_ngBootstrap,_,d3,dagreD3) { 'use strict';

var EXPAND_DATA = {
    "7212ff61-b2f6-461f-8f4e-ffdae735e3d4": {
        "graph": {
            "type": "Provenance",
            "directed": true,
            "nodes": [
                {
                    "id": "3ee4bf2a-c8d0-4f10-b3b3-46b7151b4ea0",
                    "type": "activity",
                    "label": "Generation of slice mpg141017_a1-2 for the reconstruction of rat hippocampus CA1 pyramidal cell morphology",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "1c4d3683-dcfc-489f-adbb-5de815b1b89a",
                    "type": "agent",
                    "label": "Maurizio Rezzoli",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "2d16451c-6661-4b9a-aa7b-e4804386f577",
                    "type": "agent",
                    "label": "Olivier Hagens",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "807ded58-579d-452d-8dd2-a5568689b2bb",
                    "type": "entity",
                    "label": "Rattus norvegicus<br><br>Subject",
                    "metadata": {
                        "subType": "specimen"
                    }
                },
                {
                    "id": "7212ff61-b2f6-461f-8f4e-ffdae735e3d4",
                    "type": "entity",
                    "label": "Brain slice<br>mpg141017_a1-2<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                }
            ],
            "edges": [
                {
                    "source": "1c4d3683-dcfc-489f-adbb-5de815b1b89a",
                    "target": "3ee4bf2a-c8d0-4f10-b3b3-46b7151b4ea0",
                    "metadata": {
                        "label": "was associated to"
                    }
                },
                {
                    "source": "2d16451c-6661-4b9a-aa7b-e4804386f577",
                    "target": "3ee4bf2a-c8d0-4f10-b3b3-46b7151b4ea0",
                    "metadata": {
                        "label": "was associated to"
                    }
                },
                {
                    "source": "3ee4bf2a-c8d0-4f10-b3b3-46b7151b4ea0",
                    "target": "807ded58-579d-452d-8dd2-a5568689b2bb",
                    "metadata": {
                        "label": "used"
                    }
                },
                {
                    "source": "7212ff61-b2f6-461f-8f4e-ffdae735e3d4",
                    "target": "3ee4bf2a-c8d0-4f10-b3b3-46b7151b4ea0",
                    "metadata": {
                        "label": "was generated from"
                    }
                }
            ]
        }
    },
    "78d02e77-98d0-430d-8516-8c712e06b002": {
        "graph": {
            "type": "Provenance",
            "directed": true,
            "nodes": [
                {
                    "id": "78d02e77-98d0-430d-8516-8c712e06b002",
                    "type": "entity",
                    "label": "Single cell<br>mpg141017_a1-2_idC<br><br>Sample",
                    "metadata": {
                        "subType": "sample"
                    }
                },
                {
                    "id": "d18742a9-fce3-4e5f-a420-781c68cab24b",
                    "type": "activity",
                    "label": "Reconstruction of rat hippocampus CA1 pyramidal cell mpg141017_a1-2_idC morphology",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "03b67cb6-db1a-4acd-a628-8dd3e5f3ee12",
                    "type": "agent",
                    "label": "Ying Shi",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "e58145a0-b78d-4b8a-bfda-fc4d32c7206b",
                    "type": "agent",
                    "label": "Caroline Violot",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "6a14755f-19d7-4516-85e4-c8a01a1a3a2d",
                    "type": "entity",
                    "label": "Single cell morphology reconstruction<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset"
                    }
                },
                {
                    "id": "f057227a-3623-45f8-99b1-4b241a800daf",
                    "type": "entity",
                    "label": "Morphology localization<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset"
                    }
                },
                {
                    "id": "814fd236-04d2-4b20-9b7e-5c45789f33b6",
                    "label": "mpg141017_a1-2_idC.ASC<br>2.74 MB<br><br>File",
                    "type": "entity",
                    "metadata": {
                        "subType": "resource"
                    }
                },
                {
                    "id": "ab6373b4-b4be-450a-b094-02b37e9ed406",
                    "type": "entity",
                    "label": "mpg141017_a1-2_idC.jpg<br>494 kB<br><br>File",
                    "metadata": {
                        "subType": "resource"
                    }
                }
            ],
            "edges": [
                {
                    "source": "d18742a9-fce3-4e5f-a420-781c68cab24b",
                    "target": "78d02e77-98d0-430d-8516-8c712e06b002",
                    "metadata": {
                        "label": "used"
                    }
                },
                {
                    "source": "03b67cb6-db1a-4acd-a628-8dd3e5f3ee12",
                    "target": "d18742a9-fce3-4e5f-a420-781c68cab24b",
                    "metadata": {
                        "label": "was associated to"
                    }
                },
                {
                    "source": "e58145a0-b78d-4b8a-bfda-fc4d32c7206b",
                    "target": "d18742a9-fce3-4e5f-a420-781c68cab24b",
                    "metadata": {
                        "label": "was associated to"
                    }
                },
                {
                    "source": "6a14755f-19d7-4516-85e4-c8a01a1a3a2d",
                    "target": "d18742a9-fce3-4e5f-a420-781c68cab24b",
                    "metadata": {
                        "label": "was generated from"
                    }
                },
                {
                    "source": "f057227a-3623-45f8-99b1-4b241a800daf",
                    "target": "d18742a9-fce3-4e5f-a420-781c68cab24b",
                    "metadata": {
                        "label": "was generated from"
                    }
                },
                {
                    "source": "814fd236-04d2-4b20-9b7e-5c45789f33b6",
                    "target": "6a14755f-19d7-4516-85e4-c8a01a1a3a2d",
                    "metadata": {
                        "label": "was generated from"
                    }
                },
                {
                    "source": "ab6373b4-b4be-450a-b094-02b37e9ed406",
                    "target": "f057227a-3623-45f8-99b1-4b241a800daf",
                    "metadata": {
                        "label": "is representation of"
                    }
                }
            ]
        }
    },
    "1dad440b-5dc3-490e-8cbc-1f21f69bcf0f": {
        "graph": {
            "type": "Provenance",
            "directed": true,
            "nodes": [
                {
                    "id": "1dad440b-5dc3-490e-8cbc-1f21f69bcf0f",
                    "type": "entity",
                    "label": "Single cell<br>mpg141017_a1-2_idA<br><br>Sample",
                    "metadata": {
                        "subType": "sample"
                    }
                },
                {
                    "id": "585764f2-bf67-4338-b798-a9137404dcc4",
                    "type": "activity",
                    "label": "Reconstruction of rat hippocampus CA1 pyramidal cell mpg141017_a1-2_idA morphology",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "03b67cb6-db1a-4acd-a628-8dd3e5f3ee12",
                    "type": "agent",
                    "label": "Ying Shi",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "e58145a0-b78d-4b8a-bfda-fc4d32c7206b",
                    "type": "agent",
                    "label": "Caroline Violot",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "f53b8016-6e30-4e17-a290-773c48775eda",
                    "type": "entity",
                    "label": "Single cell morphology reconstruction<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset"
                    }
                },
                {
                    "id": "81a9e656-4794-4d4e-a710-81f22d477de2",
                    "type": "entity",
                    "label": "Morphology localization<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset"
                    }
                },
                {
                    "id": "00f5f991-22c2-4c23-9da2-6b181a13e053",
                    "type": "entity",
                    "label": "mpg141017_a1-2_idA.ASC<br>1.75 MB<br><br>File",
                    "metadata": {
                        "subType": "resource"
                    }
                },
                {
                    "id": "a20c1cea-54b1-47f7-8ce3-0f00ce8fbc73",
                    "type": "entity",
                    "label": "mpg141017_a1-2_idA.jpg<br>486 kB<br><br>File",
                    "metadata": {
                        "subType": "resource"
                    }
                }
            ],
            "edges": [
                {
                    "source": "03b67cb6-db1a-4acd-a628-8dd3e5f3ee12",
                    "target": "585764f2-bf67-4338-b798-a9137404dcc4",
                    "metadata": {
                        "label": "was associated to"
                    }
                },
                {
                    "source": "e58145a0-b78d-4b8a-bfda-fc4d32c7206b",
                    "target": "585764f2-bf67-4338-b798-a9137404dcc4",
                    "metadata": {
                        "label": "was associated to"
                    }
                },
                {
                    "source": "585764f2-bf67-4338-b798-a9137404dcc4",
                    "target": "1dad440b-5dc3-490e-8cbc-1f21f69bcf0f",
                    "metadata": {
                        "label": "used"
                    }
                },
                {
                    "source": "f53b8016-6e30-4e17-a290-773c48775eda",
                    "target": "585764f2-bf67-4338-b798-a9137404dcc4",
                    "metadata": {
                        "label": "used"
                    }
                },
                {
                    "source": "81a9e656-4794-4d4e-a710-81f22d477de2",
                    "target": "585764f2-bf67-4338-b798-a9137404dcc4",
                    "metadata": {
                        "label": "is representation of"
                    }
                },
                {
                    "source": "00f5f991-22c2-4c23-9da2-6b181a13e053",
                    "target": "f53b8016-6e30-4e17-a290-773c48775eda",
                    "metadata": {
                        "label": "is representation of"
                    }
                },
                {
                    "source": "a20c1cea-54b1-47f7-8ce3-0f00ce8fbc73",
                    "target": "81a9e656-4794-4d4e-a710-81f22d477de2",
                    "metadata": {
                        "label": "is representation of"
                    }
                }
            ]
        }
    },
    "circuit": {
        "graph": {
            "type": "Provenance",
            "directed": true,
            "nodes": [
                {
                    "id": "sample_1",
                    "type": "entity",
                    "label": "Single cell<br>mpg_1<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "activity_reconstruction_morphology_sample_1",
                    "type": "activity",
                    "label": "Reconstruction of pyramidal cell morphology<br>mpg_1",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_reconstruction_morphology_sample_1",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "agent_2_activity_reconstruction_morphology_sample_1",
                    "type": "agent",
                    "label": "Second contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "agent_3_activity_reconstruction_morphology_sample_1",
                    "type": "agent",
                    "label": "A software",
                    "metadata": {
                        "subType": "software"
                    }
                },
                {
                    "id": "activity_registration_electrophysiology_sample_1",
                    "type": "activity",
                    "label": "Registration of pyramidal cell electrophysiology<br>mpg_1",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_registration_electrophysiology_sample_1",
                    "type": "agent",
                    "label": "A software",
                    "metadata": {
                        "subType": "software"
                    }
                },
                {
                    "id": "morphology_reconstruction_sample_1",
                    "type": "entity",
                    "label": "Morphology reconstruction<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "morphology_localization_sample_1",
                    "type": "entity",
                    "label": "Morphology localization<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "electrophysiology_sample_1",
                    "type": "entity",
                    "label": "Electrophysiology<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "activity_creation_single_neuron_model_sample_1",
                    "type": "activity",
                    "label": "Construction of single neuron model of sample 1",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_creation_single_neuron_model_sample_1",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "single_neuron_model_sample_1",
                    "type": "entity",
                    "label": "Single neuron model mpg_1<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_2",
                    "type": "entity",
                    "label": "Single cell<br>mpg_2<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "activity_reconstruction_morphology_sample_2",
                    "type": "activity",
                    "label": "Reconstruction of pyramidal cell morphology<br>mpg_2",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_reconstruction_morphology_sample_2",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "agent_2_activity_reconstruction_morphology_sample_2",
                    "type": "agent",
                    "label": "Second contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "agent_3_activity_reconstruction_morphology_sample_2",
                    "type": "agent",
                    "label": "A software",
                    "metadata": {
                        "subType": "software"
                    }
                },
                {
                    "id": "activity_registration_electrophysiology_sample_2",
                    "type": "activity",
                    "label": "Registration of pyramidal cell electrophysiology<br>mpg_2",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_registration_electrophysiology_sample_2",
                    "type": "agent",
                    "label": "A software",
                    "metadata": {
                        "subType": "software"
                    }
                },
                {
                    "id": "morphology_reconstruction_sample_2",
                    "type": "entity",
                    "label": "Morphology reconstruction<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "morphology_localization_sample_2",
                    "type": "entity",
                    "label": "Morphology localization<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "electrophysiology_sample_2",
                    "type": "entity",
                    "label": "Electrophysiology<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "activity_creation_single_neuron_model_sample_2",
                    "type": "activity",
                    "label": "Construction of single neuron model of sample 2",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_creation_single_neuron_model_sample_2",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "single_neuron_model_sample_2",
                    "type": "entity",
                    "label": "Single neuron model mpg_2<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_3",
                    "type": "entity",
                    "label": "Single cell<br>mpg_3<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "activity_reconstruction_morphology_sample_3",
                    "type": "activity",
                    "label": "Reconstruction of pyramidal cell morphology<br>mpg_3",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_reconstruction_morphology_sample_3",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "agent_2_activity_reconstruction_morphology_sample_3",
                    "type": "agent",
                    "label": "Second contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "agent_3_activity_reconstruction_morphology_sample_3",
                    "type": "agent",
                    "label": "A software",
                    "metadata": {
                        "subType": "software"
                    }
                },
                {
                    "id": "activity_registration_electrophysiology_sample_3",
                    "type": "activity",
                    "label": "Registration of pyramidal cell electrophysiology<br>mpg_3",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_registration_electrophysiology_sample_3",
                    "type": "agent",
                    "label": "A software",
                    "metadata": {
                        "subType": "software"
                    }
                },
                {
                    "id": "morphology_reconstruction_sample_3",
                    "type": "entity",
                    "label": "Morphology reconstruction<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "morphology_localization_sample_3",
                    "type": "entity",
                    "label": "Morphology localization<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "electrophysiology_sample_3",
                    "type": "entity",
                    "label": "Electrophysiology<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "activity_creation_single_neuron_model_sample_3",
                    "type": "activity",
                    "label": "Construction of single neuron model of sample 3",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_creation_single_neuron_model_sample_3",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "single_neuron_model_sample_3",
                    "type": "entity",
                    "label": "Single neuron model mpg_3<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_4",
                    "type": "entity",
                    "label": "Single cell<br>mpg_4<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "activity_reconstruction_morphology_sample_4",
                    "type": "activity",
                    "label": "Reconstruction of pyramidal cell morphology<br>mpg_4",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_reconstruction_morphology_sample_4",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "agent_2_activity_reconstruction_morphology_sample_4",
                    "type": "agent",
                    "label": "Second contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "agent_3_activity_reconstruction_morphology_sample_4",
                    "type": "agent",
                    "label": "A software",
                    "metadata": {
                        "subType": "software"
                    }
                },
                {
                    "id": "activity_registration_electrophysiology_sample_4",
                    "type": "activity",
                    "label": "Registration of pyramidal cell electrophysiology<br>mpg_4",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_registration_electrophysiology_sample_4",
                    "type": "agent",
                    "label": "A software",
                    "metadata": {
                        "subType": "software"
                    }
                },
                {
                    "id": "morphology_reconstruction_sample_4",
                    "type": "entity",
                    "label": "Morphology reconstruction<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "morphology_localization_sample_4",
                    "type": "entity",
                    "label": "Morphology localization<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "electrophysiology_sample_4",
                    "type": "entity",
                    "label": "Electrophysiology<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "activity_creation_single_neuron_model_sample_4",
                    "type": "activity",
                    "label": "Construction of single neuron model of sample 4",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_creation_single_neuron_model_sample_4",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "single_neuron_model_sample_4",
                    "type": "entity",
                    "label": "Single neuron model mpg_4<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_5",
                    "type": "entity",
                    "label": "Single cell<br>mpg_5<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "activity_reconstruction_morphology_sample_5",
                    "type": "activity",
                    "label": "Reconstruction of pyramidal cell morphology<br>mpg_5",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_reconstruction_morphology_sample_5",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "agent_2_activity_reconstruction_morphology_sample_5",
                    "type": "agent",
                    "label": "Second contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "agent_3_activity_reconstruction_morphology_sample_5",
                    "type": "agent",
                    "label": "A software",
                    "metadata": {
                        "subType": "software"
                    }
                },
                {
                    "id": "activity_registration_electrophysiology_sample_5",
                    "type": "activity",
                    "label": "Registration of pyramidal cell electrophysiology<br>mpg_5",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_registration_electrophysiology_sample_5",
                    "type": "agent",
                    "label": "A software",
                    "metadata": {
                        "subType": "software"
                    }
                },
                {
                    "id": "morphology_reconstruction_sample_5",
                    "type": "entity",
                    "label": "Morphology reconstruction<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "morphology_localization_sample_5",
                    "type": "entity",
                    "label": "Morphology localization<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "electrophysiology_sample_5",
                    "type": "entity",
                    "label": "Electrophysiology<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "activity_creation_single_neuron_model_sample_5",
                    "type": "activity",
                    "label": "Construction of single neuron model of sample 5",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_creation_single_neuron_model_sample_5",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "single_neuron_model_sample_5",
                    "type": "entity",
                    "label": "Single neuron model mpg_5<br><br>Dataset",
                    "metadata": {
                        "subType": "dataset",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "circuit",
                    "type": "entity",
                    "label": "Circuit",
                    "metadata": {
                        "subType": "circuit",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "activity_generation_circuit",
                    "type": "activity",
                    "label": "Generation of circuit",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_generation_circuit",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                }
            ],
            "edges": [
                {
                    "source": "activity_reconstruction_morphology_sample_1",
                    "target": "sample_1"
                },
                {
                    "source": "agent_1_activity_reconstruction_morphology_sample_1",
                    "target": "activity_reconstruction_morphology_sample_1"
                },
                {
                    "source": "agent_2_activity_reconstruction_morphology_sample_1",
                    "target": "activity_reconstruction_morphology_sample_1"
                },
                {
                    "source": "agent_3_activity_reconstruction_morphology_sample_1",
                    "target": "activity_reconstruction_morphology_sample_1"
                },
                {
                    "source": "activity_registration_electrophysiology_sample_1",
                    "target": "sample_1"
                },
                {
                    "source": "agent_1_activity_registration_electrophysiology_sample_1",
                    "target": "activity_registration_electrophysiology_sample_1"
                },
                {
                    "source": "morphology_reconstruction_sample_1",
                    "target": "activity_reconstruction_morphology_sample_1"
                },
                {
                    "source": "morphology_localization_sample_1",
                    "target": "activity_reconstruction_morphology_sample_1"
                },
                {
                    "source": "electrophysiology_sample_1",
                    "target": "activity_registration_electrophysiology_sample_1"
                },
                {
                    "source": "activity_creation_single_neuron_model_sample_1",
                    "target": "morphology_reconstruction_sample_1"
                },
                {
                    "source": "activity_creation_single_neuron_model_sample_1",
                    "target": "morphology_localization_sample_1"
                },
                {
                    "source": "agent_1_activity_creation_single_neuron_model_sample_1",
                    "target": "activity_creation_single_neuron_model_sample_1"
                },
                {
                    "source": "activity_creation_single_neuron_model_sample_1",
                    "target": "electrophysiology_sample_1"
                },
                {
                    "source": "single_neuron_model_sample_1",
                    "target": "activity_creation_single_neuron_model_sample_1"
                },
                {
                    "source": "activity_generation_circuit",
                    "target": "single_neuron_model_sample_1"
                },
                {
                    "source": "activity_reconstruction_morphology_sample_2",
                    "target": "sample_2"
                },
                {
                    "source": "agent_1_activity_reconstruction_morphology_sample_2",
                    "target": "activity_reconstruction_morphology_sample_2"
                },
                {
                    "source": "agent_2_activity_reconstruction_morphology_sample_2",
                    "target": "activity_reconstruction_morphology_sample_2"
                },
                {
                    "source": "agent_3_activity_reconstruction_morphology_sample_2",
                    "target": "activity_reconstruction_morphology_sample_2"
                },
                {
                    "source": "activity_registration_electrophysiology_sample_2",
                    "target": "sample_2"
                },
                {
                    "source": "agent_1_activity_registration_electrophysiology_sample_2",
                    "target": "activity_registration_electrophysiology_sample_2"
                },
                {
                    "source": "morphology_reconstruction_sample_2",
                    "target": "activity_reconstruction_morphology_sample_2"
                },
                {
                    "source": "morphology_localization_sample_2",
                    "target": "activity_reconstruction_morphology_sample_2"
                },
                {
                    "source": "electrophysiology_sample_2",
                    "target": "activity_registration_electrophysiology_sample_2"
                },
                {
                    "source": "activity_creation_single_neuron_model_sample_2",
                    "target": "morphology_reconstruction_sample_2"
                },
                {
                    "source": "activity_creation_single_neuron_model_sample_2",
                    "target": "morphology_localization_sample_2"
                },
                {
                    "source": "agent_1_activity_creation_single_neuron_model_sample_2",
                    "target": "activity_creation_single_neuron_model_sample_2"
                },
                {
                    "source": "activity_creation_single_neuron_model_sample_2",
                    "target": "electrophysiology_sample_2"
                },
                {
                    "source": "single_neuron_model_sample_2",
                    "target": "activity_creation_single_neuron_model_sample_2"
                },
                {
                    "source": "activity_generation_circuit",
                    "target": "single_neuron_model_sample_2"
                },
                {
                    "source": "activity_reconstruction_morphology_sample_3",
                    "target": "sample_3"
                },
                {
                    "source": "agent_1_activity_reconstruction_morphology_sample_3",
                    "target": "activity_reconstruction_morphology_sample_3"
                },
                {
                    "source": "agent_2_activity_reconstruction_morphology_sample_3",
                    "target": "activity_reconstruction_morphology_sample_3"
                },
                {
                    "source": "agent_3_activity_reconstruction_morphology_sample_3",
                    "target": "activity_reconstruction_morphology_sample_3"
                },
                {
                    "source": "activity_registration_electrophysiology_sample_3",
                    "target": "sample_3"
                },
                {
                    "source": "agent_1_activity_registration_electrophysiology_sample_3",
                    "target": "activity_registration_electrophysiology_sample_3"
                },
                {
                    "source": "morphology_reconstruction_sample_3",
                    "target": "activity_reconstruction_morphology_sample_3"
                },
                {
                    "source": "morphology_localization_sample_3",
                    "target": "activity_reconstruction_morphology_sample_3"
                },
                {
                    "source": "electrophysiology_sample_3",
                    "target": "activity_registration_electrophysiology_sample_3"
                },
                {
                    "source": "activity_creation_single_neuron_model_sample_3",
                    "target": "morphology_reconstruction_sample_3"
                },
                {
                    "source": "activity_creation_single_neuron_model_sample_3",
                    "target": "morphology_localization_sample_3"
                },
                {
                    "source": "agent_1_activity_creation_single_neuron_model_sample_3",
                    "target": "activity_creation_single_neuron_model_sample_3"
                },
                {
                    "source": "activity_creation_single_neuron_model_sample_3",
                    "target": "electrophysiology_sample_3"
                },
                {
                    "source": "single_neuron_model_sample_3",
                    "target": "activity_creation_single_neuron_model_sample_3"
                },
                {
                    "source": "activity_generation_circuit",
                    "target": "single_neuron_model_sample_3"
                },
                {
                    "source": "activity_reconstruction_morphology_sample_4",
                    "target": "sample_4"
                },
                {
                    "source": "agent_1_activity_reconstruction_morphology_sample_4",
                    "target": "activity_reconstruction_morphology_sample_4"
                },
                {
                    "source": "agent_2_activity_reconstruction_morphology_sample_4",
                    "target": "activity_reconstruction_morphology_sample_4"
                },
                {
                    "source": "agent_3_activity_reconstruction_morphology_sample_4",
                    "target": "activity_reconstruction_morphology_sample_4"
                },
                {
                    "source": "activity_registration_electrophysiology_sample_4",
                    "target": "sample_4"
                },
                {
                    "source": "agent_1_activity_registration_electrophysiology_sample_4",
                    "target": "activity_registration_electrophysiology_sample_4"
                },
                {
                    "source": "morphology_reconstruction_sample_4",
                    "target": "activity_reconstruction_morphology_sample_4"
                },
                {
                    "source": "morphology_localization_sample_4",
                    "target": "activity_reconstruction_morphology_sample_4"
                },
                {
                    "source": "electrophysiology_sample_4",
                    "target": "activity_registration_electrophysiology_sample_4"
                },
                {
                    "source": "activity_creation_single_neuron_model_sample_4",
                    "target": "morphology_reconstruction_sample_4"
                },
                {
                    "source": "activity_creation_single_neuron_model_sample_4",
                    "target": "morphology_localization_sample_4"
                },
                {
                    "source": "agent_1_activity_creation_single_neuron_model_sample_4",
                    "target": "activity_creation_single_neuron_model_sample_4"
                },
                {
                    "source": "activity_creation_single_neuron_model_sample_4",
                    "target": "electrophysiology_sample_4"
                },
                {
                    "source": "single_neuron_model_sample_4",
                    "target": "activity_creation_single_neuron_model_sample_4"
                },
                {
                    "source": "activity_generation_circuit",
                    "target": "single_neuron_model_sample_4"
                },
                {
                    "source": "activity_reconstruction_morphology_sample_5",
                    "target": "sample_5"
                },
                {
                    "source": "agent_1_activity_reconstruction_morphology_sample_5",
                    "target": "activity_reconstruction_morphology_sample_5"
                },
                {
                    "source": "agent_2_activity_reconstruction_morphology_sample_5",
                    "target": "activity_reconstruction_morphology_sample_5"
                },
                {
                    "source": "agent_3_activity_reconstruction_morphology_sample_5",
                    "target": "activity_reconstruction_morphology_sample_5"
                },
                {
                    "source": "activity_registration_electrophysiology_sample_5",
                    "target": "sample_5"
                },
                {
                    "source": "agent_1_activity_registration_electrophysiology_sample_5",
                    "target": "activity_registration_electrophysiology_sample_5"
                },
                {
                    "source": "morphology_reconstruction_sample_5",
                    "target": "activity_reconstruction_morphology_sample_5"
                },
                {
                    "source": "morphology_localization_sample_5",
                    "target": "activity_reconstruction_morphology_sample_5"
                },
                {
                    "source": "electrophysiology_sample_5",
                    "target": "activity_registration_electrophysiology_sample_5"
                },
                {
                    "source": "activity_creation_single_neuron_model_sample_5",
                    "target": "morphology_reconstruction_sample_5"
                },
                {
                    "source": "activity_creation_single_neuron_model_sample_5",
                    "target": "morphology_localization_sample_5"
                },
                {
                    "source": "agent_1_activity_creation_single_neuron_model_sample_5",
                    "target": "activity_creation_single_neuron_model_sample_5"
                },
                {
                    "source": "activity_creation_single_neuron_model_sample_5",
                    "target": "electrophysiology_sample_5"
                },
                {
                    "source": "single_neuron_model_sample_5",
                    "target": "activity_creation_single_neuron_model_sample_5"
                },
                {
                    "source": "activity_generation_circuit",
                    "target": "single_neuron_model_sample_5"
                },
                {
                    "source": "circuit",
                    "target": "activity_generation_circuit"
                },
                {
                    "source": "agent_1_activity_generation_circuit",
                    "target": "activity_generation_circuit"
                }
            ]
        }
    },
    "sample_1": {
        "graph": {
            "type": "Provenance",
            "directed": true,
            "nodes": [
                {
                    "id": "sample_1",
                    "type": "entity",
                    "label": "Single cell<br>mpg_1<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_2",
                    "type": "entity",
                    "label": "Single cell<br>mpg_2<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_3",
                    "type": "entity",
                    "label": "Single cell<br>mpg_3<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_4",
                    "type": "entity",
                    "label": "Single cell<br>mpg_4<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_5",
                    "type": "entity",
                    "label": "Single cell<br>mpg_5<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "brain_slice",
                    "type": "entity",
                    "label": "Brain slice<br>mpg141017<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "activity_preparation_brain_slice",
                    "type": "activity",
                    "label": "Preparation of the brain slice<br>for reconstruction of morphology and registration of electrophysiology<br>of rat hippocampus CA1 pyramidal cell",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_preparation_brain_slice",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "agent_2_activity_preparation_brain_slice",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                }
            ],
            "edges": [
                {
                    "source": "sample_1",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "sample_2",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "sample_3",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "sample_4",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "sample_5",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "activity_preparation_brain_slice",
                    "target": "brain_slice"
                },
                {
                    "source": "agent_1_activity_preparation_brain_slice",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "agent_2_activity_preparation_brain_slice",
                    "target": "activity_preparation_brain_slice"
                }
            ]
        }
    },
    "sample_2": {
        "graph": {
            "type": "Provenance",
            "directed": true,
            "nodes": [
                {
                    "id": "sample_1",
                    "type": "entity",
                    "label": "Single cell<br>mpg_1<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_2",
                    "type": "entity",
                    "label": "Single cell<br>mpg_2<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_3",
                    "type": "entity",
                    "label": "Single cell<br>mpg_3<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_4",
                    "type": "entity",
                    "label": "Single cell<br>mpg_4<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_5",
                    "type": "entity",
                    "label": "Single cell<br>mpg_5<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "brain_slice",
                    "type": "entity",
                    "label": "Brain slice<br>mpg141017<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "activity_preparation_brain_slice",
                    "type": "activity",
                    "label": "Preparation of the brain slice<br>for reconstruction of morphology and registration of electrophysiology<br>of rat hippocampus CA1 pyramidal cell",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_preparation_brain_slice",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "agent_2_activity_preparation_brain_slice",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                }
            ],
            "edges": [
                {
                    "source": "sample_1",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "sample_2",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "sample_3",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "sample_4",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "sample_5",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "activity_preparation_brain_slice",
                    "target": "brain_slice"
                },
                {
                    "source": "agent_1_activity_preparation_brain_slice",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "agent_2_activity_preparation_brain_slice",
                    "target": "activity_preparation_brain_slice"
                }
            ]
        }
    },
    "sample_3": {
        "graph": {
            "type": "Provenance",
            "directed": true,
            "nodes": [
                {
                    "id": "sample_1",
                    "type": "entity",
                    "label": "Single cell<br>mpg_1<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_2",
                    "type": "entity",
                    "label": "Single cell<br>mpg_2<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_3",
                    "type": "entity",
                    "label": "Single cell<br>mpg_3<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_4",
                    "type": "entity",
                    "label": "Single cell<br>mpg_4<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_5",
                    "type": "entity",
                    "label": "Single cell<br>mpg_5<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "brain_slice",
                    "type": "entity",
                    "label": "Brain slice<br>mpg141017<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "activity_preparation_brain_slice",
                    "type": "activity",
                    "label": "Preparation of the brain slice<br>for reconstruction of morphology and registration of electrophysiology<br>of rat hippocampus CA1 pyramidal cell",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_preparation_brain_slice",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "agent_2_activity_preparation_brain_slice",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                }
            ],
            "edges": [
                {
                    "source": "sample_1",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "sample_2",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "sample_3",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "sample_4",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "sample_5",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "activity_preparation_brain_slice",
                    "target": "brain_slice"
                },
                {
                    "source": "agent_1_activity_preparation_brain_slice",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "agent_2_activity_preparation_brain_slice",
                    "target": "activity_preparation_brain_slice"
                }
            ]
        }
    },
    "sample_4": {
        "graph": {
            "type": "Provenance",
            "directed": true,
            "nodes": [
                {
                    "id": "sample_1",
                    "type": "entity",
                    "label": "Single cell<br>mpg_1<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_2",
                    "type": "entity",
                    "label": "Single cell<br>mpg_2<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_3",
                    "type": "entity",
                    "label": "Single cell<br>mpg_3<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_4",
                    "type": "entity",
                    "label": "Single cell<br>mpg_4<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_5",
                    "type": "entity",
                    "label": "Single cell<br>mpg_5<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "brain_slice",
                    "type": "entity",
                    "label": "Brain slice<br>mpg141017<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "activity_preparation_brain_slice",
                    "type": "activity",
                    "label": "Preparation of the brain slice<br>for reconstruction of morphology and registration of electrophysiology<br>of rat hippocampus CA1 pyramidal cell",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_preparation_brain_slice",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "agent_2_activity_preparation_brain_slice",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                }
            ],
            "edges": [
                {
                    "source": "sample_1",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "sample_2",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "sample_3",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "sample_4",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "sample_5",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "activity_preparation_brain_slice",
                    "target": "brain_slice"
                },
                {
                    "source": "agent_1_activity_preparation_brain_slice",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "agent_2_activity_preparation_brain_slice",
                    "target": "activity_preparation_brain_slice"
                }
            ]
        }
    },
    "sample_5": {
        "graph": {
            "type": "Provenance",
            "directed": true,
            "nodes": [
                {
                    "id": "sample_1",
                    "type": "entity",
                    "label": "Single cell<br>mpg_1<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_2",
                    "type": "entity",
                    "label": "Single cell<br>mpg_2<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_3",
                    "type": "entity",
                    "label": "Single cell<br>mpg_3<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_4",
                    "type": "entity",
                    "label": "Single cell<br>mpg_4<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "sample_5",
                    "type": "entity",
                    "label": "Single cell<br>mpg_5<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "brain_slice",
                    "type": "entity",
                    "label": "Brain slice<br>mpg141017<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "activity_preparation_brain_slice",
                    "type": "activity",
                    "label": "Preparation of the brain slice<br>for reconstruction of morphology and registration of electrophysiology<br>of rat hippocampus CA1 pyramidal cell",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_preparation_brain_slice",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "agent_2_activity_preparation_brain_slice",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                }
            ],
            "edges": [
                {
                    "source": "sample_1",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "sample_2",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "sample_3",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "sample_4",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "sample_5",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "activity_preparation_brain_slice",
                    "target": "brain_slice"
                },
                {
                    "source": "agent_1_activity_preparation_brain_slice",
                    "target": "activity_preparation_brain_slice"
                },
                {
                    "source": "agent_2_activity_preparation_brain_slice",
                    "target": "activity_preparation_brain_slice"
                }
            ]
        }
    },
    "brain_slice": {
        "graph": {
            "type": "Provenance",
            "directed": true,
            "nodes": [
                {
                    "id": "activity_generation_slice",
                    "type": "activity",
                    "label": "Generation of slice mpg141017<br>for reconstruction of morphology and registration of electrophysiology<br>of rat hippocampus CA1 pyramidal cell",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_generation_slice",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "agent_2_activity_generation_slice",
                    "type": "agent",
                    "label": "Second contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "specimen",
                    "type": "entity",
                    "label": "Rattus norvegicus<br><br>Subject",
                    "metadata": {
                        "subType": "specimen",
                        "links": [
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "brain_slice",
                    "type": "entity",
                    "label": "Brain slice<br>mpg141017<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "activity_generation_slice",
                    "type": "activity",
                    "label": "Generation of slice mpg141017<br>for reconstruction of morphology and registration of electrophysiology<br>of rat hippocampus CA1 pyramidal cell",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_generation_slice",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "agent_2_activity_generation_slice",
                    "type": "agent",
                    "label": "Second contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "specimen",
                    "type": "entity",
                    "label": "Rattus norvegicus<br><br>Subject",
                    "metadata": {
                        "subType": "specimen",
                        "links": [
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "brain_slice",
                    "type": "entity",
                    "label": "Brain slice<br>mpg141017<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "activity_generation_slice",
                    "type": "activity",
                    "label": "Generation of slice mpg141017<br>for reconstruction of morphology and registration of electrophysiology<br>of rat hippocampus CA1 pyramidal cell",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_generation_slice",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "agent_2_activity_generation_slice",
                    "type": "agent",
                    "label": "Second contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "specimen",
                    "type": "entity",
                    "label": "Rattus norvegicus<br><br>Subject",
                    "metadata": {
                        "subType": "specimen",
                        "links": [
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "brain_slice",
                    "type": "entity",
                    "label": "Brain slice<br>mpg141017<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "activity_generation_slice",
                    "type": "activity",
                    "label": "Generation of slice mpg141017<br>for reconstruction of morphology and registration of electrophysiology<br>of rat hippocampus CA1 pyramidal cell",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_generation_slice",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "agent_2_activity_generation_slice",
                    "type": "agent",
                    "label": "Second contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "specimen",
                    "type": "entity",
                    "label": "Rattus norvegicus<br><br>Subject",
                    "metadata": {
                        "subType": "specimen",
                        "links": [
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "brain_slice",
                    "type": "entity",
                    "label": "Brain slice<br>mpg141017<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "activity_generation_slice",
                    "type": "activity",
                    "label": "Generation of slice mpg141017<br>for reconstruction of morphology and registration of electrophysiology<br>of rat hippocampus CA1 pyramidal cell",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "agent_1_activity_generation_slice",
                    "type": "agent",
                    "label": "First contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "agent_2_activity_generation_slice",
                    "type": "agent",
                    "label": "Second contributor",
                    "metadata": {
                        "subType": "contributor"
                    }
                },
                {
                    "id": "specimen",
                    "type": "entity",
                    "label": "Rattus norvegicus<br><br>Subject",
                    "metadata": {
                        "subType": "specimen",
                        "links": [
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                },
                {
                    "id": "brain_slice",
                    "type": "entity",
                    "label": "Brain slice<br>mpg141017<br><br>Sample",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                }
            ],
            "edges": [
                {
                    "source": "activity_generation_slice",
                    "target": "specimen"
                },
                {
                    "source": "agent_1_activity_generation_slice",
                    "target": "activity_generation_slice"
                },
                {
                    "source": "agent_2_activity_generation_slice",
                    "target": "activity_generation_slice"
                },
                {
                    "source": "brain_slice",
                    "target": "activity_generation_slice"
                },
                {
                    "source": "activity_generation_slice",
                    "target": "specimen"
                },
                {
                    "source": "agent_1_activity_generation_slice",
                    "target": "activity_generation_slice"
                },
                {
                    "source": "agent_2_activity_generation_slice",
                    "target": "activity_generation_slice"
                },
                {
                    "source": "brain_slice",
                    "target": "activity_generation_slice"
                },
                {
                    "source": "activity_generation_slice",
                    "target": "specimen"
                },
                {
                    "source": "agent_1_activity_generation_slice",
                    "target": "activity_generation_slice"
                },
                {
                    "source": "agent_2_activity_generation_slice",
                    "target": "activity_generation_slice"
                },
                {
                    "source": "brain_slice",
                    "target": "activity_generation_slice"
                },
                {
                    "source": "activity_generation_slice",
                    "target": "specimen"
                },
                {
                    "source": "agent_1_activity_generation_slice",
                    "target": "activity_generation_slice"
                },
                {
                    "source": "agent_2_activity_generation_slice",
                    "target": "activity_generation_slice"
                },
                {
                    "source": "brain_slice",
                    "target": "activity_generation_slice"
                },
                {
                    "source": "activity_generation_slice",
                    "target": "specimen"
                },
                {
                    "source": "agent_1_activity_generation_slice",
                    "target": "activity_generation_slice"
                },
                {
                    "source": "agent_2_activity_generation_slice",
                    "target": "activity_generation_slice"
                },
                {
                    "source": "brain_slice",
                    "target": "activity_generation_slice"
                }
            ]
        }
    }
};

var DETAILS = {
    "7212ff61-b2f6-461f-8f4e-ffdae735e3d4": {
        "title": "Sample",
        "content": "<span><b>Type</b></span>\n      <br>\n      <span>Brain slice</span>\n      <br><br>\n      <span><b>Name</b></span>\n      <br>\n      <span>mpg141017_a1-2</span>"
    },
    "a26a766d-0906-4999-9650-7f66584ee6a5": {
        "title": "Activity",
        "content": "<span><b>Title</b></span>\n      <br>\n      <span>Preparation of the brain slice for the reconstruction of rat hippocampus CA1 pyramidal cell morphology</span>\n      <br><br>\n      <span><b>Protocol</b></span>\n      <br>\n      <span>Cells in the slices were visualized using infrared differential interference contrast video microscopy (VX55 camera, Till Photonics, Germany and BX51WI microscope, Olympus, Japan). Recordings were performed at 32 +/- 1°C in standard ACSF with an Axon Multiclamp 700B Amplifier (Molecular Devices, USA) using 2 – 10 MOhm borosilicate pipettes, containing (in mM): K+-gluconate 110.00, KCl 10.00, ATP-Mg2+ 4.00, Na2-phosphocreatine 10.00, GTP-Na+ 0.30, HEPES 10.00, biocytin 3.00 mg/ml; pH 7.30, 300 mOsm.</span>\n      <br><br>\n      <span><b>2 contributors</b></span>\n      <br>\n      <ul>\n      <li>Maurizio Rezzoli</li>\n      <li>Olivier Hagens</li>\n      </ul>"
    },
    "specimen": {
        "title": "Subject",
        "content": "<span><b>Species</b></span>\n      <br>\n      <span>Rattus novergicus</span>\n      <br><br>\n      <span><b>Age</b></span>\n      <br>\n      <span>18 days (Post-natal)</span>\n      <br><br>\n      <span><b>Sex</b></span>\n      <br>\n      <span>Male</span>\n      <br><br>\n      <span><b>Strain</b></span>\n      <br>\n      <span>Wistar</span>"
    },
    "brain_slice": {
        "title": "Sample",
        "content": "<span><b>Name</b></span>\n      <br>\n      <span>mpg141017</span>\n      <br><br>\n      <span><b>Brain region</b></span>\n      <br>\n      <span>Field CA1, stratum pyramidale<br>(BBP_WHS_SD:0000119)</span>\n      <br><br>\n      <span><b>Scale</b></span>\n      <br>\n      <span>Brain slice<br>(BBP_SCL:0000004)</span>"
    },
    "activity_generation_slice": {
        "title": "Activity",
        "content": "<span><b>Title</b></span>\n      <br>\n      <span>Generation of slice mpg141017_a1-2 for the reconstruction of rat hippocampus CA1 pyramidal cell morphology</span>\n      <br><br>\n      <span><b>Type</b></span>\n      <br>\n      <span>Experiment<br>(BBP_ACT:0000006)</span>\n      <br><br>\n      <span><b>Protocol</b></span>\n      <br>\n      <span>The rat brain was quickly dissected and sliced into 300 µm-thick coronal slices (HR2 vibratome, Sigmann Elektronik, Germany) in ice-cold artificial cerebrospinal fluid (ACSF) (in mM: NaCl 124.0, KCl 2.50, MgCl2 10.0, NaH2PO4 1.25, CaCl2 0.50, D-(+)-Glucose 25.00, NaHC03 25.00; pH 7.3, s.d. 0.1, aerated with 95% O2 / 5%CO2), followed by a 15 minute incubation at 34°C in standard ACSF (in mM: NaCl 124.0, KCl 2.50, MgCl2 1.00, NaH2PO4 1.25, CaCl2 2.00, D-(+)-Glucose 25.00, NaHC03 25.00; pH 7.40, aerated with 95% O2 / 5%CO2).</span>\n      <br><br>\n      <span><b>2 contributors</b></span>\n      <br>\n      <ul>\n        <li>Maurizio Pezzoli (Researcher)</li>\n        <li>Olivier Hagens (Researcher)</li>\n      </ul>"
    },
    "activity_preparation_brain_slice": {
        "title": "Activity",
        "content": "<span><b>Title</b></span>\n      <br>\n      <span>Preparation of the brain slice for the reconstruction of rat hippocampus CA1 pyramidal cell morphology</span>\n      <br><br>\n      <span><b>Type</b></span>\n      <br>\n      <span>Experiment<br>(BBP_ACT:0000006)</span>\n      <br><br>\n      <span><b>Protocol</b></span>\n      <br>\n      <span>Cells in the slices were visualized using infrared differential interference contrast video microscopy (VX55 camera, Till Photonics, Germany and BX51WI microscope, Olympus, Japan). Recordings were performed at 32 +/- 1°C in standard ACSF with an Axon Multiclamp 700B Amplifier (Molecular Devices, USA) using 2 – 10 MOhm borosilicate pipettes, containing (in mM): K+-gluconate 110.00, KCl 10.00, ATP-Mg2+ 4.00, Na2-phosphocreatine 10.00, GTP-Na+ 0.30, HEPES 10.00, biocytin 3.00 mg/ml; pH 7.30, 300 mOsm.</span>\n      <br><br>\n      <span><b>2 contributors</b></span>\n      <br>\n      <ul>\n        <li>Maurizio Pezzoli (Researcher)</li>\n        <li>Olivier Hagens (Researcher)</li>\n      </ul>"
    },
    "sample_1": {
        "title": "Sample",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>mpg_1</span>\n    <br><br>\n    <span><b>Brain region</b></span>\n    <br>\n    <span>Field CA1, stratum pyramidale<br>(BBP_WHS_SD:0000119)</span>\n    <br><br>\n    <span><b>Scale</b></span>\n    <br>\n    <span>Single cell<br>(BBP_SCL:0000006)</span>"
    },
    "morphology_reconstruction_sample_1": {
        "title": "Dataset",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>Rat hippocampus CA1 pyramidal cell mpg_1 morphology</span>\n    <br><br>\n    <span><b>Description</b></span>\n    <br>\n    <span>Neurolucida ASCII file containing the morphology reconstruction</span>\n    <br><br>\n    <span><b>Categories</b></span>\n    <br>\n    <ul>\n      <li>Single cell morphology reconstruction<br>(BBP_DAMO:0000019)</li>\n    </ul>\n    <span><b>License</b></span>\n    <br>\n    <span>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International<br>(BBP_LICENSE:0000002)</span>\n    <br><br>\n    <span><b>1 resource</b></span>\n    <br>\n    <ul>\n      <li>mpg_1.asc (2.74 MB) <i class=\"fa fa-download\" aria-hidden=\"true\"></i></li>\n    </ul>"
    },
    "morphology_localization_sample_1": {
        "title": "Dataset",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>Rat hippocampus CA1 pyramidal cell mpg_1 morphology localization</span>\n    <br><br>\n    <span><b>Description</b></span>\n    <br>\n    <span>File containing the image of the localization of the morphology reconstruction in the brain slice</span>\n    <br><br>\n    <span><b>Categories</b></span>\n    <br>\n    <ul>\n      <li>Morphology localization<br>(BBP_DAMO:0000067)</li>\n    </ul>\n    <span><b>License</b></span>\n    <br>\n    <span>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International<br>(BBP_LICENSE:0000002)</span>\n    <br><br>\n    <span><b>1 resource</b></span>\n    <br>\n    <ul>\n      <li>mpg_1.jpg (494 Kb) <i class=\"fa fa-download\" aria-hidden=\"true\"></i></li>\n    </ul>"
    },
    "electrophysiology_sample_1": {
        "title": "Dataset",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>Electrophysiology of pyramidal cell mpg_1</span>"
    },
    "activity_reconstruction_morphology_sample_1": {
        "title": "Activity",
        "content": "<span><b>Title</b></span>\n    <br>\n    <span>Reconstruction of rat hippocampus CA1 pyramidal cell mpg_1 morphology</span>\n    <br><br>\n    <span><b>Type</b></span>\n    <br>\n    <span>Experiment<br>(BBP_ACT:0000006)</span>\n    <br><br>\n    <span><b>Protocol</b></span>\n    <br>\n    <span>The filled-in biocytin was revealed with 3,3′-diaminobenzidine (DAB), after o/n fixation of the slice in 2% PFA + 0.3% picric acid + 1% glutaraldehyde. Next, the cell was reconstructed in 3D under an Olympus BX51W microscope with an oil-immersion 100X (NA 1.35) objective using Neurolucida software (MicroBrightField, Magdeburg, Germany).</span>\n    <br><br>\n    <span><b>2 contributors</b></span>\n    <br>\n    <ul>\n      <li>Ying Shi (Researcher)</li>\n      <li>Caroline Violot (Researcher)</li>\n    </ul>"
    },
    "activity_registration_electrophysiology_sample_1": {
        "title": "Activity",
        "content": "<span><b>Title</b></span>\n    <br>\n    <span>Registration of pyramidal cell electrophysiology mpg_1</span>"
    },
    "single_neuron_model_sample_1": {
        "title": "Dataset",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>Single neuron model of pyramidal cell mpg_1</span>"
    },
    "activity_creation_single_neuron_model_sample_1": {
        "title": "Activity",
        "content": "<span><b>Title</b></span>\n    <br>\n    <span>Creation of single neuron model of sample 1</span>"
    },
    "sample_2": {
        "title": "Sample",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>mpg_2</span>\n    <br><br>\n    <span><b>Brain region</b></span>\n    <br>\n    <span>Field CA1, stratum pyramidale<br>(BBP_WHS_SD:0000119)</span>\n    <br><br>\n    <span><b>Scale</b></span>\n    <br>\n    <span>Single cell<br>(BBP_SCL:0000006)</span>"
    },
    "morphology_reconstruction_sample_2": {
        "title": "Dataset",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>Rat hippocampus CA1 pyramidal cell mpg_2 morphology</span>\n    <br><br>\n    <span><b>Description</b></span>\n    <br>\n    <span>Neurolucida ASCII file containing the morphology reconstruction</span>\n    <br><br>\n    <span><b>Categories</b></span>\n    <br>\n    <ul>\n      <li>Single cell morphology reconstruction<br>(BBP_DAMO:0000019)</li>\n    </ul>\n    <span><b>License</b></span>\n    <br>\n    <span>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International<br>(BBP_LICENSE:0000002)</span>\n    <br><br>\n    <span><b>1 resource</b></span>\n    <br>\n    <ul>\n      <li>mpg_2.asc (2.74 MB) <i class=\"fa fa-download\" aria-hidden=\"true\"></i></li>\n    </ul>"
    },
    "morphology_localization_sample_2": {
        "title": "Dataset",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>Rat hippocampus CA1 pyramidal cell mpg_2 morphology localization</span>\n    <br><br>\n    <span><b>Description</b></span>\n    <br>\n    <span>File containing the image of the localization of the morphology reconstruction in the brain slice</span>\n    <br><br>\n    <span><b>Categories</b></span>\n    <br>\n    <ul>\n      <li>Morphology localization<br>(BBP_DAMO:0000067)</li>\n    </ul>\n    <span><b>License</b></span>\n    <br>\n    <span>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International<br>(BBP_LICENSE:0000002)</span>\n    <br><br>\n    <span><b>1 resource</b></span>\n    <br>\n    <ul>\n      <li>mpg_2.jpg (494 Kb) <i class=\"fa fa-download\" aria-hidden=\"true\"></i></li>\n    </ul>"
    },
    "electrophysiology_sample_2": {
        "title": "Dataset",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>Electrophysiology of pyramidal cell mpg_2</span>"
    },
    "activity_reconstruction_morphology_sample_2": {
        "title": "Activity",
        "content": "<span><b>Title</b></span>\n    <br>\n    <span>Reconstruction of rat hippocampus CA1 pyramidal cell mpg_2 morphology</span>\n    <br><br>\n    <span><b>Type</b></span>\n    <br>\n    <span>Experiment<br>(BBP_ACT:0000006)</span>\n    <br><br>\n    <span><b>Protocol</b></span>\n    <br>\n    <span>The filled-in biocytin was revealed with 3,3′-diaminobenzidine (DAB), after o/n fixation of the slice in 2% PFA + 0.3% picric acid + 1% glutaraldehyde. Next, the cell was reconstructed in 3D under an Olympus BX51W microscope with an oil-immersion 100X (NA 1.35) objective using Neurolucida software (MicroBrightField, Magdeburg, Germany).</span>\n    <br><br>\n    <span><b>2 contributors</b></span>\n    <br>\n    <ul>\n      <li>Ying Shi (Researcher)</li>\n      <li>Caroline Violot (Researcher)</li>\n    </ul>"
    },
    "activity_registration_electrophysiology_sample_2": {
        "title": "Activity",
        "content": "<span><b>Title</b></span>\n    <br>\n    <span>Registration of pyramidal cell electrophysiology mpg_2</span>"
    },
    "single_neuron_model_sample_2": {
        "title": "Dataset",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>Single neuron model of pyramidal cell mpg_2</span>"
    },
    "activity_creation_single_neuron_model_sample_2": {
        "title": "Activity",
        "content": "<span><b>Title</b></span>\n    <br>\n    <span>Creation of single neuron model of sample 2</span>"
    },
    "sample_3": {
        "title": "Sample",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>mpg_3</span>\n    <br><br>\n    <span><b>Brain region</b></span>\n    <br>\n    <span>Field CA1, stratum pyramidale<br>(BBP_WHS_SD:0000119)</span>\n    <br><br>\n    <span><b>Scale</b></span>\n    <br>\n    <span>Single cell<br>(BBP_SCL:0000006)</span>"
    },
    "morphology_reconstruction_sample_3": {
        "title": "Dataset",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>Rat hippocampus CA1 pyramidal cell mpg_3 morphology</span>\n    <br><br>\n    <span><b>Description</b></span>\n    <br>\n    <span>Neurolucida ASCII file containing the morphology reconstruction</span>\n    <br><br>\n    <span><b>Categories</b></span>\n    <br>\n    <ul>\n      <li>Single cell morphology reconstruction<br>(BBP_DAMO:0000019)</li>\n    </ul>\n    <span><b>License</b></span>\n    <br>\n    <span>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International<br>(BBP_LICENSE:0000002)</span>\n    <br><br>\n    <span><b>1 resource</b></span>\n    <br>\n    <ul>\n      <li>mpg_3.asc (2.74 MB) <i class=\"fa fa-download\" aria-hidden=\"true\"></i></li>\n    </ul>"
    },
    "morphology_localization_sample_3": {
        "title": "Dataset",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>Rat hippocampus CA1 pyramidal cell mpg_3 morphology localization</span>\n    <br><br>\n    <span><b>Description</b></span>\n    <br>\n    <span>File containing the image of the localization of the morphology reconstruction in the brain slice</span>\n    <br><br>\n    <span><b>Categories</b></span>\n    <br>\n    <ul>\n      <li>Morphology localization<br>(BBP_DAMO:0000067)</li>\n    </ul>\n    <span><b>License</b></span>\n    <br>\n    <span>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International<br>(BBP_LICENSE:0000002)</span>\n    <br><br>\n    <span><b>1 resource</b></span>\n    <br>\n    <ul>\n      <li>mpg_3.jpg (494 Kb) <i class=\"fa fa-download\" aria-hidden=\"true\"></i></li>\n    </ul>"
    },
    "electrophysiology_sample_3": {
        "title": "Dataset",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>Electrophysiology of pyramidal cell mpg_3</span>"
    },
    "activity_reconstruction_morphology_sample_3": {
        "title": "Activity",
        "content": "<span><b>Title</b></span>\n    <br>\n    <span>Reconstruction of rat hippocampus CA1 pyramidal cell mpg_3 morphology</span>\n    <br><br>\n    <span><b>Type</b></span>\n    <br>\n    <span>Experiment<br>(BBP_ACT:0000006)</span>\n    <br><br>\n    <span><b>Protocol</b></span>\n    <br>\n    <span>The filled-in biocytin was revealed with 3,3′-diaminobenzidine (DAB), after o/n fixation of the slice in 2% PFA + 0.3% picric acid + 1% glutaraldehyde. Next, the cell was reconstructed in 3D under an Olympus BX51W microscope with an oil-immersion 100X (NA 1.35) objective using Neurolucida software (MicroBrightField, Magdeburg, Germany).</span>\n    <br><br>\n    <span><b>2 contributors</b></span>\n    <br>\n    <ul>\n      <li>Ying Shi (Researcher)</li>\n      <li>Caroline Violot (Researcher)</li>\n    </ul>"
    },
    "activity_registration_electrophysiology_sample_3": {
        "title": "Activity",
        "content": "<span><b>Title</b></span>\n    <br>\n    <span>Registration of pyramidal cell electrophysiology mpg_3</span>"
    },
    "single_neuron_model_sample_3": {
        "title": "Dataset",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>Single neuron model of pyramidal cell mpg_3</span>"
    },
    "activity_creation_single_neuron_model_sample_3": {
        "title": "Activity",
        "content": "<span><b>Title</b></span>\n    <br>\n    <span>Creation of single neuron model of sample 3</span>"
    },
    "sample_4": {
        "title": "Sample",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>mpg_4</span>\n    <br><br>\n    <span><b>Brain region</b></span>\n    <br>\n    <span>Field CA1, stratum pyramidale<br>(BBP_WHS_SD:0000119)</span>\n    <br><br>\n    <span><b>Scale</b></span>\n    <br>\n    <span>Single cell<br>(BBP_SCL:0000006)</span>"
    },
    "morphology_reconstruction_sample_4": {
        "title": "Dataset",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>Rat hippocampus CA1 pyramidal cell mpg_4 morphology</span>\n    <br><br>\n    <span><b>Description</b></span>\n    <br>\n    <span>Neurolucida ASCII file containing the morphology reconstruction</span>\n    <br><br>\n    <span><b>Categories</b></span>\n    <br>\n    <ul>\n      <li>Single cell morphology reconstruction<br>(BBP_DAMO:0000019)</li>\n    </ul>\n    <span><b>License</b></span>\n    <br>\n    <span>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International<br>(BBP_LICENSE:0000002)</span>\n    <br><br>\n    <span><b>1 resource</b></span>\n    <br>\n    <ul>\n      <li>mpg_4.asc (2.74 MB) <i class=\"fa fa-download\" aria-hidden=\"true\"></i></li>\n    </ul>"
    },
    "morphology_localization_sample_4": {
        "title": "Dataset",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>Rat hippocampus CA1 pyramidal cell mpg_4 morphology localization</span>\n    <br><br>\n    <span><b>Description</b></span>\n    <br>\n    <span>File containing the image of the localization of the morphology reconstruction in the brain slice</span>\n    <br><br>\n    <span><b>Categories</b></span>\n    <br>\n    <ul>\n      <li>Morphology localization<br>(BBP_DAMO:0000067)</li>\n    </ul>\n    <span><b>License</b></span>\n    <br>\n    <span>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International<br>(BBP_LICENSE:0000002)</span>\n    <br><br>\n    <span><b>1 resource</b></span>\n    <br>\n    <ul>\n      <li>mpg_4.jpg (494 Kb) <i class=\"fa fa-download\" aria-hidden=\"true\"></i></li>\n    </ul>"
    },
    "electrophysiology_sample_4": {
        "title": "Dataset",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>Electrophysiology of pyramidal cell mpg_4</span>"
    },
    "activity_reconstruction_morphology_sample_4": {
        "title": "Activity",
        "content": "<span><b>Title</b></span>\n    <br>\n    <span>Reconstruction of rat hippocampus CA1 pyramidal cell mpg_4 morphology</span>\n    <br><br>\n    <span><b>Type</b></span>\n    <br>\n    <span>Experiment<br>(BBP_ACT:0000006)</span>\n    <br><br>\n    <span><b>Protocol</b></span>\n    <br>\n    <span>The filled-in biocytin was revealed with 3,3′-diaminobenzidine (DAB), after o/n fixation of the slice in 2% PFA + 0.3% picric acid + 1% glutaraldehyde. Next, the cell was reconstructed in 3D under an Olympus BX51W microscope with an oil-immersion 100X (NA 1.35) objective using Neurolucida software (MicroBrightField, Magdeburg, Germany).</span>\n    <br><br>\n    <span><b>2 contributors</b></span>\n    <br>\n    <ul>\n      <li>Ying Shi (Researcher)</li>\n      <li>Caroline Violot (Researcher)</li>\n    </ul>"
    },
    "activity_registration_electrophysiology_sample_4": {
        "title": "Activity",
        "content": "<span><b>Title</b></span>\n    <br>\n    <span>Registration of pyramidal cell electrophysiology mpg_4</span>"
    },
    "single_neuron_model_sample_4": {
        "title": "Dataset",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>Single neuron model of pyramidal cell mpg_4</span>"
    },
    "activity_creation_single_neuron_model_sample_4": {
        "title": "Activity",
        "content": "<span><b>Title</b></span>\n    <br>\n    <span>Creation of single neuron model of sample 4</span>"
    },
    "sample_5": {
        "title": "Sample",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>mpg_5</span>\n    <br><br>\n    <span><b>Brain region</b></span>\n    <br>\n    <span>Field CA1, stratum pyramidale<br>(BBP_WHS_SD:0000119)</span>\n    <br><br>\n    <span><b>Scale</b></span>\n    <br>\n    <span>Single cell<br>(BBP_SCL:0000006)</span>"
    },
    "morphology_reconstruction_sample_5": {
        "title": "Dataset",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>Rat hippocampus CA1 pyramidal cell mpg_5 morphology</span>\n    <br><br>\n    <span><b>Description</b></span>\n    <br>\n    <span>Neurolucida ASCII file containing the morphology reconstruction</span>\n    <br><br>\n    <span><b>Categories</b></span>\n    <br>\n    <ul>\n      <li>Single cell morphology reconstruction<br>(BBP_DAMO:0000019)</li>\n    </ul>\n    <span><b>License</b></span>\n    <br>\n    <span>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International<br>(BBP_LICENSE:0000002)</span>\n    <br><br>\n    <span><b>1 resource</b></span>\n    <br>\n    <ul>\n      <li>mpg_5.asc (2.74 MB) <i class=\"fa fa-download\" aria-hidden=\"true\"></i></li>\n    </ul>"
    },
    "morphology_localization_sample_5": {
        "title": "Dataset",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>Rat hippocampus CA1 pyramidal cell mpg_5 morphology localization</span>\n    <br><br>\n    <span><b>Description</b></span>\n    <br>\n    <span>File containing the image of the localization of the morphology reconstruction in the brain slice</span>\n    <br><br>\n    <span><b>Categories</b></span>\n    <br>\n    <ul>\n      <li>Morphology localization<br>(BBP_DAMO:0000067)</li>\n    </ul>\n    <span><b>License</b></span>\n    <br>\n    <span>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International<br>(BBP_LICENSE:0000002)</span>\n    <br><br>\n    <span><b>1 resource</b></span>\n    <br>\n    <ul>\n      <li>mpg_5.jpg (494 Kb) <i class=\"fa fa-download\" aria-hidden=\"true\"></i></li>\n    </ul>"
    },
    "electrophysiology_sample_5": {
        "title": "Dataset",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>Electrophysiology of pyramidal cell mpg_5</span>"
    },
    "activity_reconstruction_morphology_sample_5": {
        "title": "Activity",
        "content": "<span><b>Title</b></span>\n    <br>\n    <span>Reconstruction of rat hippocampus CA1 pyramidal cell mpg_5 morphology</span>\n    <br><br>\n    <span><b>Type</b></span>\n    <br>\n    <span>Experiment<br>(BBP_ACT:0000006)</span>\n    <br><br>\n    <span><b>Protocol</b></span>\n    <br>\n    <span>The filled-in biocytin was revealed with 3,3′-diaminobenzidine (DAB), after o/n fixation of the slice in 2% PFA + 0.3% picric acid + 1% glutaraldehyde. Next, the cell was reconstructed in 3D under an Olympus BX51W microscope with an oil-immersion 100X (NA 1.35) objective using Neurolucida software (MicroBrightField, Magdeburg, Germany).</span>\n    <br><br>\n    <span><b>2 contributors</b></span>\n    <br>\n    <ul>\n      <li>Ying Shi (Researcher)</li>\n      <li>Caroline Violot (Researcher)</li>\n    </ul>"
    },
    "activity_registration_electrophysiology_sample_5": {
        "title": "Activity",
        "content": "<span><b>Title</b></span>\n    <br>\n    <span>Registration of pyramidal cell electrophysiology mpg_5</span>"
    },
    "single_neuron_model_sample_5": {
        "title": "Dataset",
        "content": "<span><b>Name</b></span>\n    <br>\n    <span>Single neuron model of pyramidal cell mpg_5</span>"
    },
    "activity_creation_single_neuron_model_sample_5": {
        "title": "Activity",
        "content": "<span><b>Title</b></span>\n    <br>\n    <span>Creation of single neuron model of sample 5</span>"
    },
    "activity_generation_circuit": {
        "title": "Activity",
        "content": "<span><b>Title</b></span>\n      <br>\n      <span>Generation of circuit</span>"
    },
    "circuit": {
        "title": "Circuit",
        "content": "<span><b>Name</b></span>\n      <br>\n      <span>Circuit</span>"
    },
    "activity_creation_simulation": {
        "title": "Activity",
        "content": "<span><b>Title</b></span>\n      <br>\n      <span>Creation of the simulation from the circuit</span>"
    },
    "simulation": {
        "title": "Simulation",
        "content": "<span><b>Name</b></span>\n      <br>\n      <span>Simulation</span>"
    },
    "activity_validation_simulation": {
        "title": "Activity",
        "content": "<span><b>Title</b></span>\n      <br>\n      <span>Validation of the simulation</span>"
    },
    "validation_simulation": {
        "title": "Validation",
        "content": "<span><b>Name</b></span>\n      <br>\n      <span>Validation of simulation</span>"
    }
};

var NodeDetailService = (function () {
    function NodeDetailService() {
    }
    /**
     * @param {?} nodeId
     * @return {?}
     */
    NodeDetailService.prototype.get = function (nodeId) {
        //TODO: CHANGE BEHAVIOR (THIS BEHAVIOR IS FOR TEST PURPOSE ONLY)
        if (DETAILS[nodeId]) {
            var /** @type {?} */ information = {};
            information['title'] = DETAILS[nodeId]['title'];
            information['content'] = DETAILS[nodeId]['content'];
            return information;
        }
        else {
            throw 'Error occurred when retrieving data';
        }
    };
    return NodeDetailService;
}());
NodeDetailService.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
NodeDetailService.ctorParameters = function () { return []; };

var NodeDetailComponent = (function () {
    /**
     * Constructor of DumperComponent
     * @param {?} nodeDetailService Injection of Node detail service
     */
    function NodeDetailComponent(nodeDetailService) {
        this.nodeDetailService = nodeDetailService;
        this.ngNodeDetailViewClosed = new _angular_core.EventEmitter();
    }
    /**
     * Lifecycle hook called when view of component has been fully initialized
     * (see Angular documentation: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html#!#oninit)
     * @return {?}
     */
    NodeDetailComponent.prototype.ngOnInit = function () {
        this.fetchInformation();
    };
    /**
     * Retrieves information of the node
     * @return {?}
     */
    NodeDetailComponent.prototype.fetchInformation = function () {
        var _this = this;
        this.rendering = true;
        this.error = false;
        setTimeout(function () {
            try {
                var /** @type {?} */ data = _this.nodeDetailService.get(_this.nodeId);
                _this.title = data['title'];
                _this.content = data['content'];
                _this.rendering = false;
            }
            catch (e) {
                _this.handleError(e);
            }
        }, NodeDetailComponent.delay);
    };
    /**
     * Sends an event to inform parent that user closed the view
     * @return {?}
     */
    NodeDetailComponent.prototype.close = function () {
        this.ngNodeDetailViewClosed.emit();
    };
    /**
     * Handles error
     * @param {?} exception Exception raised during retrieve and display of node details
     * @return {?}
     */
    NodeDetailComponent.prototype.handleError = function (exception) {
        this.rendering = false;
        this.error = true;
        console.error(exception);
    };
    return NodeDetailComponent;
}());
NodeDetailComponent.delay = 500;
NodeDetailComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'node-detail',
                providers: [NodeDetailService],
                inputs: ['nodeId'],
                outputs: ['ngNodeDetailViewClosed'],
                template: "<div class=\"card rendering\" *ngIf=\"rendering\"> <div class=\"card-block\"> <i class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw fa-4x\"></i> <br/> <span>Retrieving information</span> <br/> <a class=\"text-primary\" (click)=\"close()\">[cancel]</a> </div> </div> <div class=\"card error\" *ngIf=\"error\"> <div class=\"card-block\"> <i class=\"fa fa-exclamation-circle fa-fw fa-4x\"></i> <br/> <span>Information could not be retrieved</span> <br/> <a class=\"text-primary\" (click)=\"close()\">[close]</a> </div> </div> <div id=\"node-information\" class=\"card\" *ngIf=\"!rendering && !error\"> <h3 class=\"card-header\">{{title}} <i id=\"close\" class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"close()\"></i></h3> <div class=\"card-block text-justify\" [innerHTML]=\"content\"> </div> </div> ",
                styles: [":host { position: absolute; bottom: 0; right: 0; margin-right: 10px; margin-bottom: 10px; width: 30vw; height: 30vh; } div { width: 100%; height: 100%; overflow: scroll; } #close { float: right; } .rendering, .error { width: 100%; height: 100%; } #node-information > .card-header { background-color: #0275d8; color: #ffffff; } .rendering > .card-block { display: flex; flex-direction: column; align-items: center; justify-content: center; } .error > .card-block { background-color: rgba(255, 0, 0, 0.05); display: flex; flex-direction: column; align-items: center; justify-content: center; } .rendering > i { align-self: center; color: #0275d8; } "]
            },] },
];
/**
 * @nocollapse
 */
NodeDetailComponent.ctorParameters = function () { return [
    { type: NodeDetailService, },
]; };

var Node = (function () {
    /**
     * Constructor of Node
     * @param {?} id (optional) Identifier of the Node (if empty, temporary identifier is created; pattern: 'temp_<UUID>' where UUID complies with V1)
     * @param {?=} type Type of Node according to Provenance specification in context of Provenance graph, null otherwise
     * @param {?=} subType (optional) Subtype of Node (by default, null)
     * @param {?=} label
     */
    function Node(id, type, subType, label) {
        this.v = id;
        this.value = {};
        this.value['type'] = type || null;
        this.value['label'] = label || this.getLabel();
        this.value['subType'] = subType || null;
    }
    /**
     * Getter: identifier
     * @return {?} Identifier of the Node
     */
    Node.prototype.getId = function () {
        return this.v;
    };
    /**
     * Setter: identifier
     * @param {?} id Identifier of the Node
     * @return {?}
     */
    Node.prototype.setId = function (id) {
        this.v = id;
    };
    /**
     * Getter: type
     * @return {?} Type of the Node
     */
    Node.prototype.getType = function () {
        return this.value['type'];
    };
    /**
     * Getter: label
     * @return {?} Label of the Node
     */
    Node.prototype.getLabel = function () {
        return this.value['label'] || (this.value['type'] && this.value['type'].toUpperCase()) || this.v;
    };
    /**
     * Generic getter
     * @param {?} property Property to be retrieved
     * @return {?} Value associated to property if property exists, null otherwise
     */
    Node.prototype.get = function (property) {
        return this.value[property];
    };
    /**
     * Generic setter
     * @param {?} property Property for which new value must be set
     * @param {?} value New value to associate with property
     * @return {?}
     */
    Node.prototype.set = function (property, value) {
        this.value[property] = value;
    };
    /**
     * Appends element for given property if aforesaid property exists
     * @param {?} property Property for which element must be appended
     * @param {?} element Element to append
     * @param {?=} end Indicates if element must be appended at the end (by default, true)
     * @param {?=} key (optional) Key if property is an Object
     * @return {?}
     */
    Node.prototype.append = function (property, element, end, key) {
        if (end === void 0) { end = true; }
        if (this.value[property]) {
            this.appendElement(property, element, end, key);
        }
    };
    /**
     * Appends element for given property based on type of attribute
     * @param {?} property Property for which element must be appended
     * @param {?} element Element to append
     * @param {?} end Indicates if element must be appended at the end
     * @param {?=} key (optional) Key if property is an Object
     * @return {?}
     */
    Node.prototype.appendElement = function (property, element, end, key) {
        if (typeof this.value[property] === 'string') {
            this.value[property] = end ? this.value[property] + element : element + this.value[property];
        }
        else if ((typeof this.value[property] === 'object') && key) {
            this.value[property][key] = element;
        }
        else if (Array.isArray(this.value[property])) {
            end ? this.value[property].push(element) : this.value[property].unshift(element);
        }
    };
    return Node;
}());

var Edge = (function () {
    /**
     * Constructor of Edge
     * @param {?} source Identifier of source of the edge
     * @param {?} target Identifier of target of the edge
     * @param {?=} label (optional) Label to be displayed on the edge
     */
    function Edge(source, target, label) {
        this.v = source;
        this.w = target;
        this.value = {};
        this.value['label'] = label || this.getLabel();
    }
    /**
     * Getter: source
     * @return {?} Identifier of source of the edge
     */
    Edge.prototype.getSource = function () {
        return this.v;
    };
    /**
     * Setter: source
     * @param {?} source Identifier of source of the edge
     * @return {?}
     */
    Edge.prototype.setSource = function (source) {
        this.v = source;
    };
    /**
     * Getter: target
     * @return {?} Identifier of target of the edge
     */
    Edge.prototype.getTarget = function () {
        return this.w;
    };
    /**
     * Setter: target
     * @param {?} target Identifier of target of the edge
     * @return {?}
     */
    Edge.prototype.setTarget = function (target) {
        this.w = target;
    };
    /**
     * Getter: label
     * @return {?} Label of the edge
     */
    Edge.prototype.getLabel = function () {
        return this.value['label'] || '';
    };
    /**
     * Setter: label
     * @param {?} label Label of the edge
     * @return {?}
     */
    Edge.prototype.setLabel = function (label) {
        this.value['label'] = label;
    };
    /**
     * Generic getter
     * @param {?} property Property to be retrieved
     * @return {?} Value associated to property if property exists, null otherwise
     */
    Edge.prototype.get = function (property) {
        return this.value[property] || null;
    };
    /**
     * Generic setter
     * @param {?} property Property for which new value must be set
     * @param {?} value New value to associate with property
     * @return {?}
     */
    Edge.prototype.set = function (property, value) {
        this.value[property] = value;
    };
    /**
     * Appends element for given property if aforesaid property exists
     * @param {?} property Property for which element must be appended
     * @param {?} element Element to append
     * @param {?=} end Indicates if element must be appended at the end (by default, true)
     * @param {?=} key (optional) Key if property is an Object
     * @return {?}
     */
    Edge.prototype.append = function (property, element, end, key) {
        if (end === void 0) { end = true; }
        if (this.value[property]) {
            this.appendElement(property, element, end, key);
        }
    };
    /**
     * Appends element for given property based on type of attribute
     * @param {?} property Property for which element must be appended
     * @param {?} element Element to append
     * @param {?} end Indicates if element must be appended at the end
     * @param {?=} key (optional) Key if property is an Object
     * @return {?}
     */
    Edge.prototype.appendElement = function (property, element, end, key) {
        if (typeof this.value[property] === 'string') {
            this.value[property] = end ? this.value[property] + element : element + this.value[property];
        }
        else if ((typeof this.value[property] === 'object') && key) {
            this.value[property][key] = element;
        }
        else if (Array.isArray(this.value[property])) {
            end ? this.value[property].push(element) : this.value[property].unshift(element);
        }
    };
    return Edge;
}());

var Graph = (function () {
    /**
     * Constructor of Graph
     * @param {?} data JSON-GRAPH instance
     * @param {?} type Type of the graph ('Provenance' for a provenance trail, something else (including null) for generic graph)
     * @param {?} direction Direction of the graph (see dagre documentation for accepted values)
     */
    function Graph(data, type, direction) {
        this.data = data;
        this.type = type;
        this.direction = direction;
        this.nodes = new Array();
        this.edges = new Array();
        this.nodesOfSimplifiedGraph = new Array();
        this.edgesOfSimplifiedGraph = new Array();
    }
    /**
     * Constructs the Graphlib instance of the graph
     * @return {?} Graphlib instance formatted as Object
     */
    Graph.prototype.getGraphlibRepresentationOfGraph = function () {
        if (this.type === 'Provenance') {
            return { provenance: true, simplified: this.simplifiedGraph, extended: this.completeGraph };
        }
        else {
            return { provenance: false, extended: this.completeGraph };
        }
    };
    /**
     * Constructs the complete graph
     * @return {?}
     */
    Graph.prototype.createCompleteGraph = function () {
        this.convertNodesAndEdges();
        this.removeAgents();
        this.storeCompleteGraph();
    };
    /**
     * Constructs the simplified version of the graph
     * @return {?}
     */
    Graph.prototype.createSimplifiedGraph = function () {
        this.cloneDeepNodesAndEdges();
        this.convertNodesAndEdgesForSimpleGraph();
        this.storeSimplifiedGraph();
    };
    /**
     * Updates nodes and edges of the graph
     * @param {?} completeGraph Updated graph that must be stored
     * @param {?} simplifiedGraph Updated graph that must be stored (simplified version)
     * @return {?}
     */
    Graph.prototype.update = function (completeGraph, simplifiedGraph) {
        this.updateCompleteGraph(completeGraph);
        this.updateSimplifiedGraph(simplifiedGraph);
    };
    /**
     * Updates nodes and edges of the complete graph
     * @param {?} completeGraph Updated graph that must be stored
     * @return {?}
     */
    Graph.prototype.updateCompleteGraph = function (completeGraph) {
        this.nodes = completeGraph['nodes'];
        this.edges = completeGraph['edges'];
        this.completeGraph = completeGraph;
    };
    /**
     * Updates nodes and edges of the simplified representation of the graph
     * @param {?} simplifiedGraph Updated graph that must be stored (simplified version)
     * @return {?}
     */
    Graph.prototype.updateSimplifiedGraph = function (simplifiedGraph) {
        this.nodesOfSimplifiedGraph = simplifiedGraph['nodes'];
        this.edgesOfSimplifiedGraph = simplifiedGraph['edges'];
        this.simplifiedGraph = simplifiedGraph;
    };
    /**
     * Retrieves the nodes of the specified graph
     * @param {?} typeOfGraph Type of the graph for which nodes must be retrieved ('simplified' for simplified version, something else (including null) for complete graph)
     * @return {?} Array of nodes of the graph
     */
    Graph.prototype.getNodes = function (typeOfGraph) {
        if (typeOfGraph === 'simplified') {
            return this.nodesOfSimplifiedGraph;
        }
        else {
            return this.nodes;
        }
    };
    /**
     * Retrieves the edges of the specified graph
     * @param {?} typeOfGraph Type of the graph for which edges must be retrieved ('simplified' for simplified version, something else (including null) for complete graph)
     * @return {?} Array of edges of the graph
     */
    Graph.prototype.getEdges = function (typeOfGraph) {
        if (typeOfGraph === 'simplified') {
            return this.edgesOfSimplifiedGraph;
        }
        else {
            return this.edges;
        }
    };
    /**
     * Stores the complete graph
     * @return {?}
     */
    Graph.prototype.storeCompleteGraph = function () {
        this.completeGraph = { value: { rankdir: this.direction }, nodes: this.nodes, edges: this.edges };
    };
    /**
     * Stores the simplified representation of the graph
     * @return {?}
     */
    Graph.prototype.storeSimplifiedGraph = function () {
        this.simplifiedGraph = { value: { rankdir: this.direction }, nodes: this.nodesOfSimplifiedGraph, edges: this.edgesOfSimplifiedGraph };
    };
    /**
     * Converts all the nodes and edges from JSON-GRAPH to Graphlib representation
     * @return {?}
     */
    Graph.prototype.convertNodesAndEdges = function () {
        if (this.data['graph']['nodes']) {
            this.convertNodes();
        }
        if (this.data['graph']['edges']) {
            this.convertEdges();
        }
    };
    /**
     * Converts all the nodes from JSON-GRAPH to Graphlib representation
     * @return {?}
     */
    Graph.prototype.convertNodes = function () {
        for (var _i = 0, _a = this.data['graph']['nodes']; _i < _a.length; _i++) {
            var jsonGraphNode = _a[_i];
            var /** @type {?} */ node = this.createNode(jsonGraphNode);
            this.nodes.push(node);
        }
    };
    /**
     * Creates Graphlib node from a JSON-GRAPH representation of a given node
     * @param {?} jsonGraphNode
     * @return {?} Graphlib node
     */
    Graph.prototype.createNode = function (jsonGraphNode) {
        var /** @type {?} */ id = jsonGraphNode['id'];
        var /** @type {?} */ type = jsonGraphNode['type'] || null;
        var /** @type {?} */ subType = (jsonGraphNode['metadata'] && jsonGraphNode['metadata']['subType']) || null;
        var /** @type {?} */ label = jsonGraphNode['label'] || null;
        var /** @type {?} */ node = new Node(id, type, subType, label);
        for (var /** @type {?} */ key in jsonGraphNode['metadata']) {
            node.set(key, jsonGraphNode['metadata'][key]);
        }
        node.set('labelType', 'html'); // By default, we enable HTML in labels
        return node;
    };
    /**
     * Converts all the edges from JSON-GRAPH to Graphlib representation
     * @return {?}
     */
    Graph.prototype.convertEdges = function () {
        for (var _i = 0, _a = this.data['graph']['edges']; _i < _a.length; _i++) {
            var jsonGraphEdge = _a[_i];
            if (this.checkIfSourceAndTargetExist(jsonGraphEdge)) {
                var /** @type {?} */ edge = this.createEdge(jsonGraphEdge);
                this.edges.push(edge);
            }
        }
    };
    /**
     * Creates Graphlib edge from a JSON-GRAPH representation of a given edge
     * @param {?} jsonGraphEdge
     * @return {?} Graphlib edge
     */
    Graph.prototype.createEdge = function (jsonGraphEdge) {
        var /** @type {?} */ source = jsonGraphEdge['source'];
        var /** @type {?} */ target = jsonGraphEdge['target'];
        var /** @type {?} */ label = jsonGraphEdge['label'] || null;
        var /** @type {?} */ edge = new Edge(source, target, label);
        for (var /** @type {?} */ key in jsonGraphEdge['metadata']) {
            edge.set(key, jsonGraphEdge['metadata'][key]);
        }
        return edge;
    };
    /**
     * Converts all nodes and edges to build simplified version of graph
     * @return {?}
     */
    Graph.prototype.convertNodesAndEdgesForSimpleGraph = function () {
        this.mergeDatasetsAndRelatedResources();
        this.removeActivities();
    };
    /**
     * Removes all the agents and their associated edges from the provenance trail
     * @return {?}
     */
    Graph.prototype.removeAgents = function () {
        var /** @type {?} */ activities = this.nodes.filter(function (n) { return n.getType() === 'activity'; });
        for (var _i = 0, activities_1 = activities; _i < activities_1.length; _i++) {
            var activity = activities_1[_i];
            this.mergeActivityAndRelatedAgents(activity);
        }
    };
    /**
     * @param {?} activity
     * @return {?}
     */
    Graph.prototype.mergeActivityAndRelatedAgents = function (activity) {
        var _this = this;
        var /** @type {?} */ agentsId = this.edges.filter(function (e) { return (e.getTarget() === activity.getId()) && _this.checkIfElementIsAgent(e.getSource(), _this.nodes); }).map(function (e) { return e.getSource(); });
        this.changeLabelOfActivity(activity, agentsId);
        this.removeAgentsFromGraph(agentsId);
    };
    /**
     * Checks if element is an agent
     * @param {?} elementId Identifier of element to check
     * @param {?} nodes Nodes to consider when searching for element
     * @return {?} True if element is an agent, false otherwise
     */
    Graph.prototype.checkIfElementIsAgent = function (elementId, nodes) {
        var /** @type {?} */ element = nodes.find(function (n) { return n.getId() === elementId; });
        return element && (element.getType() === 'agent' || element.get('subType') === 'agent');
    };
    /**
     * Changes the label of an activity to show number of collaborators it contains
     * @param {?} activity Activity for which label is modified
     * @param {?} agentsId
     * @return {?}
     */
    Graph.prototype.changeLabelOfActivity = function (activity, agentsId) {
        var /** @type {?} */ agentsList = this.nodes.filter(function (n) { return _.includes(agentsId, n.getId()); });
        var /** @type {?} */ nbOfCollaborators = 0;
        for (var _i = 0, agentsList_1 = agentsList; _i < agentsList_1.length; _i++) {
            var agents = agentsList_1[_i];
            if (agents.get('subType') === 'contributor') {
                nbOfCollaborators++;
            }
        }
        activity.append('label', "<br><br>" + (nbOfCollaborators === 0 ? 'no' : nbOfCollaborators) + " contributor" + (nbOfCollaborators > 1 ? 's' : ''));
    };
    /**
     * Removes all the agents from the the graph
     * @param {?} agentsId Identifiers of all the agents
     * @return {?}
     */
    Graph.prototype.removeAgentsFromGraph = function (agentsId) {
        this.nodes = this.nodes.filter(function (n) { return !_.includes(agentsId, n.getId()); });
        this.edges = this.edges.filter(function (e) { return !_.includes(agentsId, e.getSource()); });
    };
    /**
     * Merges all the resources with their respective datasets
     * @return {?}
     */
    Graph.prototype.mergeDatasetsAndRelatedResources = function () {
        var /** @type {?} */ datasets = this.nodesOfSimplifiedGraph.filter(function (n) { return n.getType() === 'entity' && n.get('subType') === 'dataset'; });
        for (var _i = 0, datasets_1 = datasets; _i < datasets_1.length; _i++) {
            var dataset = datasets_1[_i];
            this.mergeDatasetAndRelatedResources(dataset);
        }
    };
    /**
     * Merges all the resources of a given dataset
     * @param {?} dataset Dataset for which resources must be merged with
     * IMPORTANT: dataset is modified through the function and by inner functions
     * @return {?}
     */
    Graph.prototype.mergeDatasetAndRelatedResources = function (dataset) {
        var _this = this;
        var /** @type {?} */ resourcesId = this.edgesOfSimplifiedGraph.filter(function (e) { return (e.getTarget() === dataset.getId()) && _this.checkIfElementIsResource(e.getSource(), _this.nodesOfSimplifiedGraph); }).map(function (e) { return e.getSource(); });
        if (Array.isArray(resourcesId) && resourcesId.length) {
            var /** @type {?} */ resources = this.nodesOfSimplifiedGraph.filter(function (n) { return _.includes(resourcesId, n.getId()); });
            dataset.set('members', []);
            for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
                var resource = resources_1[_i];
                this.linkDatasetWithElementsRelatedToResource(dataset, resource);
            }
            this.changeLabelOfDataset(dataset, resources);
            this.removeResourcesFromSimplifiedGraph(resourcesId);
        }
    };
    /**
     * Checks if element is a resource
     * @param {?} elementId Identifier of element to check
     * @param {?} nodes
     * @return {?} True if element is a resource, false otherwise
     */
    Graph.prototype.checkIfElementIsResource = function (elementId, nodes) {
        var /** @type {?} */ element = nodes.find(function (n) { return n.getId() === elementId; });
        return element && (element.getType() === 'resource' || element.get('subType') === 'resource');
    };
    /**
     * Links a given dataset with all elements that are linked with resource it is linked with
     * @param {?} dataset Dataset to be considered for linking
     * @param {?} resource Resource linked with the dataset
     * @return {?}
     */
    Graph.prototype.linkDatasetWithElementsRelatedToResource = function (dataset, resource) {
        dataset.append('members', resource);
        var /** @type {?} */ elementsLinkedWithResource = this.edgesOfSimplifiedGraph.filter(function (e) { return e.getTarget() === resource.getId(); }).map(function (e) { return e.getSource(); });
        for (var _i = 0, elementsLinkedWithResource_1 = elementsLinkedWithResource; _i < elementsLinkedWithResource_1.length; _i++) {
            var element = elementsLinkedWithResource_1[_i];
            this.edgesOfSimplifiedGraph.push(new Edge(element, dataset.getId(), 'was derived from')); // By default, we consider derivation link between the entities
        }
    };
    /**
     * Changes the label of a dataset to show number of resources it contains
     * @param {?} dataset Dataset for which label is modified
     * @param {?} resources Resources linked to the dataset
     * IMPORTANT: dataset is modified through the function
     * @return {?}
     */
    Graph.prototype.changeLabelOfDataset = function (dataset, resources) {
        dataset.append('label', "<br>" + resources.length + " resource" + (resources.length > 1 ? 's' : ''));
    };
    /**
     * Removes all the resources from the simplified version of the graph
     * @param {?} resourcesId Identifiers of all the resources
     * @return {?}
     */
    Graph.prototype.removeResourcesFromSimplifiedGraph = function (resourcesId) {
        this.nodesOfSimplifiedGraph = this.nodesOfSimplifiedGraph.filter(function (n) { return !_.includes(resourcesId, n.getId()); });
        this.edgesOfSimplifiedGraph = this.edgesOfSimplifiedGraph.filter(function (e) { return !_.includes(resourcesId, e.getSource()) && !_.includes(resourcesId, e.getTarget()); });
    };
    /**
     * Removes all activities from the simplified version of the graph
     * @return {?}
     */
    Graph.prototype.removeActivities = function () {
        var /** @type {?} */ activities = this.nodesOfSimplifiedGraph.filter(function (n) { return n.getType() === 'activity' || n.get('subtype') === 'activity'; });
        for (var _i = 0, activities_2 = activities; _i < activities_2.length; _i++) {
            var activity = activities_2[_i];
            this.linkSourcesAndGeneratedEntitiesOfActivity(activity);
        }
        this.nodesOfSimplifiedGraph = this.nodesOfSimplifiedGraph.filter(function (n) { return n.getType() === 'entity'; });
    };
    /**
     * Creates edges between all sources and generated entities of a given activity
     * @param {?} activity Activity to be considered for creation of edges between sources and generated entities
     * @return {?}
     */
    Graph.prototype.linkSourcesAndGeneratedEntitiesOfActivity = function (activity) {
        var /** @type {?} */ sourcesId = this.edgesOfSimplifiedGraph.filter(function (e) { return e.getSource() === activity.getId(); }).map(function (e) { return e.getTarget(); });
        var /** @type {?} */ generatedElementsId = this.edgesOfSimplifiedGraph.filter(function (e) { return e.getTarget() === activity.getId(); }).map(function (e) { return e.getSource(); });
        for (var _i = 0, sourcesId_1 = sourcesId; _i < sourcesId_1.length; _i++) {
            var sourceId = sourcesId_1[_i];
            for (var _a = 0, generatedElementsId_1 = generatedElementsId; _a < generatedElementsId_1.length; _a++) {
                var generatedElementId = generatedElementsId_1[_a];
                this.edgesOfSimplifiedGraph.push(new Edge(generatedElementId, sourceId, 'was derived from')); // By default, we assume derivation between entities
            }
        }
        this.edgesOfSimplifiedGraph = this.edgesOfSimplifiedGraph.filter(function (e) { return !(e.getSource() === activity.getId()) && !(e.getTarget() === activity.getId()); });
    };
    /**
     * Clones nodes and edges of the complete graph
     * @return {?}
     */
    Graph.prototype.cloneDeepNodesAndEdges = function () {
        this.cloneDeepNodes();
        this.cloneDeepEdges();
    };
    /**
     * Clones nodes of the complete graph
     * @return {?}
     */
    Graph.prototype.cloneDeepNodes = function () {
        for (var _i = 0, _a = this.nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            this.nodesOfSimplifiedGraph.push(_.cloneDeep(_.toPlainObject(node)));
        }
    };
    /**
     * Clones edges of the complete graph
     * @return {?}
     */
    Graph.prototype.cloneDeepEdges = function () {
        for (var _i = 0, _a = this.edges; _i < _a.length; _i++) {
            var edge = _a[_i];
            this.edgesOfSimplifiedGraph.push(_.cloneDeep(_.toPlainObject(edge)));
        }
    };
    /**
     * Checks if an edge is valid (i.e. both source and target exist in the graph)
     * @param {?} jsonGraphEdge JSON-GRAPH edge to be validated
     * @return {?} True if edge is valid, false otherwise
     */
    Graph.prototype.checkIfSourceAndTargetExist = function (jsonGraphEdge) {
        var /** @type {?} */ source = this.nodes.find(function (n) { return n.getId() === jsonGraphEdge['source']; });
        var /** @type {?} */ target = this.nodes.find(function (n) { return n.getId() === jsonGraphEdge['target']; });
        return (source && target) ? true : false;
    };
    return Graph;
}());

var MapperService = (function () {
    function MapperService() {
    }
    /**
     * Formats the input data
     * @param {?=} input (optional) Data to be formatted as graphlib instance
     * @return {?} Formatted data (Graphlib instance) if input, null otherwise
     */
    MapperService.prototype.format = function (input) {
        if (input) {
            var /** @type {?} */ type = input['graph']['type'] || MapperService.defaultType;
            this.direction = input['graph']['direction'] || MapperService.defaultDirection;
            this.globalGraph = new Graph(input, type, this.direction);
            if (input['graph'] && (input['graph']['type'] === 'Provenance')) {
                this.createProvenanceGraph();
            }
            else {
                this.createGenericGraph();
            }
            return this.globalGraph.getGraphlibRepresentationOfGraph();
        }
        else {
            return null;
        }
    };
    /**
     * Extends the graph
     * @param {?} input Data of the subgraph to be formatted as graphlib instance
     * @return {?} Formatted data (Graphlib instance) containing subgraph if input or saved global graph if any or null
     */
    MapperService.prototype.extend = function (input) {
        if (input && input['graph'] && (input['graph']['type'] === 'Provenance')) {
            this.subGraph = new Graph(input, 'Provenance', this.direction);
            this.updateProvenanceGraph();
            return this.mergeGraphs();
        }
        else {
            return (this.globalGraph && this.globalGraph.getGraphlibRepresentationOfGraph()) || null;
        }
    };
    /**
     * Retrieves the identifier of the added nodes during expand of graph
     * @param {?} input Data of the subgraph to be appended to the global graph
     * @param {?} entitiesOnly True if only new added entities must be considered, false otherwise
     * @return {?} List of identifiers of added nodes, null if input does not contain nodes
     */
    MapperService.prototype.retrieveNewNodesId = function (input, entitiesOnly) {
        if (input && input['graph'] && input['graph']['nodes']) {
            var /** @type {?} */ data = entitiesOnly ? _.filter(input['graph']['nodes'], ['type', 'entity']) : input['graph']['nodes'];
            return _.map(data, 'id');
        }
        return null;
    };
    /**
     * Creates the Provenance graph
     * @return {?}
     */
    MapperService.prototype.createProvenanceGraph = function () {
        this.globalGraph.createCompleteGraph();
        this.globalGraph.createSimplifiedGraph();
    };
    /**
     * Creates generic graph
     * @return {?}
     */
    MapperService.prototype.createGenericGraph = function () {
        this.globalGraph.createCompleteGraph();
    };
    /**
     * Updates Provenance graph by adding subgraph to the global graph
     * @return {?}
     */
    MapperService.prototype.updateProvenanceGraph = function () {
        this.subGraph.createCompleteGraph();
        this.subGraph.createSimplifiedGraph();
    };
    /**
     * Merges the global graph with the subgraph representing the immediate context of the element that was extended
     * @return {?} Object containing the global graph with the subgraph representing the immediate context of the element that was extended (simplified and complete representations)
     */
    MapperService.prototype.mergeGraphs = function () {
        var /** @type {?} */ completeGraph = this.mergeGraph('complete');
        var /** @type {?} */ simplifiedGraph = this.mergeGraph('simplified');
        this.globalGraph.update(completeGraph, simplifiedGraph);
        return { provenance: true, simplified: simplifiedGraph, extended: completeGraph };
    };
    /**
     * Merges (complete or simplified) graph with the subgraph representing the immediate context of the element that was extended
     * @param {?} typeOfGraph Type of the graph that must be merged (simplified or complete)
     * @return {?} Graphlib instance containing the complete (respectively simplified) graph and the subgraph representing the immediate context of the element that was extended
     */
    MapperService.prototype.mergeGraph = function (typeOfGraph) {
        var /** @type {?} */ nodes = this.mergeNodes(typeOfGraph);
        var /** @type {?} */ edges = this.mergeEdges(typeOfGraph);
        return { value: { rankdir: this.direction }, nodes: nodes, edges: edges };
    };
    /**
     * Merges nodes of global graph and subgraph
     * @param {?} typeOfGraph Type of the graph that must be merged (simplified or complete)
     * @return {?} Array of merged nodes
     */
    MapperService.prototype.mergeNodes = function (typeOfGraph) {
        var /** @type {?} */ globalGraphNodes = this.globalGraph.getNodes(typeOfGraph);
        var /** @type {?} */ globalGraphNodesId = globalGraphNodes.map(function (n) { return n.getId(); });
        var /** @type {?} */ subGraphNodes = this.subGraph.getNodes(typeOfGraph);
        var /** @type {?} */ subGraphNodesId = subGraphNodes.map(function (n) { return n.getId(); });
        var _loop_1 = function (id) {
            // We remove nodes from the original global graph if they are both in the subgrap and the global graph
            if (_.includes(globalGraphNodes, id)) {
                _.remove(globalGraphNodes, function (n) { return n.getId() === id; });
            }
        };
        for (var _i = 0, subGraphNodesId_1 = subGraphNodesId; _i < subGraphNodesId_1.length; _i++) {
            var id = subGraphNodesId_1[_i];
            _loop_1(/** @type {?} */ id);
        }
        return _.concat(globalGraphNodes, subGraphNodes);
    };
    /**
     * Merges edges of global graph and subgraph
     * @param {?} typeOfGraph Type of the graph that must be merged (simplified or complete)
     * @return {?} Array of merged edges
     */
    MapperService.prototype.mergeEdges = function (typeOfGraph) {
        return _.concat(this.globalGraph.getEdges(typeOfGraph), this.subGraph.getEdges(typeOfGraph));
    };
    return MapperService;
}());
MapperService.defaultType = 'Generic';
MapperService.defaultDirection = 'BT';
MapperService.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
MapperService.ctorParameters = function () { return []; };

var ALLOWED_SHAPES = ['rect', 'diamond', 'circle', 'ellipse'];
var SHAPES = {
    'entity': 'rect',
    'activity': 'rect',
    'agent': 'hexagon',
    'default': 'diamond'
};
var SHAPE_ATTRIBUTES = {
    'entity': {
        'rx': '15',
        'ry': '15'
    },
    'activity': {
        'rx': '5',
        'ry': '5'
    },
    'agent': {
        'paddingTop': '15'
    }
};
var NODE_COLORS = {
    'entity': {
        'background': '#FFFC87',
        'border': 'transparent'
    },
    'activity': {
        'background': '#9FB1FC',
        'border': 'transparent'
    },
    'agent': {
        'background': '#FED37F',
        'border': 'transparent'
    },
    'default': {
        'background': 'white',
        'border': 'black'
    },
    'selected': {
        'background': '#B5D1FF'
    }
};

var GraphFormatterService = (function () {
    function GraphFormatterService() {
    }
    /**
     * Formats the Graph
     * @param {?} data Data representing graph to be formatted
     * @return {?} Object representing formatted graph
     */
    GraphFormatterService.prototype.format = function (data) {
        this.data = data;
        this.formatNodes();
        this.formatEdges();
        return this.data;
    };
    /**
     * Formats all the nodes
     * @return {?}
     */
    GraphFormatterService.prototype.formatNodes = function () {
        var _this = this;
        if (this.data && this.data['nodes']) {
            this.data['nodes'].forEach(function (v) { return _this.formatNode(v); });
        }
    };
    /**
     * Formats Node
     * @param {?} nodeId
     * @return {?}
     */
    GraphFormatterService.prototype.formatNode = function (nodeId) {
        var /** @type {?} */ node = this.data['nodes'].find(function (v) { return v === nodeId; });
        this.setNodeShape(node);
        this.setNodeShapeAttributes(node);
        this.setNodeStyle(node);
        /*if(node.getType() === 'entity') {
          this.setExpandControls(node);
        }*/
    };
    /**
     * Sets the shape of the node (by default, diamond is chosen)
     * @param {?} node Node for which shape must be set
     * IMPORTANT: node is modified through the function (shape is set)
     * @return {?}
     */
    GraphFormatterService.prototype.setNodeShape = function (node) {
        var /** @type {?} */ type = node.getType();
        var /** @type {?} */ subType = node.get('subType');
        var /** @type {?} */ shape = SHAPES[type] || SHAPES[subType] || (node.get('shape') && _.includes(ALLOWED_SHAPES, node.get('shape')) ? node.get('shape') : SHAPES['default']);
        node.set('shape', shape);
    };
    /**
     * Sets specific attributes for the shape of the node if any specified
     * @param {?} node Node for which shape attributes must be set
     * IMPORTANT: node is modified through the function (specific attributes of the shape are set)
     * @return {?}
     */
    GraphFormatterService.prototype.setNodeShapeAttributes = function (node) {
        var /** @type {?} */ type = node.getType();
        var /** @type {?} */ attributes = SHAPE_ATTRIBUTES[type];
        if (attributes) {
            for (var /** @type {?} */ attributeName in attributes) {
                node.set(attributeName, attributes[attributeName]);
            }
        }
    };
    /**
     * Sets the style of the node
     * @param {?} node Node for which style must be set
     * IMPORTANT: node is modified by inner function
     * @return {?}
     */
    GraphFormatterService.prototype.setNodeStyle = function (node) {
        this.setNodeColor(node);
    };
    /**
     * Sets the color of the node (by default, background is in white and borders are in black)
     * @param {?} node Node for which color must be set
     * IMPORTANT: node is modified through the function (style is set)
     * @return {?}
     */
    GraphFormatterService.prototype.setNodeColor = function (node) {
        var /** @type {?} */ type = node.getType();
        var /** @type {?} */ subType = node.get('subType');
        var /** @type {?} */ colorProperties = (node.get('color') && _.isObject(node.get('color'))) ? node.get('color') : (NODE_COLORS[type] || NODE_COLORS[subType] || NODE_COLORS['default']);
        var /** @type {?} */ backgroundColor = colorProperties['background'] || NODE_COLORS['default']['background'];
        var /** @type {?} */ borderColor = colorProperties['border'] || NODE_COLORS['default']['border'];
        node.set('style', "fill: " + backgroundColor + "; stroke: " + borderColor + ";");
    };
    /**
     * Formats all the edges
     * @return {?}
     */
    GraphFormatterService.prototype.formatEdges = function () {
        var _this = this;
        if (this.data && this.data['edges']) {
            this.data['edges'].forEach(function (e) { return _this.formatEdge(e); });
        }
    };
    /**
     * Formats an edge
     * @param {?} edge Edge to be formatted
     * IMPORTANT: Edge is modified by inner function
     * @return {?}
     */
    GraphFormatterService.prototype.formatEdge = function (edge) {
        this.setEdgeStyle(edge);
    };
    /**
     * Sets style of the edge
     * @param {?} edge Edge for which style must be set
     * IMPORTANT: edge is modified by inner function
     * @return {?}
     */
    GraphFormatterService.prototype.setEdgeStyle = function (edge) {
        this.setEdgeColor(edge);
        this.setEdgeStroke(edge);
    };
    /**
     * Sets the color of the edge
     * @param {?} edge Edge for which color must be set
     * IMPORTANT: edge is modified through the function (style is set)
     * @return {?}
     */
    GraphFormatterService.prototype.setEdgeColor = function (edge) {
        edge.set('style', 'fill: none; stroke: black; stroke-width: 1.5px;');
    };
    /**
     * Sets dotted style of the edge if needed
     * @param {?} edge Edge for which stroke must be modified
     * IMPORTANT: edge is modified through the function (style is modified)
     * @return {?}
     */
    GraphFormatterService.prototype.setEdgeStroke = function (edge) {
        if (edge.get('type') === 'dotted') {
            edge.append('style', 'stroke-dasharray: 5;');
        }
    };
    return GraphFormatterService;
}());
GraphFormatterService.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
GraphFormatterService.ctorParameters = function () { return []; };

var MENU_IDENTIFIER = 'node-context-menu';
var d3Container;
var openCallback;
var closeCallback;
var userContext;
var menu;
var menuContent;
var element;
var elementIndex;
var elementContent;
var displayFromLeftToRight;
/**
 * Initializes context menu logic
 * @param {?} content Menu
 * @param {?=} options (optional) Options for menu (see setOptions function for more details)
 * @return {?} Function that allows to build and display a menu
 */
function contextMenu(content, options) {
    setOptions(options);
    addCloseMenuEvent();
    /**
     * This is the function that will be executed when user wants to create a new menu following some event captured by d3
     * data refers to the data of the element for which the context menu is created
     * index refers to the index of the element
     */
    return function (data, index) {
        removeOpenedMenu();
        restoreDirectionForExpand();
        createMenu(this, data, index, content);
        setInitialPositionOfMenu();
        ignoreDefaultContextMenuOfBrowserForContainer(MENU_IDENTIFIER);
        setMenuStyles(MENU_IDENTIFIER);
        createItemsList(MENU_IDENTIFIER, menuContent);
        addHandlersOnListItems(MENU_IDENTIFIER);
        fireOpenCallbackIfAny();
        adjustPositionOfMenuIfNeeded();
        preventDefaultAndStopPropagation();
    };
}
/**
 * Creates a submenu
 * @param {?} content Content of the submenu
 * @param {?} itemIndexInParentList Index of the item in the parent menu and for which submenu is associated
 * @param {?} parentId Identifier of the parent menu
 * @param {?} level Level of the submenu
 * @return {?}
 */
function createSubMenu(content, itemIndexInParentList, parentId, level) {
    var /** @type {?} */ subMenuId = "sub-menu-" + level;
    removeOpenedMenu(subMenuId);
    appendSubMenu(parentId, subMenuId);
    ignoreDefaultContextMenuOfBrowserForContainer(subMenuId);
    setInitialPositionOfSubMenu(parentId, subMenuId, itemIndexInParentList);
    setMenuStyles(subMenuId);
    createItemsList(subMenuId, content);
    addHandlersOnListItems(subMenuId, level + 1);
    adjustPositionOfSubMenuIfNeeded(parentId, subMenuId, itemIndexInParentList);
    preventDefaultAndStopPropagation();
}
/**
 * Sets the options of the menu
 * @param {?} options Options to be applied to the menu
 * For now, available options are:
 * - openCallback (function to execute when menu is opened)
 * - closeCallback (function to execute when menu is closed)
 * - userContext (context to bind with menu for usage in action handler)
 * - container (default: 'body') (identifier or tag of the container that contains all the elements that have context menu; this is used when determining position of a menu and a submenu (relative positioning))
 * @return {?}
 */
function setOptions(options) {
    openCallback = options && options['openCallback'];
    closeCallback = options && options['closeCallback'];
    userContext = options && options['context'];
    d3Container = d3.select((options && options['container']) || 'body');
}
/**
 * Sets the close event for menu
 * @return {?}
 */
function addCloseMenuEvent() {
    d3Container.on('click', function () {
        d3Container.select("#" + MENU_IDENTIFIER).remove();
        fireCloseCallbackIfAny();
    });
}
/**
 * Executes close callback if one was provided by user in the options
 * @return {?}
 */
function fireCloseCallbackIfAny() {
    if (closeCallback && (typeof closeCallback === 'function')) {
        closeCallback();
    }
}
/**
 * Creates the menu and appends the aforesaid menu in the DOM
 * @param {?} d3Element d3 element on which the context menu is opened
 * @param {?} data Data of the d3 element
 * @param {?} index Index of the d3 element
 * @param {?} content Menu content
 * @return {?}
 */
function createMenu(d3Element, data, index, content) {
    element = d3Element;
    elementContent = data;
    elementIndex = index;
    menuContent = content;
    menu = d3Container.append('div').attr('id', MENU_IDENTIFIER);
}
/**
 * Removes menu if it is opened
 * @param {?=} menuId Identifier of the menu to be removed
 * @return {?}
 */
function removeOpenedMenu(menuId) {
    if (menuId === void 0) { menuId = MENU_IDENTIFIER; }
    d3.selectAll("#" + menuId).remove();
}
/**
 * Restores the direction of expand to left to right
 * @return {?}
 */
function restoreDirectionForExpand() {
    displayFromLeftToRight = true;
}
/**
 * Sets the initial position of the menu when it is created
 * By default, position is the mouse position
 * @return {?}
 */
function setInitialPositionOfMenu() {
    var /** @type {?} */ mousePositionRelativeToD3Container = d3.mouse(d3Container.node());
    menu.style('position', 'absolute').style('left', mousePositionRelativeToD3Container[0] + "px").style('top', mousePositionRelativeToD3Container[1] + "px");
}
/**
 * Prevents opening of the original context menu (from the browser)
 * @param {?} containerId Identifier of the container for which original context menu must be prevented from opening
 * @return {?}
 */
function ignoreDefaultContextMenuOfBrowserForContainer(containerId) {
    d3.select("#" + containerId).on('contextmenu', function () {
        d3.event.preventDefault();
    });
}
/**
 * Defines the styles of the menu
 * @param {?} containerId Identifier of the container (menu or submenu) for which styles must be defined
 * @return {?}
 */
function setMenuStyles(containerId) {
    d3.select("#" + containerId).style('display', 'block')
        .style('background-color', 'white')
        .style('border-radius', '5px')
        .style('border', '1px solid #D4D4D4')
        .style('z-index', '999');
}
/**
 * Creates the list of items
 * @param {?} containerId Identifier of the container (menu or submenu) for which items must be appended to
 * @param {?} listContent Content of the list (menu or submenu)
 * @return {?}
 */
function createItemsList(containerId, listContent) {
    var /** @type {?} */ list = d3.select("#" + containerId).append('ul');
    createItems(list, listContent);
    setListStyles(list);
    setListItemsStyles(list);
}
/**
 * Creates the items of the list
 * @param {?} list List to which items must be appended
 * @param {?} listContent Content of the list
 * @return {?}
 */
function createItems(list, listContent) {
    list.selectAll('li').data((typeof listContent === 'function') ? listContent(elementContent) : listContent)
        .enter()
        .append('li')
        .attr('class', function (itemOfList) { return itemOfList.class; })
        .html(function (itemOfList) { return (typeof itemOfList.content === 'function') ? itemOfList.content(elementContent) : itemOfList.content; });
}
/**
 * Defines the styles of the list
 * @param {?} list List for which styles must be defined
 * @return {?}
 */
function setListStyles(list) {
    list.style('list-style-type', 'none')
        .style('margin', '0px')
        .style('padding', '0px')
        .style('cursor', 'default');
}
/**
 * Defines the styles of list items
 * @param {?} list List for which items styles must be defined
 * @return {?}
 */
function setListItemsStyles(list) {
    list.selectAll('li').style('padding', '5px 16px');
}
/**
 * Sets the handlers associated to each item of a menu/submenu list
 * @param {?} containerId Identifier of the menu/submenu containing items for which handlers must be set
 * @param {?=} level (default is 1) Level of the menu
 * @return {?}
 */
function addHandlersOnListItems(containerId, level) {
    if (level === void 0) { level = 1; }
    var /** @type {?} */ list = d3.select("#" + containerId).select('ul');
    list.selectAll('li').each(function (itemContent, index) {
        var /** @type {?} */ currentItem = d3.select(this);
        addOnHoverHandlerOnItem(currentItem, index, containerId, level);
        if (!itemContent.subMenu) {
            addClickHandlerOnItem(currentItem);
        }
    });
}
/**
 * Sets the mouseover and mouseout handlers for a given item of a menu/submenu list
 * @param {?} item d3 element for which handlers must be set
 * @param {?} index Index of the item
 * @param {?} parentId Identifier of the parent (menu/submenu list)
 * @param {?} level Level of the menu
 * @return {?}
 */
function addOnHoverHandlerOnItem(item, index, parentId, level) {
    item.on('mouseover', function (itemContent) {
        removeOpenedMenu("sub-menu-" + level);
        item.style('background-color', '#0275d8').style('color', 'white');
        if (itemContent.subMenu) {
            createSubMenu(itemContent.subMenu, index, parentId, level);
        }
    })
        .on('mouseout', function () {
        item.style('background-color', 'white').style('color', 'black');
    });
}
/**
 * Sets the click handler for a given item of a menu/submenu list
 * @param {?} item d3 element for which handler must be set
 * @return {?}
 */
function addClickHandlerOnItem(item) {
    item.on('click', function (itemContent) {
        if (itemContent.action && !itemContent.disabled) {
            itemContent.action(element, elementContent, elementIndex, userContext);
            removeOpenedMenu();
            restoreDirectionForExpand();
        }
        fireCloseCallbackIfAny();
    });
}
/**
 * Executes open callback if one was provided by user in the options
 * @return {?}
 */
function fireOpenCallbackIfAny() {
    if (openCallback && (typeof openCallback === 'function')) {
        openCallback();
    }
}
/**
 * Adjusts the position of menu if there is overflow when displaying from left to right
 * @return {?}
 */
function adjustPositionOfMenuIfNeeded() {
    var /** @type {?} */ mousePositionRelativeToD3Container = d3.mouse(d3Container.node());
    var /** @type {?} */ containerSize = [d3Container.node().offsetWidth, d3Container.node().offsetHeight];
    var /** @type {?} */ menuSize = [d3.select("#" + MENU_IDENTIFIER).node().offsetWidth, d3.select("#" + MENU_IDENTIFIER).node().offsetHeight];
    // If display strategy is not left to right anymore, we follow the new one (left to right)
    if (!displayFromLeftToRight || (menuSize[0] + mousePositionRelativeToD3Container[0] > containerSize[0])) {
        displayFromLeftToRight = false;
        menu.style('left', mousePositionRelativeToD3Container[0] - menuSize[0] + "px");
    }
    if (menuSize[1] + mousePositionRelativeToD3Container[1] > containerSize[1]) {
        menu.style('top', mousePositionRelativeToD3Container[1] - menuSize[1] + "px");
    }
}
/**
 * Prevents default event to be fired and avoids propagation
 * @return {?}
 */
function preventDefaultAndStopPropagation() {
    d3.event.preventDefault();
    d3.event.stopPropagation();
}
/**
 * Creates a submenu and appends the aforesaid submenu to its parent
 * @param {?} parentId Identifier of parent menu/submenu
 * @param {?} subMenuId Identifier of the submenu being created
 * @return {?}
 */
function appendSubMenu(parentId, subMenuId) {
    d3.select("#" + parentId).append('div').attr('id', "" + subMenuId);
}
/**
 * Defines initial position of submenu (next to the parent menu/submenu, at the same level)
 * @param {?} parentId Identifier of parent menu/submenu
 * @param {?} subMenuId Identifier of the submenu for which initial position must be set
 * @param {?} itemIndexInParentList Index of the item to which the submenu is associated in parent menu/submenu
 * @return {?}
 */
function setInitialPositionOfSubMenu(parentId, subMenuId, itemIndexInParentList) {
    var /** @type {?} */ parent = d3.select("#" + parentId);
    var /** @type {?} */ subMenu = d3.select("#" + subMenuId);
    var /** @type {?} */ itemInParentList = parent.select("li:nth-child(" + (itemIndexInParentList + 1) + ")");
    var /** @type {?} */ parentWidth = parent.node().offsetWidth;
    var /** @type {?} */ itemPositionFromTopRelatedToList = itemInParentList.node().getBoundingClientRect().top - parent.node().getBoundingClientRect().top;
    subMenu.style('position', 'absolute')
        .style('left', parentWidth + "px")
        .style('top', itemPositionFromTopRelatedToList + "px");
}
/**
 * @param {?} parentId Identifier of parent menu/submenu
 * Adjusts the position of submenu if there is overflow when displaying from left to right
 * @param {?} subMenuId Identifier of the submenu
 * @param {?} itemIndexInParentList Index of the item to which the submenu is associated in parent menu/submenu
 * @return {?}
 */
function adjustPositionOfSubMenuIfNeeded(parentId, subMenuId, itemIndexInParentList) {
    var /** @type {?} */ subMenu = d3.select("#" + subMenuId);
    var /** @type {?} */ parent = d3.select("#" + parentId);
    var /** @type {?} */ itemInParentList = parent.select("li:nth-child(" + (itemIndexInParentList + 1) + ")");
    var /** @type {?} */ parentWidth = parent.node().offsetWidth;
    var /** @type {?} */ containerWidth = d3Container.node().offsetWidth;
    var /** @type {?} */ containerHeight = d3Container.node().offsetHeight;
    var /** @type {?} */ parentPositionFromTopRelatedToContainer = parent.node().getBoundingClientRect().left - d3Container.node().getBoundingClientRect().left;
    var /** @type {?} */ itemInParentListHeight = itemInParentList.node().offsetHeight;
    var /** @type {?} */ itemPositionInParentListFromTopAndRelatedToContainer = itemInParentList.node().getBoundingClientRect().top - d3Container.node().getBoundingClientRect().top;
    var /** @type {?} */ itemPositionInParentListFromTopAndRelatedToParent = itemInParentList.node().getBoundingClientRect().top - parent.node().getBoundingClientRect().top;
    if (!displayFromLeftToRight || (subMenu.node().offsetWidth + parentPositionFromTopRelatedToContainer + parentWidth > containerWidth)) {
        displayFromLeftToRight = false;
        // IMPORTANT: Fix to retrieve the correct offset width of the submenu
        // (for unknown reason, the value is not updated correctly...)
        subMenu.style('left', -subMenu.node().offsetWidth + "px");
        subMenu.style('left', -subMenu.node().offsetWidth + "px");
    }
    if (subMenu.node().offsetHeight + itemPositionInParentListFromTopAndRelatedToContainer > containerHeight) {
        var /** @type {?} */ adjustedPositionOfSubMenuFromTop = itemPositionInParentListFromTopAndRelatedToParent + itemInParentListHeight - subMenu.node().offsetHeight;
        subMenu.style('top', adjustedPositionOfSubMenuFromTop + "px");
    }
}

var MENUS = {
    "entity": [
        {
            "content": "Information",
            "action": function (element, data, index, context) {
                context.dispatch.call('nodeMoreInfoAsked', context, context.containerElement, data);
            }
        },
        {
            "content": "Similar data",
            "subMenu": [
                {
                    "content": "From same specimen",
                    "action": function (element, data, index, context) {
                        //TODO
                    }
                },
                {
                    "content": "From same activity",
                    "action": function (element, data, index, context) {
                        //TODO
                    }
                }
            ]
        },
        {
            "content": "Extend",
            "subMenu": [
                {
                    "content": "Sources",
                    "action": function (element, data, index, context) {
                        //TODO
                    },
                    "subMenu": [
                        {
                            "content": "1 level",
                            "action": function (element, data, index, context) {
                                //TODO
                            }
                        },
                        {
                            "content": "3 levels",
                            "action": function (element, data, index, context) {
                                //TODO
                            }
                        },
                        {
                            "content": "5 levels",
                            "action": function (element, data, index, context) {
                                //TODO
                            }
                        },
                        {
                            "content": "Complete Provenance",
                            "action": function (element, data, index, context) {
                                //TODO
                            }
                        },
                        {
                            "content": "Custom",
                            "action": function (element, data, index, context) {
                                //TODO
                            }
                        }
                    ]
                },
                {
                    "content": "Derivations",
                    "action": function (element, data, index, context) {
                        //TODO
                    },
                    "subMenu": [
                        {
                            "content": "1 level",
                            "action": function (element, data, index, context) {
                                //TODO
                            }
                        },
                        {
                            "content": "3 levels",
                            "action": function (element, data, index, context) {
                                //TODO
                            }
                        },
                        {
                            "content": "5 levels",
                            "action": function (element, data, index, context) {
                                //TODO
                            }
                        },
                        {
                            "content": "Custom",
                            "action": function (element, data, index, context) {
                                //TODO
                            }
                        }
                    ]
                }
            ]
        },
        {
            "content": "Contributors"
        }
    ],
    "dataset": [
        {
            "content": "Information",
            "action": function (element, data, index, context) {
                context.dispatch.call('nodeMoreInfoAsked', context, context.containerElement, data);
            }
        },
        {
            "content": "Similar data",
            "subMenu": [
                {
                    "content": "From same specimen",
                    "action": function (element, data, index, context) {
                        //TODO
                    }
                },
                {
                    "content": "From same brain region",
                    "action": function (element, data, index, context) {
                        //TODO
                    }
                }
            ]
        },
        {
            "content": "Extend",
            "subMenu": [
                {
                    "content": "Sources",
                    "action": function (element, data, index, context) {
                        //TODO
                    },
                    "subMenu": [
                        {
                            "content": "1 level",
                            "action": function (element, data, index, context) {
                                //TODO
                            }
                        },
                        {
                            "content": "3 levels",
                            "action": function (element, data, index, context) {
                                //TODO
                            }
                        },
                        {
                            "content": "5 levels",
                            "action": function (element, data, index, context) {
                                //TODO
                            }
                        },
                        {
                            "content": "Complete Provenance",
                            "action": function (element, data, index, context) {
                                //TODO
                            }
                        },
                        {
                            "content": "Custom",
                            "action": function (element, data, index, context) {
                                //TODO
                            }
                        }
                    ]
                },
                {
                    "content": "Derivations",
                    "action": function (element, data, index, context) {
                        //TODO
                    },
                    "subMenu": [
                        {
                            "content": "1 level",
                            "action": function (element, data, index, context) {
                                //TODO
                            }
                        },
                        {
                            "content": "3 levels",
                            "action": function (element, data, index, context) {
                                //TODO
                            }
                        },
                        {
                            "content": "5 levels",
                            "action": function (element, data, index, context) {
                                //TODO
                            }
                        },
                        {
                            "content": "Custom",
                            "action": function (element, data, index, context) {
                                //TODO
                            }
                        }
                    ]
                }
            ]
        },
        {
            "content": "Contributors"
        }
    ],
    "activity": [
        {
            "content": "Information",
            "action": function (element, data, index, context) {
                context.dispatch.call('nodeMoreInfoAsked', context, context.containerElement, data);
            }
        },
        {
            "content": "Contributors",
            "action": function (element, data, index, context) {
                //TODO
            }
        }
    ]
};

var EVENTS = {
    'graphRendered': function (element) {
        var /** @type {?} */ event$$1 = new Event('graphRendered');
        dispatchEvent(element, event$$1);
    },
    'graphClicked': function (element, x, y) {
        var /** @type {?} */ event$$1 = new CustomEvent('graphClicked', {
            'detail': {
                'x': x,
                'y': y
            }
        });
        dispatchEvent(element, event$$1);
    },
    'nodeClicked': function (element, nodeId) {
        dispatchNodeEvent('nodeClicked', element, nodeId);
    },
    'nodeCtrlClicked': function (element, nodeId) {
        dispatchNodeEvent('nodeCtrlClicked', element, nodeId);
    },
    'nodeExpandedUp': function (element, nodeId) {
        dispatchNodeExpandEvent('nodeExpanded', element, nodeId, 'up');
    },
    'nodeExpandedDown': function (element, nodeId) {
        dispatchNodeExpandEvent('nodeExpanded', element, nodeId, 'down');
    },
    'nodeMoreInfoAsked': function (element, nodeId) {
        dispatchNodeEvent('nodeMoreInfoAsked', element, nodeId);
    },
    'edgeClicked': function (element, data) {
        dispatchEdgeEvent('edgeClicked', element, data);
    },
    'edgeCtrlClicked': function (element, data) {
        dispatchEdgeEvent('edgeCtrlClicked', element, data);
    }
};
/**
 * Dispatches a node event
 * @param {?} eventName Name of the event to be dispatched
 * @param {?} element DOM element on which node event must be dispatched
 * @param {?} nodeId Identifier of the node related to the event
 * @return {?}
 */
function dispatchNodeEvent(eventName, element, nodeId) {
    var /** @type {?} */ event$$1 = new CustomEvent(eventName, {
        'detail': {
            'nodeId': nodeId
        }
    });
    dispatchEvent(element, event$$1);
}
/**
 * Dispatches a node expand event
 * @param {?} eventName Name of the event to be dispatched
 * @param {?} element DOM element on which node event must be dispatched
 * @param {?} nodeId Identifier of the node related to the event
 * @param {?} direction Direction of expand
 * @return {?}
 */
function dispatchNodeExpandEvent(eventName, element, nodeId, direction) {
    var /** @type {?} */ event$$1 = new CustomEvent(eventName, {
        'detail': {
            'nodeId': nodeId,
            'direction': direction
        }
    });
    dispatchEvent(element, event$$1);
}
/**
 * Dispatches an edge event
 * @param {?} eventName Name of the event to be dispatched
 * @param {?} element DOM element on which edge event must be dispatched
 * @param {?} data Data containing relevant source and target of the edge related to the event
 * @return {?}
 */
function dispatchEdgeEvent(eventName, element, data) {
    var /** @type {?} */ event$$1 = new CustomEvent(eventName, {
        'detail': {
            'sourceId': data['sourceId'] || null,
            'targetId': data['targetId'] || null
        }
    });
    dispatchEvent(element, event$$1);
}
/**
 * Dispatches a DOM event
 * @param {?} element DOM element on which event must be dispatched
 * @param {?} event Event to be dispatched
 * @return {?}
 */
function dispatchEvent(element, event$$1) {
    element.dispatchEvent(event$$1);
}

var DagreD3RendererService = (function () {
    function DagreD3RendererService() {
    }
    /**
     * Initializes the renderer
     * @param {?} containerElement DOM element where SVG will be attached
     * @param {?} data Object containing graph to render
     * @param {?=} options Options to associate with the renderer
     * @return {?}
     */
    DagreD3RendererService.prototype.initialize = function (containerElement, data, options) {
        if (options === void 0) { options = {}; }
        this.flush();
        this.setParameters(containerElement, data, options);
        this.setEvents();
        this.setGraphClickEventListener();
        this.setShapes();
        this.constructGraph();
    };
    /**
     * Renders the graph
     * @param {?=} options Options to associate with the renderer
     * @return {?}
     */
    DagreD3RendererService.prototype.renderGraph = function (options) {
        if (options === void 0) { options = {}; }
        this.group.call(this.render, this.graph);
        this.setNodesEvents();
        this.setEdgesEvents();
        this.formatText();
        this.setWidthAndHeight();
        this.setZoom();
        this.dispatch.call('graphRendered', this, this.containerElement);
    };
    /**
     * Fits the content of the graph to the container
     * @param {?=} delay (optional, default = 0) Delay of the transition
     * @return {?}
     */
    DagreD3RendererService.prototype.fit = function (delay) {
        if (delay === void 0) { delay = 0; }
        var /** @type {?} */ bounds = this.group.node().getBBox();
        var /** @type {?} */ parent = this.group.node().parentElement;
        var /** @type {?} */ fullWidth = parent.clientWidth || parent.parentNode.clientWidth; // OR statement is needed to make it compatible with Chrome and Firefox
        var /** @type {?} */ fullHeight = parent.clientHeight || parent.parentNode.clientHeight; // OR statement is needed to make it compatible with Chrome and Firefox
        var /** @type {?} */ width = bounds.width;
        var /** @type {?} */ height = bounds.height;
        var /** @type {?} */ midX = bounds.x + width / 2;
        var /** @type {?} */ midY = bounds.y + height / 2;
        if (width !== 0 && height !== 0) {
            var /** @type {?} */ scale = 0.95 / Math.max(width / fullWidth, height / fullHeight);
            var /** @type {?} */ translate = [fullWidth / 2 - scale * midX, fullHeight / 2 - scale * midY];
            this.container.transition().duration(delay).call(this.zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale));
        }
    };
    /**
     * Zooms in the graph
     * @param {?=} delay (optional, default = 0) Delay of the transition
     * @return {?}
     */
    DagreD3RendererService.prototype.zoomIn = function (delay) {
        if (delay === void 0) { delay = 0; }
        this.container.transition().duration(delay).call(this.zoom.scaleBy, this.zoomInMultiplicator);
    };
    /**
     * Zooms out the graph
     * @param {?=} delay (optional, default = 0) Delay of the transition
     * @return {?}
     */
    DagreD3RendererService.prototype.zoomOut = function (delay) {
        if (delay === void 0) { delay = 0; }
        this.container.transition().duration(delay).call(this.zoom.scaleBy, this.zoomOutMultiplicator);
    };
    /**
     * Removes rendered graph if any and unselected node if any selected
     * @return {?}
     */
    DagreD3RendererService.prototype.flush = function () {
        if (this.selectedNodeId) {
            this.selectedNodeId = null;
        }
        d3.select(this.containerElement).selectAll('svg').remove();
    };
    /**
     * Selects a node in the graph
     * @param {?} nodeId Identifier of the node being selected
     * @return {?}
     */
    DagreD3RendererService.prototype.selectNode = function (nodeId) {
        if (this.selectedNodeId) {
            this.unselectNode();
        }
        if (nodeId && this.graph.node(nodeId)) {
            this.selectedNodeId = nodeId;
            var /** @type {?} */ colorProperties = NODE_COLORS['selected'];
            var /** @type {?} */ backgroundColor = colorProperties && colorProperties['background'];
            var /** @type {?} */ borderColor = colorProperties && colorProperties['border'];
            this.changeNodeColors(this.selectedNodeId, backgroundColor, borderColor);
        }
    };
    /**
     * Unselects the current selected node
     * @return {?}
     */
    DagreD3RendererService.prototype.unselectNode = function () {
        if (this.selectedNodeId && this.graph.node(this.selectedNodeId)) {
            var /** @type {?} */ node = this.graph.node(this.selectedNodeId);
            var /** @type {?} */ colorProperties = (node['color'] && _.isObject(node['color'])) ? node['color'] : (NODE_COLORS[node['type']] || NODE_COLORS[node['subType']] || NODE_COLORS['default']);
            var /** @type {?} */ backgroundColor = colorProperties['background'] || NODE_COLORS['default']['background'];
            var /** @type {?} */ borderColor = colorProperties['border'] || NODE_COLORS['default']['border'];
            this.changeNodeColors(this.selectedNodeId, backgroundColor, borderColor);
            this.selectedNodeId = null;
        }
    };
    /**
     * Displays a set of nodes and associated edges with transition
     * @param {?} nodesId Identifier of the nodes to be displayed with transition (with their respective edges)
     * @param {?=} duration (default is 2000) Duration of the transition
     * @return {?}
     */
    DagreD3RendererService.prototype.displayNodesAndEdgesWithTransition = function (nodesId, duration) {
        if (duration === void 0) { duration = 2000; }
        this.displayNodesWithTransition(nodesId);
        this.displayEdgesOfNodesWithTransition(nodesId);
    };
    /**
     * Closes context menu if any opened
     * @return {?}
     */
    DagreD3RendererService.prototype.closeContextMenu = function () {
        d3.selectAll('.node-context-menu').remove();
    };
    /**
     * Sets the options related to the renderer
     * @param {?} containerElement DOM element where SVG will be attached
     * @param {?} data Object containing graph to render
     * @param {?} options Options to associate with the renderer
     * @return {?}
     */
    DagreD3RendererService.prototype.setParameters = function (containerElement, data, options) {
        this.data = data;
        this.zoomInMultiplicator = options['zoom-in'] || 1.5;
        this.zoomOutMultiplicator = options['zoom-out'] || 0.75;
        this.containerElement = containerElement;
        this.container = d3.select(this.containerElement).append('svg:svg').style('user-select', 'none');
        this.group = this.container.append('g');
        this.render = new dagreD3.render();
    };
    /**
     * Sets events attached to the graph
     * @return {?}
     */
    DagreD3RendererService.prototype.setEvents = function () {
        this.dispatch = d3.dispatch.apply(d3, /** @type {?} */ ((Object.keys(EVENTS))));
        for (var /** @type {?} */ eventName in EVENTS) {
            // For each event dispatched by the renderer, we fire the appropriate event from the container (DOM element)
            this.dispatch.on(eventName, EVENTS[eventName]);
        }
    };
    /**
     * Sets the click on the graph event
     * @return {?}
     */
    DagreD3RendererService.prototype.setGraphClickEventListener = function () {
        var /** @type {?} */ that = this;
        this.container.on('click', function () {
            // User clicked on the SVG element (graph)
            if (d3.event.srcElement.tagName == 'svg') {
                var /** @type {?} */ mousePosition = d3.mouse(this);
                that.unselectNode();
                // Data passed to the event: graph container, DOM element, mouse position (x and y coordinates)
                that.dispatch.call('graphClicked', that.container, that.containerElement, mousePosition[0], mousePosition[1]);
            }
        });
    };
    /**
     * Sets all custom shapes used by renderer (shapes are appended to the render function of the renderer)
     * @return {?}
     */
    DagreD3RendererService.prototype.setShapes = function () {
        var _this = this;
        // See dagre-d3 documentation and demo example for mode details
        this.render.shapes()['hexagon'] = function (parent, bbox, node) { return _this.createHexagon(parent, bbox, node); };
    };
    /**
     * Creates and appends hexagon shape
     * @param {?} parent Parent element that will hosts the polygon
     * @param {?} bbox Bounding box of element
     * @param {?} node Node represented by the element on the graph
     * @return {?} Hexagon shape
     * IMPORTANT: parent is modified through the function (polygon representing the shape is inserted)
     */
    DagreD3RendererService.prototype.createHexagon = function (parent, bbox, node) {
        var /** @type {?} */ w = bbox.width;
        var /** @type {?} */ h = bbox.height;
        var /** @type {?} */ points = [{ x: 0, y: 0 }, { x: w, y: 0 }, { x: w, y: -5 / 4 * h }, { x: w / 2, y: -h * 3 / 2 }, { x: 0, y: -5 / 4 * h }];
        var /** @type {?} */ shape = parent.insert('polygon', ':first-child')
            .attr('points', points.map(function (d) { return d.x + ", " + d.y; }).join(' '))
            .attr('transform', "translate(" + -w / 2 + ", " + h * 3 / 4 + ")");
        node['intersect'] = function (point) { return dagreD3.intersect.polygon(node, points, point); };
        return shape;
    };
    /**
     * Constructs the graph (graph complies with graphlib format)
     * @return {?}
     */
    DagreD3RendererService.prototype.constructGraph = function () {
        this.graph = dagreD3.graphlib.json.read(this.data);
    };
    /**
     * Sets events attached to the nodes
     * @return {?}
     */
    DagreD3RendererService.prototype.setNodesEvents = function () {
        var _this = this;
        var /** @type {?} */ that = this;
        d3.selectAll('.node')
            .on('contextmenu', function (nodeId, index) { return contextMenu(_this.getMenuOfNode(nodeId), { 'context': _this, 'container': '#svg-container' })(nodeId, index); })
            .on('mousedown', function (nodeId) {
            d3.event.stopPropagation();
            if (d3.event.ctrlKey) {
                _this.dispatch.call('nodeCtrlClicked', _this, _this.containerElement, nodeId);
            }
            else {
                _this.selectNode(nodeId);
                _this.closeContextMenu();
                //this.dispatch.call('nodeClicked', this, this.containerElement, nodeId);
            }
        });
        d3.selectAll('.expand-up')
            .on('mousedown', function (nodeId) {
            d3.event.stopPropagation();
            that.dispatch.call('nodeExpandedUp', that, that.containerElement, nodeId);
        });
        d3.selectAll('.expand-down')
            .on('mousedown', function (nodeId) {
            d3.event.stopPropagation();
            that.dispatch.call('nodeExpandedDown', that, that.containerElement, nodeId);
        });
        d3.selectAll('.expand-up, .expand-down')
            .on('mouseover', function () {
            d3.select(this).attr('opacity', '1');
        })
            .on('mouseout', function () {
            d3.select(this).attr('opacity', '0.2');
        });
    };
    /**
     * Retrieves the menu of the node
     * @param {?} nodeId Identifier of the node
     * @return {?} Menu configuration
     */
    DagreD3RendererService.prototype.getMenuOfNode = function (nodeId) {
        var /** @type {?} */ node = this.graph.node(nodeId);
        if (node) {
            return MENUS[node['subType']] || MENUS[node['type']] || MENUS['default'];
        }
        else {
            return null;
        }
    };
    /**
     * Sets events attached to the edges
     * @return {?}
     */
    DagreD3RendererService.prototype.setEdgesEvents = function () {
        var _this = this;
        d3.selectAll('.edgePath, .edgeLabel')
            .on('contextmenu', function () {
            // We prevent the context menu from displaying when user CTRL+clicks
            d3.event.preventDefault();
        })
            .on('mousedown', function (e) {
            d3.event.stopPropagation();
            var /** @type {?} */ data = {};
            data['sourceId'] = e['v'] || null; // v represents source (see graphlib specification)
            data['targetId'] = e['w'] || null; // w represents target (see graphlib specification)
            if (d3.event.ctrlKey) {
                _this.dispatch.call('edgeCtrlClicked', _this, _this.containerElement, data);
            }
            else {
                _this.dispatch.call('edgeClicked', _this, _this.containerElement, data);
            }
        });
    };
    /**
     * Formats text displayed on SVG element
     * @return {?}
     */
    DagreD3RendererService.prototype.formatText = function () {
        this.container.selectAll('svg text').style('font', "300 14px 'Helvetica Neue', Helvetica");
    };
    /**
     * Sets zoom functionality on the renderer
     * @return {?}
     */
    DagreD3RendererService.prototype.setZoom = function () {
        var _this = this;
        this.zoom = d3.zoom().on('zoom', function () { _this.group.attr('transform', d3.event.transform); });
        this.container.call(this.zoom);
        this.fit(); // By default, graph fits within the container
    };
    /**
     * Sets the width and the height of the SVG element such that it fully expands
     * @return {?}
     */
    DagreD3RendererService.prototype.setWidthAndHeight = function () {
        this.container.attr('width', '100%').attr('height', '100%');
    };
    /**
     * Changes the colors of a node
     * @param {?} nodeId Identifier of the node for which background color is being modified
     * @param {?} backgroundColor Color to use for background
     * @param {?} borderColor Color to use for border
     * @param {?=} duration (default is 0) Duration of the transition
     * @return {?}
     */
    DagreD3RendererService.prototype.changeNodeColors = function (nodeId, backgroundColor, borderColor, duration) {
        if (duration === void 0) { duration = 0; }
        var /** @type {?} */ node = d3.selectAll('.node').filter(function (id) { return id === nodeId; });
        this.changeD3ElementsColors(node, backgroundColor, borderColor, duration);
    };
    /**
     * Changes the colors of edges
     * @param {?} sourceId Identifier of the source of the edge
     * @param {?} targetId Identifier of the target of the edge
     * @param {?} backgroundColor Color to use for background
     * @param {?} borderColor Color to use for border
     * @param {?=} duration (default is 0) Duration of the transition
     * @return {?}
     */
    DagreD3RendererService.prototype.changeEdgesColors = function (sourceId, targetId, backgroundColor, borderColor, duration) {
        if (duration === void 0) { duration = 0; }
        var /** @type {?} */ edges = d3.selectAll('.edgePath').filter(function (data) { return data['v'] === sourceId && data['w'] === targetId; });
        this.changeD3ElementsColors(edges, backgroundColor, borderColor, duration);
    };
    /**
     * Changes the colors of d3 elements
     * @param {?} d3Elements D3 selection
     * @param {?} backgroundColor Color to use for background
     * @param {?} borderColor Color to use for border
     * @param {?=} duration (default is 0) Duration of the transition
     * @return {?}
     */
    DagreD3RendererService.prototype.changeD3ElementsColors = function (d3Elements, backgroundColor, borderColor, duration) {
        if (duration === void 0) { duration = 0; }
        d3Elements.each(function (d) {
            d3.select(this.childNodes[0]).transition().duration(duration).style('fill', backgroundColor).style('stroke', borderColor).attr('opacity', 1);
        });
    };
    /**
     * Displays a set of nodes with transition
     * @param {?} nodesId Identifier of the nodes that must be displayed with transition
     * @param {?=} duration (default is 2000) Duration of the transition
     * @return {?}
     */
    DagreD3RendererService.prototype.displayNodesWithTransition = function (nodesId, duration) {
        if (duration === void 0) { duration = 2000; }
        var /** @type {?} */ that = this;
        var /** @type {?} */ newNodes = d3.selectAll('.node').filter(function (id) { return _.includes(nodesId, id); });
        if (newNodes) {
            newNodes.each(function (d) {
                // First child is the shape of the node
                d3.select(this.childNodes[0]).attr('opacity', 0).transition().duration(duration).attr('opacity', 1);
                // Second child is the label
                d3.select(this.childNodes[1]).attr('opacity', 0).transition().duration(duration).attr('opacity', 1);
                // We define specific opacity rule for expand buttons
                d3.select(this).select('.expand-up, .expand-down').attr('opacity', 0).transition().duration(duration).attr('opacity', 0.2);
            });
        }
    };
    /**
     * Displays edges of a set of nodes with transition
     * @param {?} nodesId Identifier of the nodes for which edges must be displayed with transition
     * @param {?=} duration (default is 2000) Duration of the transition
     * @return {?}
     */
    DagreD3RendererService.prototype.displayEdgesOfNodesWithTransition = function (nodesId, duration) {
        if (duration === void 0) { duration = 2000; }
        var /** @type {?} */ that = this;
        var /** @type {?} */ newEdgesPath = d3.selectAll('.edgePath').filter(function (data) { return _.includes(nodesId, data['v']); });
        if (newEdgesPath) {
            newEdgesPath.each(function (d) {
                d3.select(this.childNodes[0]).attr('opacity', 0).transition().duration(duration).attr('opacity', 1);
            });
        }
        var /** @type {?} */ newEdgesLabel = d3.selectAll('.edgeLabel').filter(function (data) { return _.includes(nodesId, data['v']); });
        if (newEdgesLabel) {
            newEdgesLabel.each(function (d) {
                d3.select(this.childNodes[0]).attr('opacity', 0).transition().duration(duration).attr('opacity', 1);
            });
        }
    };
    return DagreD3RendererService;
}());
DagreD3RendererService.highlightDelay = 500;
DagreD3RendererService.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
DagreD3RendererService.ctorParameters = function () { return []; };

var GraphComponent = (function () {
    /**
     * Constructor of DumperComponent
     * @param {?} componentFactoryResolver Injection of component factory resolver
     * @param {?} mapperService Injection of mapper service
     * @param {?} graphFormatterService Injection of graph formatter service
     * @param {?} dagreD3RendererService
     */
    function GraphComponent(componentFactoryResolver, mapperService, graphFormatterService, dagreD3RendererService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.mapperService = mapperService;
        this.graphFormatterService = graphFormatterService;
        this.dagreD3RendererService = dagreD3RendererService;
        this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(NodeDetailComponent);
        this.mode = GraphComponent.defaultMode;
        this.initializeGraphEventsListeners();
    }
    /**
     * Lifecycle hook called when view of component has been fully initialized
     * (see Angular documentation: https://angular.io/docs/ts/latest/api/core/index/AfterViewInit-class.html)
     * @return {?}
     */
    GraphComponent.prototype.ngAfterViewInit = function () {
        this.setGraphEventsListeners();
    };
    /**
     * Lifecycle hook called when data-bound property of a directive changes
     * (see Angular documentation: https://angular.io/docs/ts/latest/api/core/index/OnChanges-class.html)
     * @param {?} changes
     * @return {?}
     */
    GraphComponent.prototype.ngOnChanges = function (changes) {
        this.rendering = true;
        this.error = false;
        this.closeNodeDetailView();
        this.closeContextMenu();
        this.createGraph();
        this.formatGraph();
        this.displayGraph();
    };
    /**
     * Lifecycle hook called when component is destroyed
     * (see Angular documentation: https://angular.io/docs/ts/latest/api/core/index/OnDestroy-class.html)
     * @return {?}
     */
    GraphComponent.prototype.ngOnDestroy = function () {
        this.closeNodeDetailView();
    };
    /**
     * Changes the mode for rendering graph (swtich between simplified and extended versions)
     * @param {?} mode Selected mode for display
     * @return {?}
     */
    GraphComponent.prototype.changeMode = function (mode) {
        if (this.mode !== mode) {
            this.mode = (mode === GraphComponent.simplifiedMode || mode === GraphComponent.extendedMode) ? mode : GraphComponent.defaultMode;
            this.rendering = true;
            this.error = false;
            this.closeNodeDetailView();
            this.closeContextMenu();
            this.displayGraph();
        }
    };
    /**
     * Fits the content of the graph to the container with a delay of 500 ms
     * @return {?}
     */
    GraphComponent.prototype.fitContent = function () {
        this.dagreD3RendererService.fit(500);
    };
    /**
     * Zooms in the graph with a delay of 250 ms
     * @return {?}
     */
    GraphComponent.prototype.zoomIn = function () {
        this.dagreD3RendererService.zoomIn(250);
    };
    /**
     * Zooms out the graph with a delay of 250 ms
     * @return {?}
     */
    GraphComponent.prototype.zoomOut = function () {
        this.dagreD3RendererService.zoomOut(250);
    };
    /**
     * Initializes the event emitters attached to the graph
     * @return {?}
     */
    GraphComponent.prototype.initializeGraphEventsListeners = function () {
        for (var /** @type {?} */ eventName in EVENTS) {
            this["ng" + (eventName.charAt(0).toUpperCase() + eventName.slice(1))] = new _angular_core.EventEmitter();
        }
    };
    
    /**
     * Sets the events listeners attached to the graph
     * @return {?}
     */
    GraphComponent.prototype.setGraphEventsListeners = function () {
        var _this = this;
        var /** @type {?} */ element = this.svgContainer.nativeElement;
        // For graphRendered event, we append a specific event listener to inform component that rendering is done
        element.addEventListener('graphRendered', function (event$$1) {
            _this.rendering = false;
        });
        // For graphClicked event, we append a specific event listener to close node view if any is opened
        element.addEventListener('graphClicked', function (event$$1) {
            _this.closeNodeDetailView();
        });
        // For nodeExpanded event, we append a specific event listener to inform component that graph must be updated
        element.addEventListener('nodeExpanded', function (event$$1) {
            var /** @type {?} */ nodeId = event$$1 && event$$1['detail'] && event$$1['detail']['nodeId'];
            if (nodeId) {
                _this.expandNode(nodeId);
            }
        });
        // For nodeMoreInfoAsked event, we append a specific event listener to inform component that additional information must be displayed
        element.addEventListener('nodeMoreInfoAsked', function (event$$1) {
            var /** @type {?} */ nodeId = event$$1 && event$$1['detail'] && event$$1['detail']['nodeId'];
            if (nodeId) {
                _this.displayNodeDetails(nodeId);
            }
        });
        var _loop_1 = function (eventName) {
            element.addEventListener(eventName, function (event$$1) {
                _this["ng" + (eventName.charAt(0).toUpperCase() + eventName.slice(1))].emit(event$$1['detail'] || null);
            });
        };
        for (var /** @type {?} */ eventName in EVENTS) {
            _loop_1(/** @type {?} */ eventName);
        }
    };
    /**
     * Creates the graph based on data provided
     * @return {?}
     */
    GraphComponent.prototype.createGraph = function () {
        try {
            this.graph = this.mapperService.format(this.data);
        }
        catch (e) {
            this.handleError(e);
        }
    };
    /**
     * Formats the graph (nodes and edges)
     * @return {?}
     */
    GraphComponent.prototype.formatGraph = function () {
        try {
            if (this.graph) {
                this.formattedGraph = {};
                for (var /** @type {?} */ key in this.graph) {
                    var /** @type {?} */ attribute = _.cloneDeep(this.graph[key]);
                    if (_.isObject(this.graph[key])) {
                        this.formattedGraph[key] = this.graphFormatterService.format(attribute);
                    }
                    else {
                        this.formattedGraph[key] = attribute;
                    }
                }
            }
        }
        catch (e) {
            this.handleError(e);
        }
    };
    /**
     * Displays the graph as SVG element
     * NOTE: By default, a delay of 500 ms is set before displaying graph for better user experience (loading icon does not disappear too rapidly when rendering is instant)
     * @return {?}
     */
    GraphComponent.prototype.displayGraph = function () {
        var _this = this;
        setTimeout(function () {
            try {
                var /** @type {?} */ graphToDisplay = _this.formattedGraph['provenance'] ? _this.formattedGraph[_this.mode] : _this.formattedGraph[GraphComponent.extendedMode];
                _this.dagreD3RendererService.initialize(_this.svgContainer.nativeElement, graphToDisplay);
                _this.dagreD3RendererService.renderGraph();
            }
            catch (e) {
                _this.handleError(e, true);
            }
        }, GraphComponent.delay);
    };
    /**
     * Expands a given node of the graph
     * @param {?} nodeId
     * @return {?}
     */
    GraphComponent.prototype.expandNode = function (nodeId) {
        var _this = this;
        //TODO: CHANGE BEHAVIOR (THIS BEHAVIOR IS FOR TEST PURPOSE ONLY)
        if (EXPAND_DATA[nodeId]) {
            this.graph = this.mapperService.extend(EXPAND_DATA[nodeId]);
            var /** @type {?} */ newNodesId = this.mapperService.retrieveNewNodesId(EXPAND_DATA[nodeId], (this.mode === GraphComponent.simplifiedMode));
            this.formatGraph();
            this.displayGraph();
            setTimeout(function () {
                _this.displayNewNodesAndConnectionsWithTransition(newNodesId);
            }, GraphComponent.delay);
        }
    };
    /**
     * Displays nodes and their associated edges with transition
     * @param {?} newNodesId Identifiers of the nodes (with their respective links) to be displayed with transition
     * @return {?}
     */
    GraphComponent.prototype.displayNewNodesAndConnectionsWithTransition = function (newNodesId) {
        this.dagreD3RendererService.displayNodesAndEdgesWithTransition(newNodesId);
    };
    /**
     * Display information about a node
     * @param {?} nodeId Identifier of the node
     * @return {?}
     */
    GraphComponent.prototype.displayNodeDetails = function (nodeId) {
        var _this = this;
        this.nodeDetailContainer.clear();
        this.nodeDetailComponentRef = this.nodeDetailContainer.createComponent(this.componentFactory);
        this.nodeDetailComponentRef.instance.ngNodeDetailViewClosed.subscribe(function () { return _this.closeNodeDetailView(); });
        this.nodeDetailComponentRef.instance.nodeId = nodeId;
    };
    /**
     * Closes the view containing details of a node, if displayed
     * @return {?}
     */
    GraphComponent.prototype.closeNodeDetailView = function () {
        if (this.nodeDetailComponentRef) {
            this.nodeDetailComponentRef.destroy();
            this.dagreD3RendererService.unselectNode();
        }
    };
    /**
     * Closes context menu if any opened
     * @return {?}
     */
    GraphComponent.prototype.closeContextMenu = function () {
        this.dagreD3RendererService.closeContextMenu();
    };
    /**
     * Handles error
     * @param {?} exception Exception raised during creation or rendering of the graph
     * @param {?=} flush If set to true, any SVG element rendered in container is removed from it (default: false)
     * @return {?}
     */
    GraphComponent.prototype.handleError = function (exception, flush) {
        if (flush === void 0) { flush = false; }
        this.rendering = false;
        this.error = true;
        console.error(exception);
        if (flush) {
            this.dagreD3RendererService.flush();
        }
    };
    return GraphComponent;
}());
GraphComponent.defaultMode = 'simplified';
GraphComponent.simplifiedMode = 'simplified';
GraphComponent.extendedMode = 'extended';
GraphComponent.delay = 500;
GraphComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'graph',
                providers: [MapperService, GraphFormatterService, DagreD3RendererService],
                inputs: ['data:graph'],
                outputs: ['ngGraphRendered', 'ngGraphClicked', 'ngNodeClicked', 'ngNodeCtrlClicked', 'ngEdgeClicked', 'ngEdgeCtrlClicked'],
                template: "<div class=\"rendering\" *ngIf=\"rendering\"> <i class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw fa-5x\"></i> </div> <div class=\"error\" *ngIf=\"error\"> <i class=\"fa fa-exclamation-circle fa-fw fa-5x\"></i> <br/> <span>Graph could not be rendered.</span> </div> <div ngbDropdown class=\"select-view\" *ngIf=\"!rendering && !error && graph && graph['provenance']\"> <button id=\"selectView\" class=\"btn btn-primary\" ngbDropdownToggle>Mode</button> <div class=\"dropdown-menu\" aria-labelledby=\"selectView\"> <button id=\"simplifiedMode\" class=\"dropdown-item text-center\" [class.selected]=\"this.mode==='simplified'\" (click)=\"changeMode('simplified')\">Simplified</button> <button id=\"extendedMode\" class=\"dropdown-item text-center\" [class.selected]=\"this.mode==='extended'\" (click)=\"changeMode('extended')\">Extended</button> </div> </div> <div id=\"zoom-controls\" *ngIf=\"!rendering && !error\"> <button id=\"zoom-fit\" class=\"btn btn-primary\" (click)=\"fitContent()\"><i class=\"fa fa-arrows-alt\"></i></button> <button id=\"zoom-in\" class=\"btn btn-primary\" (click)=\"zoomIn()\"><i class=\"fa fa-search-plus\"></i></button> <button id=\"zoom-out\" class=\"btn btn-primary\" (click)=\"zoomOut()\"><i class=\"fa fa-search-minus\"></i></button> </div> <div #svgContainer id=\"svg-container\"> <ng-template #nodeDetailContainer></ng-template> </div> ",
                styles: [":host { height: 100%; position: relative; display: flex; align-items: center; justify-content: center; text-align: center; border: 1px solid rgba(0, 0, 0, 0.15); overflow: hidden; } .rendering, .error { width: 100%; height: 100%; position: absolute; top: 0; left: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; } .rendering { background-color: rgba(0, 0, 0, 0.025); } .error { background-color: rgba(255, 0, 0, 0.05); } .rendering > i { align-self: center; color: #0275d8; } .select-view { position: absolute; top: 0; right: 0; padding-top: 10px; padding-right: 10px; } .select-view > .dropdown-menu { left: auto; right: 10px; } .selected { color: white; background-color: #0275d8; } #svg-container { width: 100%; height: 100%; } #zoom-controls { display: flex; flex-direction: column; position: absolute; top: 0; left: 0; padding-left: 10px; } #zoom-controls > button { margin-top: 10px; } "]
            },] },
];
/**
 * @nocollapse
 */
GraphComponent.ctorParameters = function () { return [
    { type: _angular_core.ComponentFactoryResolver, },
    { type: MapperService, },
    { type: GraphFormatterService, },
    { type: DagreD3RendererService, },
]; };
GraphComponent.propDecorators = {
    'svgContainer': [{ type: _angular_core.ViewChild, args: ['svgContainer',] },],
    'nodeDetailContainer': [{ type: _angular_core.ViewChild, args: ['nodeDetailContainer', { read: _angular_core.ViewContainerRef },] },],
};

var ProvVizModule = (function () {
    function ProvVizModule() {
    }
    /**
     * @return {?}
     */
    ProvVizModule.forRoot = function () {
        return {
            ngModule: ProvVizModule
        };
    };
    return ProvVizModule;
}());
ProvVizModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                entryComponents: [NodeDetailComponent],
                imports: [
                    _angular_common.CommonModule,
                    _ngBootstrap_ngBootstrap.NgbModule.forRoot()
                ],
                declarations: [
                    GraphComponent,
                    NodeDetailComponent
                ],
                exports: [
                    GraphComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
ProvVizModule.ctorParameters = function () { return []; };

exports.ProvVizModule = ProvVizModule;
exports.GraphComponent = GraphComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
