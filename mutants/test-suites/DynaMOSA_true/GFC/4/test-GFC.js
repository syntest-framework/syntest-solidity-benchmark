const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintbIN1xSd = BigInt("1272")
		const stringgRYXFGI = "QpedQjwFXA1OzD"
		const stringG8WHIhJ = "8KfWBVcgBGMzmN8mL2RaKD1q8h6xhrnpooq6w8j5pzRr2PTQSAwVhAdYpaAXxJnJAlkuUYAEsGbHX2SsFJinqqZTmM"
		const GFCNOc9o2B = await GFC.new(uintbIN1xSd, stringgRYXFGI, stringG8WHIhJ, {from: "0x0000000000000000000000000000000000000001"});
		const byteHdzElqz = "0x131518140a0413"
		const uintAYLoJn = BigInt("1135")
		const addressOo48bkD = accounts[2]
		const uintzvAT4BY = BigInt("133")
		const addresswyQO4oH = accounts[2]
		const uintUbb0rPn = BigInt("1217")
		const addressU7iiqZk = accounts[3]
		const uintqvFTr5f = BigInt("393")
		const addressMt7N6NQ = accounts[4]
		const boolxjChHLV = await GFCNOc9o2B.approveAndCall.call(addressOo48bkD, uintAYLoJn, byteHdzElqz, {from: accounts[0]});
		const boolgmcXGGW = await GFCNOc9o2B.transfer.call(addresswyQO4oH, uintzvAT4BY, {from: accounts[4]});
		const boolWSsxEZ7 = await GFCNOc9o2B.approve.call(addressU7iiqZk, uintUbb0rPn, {from: accounts[1]});
		const boolzsubscx = await GFCNOc9o2B.burnFrom.call(addressMt7N6NQ, uintqvFTr5f, {from: accounts[5]});
	});

	it('test for GFC', async () => {
		const uintAKzUVaG = BigInt("287")
		const stringZqwgJ1t = "aDJTm3NbTQxtOTXEUzEK44F9tUxqlgDqtUqQ6hMbOWxmzvFlBa8ghS1CR6oUafVKJ0bwFURPIybaOydBwv"
		const stringcZYFZF9 = "ziJ6V5AaQMOUjM1jMlh5l002L78mtTLG"
		const GFCwPpP7H5 = await GFC.new(uintAKzUVaG, stringZqwgJ1t, stringcZYFZF9, {from: accounts[0]});
		const uintsrUCs1z = BigInt("1856")
		const addressqGjabMM = accounts[1]
		const uintG0Yz20g = BigInt("1985")
		const uintFDqf47O = BigInt("26")
		const addressRGdoAP = accounts[1]
		const addressP3y2KTX = accounts[2]
//		const boolidAotI = await GFCwPpP7H5.burnFrom.call(addressqGjabMM, uintsrUCs1z, {from: accounts[4]});
//		const boolcghdFDW = await GFCwPpP7H5.burn.call(uintG0Yz20g, {from: accounts[1]});
//		const boolbo3bWhB = await GFCwPpP7H5.transferFrom.call(addressP3y2KTX, addressRGdoAP, uintFDqf47O, {from: accounts[4]});

		await expect(GFCwPpP7H5.burnFrom.call(addressqGjabMM, uintsrUCs1z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintjyFW1VR = BigInt("796")
		const stringNfqChj0 = "OrOKJqYY7u6wLVNj9IRA6VAXvjiE9n8JDNIptBt4rmUcLHaYad8ycwxrRZJiGpGRgCUqOMM8Q9WiK9"
		const stringLa55uBS = "029HYlYO4NJBdvIb4XPBdzJXtTnGf5I5afTsOXR0xefMjQfDfGCNUVYh1"
		const GFCnM19Gsa = await GFC.new(uintjyFW1VR, stringNfqChj0, stringLa55uBS, {from: accounts[4]});
		const uintMHvbyEL = BigInt("1857")
		const addresssmQcmfG = accounts[0]
		const uintOAiWV4v = BigInt("51")
		const addressJNwdMuf = accounts[1]
		const bytedetmUMT = "0x0c1d02171805190819181e131111110913101009"
		const uintsLkBfPt = BigInt("1119")
		const addressWVLHxJd = accounts[3]
		const byteGZULwG = "0x141502120102001819030d1d181d1f0f080e0f110019151615030a0c1c011b"
		const uintyocXFkP = BigInt("1698")
		const addressTCspqWm = accounts[5]
		const boolzzQx8j = await GFCnM19Gsa.approve.call(addresssmQcmfG, uintMHvbyEL, {from: accounts[1]});
		const boolZwnQik4 = await GFCnM19Gsa.approve.call(addressJNwdMuf, uintOAiWV4v, {from: accounts[2]});
//		const boolOyOfSgI = await GFCnM19Gsa.approveAndCall.call(addressWVLHxJd, uintsLkBfPt, bytedetmUMT, {from: accounts[3]});
//		const boolMkmrsiU = await GFCnM19Gsa.approveAndCall.call(addressTCspqWm, uintyocXFkP, byteGZULwG, {from: accounts[4]});

		assert.equal(boolZwnQik4, true)
		assert.equal(boolzzQx8j, true)
		await expect(GFCnM19Gsa.approveAndCall.call(addressWVLHxJd, uintsLkBfPt, bytedetmUMT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintgoR6MdL = BigInt("641")
		const stringZj0ouVp = "U8qaVnDk1xmHYPsz4PsBdH6xDDF73xAhoZQWPUbzJNTRTrltiVYSbtxMxBcEfqKtuEIwMBAi3H9GAh2NWp"
		const stringg711CTR = "Y1MELytA5563lpsgC3Lz8JLJ0eZYyYft"
		const GFCdf0moub = await GFC.new(uintgoR6MdL, stringZj0ouVp, stringg711CTR, {from: accounts[1]});
		const uintnUjQAT = BigInt("1660")
		const uintMGGNTSS = BigInt("566")
		const addressTvKGWJ = accounts[4]
		const addressX42b7ks = accounts[4]
		const uinttDEPPN2 = BigInt("549")
		const bytegCwbPrj = "0x08081913111f0a181015150c"
		const uintZlmdakY = BigInt("936")
		const addressq13x0YD = accounts[5]
		const byte2HiPLX = "0x0306061a1b1f140c0f18060a"
		const uintmix8Pa5 = BigInt("1230")
		const addressH50cTYy = accounts[2]
		const uintIPb7R8R = BigInt("445")
		const addressmKkvYI6 = accounts[4]
//		const boolZNzUGPb = await GFCdf0moub.burn.call(uintnUjQAT, {from: accounts[2]});
//		const boolT935xnq = await GFCdf0moub.transferFrom.call(addressX42b7ks, addressTvKGWJ, uintMGGNTSS, {from: accounts[3]});
//		const boolI4C3IZ = await GFCdf0moub.burn.call(uinttDEPPN2, {from: accounts[2]});
//		const boolH2Swlh4 = await GFCdf0moub.approveAndCall.call(addressq13x0YD, uintZlmdakY, bytegCwbPrj, {from: accounts[3]});
//		const boolWYGugP = await GFCdf0moub.approveAndCall.call(addressH50cTYy, uintmix8Pa5, byte2HiPLX, {from: accounts[4]});
//		const boolI68ElI9 = await GFCdf0moub.burnFrom.call(addressmKkvYI6, uintIPb7R8R, {from: accounts[1]});

		await expect(GFCdf0moub.burn.call(uintnUjQAT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintLaJLMaS = BigInt("287")
		const stringZqwgJ1t = "aDJTm3NbTQxtOTXEUzEK44F9tUxqlgDqtUqQ6hMbOWxmzvFlBa8ghS1CR6oUafVKJ0bwFURPIybaOydBwv"
		const stringcZYFZF9 = "ziJ6V5AaQMOUjM1jMlh5l002L78mtTLG"
		const GFCwPpP7H5 = await GFC.new(uintLaJLMaS, stringZqwgJ1t, stringcZYFZF9, {from: accounts[0]});
		const uinta7qlo3U = BigInt("1975")
		const addresscjXVhBF = accounts[0]
		const addresszxvrn72 = accounts[5]
		const uintsmdo1T = BigInt("1856")
		const addressUabTGlE = accounts[1]
		const uintSUf9eTB = BigInt("1653")
		const uintTh8sMJG = BigInt("26")
		const addresssLTSxFn = accounts[1]
		const addressbsmerNQ = accounts[2]
		const uintBAMql2H = BigInt("67")
//		const boolEpVhGms = await GFCwPpP7H5.transferFrom.call(addresszxvrn72, addresscjXVhBF, uinta7qlo3U, {from: accounts[3]});
//		const boolidAotI = await GFCwPpP7H5.burnFrom.call(addressUabTGlE, uintsmdo1T, {from: accounts[4]});
//		const boolcghdFDW = await GFCwPpP7H5.burn.call(uintSUf9eTB, {from: accounts[1]});
//		const boolbo3bWhB = await GFCwPpP7H5.transferFrom.call(addressbsmerNQ, addresssLTSxFn, uintTh8sMJG, {from: accounts[4]});
//		const boolB4OWROH = await GFCwPpP7H5.burn.call(uintBAMql2H, {from: accounts[4]});

		await expect(GFCwPpP7H5.transferFrom.call(addresszxvrn72, addresscjXVhBF, uinta7qlo3U, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintM3uXaEu = BigInt("287")
		const stringZqwgJ1t = "aDJTm3NbTQxtOTXEUzEK44F9tUxqlgDqtUqQ6hMbOWxmzvFlBa8ghS1CR6oUafVKJ0bwFURPIybaOydBwv"
		const stringcZYFZF9 = "ziJ6V5AaQMOUjM1jMlh5l002L78mtTLG"
		const GFCwPpP7H5 = await GFC.new(uintM3uXaEu, stringZqwgJ1t, stringcZYFZF9, {from: accounts[0]});
		const uintY1t0R6K = BigInt("1231")
		const uintNWYttVq = BigInt("649")
		const uintMztZGav = BigInt("26")
		const addressyCiOsKn = accounts[1]
		const addressCLcPB44 = accounts[2]
		const boolcCRtrY1 = await GFCwPpP7H5.burn.call(uintY1t0R6K, {from: accounts[0]});
//		const boolcghdFDW = await GFCwPpP7H5.burn.call(uintNWYttVq, {from: accounts[1]});
//		const boolbo3bWhB = await GFCwPpP7H5.transferFrom.call(addressCLcPB44, addressyCiOsKn, uintMztZGav, {from: accounts[4]});

		assert.equal(boolcCRtrY1, true)
		await expect(GFCwPpP7H5.burn.call(uintNWYttVq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintgQ37zW1 = BigInt("454")
		const stringYnYON5Y = "5dV4YrhP2Qwbg9b2sDubmTeF7wxKoG1wrCyDSTsY8YdqrA0kUbbRLnGvNSUXwJkjTnNsplc7HkcFijxm4vnnghF4Vtywyl3"
		const string6mlXhW = "gllbiLolLG4WWpax7vVxofOHJjj7uHU7VJesh9wm1l1W1qOQXE1b2coQngMopdfB79qy1sfoNNslFpoJ"
		const GFCeM9Rl8 = await GFC.new(uintgQ37zW1, stringYnYON5Y, string6mlXhW, {from: accounts[1]});
		const uintlaJLyR4 = BigInt("374")
		const addressqP3qWsI = accounts[4]
		const byteYvrMlOd = "0x1808011a1d0b11180d150a160b0a0806"
		const uintwzUvdHg = BigInt("1724")
		const addressackxdig = accounts[0]
		const uintVQNmGFB = BigInt("438")
		const addressOkyHOeA = accounts[4]
		const byte8HZGfG = "0x1a110b2005100b110c12181b190402070e12"
		const uintvgzlFY7 = BigInt("3")
		const addressjx5pmP1 = accounts[1]
		const uintnfpkHkv = BigInt("1655")
		const addressZtUddVi = accounts[4]
		const addressnmBlzC = accounts[4]
		const uintEkHcYE9 = BigInt("1741")
		const booluquiy2 = await GFCeM9Rl8.transfer.call(addressqP3qWsI, uintlaJLyR4, {from: accounts[1]});
//		const boolmpdbz9 = await GFCeM9Rl8.approveAndCall.call(addressackxdig, uintwzUvdHg, byteYvrMlOd, {from: accounts[2]});
//		const boolce3ajh = await GFCeM9Rl8.approve.call(addressOkyHOeA, uintVQNmGFB, {from: accounts[3]});
//		const boolGRhw2Uq = await GFCeM9Rl8.approveAndCall.call(addressjx5pmP1, uintvgzlFY7, byte8HZGfG, {from: accounts[3]});
//		const boolfg2cL5 = await GFCeM9Rl8.transferFrom.call(addressnmBlzC, addressZtUddVi, uintnfpkHkv, {from: accounts[4]});
//		const boolVnUeX0Q = await GFCeM9Rl8.burn.call(uintEkHcYE9, {from: accounts[1]});

		assert.equal(booluquiy2, true)
		await expect(GFCeM9Rl8.approveAndCall.call(addressackxdig, uintwzUvdHg, byteYvrMlOd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintQ7gSYOY = BigInt("287")
		const stringZqwgJ1t = "aDJTm3NbTQxtOTXEUzEK44F9tUxqlgDqtUqQ6hMbOWxmzvFlBa8ghS1CR6oUafVKJ0bwFURPIybaOydBwv"
		const stringcZYFZF9 = "ziJ6V5AaQMOUjM1jMlh5l002L78mtTLG"
		const GFCwPpP7H5 = await GFC.new(uintQ7gSYOY, stringZqwgJ1t, stringcZYFZF9, {from: accounts[0]});
		const uintgUI5whH = BigInt("1695")
		const addressL5qH19b = accounts[0]
		const uintUtNlyxF = BigInt("1191")
		const addressQnxi2x2 = accounts[3]
		const addressqBZxXOJ = accounts[4]
		const byteOtJJC09 = "0x19160c0f1e0c200b1c05181c0a09050d191c101a020c0e070f"
		const uintO1IPLbU = BigInt("571")
		const addressrzw1Wt = accounts[3]
		const uintjx4bMG2 = BigInt("26")
		const addressFCrbQP = accounts[1]
		const addresssZIgAqJ = accounts[3]
//		const boolrVrly6v = await GFCwPpP7H5.burnFrom.call(addressL5qH19b, uintgUI5whH, {from: accounts[5]});
//		const boolQzh71HD = await GFCwPpP7H5.transferFrom.call(addressqBZxXOJ, addressQnxi2x2, uintUtNlyxF, {from: accounts[4]});
//		const boolDg4sQjT = await GFCwPpP7H5.approveAndCall.call(addressrzw1Wt, uintO1IPLbU, byteOtJJC09, {from: accounts[0]});
//		const boolbo3bWhB = await GFCwPpP7H5.transferFrom.call(addresssZIgAqJ, addressFCrbQP, uintjx4bMG2, {from: accounts[4]});

		await expect(GFCwPpP7H5.burnFrom.call(addressL5qH19b, uintgUI5whH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintPvRJjAl = BigInt("287")
		const stringZqwgJ1t = "aDJTm3NbTQxtOTXEUzEK44F9tUxqlgDqtUqQ6hMbOWxmzvFlBa8ghS1CR6oUafVKJ0bwFURPIybaOydBwv"
		const stringcZYFZF9 = "ziJ6V5AaQMOUjM1jMlh5l002L78mtTLG"
		const GFCwPpP7H5 = await GFC.new(uintPvRJjAl, stringZqwgJ1t, stringcZYFZF9, {from: accounts[0]});
		const uintRZ6vIGY = BigInt("0")
		const addressyqQWA3X = accounts[1]
		const addresswmVlXp = accounts[2]
		const uintEKGNBV7 = BigInt("1158")
		const bytelh0c624 = "0x1c010d1a0b060b"
		const uintBG8y8BY = BigInt("1873")
		const addressS2M5PBi = accounts[0]
		const boolbo3bWhB = await GFCwPpP7H5.transferFrom.call(addresswmVlXp, addressyqQWA3X, uintRZ6vIGY, {from: accounts[4]});
//		const boolPomYlJW = await GFCwPpP7H5.burn.call(uintEKGNBV7, {from: accounts[2]});
//		const boolnW3GPhV = await GFCwPpP7H5.approveAndCall.call(addressS2M5PBi, uintBG8y8BY, bytelh0c624, {from: accounts[1]});

		assert.equal(boolbo3bWhB, true)
		await expect(GFCwPpP7H5.burn.call(uintEKGNBV7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})