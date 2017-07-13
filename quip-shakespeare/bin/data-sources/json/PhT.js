{
   "TEI": {
      "$": {
         "xmlns:ws": "http://www.tei-c.org/ns/1.0"
      },
      "teiHeader": [
         {
            "fileDesc": [
               {
                  "titleStmt": [
                     {
                        "title": [
                           "The Phoenix and Turtle"
                        ],
                        "author": [
                           "William Shakespeare"
                        ],
                        "editor": [
                           {
                              "_": "Barbara A. Mowat",
                              "$": {
                                 "xml:id": "BAM"
                              }
                           },
                           {
                              "_": "Paul Werstine",
                              "$": {
                                 "xml:id": "PW"
                              }
                           }
                        ],
                        "respStmt": [
                           {
                              "resp": [
                                 "Edited for XML and encoded by"
                              ],
                              "persName": [
                                 {
                                    "_": "Michael Poston",
                                    "$": {
                                       "xml:id": "MSP"
                                    }
                                 },
                                 {
                                    "_": "Rebecca Niles",
                                    "$": {
                                       "xml:id": "RLN"
                                    }
                                 }
                              ]
                           }
                        ]
                     }
                  ],
                  "editionStmt": [
                     {
                        "edition": [
                           {
                              "_": "Text released without textual notes",
                              "$": {
                                 "n": "0.9.0.2"
                              }
                           }
                        ]
                     }
                  ],
                  "publicationStmt": [
                     {
                        "publisher": [
                           "Folger Shakespeare Library"
                        ],
                        "idno": [
                           "PhT"
                        ],
                        "address": [
                           {
                              "addrLine": [
                                 "201 East Capitol Street, SE",
                                 "Washington, DC 20003",
                                 "http://www.folgerdigitaltexts.org",
                                 "folgertexts@folger.edu"
                              ]
                           }
                        ],
                        "availability": [
                           {
                              "licence": [
                                 {
                                    "_": "Distributed under a Creative Commons Attribution-NonCommercial 3.0 Unported License",
                                    "$": {
                                       "target": "http://creativecommons.org/licenses/by-nc/3.0/deed.en_US"
                                    }
                                 }
                              ]
                           }
                        ],
                        "date": [
                           "July, 2016"
                        ]
                     }
                  ],
                  "seriesStmt": [
                     {
                        "title": [
                           "Folger Digital Texts"
                        ]
                     }
                  ],
                  "sourceDesc": [
                     {
                        "listWit": [
                           {
                              "witness": [
                                 {
                                    "$": {
                                       "xml:id": "print"
                                    },
                                    "biblStruct": [
                                       {
                                          "monogr": [
                                             {
                                                "author": [
                                                   "William Shakespeare"
                                                ],
                                                "title": [
                                                   "Shakespeare's Sonnets and Poems"
                                                ],
                                                "editor": [
                                                   "Barbara A. Mowat",
                                                   "Paul Werstine"
                                                ],
                                                "imprint": [
                                                   {
                                                      "pubPlace": [
                                                         "New York"
                                                      ],
                                                      "publisher": [
                                                         "Washington Square Press"
                                                      ],
                                                      "date": [
                                                         "2006"
                                                      ]
                                                   }
                                                ]
                                             }
                                          ]
                                       }
                                    ]
                                 },
                                 {
                                    "_": "Adobe Digital Edition",
                                    "$": {
                                       "xml:id": "adobe"
                                    }
                                 },
                                 {
                                    "_": "The current version of the base text",
                                    "$": {
                                       "xml:id": "lemma"
                                    }
                                 }
                              ]
                           }
                        ]
                     }
                  ]
               }
            ],
            "encodingDesc": [
               {
                  "projectDesc": [
                     {
                        "p": [
                           "The Folger Digital Texts project makes the texts of the Folger Shakespeare Library editions freely available for noncommercial use. The primary goal is to represent the source text faithfully, as simply as possible within the TEI P5 schema. Lineation and other typographic features from the print edition are reproduced, with the interpretations previously implicit in the print layout now made explicit in the encoding.",
                           "In addition, most elements are assigned a unique identifier. This facilitates our use of stand-off markup and provides the means for future works to point very specifically to words, lines, speeches, and arbitrary sections of the text.",
                           "Please note this project offers only the encoded text and textual notes (textual notes are forthcoming). For the explanatory notes, glosses, and illustrations, refer to the print edition and/or Adobe Digital Edition published by Simon & Schuster."
                        ]
                     }
                  ],
                  "editorialDecl": [
                     {
                        "correction": [
                           {
                              "p": [
                                 "This XML document may include corrections and revisions made by the original Folger Edition editors. Where the text deviates from prior publications, the earlier readings are noted within critical apparatus entry tags."
                              ]
                           }
                        ],
                        "quotation": [
                           {
                              "p": [
                                 {
                                    "_": "Quotation marks (single and double quotes) are replaced with the  element, except when the quoted text refers to a name or title, in which case the  or  element is used. Apostrophes, as distinct from single quotes, are not tagged and are retained as-is within the text.",
                                    "gi": [
                                       "q",
                                       "name",
                                       "title"
                                    ]
                                 }
                              ]
                           }
                        ],
                        "hyphenation": [
                           {
                              "$": {
                                 "eol": "hard"
                              },
                              "p": [
                                 {
                                    "_": "Hyphenation is generally retained. Hyphenated words are considered to be a single word, enclosed within a single word tag ().",
                                    "gi": [
                                       "w"
                                    ]
                                 },
                                 {
                                    "_": "For all end-of-line hyphenation, the word fragments are rejoined into a single  tag. Often, the word is placed on the line where the word begins. When this would affect lineation (e.g., when the second word fragment is the only element on its line), the word is moved to the next line.",
                                    "gi": [
                                       "w"
                                    ]
                                 },
                                 "Soft end-of-line hyphens (i.e., those added only because of the line break) are silently removed. Editors Barbara A. Mowat and Paul Werstine determine whether the hyphen should be retained."
                              ]
                           }
                        ],
                        "segmentation": [
                           {
                              "p": [
                                 {
                                    "_": "Poems and collections of sonnets are enclosed in  tags. Individual sonnets are enclosed in  tags. Primary source front matter such as dedications and arguments are in  tags.",
                                    "gi": [
                                       "div1",
                                       "div2",
                                       "div1"
                                    ]
                                 },
                                 {
                                    "_": "Foreign words and phrases are enclosed in  tags.",
                                    "gi": [
                                       "foreign"
                                    ]
                                 },
                                 {
                                    "_": "Words, spaces, and punctuation marks are enclosed in , , and  tags respectively.",
                                    "gi": [
                                       "w",
                                       "c",
                                       "pc"
                                    ]
                                 },
                                 {
                                    "_": "Lines are not segmented within  or  elements. They are noted through  elements.",
                                    "gi": [
                                       "l",
                                       "lg",
                                       "milestone"
                                    ]
                                 }
                              ]
                           }
                        ],
                        "interpretation": [
                           {
                              "p": [
                                 {
                                    "_": "Lineation is the poems is more regular than in the plays. Still, in order to remain consistent with the rest of the Folger Digital Texts corpus, we use  tags to denote line and stanza breaks. Not insignificantly, this also helps to avoid overlapping hierarchies in the XML.",
                                    "gi": [
                                       "milestone"
                                    ]
                                 },
                                 "Line breaks in the print edition are not preserved if they do not affect the line numbering or the structure of the poem."
                              ]
                           }
                        ]
                     }
                  ],
                  "tagsDecl": [
                     {
                        "namespace": [
                           {
                              "$": {
                                 "name": "http://www.tei-c.org/ns/1.0"
                              },
                              "tagUsage": [
                                 {
                                    "_": "When the  = \"stanza\", it describes a line group, with the  attribute pointing to the corresponding verse lines that comprise the stanza. When the  = \"line\", it describes a verse line. The  element notes the corresponding , ,  and  elements. The  attribute gives the line number.",
                                    "$": {
                                       "gi": "milestone"
                                    },
                                    "att": [
                                       "unit",
                                       "corresp",
                                       "unit",
                                       "corresp",
                                       "n"
                                    ],
                                    "gi": [
                                       "w",
                                       "c",
                                       "pc",
                                       "anchor"
                                    ]
                                 },
                                 {
                                    "_": "Marks a line break in the print edition.",
                                    "$": {
                                       "gi": "lb"
                                    }
                                 },
                                 {
                                    "_": "Marks primary source front matter (dedication or argument) and large poems. Also used to group collections of sonnets. The  attribute gives the division type.",
                                    "$": {
                                       "gi": "div1"
                                    },
                                    "att": [
                                       "type"
                                    ]
                                 },
                                 {
                                    "_": "Marks an individual sonnet. The  attribute gives the sonnet number.",
                                    "$": {
                                       "gi": "div2"
                                    },
                                    "att": [
                                       "n"
                                    ]
                                 },
                                 {
                                    "_": "Provides the poem header, as given in the print edition.",
                                    "$": {
                                       "gi": "head"
                                    }
                                 },
                                 {
                                    "_": "Contains the text of the poem.",
                                    "$": {
                                       "gi": "ab"
                                    }
                                 },
                                 {
                                    "_": "Marks a word in the text. The  attribute gives the line number, where appropriate.",
                                    "$": {
                                       "gi": "w"
                                    },
                                    "att": [
                                       "n"
                                    ]
                                 },
                                 {
                                    "_": "Marks a space character in the text. The  attribute gives the line number, where appropriate.",
                                    "$": {
                                       "gi": "c"
                                    },
                                    "att": [
                                       "n"
                                    ]
                                 },
                                 {
                                    "_": "Marks a punctuation character in the text. The  attribute gives the line number, where appropriate.",
                                    "$": {
                                       "gi": "pc"
                                    },
                                    "att": [
                                       "n"
                                    ]
                                 },
                                 {
                                    "_": "Creates a pointer for one or more , , , and  elements, used to link them to analytical interpretations such as textual notes or emendations.",
                                    "$": {
                                       "gi": "ptr"
                                    },
                                    "gi": [
                                       "w",
                                       "c",
                                       "pc",
                                       "anchor"
                                    ]
                                 },
                                 {
                                    "_": "Marks a label given in the text.",
                                    "$": {
                                       "gi": "label"
                                    }
                                 },
                                 {
                                    "_": "Contains quoted sections of text.",
                                    "$": {
                                       "gi": "q"
                                    }
                                 },
                                 {
                                    "_": "Marks non-English words. The  attribute identifies the foreign language, where appropriate.",
                                    "$": {
                                       "gi": "foreign"
                                    },
                                    "att": [
                                       "xml:lang"
                                    ]
                                 },
                                 {
                                    "_": "Marks a proper name that may be quoted or italicized in the text.",
                                    "$": {
                                       "gi": "name"
                                    }
                                 },
                                 {
                                    "_": "Marks a title that may be quoted or italicized in the text.",
                                    "$": {
                                       "gi": "title"
                                    }
                                 },
                                 {
                                    "_": "Marks sections of text that are otherwise highlighted (generally italicized).",
                                    "$": {
                                       "gi": "hi"
                                    }
                                 },
                                 {
                                    "_": "Marks areas where content in a prior source text is not present in the current reading.",
                                    "$": {
                                       "gi": "anchor"
                                    }
                                 },
                                 {
                                    "_": "Critical apparatus containing variant readings from prior publications.",
                                    "$": {
                                       "gi": "app"
                                    }
                                 }
                              ]
                           }
                        ]
                     }
                  ],
                  "refsDecl": [
                     {
                        "p": [
                           "Words, spaces, and punctuation characters are numbered sequentially, incremented by 10.",
                           "Most other elements begin with an element-specific prefix, followed by a reference to the Folger Through Line Number, a sequential numbering of the numbered lines in the text."
                        ]
                     }
                  ],
                  "variantEncoding": [
                     {
                        "$": {
                           "method": "double-end-point",
                           "location": "internal"
                        }
                     }
                  ]
               }
            ],
            "profileDesc": [
               {
                  "langUsage": [
                     {
                        "language": [
                           {
                              "_": "English",
                              "$": {
                                 "ident": "en"
                              }
                           },
                           {
                              "_": "Latin",
                              "$": {
                                 "ident": "la"
                              }
                           }
                        ]
                     }
                  ]
               }
            ],
            "revisionDesc": [
               {
                  "change": [
                     {
                        "_": "Version 0.9.0.2 released. Minor correction to #FromTheDirector.",
                        "$": {
                           "when": "2016-07-25",
                           "who": "#MSP #RLN"
                        }
                     },
                     {
                        "_": "Version 0.9.0.1 released",
                        "$": {
                           "when": "2015-07-31",
                           "who": "#MSP #RLN"
                        }
                     },
                     {
                        "_": "Version 0.9.0 released",
                        "$": {
                           "when": "2014-08-05",
                           "who": "#MSP #RLN"
                        }
                     }
                  ]
               }
            ]
         }
      ],
      "text": [
         {
            "front": [
               {
                  "div": [
                     {
                        "$": {
                           "type": "FromTheDirector"
                        },
                        "p": [
                           "It is hard to imagine a world without Shakespeare. Since their composition more than four hundred years ago, Shakespeare’s plays and poems have traveled the globe, inviting those who see and read his works to make them their own.",
                           "Readers of the New Folger Editions are part of this ongoing process of “taking up Shakespeare,” finding our own thoughts and feelings in language that strikes us as old or unusual and, for that very reason, new. We still struggle to keep up with a writer who could think a mile a minute, whose words paint pictures that shift like clouds. These expertly edited texts are presented to the public as a resource for study, artistic adaptation, and enjoyment. By making the classic texts of the New Folger Editions available in electronic form as Folger Digital Texts, we place a trusted resource in the hands of anyone who wants them.",
                           "The New Folger Editions of Shakespeare’s plays, which are the basis for the texts realized here in digital form, are special because of their origin. The Folger Shakespeare Library in Washington, DC, is the single greatest documentary source of Shakespeare’s works. An unparalleled collection of early modern books, manuscripts, and artwork connected to Shakespeare, the Folger’s holdings have been consulted extensively in the preparation of these texts. The Editions also reflect the expertise gained through the regular performance of Shakespeare’s works in the Folger’s Elizabethan Theater.",
                           "I want to express my deep thanks to editors Barbara Mowat and Paul Werstine for creating these indispensable editions of Shakespeare’s works, which incorporate the best of textual scholarship with a richness of commentary that is both inspired and engaging. Readers who want to know more about Shakespeare and his plays can follow the paths these distinguished scholars have tread by visiting the Folger either in-person or online, where a range of physical and digital resources exists to supplement the material in these texts. I commend to you these words, and hope that they inspire."
                        ],
                        "closer": [
                           {
                              "_": "Director, Folger Shakespeare Library",
                              "signed": [
                                 "Michael Witmore"
                              ],
                              "lb": [
                                 {
                                    "$": {
                                       "xml:id": "lb-00001"
                                    }
                                 }
                              ]
                           }
                        ],
                        "lb": [
                           {
                              "$": {
                                 "xml:id": "lb-00002"
                              }
                           }
                        ]
                     },
                     {
                        "$": {
                           "type": "TextualIntroduction"
                        },
                        "p": [
                           {
                              "_": "Until now, with the release of the Folger Digital Texts, readers in search of a free online text of Shakespeare’s plays and poems had to be content primarily with using the Moby™ Text, which reproduces a late-nineteenth century version of the plays and poems. What is the difference? Many ordinary readers assume that there is a single text of all these works: what Shakespeare wrote. But Shakespeare’s plays were not published the way modern novels or plays are published today: as a single, authoritative text. In some cases, the plays have come down to us in multiple published versions, represented by various Quartos (Qq) and by the great collection put together by his colleagues in 1623, called the First Folio (F). There are, for example, three very different versions of , two of , , , and others. Editors choose which version to use as their base text, and then amend that text with words, lines or speech prefixes from the other versions that, in their judgment, make for a better or more accurate text.",
                              "title": [
                                 "Hamlet",
                                 "King Lear",
                                 "Henry V",
                                 "Romeo and Juliet"
                              ]
                           },
                           {
                              "_": "Other editorial decisions involve choices about whether an unfamiliar word could be understood in light of other writings of the period or whether it should be changed; decisions about words that made it into Shakespeare’s text by accident through four hundred years of printings and misprinting; and even decisions based on cultural preference and taste. When the Moby™ Text was created, for example, it was deemed “improper” and “indecent” for Miranda to chastise Caliban for having attempted to rape her. (See , 1.2: “Abhorred slave,/Which any print of goodness wilt not take,/Being capable of all ill! I pitied thee…”). All Shakespeare editors at the time took the speech away from her and gave it to her father, Prospero.",
                              "title": [
                                 "The Tempest"
                              ]
                           },
                           {
                              "_": "The editors of the Moby™ Shakespeare produced their text long before scholars fully understood the proper grounds on which to make the thousands of decisions that Shakespeare editors face. The Folger Library Shakespeare Editions, on which the Folger Digital Texts depend, make this editorial process as nearly transparent as is possible, in contrast to older texts, like the Moby™, which hide editorial interventions. The reader of the Folger Shakespeare knows where the text has been altered because editorial interventions are signaled by square brackets (for example, from : “If she in chains of magic were not bound,”), half-square brackets (for example, from : “With  and sword and fire to win your right,”), or angle brackets (for example, from : “O farewell, honest  Who hath relieved/you?”). At any point in the text, you can hover your cursor over a bracket for more information.",
                              "title": [
                                 "Othello",
                                 "Henry V",
                                 "Hamlet"
                              ],
                              "graphic": [
                                 {
                                    "$": {
                                       "url": "fdt-textb-l.png"
                                    },
                                    "desc": [
                                       "square bracket"
                                    ]
                                 },
                                 {
                                    "$": {
                                       "url": "fdt-textb-r.png"
                                    },
                                    "desc": [
                                       "square bracket"
                                    ]
                                 }
                              ],
                              "seg": [
                                 {
                                    "_": "blood",
                                    "$": {
                                       "rend": "nobr"
                                    },
                                    "graphic": [
                                       {
                                          "$": {
                                             "url": "fdt-emend-l.png"
                                          },
                                          "desc": [
                                             "half-square bracket"
                                          ]
                                       },
                                       {
                                          "$": {
                                             "url": "fdt-emend-r.png"
                                          },
                                          "desc": [
                                             "half-square bracket"
                                          ]
                                       }
                                    ]
                                 },
                                 {
                                    "_": "soldier.",
                                    "$": {
                                       "rend": "nobr"
                                    },
                                    "graphic": [
                                       {
                                          "$": {
                                             "url": "fdt-texta-l.png"
                                          },
                                          "desc": [
                                             "angle bracket"
                                          ]
                                       },
                                       {
                                          "$": {
                                             "url": "fdt-texta-r.png"
                                          },
                                          "desc": [
                                             "angle bracket"
                                          ]
                                       }
                                    ]
                                 }
                              ]
                           },
                           "Because the Folger Digital Texts are edited in accord with twenty-first century knowledge about Shakespeare’s texts, the Folger here provides them to readers, scholars, teachers, actors, directors, and students, free of charge, confident of their quality as texts of the plays and pleased to be able to make this contribution to the study and enjoyment of Shakespeare."
                        ]
                     }
                  ]
               }
            ],
            "body": [
               {
                  "div1": [
                     {
                        "head": [
                           {
                              "_": "The Phoenix and Turtle",
                              "$": {
                                 "rend": "quotes"
                              }
                           }
                        ],
                        "ab": [
                           {
                              "milestone": [
                                 {
                                    "$": {
                                       "unit": "stanza",
                                       "xml:id": "PhT-001",
                                       "n": "1",
                                       "corresp": "#PhT-0001 #PhT-0002 #PhT-0003 #PhT-0004"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0001",
                                       "n": "1",
                                       "corresp": "#w0000010 #c0000020 #w0000030 #c0000040 #w0000050 #c0000060 #w0000070 #c0000080 #w0000090 #c0000100 #w0000110"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0002",
                                       "n": "2",
                                       "corresp": "#w0000120 #c0000130 #w0000140 #c0000150 #w0000160 #c0000170 #w0000180 #c0000190 #w0000200"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0003",
                                       "n": "3",
                                       "corresp": "#w0000210 #c0000220 #w0000230 #c0000240 #w0000250 #c0000260 #w0000270 #c0000280 #w0000290 #p0000300"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0004",
                                       "n": "4",
                                       "corresp": "#w0000310 #c0000320 #w0000330 #c0000340 #w0000350 #c0000360 #w0000370 #c0000380 #w0000390 #c0000400 #w0000410 #p0000420"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "stanza",
                                       "xml:id": "PhT-002",
                                       "n": "2",
                                       "corresp": "#PhT-0005 #PhT-0006 #PhT-0007 #PhT-0008"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0005",
                                       "n": "1",
                                       "corresp": "#w0000430 #c0000440 #w0000450 #c0000460 #w0000470 #c0000480 #w0000490 #p0000500"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0006",
                                       "n": "2",
                                       "corresp": "#w0000510 #c0000520 #w0000530 #c0000540 #w0000550 #c0000560 #w0000570 #c0000580 #w0000590 #p0000600"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0007",
                                       "n": "3",
                                       "corresp": "#w0000610 #c0000620 #w0000630 #c0000640 #w0000650 #c0000660 #w0000670 #c0000680 #w0000690 #p0000700"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0008",
                                       "n": "4",
                                       "corresp": "#w0000710 #c0000720 #w0000730 #c0000740 #w0000750 #c0000760 #w0000770 #c0000780 #w0000790 #c0000800 #w0000810 #c0000820 #w0000830 #p0000840"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "stanza",
                                       "xml:id": "PhT-003",
                                       "n": "3",
                                       "corresp": "#PhT-0009 #PhT-0010 #PhT-0011 #PhT-0012"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0009",
                                       "n": "1",
                                       "corresp": "#w0000850 #c0000860 #w0000870 #c0000880 #w0000890 #c0000900 #w0000910"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0010",
                                       "n": "2",
                                       "corresp": "#w0000920 #c0000930 #w0000940 #c0000950 #w0000960 #c0000970 #w0000980 #c0000990 #w0001000 #p0001010"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0011",
                                       "n": "3",
                                       "corresp": "#w0001020 #c0001030 #w0001040 #c0001050 #w0001060 #p0001070 #c0001080 #w0001090 #c0001100 #w0001110 #p0001120"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0012",
                                       "n": "4",
                                       "corresp": "#w0001130 #c0001140 #w0001150 #c0001160 #w0001170 #c0001180 #w0001190 #c0001200 #w0001210 #p0001220"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "stanza",
                                       "xml:id": "PhT-004",
                                       "n": "4",
                                       "corresp": "#PhT-0013 #PhT-0014 #PhT-0015 #PhT-0016"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0013",
                                       "n": "1",
                                       "corresp": "#w0001230 #c0001240 #w0001250 #c0001260 #w0001270 #c0001280 #w0001290 #c0001300 #w0001310 #c0001320 #w0001330 #p0001340"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0014",
                                       "n": "2",
                                       "corresp": "#w0001350 #c0001360 #w0001370 #c0001380 #w0001390 #c0001400 #w0001410 #p0001420"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0015",
                                       "n": "3",
                                       "corresp": "#w0001430 #c0001440 #w0001450 #c0001460 #w0001470 #c0001480 #w0001490 #p0001500"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0016",
                                       "n": "4",
                                       "corresp": "#w0001510 #c0001520 #w0001530 #c0001540 #w0001550 #c0001560 #w0001570 #c0001580 #w0001590 #c0001600 #w0001610 #p0001620"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "stanza",
                                       "xml:id": "PhT-005",
                                       "n": "5",
                                       "corresp": "#PhT-0017 #PhT-0018 #PhT-0019 #PhT-0020"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0017",
                                       "n": "1",
                                       "corresp": "#w0001630 #c0001640 #w0001650 #c0001660 #w0001670 #c0001680 #w0001690 #p0001700"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0018",
                                       "n": "2",
                                       "corresp": "#w0001710 #c0001720 #w0001730 #c0001740 #w0001750 #c0001760 #w0001770 #c0001780 #w0001790"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0019",
                                       "n": "3",
                                       "corresp": "#w0001800 #c0001810 #w0001820 #c0001830 #w0001840 #c0001850 #w0001860 #c0001870 #w0001880 #c0001890 #w0001900 #c0001910 #w0001920 #p0001930"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0020",
                                       "n": "4",
                                       "corresp": "#w0001940 #c0001950 #w0001960 #c0001970 #w0001980 #c0001990 #w0002000 #c0002010 #w0002020 #c0002030 #w0002040 #p0002050"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "stanza",
                                       "xml:id": "PhT-006",
                                       "n": "6",
                                       "corresp": "#PhT-0021 #PhT-0022 #PhT-0023 #PhT-0024"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0021",
                                       "n": "1",
                                       "corresp": "#w0002060 #c0002070 #w0002080 #c0002090 #w0002100 #c0002110 #w0002120 #c0002130 #w0002140 #p0002150"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0022",
                                       "n": "2",
                                       "corresp": "#w0002160 #c0002170 #w0002180 #c0002190 #w0002200 #c0002210 #w0002220 #c0002230 #w0002240 #p0002250"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0023",
                                       "n": "3",
                                       "corresp": "#w0002260 #c0002270 #w0002280 #c0002290 #w0002300 #c0002310 #w0002320 #c0002330 #w0002340"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0024",
                                       "n": "4",
                                       "corresp": "#w0002350 #c0002360 #w0002370 #c0002380 #w0002390 #c0002400 #w0002410 #c0002420 #w0002430 #c0002440 #w0002450 #p0002460"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "stanza",
                                       "xml:id": "PhT-007",
                                       "n": "7",
                                       "corresp": "#PhT-0025 #PhT-0026 #PhT-0027 #PhT-0028"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0025",
                                       "n": "1",
                                       "corresp": "#w0002470 #c0002480 #w0002490 #c0002500 #w0002510 #p0002520 #c0002530 #w0002540 #c0002550 #w0002560 #c0002570 #w0002580 #c0002590 #w0002600"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0026",
                                       "n": "2",
                                       "corresp": "#w0002610 #c0002620 #w0002630 #c0002640 #w0002650 #c0002660 #w0002670 #c0002680 #w0002690 #c0002700 #w0002710 #p0002720"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0027",
                                       "n": "3",
                                       "corresp": "#w0002730 #c0002740 #w0002750 #p0002760 #c0002770 #w0002780 #c0002790 #w0002800 #p0002810"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0028",
                                       "n": "4",
                                       "corresp": "#w0002820 #c0002830 #w0002840 #c0002850 #w0002860 #c0002870 #w0002880 #c0002890 #w0002900 #c0002910 #w0002920 #p0002930"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "stanza",
                                       "xml:id": "PhT-008",
                                       "n": "8",
                                       "corresp": "#PhT-0029 #PhT-0030 #PhT-0031 #PhT-0032"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0029",
                                       "n": "1",
                                       "corresp": "#w0002940 #c0002950 #w0002960 #c0002970 #w0002980 #c0002990 #w0003000 #c0003010 #w0003020 #p0003030"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0030",
                                       "n": "2",
                                       "corresp": "#w0003040 #c0003050 #w0003060 #c0003070 #w0003080 #c0003090 #w0003100 #c0003110 #w0003120 #c0003130 #w0003140"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0031",
                                       "n": "3",
                                       "corresp": "#w0003150 #c0003160 #w0003170 #c0003180 #w0003190 #c0003200 #w0003210 #c0003220 #w0003230 #c0003240 #w0003250 #p0003260"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0032",
                                       "n": "4",
                                       "corresp": "#w0003270 #c0003280 #w0003290 #c0003300 #w0003310 #c0003320 #w0003330 #c0003340 #w0003350 #c0003360 #w0003370 #c0003380 #w0003390 #p0003400"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "stanza",
                                       "xml:id": "PhT-009",
                                       "n": "9",
                                       "corresp": "#PhT-0033 #PhT-0034 #PhT-0035 #PhT-0036"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0033",
                                       "n": "1",
                                       "corresp": "#w0003410 #c0003420 #w0003430 #c0003440 #w0003450 #c0003460 #w0003470 #c0003480 #w0003490 #c0003500 #w0003510"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0034",
                                       "n": "2",
                                       "corresp": "#w0003520 #c0003530 #w0003540 #c0003550 #w0003560 #c0003570 #w0003580 #c0003590 #w0003600 #c0003610 #w0003620"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0035",
                                       "n": "3",
                                       "corresp": "#w0003630 #c0003640 #w0003650 #c0003660 #w0003670 #c0003680 #w0003690 #c0003700 #w0003710 #p0003720"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0036",
                                       "n": "4",
                                       "corresp": "#w0003730 #c0003740 #w0003750 #c0003760 #w0003770 #c0003780 #w0003790 #c0003800 #w0003810 #p0003820"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "stanza",
                                       "xml:id": "PhT-010",
                                       "n": "10",
                                       "corresp": "#PhT-0037 #PhT-0038 #PhT-0039 #PhT-0040"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0037",
                                       "n": "1",
                                       "corresp": "#w0003830 #c0003840 #w0003850 #c0003860 #w0003870 #c0003880 #w0003890"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0038",
                                       "n": "2",
                                       "corresp": "#w0003900 #c0003910 #w0003920 #c0003930 #w0003940 #c0003950 #w0003960 #c0003970 #w0003980 #c0003990 #w0004000 #c0004010 #w0004020 #p0004030"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0039",
                                       "n": "3",
                                       "corresp": "#w0004040 #c0004050 #w0004060 #c0004070 #w0004080 #c0004090 #w0004100"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0040",
                                       "n": "4",
                                       "corresp": "#w0004110 #c0004120 #w0004130 #c0004140 #w0004150 #c0004160 #w0004170 #c0004180 #w0004190 #c0004200 #w0004210 #p0004220"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "stanza",
                                       "xml:id": "PhT-011",
                                       "n": "11",
                                       "corresp": "#PhT-0041 #PhT-0042 #PhT-0043 #PhT-0044"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0041",
                                       "n": "1",
                                       "corresp": "#w0004230 #p0004240 #c0004250 #w0004260 #c0004270 #w0004280 #c0004290 #w0004300 #p0004310"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0042",
                                       "n": "2",
                                       "corresp": "#w0004320 #c0004330 #w0004340 #c0004350 #w0004360 #c0004370 #w0004380 #p0004390"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0043",
                                       "n": "3",
                                       "corresp": "#w0004400 #c0004410 #w0004420 #c0004430 #w0004440 #c0004450 #w0004460 #c0004470 #w0004480 #p0004490"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0044",
                                       "n": "4",
                                       "corresp": "#w0004500 #c0004510 #w0004520 #c0004530 #w0004540 #c0004550 #w0004560 #c0004570 #w0004580"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "stanza",
                                       "xml:id": "PhT-012",
                                       "n": "12",
                                       "corresp": "#PhT-0045 #PhT-0046 #PhT-0047 #PhT-0048"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0045",
                                       "n": "1",
                                       "corresp": "#w0004590 #c0004600 #w0004610 #c0004620 #w0004630 #p0004640 #c0004650 #w0004660 #c0004670 #w0004680 #c0004690 #w0004700 #c0004710 #w0004720"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "stanza",
                                       "xml:id": "PhT-013",
                                       "n": "13",
                                       "corresp": "#PhT-0049 #PhT-0050 #PhT-0051 #PhT-0052"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0049",
                                       "n": "1",
                                       "corresp": "#w0005040 #c0005050 #w0005060 #c0005070 #w0005080 #c0005090 #w0005100 #c0005110 #w0005120"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0050",
                                       "n": "2",
                                       "corresp": "#w0005130 #c0005140 #w0005150 #c0005160 #w0005170 #c0005180 #w0005190 #c0005200 #w0005210 #c0005220 #w0005230 #p0005240"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0051",
                                       "n": "3",
                                       "corresp": "#w0005250 #c0005260 #w0005270 #c0005280 #w0005290 #c0005300 #w0005310 #c0005320 #w0005330 #p0005340"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0052",
                                       "n": "4",
                                       "corresp": "#w0005350 #c0005360 #w0005370 #c0005380 #w0005390 #c0005400 #w0005410 #c0005420 #w0005430 #c0005440 #w0005450 #p0005460"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "stanza",
                                       "xml:id": "PhT-014",
                                       "n": "14",
                                       "corresp": "#PhT-0053 #PhT-0054 #PhT-0055"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0053",
                                       "n": "1",
                                       "corresp": "#w0005480 #p0005490 #c0005500 #w0005510 #p0005520 #c0005530 #w0005540 #c0005550 #w0005560 #p0005570"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0054",
                                       "n": "2",
                                       "corresp": "#w0005580 #c0005590 #w0005600 #c0005610 #w0005620 #c0005630 #w0005640 #p0005650"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0055",
                                       "n": "3",
                                       "corresp": "#w0005660 #c0005670 #w0005680 #p0005690 #c0005700 #w0005710 #c0005720 #w0005730 #c0005740 #w0005750 #p0005760"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "stanza",
                                       "xml:id": "PhT-015",
                                       "n": "15",
                                       "corresp": "#PhT-0056 #PhT-0057 #PhT-0058"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0056",
                                       "n": "1",
                                       "corresp": "#w0005770 #c0005780 #w0005790 #c0005800 #w0005810 #c0005820 #w0005830 #c0005840 #w0005850 #c0005860 #w0005870 #p0005880"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0057",
                                       "n": "2",
                                       "corresp": "#w0005890 #c0005900 #w0005910 #c0005920 #w0005930 #c0005940 #w0005950 #c0005960 #w0005970"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0058",
                                       "n": "3",
                                       "corresp": "#w0005980 #c0005990 #w0006000 #c0006010 #w0006020 #c0006030 #w0006040 #p0006050"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "stanza",
                                       "xml:id": "PhT-016",
                                       "n": "16",
                                       "corresp": "#PhT-0059 #PhT-0060 #PhT-0061"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0059",
                                       "n": "1",
                                       "corresp": "#w0006060 #c0006070 #w0006080 #c0006090 #w0006100 #p0006110"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0060",
                                       "n": "2",
                                       "corresp": "#w0006120 #c0006130 #w0006140 #c0006150 #w0006160 #c0006170 #w0006180 #p0006190"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0061",
                                       "n": "3",
                                       "corresp": "#w0006200 #c0006210 #w0006220 #c0006230 #w0006240 #c0006250 #w0006260 #p0006270"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "stanza",
                                       "xml:id": "PhT-017",
                                       "n": "17",
                                       "corresp": "#PhT-0062 #PhT-0063 #PhT-0064"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0062",
                                       "n": "1",
                                       "corresp": "#w0006280 #c0006290 #w0006300 #c0006310 #w0006320 #p0006330 #c0006340 #w0006350 #c0006360 #w0006370 #c0006380 #w0006390 #p0006400"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0063",
                                       "n": "2",
                                       "corresp": "#w0006410 #c0006420 #w0006430 #p0006440 #c0006450 #w0006460 #c0006470 #w0006480 #c0006490 #w0006500 #c0006510 #w0006520 #p0006530"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0064",
                                       "n": "3",
                                       "corresp": "#w0006540 #c0006550 #w0006560 #c0006570 #w0006580 #c0006590 #w0006600 #c0006610 #w0006620 #p0006630"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "stanza",
                                       "xml:id": "PhT-018",
                                       "n": "18",
                                       "corresp": "#PhT-0065 #PhT-0066 #PhT-0067"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0065",
                                       "n": "1",
                                       "corresp": "#w0006640 #c0006650 #w0006660 #c0006670 #w0006680 #c0006690 #w0006700 #c0006710 #w0006720 #c0006730 #w0006740"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0066",
                                       "n": "2",
                                       "corresp": "#w0006750 #c0006760 #w0006770 #c0006780 #w0006790 #c0006800 #w0006810 #c0006820 #w0006830 #c0006840 #w0006850 #p0006860"
                                    }
                                 },
                                 {
                                    "$": {
                                       "unit": "line",
                                       "xml:id": "PhT-0067",
                                       "n": "3",
                                       "corresp": "#w0006870 #c0006880 #w0006890 #c0006900 #w0006910 #c0006920 #w0006930 #c0006940 #w0006950 #c0006960 #w0006970 #c0006980 #w0006990 #p0007000"
                                    }
                                 }
                              ],
                              "w": [
                                 {
                                    "_": "Let",
                                    "$": {
                                       "xml:id": "w0000010",
                                       "n": "1"
                                    }
                                 },
                                 {
                                    "_": "the",
                                    "$": {
                                       "xml:id": "w0000030",
                                       "n": "1"
                                    }
                                 },
                                 {
                                    "_": "bird",
                                    "$": {
                                       "xml:id": "w0000050",
                                       "n": "1"
                                    }
                                 },
                                 {
                                    "_": "of",
                                    "$": {
                                       "xml:id": "w0000070",
                                       "n": "1"
                                    }
                                 },
                                 {
                                    "_": "loudest",
                                    "$": {
                                       "xml:id": "w0000090",
                                       "n": "1"
                                    }
                                 },
                                 {
                                    "_": "lay",
                                    "$": {
                                       "xml:id": "w0000110",
                                       "n": "1"
                                    }
                                 },
                                 {
                                    "_": "On",
                                    "$": {
                                       "xml:id": "w0000120",
                                       "n": "2"
                                    }
                                 },
                                 {
                                    "_": "the",
                                    "$": {
                                       "xml:id": "w0000140",
                                       "n": "2"
                                    }
                                 },
                                 {
                                    "_": "sole",
                                    "$": {
                                       "xml:id": "w0000160",
                                       "n": "2"
                                    }
                                 },
                                 {
                                    "_": "Arabian",
                                    "$": {
                                       "xml:id": "w0000180",
                                       "n": "2"
                                    }
                                 },
                                 {
                                    "_": "tree",
                                    "$": {
                                       "xml:id": "w0000200",
                                       "n": "2"
                                    }
                                 },
                                 {
                                    "_": "Herald",
                                    "$": {
                                       "xml:id": "w0000210",
                                       "n": "3"
                                    }
                                 },
                                 {
                                    "_": "sad",
                                    "$": {
                                       "xml:id": "w0000230",
                                       "n": "3"
                                    }
                                 },
                                 {
                                    "_": "and",
                                    "$": {
                                       "xml:id": "w0000250",
                                       "n": "3"
                                    }
                                 },
                                 {
                                    "_": "trumpet",
                                    "$": {
                                       "xml:id": "w0000270",
                                       "n": "3"
                                    }
                                 },
                                 {
                                    "_": "be",
                                    "$": {
                                       "xml:id": "w0000290",
                                       "n": "3"
                                    }
                                 },
                                 {
                                    "_": "To",
                                    "$": {
                                       "xml:id": "w0000310",
                                       "n": "4"
                                    }
                                 },
                                 {
                                    "_": "whose",
                                    "$": {
                                       "xml:id": "w0000330",
                                       "n": "4"
                                    }
                                 },
                                 {
                                    "_": "sound",
                                    "$": {
                                       "xml:id": "w0000350",
                                       "n": "4"
                                    }
                                 },
                                 {
                                    "_": "chaste",
                                    "$": {
                                       "xml:id": "w0000370",
                                       "n": "4"
                                    }
                                 },
                                 {
                                    "_": "wings",
                                    "$": {
                                       "xml:id": "w0000390",
                                       "n": "4"
                                    }
                                 },
                                 {
                                    "_": "obey",
                                    "$": {
                                       "xml:id": "w0000410",
                                       "n": "4"
                                    }
                                 },
                                 {
                                    "_": "But",
                                    "$": {
                                       "xml:id": "w0000430",
                                       "n": "5"
                                    }
                                 },
                                 {
                                    "_": "thou",
                                    "$": {
                                       "xml:id": "w0000450",
                                       "n": "5"
                                    }
                                 },
                                 {
                                    "_": "shrieking",
                                    "$": {
                                       "xml:id": "w0000470",
                                       "n": "5"
                                    }
                                 },
                                 {
                                    "_": "harbinger",
                                    "$": {
                                       "xml:id": "w0000490",
                                       "n": "5"
                                    }
                                 },
                                 {
                                    "_": "Foul",
                                    "$": {
                                       "xml:id": "w0000510",
                                       "n": "6"
                                    }
                                 },
                                 {
                                    "_": "precurrer",
                                    "$": {
                                       "xml:id": "w0000530",
                                       "n": "6"
                                    }
                                 },
                                 {
                                    "_": "of",
                                    "$": {
                                       "xml:id": "w0000550",
                                       "n": "6"
                                    }
                                 },
                                 {
                                    "_": "the",
                                    "$": {
                                       "xml:id": "w0000570",
                                       "n": "6"
                                    }
                                 },
                                 {
                                    "_": "fiend",
                                    "$": {
                                       "xml:id": "w0000590",
                                       "n": "6"
                                    }
                                 },
                                 {
                                    "_": "Augur",
                                    "$": {
                                       "xml:id": "w0000610",
                                       "n": "7"
                                    }
                                 },
                                 {
                                    "_": "of",
                                    "$": {
                                       "xml:id": "w0000630",
                                       "n": "7"
                                    }
                                 },
                                 {
                                    "_": "the",
                                    "$": {
                                       "xml:id": "w0000650",
                                       "n": "7"
                                    }
                                 },
                                 {
                                    "_": "fever’s",
                                    "$": {
                                       "xml:id": "w0000670",
                                       "n": "7"
                                    }
                                 },
                                 {
                                    "_": "end",
                                    "$": {
                                       "xml:id": "w0000690",
                                       "n": "7"
                                    }
                                 },
                                 {
                                    "_": "To",
                                    "$": {
                                       "xml:id": "w0000710",
                                       "n": "8"
                                    }
                                 },
                                 {
                                    "_": "this",
                                    "$": {
                                       "xml:id": "w0000730",
                                       "n": "8"
                                    }
                                 },
                                 {
                                    "_": "troop",
                                    "$": {
                                       "xml:id": "w0000750",
                                       "n": "8"
                                    }
                                 },
                                 {
                                    "_": "come",
                                    "$": {
                                       "xml:id": "w0000770",
                                       "n": "8"
                                    }
                                 },
                                 {
                                    "_": "thou",
                                    "$": {
                                       "xml:id": "w0000790",
                                       "n": "8"
                                    }
                                 },
                                 {
                                    "_": "not",
                                    "$": {
                                       "xml:id": "w0000810",
                                       "n": "8"
                                    }
                                 },
                                 {
                                    "_": "near",
                                    "$": {
                                       "xml:id": "w0000830",
                                       "n": "8"
                                    }
                                 },
                                 {
                                    "_": "From",
                                    "$": {
                                       "xml:id": "w0000850",
                                       "n": "9"
                                    }
                                 },
                                 {
                                    "_": "this",
                                    "$": {
                                       "xml:id": "w0000870",
                                       "n": "9"
                                    }
                                 },
                                 {
                                    "_": "session",
                                    "$": {
                                       "xml:id": "w0000890",
                                       "n": "9"
                                    }
                                 },
                                 {
                                    "_": "interdict",
                                    "$": {
                                       "xml:id": "w0000910",
                                       "n": "9"
                                    }
                                 },
                                 {
                                    "_": "Every",
                                    "$": {
                                       "xml:id": "w0000920",
                                       "n": "10"
                                    }
                                 },
                                 {
                                    "_": "fowl",
                                    "$": {
                                       "xml:id": "w0000940",
                                       "n": "10"
                                    }
                                 },
                                 {
                                    "_": "of",
                                    "$": {
                                       "xml:id": "w0000960",
                                       "n": "10"
                                    }
                                 },
                                 {
                                    "_": "tyrant",
                                    "$": {
                                       "xml:id": "w0000980",
                                       "n": "10"
                                    }
                                 },
                                 {
                                    "_": "wing",
                                    "$": {
                                       "xml:id": "w0001000",
                                       "n": "10"
                                    }
                                 },
                                 {
                                    "_": "Save",
                                    "$": {
                                       "xml:id": "w0001020",
                                       "n": "11"
                                    }
                                 },
                                 {
                                    "_": "the",
                                    "$": {
                                       "xml:id": "w0001040",
                                       "n": "11"
                                    }
                                 },
                                 {
                                    "_": "eagle",
                                    "$": {
                                       "xml:id": "w0001060",
                                       "n": "11"
                                    }
                                 },
                                 {
                                    "_": "feathered",
                                    "$": {
                                       "xml:id": "w0001090",
                                       "n": "11"
                                    }
                                 },
                                 {
                                    "_": "king",
                                    "$": {
                                       "xml:id": "w0001110",
                                       "n": "11"
                                    }
                                 },
                                 {
                                    "_": "Keep",
                                    "$": {
                                       "xml:id": "w0001130",
                                       "n": "12"
                                    }
                                 },
                                 {
                                    "_": "the",
                                    "$": {
                                       "xml:id": "w0001150",
                                       "n": "12"
                                    }
                                 },
                                 {
                                    "_": "obsequy",
                                    "$": {
                                       "xml:id": "w0001170",
                                       "n": "12"
                                    }
                                 },
                                 {
                                    "_": "so",
                                    "$": {
                                       "xml:id": "w0001190",
                                       "n": "12"
                                    }
                                 },
                                 {
                                    "_": "strict",
                                    "$": {
                                       "xml:id": "w0001210",
                                       "n": "12"
                                    }
                                 },
                                 {
                                    "_": "Let",
                                    "$": {
                                       "xml:id": "w0001230",
                                       "n": "13"
                                    }
                                 },
                                 {
                                    "_": "the",
                                    "$": {
                                       "xml:id": "w0001250",
                                       "n": "13"
                                    }
                                 },
                                 {
                                    "_": "priest",
                                    "$": {
                                       "xml:id": "w0001270",
                                       "n": "13"
                                    }
                                 },
                                 {
                                    "_": "in",
                                    "$": {
                                       "xml:id": "w0001290",
                                       "n": "13"
                                    }
                                 },
                                 {
                                    "_": "surplice",
                                    "$": {
                                       "xml:id": "w0001310",
                                       "n": "13"
                                    }
                                 },
                                 {
                                    "_": "white",
                                    "$": {
                                       "xml:id": "w0001330",
                                       "n": "13"
                                    }
                                 },
                                 {
                                    "_": "That",
                                    "$": {
                                       "xml:id": "w0001350",
                                       "n": "14"
                                    }
                                 },
                                 {
                                    "_": "defunctive",
                                    "$": {
                                       "xml:id": "w0001370",
                                       "n": "14"
                                    }
                                 },
                                 {
                                    "_": "music",
                                    "$": {
                                       "xml:id": "w0001390",
                                       "n": "14"
                                    }
                                 },
                                 {
                                    "_": "can",
                                    "$": {
                                       "xml:id": "w0001410",
                                       "n": "14"
                                    }
                                 },
                                 {
                                    "_": "Be",
                                    "$": {
                                       "xml:id": "w0001430",
                                       "n": "15"
                                    }
                                 },
                                 {
                                    "_": "the",
                                    "$": {
                                       "xml:id": "w0001450",
                                       "n": "15"
                                    }
                                 },
                                 {
                                    "_": "death-divining",
                                    "$": {
                                       "xml:id": "w0001470",
                                       "n": "15"
                                    }
                                 },
                                 {
                                    "_": "swan",
                                    "$": {
                                       "xml:id": "w0001490",
                                       "n": "15"
                                    }
                                 },
                                 {
                                    "_": "Lest",
                                    "$": {
                                       "xml:id": "w0001510",
                                       "n": "16"
                                    }
                                 },
                                 {
                                    "_": "the",
                                    "$": {
                                       "xml:id": "w0001530",
                                       "n": "16"
                                    }
                                 },
                                 {
                                    "_": "requiem",
                                    "$": {
                                       "xml:id": "w0001550",
                                       "n": "16"
                                    }
                                 },
                                 {
                                    "_": "lack",
                                    "$": {
                                       "xml:id": "w0001570",
                                       "n": "16"
                                    }
                                 },
                                 {
                                    "_": "his",
                                    "$": {
                                       "xml:id": "w0001590",
                                       "n": "16"
                                    }
                                 },
                                 {
                                    "_": "right",
                                    "$": {
                                       "xml:id": "w0001610",
                                       "n": "16"
                                    }
                                 },
                                 {
                                    "_": "And",
                                    "$": {
                                       "xml:id": "w0001630",
                                       "n": "17"
                                    }
                                 },
                                 {
                                    "_": "thou",
                                    "$": {
                                       "xml:id": "w0001650",
                                       "n": "17"
                                    }
                                 },
                                 {
                                    "_": "treble-dated",
                                    "$": {
                                       "xml:id": "w0001670",
                                       "n": "17"
                                    }
                                 },
                                 {
                                    "_": "crow",
                                    "$": {
                                       "xml:id": "w0001690",
                                       "n": "17"
                                    }
                                 },
                                 {
                                    "_": "That",
                                    "$": {
                                       "xml:id": "w0001710",
                                       "n": "18"
                                    }
                                 },
                                 {
                                    "_": "thy",
                                    "$": {
                                       "xml:id": "w0001730",
                                       "n": "18"
                                    }
                                 },
                                 {
                                    "_": "sable",
                                    "$": {
                                       "xml:id": "w0001750",
                                       "n": "18"
                                    }
                                 },
                                 {
                                    "_": "gender",
                                    "$": {
                                       "xml:id": "w0001770",
                                       "n": "18"
                                    }
                                 },
                                 {
                                    "_": "mak’st",
                                    "$": {
                                       "xml:id": "w0001790",
                                       "n": "18"
                                    }
                                 },
                                 {
                                    "_": "With",
                                    "$": {
                                       "xml:id": "w0001800",
                                       "n": "19"
                                    }
                                 },
                                 {
                                    "_": "the",
                                    "$": {
                                       "xml:id": "w0001820",
                                       "n": "19"
                                    }
                                 },
                                 {
                                    "_": "breath",
                                    "$": {
                                       "xml:id": "w0001840",
                                       "n": "19"
                                    }
                                 },
                                 {
                                    "_": "thou",
                                    "$": {
                                       "xml:id": "w0001860",
                                       "n": "19"
                                    }
                                 },
                                 {
                                    "_": "giv’st",
                                    "$": {
                                       "xml:id": "w0001880",
                                       "n": "19"
                                    }
                                 },
                                 {
                                    "_": "and",
                                    "$": {
                                       "xml:id": "w0001900",
                                       "n": "19"
                                    }
                                 },
                                 {
                                    "_": "tak’st",
                                    "$": {
                                       "xml:id": "w0001920",
                                       "n": "19"
                                    }
                                 },
                                 {
                                    "_": "’Mongst",
                                    "$": {
                                       "xml:id": "w0001940",
                                       "n": "20"
                                    }
                                 },
                                 {
                                    "_": "our",
                                    "$": {
                                       "xml:id": "w0001960",
                                       "n": "20"
                                    }
                                 },
                                 {
                                    "_": "mourners",
                                    "$": {
                                       "xml:id": "w0001980",
                                       "n": "20"
                                    }
                                 },
                                 {
                                    "_": "shalt",
                                    "$": {
                                       "xml:id": "w0002000",
                                       "n": "20"
                                    }
                                 },
                                 {
                                    "_": "thou",
                                    "$": {
                                       "xml:id": "w0002020",
                                       "n": "20"
                                    }
                                 },
                                 {
                                    "_": "go",
                                    "$": {
                                       "xml:id": "w0002040",
                                       "n": "20"
                                    }
                                 },
                                 {
                                    "_": "Here",
                                    "$": {
                                       "xml:id": "w0002060",
                                       "n": "21"
                                    }
                                 },
                                 {
                                    "_": "the",
                                    "$": {
                                       "xml:id": "w0002080",
                                       "n": "21"
                                    }
                                 },
                                 {
                                    "_": "anthem",
                                    "$": {
                                       "xml:id": "w0002100",
                                       "n": "21"
                                    }
                                 },
                                 {
                                    "_": "doth",
                                    "$": {
                                       "xml:id": "w0002120",
                                       "n": "21"
                                    }
                                 },
                                 {
                                    "_": "commence",
                                    "$": {
                                       "xml:id": "w0002140",
                                       "n": "21"
                                    }
                                 },
                                 {
                                    "_": "Love",
                                    "$": {
                                       "xml:id": "w0002160",
                                       "n": "22"
                                    }
                                 },
                                 {
                                    "_": "and",
                                    "$": {
                                       "xml:id": "w0002180",
                                       "n": "22"
                                    }
                                 },
                                 {
                                    "_": "constancy",
                                    "$": {
                                       "xml:id": "w0002200",
                                       "n": "22"
                                    }
                                 },
                                 {
                                    "_": "is",
                                    "$": {
                                       "xml:id": "w0002220",
                                       "n": "22"
                                    }
                                 },
                                 {
                                    "_": "dead",
                                    "$": {
                                       "xml:id": "w0002240",
                                       "n": "22"
                                    }
                                 },
                                 {
                                    "_": "Phoenix",
                                    "$": {
                                       "xml:id": "w0002260",
                                       "n": "23"
                                    }
                                 },
                                 {
                                    "_": "and",
                                    "$": {
                                       "xml:id": "w0002280",
                                       "n": "23"
                                    }
                                 },
                                 {
                                    "_": "the",
                                    "$": {
                                       "xml:id": "w0002300",
                                       "n": "23"
                                    }
                                 },
                                 {
                                    "_": "turtle",
                                    "$": {
                                       "xml:id": "w0002320",
                                       "n": "23"
                                    }
                                 },
                                 {
                                    "_": "fled",
                                    "$": {
                                       "xml:id": "w0002340",
                                       "n": "23"
                                    }
                                 },
                                 {
                                    "_": "In",
                                    "$": {
                                       "xml:id": "w0002350",
                                       "n": "24"
                                    }
                                 },
                                 {
                                    "_": "a",
                                    "$": {
                                       "xml:id": "w0002370",
                                       "n": "24"
                                    }
                                 },
                                 {
                                    "_": "mutual",
                                    "$": {
                                       "xml:id": "w0002390",
                                       "n": "24"
                                    }
                                 },
                                 {
                                    "_": "flame",
                                    "$": {
                                       "xml:id": "w0002410",
                                       "n": "24"
                                    }
                                 },
                                 {
                                    "_": "from",
                                    "$": {
                                       "xml:id": "w0002430",
                                       "n": "24"
                                    }
                                 },
                                 {
                                    "_": "hence",
                                    "$": {
                                       "xml:id": "w0002450",
                                       "n": "24"
                                    }
                                 },
                                 {
                                    "_": "So",
                                    "$": {
                                       "xml:id": "w0002470",
                                       "n": "25"
                                    }
                                 },
                                 {
                                    "_": "they",
                                    "$": {
                                       "xml:id": "w0002490",
                                       "n": "25"
                                    }
                                 },
                                 {
                                    "_": "loved",
                                    "$": {
                                       "xml:id": "w0002510",
                                       "n": "25"
                                    }
                                 },
                                 {
                                    "_": "as",
                                    "$": {
                                       "xml:id": "w0002540",
                                       "n": "25"
                                    }
                                 },
                                 {
                                    "_": "love",
                                    "$": {
                                       "xml:id": "w0002560",
                                       "n": "25"
                                    }
                                 },
                                 {
                                    "_": "in",
                                    "$": {
                                       "xml:id": "w0002580",
                                       "n": "25"
                                    }
                                 },
                                 {
                                    "_": "twain",
                                    "$": {
                                       "xml:id": "w0002600",
                                       "n": "25"
                                    }
                                 },
                                 {
                                    "_": "Had",
                                    "$": {
                                       "xml:id": "w0002610",
                                       "n": "26"
                                    }
                                 },
                                 {
                                    "_": "the",
                                    "$": {
                                       "xml:id": "w0002630",
                                       "n": "26"
                                    }
                                 },
                                 {
                                    "_": "essence",
                                    "$": {
                                       "xml:id": "w0002650",
                                       "n": "26"
                                    }
                                 },
                                 {
                                    "_": "but",
                                    "$": {
                                       "xml:id": "w0002670",
                                       "n": "26"
                                    }
                                 },
                                 {
                                    "_": "in",
                                    "$": {
                                       "xml:id": "w0002690",
                                       "n": "26"
                                    }
                                 },
                                 {
                                    "_": "one",
                                    "$": {
                                       "xml:id": "w0002710",
                                       "n": "26"
                                    }
                                 },
                                 {
                                    "_": "Two",
                                    "$": {
                                       "xml:id": "w0002730",
                                       "n": "27"
                                    }
                                 },
                                 {
                                    "_": "distincts",
                                    "$": {
                                       "xml:id": "w0002750",
                                       "n": "27"
                                    }
                                 },
                                 {
                                    "_": "division",
                                    "$": {
                                       "xml:id": "w0002780",
                                       "n": "27"
                                    }
                                 },
                                 {
                                    "_": "none",
                                    "$": {
                                       "xml:id": "w0002800",
                                       "n": "27"
                                    }
                                 },
                                 {
                                    "_": "Number",
                                    "$": {
                                       "xml:id": "w0002820",
                                       "n": "28"
                                    }
                                 },
                                 {
                                    "_": "there",
                                    "$": {
                                       "xml:id": "w0002840",
                                       "n": "28"
                                    }
                                 },
                                 {
                                    "_": "in",
                                    "$": {
                                       "xml:id": "w0002860",
                                       "n": "28"
                                    }
                                 },
                                 {
                                    "_": "love",
                                    "$": {
                                       "xml:id": "w0002880",
                                       "n": "28"
                                    }
                                 },
                                 {
                                    "_": "was",
                                    "$": {
                                       "xml:id": "w0002900",
                                       "n": "28"
                                    }
                                 },
                                 {
                                    "_": "slain",
                                    "$": {
                                       "xml:id": "w0002920",
                                       "n": "28"
                                    }
                                 },
                                 {
                                    "_": "Hearts",
                                    "$": {
                                       "xml:id": "w0002940",
                                       "n": "29"
                                    }
                                 },
                                 {
                                    "_": "remote",
                                    "$": {
                                       "xml:id": "w0002960",
                                       "n": "29"
                                    }
                                 },
                                 {
                                    "_": "yet",
                                    "$": {
                                       "xml:id": "w0002980",
                                       "n": "29"
                                    }
                                 },
                                 {
                                    "_": "not",
                                    "$": {
                                       "xml:id": "w0003000",
                                       "n": "29"
                                    }
                                 },
                                 {
                                    "_": "asunder",
                                    "$": {
                                       "xml:id": "w0003020",
                                       "n": "29"
                                    }
                                 },
                                 {
                                    "_": "Distance",
                                    "$": {
                                       "xml:id": "w0003040",
                                       "n": "30"
                                    }
                                 },
                                 {
                                    "_": "and",
                                    "$": {
                                       "xml:id": "w0003060",
                                       "n": "30"
                                    }
                                 },
                                 {
                                    "_": "no",
                                    "$": {
                                       "xml:id": "w0003080",
                                       "n": "30"
                                    }
                                 },
                                 {
                                    "_": "space",
                                    "$": {
                                       "xml:id": "w0003100",
                                       "n": "30"
                                    }
                                 },
                                 {
                                    "_": "was",
                                    "$": {
                                       "xml:id": "w0003120",
                                       "n": "30"
                                    }
                                 },
                                 {
                                    "_": "seen",
                                    "$": {
                                       "xml:id": "w0003140",
                                       "n": "30"
                                    }
                                 },
                                 {
                                    "_": "’Twixt",
                                    "$": {
                                       "xml:id": "w0003150",
                                       "n": "31"
                                    }
                                 },
                                 {
                                    "_": "this",
                                    "$": {
                                       "xml:id": "w0003170",
                                       "n": "31"
                                    }
                                 },
                                 {
                                    "_": "turtle",
                                    "$": {
                                       "xml:id": "w0003190",
                                       "n": "31"
                                    }
                                 },
                                 {
                                    "_": "and",
                                    "$": {
                                       "xml:id": "w0003210",
                                       "n": "31"
                                    }
                                 },
                                 {
                                    "_": "his",
                                    "$": {
                                       "xml:id": "w0003230",
                                       "n": "31"
                                    }
                                 },
                                 {
                                    "_": "queen",
                                    "$": {
                                       "xml:id": "w0003250",
                                       "n": "31"
                                    }
                                 },
                                 {
                                    "_": "But",
                                    "$": {
                                       "xml:id": "w0003270",
                                       "n": "32"
                                    }
                                 },
                                 {
                                    "_": "in",
                                    "$": {
                                       "xml:id": "w0003290",
                                       "n": "32"
                                    }
                                 },
                                 {
                                    "_": "them",
                                    "$": {
                                       "xml:id": "w0003310",
                                       "n": "32"
                                    }
                                 },
                                 {
                                    "_": "it",
                                    "$": {
                                       "xml:id": "w0003330",
                                       "n": "32"
                                    }
                                 },
                                 {
                                    "_": "were",
                                    "$": {
                                       "xml:id": "w0003350",
                                       "n": "32"
                                    }
                                 },
                                 {
                                    "_": "a",
                                    "$": {
                                       "xml:id": "w0003370",
                                       "n": "32"
                                    }
                                 },
                                 {
                                    "_": "wonder",
                                    "$": {
                                       "xml:id": "w0003390",
                                       "n": "32"
                                    }
                                 },
                                 {
                                    "_": "So",
                                    "$": {
                                       "xml:id": "w0003410",
                                       "n": "33"
                                    }
                                 },
                                 {
                                    "_": "between",
                                    "$": {
                                       "xml:id": "w0003430",
                                       "n": "33"
                                    }
                                 },
                                 {
                                    "_": "them",
                                    "$": {
                                       "xml:id": "w0003450",
                                       "n": "33"
                                    }
                                 },
                                 {
                                    "_": "love",
                                    "$": {
                                       "xml:id": "w0003470",
                                       "n": "33"
                                    }
                                 },
                                 {
                                    "_": "did",
                                    "$": {
                                       "xml:id": "w0003490",
                                       "n": "33"
                                    }
                                 },
                                 {
                                    "_": "shine",
                                    "$": {
                                       "xml:id": "w0003510",
                                       "n": "33"
                                    }
                                 },
                                 {
                                    "_": "That",
                                    "$": {
                                       "xml:id": "w0003520",
                                       "n": "34"
                                    }
                                 },
                                 {
                                    "_": "the",
                                    "$": {
                                       "xml:id": "w0003540",
                                       "n": "34"
                                    }
                                 },
                                 {
                                    "_": "turtle",
                                    "$": {
                                       "xml:id": "w0003560",
                                       "n": "34"
                                    }
                                 },
                                 {
                                    "_": "saw",
                                    "$": {
                                       "xml:id": "w0003580",
                                       "n": "34"
                                    }
                                 },
                                 {
                                    "_": "his",
                                    "$": {
                                       "xml:id": "w0003600",
                                       "n": "34"
                                    }
                                 },
                                 {
                                    "_": "right",
                                    "$": {
                                       "xml:id": "w0003620",
                                       "n": "34"
                                    }
                                 },
                                 {
                                    "_": "Flaming",
                                    "$": {
                                       "xml:id": "w0003630",
                                       "n": "35"
                                    }
                                 },
                                 {
                                    "_": "in",
                                    "$": {
                                       "xml:id": "w0003650",
                                       "n": "35"
                                    }
                                 },
                                 {
                                    "_": "the",
                                    "$": {
                                       "xml:id": "w0003670",
                                       "n": "35"
                                    }
                                 },
                                 {
                                    "_": "phoenix’",
                                    "$": {
                                       "xml:id": "w0003690",
                                       "n": "35"
                                    }
                                 },
                                 {
                                    "_": "sight",
                                    "$": {
                                       "xml:id": "w0003710",
                                       "n": "35"
                                    }
                                 },
                                 {
                                    "_": "Either",
                                    "$": {
                                       "xml:id": "w0003730",
                                       "n": "36"
                                    }
                                 },
                                 {
                                    "_": "was",
                                    "$": {
                                       "xml:id": "w0003750",
                                       "n": "36"
                                    }
                                 },
                                 {
                                    "_": "the",
                                    "$": {
                                       "xml:id": "w0003770",
                                       "n": "36"
                                    }
                                 },
                                 {
                                    "_": "other’s",
                                    "$": {
                                       "xml:id": "w0003790",
                                       "n": "36"
                                    }
                                 },
                                 {
                                    "_": "mine",
                                    "$": {
                                       "xml:id": "w0003810",
                                       "n": "36"
                                    }
                                 },
                                 {
                                    "_": "Property",
                                    "$": {
                                       "xml:id": "w0003830",
                                       "n": "37"
                                    }
                                 },
                                 {
                                    "_": "was",
                                    "$": {
                                       "xml:id": "w0003850",
                                       "n": "37"
                                    }
                                 },
                                 {
                                    "_": "thus",
                                    "$": {
                                       "xml:id": "w0003870",
                                       "n": "37"
                                    }
                                 },
                                 {
                                    "_": "appalled",
                                    "$": {
                                       "xml:id": "w0003890",
                                       "n": "37"
                                    }
                                 },
                                 {
                                    "_": "That",
                                    "$": {
                                       "xml:id": "w0003900",
                                       "n": "38"
                                    }
                                 },
                                 {
                                    "_": "the",
                                    "$": {
                                       "xml:id": "w0003920",
                                       "n": "38"
                                    }
                                 },
                                 {
                                    "_": "self",
                                    "$": {
                                       "xml:id": "w0003940",
                                       "n": "38"
                                    }
                                 },
                                 {
                                    "_": "was",
                                    "$": {
                                       "xml:id": "w0003960",
                                       "n": "38"
                                    }
                                 },
                                 {
                                    "_": "not",
                                    "$": {
                                       "xml:id": "w0003980",
                                       "n": "38"
                                    }
                                 },
                                 {
                                    "_": "the",
                                    "$": {
                                       "xml:id": "w0004000",
                                       "n": "38"
                                    }
                                 },
                                 {
                                    "_": "same",
                                    "$": {
                                       "xml:id": "w0004020",
                                       "n": "38"
                                    }
                                 },
                                 {
                                    "_": "Single",
                                    "$": {
                                       "xml:id": "w0004040",
                                       "n": "39"
                                    }
                                 },
                                 {
                                    "_": "nature’s",
                                    "$": {
                                       "xml:id": "w0004060",
                                       "n": "39"
                                    }
                                 },
                                 {
                                    "_": "double",
                                    "$": {
                                       "xml:id": "w0004080",
                                       "n": "39"
                                    }
                                 },
                                 {
                                    "_": "name",
                                    "$": {
                                       "xml:id": "w0004100",
                                       "n": "39"
                                    }
                                 },
                                 {
                                    "_": "Neither",
                                    "$": {
                                       "xml:id": "w0004110",
                                       "n": "40"
                                    }
                                 },
                                 {
                                    "_": "two",
                                    "$": {
                                       "xml:id": "w0004130",
                                       "n": "40"
                                    }
                                 },
                                 {
                                    "_": "nor",
                                    "$": {
                                       "xml:id": "w0004150",
                                       "n": "40"
                                    }
                                 },
                                 {
                                    "_": "one",
                                    "$": {
                                       "xml:id": "w0004170",
                                       "n": "40"
                                    }
                                 },
                                 {
                                    "_": "was",
                                    "$": {
                                       "xml:id": "w0004190",
                                       "n": "40"
                                    }
                                 },
                                 {
                                    "_": "called",
                                    "$": {
                                       "xml:id": "w0004210",
                                       "n": "40"
                                    }
                                 },
                                 {
                                    "_": "Reason",
                                    "$": {
                                       "xml:id": "w0004230",
                                       "n": "41"
                                    }
                                 },
                                 {
                                    "_": "in",
                                    "$": {
                                       "xml:id": "w0004260",
                                       "n": "41"
                                    }
                                 },
                                 {
                                    "_": "itself",
                                    "$": {
                                       "xml:id": "w0004280",
                                       "n": "41"
                                    }
                                 },
                                 {
                                    "_": "confounded",
                                    "$": {
                                       "xml:id": "w0004300",
                                       "n": "41"
                                    }
                                 },
                                 {
                                    "_": "Saw",
                                    "$": {
                                       "xml:id": "w0004320",
                                       "n": "42"
                                    }
                                 },
                                 {
                                    "_": "division",
                                    "$": {
                                       "xml:id": "w0004340",
                                       "n": "42"
                                    }
                                 },
                                 {
                                    "_": "grow",
                                    "$": {
                                       "xml:id": "w0004360",
                                       "n": "42"
                                    }
                                 },
                                 {
                                    "_": "together",
                                    "$": {
                                       "xml:id": "w0004380",
                                       "n": "42"
                                    }
                                 },
                                 {
                                    "_": "To",
                                    "$": {
                                       "xml:id": "w0004400",
                                       "n": "43"
                                    }
                                 },
                                 {
                                    "_": "themselves",
                                    "$": {
                                       "xml:id": "w0004420",
                                       "n": "43"
                                    }
                                 },
                                 {
                                    "_": "yet",
                                    "$": {
                                       "xml:id": "w0004440",
                                       "n": "43"
                                    }
                                 },
                                 {
                                    "_": "either",
                                    "$": {
                                       "xml:id": "w0004460",
                                       "n": "43"
                                    }
                                 },
                                 {
                                    "_": "neither",
                                    "$": {
                                       "xml:id": "w0004480",
                                       "n": "43"
                                    }
                                 },
                                 {
                                    "_": "Simple",
                                    "$": {
                                       "xml:id": "w0004500",
                                       "n": "44"
                                    }
                                 },
                                 {
                                    "_": "were",
                                    "$": {
                                       "xml:id": "w0004520",
                                       "n": "44"
                                    }
                                 },
                                 {
                                    "_": "so",
                                    "$": {
                                       "xml:id": "w0004540",
                                       "n": "44"
                                    }
                                 },
                                 {
                                    "_": "well",
                                    "$": {
                                       "xml:id": "w0004560",
                                       "n": "44"
                                    }
                                 },
                                 {
                                    "_": "compounded",
                                    "$": {
                                       "xml:id": "w0004580",
                                       "n": "44"
                                    }
                                 },
                                 {
                                    "_": "That",
                                    "$": {
                                       "xml:id": "w0004590",
                                       "n": "45"
                                    }
                                 },
                                 {
                                    "_": "it",
                                    "$": {
                                       "xml:id": "w0004610",
                                       "n": "45"
                                    }
                                 },
                                 {
                                    "_": "cried",
                                    "$": {
                                       "xml:id": "w0004630",
                                       "n": "45"
                                    }
                                 },
                                 {
                                    "_": "Whereupon",
                                    "$": {
                                       "xml:id": "w0005040",
                                       "n": "49"
                                    }
                                 },
                                 {
                                    "_": "it",
                                    "$": {
                                       "xml:id": "w0005060",
                                       "n": "49"
                                    }
                                 },
                                 {
                                    "_": "made",
                                    "$": {
                                       "xml:id": "w0005080",
                                       "n": "49"
                                    }
                                 },
                                 {
                                    "_": "this",
                                    "$": {
                                       "xml:id": "w0005100",
                                       "n": "49"
                                    }
                                 },
                                 {
                                    "_": "threne",
                                    "$": {
                                       "xml:id": "w0005120",
                                       "n": "49"
                                    }
                                 },
                                 {
                                    "_": "To",
                                    "$": {
                                       "xml:id": "w0005130",
                                       "n": "50"
                                    }
                                 },
                                 {
                                    "_": "the",
                                    "$": {
                                       "xml:id": "w0005150",
                                       "n": "50"
                                    }
                                 },
                                 {
                                    "_": "phoenix",
                                    "$": {
                                       "xml:id": "w0005170",
                                       "n": "50"
                                    }
                                 },
                                 {
                                    "_": "and",
                                    "$": {
                                       "xml:id": "w0005190",
                                       "n": "50"
                                    }
                                 },
                                 {
                                    "_": "the",
                                    "$": {
                                       "xml:id": "w0005210",
                                       "n": "50"
                                    }
                                 },
                                 {
                                    "_": "dove",
                                    "$": {
                                       "xml:id": "w0005230",
                                       "n": "50"
                                    }
                                 },
                                 {
                                    "_": "Co-supremes",
                                    "$": {
                                       "xml:id": "w0005250",
                                       "n": "51"
                                    }
                                 },
                                 {
                                    "_": "and",
                                    "$": {
                                       "xml:id": "w0005270",
                                       "n": "51"
                                    }
                                 },
                                 {
                                    "_": "stars",
                                    "$": {
                                       "xml:id": "w0005290",
                                       "n": "51"
                                    }
                                 },
                                 {
                                    "_": "of",
                                    "$": {
                                       "xml:id": "w0005310",
                                       "n": "51"
                                    }
                                 },
                                 {
                                    "_": "love",
                                    "$": {
                                       "xml:id": "w0005330",
                                       "n": "51"
                                    }
                                 },
                                 {
                                    "_": "As",
                                    "$": {
                                       "xml:id": "w0005350",
                                       "n": "52"
                                    }
                                 },
                                 {
                                    "_": "chorus",
                                    "$": {
                                       "xml:id": "w0005370",
                                       "n": "52"
                                    }
                                 },
                                 {
                                    "_": "to",
                                    "$": {
                                       "xml:id": "w0005390",
                                       "n": "52"
                                    }
                                 },
                                 {
                                    "_": "their",
                                    "$": {
                                       "xml:id": "w0005410",
                                       "n": "52"
                                    }
                                 },
                                 {
                                    "_": "tragic",
                                    "$": {
                                       "xml:id": "w0005430",
                                       "n": "52"
                                    }
                                 },
                                 {
                                    "_": "scene",
                                    "$": {
                                       "xml:id": "w0005450",
                                       "n": "52"
                                    }
                                 },
                                 {
                                    "_": "Beauty",
                                    "$": {
                                       "xml:id": "w0005480",
                                       "n": "53"
                                    }
                                 },
                                 {
                                    "_": "truth",
                                    "$": {
                                       "xml:id": "w0005510",
                                       "n": "53"
                                    }
                                 },
                                 {
                                    "_": "and",
                                    "$": {
                                       "xml:id": "w0005540",
                                       "n": "53"
                                    }
                                 },
                                 {
                                    "_": "rarity",
                                    "$": {
                                       "xml:id": "w0005560",
                                       "n": "53"
                                    }
                                 },
                                 {
                                    "_": "Grace",
                                    "$": {
                                       "xml:id": "w0005580",
                                       "n": "54"
                                    }
                                 },
                                 {
                                    "_": "in",
                                    "$": {
                                       "xml:id": "w0005600",
                                       "n": "54"
                                    }
                                 },
                                 {
                                    "_": "all",
                                    "$": {
                                       "xml:id": "w0005620",
                                       "n": "54"
                                    }
                                 },
                                 {
                                    "_": "simplicity",
                                    "$": {
                                       "xml:id": "w0005640",
                                       "n": "54"
                                    }
                                 },
                                 {
                                    "_": "Here",
                                    "$": {
                                       "xml:id": "w0005660",
                                       "n": "55"
                                    }
                                 },
                                 {
                                    "_": "enclosed",
                                    "$": {
                                       "xml:id": "w0005680",
                                       "n": "55"
                                    }
                                 },
                                 {
                                    "_": "in",
                                    "$": {
                                       "xml:id": "w0005710",
                                       "n": "55"
                                    }
                                 },
                                 {
                                    "_": "cinders",
                                    "$": {
                                       "xml:id": "w0005730",
                                       "n": "55"
                                    }
                                 },
                                 {
                                    "_": "lie",
                                    "$": {
                                       "xml:id": "w0005750",
                                       "n": "55"
                                    }
                                 },
                                 {
                                    "_": "Death",
                                    "$": {
                                       "xml:id": "w0005770",
                                       "n": "56"
                                    }
                                 },
                                 {
                                    "_": "is",
                                    "$": {
                                       "xml:id": "w0005790",
                                       "n": "56"
                                    }
                                 },
                                 {
                                    "_": "now",
                                    "$": {
                                       "xml:id": "w0005810",
                                       "n": "56"
                                    }
                                 },
                                 {
                                    "_": "the",
                                    "$": {
                                       "xml:id": "w0005830",
                                       "n": "56"
                                    }
                                 },
                                 {
                                    "_": "phoenix’",
                                    "$": {
                                       "xml:id": "w0005850",
                                       "n": "56"
                                    }
                                 },
                                 {
                                    "_": "nest",
                                    "$": {
                                       "xml:id": "w0005870",
                                       "n": "56"
                                    }
                                 },
                                 {
                                    "_": "And",
                                    "$": {
                                       "xml:id": "w0005890",
                                       "n": "57"
                                    }
                                 },
                                 {
                                    "_": "the",
                                    "$": {
                                       "xml:id": "w0005910",
                                       "n": "57"
                                    }
                                 },
                                 {
                                    "_": "turtle’s",
                                    "$": {
                                       "xml:id": "w0005930",
                                       "n": "57"
                                    }
                                 },
                                 {
                                    "_": "loyal",
                                    "$": {
                                       "xml:id": "w0005950",
                                       "n": "57"
                                    }
                                 },
                                 {
                                    "_": "breast",
                                    "$": {
                                       "xml:id": "w0005970",
                                       "n": "57"
                                    }
                                 },
                                 {
                                    "_": "To",
                                    "$": {
                                       "xml:id": "w0005980",
                                       "n": "58"
                                    }
                                 },
                                 {
                                    "_": "eternity",
                                    "$": {
                                       "xml:id": "w0006000",
                                       "n": "58"
                                    }
                                 },
                                 {
                                    "_": "doth",
                                    "$": {
                                       "xml:id": "w0006020",
                                       "n": "58"
                                    }
                                 },
                                 {
                                    "_": "rest",
                                    "$": {
                                       "xml:id": "w0006040",
                                       "n": "58"
                                    }
                                 },
                                 {
                                    "_": "Leaving",
                                    "$": {
                                       "xml:id": "w0006060",
                                       "n": "59"
                                    }
                                 },
                                 {
                                    "_": "no",
                                    "$": {
                                       "xml:id": "w0006080",
                                       "n": "59"
                                    }
                                 },
                                 {
                                    "_": "posterity",
                                    "$": {
                                       "xml:id": "w0006100",
                                       "n": "59"
                                    }
                                 },
                                 {
                                    "_": "’Twas",
                                    "$": {
                                       "xml:id": "w0006120",
                                       "n": "60"
                                    }
                                 },
                                 {
                                    "_": "not",
                                    "$": {
                                       "xml:id": "w0006140",
                                       "n": "60"
                                    }
                                 },
                                 {
                                    "_": "their",
                                    "$": {
                                       "xml:id": "w0006160",
                                       "n": "60"
                                    }
                                 },
                                 {
                                    "_": "infirmity",
                                    "$": {
                                       "xml:id": "w0006180",
                                       "n": "60"
                                    }
                                 },
                                 {
                                    "_": "It",
                                    "$": {
                                       "xml:id": "w0006200",
                                       "n": "61"
                                    }
                                 },
                                 {
                                    "_": "was",
                                    "$": {
                                       "xml:id": "w0006220",
                                       "n": "61"
                                    }
                                 },
                                 {
                                    "_": "married",
                                    "$": {
                                       "xml:id": "w0006240",
                                       "n": "61"
                                    }
                                 },
                                 {
                                    "_": "chastity",
                                    "$": {
                                       "xml:id": "w0006260",
                                       "n": "61"
                                    }
                                 },
                                 {
                                    "_": "Truth",
                                    "$": {
                                       "xml:id": "w0006280",
                                       "n": "62"
                                    }
                                 },
                                 {
                                    "_": "may",
                                    "$": {
                                       "xml:id": "w0006300",
                                       "n": "62"
                                    }
                                 },
                                 {
                                    "_": "seem",
                                    "$": {
                                       "xml:id": "w0006320",
                                       "n": "62"
                                    }
                                 },
                                 {
                                    "_": "but",
                                    "$": {
                                       "xml:id": "w0006350",
                                       "n": "62"
                                    }
                                 },
                                 {
                                    "_": "cannot",
                                    "$": {
                                       "xml:id": "w0006370",
                                       "n": "62"
                                    }
                                 },
                                 {
                                    "_": "be",
                                    "$": {
                                       "xml:id": "w0006390",
                                       "n": "62"
                                    }
                                 },
                                 {
                                    "_": "Beauty",
                                    "$": {
                                       "xml:id": "w0006410",
                                       "n": "63"
                                    }
                                 },
                                 {
                                    "_": "brag",
                                    "$": {
                                       "xml:id": "w0006430",
                                       "n": "63"
                                    }
                                 },
                                 {
                                    "_": "but",
                                    "$": {
                                       "xml:id": "w0006460",
                                       "n": "63"
                                    }
                                 },
                                 {
                                    "_": "’tis",
                                    "$": {
                                       "xml:id": "w0006480",
                                       "n": "63"
                                    }
                                 },
                                 {
                                    "_": "not",
                                    "$": {
                                       "xml:id": "w0006500",
                                       "n": "63"
                                    }
                                 },
                                 {
                                    "_": "she",
                                    "$": {
                                       "xml:id": "w0006520",
                                       "n": "63"
                                    }
                                 },
                                 {
                                    "_": "Truth",
                                    "$": {
                                       "xml:id": "w0006540",
                                       "n": "64"
                                    }
                                 },
                                 {
                                    "_": "and",
                                    "$": {
                                       "xml:id": "w0006560",
                                       "n": "64"
                                    }
                                 },
                                 {
                                    "_": "beauty",
                                    "$": {
                                       "xml:id": "w0006580",
                                       "n": "64"
                                    }
                                 },
                                 {
                                    "_": "buried",
                                    "$": {
                                       "xml:id": "w0006600",
                                       "n": "64"
                                    }
                                 },
                                 {
                                    "_": "be",
                                    "$": {
                                       "xml:id": "w0006620",
                                       "n": "64"
                                    }
                                 },
                                 {
                                    "_": "To",
                                    "$": {
                                       "xml:id": "w0006640",
                                       "n": "65"
                                    }
                                 },
                                 {
                                    "_": "this",
                                    "$": {
                                       "xml:id": "w0006660",
                                       "n": "65"
                                    }
                                 },
                                 {
                                    "_": "urn",
                                    "$": {
                                       "xml:id": "w0006680",
                                       "n": "65"
                                    }
                                 },
                                 {
                                    "_": "let",
                                    "$": {
                                       "xml:id": "w0006700",
                                       "n": "65"
                                    }
                                 },
                                 {
                                    "_": "those",
                                    "$": {
                                       "xml:id": "w0006720",
                                       "n": "65"
                                    }
                                 },
                                 {
                                    "_": "repair",
                                    "$": {
                                       "xml:id": "w0006740",
                                       "n": "65"
                                    }
                                 },
                                 {
                                    "_": "That",
                                    "$": {
                                       "xml:id": "w0006750",
                                       "n": "66"
                                    }
                                 },
                                 {
                                    "_": "are",
                                    "$": {
                                       "xml:id": "w0006770",
                                       "n": "66"
                                    }
                                 },
                                 {
                                    "_": "either",
                                    "$": {
                                       "xml:id": "w0006790",
                                       "n": "66"
                                    }
                                 },
                                 {
                                    "_": "true",
                                    "$": {
                                       "xml:id": "w0006810",
                                       "n": "66"
                                    }
                                 },
                                 {
                                    "_": "or",
                                    "$": {
                                       "xml:id": "w0006830",
                                       "n": "66"
                                    }
                                 },
                                 {
                                    "_": "fair",
                                    "$": {
                                       "xml:id": "w0006850",
                                       "n": "66"
                                    }
                                 },
                                 {
                                    "_": "For",
                                    "$": {
                                       "xml:id": "w0006870",
                                       "n": "67"
                                    }
                                 },
                                 {
                                    "_": "these",
                                    "$": {
                                       "xml:id": "w0006890",
                                       "n": "67"
                                    }
                                 },
                                 {
                                    "_": "dead",
                                    "$": {
                                       "xml:id": "w0006910",
                                       "n": "67"
                                    }
                                 },
                                 {
                                    "_": "birds",
                                    "$": {
                                       "xml:id": "w0006930",
                                       "n": "67"
                                    }
                                 },
                                 {
                                    "_": "sigh",
                                    "$": {
                                       "xml:id": "w0006950",
                                       "n": "67"
                                    }
                                 },
                                 {
                                    "_": "a",
                                    "$": {
                                       "xml:id": "w0006970",
                                       "n": "67"
                                    }
                                 },
                                 {
                                    "_": "prayer",
                                    "$": {
                                       "xml:id": "w0006990",
                                       "n": "67"
                                    }
                                 }
                              ],
                              "c": [
                                 {
                                    "$": {
                                       "xml:id": "c0000020",
                                       "n": "1"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000040",
                                       "n": "1"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000060",
                                       "n": "1"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000080",
                                       "n": "1"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000100",
                                       "n": "1"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000130",
                                       "n": "2"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000150",
                                       "n": "2"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000170",
                                       "n": "2"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000190",
                                       "n": "2"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000220",
                                       "n": "3"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000240",
                                       "n": "3"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000260",
                                       "n": "3"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000280",
                                       "n": "3"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000320",
                                       "n": "4"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000340",
                                       "n": "4"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000360",
                                       "n": "4"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000380",
                                       "n": "4"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000400",
                                       "n": "4"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000440",
                                       "n": "5"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000460",
                                       "n": "5"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000480",
                                       "n": "5"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000520",
                                       "n": "6"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000540",
                                       "n": "6"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000560",
                                       "n": "6"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000580",
                                       "n": "6"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000620",
                                       "n": "7"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000640",
                                       "n": "7"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000660",
                                       "n": "7"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000680",
                                       "n": "7"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000720",
                                       "n": "8"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000740",
                                       "n": "8"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000760",
                                       "n": "8"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000780",
                                       "n": "8"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000800",
                                       "n": "8"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000820",
                                       "n": "8"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000860",
                                       "n": "9"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000880",
                                       "n": "9"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000900",
                                       "n": "9"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000930",
                                       "n": "10"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000950",
                                       "n": "10"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000970",
                                       "n": "10"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0000990",
                                       "n": "10"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001030",
                                       "n": "11"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001050",
                                       "n": "11"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001080",
                                       "n": "11"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001100",
                                       "n": "11"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001140",
                                       "n": "12"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001160",
                                       "n": "12"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001180",
                                       "n": "12"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001200",
                                       "n": "12"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001240",
                                       "n": "13"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001260",
                                       "n": "13"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001280",
                                       "n": "13"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001300",
                                       "n": "13"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001320",
                                       "n": "13"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001360",
                                       "n": "14"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001380",
                                       "n": "14"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001400",
                                       "n": "14"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001440",
                                       "n": "15"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001460",
                                       "n": "15"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001480",
                                       "n": "15"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001520",
                                       "n": "16"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001540",
                                       "n": "16"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001560",
                                       "n": "16"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001580",
                                       "n": "16"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001600",
                                       "n": "16"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001640",
                                       "n": "17"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001660",
                                       "n": "17"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001680",
                                       "n": "17"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001720",
                                       "n": "18"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001740",
                                       "n": "18"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001760",
                                       "n": "18"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001780",
                                       "n": "18"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001810",
                                       "n": "19"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001830",
                                       "n": "19"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001850",
                                       "n": "19"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001870",
                                       "n": "19"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001890",
                                       "n": "19"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001910",
                                       "n": "19"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001950",
                                       "n": "20"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001970",
                                       "n": "20"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0001990",
                                       "n": "20"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002010",
                                       "n": "20"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002030",
                                       "n": "20"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002070",
                                       "n": "21"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002090",
                                       "n": "21"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002110",
                                       "n": "21"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002130",
                                       "n": "21"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002170",
                                       "n": "22"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002190",
                                       "n": "22"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002210",
                                       "n": "22"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002230",
                                       "n": "22"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002270",
                                       "n": "23"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002290",
                                       "n": "23"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002310",
                                       "n": "23"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002330",
                                       "n": "23"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002360",
                                       "n": "24"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002380",
                                       "n": "24"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002400",
                                       "n": "24"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002420",
                                       "n": "24"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002440",
                                       "n": "24"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002480",
                                       "n": "25"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002500",
                                       "n": "25"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002530",
                                       "n": "25"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002550",
                                       "n": "25"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002570",
                                       "n": "25"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002590",
                                       "n": "25"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002620",
                                       "n": "26"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002640",
                                       "n": "26"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002660",
                                       "n": "26"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002680",
                                       "n": "26"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002700",
                                       "n": "26"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002740",
                                       "n": "27"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002770",
                                       "n": "27"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002790",
                                       "n": "27"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002830",
                                       "n": "28"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002850",
                                       "n": "28"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002870",
                                       "n": "28"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002890",
                                       "n": "28"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002910",
                                       "n": "28"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002950",
                                       "n": "29"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002970",
                                       "n": "29"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0002990",
                                       "n": "29"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003010",
                                       "n": "29"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003050",
                                       "n": "30"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003070",
                                       "n": "30"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003090",
                                       "n": "30"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003110",
                                       "n": "30"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003130",
                                       "n": "30"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003160",
                                       "n": "31"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003180",
                                       "n": "31"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003200",
                                       "n": "31"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003220",
                                       "n": "31"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003240",
                                       "n": "31"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003280",
                                       "n": "32"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003300",
                                       "n": "32"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003320",
                                       "n": "32"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003340",
                                       "n": "32"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003360",
                                       "n": "32"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003380",
                                       "n": "32"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003420",
                                       "n": "33"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003440",
                                       "n": "33"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003460",
                                       "n": "33"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003480",
                                       "n": "33"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003500",
                                       "n": "33"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003530",
                                       "n": "34"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003550",
                                       "n": "34"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003570",
                                       "n": "34"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003590",
                                       "n": "34"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003610",
                                       "n": "34"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003640",
                                       "n": "35"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003660",
                                       "n": "35"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003680",
                                       "n": "35"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003700",
                                       "n": "35"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003740",
                                       "n": "36"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003760",
                                       "n": "36"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003780",
                                       "n": "36"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003800",
                                       "n": "36"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003840",
                                       "n": "37"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003860",
                                       "n": "37"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003880",
                                       "n": "37"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003910",
                                       "n": "38"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003930",
                                       "n": "38"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003950",
                                       "n": "38"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003970",
                                       "n": "38"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0003990",
                                       "n": "38"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004010",
                                       "n": "38"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004050",
                                       "n": "39"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004070",
                                       "n": "39"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004090",
                                       "n": "39"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004120",
                                       "n": "40"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004140",
                                       "n": "40"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004160",
                                       "n": "40"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004180",
                                       "n": "40"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004200",
                                       "n": "40"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004250",
                                       "n": "41"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004270",
                                       "n": "41"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004290",
                                       "n": "41"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004330",
                                       "n": "42"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004350",
                                       "n": "42"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004370",
                                       "n": "42"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004410",
                                       "n": "43"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004430",
                                       "n": "43"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004450",
                                       "n": "43"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004470",
                                       "n": "43"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004510",
                                       "n": "44"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004530",
                                       "n": "44"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004550",
                                       "n": "44"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004570",
                                       "n": "44"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004600",
                                       "n": "45"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004620",
                                       "n": "45"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0004650",
                                       "n": "45"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005050",
                                       "n": "49"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005070",
                                       "n": "49"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005090",
                                       "n": "49"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005110",
                                       "n": "49"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005140",
                                       "n": "50"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005160",
                                       "n": "50"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005180",
                                       "n": "50"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005200",
                                       "n": "50"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005220",
                                       "n": "50"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005260",
                                       "n": "51"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005280",
                                       "n": "51"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005300",
                                       "n": "51"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005320",
                                       "n": "51"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005360",
                                       "n": "52"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005380",
                                       "n": "52"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005400",
                                       "n": "52"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005420",
                                       "n": "52"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005440",
                                       "n": "52"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005500",
                                       "n": "53"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005530",
                                       "n": "53"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005550",
                                       "n": "53"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005590",
                                       "n": "54"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005610",
                                       "n": "54"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005630",
                                       "n": "54"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005670",
                                       "n": "55"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005700",
                                       "n": "55"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005720",
                                       "n": "55"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005740",
                                       "n": "55"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005780",
                                       "n": "56"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005800",
                                       "n": "56"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005820",
                                       "n": "56"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005840",
                                       "n": "56"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005860",
                                       "n": "56"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005900",
                                       "n": "57"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005920",
                                       "n": "57"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005940",
                                       "n": "57"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005960",
                                       "n": "57"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0005990",
                                       "n": "58"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006010",
                                       "n": "58"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006030",
                                       "n": "58"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006070",
                                       "n": "59"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006090",
                                       "n": "59"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006130",
                                       "n": "60"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006150",
                                       "n": "60"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006170",
                                       "n": "60"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006210",
                                       "n": "61"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006230",
                                       "n": "61"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006250",
                                       "n": "61"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006290",
                                       "n": "62"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006310",
                                       "n": "62"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006340",
                                       "n": "62"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006360",
                                       "n": "62"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006380",
                                       "n": "62"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006420",
                                       "n": "63"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006450",
                                       "n": "63"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006470",
                                       "n": "63"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006490",
                                       "n": "63"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006510",
                                       "n": "63"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006550",
                                       "n": "64"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006570",
                                       "n": "64"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006590",
                                       "n": "64"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006610",
                                       "n": "64"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006650",
                                       "n": "65"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006670",
                                       "n": "65"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006690",
                                       "n": "65"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006710",
                                       "n": "65"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006730",
                                       "n": "65"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006760",
                                       "n": "66"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006780",
                                       "n": "66"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006800",
                                       "n": "66"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006820",
                                       "n": "66"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006840",
                                       "n": "66"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006880",
                                       "n": "67"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006900",
                                       "n": "67"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006920",
                                       "n": "67"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006940",
                                       "n": "67"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006960",
                                       "n": "67"
                                    }
                                 },
                                 {
                                    "$": {
                                       "xml:id": "c0006980",
                                       "n": "67"
                                    }
                                 }
                              ],
                              "pc": [
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0000300",
                                       "n": "3"
                                    }
                                 },
                                 {
                                    "_": ".",
                                    "$": {
                                       "xml:id": "p0000420",
                                       "n": "4"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0000500",
                                       "n": "5"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0000600",
                                       "n": "6"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0000700",
                                       "n": "7"
                                    }
                                 },
                                 {
                                    "_": ".",
                                    "$": {
                                       "xml:id": "p0000840",
                                       "n": "8"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0001010",
                                       "n": "10"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0001070",
                                       "n": "11"
                                    }
                                 },
                                 {
                                    "_": ";",
                                    "$": {
                                       "xml:id": "p0001120",
                                       "n": "11"
                                    }
                                 },
                                 {
                                    "_": ".",
                                    "$": {
                                       "xml:id": "p0001220",
                                       "n": "12"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0001340",
                                       "n": "13"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0001420",
                                       "n": "14"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0001500",
                                       "n": "15"
                                    }
                                 },
                                 {
                                    "_": ".",
                                    "$": {
                                       "xml:id": "p0001620",
                                       "n": "16"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0001700",
                                       "n": "17"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0001930",
                                       "n": "19"
                                    }
                                 },
                                 {
                                    "_": ".",
                                    "$": {
                                       "xml:id": "p0002050",
                                       "n": "20"
                                    }
                                 },
                                 {
                                    "_": ":",
                                    "$": {
                                       "xml:id": "p0002150",
                                       "n": "21"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0002250",
                                       "n": "22"
                                    }
                                 },
                                 {
                                    "_": ".",
                                    "$": {
                                       "xml:id": "p0002460",
                                       "n": "24"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0002520",
                                       "n": "25"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0002720",
                                       "n": "26"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0002760",
                                       "n": "27"
                                    }
                                 },
                                 {
                                    "_": ";",
                                    "$": {
                                       "xml:id": "p0002810",
                                       "n": "27"
                                    }
                                 },
                                 {
                                    "_": ".",
                                    "$": {
                                       "xml:id": "p0002930",
                                       "n": "28"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0003030",
                                       "n": "29"
                                    }
                                 },
                                 {
                                    "_": ";",
                                    "$": {
                                       "xml:id": "p0003260",
                                       "n": "31"
                                    }
                                 },
                                 {
                                    "_": ".",
                                    "$": {
                                       "xml:id": "p0003400",
                                       "n": "32"
                                    }
                                 },
                                 {
                                    "_": ";",
                                    "$": {
                                       "xml:id": "p0003720",
                                       "n": "35"
                                    }
                                 },
                                 {
                                    "_": ".",
                                    "$": {
                                       "xml:id": "p0003820",
                                       "n": "36"
                                    }
                                 },
                                 {
                                    "_": ";",
                                    "$": {
                                       "xml:id": "p0004030",
                                       "n": "38"
                                    }
                                 },
                                 {
                                    "_": ".",
                                    "$": {
                                       "xml:id": "p0004220",
                                       "n": "40"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0004240",
                                       "n": "41"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0004310",
                                       "n": "41"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0004390",
                                       "n": "42"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0004490",
                                       "n": "43"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0004640",
                                       "n": "45"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0005240",
                                       "n": "50"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0005340",
                                       "n": "51"
                                    }
                                 },
                                 {
                                    "_": ".",
                                    "$": {
                                       "xml:id": "p0005460",
                                       "n": "52"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0005490",
                                       "n": "53"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0005520",
                                       "n": "53"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0005570",
                                       "n": "53"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0005650",
                                       "n": "54"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0005690",
                                       "n": "55"
                                    }
                                 },
                                 {
                                    "_": ".",
                                    "$": {
                                       "xml:id": "p0005760",
                                       "n": "55"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0005880",
                                       "n": "56"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0006050",
                                       "n": "58"
                                    }
                                 },
                                 {
                                    "_": ";",
                                    "$": {
                                       "xml:id": "p0006110",
                                       "n": "59"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0006190",
                                       "n": "60"
                                    }
                                 },
                                 {
                                    "_": ".",
                                    "$": {
                                       "xml:id": "p0006270",
                                       "n": "61"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0006330",
                                       "n": "62"
                                    }
                                 },
                                 {
                                    "_": ";",
                                    "$": {
                                       "xml:id": "p0006400",
                                       "n": "62"
                                    }
                                 },
                                 {
                                    "_": ",",
                                    "$": {
                                       "xml:id": "p0006440",
                                       "n": "63"
                                    }
                                 },
                                 {
                                    "_": ";",
                                    "$": {
                                       "xml:id": "p0006530",
                                       "n": "63"
                                    }
                                 },
                                 {
                                    "_": ".",
                                    "$": {
                                       "xml:id": "p0006630",
                                       "n": "64"
                                    }
                                 },
                                 {
                                    "_": ";",
                                    "$": {
                                       "xml:id": "p0006860",
                                       "n": "66"
                                    }
                                 },
                                 {
                                    "_": ".",
                                    "$": {
                                       "xml:id": "p0007000",
                                       "n": "67"
                                    }
                                 }
                              ],
                              "q": [
                                 {
                                    "$": {
                                       "xml:id": "q-0001"
                                    },
                                    "w": [
                                       {
                                          "_": "How",
                                          "$": {
                                             "xml:id": "w0004660",
                                             "n": "45"
                                          }
                                       },
                                       {
                                          "_": "true",
                                          "$": {
                                             "xml:id": "w0004680",
                                             "n": "45"
                                          }
                                       },
                                       {
                                          "_": "a",
                                          "$": {
                                             "xml:id": "w0004700",
                                             "n": "45"
                                          }
                                       },
                                       {
                                          "_": "twain",
                                          "$": {
                                             "xml:id": "w0004720",
                                             "n": "45"
                                          }
                                       },
                                       {
                                          "_": "Seemeth",
                                          "$": {
                                             "xml:id": "w0004730",
                                             "n": "46"
                                          }
                                       },
                                       {
                                          "_": "this",
                                          "$": {
                                             "xml:id": "w0004750",
                                             "n": "46"
                                          }
                                       },
                                       {
                                          "_": "concordant",
                                          "$": {
                                             "xml:id": "w0004770",
                                             "n": "46"
                                          }
                                       },
                                       {
                                          "_": "one",
                                          "$": {
                                             "xml:id": "w0004790",
                                             "n": "46"
                                          }
                                       },
                                       {
                                          "_": "Love",
                                          "$": {
                                             "xml:id": "w0004810",
                                             "n": "47"
                                          }
                                       },
                                       {
                                          "_": "hath",
                                          "$": {
                                             "xml:id": "w0004830",
                                             "n": "47"
                                          }
                                       },
                                       {
                                          "_": "reason",
                                          "$": {
                                             "xml:id": "w0004850",
                                             "n": "47"
                                          }
                                       },
                                       {
                                          "_": "Reason",
                                          "$": {
                                             "xml:id": "w0004880",
                                             "n": "47"
                                          }
                                       },
                                       {
                                          "_": "none",
                                          "$": {
                                             "xml:id": "w0004900",
                                             "n": "47"
                                          }
                                       },
                                       {
                                          "_": "If",
                                          "$": {
                                             "xml:id": "w0004920",
                                             "n": "48"
                                          }
                                       },
                                       {
                                          "_": "what",
                                          "$": {
                                             "xml:id": "w0004940",
                                             "n": "48"
                                          }
                                       },
                                       {
                                          "_": "parts",
                                          "$": {
                                             "xml:id": "w0004960",
                                             "n": "48"
                                          }
                                       },
                                       {
                                          "_": "can",
                                          "$": {
                                             "xml:id": "w0004980",
                                             "n": "48"
                                          }
                                       },
                                       {
                                          "_": "so",
                                          "$": {
                                             "xml:id": "w0005000",
                                             "n": "48"
                                          }
                                       },
                                       {
                                          "_": "remain",
                                          "$": {
                                             "xml:id": "w0005020",
                                             "n": "48"
                                          }
                                       }
                                    ],
                                    "c": [
                                       {
                                          "$": {
                                             "xml:id": "c0004670",
                                             "n": "45"
                                          }
                                       },
                                       {
                                          "$": {
                                             "xml:id": "c0004690",
                                             "n": "45"
                                          }
                                       },
                                       {
                                          "$": {
                                             "xml:id": "c0004710",
                                             "n": "45"
                                          }
                                       },
                                       {
                                          "$": {
                                             "xml:id": "c0004740",
                                             "n": "46"
                                          }
                                       },
                                       {
                                          "$": {
                                             "xml:id": "c0004760",
                                             "n": "46"
                                          }
                                       },
                                       {
                                          "$": {
                                             "xml:id": "c0004780",
                                             "n": "46"
                                          }
                                       },
                                       {
                                          "$": {
                                             "xml:id": "c0004820",
                                             "n": "47"
                                          }
                                       },
                                       {
                                          "$": {
                                             "xml:id": "c0004840",
                                             "n": "47"
                                          }
                                       },
                                       {
                                          "$": {
                                             "xml:id": "c0004870",
                                             "n": "47"
                                          }
                                       },
                                       {
                                          "$": {
                                             "xml:id": "c0004890",
                                             "n": "47"
                                          }
                                       },
                                       {
                                          "$": {
                                             "xml:id": "c0004930",
                                             "n": "48"
                                          }
                                       },
                                       {
                                          "$": {
                                             "xml:id": "c0004950",
                                             "n": "48"
                                          }
                                       },
                                       {
                                          "$": {
                                             "xml:id": "c0004970",
                                             "n": "48"
                                          }
                                       },
                                       {
                                          "$": {
                                             "xml:id": "c0004990",
                                             "n": "48"
                                          }
                                       },
                                       {
                                          "$": {
                                             "xml:id": "c0005010",
                                             "n": "48"
                                          }
                                       }
                                    ],
                                    "milestone": [
                                       {
                                          "$": {
                                             "unit": "line",
                                             "xml:id": "PhT-0046",
                                             "n": "2",
                                             "corresp": "#w0004730 #c0004740 #w0004750 #c0004760 #w0004770 #c0004780 #w0004790 #p0004800"
                                          }
                                       },
                                       {
                                          "$": {
                                             "unit": "line",
                                             "xml:id": "PhT-0047",
                                             "n": "3",
                                             "corresp": "#w0004810 #c0004820 #w0004830 #c0004840 #w0004850 #p0004860 #c0004870 #w0004880 #c0004890 #w0004900 #p0004910"
                                          }
                                       },
                                       {
                                          "$": {
                                             "unit": "line",
                                             "xml:id": "PhT-0048",
                                             "n": "4",
                                             "corresp": "#w0004920 #c0004930 #w0004940 #c0004950 #w0004960 #c0004970 #w0004980 #c0004990 #w0005000 #c0005010 #w0005020 #p0005030"
                                          }
                                       }
                                    ],
                                    "pc": [
                                       {
                                          "_": "!",
                                          "$": {
                                             "xml:id": "p0004800",
                                             "n": "46"
                                          }
                                       },
                                       {
                                          "_": ",",
                                          "$": {
                                             "xml:id": "p0004860",
                                             "n": "47"
                                          }
                                       },
                                       {
                                          "_": ",",
                                          "$": {
                                             "xml:id": "p0004910",
                                             "n": "47"
                                          }
                                       },
                                       {
                                          "_": ",",
                                          "$": {
                                             "xml:id": "p0005030",
                                             "n": "48"
                                          }
                                       }
                                    ]
                                 }
                              ],
                              "lb": [
                                 "",
                                 ""
                              ],
                              "label": [
                                 {
                                    "$": {
                                       "xml:id": "lbl-0001"
                                    },
                                    "w": [
                                       {
                                          "_": "Threnos",
                                          "$": {
                                             "xml:id": "w0005470",
                                             "n": "52"
                                          }
                                       }
                                    ]
                                 }
                              ]
                           }
                        ],
                        "trailer": [
                           "William Shakespeare"
                        ]
                     }
                  ]
               }
            ],
            "back": [
               {
                  "ab": [
                     {
                        "ptr": [
                           {
                              "$": {
                                 "xml:id": "ptr-0001",
                                 "type": "emendation",
                                 "ana": "#emend",
                                 "target": "#w0273830"
                              }
                           },
                           {
                              "$": {
                                 "xml:id": "ptr-0002",
                                 "type": "emendation",
                                 "ana": "#emend",
                                 "target": "#w0281940 #c0281950 #w0281960"
                              }
                           }
                        ]
                     }
                  ]
               }
            ]
         }
      ]
   }
}