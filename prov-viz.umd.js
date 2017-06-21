(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@ng-bootstrap/ng-bootstrap'), require('lodash'), require('d3'), require('dagre-d3')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@ng-bootstrap/ng-bootstrap', 'lodash', 'd3', 'dagre-d3'], factory) :
	(factory((global['prov-viz'] = global['prov-viz'] || {}),global._angular_core,global._angular_common,global._ngBootstrap_ngBootstrap,global._,global.d3,global.dagreD3));
}(this, (function (exports,_angular_core,_angular_common,_ngBootstrap_ngBootstrap,_,d3,dagreD3) { 'use strict';

var DATA = {
    "graph": {
        "type": "Provenance",
        "directed": true,
        "nodes": [
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
                        }
                    ]
                }
            },
            {
                "id": "activity_creation_simulation",
                "type": "activity",
                "label": "Creation of the simulation from the circuit",
                "metadata": {
                    "subType": "BBP Activity"
                }
            },
            {
                "id": "agent_1_activity_creation_simulation",
                "type": "agent",
                "label": "First contributor",
                "metadata": {
                    "subType": "contributor"
                }
            },
            {
                "id": "agent_2_activity_creation_simulation",
                "type": "agent",
                "label": "Second contributor",
                "metadata": {
                    "subType": "contributor"
                }
            },
            {
                "id": "simulation",
                "type": "entity",
                "label": "Simulation",
                "metadata": {
                    "subType": "simulation",
                    "links": [
                        {
                            "rel": "down",
                            "href": "<HTTP>"
                        }
                    ]
                }
            },
            {
                "id": "activity_validation_simulation",
                "type": "activity",
                "label": "Validation of the simulation",
                "metadata": {
                    "subType": "BBP Activity"
                }
            },
            {
                "id": "agent_1_activity_validation_simulation",
                "type": "agent",
                "label": "First contributor",
                "metadata": {
                    "subType": "contributor"
                }
            },
            {
                "id": "agent_2_activity_validation_simulation",
                "type": "agent",
                "label": "Second contributor",
                "metadata": {
                    "subType": "contributor"
                }
            },
            {
                "id": "validation_simulation",
                "type": "entity",
                "label": "Validation of simulation",
                "metadata": {
                    "subType": "validation",
                    "links": [
                        {
                            "rel": "up",
                            "href": "<HTTP>"
                        }
                    ]
                }
            }
        ],
        "edges": [
            {
                "source": "agent_1_activity_creation_simulation",
                "target": "activity_creation_simulation"
            },
            {
                "source": "agent_2_activity_creation_simulation",
                "target": "activity_creation_simulation"
            },
            {
                "source": "agent_1_activity_validation_simulation",
                "target": "activity_validation_simulation"
            },
            {
                "source": "agent_2_activity_validation_simulation",
                "target": "activity_validation_simulation"
            },
            {
                "source": "activity_creation_simulation",
                "target": "circuit"
            },
            {
                "source": "activity_validation_simulation",
                "target": "simulation"
            },
            {
                "source": "simulation",
                "target": "activity_creation_simulation"
            },
            {
                "source": "validation_simulation",
                "target": "activity_validation_simulation"
            }
        ]
    }
};
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

var GraphService = (function () {
    function GraphService() {
    }
    /**
     * Retrieves the immediate Provenance graph of a given element
     * @param {?} id Identifier of the element
     * @return {?} Provenance graph
     */
    GraphService.prototype.getProvenance = function (id) {
        //TODO: Change behavior
        return DATA;
    };
    return GraphService;
}());
GraphService.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
GraphService.ctorParameters = function () { return []; };

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
            .on('contextmenu', function (nodeId, index) {
            _this.selectNode(nodeId);
            _this.dispatch.call('nodeCtrlClicked', _this, _this.containerElement, nodeId);
            contextMenu(_this.getMenuOfNode(nodeId), { 'context': _this, 'closeCallback': function () { return _this.unselectNode(); } })(nodeId, index);
        })
            .on('click', function (nodeId) {
            d3.event.stopPropagation();
            _this.selectNode(nodeId);
            _this.closeContextMenu();
            _this.dispatch.call('nodeClicked', _this, _this.containerElement, nodeId);
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
     * @param {?} graphService
     * @param {?} mapperService Injection of mapper service
     * @param {?} graphFormatterService Injection of graph formatter service
     * @param {?} dagreD3RendererService
     */
    function GraphComponent(componentFactoryResolver, graphService, mapperService, graphFormatterService, dagreD3RendererService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.graphService = graphService;
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
            var /** @type {?} */ data = this.graphService.getProvenance(this.sourceId);
            this.graph = this.mapperService.format(data);
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
                if (_this.formattedGraph) {
                    var /** @type {?} */ graphToDisplay = _this.formattedGraph['provenance'] ? _this.formattedGraph[_this.mode] : _this.formattedGraph[GraphComponent.extendedMode];
                    _this.dagreD3RendererService.initialize(_this.svgContainer.nativeElement, graphToDisplay);
                    _this.dagreD3RendererService.renderGraph();
                }
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
                providers: [GraphService, MapperService, GraphFormatterService, DagreD3RendererService],
                inputs: ['sourceId'],
                outputs: ['ngGraphRendered', 'ngGraphClicked', 'ngNodeClicked', 'ngNodeCtrlClicked', 'ngEdgeClicked', 'ngEdgeCtrlClicked'],
                template: "<div class=\"rendering\" *ngIf=\"rendering\"> <i class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw fa-5x\"></i> </div> <div class=\"error\" *ngIf=\"error\"> <i class=\"fa fa-exclamation-circle fa-fw fa-5x\"></i> <br/> <span>Graph could not be rendered.</span> </div> <div ngbDropdown class=\"select-view\" *ngIf=\"graph && !rendering && !error && graph && graph['provenance']\"> <button id=\"selectView\" class=\"btn btn-primary\" ngbDropdownToggle>Mode</button> <div class=\"dropdown-menu\" aria-labelledby=\"selectView\"> <button id=\"simplifiedMode\" class=\"dropdown-item text-center\" [class.selected]=\"this.mode==='simplified'\" (click)=\"changeMode('simplified')\">Simplified</button> <button id=\"extendedMode\" class=\"dropdown-item text-center\" [class.selected]=\"this.mode==='extended'\" (click)=\"changeMode('extended')\">Extended</button> </div> </div> <div id=\"zoom-controls\" *ngIf=\"graph && !rendering && !error\"> <button id=\"zoom-fit\" class=\"btn btn-primary\" (click)=\"fitContent()\"><i class=\"fa fa-arrows-alt\"></i></button> <button id=\"zoom-in\" class=\"btn btn-primary\" (click)=\"zoomIn()\"><i class=\"fa fa-search-plus\"></i></button> <button id=\"zoom-out\" class=\"btn btn-primary\" (click)=\"zoomOut()\"><i class=\"fa fa-search-minus\"></i></button> </div> <div #svgContainer id=\"svg-container\"> <ng-template #nodeDetailContainer id=\"node-detail-container\"></ng-template> </div> ",
                styles: ["/*! * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com) * Copyright 2011-2017 The Bootstrap Authors * Copyright 2011-2017 Twitter, Inc. * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE) *//*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}@media print{*,::after,::before,blockquote::first-letter,blockquote::first-line,div::first-letter,div::first-line,li::first-letter,li::first-line,p::first-letter,p::first-line{text-shadow:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}a,a:visited{text-decoration:underline}abbr[title]::after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}html{-webkit-box-sizing:border-box;box-sizing:border-box}*,::after,::before{-webkit-box-sizing:inherit;box-sizing:inherit}@-ms-viewport{width:device-width}html{-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:transparent}body{font-family:-apple-system,system-ui,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-size:1rem;font-weight:400;line-height:1.5;color:#292b2c;background-color:#fff}[tabindex=\"-1\"]:focus{outline:0!important}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{cursor:help}address{margin-bottom:1rem;font-style:normal;line-height:inherit}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}a{color:#0275d8;text-decoration:none}a:focus,a:hover{color:#014c8c;text-decoration:underline}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}pre{margin-top:0;margin-bottom:1rem;overflow:auto}figure{margin:0 0 1rem}img{vertical-align:middle}[role=button]{cursor:pointer}[role=button],a,area,button,input,label,select,summary,textarea{-ms-touch-action:manipulation;touch-action:manipulation}table{border-collapse:collapse;background-color:transparent}caption{padding-top:.75rem;padding-bottom:.75rem;color:#636c72;text-align:left;caption-side:bottom}th{text-align:left}label{display:inline-block;margin-bottom:.5rem}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,select,textarea{line-height:inherit}input[type=checkbox]:disabled,input[type=radio]:disabled{cursor:not-allowed}input[type=date],input[type=time],input[type=datetime-local],input[type=month]{-webkit-appearance:listbox}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit}input[type=search]{-webkit-appearance:none}output{display:inline-block}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.1;color:inherit}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.1}.display-2{font-size:5.5rem;font-weight:300;line-height:1.1}.display-3{font-size:4.5rem;font-weight:300;line-height:1.1}.display-4{font-size:3.5rem;font-weight:300;line-height:1.1}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:5px}.initialism{font-size:90%;text-transform:uppercase}.blockquote{padding:.5rem 1rem;margin-bottom:1rem;font-size:1.25rem;border-left:.25rem solid #eceeef}.blockquote-footer{display:block;font-size:80%;color:#636c72}.blockquote-footer::before{content:\"\\2014 \\00A0\"}.blockquote-reverse{padding-right:1rem;padding-left:0;text-align:right;border-right:.25rem solid #eceeef;border-left:0}.blockquote-reverse .blockquote-footer::before{content:\"\"}.blockquote-reverse .blockquote-footer::after{content:\"\\00A0 \\2014\"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #ddd;border-radius:.25rem;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#636c72}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}code{padding:.2rem .4rem;font-size:90%;color:#bd4147;background-color:#f7f7f9;border-radius:.25rem}a>code{padding:0;color:inherit;background-color:inherit}kbd{padding:.2rem .4rem;font-size:90%;color:#fff;background-color:#292b2c;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;margin-top:0;margin-bottom:1rem;font-size:90%;color:#292b2c}pre code{padding:0;font-size:inherit;color:inherit;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{position:relative;margin-left:auto;margin-right:auto;padding-right:15px;padding-left:15px}@media (min-width:576px){.container{padding-right:15px;padding-left:15px}}@media (min-width:768px){.container{padding-right:15px;padding-left:15px}}@media (min-width:992px){.container{padding-right:15px;padding-left:15px}}@media (min-width:1200px){.container{padding-right:15px;padding-left:15px}}@media (min-width:576px){.container{width:540px;max-width:100%}}@media (min-width:768px){.container{width:720px;max-width:100%}}@media (min-width:992px){.container{width:960px;max-width:100%}}@media (min-width:1200px){.container{width:1140px;max-width:100%}}.container-fluid{position:relative;margin-left:auto;margin-right:auto;padding-right:15px;padding-left:15px}@media (min-width:576px){.container-fluid{padding-right:15px;padding-left:15px}}@media (min-width:768px){.container-fluid{padding-right:15px;padding-left:15px}}@media (min-width:992px){.container-fluid{padding-right:15px;padding-left:15px}}@media (min-width:1200px){.container-fluid{padding-right:15px;padding-left:15px}}.row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}@media (min-width:576px){.row{margin-right:-15px;margin-left:-15px}}@media (min-width:768px){.row{margin-right:-15px;margin-left:-15px}}@media (min-width:992px){.row{margin-right:-15px;margin-left:-15px}}@media (min-width:1200px){.row{margin-right:-15px;margin-left:-15px}}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}@media (min-width:576px){.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9{padding-right:15px;padding-left:15px}}@media (min-width:768px){.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9{padding-right:15px;padding-left:15px}}@media (min-width:992px){.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9{padding-right:15px;padding-left:15px}}@media (min-width:1200px){.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9{padding-right:15px;padding-left:15px}}.col{-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-auto{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:auto}.col-1{-webkit-box-flex:0;-webkit-flex:0 0 8.333333%;-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-2{-webkit-box-flex:0;-webkit-flex:0 0 16.666667%;-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-3{-webkit-box-flex:0;-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-4{-webkit-box-flex:0;-webkit-flex:0 0 33.333333%;-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-5{-webkit-box-flex:0;-webkit-flex:0 0 41.666667%;-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-6{-webkit-box-flex:0;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-7{-webkit-box-flex:0;-webkit-flex:0 0 58.333333%;-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-8{-webkit-box-flex:0;-webkit-flex:0 0 66.666667%;-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-9{-webkit-box-flex:0;-webkit-flex:0 0 75%;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-10{-webkit-box-flex:0;-webkit-flex:0 0 83.333333%;-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-11{-webkit-box-flex:0;-webkit-flex:0 0 91.666667%;-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-12{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.pull-0{right:auto}.pull-1{right:8.333333%}.pull-2{right:16.666667%}.pull-3{right:25%}.pull-4{right:33.333333%}.pull-5{right:41.666667%}.pull-6{right:50%}.pull-7{right:58.333333%}.pull-8{right:66.666667%}.pull-9{right:75%}.pull-10{right:83.333333%}.pull-11{right:91.666667%}.pull-12{right:100%}.push-0{left:auto}.push-1{left:8.333333%}.push-2{left:16.666667%}.push-3{left:25%}.push-4{left:33.333333%}.push-5{left:41.666667%}.push-6{left:50%}.push-7{left:58.333333%}.push-8{left:66.666667%}.push-9{left:75%}.push-10{left:83.333333%}.push-11{left:91.666667%}.push-12{left:100%}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-sm-auto{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:auto}.col-sm-1{-webkit-box-flex:0;-webkit-flex:0 0 8.333333%;-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{-webkit-box-flex:0;-webkit-flex:0 0 16.666667%;-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{-webkit-box-flex:0;-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-sm-4{-webkit-box-flex:0;-webkit-flex:0 0 33.333333%;-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{-webkit-box-flex:0;-webkit-flex:0 0 41.666667%;-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{-webkit-box-flex:0;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-sm-7{-webkit-box-flex:0;-webkit-flex:0 0 58.333333%;-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{-webkit-box-flex:0;-webkit-flex:0 0 66.666667%;-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{-webkit-box-flex:0;-webkit-flex:0 0 75%;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-sm-10{-webkit-box-flex:0;-webkit-flex:0 0 83.333333%;-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{-webkit-box-flex:0;-webkit-flex:0 0 91.666667%;-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.pull-sm-0{right:auto}.pull-sm-1{right:8.333333%}.pull-sm-2{right:16.666667%}.pull-sm-3{right:25%}.pull-sm-4{right:33.333333%}.pull-sm-5{right:41.666667%}.pull-sm-6{right:50%}.pull-sm-7{right:58.333333%}.pull-sm-8{right:66.666667%}.pull-sm-9{right:75%}.pull-sm-10{right:83.333333%}.pull-sm-11{right:91.666667%}.pull-sm-12{right:100%}.push-sm-0{left:auto}.push-sm-1{left:8.333333%}.push-sm-2{left:16.666667%}.push-sm-3{left:25%}.push-sm-4{left:33.333333%}.push-sm-5{left:41.666667%}.push-sm-6{left:50%}.push-sm-7{left:58.333333%}.push-sm-8{left:66.666667%}.push-sm-9{left:75%}.push-sm-10{left:83.333333%}.push-sm-11{left:91.666667%}.push-sm-12{left:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-md-auto{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:auto}.col-md-1{-webkit-box-flex:0;-webkit-flex:0 0 8.333333%;-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{-webkit-box-flex:0;-webkit-flex:0 0 16.666667%;-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{-webkit-box-flex:0;-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-md-4{-webkit-box-flex:0;-webkit-flex:0 0 33.333333%;-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{-webkit-box-flex:0;-webkit-flex:0 0 41.666667%;-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{-webkit-box-flex:0;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-md-7{-webkit-box-flex:0;-webkit-flex:0 0 58.333333%;-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{-webkit-box-flex:0;-webkit-flex:0 0 66.666667%;-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{-webkit-box-flex:0;-webkit-flex:0 0 75%;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-md-10{-webkit-box-flex:0;-webkit-flex:0 0 83.333333%;-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{-webkit-box-flex:0;-webkit-flex:0 0 91.666667%;-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.pull-md-0{right:auto}.pull-md-1{right:8.333333%}.pull-md-2{right:16.666667%}.pull-md-3{right:25%}.pull-md-4{right:33.333333%}.pull-md-5{right:41.666667%}.pull-md-6{right:50%}.pull-md-7{right:58.333333%}.pull-md-8{right:66.666667%}.pull-md-9{right:75%}.pull-md-10{right:83.333333%}.pull-md-11{right:91.666667%}.pull-md-12{right:100%}.push-md-0{left:auto}.push-md-1{left:8.333333%}.push-md-2{left:16.666667%}.push-md-3{left:25%}.push-md-4{left:33.333333%}.push-md-5{left:41.666667%}.push-md-6{left:50%}.push-md-7{left:58.333333%}.push-md-8{left:66.666667%}.push-md-9{left:75%}.push-md-10{left:83.333333%}.push-md-11{left:91.666667%}.push-md-12{left:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-lg-auto{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:auto}.col-lg-1{-webkit-box-flex:0;-webkit-flex:0 0 8.333333%;-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{-webkit-box-flex:0;-webkit-flex:0 0 16.666667%;-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{-webkit-box-flex:0;-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-lg-4{-webkit-box-flex:0;-webkit-flex:0 0 33.333333%;-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{-webkit-box-flex:0;-webkit-flex:0 0 41.666667%;-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{-webkit-box-flex:0;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-lg-7{-webkit-box-flex:0;-webkit-flex:0 0 58.333333%;-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{-webkit-box-flex:0;-webkit-flex:0 0 66.666667%;-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{-webkit-box-flex:0;-webkit-flex:0 0 75%;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-lg-10{-webkit-box-flex:0;-webkit-flex:0 0 83.333333%;-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{-webkit-box-flex:0;-webkit-flex:0 0 91.666667%;-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.pull-lg-0{right:auto}.pull-lg-1{right:8.333333%}.pull-lg-2{right:16.666667%}.pull-lg-3{right:25%}.pull-lg-4{right:33.333333%}.pull-lg-5{right:41.666667%}.pull-lg-6{right:50%}.pull-lg-7{right:58.333333%}.pull-lg-8{right:66.666667%}.pull-lg-9{right:75%}.pull-lg-10{right:83.333333%}.pull-lg-11{right:91.666667%}.pull-lg-12{right:100%}.push-lg-0{left:auto}.push-lg-1{left:8.333333%}.push-lg-2{left:16.666667%}.push-lg-3{left:25%}.push-lg-4{left:33.333333%}.push-lg-5{left:41.666667%}.push-lg-6{left:50%}.push-lg-7{left:58.333333%}.push-lg-8{left:66.666667%}.push-lg-9{left:75%}.push-lg-10{left:83.333333%}.push-lg-11{left:91.666667%}.push-lg-12{left:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl{-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-xl-auto{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:auto}.col-xl-1{-webkit-box-flex:0;-webkit-flex:0 0 8.333333%;-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{-webkit-box-flex:0;-webkit-flex:0 0 16.666667%;-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{-webkit-box-flex:0;-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-xl-4{-webkit-box-flex:0;-webkit-flex:0 0 33.333333%;-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{-webkit-box-flex:0;-webkit-flex:0 0 41.666667%;-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{-webkit-box-flex:0;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-xl-7{-webkit-box-flex:0;-webkit-flex:0 0 58.333333%;-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{-webkit-box-flex:0;-webkit-flex:0 0 66.666667%;-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{-webkit-box-flex:0;-webkit-flex:0 0 75%;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-xl-10{-webkit-box-flex:0;-webkit-flex:0 0 83.333333%;-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{-webkit-box-flex:0;-webkit-flex:0 0 91.666667%;-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.pull-xl-0{right:auto}.pull-xl-1{right:8.333333%}.pull-xl-2{right:16.666667%}.pull-xl-3{right:25%}.pull-xl-4{right:33.333333%}.pull-xl-5{right:41.666667%}.pull-xl-6{right:50%}.pull-xl-7{right:58.333333%}.pull-xl-8{right:66.666667%}.pull-xl-9{right:75%}.pull-xl-10{right:83.333333%}.pull-xl-11{right:91.666667%}.pull-xl-12{right:100%}.push-xl-0{left:auto}.push-xl-1{left:8.333333%}.push-xl-2{left:16.666667%}.push-xl-3{left:25%}.push-xl-4{left:33.333333%}.push-xl-5{left:41.666667%}.push-xl-6{left:50%}.push-xl-7{left:58.333333%}.push-xl-8{left:66.666667%}.push-xl-9{left:75%}.push-xl-10{left:83.333333%}.push-xl-11{left:91.666667%}.push-xl-12{left:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.table{width:100%;max-width:100%;margin-bottom:1rem}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #eceeef}.table thead th{vertical-align:bottom;border-bottom:2px solid #eceeef}.table tbody+tbody{border-top:2px solid #eceeef}.table .table{background-color:#fff}.table-sm td,.table-sm th{padding:.3rem}.table-bordered{border:1px solid #eceeef}.table-bordered td,.table-bordered th{border:1px solid #eceeef}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{background-color:rgba(0,0,0,.075)}.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table-success,.table-success>td,.table-success>th{background-color:#dff0d8}.table-hover .table-success:hover{background-color:#d0e9c6}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#d0e9c6}.table-info,.table-info>td,.table-info>th{background-color:#d9edf7}.table-hover .table-info:hover{background-color:#c4e3f3}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#c4e3f3}.table-warning,.table-warning>td,.table-warning>th{background-color:#fcf8e3}.table-hover .table-warning:hover{background-color:#faf2cc}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#faf2cc}.table-danger,.table-danger>td,.table-danger>th{background-color:#f2dede}.table-hover .table-danger:hover{background-color:#ebcccc}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#ebcccc}.thead-inverse th{color:#fff;background-color:#292b2c}.thead-default th{color:#464a4c;background-color:#eceeef}.table-inverse{color:#fff;background-color:#292b2c}.table-inverse td,.table-inverse th,.table-inverse thead th{border-color:#fff}.table-inverse.table-bordered{border:0}.table-responsive{display:block;width:100%;overflow-x:auto;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive.table-bordered{border:0}.form-control{display:block;width:100%;padding:.5rem .75rem;font-size:1rem;line-height:1.25;color:#464a4c;background-color:#fff;background-image:none;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;-webkit-transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;-o-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#464a4c;background-color:#fff;border-color:#5cb3fd;outline:0}.form-control::-webkit-input-placeholder{color:#636c72;opacity:1}.form-control::-moz-placeholder{color:#636c72;opacity:1}.form-control:-ms-input-placeholder{color:#636c72;opacity:1}.form-control::placeholder{color:#636c72;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#eceeef;opacity:1}.form-control:disabled{cursor:not-allowed}select.form-control:not([size]):not([multiple]){height:calc(2.25rem + 2px)}select.form-control:focus::-ms-value{color:#464a4c;background-color:#fff}.form-control-file,.form-control-range{display:block}.col-form-label{padding-top:calc(.5rem - 1px * 2);padding-bottom:calc(.5rem - 1px * 2);margin-bottom:0}.col-form-label-lg{padding-top:calc(.75rem - 1px * 2);padding-bottom:calc(.75rem - 1px * 2);font-size:1.25rem}.col-form-label-sm{padding-top:calc(.25rem - 1px * 2);padding-bottom:calc(.25rem - 1px * 2);font-size:.875rem}.col-form-legend{padding-top:.5rem;padding-bottom:.5rem;margin-bottom:0;font-size:1rem}.form-control-static{padding-top:.5rem;padding-bottom:.5rem;margin-bottom:0;line-height:1.25;border:solid transparent;border-width:1px 0}.form-control-static.form-control-lg,.form-control-static.form-control-sm,.input-group-lg>.form-control-static.form-control,.input-group-lg>.form-control-static.input-group-addon,.input-group-lg>.input-group-btn>.form-control-static.btn,.input-group-sm>.form-control-static.form-control,.input-group-sm>.form-control-static.input-group-addon,.input-group-sm>.input-group-btn>.form-control-static.btn{padding-right:0;padding-left:0}.form-control-sm,.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.input-group-sm>.input-group-btn>select.btn:not([size]):not([multiple]),.input-group-sm>select.form-control:not([size]):not([multiple]),.input-group-sm>select.input-group-addon:not([size]):not([multiple]),select.form-control-sm:not([size]):not([multiple]){height:1.8125rem}.form-control-lg,.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{padding:.75rem 1.5rem;font-size:1.25rem;border-radius:.3rem}.input-group-lg>.input-group-btn>select.btn:not([size]):not([multiple]),.input-group-lg>select.form-control:not([size]):not([multiple]),.input-group-lg>select.input-group-addon:not([size]):not([multiple]),select.form-control-lg:not([size]):not([multiple]){height:3.166667rem}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-check{position:relative;display:block;margin-bottom:.5rem}.form-check.disabled .form-check-label{color:#636c72;cursor:not-allowed}.form-check-label{padding-left:1.25rem;margin-bottom:0;cursor:pointer}.form-check-input{position:absolute;margin-top:.25rem;margin-left:-1.25rem}.form-check-input:only-child{position:static}.form-check-inline{display:inline-block}.form-check-inline .form-check-label{vertical-align:middle}.form-check-inline+.form-check-inline{margin-left:.75rem}.form-control-feedback{margin-top:.25rem}.form-control-danger,.form-control-success,.form-control-warning{padding-right:2.25rem;background-repeat:no-repeat;background-position:center right .5625rem;-webkit-background-size:1.125rem 1.125rem;background-size:1.125rem 1.125rem}.has-success .col-form-label,.has-success .custom-control,.has-success .form-check-label,.has-success .form-control-feedback,.has-success .form-control-label{color:#5cb85c}.has-success .form-control{border-color:#5cb85c}.has-success .input-group-addon{color:#5cb85c;border-color:#5cb85c;background-color:#eaf6ea}.has-success .form-control-success{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%235cb85c' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\")}.has-warning .col-form-label,.has-warning .custom-control,.has-warning .form-check-label,.has-warning .form-control-feedback,.has-warning .form-control-label{color:#f0ad4e}.has-warning .form-control{border-color:#f0ad4e}.has-warning .input-group-addon{color:#f0ad4e;border-color:#f0ad4e;background-color:#fff}.has-warning .form-control-warning{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23f0ad4e' d='M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z'/%3E%3C/svg%3E\")}.has-danger .col-form-label,.has-danger .custom-control,.has-danger .form-check-label,.has-danger .form-control-feedback,.has-danger .form-control-label{color:#d9534f}.has-danger .form-control{border-color:#d9534f}.has-danger .input-group-addon{color:#d9534f;border-color:#d9534f;background-color:#fdf7f7}.has-danger .form-control-danger{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23d9534f' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E\")}.form-inline{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-static{display:inline-block}.form-inline .input-group{width:auto}.form-inline .form-control-label{margin-bottom:0;vertical-align:middle}.form-inline .form-check{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:auto;margin-top:0;margin-bottom:0}.form-inline .form-check-label{padding-left:0}.form-inline .form-check-input{position:relative;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-left:0}.form-inline .custom-control-indicator{position:static;display:inline-block;margin-right:.25rem;vertical-align:text-bottom}.form-inline .has-feedback .form-control-feedback{top:0}}.btn{display:inline-block;font-weight:400;line-height:1.25;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.5rem 1rem;font-size:1rem;border-radius:.25rem;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.btn:focus,.btn:hover{text-decoration:none}.btn.focus,.btn:focus{outline:0;-webkit-box-shadow:0 0 0 2px rgba(2,117,216,.25);box-shadow:0 0 0 2px rgba(2,117,216,.25)}.btn.disabled,.btn:disabled{cursor:not-allowed;opacity:.65}.btn.active,.btn:active{background-image:none}a.btn.disabled,fieldset[disabled] a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#0275d8;border-color:#0275d8}.btn-primary:hover{color:#fff;background-color:#025aa5;border-color:#01549b}.btn-primary.focus,.btn-primary:focus{-webkit-box-shadow:0 0 0 2px rgba(2,117,216,.5);box-shadow:0 0 0 2px rgba(2,117,216,.5)}.btn-primary.disabled,.btn-primary:disabled{background-color:#0275d8;border-color:#0275d8}.btn-primary.active,.btn-primary:active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#025aa5;background-image:none;border-color:#01549b}.btn-secondary{color:#292b2c;background-color:#fff;border-color:#ccc}.btn-secondary:hover{color:#292b2c;background-color:#e6e6e6;border-color:#adadad}.btn-secondary.focus,.btn-secondary:focus{-webkit-box-shadow:0 0 0 2px rgba(204,204,204,.5);box-shadow:0 0 0 2px rgba(204,204,204,.5)}.btn-secondary.disabled,.btn-secondary:disabled{background-color:#fff;border-color:#ccc}.btn-secondary.active,.btn-secondary:active,.show>.btn-secondary.dropdown-toggle{color:#292b2c;background-color:#e6e6e6;background-image:none;border-color:#adadad}.btn-info{color:#fff;background-color:#5bc0de;border-color:#5bc0de}.btn-info:hover{color:#fff;background-color:#31b0d5;border-color:#2aabd2}.btn-info.focus,.btn-info:focus{-webkit-box-shadow:0 0 0 2px rgba(91,192,222,.5);box-shadow:0 0 0 2px rgba(91,192,222,.5)}.btn-info.disabled,.btn-info:disabled{background-color:#5bc0de;border-color:#5bc0de}.btn-info.active,.btn-info:active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#31b0d5;background-image:none;border-color:#2aabd2}.btn-success{color:#fff;background-color:#5cb85c;border-color:#5cb85c}.btn-success:hover{color:#fff;background-color:#449d44;border-color:#419641}.btn-success.focus,.btn-success:focus{-webkit-box-shadow:0 0 0 2px rgba(92,184,92,.5);box-shadow:0 0 0 2px rgba(92,184,92,.5)}.btn-success.disabled,.btn-success:disabled{background-color:#5cb85c;border-color:#5cb85c}.btn-success.active,.btn-success:active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#449d44;background-image:none;border-color:#419641}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#f0ad4e}.btn-warning:hover{color:#fff;background-color:#ec971f;border-color:#eb9316}.btn-warning.focus,.btn-warning:focus{-webkit-box-shadow:0 0 0 2px rgba(240,173,78,.5);box-shadow:0 0 0 2px rgba(240,173,78,.5)}.btn-warning.disabled,.btn-warning:disabled{background-color:#f0ad4e;border-color:#f0ad4e}.btn-warning.active,.btn-warning:active,.show>.btn-warning.dropdown-toggle{color:#fff;background-color:#ec971f;background-image:none;border-color:#eb9316}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d9534f}.btn-danger:hover{color:#fff;background-color:#c9302c;border-color:#c12e2a}.btn-danger.focus,.btn-danger:focus{-webkit-box-shadow:0 0 0 2px rgba(217,83,79,.5);box-shadow:0 0 0 2px rgba(217,83,79,.5)}.btn-danger.disabled,.btn-danger:disabled{background-color:#d9534f;border-color:#d9534f}.btn-danger.active,.btn-danger:active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#c9302c;background-image:none;border-color:#c12e2a}.btn-outline-primary{color:#0275d8;background-image:none;background-color:transparent;border-color:#0275d8}.btn-outline-primary:hover{color:#fff;background-color:#0275d8;border-color:#0275d8}.btn-outline-primary.focus,.btn-outline-primary:focus{-webkit-box-shadow:0 0 0 2px rgba(2,117,216,.5);box-shadow:0 0 0 2px rgba(2,117,216,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#0275d8;background-color:transparent}.btn-outline-primary.active,.btn-outline-primary:active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#0275d8;border-color:#0275d8}.btn-outline-secondary{color:#ccc;background-image:none;background-color:transparent;border-color:#ccc}.btn-outline-secondary:hover{color:#fff;background-color:#ccc;border-color:#ccc}.btn-outline-secondary.focus,.btn-outline-secondary:focus{-webkit-box-shadow:0 0 0 2px rgba(204,204,204,.5);box-shadow:0 0 0 2px rgba(204,204,204,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#ccc;background-color:transparent}.btn-outline-secondary.active,.btn-outline-secondary:active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#ccc;border-color:#ccc}.btn-outline-info{color:#5bc0de;background-image:none;background-color:transparent;border-color:#5bc0de}.btn-outline-info:hover{color:#fff;background-color:#5bc0de;border-color:#5bc0de}.btn-outline-info.focus,.btn-outline-info:focus{-webkit-box-shadow:0 0 0 2px rgba(91,192,222,.5);box-shadow:0 0 0 2px rgba(91,192,222,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#5bc0de;background-color:transparent}.btn-outline-info.active,.btn-outline-info:active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#5bc0de;border-color:#5bc0de}.btn-outline-success{color:#5cb85c;background-image:none;background-color:transparent;border-color:#5cb85c}.btn-outline-success:hover{color:#fff;background-color:#5cb85c;border-color:#5cb85c}.btn-outline-success.focus,.btn-outline-success:focus{-webkit-box-shadow:0 0 0 2px rgba(92,184,92,.5);box-shadow:0 0 0 2px rgba(92,184,92,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#5cb85c;background-color:transparent}.btn-outline-success.active,.btn-outline-success:active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#5cb85c;border-color:#5cb85c}.btn-outline-warning{color:#f0ad4e;background-image:none;background-color:transparent;border-color:#f0ad4e}.btn-outline-warning:hover{color:#fff;background-color:#f0ad4e;border-color:#f0ad4e}.btn-outline-warning.focus,.btn-outline-warning:focus{-webkit-box-shadow:0 0 0 2px rgba(240,173,78,.5);box-shadow:0 0 0 2px rgba(240,173,78,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#f0ad4e;background-color:transparent}.btn-outline-warning.active,.btn-outline-warning:active,.show>.btn-outline-warning.dropdown-toggle{color:#fff;background-color:#f0ad4e;border-color:#f0ad4e}.btn-outline-danger{color:#d9534f;background-image:none;background-color:transparent;border-color:#d9534f}.btn-outline-danger:hover{color:#fff;background-color:#d9534f;border-color:#d9534f}.btn-outline-danger.focus,.btn-outline-danger:focus{-webkit-box-shadow:0 0 0 2px rgba(217,83,79,.5);box-shadow:0 0 0 2px rgba(217,83,79,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#d9534f;background-color:transparent}.btn-outline-danger.active,.btn-outline-danger:active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#d9534f;border-color:#d9534f}.btn-link{font-weight:400;color:#0275d8;border-radius:0}.btn-link,.btn-link.active,.btn-link:active,.btn-link:disabled{background-color:transparent}.btn-link,.btn-link:active,.btn-link:focus{border-color:transparent}.btn-link:hover{border-color:transparent}.btn-link:focus,.btn-link:hover{color:#014c8c;text-decoration:underline;background-color:transparent}.btn-link:disabled{color:#636c72}.btn-link:disabled:focus,.btn-link:disabled:hover{text-decoration:none}.btn-group-lg>.btn,.btn-lg{padding:.75rem 1.5rem;font-size:1.25rem;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{opacity:0;-webkit-transition:opacity .15s linear;-o-transition:opacity .15s linear;transition:opacity .15s linear}.fade.show{opacity:1}.collapse{display:none}.collapse.show{display:block}tr.collapse.show{display:table-row}tbody.collapse.show{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition:height .35s ease;-o-transition:height .35s ease;transition:height .35s ease}.dropdown,.dropup{position:relative}.dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.3em;vertical-align:middle;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-left:.3em solid transparent}.dropdown-toggle:focus{outline:0}.dropup .dropdown-toggle::after{border-top:0;border-bottom:.3em solid}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#292b2c;text-align:left;list-style:none;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-divider{height:1px;margin:.5rem 0;overflow:hidden;background-color:#eceeef}.dropdown-item{display:block;width:100%;padding:3px 1.5rem;clear:both;font-weight:400;color:#292b2c;text-align:inherit;white-space:nowrap;background:0 0;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#1d1e1f;text-decoration:none;background-color:#f7f7f9}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#0275d8}.dropdown-item.disabled,.dropdown-item:disabled{color:#636c72;cursor:not-allowed;background-color:transparent}.show>.dropdown-menu{display:block}.show>a{outline:0}.dropdown-menu-right{right:0;left:auto}.dropdown-menu-left{right:auto;left:0}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#636c72;white-space:nowrap}.dropdown-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:990}.dropup .dropdown-menu{top:auto;bottom:100%;margin-bottom:.125rem}.btn-group,.btn-group-vertical{position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;-webkit-box-flex:0;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto}.btn-group-vertical>.btn:hover,.btn-group>.btn:hover{z-index:2}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus{z-index:2}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group,.btn-group-vertical .btn+.btn,.btn-group-vertical .btn+.btn-group,.btn-group-vertical .btn-group+.btn,.btn-group-vertical .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.btn-group>.btn-group{float:left}.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn+.dropdown-toggle-split::after{margin-left:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:1.125rem;padding-left:1.125rem}.btn-group-vertical{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.btn-group-vertical .btn,.btn-group-vertical .btn-group{width:100%}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:last-child:not(:first-child){border-top-right-radius:0;border-top-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-right-radius:0;border-top-left-radius:0}[data-toggle=buttons]>.btn input[type=checkbox],[data-toggle=buttons]>.btn input[type=radio],[data-toggle=buttons]>.btn-group>.btn input[type=checkbox],[data-toggle=buttons]>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%}.input-group .form-control{position:relative;z-index:2;-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;width:1%;margin-bottom:0}.input-group .form-control:active,.input-group .form-control:focus,.input-group .form-control:hover{z-index:3}.input-group .form-control,.input-group-addon,.input-group-btn{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.input-group .form-control:not(:first-child):not(:last-child),.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{white-space:nowrap;vertical-align:middle}.input-group-addon{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.25;color:#464a4c;text-align:center;background-color:#eceeef;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.input-group-addon.form-control-sm,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.input-group-addon.btn{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.input-group-addon.form-control-lg,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.input-group-addon.btn{padding:.75rem 1.5rem;font-size:1.25rem;border-radius:.3rem}.input-group-addon input[type=checkbox],.input-group-addon input[type=radio]{margin-top:0}.input-group .form-control:not(:last-child),.input-group-addon:not(:last-child),.input-group-btn:not(:first-child)>.btn-group:not(:last-child)>.btn,.input-group-btn:not(:first-child)>.btn:not(:last-child):not(.dropdown-toggle),.input-group-btn:not(:last-child)>.btn,.input-group-btn:not(:last-child)>.btn-group>.btn,.input-group-btn:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-top-right-radius:0}.input-group-addon:not(:last-child){border-right:0}.input-group .form-control:not(:first-child),.input-group-addon:not(:first-child),.input-group-btn:not(:first-child)>.btn,.input-group-btn:not(:first-child)>.btn-group>.btn,.input-group-btn:not(:first-child)>.dropdown-toggle,.input-group-btn:not(:last-child)>.btn-group:not(:first-child)>.btn,.input-group-btn:not(:last-child)>.btn:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.form-control+.input-group-addon:not(:first-child){border-left:0}.input-group-btn{position:relative;font-size:0;white-space:nowrap}.input-group-btn>.btn{position:relative;-webkit-box-flex:1;-webkit-flex:1 1 0%;-ms-flex:1 1 0%;flex:1 1 0%}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:active,.input-group-btn>.btn:focus,.input-group-btn>.btn:hover{z-index:3}.input-group-btn:not(:last-child)>.btn,.input-group-btn:not(:last-child)>.btn-group{margin-right:-1px}.input-group-btn:not(:first-child)>.btn,.input-group-btn:not(:first-child)>.btn-group{z-index:2;margin-left:-1px}.input-group-btn:not(:first-child)>.btn-group:active,.input-group-btn:not(:first-child)>.btn-group:focus,.input-group-btn:not(:first-child)>.btn-group:hover,.input-group-btn:not(:first-child)>.btn:active,.input-group-btn:not(:first-child)>.btn:focus,.input-group-btn:not(:first-child)>.btn:hover{z-index:3}.custom-control{position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;min-height:1.5rem;padding-left:1.5rem;margin-right:1rem;cursor:pointer}.custom-control-input{position:absolute;z-index:-1;opacity:0}.custom-control-input:checked~.custom-control-indicator{color:#fff;background-color:#0275d8}.custom-control-input:focus~.custom-control-indicator{-webkit-box-shadow:0 0 0 1px #fff,0 0 0 3px #0275d8;box-shadow:0 0 0 1px #fff,0 0 0 3px #0275d8}.custom-control-input:active~.custom-control-indicator{color:#fff;background-color:#8fcafe}.custom-control-input:disabled~.custom-control-indicator{cursor:not-allowed;background-color:#eceeef}.custom-control-input:disabled~.custom-control-description{color:#636c72;cursor:not-allowed}.custom-control-indicator{position:absolute;top:.25rem;left:0;display:block;width:1rem;height:1rem;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#ddd;background-repeat:no-repeat;background-position:center center;-webkit-background-size:50% 50%;background-size:50% 50%}.custom-checkbox .custom-control-indicator{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-indicator{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-indicator{background-color:#0275d8;background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\")}.custom-radio .custom-control-indicator{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-indicator{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\")}.custom-controls-stacked{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.custom-controls-stacked .custom-control{margin-bottom:.25rem}.custom-controls-stacked .custom-control+.custom-control{margin-left:0}.custom-select{display:inline-block;max-width:100%;height:calc(2.25rem + 2px);padding:.375rem 1.75rem .375rem .75rem;line-height:1.25;color:#464a4c;vertical-align:middle;background:#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center;-webkit-background-size:8px 10px;background-size:8px 10px;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;-moz-appearance:none;-webkit-appearance:none}.custom-select:focus{border-color:#5cb3fd;outline:0}.custom-select:focus::-ms-value{color:#464a4c;background-color:#fff}.custom-select:disabled{color:#636c72;cursor:not-allowed;background-color:#eceeef}.custom-select::-ms-expand{opacity:0}.custom-select-sm{padding-top:.375rem;padding-bottom:.375rem;font-size:75%}.custom-file{position:relative;display:inline-block;max-width:100%;height:2.5rem;margin-bottom:0;cursor:pointer}.custom-file-input{min-width:14rem;max-width:100%;height:2.5rem;margin:0;filter:alpha(opacity=0);opacity:0}.custom-file-control{position:absolute;top:0;right:0;left:0;z-index:5;height:2.5rem;padding:.5rem 1rem;line-height:1.5;color:#464a4c;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.custom-file-control:lang(en)::after{content:\"Choose file...\"}.custom-file-control::before{position:absolute;top:-1px;right:-1px;bottom:-1px;z-index:6;display:block;height:2.5rem;padding:.5rem 1rem;line-height:1.5;color:#464a4c;background-color:#eceeef;border:1px solid rgba(0,0,0,.15);border-radius:0 .25rem .25rem 0}.custom-file-control:lang(en)::before{content:\"Browse\"}.nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5em 1em}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#636c72;cursor:not-allowed}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-right-radius:.25rem;border-top-left-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#eceeef #eceeef #ddd}.nav-tabs .nav-link.disabled{color:#636c72;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#464a4c;background-color:#fff;border-color:#ddd #ddd #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-right-radius:0;border-top-left-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-item.show .nav-link,.nav-pills .nav-link.active{color:#fff;cursor:default;background-color:#0275d8}.nav-fill .nav-item{-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;text-align:center}.nav-justified .nav-item{-webkit-box-flex:1;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:.5rem 1rem}.navbar-brand{display:inline-block;padding-top:.25rem;padding-bottom:.25rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-text{display:inline-block;padding-top:.425rem;padding-bottom:.425rem}.navbar-toggler{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;padding:.25rem .75rem;font-size:1.25rem;line-height:1;background:0 0;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:no-repeat center center;-webkit-background-size:100% 100%;background-size:100% 100%}.navbar-toggler-left{position:absolute;left:1rem}.navbar-toggler-right{position:absolute;right:1rem}@media (max-width:575px){.navbar-toggleable .navbar-nav .dropdown-menu{position:static;float:none}.navbar-toggleable>.container{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-toggleable{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.navbar-toggleable .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.navbar-toggleable .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-toggleable>.container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.navbar-toggleable .navbar-collapse{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;width:100%}.navbar-toggleable .navbar-toggler{display:none}}@media (max-width:767px){.navbar-toggleable-sm .navbar-nav .dropdown-menu{position:static;float:none}.navbar-toggleable-sm>.container{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-toggleable-sm{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.navbar-toggleable-sm .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.navbar-toggleable-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-toggleable-sm>.container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.navbar-toggleable-sm .navbar-collapse{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;width:100%}.navbar-toggleable-sm .navbar-toggler{display:none}}@media (max-width:991px){.navbar-toggleable-md .navbar-nav .dropdown-menu{position:static;float:none}.navbar-toggleable-md>.container{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-toggleable-md{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.navbar-toggleable-md .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.navbar-toggleable-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-toggleable-md>.container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.navbar-toggleable-md .navbar-collapse{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;width:100%}.navbar-toggleable-md .navbar-toggler{display:none}}@media (max-width:1199px){.navbar-toggleable-lg .navbar-nav .dropdown-menu{position:static;float:none}.navbar-toggleable-lg>.container{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-toggleable-lg{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.navbar-toggleable-lg .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.navbar-toggleable-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-toggleable-lg>.container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.navbar-toggleable-lg .navbar-collapse{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;width:100%}.navbar-toggleable-lg .navbar-toggler{display:none}}.navbar-toggleable-xl{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.navbar-toggleable-xl .navbar-nav .dropdown-menu{position:static;float:none}.navbar-toggleable-xl>.container{padding-right:0;padding-left:0}.navbar-toggleable-xl .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.navbar-toggleable-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-toggleable-xl>.container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.navbar-toggleable-xl .navbar-collapse{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;width:100%}.navbar-toggleable-xl .navbar-toggler{display:none}.navbar-light .navbar-brand,.navbar-light .navbar-toggler{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover,.navbar-light .navbar-toggler:focus,.navbar-light .navbar-toggler:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.open,.navbar-light .navbar-nav .open>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-inverse .navbar-brand,.navbar-inverse .navbar-toggler{color:#fff}.navbar-inverse .navbar-brand:focus,.navbar-inverse .navbar-brand:hover,.navbar-inverse .navbar-toggler:focus,.navbar-inverse .navbar-toggler:hover{color:#fff}.navbar-inverse .navbar-nav .nav-link{color:rgba(255,255,255,.5)}.navbar-inverse .navbar-nav .nav-link:focus,.navbar-inverse .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75)}.navbar-inverse .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-inverse .navbar-nav .active>.nav-link,.navbar-inverse .navbar-nav .nav-link.active,.navbar-inverse .navbar-nav .nav-link.open,.navbar-inverse .navbar-nav .open>.nav-link{color:#fff}.navbar-inverse .navbar-toggler{border-color:rgba(255,255,255,.1)}.navbar-inverse .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\")}.navbar-inverse .navbar-text{color:rgba(255,255,255,.5)}.card{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:#fff;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card-block{-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card>.list-group:first-child .list-group-item:first-child{border-top-right-radius:.25rem;border-top-left-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:#f7f7f9;border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-footer{padding:.75rem 1.25rem;background-color:#f7f7f9;border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}.card-header-pills{margin-right:-.625rem;margin-left:-.625rem}.card-primary{background-color:#0275d8;border-color:#0275d8}.card-primary .card-footer,.card-primary .card-header{background-color:transparent}.card-success{background-color:#5cb85c;border-color:#5cb85c}.card-success .card-footer,.card-success .card-header{background-color:transparent}.card-info{background-color:#5bc0de;border-color:#5bc0de}.card-info .card-footer,.card-info .card-header{background-color:transparent}.card-warning{background-color:#f0ad4e;border-color:#f0ad4e}.card-warning .card-footer,.card-warning .card-header{background-color:transparent}.card-danger{background-color:#d9534f;border-color:#d9534f}.card-danger .card-footer,.card-danger .card-header{background-color:transparent}.card-outline-primary{background-color:transparent;border-color:#0275d8}.card-outline-secondary{background-color:transparent;border-color:#ccc}.card-outline-info{background-color:transparent;border-color:#5bc0de}.card-outline-success{background-color:transparent;border-color:#5cb85c}.card-outline-warning{background-color:transparent;border-color:#f0ad4e}.card-outline-danger{background-color:transparent;border-color:#d9534f}.card-inverse{color:rgba(255,255,255,.65)}.card-inverse .card-footer,.card-inverse .card-header{background-color:transparent;border-color:rgba(255,255,255,.2)}.card-inverse .card-blockquote,.card-inverse .card-footer,.card-inverse .card-header,.card-inverse .card-title{color:#fff}.card-inverse .card-blockquote .blockquote-footer,.card-inverse .card-link,.card-inverse .card-subtitle,.card-inverse .card-text{color:rgba(255,255,255,.65)}.card-inverse .card-link:focus,.card-inverse .card-link:hover{color:#fff}.card-blockquote{padding:0;margin-bottom:0;border-left:0}.card-img{border-radius:calc(.25rem - 1px)}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img-top{border-top-right-radius:calc(.25rem - 1px);border-top-left-radius:calc(.25rem - 1px)}.card-img-bottom{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}@media (min-width:576px){.card-deck{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap}.card-deck .card{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1 0 0%;-ms-flex:1 0 0%;flex:1 0 0%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.card-deck .card:not(:first-child){margin-left:15px}.card-deck .card:not(:last-child){margin-right:15px}}@media (min-width:576px){.card-group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap}.card-group .card{-webkit-box-flex:1;-webkit-flex:1 0 0%;-ms-flex:1 0 0%;flex:1 0 0%}.card-group .card+.card{margin-left:0;border-left:0}.card-group .card:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.card-group .card:first-child .card-img-top{border-top-right-radius:0}.card-group .card:first-child .card-img-bottom{border-bottom-right-radius:0}.card-group .card:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.card-group .card:last-child .card-img-top{border-top-left-radius:0}.card-group .card:last-child .card-img-bottom{border-bottom-left-radius:0}.card-group .card:not(:first-child):not(:last-child){border-radius:0}.card-group .card:not(:first-child):not(:last-child) .card-img-bottom,.card-group .card:not(:first-child):not(:last-child) .card-img-top{border-radius:0}}@media (min-width:576px){.card-columns{-webkit-column-count:3;-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem}.card-columns .card{display:inline-block;width:100%;margin-bottom:.75rem}}.breadcrumb{padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#eceeef;border-radius:.25rem}.breadcrumb::after{display:block;content:\"\";clear:both}.breadcrumb-item{float:left}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;padding-left:.5rem;color:#636c72;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#636c72}.pagination{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-item:first-child .page-link{margin-left:0;border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.page-item:last-child .page-link{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.page-item.active .page-link{z-index:2;color:#fff;background-color:#0275d8;border-color:#0275d8}.page-item.disabled .page-link{color:#636c72;pointer-events:none;cursor:not-allowed;background-color:#fff;border-color:#ddd}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#0275d8;background-color:#fff;border:1px solid #ddd}.page-link:focus,.page-link:hover{color:#014c8c;text-decoration:none;background-color:#eceeef;border-color:#ddd}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem}.pagination-lg .page-item:first-child .page-link{border-bottom-left-radius:.3rem;border-top-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-bottom-right-radius:.3rem;border-top-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem}.pagination-sm .page-item:first-child .page-link{border-bottom-left-radius:.2rem;border-top-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-bottom-right-radius:.2rem;border-top-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}a.badge:focus,a.badge:hover{color:#fff;text-decoration:none;cursor:pointer}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-default{background-color:#636c72}.badge-default[href]:focus,.badge-default[href]:hover{background-color:#4b5257}.badge-primary{background-color:#0275d8}.badge-primary[href]:focus,.badge-primary[href]:hover{background-color:#025aa5}.badge-success{background-color:#5cb85c}.badge-success[href]:focus,.badge-success[href]:hover{background-color:#449d44}.badge-info{background-color:#5bc0de}.badge-info[href]:focus,.badge-info[href]:hover{background-color:#31b0d5}.badge-warning{background-color:#f0ad4e}.badge-warning[href]:focus,.badge-warning[href]:hover{background-color:#ec971f}.badge-danger{background-color:#d9534f}.badge-danger[href]:focus,.badge-danger[href]:hover{background-color:#c9302c}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#eceeef;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-hr{border-top-color:#d0d5d8}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible .close{position:relative;top:-.75rem;right:-1.25rem;padding:.75rem 1.25rem;color:inherit}.alert-success{background-color:#dff0d8;border-color:#d0e9c6;color:#3c763d}.alert-success hr{border-top-color:#c1e2b3}.alert-success .alert-link{color:#2b542c}.alert-info{background-color:#d9edf7;border-color:#bcdff1;color:#31708f}.alert-info hr{border-top-color:#a6d5ec}.alert-info .alert-link{color:#245269}.alert-warning{background-color:#fcf8e3;border-color:#faf2cc;color:#8a6d3b}.alert-warning hr{border-top-color:#f7ecb5}.alert-warning .alert-link{color:#66512c}.alert-danger{background-color:#f2dede;border-color:#ebcccc;color:#a94442}.alert-danger hr{border-top-color:#e4b9b9}.alert-danger .alert-link{color:#843534}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@-o-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;font-size:.75rem;line-height:1rem;text-align:center;background-color:#eceeef;border-radius:.25rem}.progress-bar{height:1rem;color:#fff;background-color:#0275d8}.progress-bar-striped{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);-webkit-background-size:1rem 1rem;background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;-o-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}.media{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.media-body{-webkit-box-flex:1;-webkit-flex:1 1 0%;-ms-flex:1 1 0%;flex:1 1 0%}.list-group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0}.list-group-item-action{width:100%;color:#464a4c;text-align:inherit}.list-group-item-action .list-group-item-heading{color:#292b2c}.list-group-item-action:focus,.list-group-item-action:hover{color:#464a4c;text-decoration:none;background-color:#f7f7f9}.list-group-item-action:active{color:#292b2c;background-color:#eceeef}.list-group-item{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-right-radius:.25rem;border-top-left-radius:.25rem}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.list-group-item:focus,.list-group-item:hover{text-decoration:none}.list-group-item.disabled,.list-group-item:disabled{color:#636c72;cursor:not-allowed;background-color:#fff}.list-group-item.disabled .list-group-item-heading,.list-group-item:disabled .list-group-item-heading{color:inherit}.list-group-item.disabled .list-group-item-text,.list-group-item:disabled .list-group-item-text{color:#636c72}.list-group-item.active{z-index:2;color:#fff;background-color:#0275d8;border-color:#0275d8}.list-group-item.active .list-group-item-heading,.list-group-item.active .list-group-item-heading>.small,.list-group-item.active .list-group-item-heading>small{color:inherit}.list-group-item.active .list-group-item-text{color:#daeeff}.list-group-flush .list-group-item{border-right:0;border-left:0;border-radius:0}.list-group-flush:first-child .list-group-item:first-child{border-top:0}.list-group-flush:last-child .list-group-item:last-child{border-bottom:0}.list-group-item-success{color:#3c763d;background-color:#dff0d8}a.list-group-item-success,button.list-group-item-success{color:#3c763d}a.list-group-item-success .list-group-item-heading,button.list-group-item-success .list-group-item-heading{color:inherit}a.list-group-item-success:focus,a.list-group-item-success:hover,button.list-group-item-success:focus,button.list-group-item-success:hover{color:#3c763d;background-color:#d0e9c6}a.list-group-item-success.active,button.list-group-item-success.active{color:#fff;background-color:#3c763d;border-color:#3c763d}.list-group-item-info{color:#31708f;background-color:#d9edf7}a.list-group-item-info,button.list-group-item-info{color:#31708f}a.list-group-item-info .list-group-item-heading,button.list-group-item-info .list-group-item-heading{color:inherit}a.list-group-item-info:focus,a.list-group-item-info:hover,button.list-group-item-info:focus,button.list-group-item-info:hover{color:#31708f;background-color:#c4e3f3}a.list-group-item-info.active,button.list-group-item-info.active{color:#fff;background-color:#31708f;border-color:#31708f}.list-group-item-warning{color:#8a6d3b;background-color:#fcf8e3}a.list-group-item-warning,button.list-group-item-warning{color:#8a6d3b}a.list-group-item-warning .list-group-item-heading,button.list-group-item-warning .list-group-item-heading{color:inherit}a.list-group-item-warning:focus,a.list-group-item-warning:hover,button.list-group-item-warning:focus,button.list-group-item-warning:hover{color:#8a6d3b;background-color:#faf2cc}a.list-group-item-warning.active,button.list-group-item-warning.active{color:#fff;background-color:#8a6d3b;border-color:#8a6d3b}.list-group-item-danger{color:#a94442;background-color:#f2dede}a.list-group-item-danger,button.list-group-item-danger{color:#a94442}a.list-group-item-danger .list-group-item-heading,button.list-group-item-danger .list-group-item-heading{color:inherit}a.list-group-item-danger:focus,a.list-group-item-danger:hover,button.list-group-item-danger:focus,button.list-group-item-danger:hover{color:#a94442;background-color:#ebcccc}a.list-group-item-danger.active,button.list-group-item-danger.active{color:#fff;background-color:#a94442;border-color:#a94442}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.857143%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-4by3::before{padding-top:75%}.embed-responsive-1by1::before{padding-top:100%}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.75}button.close{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none}.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;outline:0}.modal.fade .modal-dialog{-webkit-transition:-webkit-transform .3s ease-out;transition:-webkit-transform .3s ease-out;-o-transition:-o-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out,-o-transform .3s ease-out;-webkit-transform:translate(0,-25%);-o-transform:translate(0,-25%);transform:translate(0,-25%)}.modal.show .modal-dialog{-webkit-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:15px;border-bottom:1px solid #eceeef}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding:15px}.modal-footer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:15px;border-top:1px solid #eceeef}.modal-footer>:not(:first-child){margin-left:.25rem}.modal-footer>:not(:last-child){margin-right:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:30px auto}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg{max-width:800px}}.tooltip{position:absolute;z-index:1070;display:block;font-family:-apple-system,system-ui,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip.bs-tether-element-attached-bottom,.tooltip.tooltip-top{padding:5px 0;margin-top:-3px}.tooltip.bs-tether-element-attached-bottom .tooltip-inner::before,.tooltip.tooltip-top .tooltip-inner::before{bottom:0;left:50%;margin-left:-5px;content:\"\";border-width:5px 5px 0;border-top-color:#000}.tooltip.bs-tether-element-attached-left,.tooltip.tooltip-right{padding:0 5px;margin-left:3px}.tooltip.bs-tether-element-attached-left .tooltip-inner::before,.tooltip.tooltip-right .tooltip-inner::before{top:50%;left:0;margin-top:-5px;content:\"\";border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.bs-tether-element-attached-top,.tooltip.tooltip-bottom{padding:5px 0;margin-top:3px}.tooltip.bs-tether-element-attached-top .tooltip-inner::before,.tooltip.tooltip-bottom .tooltip-inner::before{top:0;left:50%;margin-left:-5px;content:\"\";border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bs-tether-element-attached-right,.tooltip.tooltip-left{padding:0 5px;margin-left:-3px}.tooltip.bs-tether-element-attached-right .tooltip-inner::before,.tooltip.tooltip-left .tooltip-inner::before{top:50%;right:0;margin-top:-5px;content:\"\";border-width:5px 0 5px 5px;border-left-color:#000}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.tooltip-inner::before{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;padding:1px;font-family:-apple-system,system-ui,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;font-size:.875rem;word-wrap:break-word;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover.bs-tether-element-attached-bottom,.popover.popover-top{margin-top:-10px}.popover.bs-tether-element-attached-bottom::after,.popover.bs-tether-element-attached-bottom::before,.popover.popover-top::after,.popover.popover-top::before{left:50%;border-bottom-width:0}.popover.bs-tether-element-attached-bottom::before,.popover.popover-top::before{bottom:-11px;margin-left:-11px;border-top-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-bottom::after,.popover.popover-top::after{bottom:-10px;margin-left:-10px;border-top-color:#fff}.popover.bs-tether-element-attached-left,.popover.popover-right{margin-left:10px}.popover.bs-tether-element-attached-left::after,.popover.bs-tether-element-attached-left::before,.popover.popover-right::after,.popover.popover-right::before{top:50%;border-left-width:0}.popover.bs-tether-element-attached-left::before,.popover.popover-right::before{left:-11px;margin-top:-11px;border-right-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-left::after,.popover.popover-right::after{left:-10px;margin-top:-10px;border-right-color:#fff}.popover.bs-tether-element-attached-top,.popover.popover-bottom{margin-top:10px}.popover.bs-tether-element-attached-top::after,.popover.bs-tether-element-attached-top::before,.popover.popover-bottom::after,.popover.popover-bottom::before{left:50%;border-top-width:0}.popover.bs-tether-element-attached-top::before,.popover.popover-bottom::before{top:-11px;margin-left:-11px;border-bottom-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-top::after,.popover.popover-bottom::after{top:-10px;margin-left:-10px;border-bottom-color:#f7f7f7}.popover.bs-tether-element-attached-top .popover-title::before,.popover.popover-bottom .popover-title::before{position:absolute;top:0;left:50%;display:block;width:20px;margin-left:-10px;content:\"\";border-bottom:1px solid #f7f7f7}.popover.bs-tether-element-attached-right,.popover.popover-left{margin-left:-10px}.popover.bs-tether-element-attached-right::after,.popover.bs-tether-element-attached-right::before,.popover.popover-left::after,.popover.popover-left::before{top:50%;border-right-width:0}.popover.bs-tether-element-attached-right::before,.popover.popover-left::before{right:-11px;margin-top:-11px;border-left-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-right::after,.popover.popover-left::after{right:-10px;margin-top:-10px;border-left-color:#fff}.popover-title{padding:8px 14px;margin-bottom:0;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-right-radius:calc(.3rem - 1px);border-top-left-radius:calc(.3rem - 1px)}.popover-title:empty{display:none}.popover-content{padding:9px 14px}.popover::after,.popover::before{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover::before{content:\"\";border-width:11px}.popover::after{content:\"\";border-width:10px}.carousel{position:relative}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-item{position:relative;display:none;width:100%}@media (-webkit-transform-3d){.carousel-item{-webkit-transition:-webkit-transform .6s ease-in-out;transition:-webkit-transform .6s ease-in-out;-o-transition:-o-transform .6s ease-in-out;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out,-webkit-transform .6s ease-in-out,-o-transform .6s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px}}@supports ((-webkit-transform:translate3d(0,0,0)) or (transform:translate3d(0,0,0))){.carousel-item{-webkit-transition:-webkit-transform .6s ease-in-out;transition:-webkit-transform .6s ease-in-out;-o-transition:-o-transform .6s ease-in-out;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out,-webkit-transform .6s ease-in-out,-o-transform .6s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.carousel-item-next,.carousel-item-prev{position:absolute;top:0}@media (-webkit-transform-3d){.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.active.carousel-item-right,.carousel-item-next{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.active.carousel-item-left,.carousel-item-prev{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@supports ((-webkit-transform:translate3d(0,0,0)) or (transform:translate3d(0,0,0))){.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.active.carousel-item-right,.carousel-item-next{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.active.carousel-item-left,.carousel-item-prev{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:transparent no-repeat center center;-webkit-background-size:100% 100%;background-size:100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\")}.carousel-indicators{position:absolute;right:0;bottom:10px;left:0;z-index:15;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{position:relative;-webkit-box-flex:1;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;max-width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:rgba(255,255,255,.5)}.carousel-indicators li::before{position:absolute;top:-10px;left:0;display:inline-block;width:100%;height:10px;content:\"\"}.carousel-indicators li::after{position:absolute;bottom:-10px;left:0;display:inline-block;width:100%;height:10px;content:\"\"}.carousel-indicators .active{background-color:#fff}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-faded{background-color:#f7f7f7}.bg-primary{background-color:#0275d8!important}a.bg-primary:focus,a.bg-primary:hover{background-color:#025aa5!important}.bg-success{background-color:#5cb85c!important}a.bg-success:focus,a.bg-success:hover{background-color:#449d44!important}.bg-info{background-color:#5bc0de!important}a.bg-info:focus,a.bg-info:hover{background-color:#31b0d5!important}.bg-warning{background-color:#f0ad4e!important}a.bg-warning:focus,a.bg-warning:hover{background-color:#ec971f!important}.bg-danger{background-color:#d9534f!important}a.bg-danger:focus,a.bg-danger:hover{background-color:#c9302c!important}.bg-inverse{background-color:#292b2c!important}a.bg-inverse:focus,a.bg-inverse:hover{background-color:#101112!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.rounded{border-radius:.25rem}.rounded-top{border-top-right-radius:.25rem;border-top-left-radius:.25rem}.rounded-right{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.rounded-bottom{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-left{border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.rounded-circle{border-radius:50%}.rounded-0{border-radius:0}.clearfix::after{display:block;content:\"\";clear:both}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-cell{display:table-cell!important}.d-flex{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important}.d-inline-flex{display:-webkit-inline-box!important;display:-webkit-inline-flex!important;display:-ms-inline-flexbox!important;display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important}.d-sm-inline-flex{display:-webkit-inline-box!important;display:-webkit-inline-flex!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important}.d-md-inline-flex{display:-webkit-inline-box!important;display:-webkit-inline-flex!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important}.d-lg-inline-flex{display:-webkit-inline-box!important;display:-webkit-inline-flex!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important}.d-xl-inline-flex{display:-webkit-inline-box!important;display:-webkit-inline-flex!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}.flex-first{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}.flex-last{-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1}.flex-unordered{-webkit-box-ordinal-group:1;-webkit-order:0;-ms-flex-order:0;order:0}.flex-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-webkit-flex-direction:row!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:row-reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:column-reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-wrap{-webkit-flex-wrap:wrap!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-nowrap{-webkit-flex-wrap:nowrap!important;-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-wrap-reverse{-webkit-flex-wrap:wrap-reverse!important;-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-start{-webkit-box-pack:start!important;-webkit-justify-content:flex-start!important;-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-end{-webkit-box-pack:end!important;-webkit-justify-content:flex-end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-center{-webkit-box-pack:center!important;-webkit-justify-content:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-between{-webkit-box-pack:justify!important;-webkit-justify-content:space-between!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-around{-webkit-justify-content:space-around!important;-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-start{-webkit-box-align:start!important;-webkit-align-items:flex-start!important;-ms-flex-align:start!important;align-items:flex-start!important}.align-items-end{-webkit-box-align:end!important;-webkit-align-items:flex-end!important;-ms-flex-align:end!important;align-items:flex-end!important}.align-items-center{-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important}.align-items-baseline{-webkit-box-align:baseline!important;-webkit-align-items:baseline!important;-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-stretch{-webkit-box-align:stretch!important;-webkit-align-items:stretch!important;-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-start{-webkit-align-content:flex-start!important;-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-end{-webkit-align-content:flex-end!important;-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-center{-webkit-align-content:center!important;-ms-flex-line-pack:center!important;align-content:center!important}.align-content-between{-webkit-align-content:space-between!important;-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-around{-webkit-align-content:space-around!important;-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-stretch{-webkit-align-content:stretch!important;-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-auto{-webkit-align-self:auto!important;-ms-flex-item-align:auto!important;-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-start{-webkit-align-self:flex-start!important;-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-end{-webkit-align-self:flex-end!important;-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-center{-webkit-align-self:center!important;-ms-flex-item-align:center!important;-ms-grid-row-align:center!important;align-self:center!important}.align-self-baseline{-webkit-align-self:baseline!important;-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-stretch{-webkit-align-self:stretch!important;-ms-flex-item-align:stretch!important;-ms-grid-row-align:stretch!important;align-self:stretch!important}@media (min-width:576px){.flex-sm-first{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}.flex-sm-last{-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1}.flex-sm-unordered{-webkit-box-ordinal-group:1;-webkit-order:0;-ms-flex-order:0;order:0}.flex-sm-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-webkit-flex-direction:row!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-sm-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-sm-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:row-reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-sm-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:column-reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-sm-wrap{-webkit-flex-wrap:wrap!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-sm-nowrap{-webkit-flex-wrap:nowrap!important;-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-sm-wrap-reverse{-webkit-flex-wrap:wrap-reverse!important;-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-sm-start{-webkit-box-pack:start!important;-webkit-justify-content:flex-start!important;-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-sm-end{-webkit-box-pack:end!important;-webkit-justify-content:flex-end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-sm-center{-webkit-box-pack:center!important;-webkit-justify-content:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-sm-between{-webkit-box-pack:justify!important;-webkit-justify-content:space-between!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-sm-around{-webkit-justify-content:space-around!important;-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-sm-start{-webkit-box-align:start!important;-webkit-align-items:flex-start!important;-ms-flex-align:start!important;align-items:flex-start!important}.align-items-sm-end{-webkit-box-align:end!important;-webkit-align-items:flex-end!important;-ms-flex-align:end!important;align-items:flex-end!important}.align-items-sm-center{-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important}.align-items-sm-baseline{-webkit-box-align:baseline!important;-webkit-align-items:baseline!important;-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-sm-stretch{-webkit-box-align:stretch!important;-webkit-align-items:stretch!important;-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-sm-start{-webkit-align-content:flex-start!important;-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-sm-end{-webkit-align-content:flex-end!important;-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-sm-center{-webkit-align-content:center!important;-ms-flex-line-pack:center!important;align-content:center!important}.align-content-sm-between{-webkit-align-content:space-between!important;-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-sm-around{-webkit-align-content:space-around!important;-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-sm-stretch{-webkit-align-content:stretch!important;-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-sm-auto{-webkit-align-self:auto!important;-ms-flex-item-align:auto!important;-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-sm-start{-webkit-align-self:flex-start!important;-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-sm-end{-webkit-align-self:flex-end!important;-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-sm-center{-webkit-align-self:center!important;-ms-flex-item-align:center!important;-ms-grid-row-align:center!important;align-self:center!important}.align-self-sm-baseline{-webkit-align-self:baseline!important;-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-sm-stretch{-webkit-align-self:stretch!important;-ms-flex-item-align:stretch!important;-ms-grid-row-align:stretch!important;align-self:stretch!important}}@media (min-width:768px){.flex-md-first{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}.flex-md-last{-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1}.flex-md-unordered{-webkit-box-ordinal-group:1;-webkit-order:0;-ms-flex-order:0;order:0}.flex-md-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-webkit-flex-direction:row!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-md-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-md-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:row-reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-md-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:column-reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-md-wrap{-webkit-flex-wrap:wrap!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-md-nowrap{-webkit-flex-wrap:nowrap!important;-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-md-wrap-reverse{-webkit-flex-wrap:wrap-reverse!important;-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-md-start{-webkit-box-pack:start!important;-webkit-justify-content:flex-start!important;-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-md-end{-webkit-box-pack:end!important;-webkit-justify-content:flex-end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-md-center{-webkit-box-pack:center!important;-webkit-justify-content:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-md-between{-webkit-box-pack:justify!important;-webkit-justify-content:space-between!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-md-around{-webkit-justify-content:space-around!important;-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-md-start{-webkit-box-align:start!important;-webkit-align-items:flex-start!important;-ms-flex-align:start!important;align-items:flex-start!important}.align-items-md-end{-webkit-box-align:end!important;-webkit-align-items:flex-end!important;-ms-flex-align:end!important;align-items:flex-end!important}.align-items-md-center{-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important}.align-items-md-baseline{-webkit-box-align:baseline!important;-webkit-align-items:baseline!important;-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-md-stretch{-webkit-box-align:stretch!important;-webkit-align-items:stretch!important;-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-md-start{-webkit-align-content:flex-start!important;-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-md-end{-webkit-align-content:flex-end!important;-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-md-center{-webkit-align-content:center!important;-ms-flex-line-pack:center!important;align-content:center!important}.align-content-md-between{-webkit-align-content:space-between!important;-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-md-around{-webkit-align-content:space-around!important;-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-md-stretch{-webkit-align-content:stretch!important;-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-md-auto{-webkit-align-self:auto!important;-ms-flex-item-align:auto!important;-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-md-start{-webkit-align-self:flex-start!important;-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-md-end{-webkit-align-self:flex-end!important;-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-md-center{-webkit-align-self:center!important;-ms-flex-item-align:center!important;-ms-grid-row-align:center!important;align-self:center!important}.align-self-md-baseline{-webkit-align-self:baseline!important;-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-md-stretch{-webkit-align-self:stretch!important;-ms-flex-item-align:stretch!important;-ms-grid-row-align:stretch!important;align-self:stretch!important}}@media (min-width:992px){.flex-lg-first{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}.flex-lg-last{-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1}.flex-lg-unordered{-webkit-box-ordinal-group:1;-webkit-order:0;-ms-flex-order:0;order:0}.flex-lg-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-webkit-flex-direction:row!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-lg-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-lg-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:row-reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-lg-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:column-reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-lg-wrap{-webkit-flex-wrap:wrap!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-lg-nowrap{-webkit-flex-wrap:nowrap!important;-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-lg-wrap-reverse{-webkit-flex-wrap:wrap-reverse!important;-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-lg-start{-webkit-box-pack:start!important;-webkit-justify-content:flex-start!important;-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-lg-end{-webkit-box-pack:end!important;-webkit-justify-content:flex-end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-lg-center{-webkit-box-pack:center!important;-webkit-justify-content:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-lg-between{-webkit-box-pack:justify!important;-webkit-justify-content:space-between!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-lg-around{-webkit-justify-content:space-around!important;-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-lg-start{-webkit-box-align:start!important;-webkit-align-items:flex-start!important;-ms-flex-align:start!important;align-items:flex-start!important}.align-items-lg-end{-webkit-box-align:end!important;-webkit-align-items:flex-end!important;-ms-flex-align:end!important;align-items:flex-end!important}.align-items-lg-center{-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important}.align-items-lg-baseline{-webkit-box-align:baseline!important;-webkit-align-items:baseline!important;-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-lg-stretch{-webkit-box-align:stretch!important;-webkit-align-items:stretch!important;-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-lg-start{-webkit-align-content:flex-start!important;-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-lg-end{-webkit-align-content:flex-end!important;-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-lg-center{-webkit-align-content:center!important;-ms-flex-line-pack:center!important;align-content:center!important}.align-content-lg-between{-webkit-align-content:space-between!important;-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-lg-around{-webkit-align-content:space-around!important;-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-lg-stretch{-webkit-align-content:stretch!important;-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-lg-auto{-webkit-align-self:auto!important;-ms-flex-item-align:auto!important;-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-lg-start{-webkit-align-self:flex-start!important;-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-lg-end{-webkit-align-self:flex-end!important;-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-lg-center{-webkit-align-self:center!important;-ms-flex-item-align:center!important;-ms-grid-row-align:center!important;align-self:center!important}.align-self-lg-baseline{-webkit-align-self:baseline!important;-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-lg-stretch{-webkit-align-self:stretch!important;-ms-flex-item-align:stretch!important;-ms-grid-row-align:stretch!important;align-self:stretch!important}}@media (min-width:1200px){.flex-xl-first{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}.flex-xl-last{-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1}.flex-xl-unordered{-webkit-box-ordinal-group:1;-webkit-order:0;-ms-flex-order:0;order:0}.flex-xl-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-webkit-flex-direction:row!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-xl-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-xl-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:row-reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-xl-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:column-reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-xl-wrap{-webkit-flex-wrap:wrap!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-xl-nowrap{-webkit-flex-wrap:nowrap!important;-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-xl-wrap-reverse{-webkit-flex-wrap:wrap-reverse!important;-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-xl-start{-webkit-box-pack:start!important;-webkit-justify-content:flex-start!important;-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-xl-end{-webkit-box-pack:end!important;-webkit-justify-content:flex-end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-xl-center{-webkit-box-pack:center!important;-webkit-justify-content:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-xl-between{-webkit-box-pack:justify!important;-webkit-justify-content:space-between!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-xl-around{-webkit-justify-content:space-around!important;-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-xl-start{-webkit-box-align:start!important;-webkit-align-items:flex-start!important;-ms-flex-align:start!important;align-items:flex-start!important}.align-items-xl-end{-webkit-box-align:end!important;-webkit-align-items:flex-end!important;-ms-flex-align:end!important;align-items:flex-end!important}.align-items-xl-center{-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important}.align-items-xl-baseline{-webkit-box-align:baseline!important;-webkit-align-items:baseline!important;-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-xl-stretch{-webkit-box-align:stretch!important;-webkit-align-items:stretch!important;-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-xl-start{-webkit-align-content:flex-start!important;-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-xl-end{-webkit-align-content:flex-end!important;-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-xl-center{-webkit-align-content:center!important;-ms-flex-line-pack:center!important;align-content:center!important}.align-content-xl-between{-webkit-align-content:space-between!important;-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-xl-around{-webkit-align-content:space-around!important;-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-xl-stretch{-webkit-align-content:stretch!important;-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-xl-auto{-webkit-align-self:auto!important;-ms-flex-item-align:auto!important;-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-xl-start{-webkit-align-self:flex-start!important;-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-xl-end{-webkit-align-self:flex-end!important;-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-xl-center{-webkit-align-self:center!important;-ms-flex-item-align:center!important;-ms-grid-row-align:center!important;align-self:center!important}.align-self-xl-baseline{-webkit-align-self:baseline!important;-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-xl-stretch{-webkit-align-self:stretch!important;-ms-flex-item-align:stretch!important;-ms-grid-row-align:stretch!important;align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1030}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.m-0{margin:0 0!important}.mt-0{margin-top:0!important}.mr-0{margin-right:0!important}.mb-0{margin-bottom:0!important}.ml-0{margin-left:0!important}.mx-0{margin-right:0!important;margin-left:0!important}.my-0{margin-top:0!important;margin-bottom:0!important}.m-1{margin:.25rem .25rem!important}.mt-1{margin-top:.25rem!important}.mr-1{margin-right:.25rem!important}.mb-1{margin-bottom:.25rem!important}.ml-1{margin-left:.25rem!important}.mx-1{margin-right:.25rem!important;margin-left:.25rem!important}.my-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.m-2{margin:.5rem .5rem!important}.mt-2{margin-top:.5rem!important}.mr-2{margin-right:.5rem!important}.mb-2{margin-bottom:.5rem!important}.ml-2{margin-left:.5rem!important}.mx-2{margin-right:.5rem!important;margin-left:.5rem!important}.my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.m-3{margin:1rem 1rem!important}.mt-3{margin-top:1rem!important}.mr-3{margin-right:1rem!important}.mb-3{margin-bottom:1rem!important}.ml-3{margin-left:1rem!important}.mx-3{margin-right:1rem!important;margin-left:1rem!important}.my-3{margin-top:1rem!important;margin-bottom:1rem!important}.m-4{margin:1.5rem 1.5rem!important}.mt-4{margin-top:1.5rem!important}.mr-4{margin-right:1.5rem!important}.mb-4{margin-bottom:1.5rem!important}.ml-4{margin-left:1.5rem!important}.mx-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.my-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.m-5{margin:3rem 3rem!important}.mt-5{margin-top:3rem!important}.mr-5{margin-right:3rem!important}.mb-5{margin-bottom:3rem!important}.ml-5{margin-left:3rem!important}.mx-5{margin-right:3rem!important;margin-left:3rem!important}.my-5{margin-top:3rem!important;margin-bottom:3rem!important}.p-0{padding:0 0!important}.pt-0{padding-top:0!important}.pr-0{padding-right:0!important}.pb-0{padding-bottom:0!important}.pl-0{padding-left:0!important}.px-0{padding-right:0!important;padding-left:0!important}.py-0{padding-top:0!important;padding-bottom:0!important}.p-1{padding:.25rem .25rem!important}.pt-1{padding-top:.25rem!important}.pr-1{padding-right:.25rem!important}.pb-1{padding-bottom:.25rem!important}.pl-1{padding-left:.25rem!important}.px-1{padding-right:.25rem!important;padding-left:.25rem!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.p-2{padding:.5rem .5rem!important}.pt-2{padding-top:.5rem!important}.pr-2{padding-right:.5rem!important}.pb-2{padding-bottom:.5rem!important}.pl-2{padding-left:.5rem!important}.px-2{padding-right:.5rem!important;padding-left:.5rem!important}.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.p-3{padding:1rem 1rem!important}.pt-3{padding-top:1rem!important}.pr-3{padding-right:1rem!important}.pb-3{padding-bottom:1rem!important}.pl-3{padding-left:1rem!important}.px-3{padding-right:1rem!important;padding-left:1rem!important}.py-3{padding-top:1rem!important;padding-bottom:1rem!important}.p-4{padding:1.5rem 1.5rem!important}.pt-4{padding-top:1.5rem!important}.pr-4{padding-right:1.5rem!important}.pb-4{padding-bottom:1.5rem!important}.pl-4{padding-left:1.5rem!important}.px-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.p-5{padding:3rem 3rem!important}.pt-5{padding-top:3rem!important}.pr-5{padding-right:3rem!important}.pb-5{padding-bottom:3rem!important}.pl-5{padding-left:3rem!important}.px-5{padding-right:3rem!important;padding-left:3rem!important}.py-5{padding-top:3rem!important;padding-bottom:3rem!important}.m-auto{margin:auto!important}.mt-auto{margin-top:auto!important}.mr-auto{margin-right:auto!important}.mb-auto{margin-bottom:auto!important}.ml-auto{margin-left:auto!important}.mx-auto{margin-right:auto!important;margin-left:auto!important}.my-auto{margin-top:auto!important;margin-bottom:auto!important}@media (min-width:576px){.m-sm-0{margin:0 0!important}.mt-sm-0{margin-top:0!important}.mr-sm-0{margin-right:0!important}.mb-sm-0{margin-bottom:0!important}.ml-sm-0{margin-left:0!important}.mx-sm-0{margin-right:0!important;margin-left:0!important}.my-sm-0{margin-top:0!important;margin-bottom:0!important}.m-sm-1{margin:.25rem .25rem!important}.mt-sm-1{margin-top:.25rem!important}.mr-sm-1{margin-right:.25rem!important}.mb-sm-1{margin-bottom:.25rem!important}.ml-sm-1{margin-left:.25rem!important}.mx-sm-1{margin-right:.25rem!important;margin-left:.25rem!important}.my-sm-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.m-sm-2{margin:.5rem .5rem!important}.mt-sm-2{margin-top:.5rem!important}.mr-sm-2{margin-right:.5rem!important}.mb-sm-2{margin-bottom:.5rem!important}.ml-sm-2{margin-left:.5rem!important}.mx-sm-2{margin-right:.5rem!important;margin-left:.5rem!important}.my-sm-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.m-sm-3{margin:1rem 1rem!important}.mt-sm-3{margin-top:1rem!important}.mr-sm-3{margin-right:1rem!important}.mb-sm-3{margin-bottom:1rem!important}.ml-sm-3{margin-left:1rem!important}.mx-sm-3{margin-right:1rem!important;margin-left:1rem!important}.my-sm-3{margin-top:1rem!important;margin-bottom:1rem!important}.m-sm-4{margin:1.5rem 1.5rem!important}.mt-sm-4{margin-top:1.5rem!important}.mr-sm-4{margin-right:1.5rem!important}.mb-sm-4{margin-bottom:1.5rem!important}.ml-sm-4{margin-left:1.5rem!important}.mx-sm-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.my-sm-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.m-sm-5{margin:3rem 3rem!important}.mt-sm-5{margin-top:3rem!important}.mr-sm-5{margin-right:3rem!important}.mb-sm-5{margin-bottom:3rem!important}.ml-sm-5{margin-left:3rem!important}.mx-sm-5{margin-right:3rem!important;margin-left:3rem!important}.my-sm-5{margin-top:3rem!important;margin-bottom:3rem!important}.p-sm-0{padding:0 0!important}.pt-sm-0{padding-top:0!important}.pr-sm-0{padding-right:0!important}.pb-sm-0{padding-bottom:0!important}.pl-sm-0{padding-left:0!important}.px-sm-0{padding-right:0!important;padding-left:0!important}.py-sm-0{padding-top:0!important;padding-bottom:0!important}.p-sm-1{padding:.25rem .25rem!important}.pt-sm-1{padding-top:.25rem!important}.pr-sm-1{padding-right:.25rem!important}.pb-sm-1{padding-bottom:.25rem!important}.pl-sm-1{padding-left:.25rem!important}.px-sm-1{padding-right:.25rem!important;padding-left:.25rem!important}.py-sm-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.p-sm-2{padding:.5rem .5rem!important}.pt-sm-2{padding-top:.5rem!important}.pr-sm-2{padding-right:.5rem!important}.pb-sm-2{padding-bottom:.5rem!important}.pl-sm-2{padding-left:.5rem!important}.px-sm-2{padding-right:.5rem!important;padding-left:.5rem!important}.py-sm-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.p-sm-3{padding:1rem 1rem!important}.pt-sm-3{padding-top:1rem!important}.pr-sm-3{padding-right:1rem!important}.pb-sm-3{padding-bottom:1rem!important}.pl-sm-3{padding-left:1rem!important}.px-sm-3{padding-right:1rem!important;padding-left:1rem!important}.py-sm-3{padding-top:1rem!important;padding-bottom:1rem!important}.p-sm-4{padding:1.5rem 1.5rem!important}.pt-sm-4{padding-top:1.5rem!important}.pr-sm-4{padding-right:1.5rem!important}.pb-sm-4{padding-bottom:1.5rem!important}.pl-sm-4{padding-left:1.5rem!important}.px-sm-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.py-sm-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.p-sm-5{padding:3rem 3rem!important}.pt-sm-5{padding-top:3rem!important}.pr-sm-5{padding-right:3rem!important}.pb-sm-5{padding-bottom:3rem!important}.pl-sm-5{padding-left:3rem!important}.px-sm-5{padding-right:3rem!important;padding-left:3rem!important}.py-sm-5{padding-top:3rem!important;padding-bottom:3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto{margin-top:auto!important}.mr-sm-auto{margin-right:auto!important}.mb-sm-auto{margin-bottom:auto!important}.ml-sm-auto{margin-left:auto!important}.mx-sm-auto{margin-right:auto!important;margin-left:auto!important}.my-sm-auto{margin-top:auto!important;margin-bottom:auto!important}}@media (min-width:768px){.m-md-0{margin:0 0!important}.mt-md-0{margin-top:0!important}.mr-md-0{margin-right:0!important}.mb-md-0{margin-bottom:0!important}.ml-md-0{margin-left:0!important}.mx-md-0{margin-right:0!important;margin-left:0!important}.my-md-0{margin-top:0!important;margin-bottom:0!important}.m-md-1{margin:.25rem .25rem!important}.mt-md-1{margin-top:.25rem!important}.mr-md-1{margin-right:.25rem!important}.mb-md-1{margin-bottom:.25rem!important}.ml-md-1{margin-left:.25rem!important}.mx-md-1{margin-right:.25rem!important;margin-left:.25rem!important}.my-md-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.m-md-2{margin:.5rem .5rem!important}.mt-md-2{margin-top:.5rem!important}.mr-md-2{margin-right:.5rem!important}.mb-md-2{margin-bottom:.5rem!important}.ml-md-2{margin-left:.5rem!important}.mx-md-2{margin-right:.5rem!important;margin-left:.5rem!important}.my-md-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.m-md-3{margin:1rem 1rem!important}.mt-md-3{margin-top:1rem!important}.mr-md-3{margin-right:1rem!important}.mb-md-3{margin-bottom:1rem!important}.ml-md-3{margin-left:1rem!important}.mx-md-3{margin-right:1rem!important;margin-left:1rem!important}.my-md-3{margin-top:1rem!important;margin-bottom:1rem!important}.m-md-4{margin:1.5rem 1.5rem!important}.mt-md-4{margin-top:1.5rem!important}.mr-md-4{margin-right:1.5rem!important}.mb-md-4{margin-bottom:1.5rem!important}.ml-md-4{margin-left:1.5rem!important}.mx-md-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.my-md-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.m-md-5{margin:3rem 3rem!important}.mt-md-5{margin-top:3rem!important}.mr-md-5{margin-right:3rem!important}.mb-md-5{margin-bottom:3rem!important}.ml-md-5{margin-left:3rem!important}.mx-md-5{margin-right:3rem!important;margin-left:3rem!important}.my-md-5{margin-top:3rem!important;margin-bottom:3rem!important}.p-md-0{padding:0 0!important}.pt-md-0{padding-top:0!important}.pr-md-0{padding-right:0!important}.pb-md-0{padding-bottom:0!important}.pl-md-0{padding-left:0!important}.px-md-0{padding-right:0!important;padding-left:0!important}.py-md-0{padding-top:0!important;padding-bottom:0!important}.p-md-1{padding:.25rem .25rem!important}.pt-md-1{padding-top:.25rem!important}.pr-md-1{padding-right:.25rem!important}.pb-md-1{padding-bottom:.25rem!important}.pl-md-1{padding-left:.25rem!important}.px-md-1{padding-right:.25rem!important;padding-left:.25rem!important}.py-md-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.p-md-2{padding:.5rem .5rem!important}.pt-md-2{padding-top:.5rem!important}.pr-md-2{padding-right:.5rem!important}.pb-md-2{padding-bottom:.5rem!important}.pl-md-2{padding-left:.5rem!important}.px-md-2{padding-right:.5rem!important;padding-left:.5rem!important}.py-md-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.p-md-3{padding:1rem 1rem!important}.pt-md-3{padding-top:1rem!important}.pr-md-3{padding-right:1rem!important}.pb-md-3{padding-bottom:1rem!important}.pl-md-3{padding-left:1rem!important}.px-md-3{padding-right:1rem!important;padding-left:1rem!important}.py-md-3{padding-top:1rem!important;padding-bottom:1rem!important}.p-md-4{padding:1.5rem 1.5rem!important}.pt-md-4{padding-top:1.5rem!important}.pr-md-4{padding-right:1.5rem!important}.pb-md-4{padding-bottom:1.5rem!important}.pl-md-4{padding-left:1.5rem!important}.px-md-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.py-md-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.p-md-5{padding:3rem 3rem!important}.pt-md-5{padding-top:3rem!important}.pr-md-5{padding-right:3rem!important}.pb-md-5{padding-bottom:3rem!important}.pl-md-5{padding-left:3rem!important}.px-md-5{padding-right:3rem!important;padding-left:3rem!important}.py-md-5{padding-top:3rem!important;padding-bottom:3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto{margin-top:auto!important}.mr-md-auto{margin-right:auto!important}.mb-md-auto{margin-bottom:auto!important}.ml-md-auto{margin-left:auto!important}.mx-md-auto{margin-right:auto!important;margin-left:auto!important}.my-md-auto{margin-top:auto!important;margin-bottom:auto!important}}@media (min-width:992px){.m-lg-0{margin:0 0!important}.mt-lg-0{margin-top:0!important}.mr-lg-0{margin-right:0!important}.mb-lg-0{margin-bottom:0!important}.ml-lg-0{margin-left:0!important}.mx-lg-0{margin-right:0!important;margin-left:0!important}.my-lg-0{margin-top:0!important;margin-bottom:0!important}.m-lg-1{margin:.25rem .25rem!important}.mt-lg-1{margin-top:.25rem!important}.mr-lg-1{margin-right:.25rem!important}.mb-lg-1{margin-bottom:.25rem!important}.ml-lg-1{margin-left:.25rem!important}.mx-lg-1{margin-right:.25rem!important;margin-left:.25rem!important}.my-lg-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.m-lg-2{margin:.5rem .5rem!important}.mt-lg-2{margin-top:.5rem!important}.mr-lg-2{margin-right:.5rem!important}.mb-lg-2{margin-bottom:.5rem!important}.ml-lg-2{margin-left:.5rem!important}.mx-lg-2{margin-right:.5rem!important;margin-left:.5rem!important}.my-lg-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.m-lg-3{margin:1rem 1rem!important}.mt-lg-3{margin-top:1rem!important}.mr-lg-3{margin-right:1rem!important}.mb-lg-3{margin-bottom:1rem!important}.ml-lg-3{margin-left:1rem!important}.mx-lg-3{margin-right:1rem!important;margin-left:1rem!important}.my-lg-3{margin-top:1rem!important;margin-bottom:1rem!important}.m-lg-4{margin:1.5rem 1.5rem!important}.mt-lg-4{margin-top:1.5rem!important}.mr-lg-4{margin-right:1.5rem!important}.mb-lg-4{margin-bottom:1.5rem!important}.ml-lg-4{margin-left:1.5rem!important}.mx-lg-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.my-lg-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.m-lg-5{margin:3rem 3rem!important}.mt-lg-5{margin-top:3rem!important}.mr-lg-5{margin-right:3rem!important}.mb-lg-5{margin-bottom:3rem!important}.ml-lg-5{margin-left:3rem!important}.mx-lg-5{margin-right:3rem!important;margin-left:3rem!important}.my-lg-5{margin-top:3rem!important;margin-bottom:3rem!important}.p-lg-0{padding:0 0!important}.pt-lg-0{padding-top:0!important}.pr-lg-0{padding-right:0!important}.pb-lg-0{padding-bottom:0!important}.pl-lg-0{padding-left:0!important}.px-lg-0{padding-right:0!important;padding-left:0!important}.py-lg-0{padding-top:0!important;padding-bottom:0!important}.p-lg-1{padding:.25rem .25rem!important}.pt-lg-1{padding-top:.25rem!important}.pr-lg-1{padding-right:.25rem!important}.pb-lg-1{padding-bottom:.25rem!important}.pl-lg-1{padding-left:.25rem!important}.px-lg-1{padding-right:.25rem!important;padding-left:.25rem!important}.py-lg-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.p-lg-2{padding:.5rem .5rem!important}.pt-lg-2{padding-top:.5rem!important}.pr-lg-2{padding-right:.5rem!important}.pb-lg-2{padding-bottom:.5rem!important}.pl-lg-2{padding-left:.5rem!important}.px-lg-2{padding-right:.5rem!important;padding-left:.5rem!important}.py-lg-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.p-lg-3{padding:1rem 1rem!important}.pt-lg-3{padding-top:1rem!important}.pr-lg-3{padding-right:1rem!important}.pb-lg-3{padding-bottom:1rem!important}.pl-lg-3{padding-left:1rem!important}.px-lg-3{padding-right:1rem!important;padding-left:1rem!important}.py-lg-3{padding-top:1rem!important;padding-bottom:1rem!important}.p-lg-4{padding:1.5rem 1.5rem!important}.pt-lg-4{padding-top:1.5rem!important}.pr-lg-4{padding-right:1.5rem!important}.pb-lg-4{padding-bottom:1.5rem!important}.pl-lg-4{padding-left:1.5rem!important}.px-lg-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.py-lg-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.p-lg-5{padding:3rem 3rem!important}.pt-lg-5{padding-top:3rem!important}.pr-lg-5{padding-right:3rem!important}.pb-lg-5{padding-bottom:3rem!important}.pl-lg-5{padding-left:3rem!important}.px-lg-5{padding-right:3rem!important;padding-left:3rem!important}.py-lg-5{padding-top:3rem!important;padding-bottom:3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto{margin-top:auto!important}.mr-lg-auto{margin-right:auto!important}.mb-lg-auto{margin-bottom:auto!important}.ml-lg-auto{margin-left:auto!important}.mx-lg-auto{margin-right:auto!important;margin-left:auto!important}.my-lg-auto{margin-top:auto!important;margin-bottom:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0 0!important}.mt-xl-0{margin-top:0!important}.mr-xl-0{margin-right:0!important}.mb-xl-0{margin-bottom:0!important}.ml-xl-0{margin-left:0!important}.mx-xl-0{margin-right:0!important;margin-left:0!important}.my-xl-0{margin-top:0!important;margin-bottom:0!important}.m-xl-1{margin:.25rem .25rem!important}.mt-xl-1{margin-top:.25rem!important}.mr-xl-1{margin-right:.25rem!important}.mb-xl-1{margin-bottom:.25rem!important}.ml-xl-1{margin-left:.25rem!important}.mx-xl-1{margin-right:.25rem!important;margin-left:.25rem!important}.my-xl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.m-xl-2{margin:.5rem .5rem!important}.mt-xl-2{margin-top:.5rem!important}.mr-xl-2{margin-right:.5rem!important}.mb-xl-2{margin-bottom:.5rem!important}.ml-xl-2{margin-left:.5rem!important}.mx-xl-2{margin-right:.5rem!important;margin-left:.5rem!important}.my-xl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.m-xl-3{margin:1rem 1rem!important}.mt-xl-3{margin-top:1rem!important}.mr-xl-3{margin-right:1rem!important}.mb-xl-3{margin-bottom:1rem!important}.ml-xl-3{margin-left:1rem!important}.mx-xl-3{margin-right:1rem!important;margin-left:1rem!important}.my-xl-3{margin-top:1rem!important;margin-bottom:1rem!important}.m-xl-4{margin:1.5rem 1.5rem!important}.mt-xl-4{margin-top:1.5rem!important}.mr-xl-4{margin-right:1.5rem!important}.mb-xl-4{margin-bottom:1.5rem!important}.ml-xl-4{margin-left:1.5rem!important}.mx-xl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.my-xl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.m-xl-5{margin:3rem 3rem!important}.mt-xl-5{margin-top:3rem!important}.mr-xl-5{margin-right:3rem!important}.mb-xl-5{margin-bottom:3rem!important}.ml-xl-5{margin-left:3rem!important}.mx-xl-5{margin-right:3rem!important;margin-left:3rem!important}.my-xl-5{margin-top:3rem!important;margin-bottom:3rem!important}.p-xl-0{padding:0 0!important}.pt-xl-0{padding-top:0!important}.pr-xl-0{padding-right:0!important}.pb-xl-0{padding-bottom:0!important}.pl-xl-0{padding-left:0!important}.px-xl-0{padding-right:0!important;padding-left:0!important}.py-xl-0{padding-top:0!important;padding-bottom:0!important}.p-xl-1{padding:.25rem .25rem!important}.pt-xl-1{padding-top:.25rem!important}.pr-xl-1{padding-right:.25rem!important}.pb-xl-1{padding-bottom:.25rem!important}.pl-xl-1{padding-left:.25rem!important}.px-xl-1{padding-right:.25rem!important;padding-left:.25rem!important}.py-xl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.p-xl-2{padding:.5rem .5rem!important}.pt-xl-2{padding-top:.5rem!important}.pr-xl-2{padding-right:.5rem!important}.pb-xl-2{padding-bottom:.5rem!important}.pl-xl-2{padding-left:.5rem!important}.px-xl-2{padding-right:.5rem!important;padding-left:.5rem!important}.py-xl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.p-xl-3{padding:1rem 1rem!important}.pt-xl-3{padding-top:1rem!important}.pr-xl-3{padding-right:1rem!important}.pb-xl-3{padding-bottom:1rem!important}.pl-xl-3{padding-left:1rem!important}.px-xl-3{padding-right:1rem!important;padding-left:1rem!important}.py-xl-3{padding-top:1rem!important;padding-bottom:1rem!important}.p-xl-4{padding:1.5rem 1.5rem!important}.pt-xl-4{padding-top:1.5rem!important}.pr-xl-4{padding-right:1.5rem!important}.pb-xl-4{padding-bottom:1.5rem!important}.pl-xl-4{padding-left:1.5rem!important}.px-xl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.py-xl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.p-xl-5{padding:3rem 3rem!important}.pt-xl-5{padding-top:3rem!important}.pr-xl-5{padding-right:3rem!important}.pb-xl-5{padding-bottom:3rem!important}.pl-xl-5{padding-left:3rem!important}.px-xl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xl-5{padding-top:3rem!important;padding-bottom:3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto{margin-top:auto!important}.mr-xl-auto{margin-right:auto!important}.mb-xl-auto{margin-bottom:auto!important}.ml-xl-auto{margin-left:auto!important}.mx-xl-auto{margin-right:auto!important;margin-left:auto!important}.my-xl-auto{margin-top:auto!important;margin-bottom:auto!important}}.text-justify{text-align:justify!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-normal{font-weight:400}.font-weight-bold{font-weight:700}.font-italic{font-style:italic}.text-white{color:#fff!important}.text-muted{color:#636c72!important}a.text-muted:focus,a.text-muted:hover{color:#4b5257!important}.text-primary{color:#0275d8!important}a.text-primary:focus,a.text-primary:hover{color:#025aa5!important}.text-success{color:#5cb85c!important}a.text-success:focus,a.text-success:hover{color:#449d44!important}.text-info{color:#5bc0de!important}a.text-info:focus,a.text-info:hover{color:#31b0d5!important}.text-warning{color:#f0ad4e!important}a.text-warning:focus,a.text-warning:hover{color:#ec971f!important}.text-danger{color:#d9534f!important}a.text-danger:focus,a.text-danger:hover{color:#c9302c!important}.text-gray-dark{color:#292b2c!important}a.text-gray-dark:focus,a.text-gray-dark:hover{color:#101112!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.invisible{visibility:hidden!important}.hidden-xs-up{display:none!important}@media (max-width:575px){.hidden-xs-down{display:none!important}}@media (min-width:576px){.hidden-sm-up{display:none!important}}@media (max-width:767px){.hidden-sm-down{display:none!important}}@media (min-width:768px){.hidden-md-up{display:none!important}}@media (max-width:991px){.hidden-md-down{display:none!important}}@media (min-width:992px){.hidden-lg-up{display:none!important}}@media (max-width:1199px){.hidden-lg-down{display:none!important}}@media (min-width:1200px){.hidden-xl-up{display:none!important}}.hidden-xl-down{display:none!important}.visible-print-block{display:none!important}@media print{.visible-print-block{display:block!important}}.visible-print-inline{display:none!important}@media print{.visible-print-inline{display:inline!important}}.visible-print-inline-block{display:none!important}@media print{.visible-print-inline-block{display:inline-block!important}}@media print{.hidden-print{display:none!important}}/*# sourceMappingURL=bootstrap.min.css.map */ ",
                    "/*! *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License) */format('svg');font-weight:normal;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";-webkit-transform:scale(-1, 1);-ms-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";-webkit-transform:scale(1, -1);-ms-transform:scale(1, -1);transform:scale(1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\f000\"}.fa-music:before{content:\"\\f001\"}.fa-search:before{content:\"\\f002\"}.fa-envelope-o:before{content:\"\\f003\"}.fa-heart:before{content:\"\\f004\"}.fa-star:before{content:\"\\f005\"}.fa-star-o:before{content:\"\\f006\"}.fa-user:before{content:\"\\f007\"}.fa-film:before{content:\"\\f008\"}.fa-th-large:before{content:\"\\f009\"}.fa-th:before{content:\"\\f00a\"}.fa-th-list:before{content:\"\\f00b\"}.fa-check:before{content:\"\\f00c\"}.fa-remove:before,.fa-close:before,.fa-times:before{content:\"\\f00d\"}.fa-search-plus:before{content:\"\\f00e\"}.fa-search-minus:before{content:\"\\f010\"}.fa-power-off:before{content:\"\\f011\"}.fa-signal:before{content:\"\\f012\"}.fa-gear:before,.fa-cog:before{content:\"\\f013\"}.fa-trash-o:before{content:\"\\f014\"}.fa-home:before{content:\"\\f015\"}.fa-file-o:before{content:\"\\f016\"}.fa-clock-o:before{content:\"\\f017\"}.fa-road:before{content:\"\\f018\"}.fa-download:before{content:\"\\f019\"}.fa-arrow-circle-o-down:before{content:\"\\f01a\"}.fa-arrow-circle-o-up:before{content:\"\\f01b\"}.fa-inbox:before{content:\"\\f01c\"}.fa-play-circle-o:before{content:\"\\f01d\"}.fa-rotate-right:before,.fa-repeat:before{content:\"\\f01e\"}.fa-refresh:before{content:\"\\f021\"}.fa-list-alt:before{content:\"\\f022\"}.fa-lock:before{content:\"\\f023\"}.fa-flag:before{content:\"\\f024\"}.fa-headphones:before{content:\"\\f025\"}.fa-volume-off:before{content:\"\\f026\"}.fa-volume-down:before{content:\"\\f027\"}.fa-volume-up:before{content:\"\\f028\"}.fa-qrcode:before{content:\"\\f029\"}.fa-barcode:before{content:\"\\f02a\"}.fa-tag:before{content:\"\\f02b\"}.fa-tags:before{content:\"\\f02c\"}.fa-book:before{content:\"\\f02d\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-print:before{content:\"\\f02f\"}.fa-camera:before{content:\"\\f030\"}.fa-font:before{content:\"\\f031\"}.fa-bold:before{content:\"\\f032\"}.fa-italic:before{content:\"\\f033\"}.fa-text-height:before{content:\"\\f034\"}.fa-text-width:before{content:\"\\f035\"}.fa-align-left:before{content:\"\\f036\"}.fa-align-center:before{content:\"\\f037\"}.fa-align-right:before{content:\"\\f038\"}.fa-align-justify:before{content:\"\\f039\"}.fa-list:before{content:\"\\f03a\"}.fa-dedent:before,.fa-outdent:before{content:\"\\f03b\"}.fa-indent:before{content:\"\\f03c\"}.fa-video-camera:before{content:\"\\f03d\"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:\"\\f03e\"}.fa-pencil:before{content:\"\\f040\"}.fa-map-marker:before{content:\"\\f041\"}.fa-adjust:before{content:\"\\f042\"}.fa-tint:before{content:\"\\f043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\f044\"}.fa-share-square-o:before{content:\"\\f045\"}.fa-check-square-o:before{content:\"\\f046\"}.fa-arrows:before{content:\"\\f047\"}.fa-step-backward:before{content:\"\\f048\"}.fa-fast-backward:before{content:\"\\f049\"}.fa-backward:before{content:\"\\f04a\"}.fa-play:before{content:\"\\f04b\"}.fa-pause:before{content:\"\\f04c\"}.fa-stop:before{content:\"\\f04d\"}.fa-forward:before{content:\"\\f04e\"}.fa-fast-forward:before{content:\"\\f050\"}.fa-step-forward:before{content:\"\\f051\"}.fa-eject:before{content:\"\\f052\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-plus-circle:before{content:\"\\f055\"}.fa-minus-circle:before{content:\"\\f056\"}.fa-times-circle:before{content:\"\\f057\"}.fa-check-circle:before{content:\"\\f058\"}.fa-question-circle:before{content:\"\\f059\"}.fa-info-circle:before{content:\"\\f05a\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-times-circle-o:before{content:\"\\f05c\"}.fa-check-circle-o:before{content:\"\\f05d\"}.fa-ban:before{content:\"\\f05e\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\f064\"}.fa-expand:before{content:\"\\f065\"}.fa-compress:before{content:\"\\f066\"}.fa-plus:before{content:\"\\f067\"}.fa-minus:before{content:\"\\f068\"}.fa-asterisk:before{content:\"\\f069\"}.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-gift:before{content:\"\\f06b\"}.fa-leaf:before{content:\"\\f06c\"}.fa-fire:before{content:\"\\f06d\"}.fa-eye:before{content:\"\\f06e\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-warning:before,.fa-exclamation-triangle:before{content:\"\\f071\"}.fa-plane:before{content:\"\\f072\"}.fa-calendar:before{content:\"\\f073\"}.fa-random:before{content:\"\\f074\"}.fa-comment:before{content:\"\\f075\"}.fa-magnet:before{content:\"\\f076\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-retweet:before{content:\"\\f079\"}.fa-shopping-cart:before{content:\"\\f07a\"}.fa-folder:before{content:\"\\f07b\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-arrows-v:before{content:\"\\f07d\"}.fa-arrows-h:before{content:\"\\f07e\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\f080\"}.fa-twitter-square:before{content:\"\\f081\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-key:before{content:\"\\f084\"}.fa-gears:before,.fa-cogs:before{content:\"\\f085\"}.fa-comments:before{content:\"\\f086\"}.fa-thumbs-o-up:before{content:\"\\f087\"}.fa-thumbs-o-down:before{content:\"\\f088\"}.fa-star-half:before{content:\"\\f089\"}.fa-heart-o:before{content:\"\\f08a\"}.fa-sign-out:before{content:\"\\f08b\"}.fa-linkedin-square:before{content:\"\\f08c\"}.fa-thumb-tack:before{content:\"\\f08d\"}.fa-external-link:before{content:\"\\f08e\"}.fa-sign-in:before{content:\"\\f090\"}.fa-trophy:before{content:\"\\f091\"}.fa-github-square:before{content:\"\\f092\"}.fa-upload:before{content:\"\\f093\"}.fa-lemon-o:before{content:\"\\f094\"}.fa-phone:before{content:\"\\f095\"}.fa-square-o:before{content:\"\\f096\"}.fa-bookmark-o:before{content:\"\\f097\"}.fa-phone-square:before{content:\"\\f098\"}.fa-twitter:before{content:\"\\f099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\f09a\"}.fa-github:before{content:\"\\f09b\"}.fa-unlock:before{content:\"\\f09c\"}.fa-credit-card:before{content:\"\\f09d\"}.fa-feed:before,.fa-rss:before{content:\"\\f09e\"}.fa-hdd-o:before{content:\"\\f0a0\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-bell:before{content:\"\\f0f3\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-hand-o-right:before{content:\"\\f0a4\"}.fa-hand-o-left:before{content:\"\\f0a5\"}.fa-hand-o-up:before{content:\"\\f0a6\"}.fa-hand-o-down:before{content:\"\\f0a7\"}.fa-arrow-circle-left:before{content:\"\\f0a8\"}.fa-arrow-circle-right:before{content:\"\\f0a9\"}.fa-arrow-circle-up:before{content:\"\\f0aa\"}.fa-arrow-circle-down:before{content:\"\\f0ab\"}.fa-globe:before{content:\"\\f0ac\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-tasks:before{content:\"\\f0ae\"}.fa-filter:before{content:\"\\f0b0\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-arrows-alt:before{content:\"\\f0b2\"}.fa-group:before,.fa-users:before{content:\"\\f0c0\"}.fa-chain:before,.fa-link:before{content:\"\\f0c1\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-flask:before{content:\"\\f0c3\"}.fa-cut:before,.fa-scissors:before{content:\"\\f0c4\"}.fa-copy:before,.fa-files-o:before{content:\"\\f0c5\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-save:before,.fa-floppy-o:before{content:\"\\f0c7\"}.fa-square:before{content:\"\\f0c8\"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:\"\\f0c9\"}.fa-list-ul:before{content:\"\\f0ca\"}.fa-list-ol:before{content:\"\\f0cb\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-underline:before{content:\"\\f0cd\"}.fa-table:before{content:\"\\f0ce\"}.fa-magic:before{content:\"\\f0d0\"}.fa-truck:before{content:\"\\f0d1\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-pinterest-square:before{content:\"\\f0d3\"}.fa-google-plus-square:before{content:\"\\f0d4\"}.fa-google-plus:before{content:\"\\f0d5\"}.fa-money:before{content:\"\\f0d6\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-columns:before{content:\"\\f0db\"}.fa-unsorted:before,.fa-sort:before{content:\"\\f0dc\"}.fa-sort-down:before,.fa-sort-desc:before{content:\"\\f0dd\"}.fa-sort-up:before,.fa-sort-asc:before{content:\"\\f0de\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-linkedin:before{content:\"\\f0e1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\f0e2\"}.fa-legal:before,.fa-gavel:before{content:\"\\f0e3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\f0e4\"}.fa-comment-o:before{content:\"\\f0e5\"}.fa-comments-o:before{content:\"\\f0e6\"}.fa-flash:before,.fa-bolt:before{content:\"\\f0e7\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-paste:before,.fa-clipboard:before{content:\"\\f0ea\"}.fa-lightbulb-o:before{content:\"\\f0eb\"}.fa-exchange:before{content:\"\\f0ec\"}.fa-cloud-download:before{content:\"\\f0ed\"}.fa-cloud-upload:before{content:\"\\f0ee\"}.fa-user-md:before{content:\"\\f0f0\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-bell-o:before{content:\"\\f0a2\"}.fa-coffee:before{content:\"\\f0f4\"}.fa-cutlery:before{content:\"\\f0f5\"}.fa-file-text-o:before{content:\"\\f0f6\"}.fa-building-o:before{content:\"\\f0f7\"}.fa-hospital-o:before{content:\"\\f0f8\"}.fa-ambulance:before{content:\"\\f0f9\"}.fa-medkit:before{content:\"\\f0fa\"}.fa-fighter-jet:before{content:\"\\f0fb\"}.fa-beer:before{content:\"\\f0fc\"}.fa-h-square:before{content:\"\\f0fd\"}.fa-plus-square:before{content:\"\\f0fe\"}.fa-angle-double-left:before{content:\"\\f100\"}.fa-angle-double-right:before{content:\"\\f101\"}.fa-angle-double-up:before{content:\"\\f102\"}.fa-angle-double-down:before{content:\"\\f103\"}.fa-angle-left:before{content:\"\\f104\"}.fa-angle-right:before{content:\"\\f105\"}.fa-angle-up:before{content:\"\\f106\"}.fa-angle-down:before{content:\"\\f107\"}.fa-desktop:before{content:\"\\f108\"}.fa-laptop:before{content:\"\\f109\"}.fa-tablet:before{content:\"\\f10a\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\f10b\"}.fa-circle-o:before{content:\"\\f10c\"}.fa-quote-left:before{content:\"\\f10d\"}.fa-quote-right:before{content:\"\\f10e\"}.fa-spinner:before{content:\"\\f110\"}.fa-circle:before{content:\"\\f111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\f112\"}.fa-github-alt:before{content:\"\\f113\"}.fa-folder-o:before{content:\"\\f114\"}.fa-folder-open-o:before{content:\"\\f115\"}.fa-smile-o:before{content:\"\\f118\"}.fa-frown-o:before{content:\"\\f119\"}.fa-meh-o:before{content:\"\\f11a\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-keyboard-o:before{content:\"\\f11c\"}.fa-flag-o:before{content:\"\\f11d\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-terminal:before{content:\"\\f120\"}.fa-code:before{content:\"\\f121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\f122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\f123\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-crop:before{content:\"\\f125\"}.fa-code-fork:before{content:\"\\f126\"}.fa-unlink:before,.fa-chain-broken:before{content:\"\\f127\"}.fa-question:before{content:\"\\f128\"}.fa-info:before{content:\"\\f129\"}.fa-exclamation:before{content:\"\\f12a\"}.fa-superscript:before{content:\"\\f12b\"}.fa-subscript:before{content:\"\\f12c\"}.fa-eraser:before{content:\"\\f12d\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-microphone:before{content:\"\\f130\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-shield:before{content:\"\\f132\"}.fa-calendar-o:before{content:\"\\f133\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-rocket:before{content:\"\\f135\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-chevron-circle-left:before{content:\"\\f137\"}.fa-chevron-circle-right:before{content:\"\\f138\"}.fa-chevron-circle-up:before{content:\"\\f139\"}.fa-chevron-circle-down:before{content:\"\\f13a\"}.fa-html5:before{content:\"\\f13b\"}.fa-css3:before{content:\"\\f13c\"}.fa-anchor:before{content:\"\\f13d\"}.fa-unlock-alt:before{content:\"\\f13e\"}.fa-bullseye:before{content:\"\\f140\"}.fa-ellipsis-h:before{content:\"\\f141\"}.fa-ellipsis-v:before{content:\"\\f142\"}.fa-rss-square:before{content:\"\\f143\"}.fa-play-circle:before{content:\"\\f144\"}.fa-ticket:before{content:\"\\f145\"}.fa-minus-square:before{content:\"\\f146\"}.fa-minus-square-o:before{content:\"\\f147\"}.fa-level-up:before{content:\"\\f148\"}.fa-level-down:before{content:\"\\f149\"}.fa-check-square:before{content:\"\\f14a\"}.fa-pencil-square:before{content:\"\\f14b\"}.fa-external-link-square:before{content:\"\\f14c\"}.fa-share-square:before{content:\"\\f14d\"}.fa-compass:before{content:\"\\f14e\"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:\"\\f150\"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:\"\\f151\"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:\"\\f152\"}.fa-euro:before,.fa-eur:before{content:\"\\f153\"}.fa-gbp:before{content:\"\\f154\"}.fa-dollar:before,.fa-usd:before{content:\"\\f155\"}.fa-rupee:before,.fa-inr:before{content:\"\\f156\"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:\"\\f157\"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:\"\\f158\"}.fa-won:before,.fa-krw:before{content:\"\\f159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\f15a\"}.fa-file:before{content:\"\\f15b\"}.fa-file-text:before{content:\"\\f15c\"}.fa-sort-alpha-asc:before{content:\"\\f15d\"}.fa-sort-alpha-desc:before{content:\"\\f15e\"}.fa-sort-amount-asc:before{content:\"\\f160\"}.fa-sort-amount-desc:before{content:\"\\f161\"}.fa-sort-numeric-asc:before{content:\"\\f162\"}.fa-sort-numeric-desc:before{content:\"\\f163\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-youtube-square:before{content:\"\\f166\"}.fa-youtube:before{content:\"\\f167\"}.fa-xing:before{content:\"\\f168\"}.fa-xing-square:before{content:\"\\f169\"}.fa-youtube-play:before{content:\"\\f16a\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-instagram:before{content:\"\\f16d\"}.fa-flickr:before{content:\"\\f16e\"}.fa-adn:before{content:\"\\f170\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-bitbucket-square:before{content:\"\\f172\"}.fa-tumblr:before{content:\"\\f173\"}.fa-tumblr-square:before{content:\"\\f174\"}.fa-long-arrow-down:before{content:\"\\f175\"}.fa-long-arrow-up:before{content:\"\\f176\"}.fa-long-arrow-left:before{content:\"\\f177\"}.fa-long-arrow-right:before{content:\"\\f178\"}.fa-apple:before{content:\"\\f179\"}.fa-windows:before{content:\"\\f17a\"}.fa-android:before{content:\"\\f17b\"}.fa-linux:before{content:\"\\f17c\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-skype:before{content:\"\\f17e\"}.fa-foursquare:before{content:\"\\f180\"}.fa-trello:before{content:\"\\f181\"}.fa-female:before{content:\"\\f182\"}.fa-male:before{content:\"\\f183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\f184\"}.fa-sun-o:before{content:\"\\f185\"}.fa-moon-o:before{content:\"\\f186\"}.fa-archive:before{content:\"\\f187\"}.fa-bug:before{content:\"\\f188\"}.fa-vk:before{content:\"\\f189\"}.fa-weibo:before{content:\"\\f18a\"}.fa-renren:before{content:\"\\f18b\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-arrow-circle-o-right:before{content:\"\\f18e\"}.fa-arrow-circle-o-left:before{content:\"\\f190\"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:\"\\f191\"}.fa-dot-circle-o:before{content:\"\\f192\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-vimeo-square:before{content:\"\\f194\"}.fa-turkish-lira:before,.fa-try:before{content:\"\\f195\"}.fa-plus-square-o:before{content:\"\\f196\"}.fa-space-shuttle:before{content:\"\\f197\"}.fa-slack:before{content:\"\\f198\"}.fa-envelope-square:before{content:\"\\f199\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-openid:before{content:\"\\f19b\"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:\"\\f19c\"}.fa-mortar-board:before,.fa-graduation-cap:before{content:\"\\f19d\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-google:before{content:\"\\f1a0\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-reddit-square:before{content:\"\\f1a2\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-digg:before{content:\"\\f1a6\"}.fa-pied-piper-pp:before{content:\"\\f1a7\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-language:before{content:\"\\f1ab\"}.fa-fax:before{content:\"\\f1ac\"}.fa-building:before{content:\"\\f1ad\"}.fa-child:before{content:\"\\f1ae\"}.fa-paw:before{content:\"\\f1b0\"}.fa-spoon:before{content:\"\\f1b1\"}.fa-cube:before{content:\"\\f1b2\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-behance:before{content:\"\\f1b4\"}.fa-behance-square:before{content:\"\\f1b5\"}.fa-steam:before{content:\"\\f1b6\"}.fa-steam-square:before{content:\"\\f1b7\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-automobile:before,.fa-car:before{content:\"\\f1b9\"}.fa-cab:before,.fa-taxi:before{content:\"\\f1ba\"}.fa-tree:before{content:\"\\f1bb\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-database:before{content:\"\\f1c0\"}.fa-file-pdf-o:before{content:\"\\f1c1\"}.fa-file-word-o:before{content:\"\\f1c2\"}.fa-file-excel-o:before{content:\"\\f1c3\"}.fa-file-powerpoint-o:before{content:\"\\f1c4\"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:\"\\f1c5\"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:\"\\f1c6\"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:\"\\f1c7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\f1c8\"}.fa-file-code-o:before{content:\"\\f1c9\"}.fa-vine:before{content:\"\\f1ca\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:\"\\f1cd\"}.fa-circle-o-notch:before{content:\"\\f1ce\"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:\"\\f1d0\"}.fa-ge:before,.fa-empire:before{content:\"\\f1d1\"}.fa-git-square:before{content:\"\\f1d2\"}.fa-git:before{content:\"\\f1d3\"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:\"\\f1d4\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-qq:before{content:\"\\f1d6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\f1d7\"}.fa-send:before,.fa-paper-plane:before{content:\"\\f1d8\"}.fa-send-o:before,.fa-paper-plane-o:before{content:\"\\f1d9\"}.fa-history:before{content:\"\\f1da\"}.fa-circle-thin:before{content:\"\\f1db\"}.fa-header:before{content:\"\\f1dc\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-sliders:before{content:\"\\f1de\"}.fa-share-alt:before{content:\"\\f1e0\"}.fa-share-alt-square:before{content:\"\\f1e1\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:\"\\f1e3\"}.fa-tty:before{content:\"\\f1e4\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-plug:before{content:\"\\f1e6\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-newspaper-o:before{content:\"\\f1ea\"}.fa-wifi:before{content:\"\\f1eb\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-bell-slash-o:before{content:\"\\f1f7\"}.fa-trash:before{content:\"\\f1f8\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-at:before{content:\"\\f1fa\"}.fa-eyedropper:before{content:\"\\f1fb\"}.fa-paint-brush:before{content:\"\\f1fc\"}.fa-birthday-cake:before{content:\"\\f1fd\"}.fa-area-chart:before{content:\"\\f1fe\"}.fa-pie-chart:before{content:\"\\f200\"}.fa-line-chart:before{content:\"\\f201\"}.fa-lastfm:before{content:\"\\f202\"}.fa-lastfm-square:before{content:\"\\f203\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-bicycle:before{content:\"\\f206\"}.fa-bus:before{content:\"\\f207\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-angellist:before{content:\"\\f209\"}.fa-cc:before{content:\"\\f20a\"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:\"\\f20b\"}.fa-meanpath:before{content:\"\\f20c\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-dashcube:before{content:\"\\f210\"}.fa-forumbee:before{content:\"\\f211\"}.fa-leanpub:before{content:\"\\f212\"}.fa-sellsy:before{content:\"\\f213\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-diamond:before{content:\"\\f219\"}.fa-ship:before{content:\"\\f21a\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-street-view:before{content:\"\\f21d\"}.fa-heartbeat:before{content:\"\\f21e\"}.fa-venus:before{content:\"\\f221\"}.fa-mars:before{content:\"\\f222\"}.fa-mercury:before{content:\"\\f223\"}.fa-intersex:before,.fa-transgender:before{content:\"\\f224\"}.fa-transgender-alt:before{content:\"\\f225\"}.fa-venus-double:before{content:\"\\f226\"}.fa-mars-double:before{content:\"\\f227\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-mars-stroke-h:before{content:\"\\f22b\"}.fa-neuter:before{content:\"\\f22c\"}.fa-genderless:before{content:\"\\f22d\"}.fa-facebook-official:before{content:\"\\f230\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-server:before{content:\"\\f233\"}.fa-user-plus:before{content:\"\\f234\"}.fa-user-times:before{content:\"\\f235\"}.fa-hotel:before,.fa-bed:before{content:\"\\f236\"}.fa-viacoin:before{content:\"\\f237\"}.fa-train:before{content:\"\\f238\"}.fa-subway:before{content:\"\\f239\"}.fa-medium:before{content:\"\\f23a\"}.fa-yc:before,.fa-y-combinator:before{content:\"\\f23b\"}.fa-optin-monster:before{content:\"\\f23c\"}.fa-opencart:before{content:\"\\f23d\"}.fa-expeditedssl:before{content:\"\\f23e\"}.fa-battery-4:before,.fa-battery:before,.fa-battery-full:before{content:\"\\f240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\\f242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\\f243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\f244\"}.fa-mouse-pointer:before{content:\"\\f245\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-object-group:before{content:\"\\f247\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-sticky-note:before{content:\"\\f249\"}.fa-sticky-note-o:before{content:\"\\f24a\"}.fa-cc-jcb:before{content:\"\\f24b\"}.fa-cc-diners-club:before{content:\"\\f24c\"}.fa-clone:before{content:\"\\f24d\"}.fa-balance-scale:before{content:\"\\f24e\"}.fa-hourglass-o:before{content:\"\\f250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\f251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\f252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\f253\"}.fa-hourglass:before{content:\"\\f254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\\f255\"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:\"\\f256\"}.fa-hand-scissors-o:before{content:\"\\f257\"}.fa-hand-lizard-o:before{content:\"\\f258\"}.fa-hand-spock-o:before{content:\"\\f259\"}.fa-hand-pointer-o:before{content:\"\\f25a\"}.fa-hand-peace-o:before{content:\"\\f25b\"}.fa-trademark:before{content:\"\\f25c\"}.fa-registered:before{content:\"\\f25d\"}.fa-creative-commons:before{content:\"\\f25e\"}.fa-gg:before{content:\"\\f260\"}.fa-gg-circle:before{content:\"\\f261\"}.fa-tripadvisor:before{content:\"\\f262\"}.fa-odnoklassniki:before{content:\"\\f263\"}.fa-odnoklassniki-square:before{content:\"\\f264\"}.fa-get-pocket:before{content:\"\\f265\"}.fa-wikipedia-w:before{content:\"\\f266\"}.fa-safari:before{content:\"\\f267\"}.fa-chrome:before{content:\"\\f268\"}.fa-firefox:before{content:\"\\f269\"}.fa-opera:before{content:\"\\f26a\"}.fa-internet-explorer:before{content:\"\\f26b\"}.fa-tv:before,.fa-television:before{content:\"\\f26c\"}.fa-contao:before{content:\"\\f26d\"}.fa-500px:before{content:\"\\f26e\"}.fa-amazon:before{content:\"\\f270\"}.fa-calendar-plus-o:before{content:\"\\f271\"}.fa-calendar-minus-o:before{content:\"\\f272\"}.fa-calendar-times-o:before{content:\"\\f273\"}.fa-calendar-check-o:before{content:\"\\f274\"}.fa-industry:before{content:\"\\f275\"}.fa-map-pin:before{content:\"\\f276\"}.fa-map-signs:before{content:\"\\f277\"}.fa-map-o:before{content:\"\\f278\"}.fa-map:before{content:\"\\f279\"}.fa-commenting:before{content:\"\\f27a\"}.fa-commenting-o:before{content:\"\\f27b\"}.fa-houzz:before{content:\"\\f27c\"}.fa-vimeo:before{content:\"\\f27d\"}.fa-black-tie:before{content:\"\\f27e\"}.fa-fonticons:before{content:\"\\f280\"}.fa-reddit-alien:before{content:\"\\f281\"}.fa-edge:before{content:\"\\f282\"}.fa-credit-card-alt:before{content:\"\\f283\"}.fa-codiepie:before{content:\"\\f284\"}.fa-modx:before{content:\"\\f285\"}.fa-fort-awesome:before{content:\"\\f286\"}.fa-usb:before{content:\"\\f287\"}.fa-product-hunt:before{content:\"\\f288\"}.fa-mixcloud:before{content:\"\\f289\"}.fa-scribd:before{content:\"\\f28a\"}.fa-pause-circle:before{content:\"\\f28b\"}.fa-pause-circle-o:before{content:\"\\f28c\"}.fa-stop-circle:before{content:\"\\f28d\"}.fa-stop-circle-o:before{content:\"\\f28e\"}.fa-shopping-bag:before{content:\"\\f290\"}.fa-shopping-basket:before{content:\"\\f291\"}.fa-hashtag:before{content:\"\\f292\"}.fa-bluetooth:before{content:\"\\f293\"}.fa-bluetooth-b:before{content:\"\\f294\"}.fa-percent:before{content:\"\\f295\"}.fa-gitlab:before{content:\"\\f296\"}.fa-wpbeginner:before{content:\"\\f297\"}.fa-wpforms:before{content:\"\\f298\"}.fa-envira:before{content:\"\\f299\"}.fa-universal-access:before{content:\"\\f29a\"}.fa-wheelchair-alt:before{content:\"\\f29b\"}.fa-question-circle-o:before{content:\"\\f29c\"}.fa-blind:before{content:\"\\f29d\"}.fa-audio-description:before{content:\"\\f29e\"}.fa-volume-control-phone:before{content:\"\\f2a0\"}.fa-braille:before{content:\"\\f2a1\"}.fa-assistive-listening-systems:before{content:\"\\f2a2\"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:\"\\f2a3\"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:\"\\f2a4\"}.fa-glide:before{content:\"\\f2a5\"}.fa-glide-g:before{content:\"\\f2a6\"}.fa-signing:before,.fa-sign-language:before{content:\"\\f2a7\"}.fa-low-vision:before{content:\"\\f2a8\"}.fa-viadeo:before{content:\"\\f2a9\"}.fa-viadeo-square:before{content:\"\\f2aa\"}.fa-snapchat:before{content:\"\\f2ab\"}.fa-snapchat-ghost:before{content:\"\\f2ac\"}.fa-snapchat-square:before{content:\"\\f2ad\"}.fa-pied-piper:before{content:\"\\f2ae\"}.fa-first-order:before{content:\"\\f2b0\"}.fa-yoast:before{content:\"\\f2b1\"}.fa-themeisle:before{content:\"\\f2b2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\\f2b3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\\f2b4\"}.fa-handshake-o:before{content:\"\\f2b5\"}.fa-envelope-open:before{content:\"\\f2b6\"}.fa-envelope-open-o:before{content:\"\\f2b7\"}.fa-linode:before{content:\"\\f2b8\"}.fa-address-book:before{content:\"\\f2b9\"}.fa-address-book-o:before{content:\"\\f2ba\"}.fa-vcard:before,.fa-address-card:before{content:\"\\f2bb\"}.fa-vcard-o:before,.fa-address-card-o:before{content:\"\\f2bc\"}.fa-user-circle:before{content:\"\\f2bd\"}.fa-user-circle-o:before{content:\"\\f2be\"}.fa-user-o:before{content:\"\\f2c0\"}.fa-id-badge:before{content:\"\\f2c1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\\f2c2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\\f2c3\"}.fa-quora:before{content:\"\\f2c4\"}.fa-free-code-camp:before{content:\"\\f2c5\"}.fa-telegram:before{content:\"\\f2c6\"}.fa-thermometer-4:before,.fa-thermometer:before,.fa-thermometer-full:before{content:\"\\f2c7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\\f2c8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\\f2c9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\\f2ca\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\\f2cb\"}.fa-shower:before{content:\"\\f2cc\"}.fa-bathtub:before,.fa-s15:before,.fa-bath:before{content:\"\\f2cd\"}.fa-podcast:before{content:\"\\f2ce\"}.fa-window-maximize:before{content:\"\\f2d0\"}.fa-window-minimize:before{content:\"\\f2d1\"}.fa-window-restore:before{content:\"\\f2d2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\\f2d3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\\f2d4\"}.fa-bandcamp:before{content:\"\\f2d5\"}.fa-grav:before{content:\"\\f2d6\"}.fa-etsy:before{content:\"\\f2d7\"}.fa-imdb:before{content:\"\\f2d8\"}.fa-ravelry:before{content:\"\\f2d9\"}.fa-eercast:before{content:\"\\f2da\"}.fa-microchip:before{content:\"\\f2db\"}.fa-snowflake-o:before{content:\"\\f2dc\"}.fa-superpowers:before{content:\"\\f2dd\"}.fa-wpexplorer:before{content:\"\\f2de\"}.fa-meetup:before{content:\"\\f2e0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto} ",
                    ":host { height: 100%; position: relative; display: flex; align-items: center; justify-content: center; text-align: center; border: 1px solid rgba(0, 0, 0, 0.15); overflow: hidden; } .rendering, .error { width: 100%; height: 100%; position: absolute; top: 0; left: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; } .rendering { background-color: rgba(0, 0, 0, 0.025); } .error { background-color: rgba(255, 0, 0, 0.05); } .rendering > i { align-self: center; color: #0275d8; } .select-view { position: absolute; top: 0; right: 0; padding-top: 10px; padding-right: 10px; } .select-view > .dropdown-menu { left: auto; right: 10px; } .selected { color: white; background-color: #0275d8; } #svg-container { width: 100%; height: 100%; } #zoom-controls { display: flex; flex-direction: column; position: absolute; top: 0; left: 0; padding-left: 10px; } #zoom-controls > button { margin-top: 10px; } "]
            },] },
];
/**
 * @nocollapse
 */
GraphComponent.ctorParameters = function () { return [
    { type: _angular_core.ComponentFactoryResolver, },
    { type: GraphService, },
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
