const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintNNeDp4D = BigInt("1499")
		const stringVzhDLVk = "MOuuYnRogqZOtkZBVu52cJpioqT7WdjBhBccroF99MGDKhjOSExRBmIDzJlGamDKX3jrygpwi6O6ZueMO"
		const stringkId9xU = "EprW5D2XOtqwcRYcX5jwTpQ2KJh3Hy4g1CrS1xQwt9digjxy1g3NFJxFf7b3EWA6E9pwtCIIMTNhhtmrYzZ"
		const GFCgd6LaJi = await GFC.new(uintNNeDp4D, stringVzhDLVk, stringkId9xU, {from: accounts[1]});
		const uinto98oEDO = BigInt("51")
		const addressByrgQu = accounts[3]
		const uintp3Gzmt = BigInt("473")
		const addressljvxjP5 = accounts[4]
		const byteAkC1bJW = "0x0e150907000f0c09000f090f191411020e141b0918130c111716090f00"
		const uintghu8vo = BigInt("1403")
		const addressumGFZv2 = accounts[3]
		const bytejRXhV5b = "0x03030611041808061e171d0b0c1116181216160d1602031000"
		const uintzL9MYTo = BigInt("597")
		const addressWQUXWS1 = accounts[1]
		const uintHfnQfjV = BigInt("1016")
		const addressnL00nak = accounts[0]
//		const boolQ8GDuDc = await GFCgd6LaJi.burnFrom.call(addressByrgQu, uinto98oEDO, {from: accounts[0]});
//		const boolR39Ugt = await GFCgd6LaJi.approve.call(addressljvxjP5, uintp3Gzmt, {from: accounts[2]});
//		const boolyHudJY2 = await GFCgd6LaJi.approveAndCall.call(addressumGFZv2, uintghu8vo, byteAkC1bJW, {from: accounts[5]});
//		const booljybZH5o = await GFCgd6LaJi.approveAndCall.call(addressWQUXWS1, uintzL9MYTo, bytejRXhV5b, {from: accounts[5]});
//		const boolYpYLOFP = await GFCgd6LaJi.transfer.call(addressnL00nak, uintHfnQfjV, {from: accounts[0]});

		await expect(GFCgd6LaJi.burnFrom.call(addressByrgQu, uinto98oEDO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintN8YvfVE = BigInt("1393")
		const stringoOsdtqR = "e6MzrUEQNcFspFQmdr9f6aAMlPvHFrQwYStTKgDDWuczeCuUtRQZdlCMtRtoDF3RzvLsD6FrrB"
		const stringtBpkU2 = "AQVHCM119GEKO"
		const GFCA561M95 = await GFC.new(uintN8YvfVE, stringoOsdtqR, stringtBpkU2, {from: accounts[5]});
		const uintvrLCPFe = BigInt("1299")
		const byteQEfy3gp = "0x0f13140504151e16171d1510"
		const uintcUgNfRc = BigInt("931")
		const addressg9beapF = accounts[5]
		const uintOl7uwca = BigInt("1562")
		const uintBIr2Ltl = BigInt("1388")
		const uintHTbwjTO = BigInt("591")
		const addresscvRSD4e = accounts[0]
		const byteLwaslK5 = "0x091009071800141e041003191d0b1b101e1b060214041f0e13150a11100f1601"
		const uint1pnHfn = BigInt("1023")
		const addressINZmdC0 = accounts[1]
//		const boolBEPHgq = await GFCA561M95.burn.call(uintvrLCPFe, {from: accounts[2]});
//		const boolxqoLGZF = await GFCA561M95.approveAndCall.call(addressg9beapF, uintcUgNfRc, byteQEfy3gp, {from: accounts[3]});
//		const booly6wkfhe = await GFCA561M95.burn.call(uintOl7uwca, {from: accounts[3]});
//		const boolJNJiLzf = await GFCA561M95.burn.call(uintBIr2Ltl, {from: "0x0000000000000000000000000000000000000001"});
//		const boolRVeCViD = await GFCA561M95.transfer.call(addresscvRSD4e, uintHTbwjTO, {from: accounts[3]});
//		const boolxVVCzGb = await GFCA561M95.approveAndCall.call(addressINZmdC0, uint1pnHfn, byteLwaslK5, {from: accounts[2]});

		await expect(GFCA561M95.burn.call(uintvrLCPFe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintcqBDvv = BigInt("784")
		const stringCExDlYg = "efz3K8rEftlMFtBeJTVLRc8fyH1"
		const stringJCwwoFT = "XGQrRPlQtMRdUEvbqOVZJLoeV9zPENPH6mRsB38VEWHo2OeDpjjLrRuTlTrV5VN6"
		const GFCTsamvN6 = await GFC.new(uintcqBDvv, stringCExDlYg, stringJCwwoFT, {from: "0x0000000000000000000000000000000000000001"});
		const uintxyEEBW5 = BigInt("874")
		const addressZr3waeS = accounts[1]
		const addresskJaGtaE = accounts[4]
		const bytecSuLJpF = "0x1e15061d1b07111019081c0a17150b051416101c1004151b02120c06"
		const uintg53R1N = BigInt("34")
		const addressuuhAtFg = accounts[2]
		const uintnUFI3uR = BigInt("1291")
		const addressZQ3EROu = accounts[2]
		const uintoETYI6 = BigInt("917")
		const addressZqXMHJN = accounts[1]
		const addresswWjWFqS = accounts[3]
		const boolfOqjQcU = await GFCTsamvN6.transferFrom.call(addresskJaGtaE, addressZr3waeS, uintxyEEBW5, {from: accounts[0]});
		const boolHv4lJBP = await GFCTsamvN6.approveAndCall.call(addressuuhAtFg, uintg53R1N, bytecSuLJpF, {from: "0x0000000000000000000000000000000000000001"});
		const boolxYDZDh = await GFCTsamvN6.approve.call(addressZQ3EROu, uintnUFI3uR, {from: accounts[1]});
		const boolE369SQ8 = await GFCTsamvN6.transferFrom.call(addresswWjWFqS, addressZqXMHJN, uintoETYI6, {from: accounts[2]});
	});

	it('test for GFC', async () => {
		const uinta06zLiA = BigInt("1767")
		const stringtbbdSIB = "YsWkcVfrzXxHnpBc4z5csmWjHxsUoonSz0hhZVKsdrY3WkdKuQIvLadqPiJ48RCQ4i3eiwHDY2Ipheh"
		const string0Q5v8a = "IIUQqarKrccbGLbL9a9Diaji3tnLnftYmvP7sX7Dv9uujTvLLioXwR"
		const GFCuUOK8JW = await GFC.new(uinta06zLiA, stringtbbdSIB, string0Q5v8a, {from: accounts[2]});
		const uintrAITLbf = BigInt("508")
		const uintw0TPI0Q = BigInt("957")
		const addressNYdJaNN = accounts[3]
		const uinth9yobZD = BigInt("911")
		const addressenmK5nR = accounts[1]
		const bytexj2OEb = "0x03161f1c190b10181111111e000d0a06030c080902"
		const uintmZQwAD1 = BigInt("477")
		const addressYklO3bZ = accounts[4]
		const uintfTgnehX = BigInt("840")
		const addresspl2YV0 = accounts[0]
		const boolGsRoSPt = await GFCuUOK8JW.burn.call(uintrAITLbf, {from: accounts[2]});
//		const boolarhHan = await GFCuUOK8JW.burnFrom.call(addressNYdJaNN, uintw0TPI0Q, {from: accounts[1]});
//		const boolqNJeIYj = await GFCuUOK8JW.transfer.call(addressenmK5nR, uinth9yobZD, {from: accounts[3]});
//		const boolg67GAPF = await GFCuUOK8JW.approveAndCall.call(addressYklO3bZ, uintmZQwAD1, bytexj2OEb, {from: accounts[4]});
//		const boolkOJU5W2 = await GFCuUOK8JW.approve.call(addresspl2YV0, uintfTgnehX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolGsRoSPt, true)
		await expect(GFCuUOK8JW.burnFrom.call(addressNYdJaNN, uintw0TPI0Q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintRWddlI = BigInt("42")
		const stringP2fsbTI = "IBVjvT9CKjzZNuJPRkOVh5VrV7pW7qNyjMOTGFj4egY7baXrhfemYjV8jWMjXkNBs"
		const stringANq2ch5 = "pjuQ2OHmv4XGyKQcDFblOkcpgYUp5I4C9t6bjzjunXxaFVM9ftjBBTw7BEwbJJsCbQa39XGvQdNEPY7AiO"
		const GFCh66EJez = await GFC.new(uintRWddlI, stringP2fsbTI, stringANq2ch5, {from: accounts[1]});
		const uintwReuKSO = BigInt("1066")
		const addressroX6b2 = "0x0000000000000000000000000000000000000001"
		const addressGjBEXM0 = accounts[5]
		const uintqDPtHB = BigInt("288")
		const addresseyyJCKb = accounts[5]
//		const boolGQACbe4 = await GFCh66EJez.transferFrom.call(addressGjBEXM0, addressroX6b2, uintwReuKSO, {from: accounts[1]});
//		const boolsgCsuD8 = await GFCh66EJez.transfer.call(addresseyyJCKb, uintqDPtHB, {from: accounts[2]});

		await expect(GFCh66EJez.transferFrom.call(addressGjBEXM0, addressroX6b2, uintwReuKSO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintD9ARMbv = BigInt("1391")
		const stringp745xiY = "z2EreRjAhZv"
		const stringuyBmIC = "zL7X8h7gwPBUPEQ"
		const GFCWG7AKbI = await GFC.new(uintD9ARMbv, stringp745xiY, stringuyBmIC, {from: accounts[1]});
		const bytedZI1Efk = "0x12021c051906161d0e07180b0106000105"
		const uintt290eQs = BigInt("1322")
		const addressfRw2RY = "0x0000000000000000000000000000000000000001"
		const uintvZEJPDF = BigInt("381")
		const addressK9u8MUb = accounts[1]
		const uintnP8D1ps = BigInt("962")
		const addressaKJAozM = accounts[5]
		const addressvUthh7n = accounts[2]
		const uintU4PdiWc = BigInt("1574")
		const addressm8S3fnu = accounts[3]
//		const boolQO802Ft = await GFCWG7AKbI.approveAndCall.call(addressfRw2RY, uintt290eQs, bytedZI1Efk, {from: accounts[3]});
//		const boolowIBuy = await GFCWG7AKbI.burnFrom.call(addressK9u8MUb, uintvZEJPDF, {from: accounts[4]});
//		const boollO8hdAS = await GFCWG7AKbI.transferFrom.call(addressvUthh7n, addressaKJAozM, uintnP8D1ps, {from: accounts[2]});
//		const boolzfAvNug = await GFCWG7AKbI.approve.call(addressm8S3fnu, uintU4PdiWc, {from: accounts[5]});

		await expect(GFCWG7AKbI.approveAndCall.call(addressfRw2RY, uintt290eQs, bytedZI1Efk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintW4mXwCz = BigInt("42")
		const stringP2fsbTI = "IBVjvT9CKjzZNuJPRkOVh5VrV7pW7qNyjMOTGFj4egY7baXrhfemYjV8jWMjXkNBs"
		const stringANq2ch5 = "pjuQ2OHmv4XGyKQcDFblOkcpgYUp5I4C9t6bjzjunXxaFVM9ftjBBTw7BEwbJJsCbQa39XGvQdNEPY7AiO"
		const GFCh66EJez = await GFC.new(uintW4mXwCz, stringP2fsbTI, stringANq2ch5, {from: accounts[1]});
		const uintFv6Opmi = BigInt("288")
		const addressXM7LedJ = accounts[5]
//		const boolsgCsuD8 = await GFCh66EJez.transfer.call(addressXM7LedJ, uintFv6Opmi, {from: accounts[2]});

		await expect(GFCh66EJez.transfer.call(addressXM7LedJ, uintFv6Opmi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintkt5XkC = BigInt("1499")
		const stringVzhDLVk = "MOuuYnRogqZOtkZBVu52cJpioqT7WdjBhBccroF99MGDKhjOSExRBmIDzJlGamDKX3jrygpwi6O6ZueMO"
		const stringkId9xU = "EprW5D2XOtqwcRYcX5jwTpQ2KJh3Hy4g1CrS1xQwt9digjxy1g3NFJxFf7b3EWA6E9pwtCIIMTNhhtmrYzZ"
		const GFCgd6LaJi = await GFC.new(uintkt5XkC, stringVzhDLVk, stringkId9xU, {from: accounts[1]});
		const uintgLqOGCh = BigInt("470")
		const addressL0mEMoS = accounts[1]
		const uintgtemqOo = BigInt("51")
		const addressaYrUAry = accounts[3]
		const bool3Veraa = await GFCgd6LaJi.transfer.call(addressL0mEMoS, uintgLqOGCh, {from: accounts[1]});
//		const boolQ8GDuDc = await GFCgd6LaJi.burnFrom.call(addressaYrUAry, uintgtemqOo, {from: accounts[0]});

		assert.equal(bool3Veraa, true)
		await expect(GFCgd6LaJi.burnFrom.call(addressaYrUAry, uintgtemqOo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintkogVDN = BigInt("42")
		const stringP2fsbTI = "IBVjvT9CKjzZNuJPRkOVh5VrV7pW7qNyjMOTGFj4egY7baXrhfemYjV8jWMjXkNBs"
		const stringANq2ch5 = "pjuQ2OHmv4XGyKQcDFblOkcpgYUp5I4C9t6bjzjunXxaFVM9ftjBBTw7BEwbJJsCbQa39XGvQdNEPY7AiO"
		const GFCh66EJez = await GFC.new(uintkogVDN, stringP2fsbTI, stringANq2ch5, {from: accounts[1]});
		const uintfkdHhV = BigInt("1327")
		const addresszz6QBi = accounts[1]
		const uintukMnXl = BigInt("1066")
		const addressA3ow2eI = "0x0000000000000000000000000000000000000001"
		const addressYqtlAk = accounts[5]
//		const boolTo1FamF = await GFCh66EJez.burnFrom.call(addresszz6QBi, uintfkdHhV, {from: "0x0000000000000000000000000000000000000001"});
//		const boolGQACbe4 = await GFCh66EJez.transferFrom.call(addressYqtlAk, addressA3ow2eI, uintukMnXl, {from: accounts[1]});

		await expect(GFCh66EJez.burnFrom.call(addresszz6QBi, uintfkdHhV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})