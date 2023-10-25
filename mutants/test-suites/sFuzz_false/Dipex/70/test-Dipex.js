const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringTvw3E5b = "oub4VbGWxjkUVB"
		const stringcUL8qEo = "zmIfGJ1STpCgQtbVefHKbiIvzb7I1rGl2HaLJTkeVnO4r6uxdMUVwWx9dFSdqG20DUVfn4eE62Fb2UxQqS2QLDETbk4nA2kNra"
		const uintkCoR4V2 = BigInt("471")
		const DipexyXOUnU6 = await Dipex.new(stringTvw3E5b, stringcUL8qEo, uintkCoR4V2, {from: accounts[0]});
		const uintUFRyLlw = BigInt("1693")
		const addressv4JMq6 = accounts[1]
		const uintpbhHnL = BigInt("1242")
		const addressSzfZqRa = accounts[1]
		const uint4xBObs = BigInt("1249")
		const addressQRwu3YZ = accounts[0]
		const addressKpTnSX1 = accounts[1]
		const uintujyJoaj = BigInt("338")
		const addressMCW0scA = accounts[3]
		const addressACxOrgH = accounts[1]
//		const boolg3ZuvDc = await DipexyXOUnU6.approveAndCall.call(addressv4JMq6, uintUFRyLlw, {from: accounts[5]});
//		const boolRTWRQlk = await DipexyXOUnU6.approve.call(addressSzfZqRa, uintpbhHnL, {from: accounts[4]});
//		const booloByPUGJ = await DipexyXOUnU6.transferFrom.call(addressKpTnSX1, addressQRwu3YZ, uint4xBObs, {from: accounts[2]});
//		const boolR8CYP8 = await DipexyXOUnU6.transferFrom.call(addressACxOrgH, addressMCW0scA, uintujyJoaj, {from: accounts[0]});

		await expect(DipexyXOUnU6.approveAndCall.call(addressv4JMq6, uintUFRyLlw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringabieeIs = "ldTLp5culXhlHDoDopGlIbbMq9d6uS492EKxeaY19yvZOUaJTEMJ9V1glK3ELT8mmGNbGkAz30hMeAe6pedn"
		const stringtqcn97K = "hG9zM0CijkEppzPsR3irPY826s11MMoBZiEXeIKQjLl"
		const uintfnzrMS1 = BigInt("100")
		const DipexwLvAGt9 = await Dipex.new(stringabieeIs, stringtqcn97K, uintfnzrMS1, {from: accounts[3]});
		const uintjGrCbPm = BigInt("313")
		const addressQS9qrT = accounts[3]
		const uintE5ngvLJ = BigInt("1141")
		const addressVEkaJYX = accounts[2]
		const addressZPjK5fJ = accounts[3]
		const uintLZHxrmy = BigInt("817")
		const addressrdC1jaD = accounts[2]
		const addressb9uNvdL = accounts[1]
		const uintmn1cn1A = BigInt("396")
		const addressBNpPbwi = accounts[4]
		const boolPMfQbLm = await DipexwLvAGt9.approve.call(addressQS9qrT, uintjGrCbPm, {from: accounts[0]});
//		const boolY0bZN7 = await DipexwLvAGt9.transferFrom.call(addressZPjK5fJ, addressVEkaJYX, uintE5ngvLJ, {from: accounts[2]});
//		const boolRkmu4R = await DipexwLvAGt9.transferFrom.call(addressb9uNvdL, addressrdC1jaD, uintLZHxrmy, {from: accounts[4]});
//		const boolkHfJ3Gf = await DipexwLvAGt9.approve.call(addressBNpPbwi, uintmn1cn1A, {from: accounts[2]});

		assert.equal(boolPMfQbLm, true)
		await expect(DipexwLvAGt9.transferFrom.call(addressZPjK5fJ, addressVEkaJYX, uintE5ngvLJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const strings98aqz = "gLcapiD7U6kKzDvuXHv1GwJmy4PymnRT087HlYzlRXYU2GZDKVF8R1xJVWMaGkk7biFhuu9b1haIOX5IbL3"
		const stringZtZPrwh = "RuViDzJccJBASZTTFgi5E3YtSam92JKYq"
		const uintT3x84HM = BigInt("1053")
		const DipexLlgHFz = await Dipex.new(strings98aqz, stringZtZPrwh, uintT3x84HM, {from: accounts[4]});
		const addresshhwRT3K = accounts[0]
		const uintX5FdlJw = BigInt("1235")
		const addressVxobMkR = accounts[2]
		const addressPOCvfLb = accounts[1]
		const addresswf5IrIa = accounts[2]
		const uintjCACm4b = BigInt("479")
		const addressTTzNjBF = accounts[1]
		const addressOs3GBbX = accounts[0]
		const uintOnCCz3l = BigInt("1655")
		const addresstRDEShv = accounts[3]
//		const boolsb4VCr0 = await DipexLlgHFz.transferownership.call(addresshhwRT3K, {from: accounts[5]});
//		const boolYeQ333B = await DipexLlgHFz.transferFrom.call(addressPOCvfLb, addressVxobMkR, uintX5FdlJw, {from: "0x0000000000000000000000000000000000000001"});
//		const boolWIsgPaP = await DipexLlgHFz.transferownership.call(addresswf5IrIa, {from: accounts[4]});
//		const boolZUpQeg0 = await DipexLlgHFz.transferFrom.call(addressOs3GBbX, addressTTzNjBF, uintjCACm4b, {from: accounts[1]});
//		const booll1WYKu4 = await DipexLlgHFz.approve.call(addresstRDEShv, uintOnCCz3l, {from: accounts[4]});

		await expect(DipexLlgHFz.transferownership.call(addresshhwRT3K, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringUln1szt = "HLuvuTtOTxwJk7y2heViflmUbBDpuMRpTtArtRDSf1wf6ccy3uGTnlffYUOU6JK8mktn1vNwUFYOd1XY1"
		const stringPjlolO4 = "zzUkgqo91bPuedckyiN6rdqPtnJnfktcHIfaTYpCE1EDBE6UvvAHsC3CoWT6kKFGatK4V"
		const uintzVFriyW = BigInt("2016")
		const DipexwVSkdxf = await Dipex.new(stringUln1szt, stringPjlolO4, uintzVFriyW, {from: accounts[3]});
		const uintO9VQie9 = BigInt("1297")
		const addresswn4lXux = accounts[4]
		const uintEjdqOHX = BigInt("1051")
		const addressmfiDSNQ = accounts[5]
		const addressEj3BopJ = accounts[2]
		const addresszpWLGYw = accounts[3]
//		const boolSrHoABB = await DipexwVSkdxf.transfer.call(addresswn4lXux, uintO9VQie9, {from: accounts[0]});
//		const boolGHz91Gw = await DipexwVSkdxf.transferFrom.call(addressEj3BopJ, addressmfiDSNQ, uintEjdqOHX, {from: accounts[5]});
//		const boolOLDTN1 = await DipexwVSkdxf.transferownership.call(addresszpWLGYw, {from: accounts[2]});

		await expect(DipexwVSkdxf.transfer.call(addresswn4lXux, uintO9VQie9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringaXG6NtS = "xif"
		const stringRb9aXBF = "Am56LkuLzQ1xSSJm"
		const uintSXMVEuN = BigInt("284")
		const DipexOMoCnh = await Dipex.new(stringaXG6NtS, stringRb9aXBF, uintSXMVEuN, {from: "0x0000000000000000000000000000000000000001"});
		const uintS00oHyc = BigInt("385")
		const addressMT9jA41 = accounts[2]
		const uintWpNC7ra = BigInt("334")
		const addressXCfYQSJ = accounts[1]
		const uintocp6rVf = BigInt("618")
		const addressBMjDte = accounts[5]
		const addressySg3CUS = accounts[3]
		const uintC3QPB5 = BigInt("35")
		const addresspVdprVS = accounts[0]
		const addressHj3jAsl = accounts[1]
		const uint4YN0To = BigInt("754")
		const addressrpXoFcQ = accounts[2]
		const boolIVOAjB1 = await DipexOMoCnh.approveAndCall.call(addressMT9jA41, uintS00oHyc, {from: accounts[0]});
		const boolEdf6bjh = await DipexOMoCnh.approveAndCall.call(addressXCfYQSJ, uintWpNC7ra, {from: accounts[3]});
		const boolUgW7XuE = await DipexOMoCnh.approve.call(addressBMjDte, uintocp6rVf, {from: accounts[0]});
		const bool1av4R2 = await DipexOMoCnh.transferownership.call(addressySg3CUS, {from: accounts[3]});
		const boolE0Z3yQ1 = await DipexOMoCnh.transferFrom.call(addressHj3jAsl, addresspVdprVS, uintC3QPB5, {from: accounts[2]});
		const boolD2Uucb3 = await DipexOMoCnh.approve.call(addressrpXoFcQ, uint4YN0To, {from: accounts[4]});
	});

	it('test for Dipex', async () => {
		const stringoQ50f8Q = "s4oIo22TNZWX98zJDguOKyhpFYcDhGKiWlVF3fvGy"
		const stringw5hIAYP = "PxEUqOBhx9Cfbw19ucBLUNyoK8EGePK3JRdR7o20ZKdFTWphR2OVYJYJiLhw9fljxbpRUJRdZS6Mm"
		const uintmYhTsqR = BigInt("1166")
		const DipexaOE4eJR = await Dipex.new(stringoQ50f8Q, stringw5hIAYP, uintmYhTsqR, {from: accounts[1]});
		const uintdNuVVJ = BigInt("880")
		const address6I1Pgt = accounts[1]
		const uintkOaz8wz = BigInt("529")
		const addressEk8vt7w = accounts[2]
		const uintgMX0AtT = BigInt("1679")
		const addressoFdEjKK = accounts[1]
		const addressNBbnb9 = accounts[0]
		const uintgpIxgRY = BigInt("1388")
		const addressagrhf8R = accounts[2]
		const uint25urxY = BigInt("153")
		const addressRxK7Mp = accounts[0]
//		const boolhFp4vfd = await DipexaOE4eJR.transfer.call(address6I1Pgt, uintdNuVVJ, {from: accounts[2]});
//		const boolFA7EaOb = await DipexaOE4eJR.approveAndCall.call(addressEk8vt7w, uintkOaz8wz, {from: "0x0000000000000000000000000000000000000001"});
//		const boolgZBmvrB = await DipexaOE4eJR.transferFrom.call(addressNBbnb9, addressoFdEjKK, uintgMX0AtT, {from: accounts[4]});
//		const boolTC9kNs = await DipexaOE4eJR.approve.call(addressagrhf8R, uintgpIxgRY, {from: accounts[4]});
//		const boolyNQEZER = await DipexaOE4eJR.transfer.call(addressRxK7Mp, uint25urxY, {from: accounts[3]});

		await expect(DipexaOE4eJR.transfer.call(address6I1Pgt, uintdNuVVJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringU4SJMkm = "wtbLPdhFXHl7SBsEA1yFqssj83xOFcxroZEkBT9E8OagqTwI"
		const stringOZpBSYU = "21rEat77LwaATyAGTLrDb1OEWaqD"
		const uintBHGLAAa = BigInt("136")
		const Dipexn8stFzH = await Dipex.new(stringU4SJMkm, stringOZpBSYU, uintBHGLAAa, {from: accounts[3]});
		const uintVU0pXeG = BigInt("676")
		const addressnLKd48N = accounts[3]
		const uintfdvIpiM = BigInt("50")
		const address2SpN85 = accounts[4]
		const uintFoaDfLy = BigInt("1759")
		const addresswMPc7W5 = accounts[1]
		const boolx1HEKNp = await Dipexn8stFzH.approveAndCall.call(addressnLKd48N, uintVU0pXeG, {from: accounts[3]});
//		const boolVSiVXQf = await Dipexn8stFzH.transfer.call(address2SpN85, uintfdvIpiM, {from: accounts[2]});
//		const boolLSQawb6 = await Dipexn8stFzH.transfer.call(addresswMPc7W5, uintFoaDfLy, {from: accounts[2]});

		assert.equal(boolx1HEKNp, true)
		await expect(Dipexn8stFzH.transfer.call(address2SpN85, uintfdvIpiM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringU4SJMkm = "wtbLPdhFXHl7SBsEA1yFqssj83xOFcxroZEkBT9E8OagqTwI"
		const stringOZpBSYU = "21rEat77LwaATyAGTLrDb1OEWaqD"
		const uinteA397hf = BigInt("136")
		const Dipexn8stFzH = await Dipex.new(stringU4SJMkm, stringOZpBSYU, uinteA397hf, {from: accounts[3]});
		const uintZ1wo5uJ = BigInt("676")
		const addresski3pah9 = accounts[3]
		const uintgnvUher = BigInt("0")
		const addressxaxgx8R = accounts[4]
		const uintliWe0bx = BigInt("1759")
		const addressXQ14pIg = accounts[1]
		const boolx1HEKNp = await Dipexn8stFzH.approveAndCall.call(addresski3pah9, uintZ1wo5uJ, {from: accounts[3]});
		const boolVSiVXQf = await Dipexn8stFzH.transfer.call(addressxaxgx8R, uintgnvUher, {from: accounts[2]});
//		const boolLSQawb6 = await Dipexn8stFzH.transfer.call(addressXQ14pIg, uintliWe0bx, {from: accounts[2]});

		assert.equal(boolVSiVXQf, true)
		assert.equal(boolx1HEKNp, true)
		await expect(Dipexn8stFzH.transfer.call(addressXQ14pIg, uintliWe0bx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringU4SJMkm = "wtbLPdhFXHl7SBsEA1yFqssj83xOFcxroZEkBT9E8OagqTwI"
		const stringOZpBSYU = "21rEat77LwaATyAGTLrDb1OEWaqD"
		const uinte6KNQOG = BigInt("136")
		const Dipexn8stFzH = await Dipex.new(stringU4SJMkm, stringOZpBSYU, uinte6KNQOG, {from: accounts[3]});
		const uintBfHAFVo = BigInt("0")
		const addressNUb8N9O = accounts[2]
		const boolNgnDkmh = await Dipexn8stFzH.approveAndCall.call(addressNUb8N9O, uintBfHAFVo, {from: accounts[3]});

		assert.equal(boolNgnDkmh, true)
	});
})