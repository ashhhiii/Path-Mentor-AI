import {z} from 'zod';

export const onboardingSchema = z.object({
industry: z.string({
    required_error: 'Industry is required',
}),
subIndustry: z.string({
    required_error: 'please select a specialization',

}),
bio:z.string().max(500).optional(),
experinece: z.string()
.transform((val)  => parseInt(val, 10))
.pipe(
    z
    .number()
    .min(0, 'Experience must be a positive number')
    .max(50, 'Experience cannot exceed 50 years')   
),
skills:z.string().transform((val) => val
? val
.split(',')
.map((skill) => skill.trim())
.filter(Boolean)
:undefined),

})