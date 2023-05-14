import React, { useState } from 'react'
import FieldSet from '../Fields/FieldSet'
import Box from '../Box'
import { Accordion, AccordionTab } from 'primereact/accordion';
interface Props {
    loading?: boolean,
    form: any,
    onSetForm: (arg: any) => void
}

function Seo({ loading = false, form, onSetForm }: Props) {

    const [formSeo, setFormSeo] = useState({
        "custom_slug": form.custom_slug,
        "meta_title": form.meta_title,
        "meta_description": form.meta_description,
        "canonica_link": form.canonica_link,
        "meta_robots": form.meta_robots,
        "meta_image": form.meta_image,
    });

    React.useEffect(() => {
        onSetForm(formSeo);
    }, [formSeo])

    return (
        <Accordion activeIndex={0}>
            <AccordionTab header="SEO">
                <div className='space-y-[32px]'>
                    <FieldSet
                        updateModelValue={(value) => setFormSeo({ ...formSeo, custom_slug: value })}
                        modelValue={formSeo.custom_slug}
                        field={{
                            title: 'Custom slug',
                            fieldName: "custom_slug",
                            rules: {},
                            errors: {},
                        }}
                    />
                    <FieldSet
                        updateModelValue={(value) => setFormSeo({ ...formSeo, meta_title: value })}
                        modelValue={formSeo.meta_title}
                        field={{
                            title: 'Meta title',
                            fieldName: "meta_title",
                            rules: {},
                            errors: {},
                        }}
                    />
                    <FieldSet
                        updateModelValue={(value) => setFormSeo({ ...formSeo, meta_description: value })}
                        modelValue={formSeo.meta_description}
                        field={{
                            title: 'Meta description',
                            type: "textarea",
                            fieldName: "meta_description",
                            rules: {},
                            errors: {},
                        }}
                    />
                    <FieldSet
                        updateModelValue={(value) => setFormSeo({ ...formSeo, meta_robots: value })}
                        modelValue={formSeo.meta_robots}
                        field={{
                            title: 'Meta robots',
                            fieldName: "meta_robots",
                            rules: {},
                            errors: {},
                        }}
                    />
                    <FieldSet
                        updateModelValue={(value) => setFormSeo({ ...formSeo, canonica_link: value })}
                        modelValue={formSeo.canonica_link}
                        field={{
                            title: 'Canonical Link',
                            fieldName: "canonica_link",
                            rules: {},
                            errors: {},
                        }}
                    />
                    <FieldSet
                        updateModelValue={(value) => setFormSeo({ ...formSeo, meta_image: value })}
                        modelValue={formSeo.meta_image}
                        field={{
                            title: 'Meta image',
                            fieldName: "meta_image",
                            rules: {},
                            errors: {},
                        }}
                    />
                </div>
            </AccordionTab>
        </Accordion>
    )
}

export default Seo