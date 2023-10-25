const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintaNiZPTh = BigInt("501")
		const stringXMYuqVH = "dGDaoFuJrJVaySndpBzMMriZ8FnITxCpGv8BvV8GhULUsbMLOJp03HJ"
		const stringWJfaRGd = "9lgiS"
		const GFCMsySPaT = await GFC.new(uintaNiZPTh, stringXMYuqVH, stringWJfaRGd, {from: accounts[3]});
		const uintWzIWVSJ = BigInt("410")
		const byteICtzybM = "0x1610160413021e181c16021b1a0118070904090905070e000d16071f"
		const uintMEyAIu2 = BigInt("1447")
		const addressVp7Xovw = "0x0000000000000000000000000000000000000001"
		const uinthtfXqL = BigInt("870")
		const addressTyiC9wO = accounts[2]
		const addressn27kZQl = accounts[4]
		const boolRyIKiV0 = await GFCMsySPaT.burn.call(uintWzIWVSJ, {from: accounts[3]});
		const boolGcHxxsO = await GFCMsySPaT.approveAndCall.call(addressVp7Xovw, uintMEyAIu2, byteICtzybM, {from: accounts[0]});
		const boolwJyBc7k = await GFCMsySPaT.transferFrom.call(addressn27kZQl, addressTyiC9wO, uinthtfXqL, {from: accounts[5]});

		assert.equal(boolRyIKiV0, true)
		await expect(GFCMsySPaT.approveAndCall.call(addressVp7Xovw, uintMEyAIu2, byteICtzybM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintgh0acv = BigInt("672")
		const stringHad9BT7 = "H5yOK7zDJpgYb56lIhRCkJQ3toIyRT9qtOjVplnhsYUSdLoH5DEmlhIjJz7SczEPCaRRW2lBOAJ6nqlHNTNo9vyP1xq"
		const stringEYJ7hG = "8PotiRBDJERBSLNBrJDgpv6Ld83TgxucMdnyQHK0"
		const GFCXMkkziB = await GFC.new(uintgh0acv, stringHad9BT7, stringEYJ7hG, {from: accounts[3]});
		const uintvrQ9lp2 = BigInt("1450")
		const addressXh0mNKD = accounts[5]
		const addressaEPeejo = accounts[4]
		const uintNJ4TDf2 = BigInt("75")
		const uintnDCmnhu = BigInt("1182")
		const addressEwQ4Dy3 = accounts[2]
		const uintxSHQx6 = BigInt("1094")
		const uints9wFKr1 = BigInt("1127")
		const address6PaodX = accounts[3]
		const uintXiIdlkQ = BigInt("1642")
		const addressFb9erXS = accounts[3]
		const addressEHLSWaH = accounts[2]
		const boolrYxzu2p = await GFCXMkkziB.transferFrom.call(addressaEPeejo, addressXh0mNKD, uintvrQ9lp2, {from: accounts[4]});
		const booljrVGmLs = await GFCXMkkziB.burn.call(uintNJ4TDf2, {from: accounts[4]});
		const booluibLclb = await GFCXMkkziB.approve.call(addressEwQ4Dy3, uintnDCmnhu, {from: accounts[2]});
		const boolBDm3MSR = await GFCXMkkziB.burn.call(uintxSHQx6, {from: accounts[3]});
		const boolb9T2HI5 = await GFCXMkkziB.approve.call(address6PaodX, uints9wFKr1, {from: accounts[0]});
		const boolFLqLP0 = await GFCXMkkziB.transferFrom.call(addressEHLSWaH, addressFb9erXS, uintXiIdlkQ, {from: accounts[1]});

		await expect(GFCXMkkziB.transferFrom.call(addressaEPeejo, addressXh0mNKD, uintvrQ9lp2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintLRtbBYF = BigInt("262")
		const stringEPxwV92 = "UTGUSUMDTbmSILOU8KRUFSFeYqgmaUzDSlWvzzyBmH5yN1mIyjSrcUw1Ak5ClR7yj7ulNHHQNUO0PJW"
		const stringpIyexTI = "BeC2Pav3FWlUkWdr26he9VvAsYh"
		const GFCvQagbcn = await GFC.new(uintLRtbBYF, stringEPxwV92, stringpIyexTI, {from: accounts[4]});
		const uintNOTLItE = BigInt("263")
		const addressQBSk0q = accounts[3]
		const uintd4ENB5g = BigInt("473")
		const uintsIRd0oN = BigInt("758")
		const addressyeaNUkw = "0x0000000000000000000000000000000000000001"
		const booleR8hFM = await GFCvQagbcn.transfer.call(addressQBSk0q, uintNOTLItE, {from: accounts[3]});
		const booldfEsY9b = await GFCvQagbcn.burn.call(uintd4ENB5g, {from: "0x0000000000000000000000000000000000000001"});
		const boolO2BYLX = await GFCvQagbcn.approve.call(addressyeaNUkw, uintsIRd0oN, {from: accounts[4]});

		await expect(GFCvQagbcn.transfer.call(addressQBSk0q, uintNOTLItE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintCEH0pg = BigInt("483")
		const stringRRCgVGo = "vgF"
		const stringfob7XSb = "urBYRuhk2SWgf285oWbHJ1CTs8c17hvb8gNqw950QN7QjaVBy1yzl"
		const GFCP7Ri2zm = await GFC.new(uintCEH0pg, stringRRCgVGo, stringfob7XSb, {from: accounts[0]});
		const uintt8VObHU = BigInt("1640")
		const addressR5BCzl0 = accounts[2]
		const uintYnWwcmH = BigInt("1632")
		const addresska1Eqcc = accounts[5]
		const uinttRprdLv = BigInt("224")
		const addressU68SZR2 = accounts[5]
		const addresscSx2vd = "0x0000000000000000000000000000000000000001"
		const uintt2y4QYF = BigInt("137")
		const addresscjkH7Q = accounts[5]
		const bytejmhxJfa = "0x082013080d0113070212140f0918081f180813031e1e09"
		const uintvAAlsXM = BigInt("434")
		const addressajHlIF6 = accounts[3]
		const uintnL93aJ = BigInt("310")
		const addressJVpsyyF = accounts[2]
		const boolyYtrIjI = await GFCP7Ri2zm.burnFrom.call(addressR5BCzl0, uintt8VObHU, {from: accounts[1]});
		const boolUXCJVU5 = await GFCP7Ri2zm.approve.call(addresska1Eqcc, uintYnWwcmH, {from: accounts[1]});
		const boolh0CEU44 = await GFCP7Ri2zm.transferFrom.call(addresscSx2vd, addressU68SZR2, uinttRprdLv, {from: accounts[1]});
		const boolMVtE9uS = await GFCP7Ri2zm.approve.call(addresscjkH7Q, uintt2y4QYF, {from: accounts[4]});
		const booljYR5dl = await GFCP7Ri2zm.approveAndCall.call(addressajHlIF6, uintvAAlsXM, bytejmhxJfa, {from: accounts[0]});
		const boolQg0Ibao = await GFCP7Ri2zm.transfer.call(addressJVpsyyF, uintnL93aJ, {from: accounts[2]});

		await expect(GFCP7Ri2zm.burnFrom.call(addressR5BCzl0, uintt8VObHU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintJlPQsf = BigInt("483")
		const stringRRCgVGo = "vgF"
		const stringfob7XSb = "urBYRuhk2SWgf285oWbHJ1CTs8c17hvb8gNqw950QN7QjaVBy1yzl"
		const GFCP7Ri2zm = await GFC.new(uintJlPQsf, stringRRCgVGo, stringfob7XSb, {from: accounts[0]});
		const uintHGcSfsY = BigInt("608")
		const addressm4Ftd9b = accounts[0]
		const uintT6Qnfm7 = BigInt("1640")
		const addressvPkPzrp = accounts[3]
		const uintaH1YDnM = BigInt("1632")
		const addressOJNdvn3 = accounts[5]
		const uinttC41jF = BigInt("224")
		const addressrNANlCA = accounts[5]
		const addressSGGtRI7 = "0x0000000000000000000000000000000000000001"
		const uintUKIhiI2 = BigInt("310")
		const addressG8HPoXf = accounts[2]
		const boolsjmoax3 = await GFCP7Ri2zm.burnFrom.call(addressm4Ftd9b, uintHGcSfsY, {from: accounts[4]});
		const boolyYtrIjI = await GFCP7Ri2zm.burnFrom.call(addressvPkPzrp, uintT6Qnfm7, {from: accounts[1]});
		const boolUXCJVU5 = await GFCP7Ri2zm.approve.call(addressOJNdvn3, uintaH1YDnM, {from: accounts[1]});
		const boolh0CEU44 = await GFCP7Ri2zm.transferFrom.call(addressSGGtRI7, addressrNANlCA, uinttC41jF, {from: accounts[1]});
		const boolQg0Ibao = await GFCP7Ri2zm.transfer.call(addressG8HPoXf, uintUKIhiI2, {from: accounts[2]});

		await expect(GFCP7Ri2zm.burnFrom.call(addressm4Ftd9b, uintHGcSfsY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintsZqJsCF = BigInt("262")
		const stringEPxwV92 = "UTGUSUMDTbmSILOU8KRUFSFeYqgmaUzDSlWvzzyBmH5yN1mIyjSrcUw1Ak5ClR7yj7ulNHHQNUO0PJW"
		const stringpIyexTI = "BeC2Pav3FWlUkWdr26he9VvAsYh"
		const GFCvQagbcn = await GFC.new(uintsZqJsCF, stringEPxwV92, stringpIyexTI, {from: accounts[4]});
		const uintXt4HIJt = BigInt("1568")
		const addressFvKKWhC = accounts[5]
		const uintDne7Egj = BigInt("263")
		const addressSpFMk1P = accounts[3]
		const uintSQxkc4p = BigInt("473")
		const uintqBXk7U1 = BigInt("758")
		const addressgs102F1 = "0x0000000000000000000000000000000000000001"
		const uintCpci2Vr = BigInt("476")
		const addressQOep5F2 = accounts[4]
		const byteLqVrCA4 = "0x03040006140918110c190c02131e19"
		const uintSELXKyf = BigInt("590")
		const addresswCl5VY2 = accounts[5]
		const uintHqSXNBi = BigInt("305")
		const addresszg4zZUT = accounts[1]
		const addressAKihAcY = accounts[3]
		const boolEo879qX = await GFCvQagbcn.transfer.call(addressFvKKWhC, uintXt4HIJt, {from: accounts[4]});
		const booleR8hFM = await GFCvQagbcn.transfer.call(addressSpFMk1P, uintDne7Egj, {from: accounts[3]});
		const booldfEsY9b = await GFCvQagbcn.burn.call(uintSQxkc4p, {from: "0x0000000000000000000000000000000000000001"});
		const boolO2BYLX = await GFCvQagbcn.approve.call(addressgs102F1, uintqBXk7U1, {from: accounts[4]});
		const boolXuKgEg = await GFCvQagbcn.approve.call(addressQOep5F2, uintCpci2Vr, {from: accounts[4]});
		const boolcSh2QOL = await GFCvQagbcn.approveAndCall.call(addresswCl5VY2, uintSELXKyf, byteLqVrCA4, {from: "0x0000000000000000000000000000000000000001"});
		const boolWfpgWoa = await GFCvQagbcn.transferFrom.call(addressAKihAcY, addresszg4zZUT, uintHqSXNBi, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolEo879qX, true)
		await expect(GFCvQagbcn.transfer.call(addressSpFMk1P, uintDne7Egj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintTT3nGKj = BigInt("1097")
		const stringDnqfGYn = "vi5OuVzcaMg2Xedii3"
		const stringWrrjpw5 = "HDHIBpu5WEkFmrX8pXZYf6f7ju2CgWJNHzSqMDcOHA46UFpqxU4YIYceUmnKw8kPb"
		const GFCTXPDQA = await GFC.new(uintTT3nGKj, stringDnqfGYn, stringWrrjpw5, {from: "0x0000000000000000000000000000000000000001"});
		const uintw6nxgBc = BigInt("521")
		const addresslKFn3we = accounts[2]
		const byteouL4f5m = "0x021d1e0211"
		const uintVm2gxPf = BigInt("1665")
		const addressmf5Tcum = accounts[1]
		const uintmkfMZox = BigInt("1453")
		const addressgebHN04 = accounts[4]
		const uintwmEplF = BigInt("1192")
		const byteAtNMgJV = "0x071c1b1b09021f1f04071d111e040908001503040a0216161918"
		const uintc9uVPBp = BigInt("1378")
		const addressveBiWdV = accounts[1]
		const byteCuY98UI = "0x0b1609041f0118091f16080c130406161d0b0416000f12051a11071d0c091705"
		const uintPfN5eei = BigInt("1939")
		const addressh1g7GkP = accounts[3]
		const boolDlallBz = await GFCTXPDQA.approve.call(addresslKFn3we, uintw6nxgBc, {from: accounts[0]});
		const boolE0Wgtxj = await GFCTXPDQA.approveAndCall.call(addressmf5Tcum, uintVm2gxPf, byteouL4f5m, {from: accounts[0]});
		const bool7mHlfb = await GFCTXPDQA.burnFrom.call(addressgebHN04, uintmkfMZox, {from: accounts[2]});
		const boolGtngq3 = await GFCTXPDQA.burn.call(uintwmEplF, {from: accounts[2]});
		const boolbLsjF3X = await GFCTXPDQA.approveAndCall.call(addressveBiWdV, uintc9uVPBp, byteAtNMgJV, {from: accounts[1]});
		const boolGHn2Jcs = await GFCTXPDQA.approveAndCall.call(addressh1g7GkP, uintPfN5eei, byteCuY98UI, {from: accounts[5]});
	});
})