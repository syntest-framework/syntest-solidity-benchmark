const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintWqqUwTe = BigInt("1327")
		const stringtpLgGg = "2KzQF8RnMhAAKCnG7Q3QaCvl9abjmuveotNyW1BcNDlD2fIp8ypcELEkCdImBsLoRo7q1x1RKhnu"
		const stringucBdjII = "bzDoKV83MJqDduJRvmHNOrNBAY6MAHcX4Kybey9IHtKfWmoo8hwikLQOdvgcaPQzXKhfuMaxhnNNt3nPRoXyzx2jq8y5b"
		const MARVELCOINpBlifjV = await MARVELCOIN.new(uintWqqUwTe, stringtpLgGg, stringucBdjII, {from: accounts[2]});
		const uintlQS0X1h = BigInt("777")
		const addresshjg5dqA = accounts[3]
		const byteQFeo9Fr = "0x031419121d05160f121f181b1a1d15181a111f010503111e191213140e1801"
		const uintoxcfLLi = BigInt("1421")
		const addressJgPI3T2 = accounts[1]
		const uintQZue5e = BigInt("2014")
		const addressvsBmmbE = accounts[2]
		const addressPVCeRfI = accounts[4]
		const uintE0WKu0E = BigInt("1119")
		const addressxc7sBIx = accounts[4]
		const uintec0ICtf = BigInt("622")
		const addressBFG0wa = accounts[4]
		const addressIyLOcn2 = accounts[0]
		const boolKCFK2Xx = await MARVELCOINpBlifjV.approve.call(addresshjg5dqA, uintlQS0X1h, {from: accounts[1]});
		const booliT71EbH = await MARVELCOINpBlifjV.approveAndCall.call(addressJgPI3T2, uintoxcfLLi, byteQFeo9Fr, {from: accounts[1]});
		const boolNVgC6zm = await MARVELCOINpBlifjV.transferFrom.call(addressPVCeRfI, addressvsBmmbE, uintQZue5e, {from: accounts[2]});
		const boolTz5J0o = await MARVELCOINpBlifjV.transfer.call(addressxc7sBIx, uintE0WKu0E, {from: accounts[4]});
		const boolC9dW7D1 = await MARVELCOINpBlifjV.transferFrom.call(addressIyLOcn2, addressBFG0wa, uintec0ICtf, {from: accounts[2]});

		assert.equal(boolKCFK2Xx, true)
		await expect(MARVELCOINpBlifjV.approveAndCall.call(addressJgPI3T2, uintoxcfLLi, byteQFeo9Fr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintkhl7P7X = BigInt("967")
		const stringiDf1Rjk = "d327h6JtIldRLxqK0nnvXGqGUEqihZo7Gbhc"
		const stringfSJyZrZ = "YkiXIdhp6a561bcGt68d4NNAlVuVLNgxwISmiKuW6sidwcyUJb2bdzUCUJEoNZb"
		const MARVELCOINaYxKjj = await MARVELCOIN.new(uintkhl7P7X, stringiDf1Rjk, stringfSJyZrZ, {from: accounts[4]});
		const uintcCqa4A = BigInt("1920")
		const addressBfeBZlu = "0x0000000000000000000000000000000000000001"
		const addressynJzr1T = accounts[1]
		const uintaRxYqoe = BigInt("1308")
		const addressbfkDJqL = accounts[1]
		const bytewQApOWB = "0x17150d1c110a1808030e1d0b1a0a2010051f0e171d0d00121216"
		const uintb98vY2Z = BigInt("273")
		const addressIlY6Jja = accounts[1]
		const uintqY4Wo0w = BigInt("501")
		const boolKUQUDKQ = await MARVELCOINaYxKjj.transferFrom.call(addressynJzr1T, addressBfeBZlu, uintcCqa4A, {from: accounts[3]});
		const boolO54aq3P = await MARVELCOINaYxKjj.approve.call(addressbfkDJqL, uintaRxYqoe, {from: "0x0000000000000000000000000000000000000001"});
		const boolrkaFAge = await MARVELCOINaYxKjj.approveAndCall.call(addressIlY6Jja, uintb98vY2Z, bytewQApOWB, {from: accounts[0]});
		const boolOhRcIoG = await MARVELCOINaYxKjj.burn.call(uintqY4Wo0w, {from: accounts[5]});

		await expect(MARVELCOINaYxKjj.transferFrom.call(addressynJzr1T, addressBfeBZlu, uintcCqa4A, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintumtTX4X = BigInt("1561")
		const stringMueqP0t = "LIAQVDR7cJhqi773d8vJQlBZvcvSmAJryFAHpdii1A3HTxkPgA2ei636yz"
		const stringztqKbpS = "rFxTvS68n8Q6H6RnjncfWSLtJJG3xfmSnz6NX9VbncHsKjtf35lHFr7wLXAAsTxfi0eHAjh4lnPgBXusq6WMYLxuvY06xB4f"
		const MARVELCOINOjzEKfX = await MARVELCOIN.new(uintumtTX4X, stringMueqP0t, stringztqKbpS, {from: accounts[2]});
		const uintzwHvukf = BigInt("712")
		const addressLXAEybU = "0x0000000000000000000000000000000000000001"
		const uintR8zZKWO = BigInt("880")
		const addresswwNa7ai = "0x0000000000000000000000000000000000000001"
		const uintrEmNyRe = BigInt("1135")
		const addressc0jEeKy = accounts[2]
		const uint8dFr3J = BigInt("1383")
		const addresspWry5VJ = accounts[1]
		const uintYHvRrCy = BigInt("333")
		const uintVgneK5U = BigInt("693")
		const boolN7bDzJP = await MARVELCOINOjzEKfX.approve.call(addressLXAEybU, uintzwHvukf, {from: accounts[2]});
		const booluZjkfEI = await MARVELCOINOjzEKfX.approve.call(addresswwNa7ai, uintR8zZKWO, {from: accounts[1]});
		const boolxyIFyU = await MARVELCOINOjzEKfX.approve.call(addressc0jEeKy, uintrEmNyRe, {from: accounts[5]});
		const boolrjP04BQ = await MARVELCOINOjzEKfX.approve.call(addresspWry5VJ, uint8dFr3J, {from: accounts[1]});
		const boolArtj1pw = await MARVELCOINOjzEKfX.burn.call(uintYHvRrCy, {from: accounts[1]});
		const boolcwj3Hn3 = await MARVELCOINOjzEKfX.burn.call(uintVgneK5U, {from: accounts[1]});

		assert.equal(boolN7bDzJP, true)
		assert.equal(boolrjP04BQ, true)
		assert.equal(booluZjkfEI, true)
		assert.equal(boolxyIFyU, true)
		await expect(MARVELCOINOjzEKfX.burn.call(uintYHvRrCy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintIRJjzkb = BigInt("549")
		const stringUeFGm5B = "2l"
		const stringFNHO8pj = "sgG6njgDB0LHzdHuPC5GsneWHjXJXxB5uTtKSb93VLFqCmruffJkKKsZhWyVjXCIC6PItbc"
		const MARVELCOINa8iqo0M = await MARVELCOIN.new(uintIRJjzkb, stringUeFGm5B, stringFNHO8pj, {from: accounts[0]});
		const uintsL3Hm4p = BigInt("1763")
		const addressv3HTQyt = accounts[2]
		const byteDhAS7Av = "0x08"
		const uintsZVEqt7 = BigInt("1516")
		const addressB9AOCLU = accounts[5]
		const uintyz4VmK = BigInt("705")
		const addresssh7Z07e = accounts[2]
		const addressUeTofC = accounts[2]
		const uintb26OY8b = BigInt("312")
		const addressg5ksW3i = accounts[1]
		const boolQ2twE3 = await MARVELCOINa8iqo0M.burnFrom.call(addressv3HTQyt, uintsL3Hm4p, {from: accounts[1]});
		const boolom6G45Z = await MARVELCOINa8iqo0M.approveAndCall.call(addressB9AOCLU, uintsZVEqt7, byteDhAS7Av, {from: accounts[2]});
		const booly5I5ky7 = await MARVELCOINa8iqo0M.transferFrom.call(addressUeTofC, addresssh7Z07e, uintyz4VmK, {from: accounts[4]});
		const boolnfHDPVh = await MARVELCOINa8iqo0M.approve.call(addressg5ksW3i, uintb26OY8b, {from: accounts[1]});

		await expect(MARVELCOINa8iqo0M.burnFrom.call(addressv3HTQyt, uintsL3Hm4p, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintNWWiNSL = BigInt("275")
		const stringhJ6U7Hl = "4aEk99vKNLttup4COIEVi"
		const stringMqip8RM = "j2JxF6bpRxPDRnX4X58xQUNQ75rPEhJHfmW8N9iR0ep8JMluvSwMhjznCgjPx7Fjejn78pmYGix"
		const MARVELCOININWuuR = await MARVELCOIN.new(uintNWWiNSL, stringhJ6U7Hl, stringMqip8RM, {from: accounts[2]});
		const uintqwSfCoY = BigInt("2014")
		const uinthvzhZkX = BigInt("1037")
		const byteqDWUfJT = "0x061519070f09150c1b1f02180e181c0b030a"
		const uintuSODymq = BigInt("233")
		const addressvzYvM0c = accounts[0]
		const uintWUzXG5U = BigInt("941")
		const addresstdPGdS8 = accounts[0]
		const uintXuJPhOo = BigInt("563")
		const uintZYiTOcx = BigInt("1867")
		const addressAa3OHYa = accounts[1]
		const boolRdWQvCq = await MARVELCOININWuuR.burn.call(uintqwSfCoY, {from: accounts[2]});
		const boolA7MRkRE = await MARVELCOININWuuR.burn.call(uinthvzhZkX, {from: "0x0000000000000000000000000000000000000001"});
		const boolcHZGMOa = await MARVELCOININWuuR.approveAndCall.call(addressvzYvM0c, uintuSODymq, byteqDWUfJT, {from: accounts[5]});
		const boollQRquI = await MARVELCOININWuuR.approve.call(addresstdPGdS8, uintWUzXG5U, {from: accounts[2]});
		const boolSTo0lm = await MARVELCOININWuuR.burn.call(uintXuJPhOo, {from: accounts[4]});
		const booloxxbXrd = await MARVELCOININWuuR.burnFrom.call(addressAa3OHYa, uintZYiTOcx, {from: accounts[0]});

		assert.equal(boolRdWQvCq, true)
		await expect(MARVELCOININWuuR.burn.call(uinthvzhZkX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintVvjYSDV = BigInt("549")
		const stringUeFGm5B = "2l"
		const stringFNHO8pj = "sgG6njgDB0LHzdHuPC5GsneWHjXJXxB5uTtKSb93VLFqCmruffJkKKsZhWyVjXCIC6PItbc"
		const MARVELCOINa8iqo0M = await MARVELCOIN.new(uintVvjYSDV, stringUeFGm5B, stringFNHO8pj, {from: accounts[0]});
		const uintDPVl16k = BigInt("362")
		const addressEaxC1LK = accounts[0]
		const uintn0lZher = BigInt("1763")
		const addressvs8VJ6K = accounts[2]
		const byteejjspR2 = "0x08"
		const uintDzc2teB = BigInt("1273")
		const addresspRSjs8m = accounts[5]
		const uintlAhXOZ8 = BigInt("135")
		const addressMbpDllS = accounts[0]
		const addresshDLF1JT = accounts[5]
		const boolYRqLQCQ = await MARVELCOINa8iqo0M.burnFrom.call(addressEaxC1LK, uintDPVl16k, {from: accounts[3]});
		const boolQ2twE3 = await MARVELCOINa8iqo0M.burnFrom.call(addressvs8VJ6K, uintn0lZher, {from: accounts[1]});
		const boolom6G45Z = await MARVELCOINa8iqo0M.approveAndCall.call(addresspRSjs8m, uintDzc2teB, byteejjspR2, {from: accounts[2]});
		const boolzhMfoqR = await MARVELCOINa8iqo0M.transferFrom.call(addresshDLF1JT, addressMbpDllS, uintlAhXOZ8, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MARVELCOINa8iqo0M.burnFrom.call(addressEaxC1LK, uintDPVl16k, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintkOSAEMk = BigInt("577")
		const stringfNdBDR = "4POktbrTRZMkIWSTJw756Pn7jgS6AKpeEmnWzEfdBbmDIbCMCziGMk0PfhkXRm7lLmBFIwW2Xj"
		const stringpuLdgx4 = "75R73QNYYB86QpCPh5tAwBDTRVsww6z5YHPofBWpbZMKlrvPegcbDkM3WYMIp"
		const MARVELCOINFCXF2PM = await MARVELCOIN.new(uintkOSAEMk, stringfNdBDR, stringpuLdgx4, {from: accounts[2]});
		const uintaosBQli = BigInt("1682")
		const addressSQ32BaK = accounts[2]
		const uint0iIJ0E = BigInt("1618")
		const addressHdFZG2z = "0x0000000000000000000000000000000000000001"
		const byteyKEBkG = "0x1f0810041b1302061f070d16160a0a1606030b"
		const uintHxAWW0B = BigInt("504")
		const addressAMr3Q1u = accounts[1]
		const uintosMqsm8 = BigInt("126")
		const addressPPNNXV = accounts[0]
		const uintK4Dq66G = BigInt("1748")
		const addressQHxF3gt = accounts[0]
		const addressQqk96GS = "0x0000000000000000000000000000000000000001"
		const boolrr0HnWB = await MARVELCOINFCXF2PM.approve.call(addressSQ32BaK, uintaosBQli, {from: accounts[2]});
		const boolh04VU6h = await MARVELCOINFCXF2PM.transfer.call(addressHdFZG2z, uint0iIJ0E, {from: accounts[3]});
		const boolsl5ystG = await MARVELCOINFCXF2PM.approveAndCall.call(addressAMr3Q1u, uintHxAWW0B, byteyKEBkG, {from: "0x0000000000000000000000000000000000000001"});
		const boolrHDoaew = await MARVELCOINFCXF2PM.approve.call(addressPPNNXV, uintosMqsm8, {from: accounts[1]});
		const boolKMVfd3y = await MARVELCOINFCXF2PM.transferFrom.call(addressQqk96GS, addressQHxF3gt, uintK4Dq66G, {from: accounts[4]});

		assert.equal(boolrr0HnWB, true)
		await expect(MARVELCOINFCXF2PM.transfer.call(addressHdFZG2z, uint0iIJ0E, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uints2PcGGV = BigInt("327")
		const stringT7SnGSV = "dX8SfwlDmwb1wJT5N3EIqffvzD0cPlp2MtBI9MnLHR04Xa6JDkXoRf7R4CR5fTBcXnBbStyjMtGpn"
		const stringhxG8GUW = "SiCEl1yoQp4u0Bjxa66"
		const MARVELCOINtGsDvUk = await MARVELCOIN.new(uints2PcGGV, stringT7SnGSV, stringhxG8GUW, {from: "0x0000000000000000000000000000000000000001"});
		const uinta2LRd7z = BigInt("1808")
		const bytewUw1AD = "0x1600060b1a130a10"
		const uintR4SgwJi = BigInt("160")
		const addressr2PUZM = accounts[4]
		const uintWotgeFT = BigInt("101")
		const addressR5Zhyyc = accounts[1]
		const uintWxkjbJ6 = BigInt("1017")
		const addressX68VTeu = accounts[5]
		const uinteUjtlh = BigInt("758")
		const addressqY3HUF = accounts[0]
		const byteIrmw4eG = "0x1c081e11161411170c121f082004061e0903180a02130708"
		const uintxjbhniR = BigInt("1920")
		const addresssKYIkbC = accounts[2]
		const boolcO8qLKv = await MARVELCOINtGsDvUk.burn.call(uinta2LRd7z, {from: accounts[1]});
		const boolQaPMQj = await MARVELCOINtGsDvUk.approveAndCall.call(addressr2PUZM, uintR4SgwJi, bytewUw1AD, {from: accounts[0]});
		const boolsAlZKCv = await MARVELCOINtGsDvUk.approve.call(addressR5Zhyyc, uintWotgeFT, {from: accounts[4]});
		const boolzlTMPmU = await MARVELCOINtGsDvUk.burnFrom.call(addressX68VTeu, uintWxkjbJ6, {from: "0x0000000000000000000000000000000000000001"});
		const boollcRmOgt = await MARVELCOINtGsDvUk.approve.call(addressqY3HUF, uinteUjtlh, {from: accounts[4]});
		const boolAMFPzID = await MARVELCOINtGsDvUk.approveAndCall.call(addresssKYIkbC, uintxjbhniR, byteIrmw4eG, {from: accounts[0]});
	});

	it('test for MARVELCOIN', async () => {
		const uintFY8tilR = BigInt("1754")
		const stringHQgpTTw = "r3jI6cVKnKoCZnxGibJVzvEH41vqfm7MafHkEKUId1p3ICX"
		const stringo6F8lSr = "dc"
		const MARVELCOINHmRNRvy = await MARVELCOIN.new(uintFY8tilR, stringHQgpTTw, stringo6F8lSr, {from: accounts[2]});
		const uinteUGg8K = BigInt("473")
		const addressFq0BjgM = accounts[5]
		const uintaIwmX8u = BigInt("494")
		const addressN4FfB3X = accounts[0]
		const uintqpbpHFP = BigInt("1082")
		const boolcTs35fn = await MARVELCOINHmRNRvy.approve.call(addressFq0BjgM, uinteUGg8K, {from: accounts[1]});
		const boolClI9iYH = await MARVELCOINHmRNRvy.transfer.call(addressN4FfB3X, uintaIwmX8u, {from: accounts[2]});
		const boolQs6oFm5 = await MARVELCOINHmRNRvy.burn.call(uintqpbpHFP, {from: accounts[0]});

		assert.equal(boolClI9iYH, true)
		assert.equal(boolcTs35fn, true)
		await expect(MARVELCOINHmRNRvy.burn.call(uintqpbpHFP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})