import React from 'react';

// Map labels
import asylumLabels from '../../../../../../../images/maps/asylum/map_labels.jpg';
import bleasdaleLabels from '../../../../../../../images/maps/bleasdale/map_labels.jpg';
import edgefieldLabels from '../../../../../../../images/maps/edgefield/map_labels.jpg';
import graftonLabels from '../../../../../../../images/maps/grafton/map_labels.jpg';
import highschoolLabels from '../../../../../../../images/maps/highschool/map_labels.jpg';
import prisonLabels from '../../../../../../../images/maps/prison/map_labels.jpg';
import ridgeviewLabels from '../../../../../../../images/maps/ridgeview/map_labels.jpg';
import tanglewoodLabels from '../../../../../../../images/maps/tanglewood/map_labels.jpg';

// Map entrances


export default function PhotoGallery(props){
    const photoReferences = {
        'asylum': [asylumLabels],
        'bleasdale': [bleasdaleLabels],
        'edgefield': [edgefieldLabels],
        'grafton': [graftonLabels],
        'highschool': [highschoolLabels],
        'prison': [prisonLabels],
        'ridgeview': [ridgeviewLabels],
        'tanglewood': [tanglewoodLabels]
    }
}
