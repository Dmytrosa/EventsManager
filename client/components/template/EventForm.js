import Image from 'next/image';
import { format } from 'date-fns';

import {
    Box, Button, FormControl,
    MenuItem,
    TextField, Typography,
} from '@mui/material';

import { useFormik } from 'formik';
import * as Yup from 'yup'
import { categoryOptions } from '../additions/Category';

function EventForm() {

    const callAPI = async (obj) => {
		try {
            const res = await fetch(
                'http://localhost:3001/event',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(obj),
                }
              );
			const data = await res.json();
            console.log("callAPI at cretaing event", data)
            //TODO
            window.location.reload();

		} catch (err) {
			console.log("callAPI at cretaing event error:", err);
		}
	};

    const formik = useFormik({
        initialValues: {
            title: '',
            date: '',
            latitude: '',
            longitude: '',
            category: '',
            description: ''
        },

        validationSchema: Yup.object({
            title: Yup.string().required('Please, enter a title').max(50, 'Title must be less than 50 characters.'),
            date: Yup.string().required('Please, enter a date'),
            latitude: Yup.number()
                .typeError('Latitude must be a number written with a period')
                .required('Please, enter a latitude'),
            longitude: Yup.number()
                .typeError('Longitude must be a number written with a period')
                .required('Please, enter a longitude'),
            category: Yup.string().required('Please, enter a category'),
            description: Yup.string().required('Please, enter a description').max(500, 'Description must be less than 500 characters.'),
        }),
        onSubmit: async (values) => {
            callAPI(values)
        },
    })

    return (
        <Box sx={{
            maxWidth: '1576px', m: 'auto', px: { xs: "20px", xl: "50px" },
            display: 'flex', alignItems: 'center', pt: "30px",
            justifyContent: 'center', gap: '30px',
        }}>

            <Box sx={{
                display: { xs: "none", xl: 'flex' },
                alignItems: 'center', justifyContent: "center",
            }}>
                <Image src="https://i.ibb.co/vkgpnqK/undraw-true-love-cy8x.png" alt='Big image near form'
                    width={700} height={440}
                    style={{ borderRadius: "10px" }}
                />
            </Box>


            <Box sx={{
                width: { xs: "100%", md: "600px", xl: "500px" },
            }}>

                <Box sx={{
                    mb: "30px"
                }}>
                    <Typography variant="h5" component="h2" sx={{
                        fontWeight: "600", mb: "5px",
                        fontSize: { xs: "30px", md: "35px", xl: "40px" },
                    }}>
                        Create Event
                    </Typography>

                    <Typography variant="grayText" component="p" sx={{
                        fontSize: { xs: "12px", xl: "13px" },
                        fontWeight: "500",
                    }}>

                    </Typography>
                </Box>

                <form onSubmit={formik.handleSubmit}>



                    <Box sx={{
                        width: "100%",
                    }}>
                        <Typography variant='body1' sx={{
                            fontWeight: "600", mb: "3px",
                            fontSize: { xs: "13px", md: "15px" }
                        }}>
                            Title
                        </Typography>
                        <TextField
                            fullWidth
                            size='small'
                            type='text'
                            name='title'
                            id='title'
                            onBlur={formik.handleBlur}
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            error={formik.touched.title && formik.errors.title ? true : false}
                            helperText={formik.touched.title && formik.errors.title ?
                                formik.errors.title : ""
                            }
                        />

                    </Box>

                    <Box sx={{
                        width: "100%",
                    }}>
                        <Typography variant='body1' sx={{
                            fontWeight: "600", mb: "3px",
                            fontSize: { xs: "13px", md: "15px" }
                        }}>
                            Last Name
                        </Typography>
                        <TextField
                            fullWidth
                            size='small'
                            type='datetime-local'
                            name='date'
                            id='date'
                            onBlur={formik.handleBlur}
                            value={formik.values.date ? format(new Date(formik.values.date), "yyyy-MM-dd'T'HH:mm:ssXXX") : ''}
                            onChange={formik.handleChange}
                            error={formik.touched.date && formik.errors.date ? true : false}
                            helperText={formik.touched.date && formik.errors.date ?
                                formik.errors.date : ""
                            }
                        />
                    </Box>

                    <Box sx={{
                        display: "flex", flexDirection: { xs: "column", md: "row" },
                        alignItems: 'center', justifyContent: "space-between",
                        gap: { xs: "20px", md: "30px" }, mb: "10px"
                    }}>
                        <Box sx={{
                            mb: "10px"
                        }}>
                            <Typography variant='body1' sx={{
                                fontWeight: "600", mb: "3px",
                                fontSize: { xs: "13px", md: "15px" }
                            }}>
                                Latitude
                            </Typography>
                            <TextField
                                fullWidth
                                size='small'
                                type='text'
                                name='latitude'
                                id='latitude'
                                onBlur={formik.handleBlur}
                                value={formik.values.latitude}
                                onChange={formik.handleChange}
                                error={formik.touched.latitude && formik.errors.latitude ? true : false}
                                helperText={formik.touched.latitude && formik.errors.latitude ?
                                    formik.errors.latitude : ""
                                }
                            />
                        </Box>

                        <Box sx={{
                            mb: "10px"
                        }}>
                            <Typography variant='body1' sx={{
                                fontWeight: "600", mb: "3px",
                                fontSize: { xs: "14px", md: "15px" }
                            }}>
                                Longitude
                            </Typography>
                            <TextField
                                fullWidth
                                size='small'
                                type='text'
                                name='longitude'
                                id='longitude'
                                onBlur={formik.handleBlur}
                                value={formik.values.longitude}
                                onChange={formik.handleChange}
                                error={formik.touched.longitude && formik.errors.longitude ? true : false}
                                helperText={formik.touched.longitude && formik.errors.longitude ?
                                    formik.errors.longitude : ""
                                }
                            />
                        </Box>
                    </Box>

                    <Box sx={{ mb: "10px" }}>
                        <Typography variant='body1' sx={{ fontWeight: "600", mb: "3px", fontSize: { xs: "14px", md: "15px" } }}>
                            Category
                        </Typography>
                        <FormControl fullWidth size='small'>
                            <TextField
                                name='category'
                                id='category'
                                onBlur={formik.handleBlur}
                                error={formik.touched.category && formik.errors.category ? true : false}
                                helperText={formik.touched.category && formik.errors.category ? formik.errors.category : ""}
                                select
                                value={formik.values.category} 
                                onChange={formik.handleChange}
                            >
                                {categoryOptions.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </FormControl>
                    </Box>

                    <Box sx={{
                        width: "100%",
                    }}>
                        <Typography variant='body1' sx={{
                            fontWeight: "600", mb: "3px",
                            fontSize: { xs: "13px", md: "15px" }
                        }}>
                            Description
                        </Typography>
                        <TextField
                            fullWidth
                            size='small'
                            type='text'
                            name='description'
                            id='description'
                            onBlur={formik.handleBlur}
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            error={formik.touched.description && formik.errors.description ? true : false}
                            helperText={formik.touched.description && formik.errors.description ?
                                formik.errors.description : ""
                            }
                        />
                    </Box>



                    <Button
                        variant='contained'
                        type='submit'
                        color='button'
                        fullWidth
                        sx={{
                            height: "45px", marginTop: "20px"
                        }}
                    >
                        <Typography variant='subtitle1' sx={{
                            color: 'white', fontWeight: "600",
                            fontSize: { xs: "13px", xl: "14px" },
                        }}>
                            Create!
                        </Typography>
                    </Button>
                </form>
            </Box>
        </Box>
    );
}

export default EventForm;