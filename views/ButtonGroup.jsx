import React from 'react';
import PropTypes from 'prop-types';
import { parser } from 'css-math';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors } from './utils/colors';
import { weight, size } from './utils/typography';
import { breakpoint } from './utils/breakpoints';
import { MAX_CONTENT_WIDTH } from './utils/variables';

const buttonBreakpoint = '400px';
const styles = StyleSheet.create({
	container: {
    	maxWidth: parser(`${MAX_CONTENT_WIDTH} - 1rem`),
  	},
  	emotionRow: {
	    display: 'block',
	    marginTop: '2rem',
	    marginBottom: '3rem',
	    [breakpoint(buttonBreakpoint)]: {
	      display: 'flex',
	      alignItems: 'center',
	      alignContent: 'flex-start',
	    },
  	},
  	emotionWord: {
  		marginRight: '10px'
  	},
  	progressBar: {
		    borderRadius: '5px',
		    // border-radius: '290486px',
		    display: 'inline-block',
		    overflow: 'hidden',
		    padding: '0',
		    minWidth: '200px',
		    textAlign: 'center'
  	},
  	joyProgressBar: {
  		backgroundColor: '#efac43'
  	},
  	angerProgressBar: {
  		backgroundColor: '#db524c'
  	},
  	fearProgressBar: {
  		backgroundColor: '#999999'
  	},
  	disgustProgessBar: {
  		backgroundColor: '#58b957'
  	},
  	sadnessProgressBar: {
  		backgroundColor: '#55bfe0'	
  	},
  	progressBarText: {
  		  color: 'white',
  		  fontWeight: 'bold',
  	}
});
const ButtonGroup = React.createClass({
	displayName: 'ButtonGroup',
	render() {
		return (
				<div className={css(styles.container)}>
					<div className={css(styles.emotionRow)} >
						<span className={css(styles.emotionWord)}> Joy </span>
						<div className={[css(styles.progressBar), css(styles.joyProgressBar)].join(' ')} > 
							<p className={css(styles.progressBarText)} > 0.25 </p>
						</div> 
					</div>
					<div className={css(styles.emotionRow)}>
						<span className={css(styles.emotionWord)}> Anger </span>
						<div className={[css(styles.progressBar), css(styles.angerProgressBar)].join(' ')} > 
							<p className={css(styles.progressBarText)} > 0.4 </p>
						</div> 
					</div>
					<div className={css(styles.emotionRow)}>
						<span className={css(styles.emotionWord)}> Fear </span>
						<div className={[css(styles.progressBar), css(styles.fearProgressBar)].join(' ')} > 
							<p className={css(styles.progressBarText)} > 0.75 </p>
						</div> 
					</div>
					<div className={css(styles.emotionRow)}>
						<span className={css(styles.emotionWord)}> Disgust </span>
						<div className={[css(styles.progressBar), css(styles.disgustProgessBar)].join(' ')} > 
							<p className={css(styles.progressBarText)} > 0.75 </p>
						</div> 
					</div>
					<div className={css(styles.emotionRow)}>
						<span className={css(styles.emotionWord)}> Sadness </span>
						<div className={[css(styles.progressBar), css(styles.sadnessProgressBar)].join(' ')} > 
							<p className={css(styles.progressBarText)} > 0.95 </p>
						</div> 
					</div>
				</div>
			);
	},
});


export default ButtonGroup;