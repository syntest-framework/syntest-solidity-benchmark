const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringUxvOwq0 = "xrr54q9yEa66XCm3HEJBOg0fUJEsZV9wMRcgA1K4DzZqs74Wjsr961C2"
		const stringP5Ikq02 = "NqM18hkORe9kWK4uquoh1QCFAfBU9enJfYGNlCwsuYQ5lBOkxV9xDMTlECq26WirKhA7lmoS2voWFNSYTOOPimgtJngMOX"
		const uinttVUYKG8 = BigInt("606")
		const WOLFsB5nSCt = await WOLF.new(stringUxvOwq0, stringP5Ikq02, uinttVUYKG8, {from: accounts[1]});
		const uintAKwe6G6 = BigInt("229")
		const addressDeJYjP1 = accounts[2]
		const uintALW8bVZ = BigInt("1344")
		const addressM8QXweG = accounts[3]
		const addressNNRfZlR = accounts[4]
		const uintV2MJpeZ = BigInt("15")
		const addressLuStFMe = accounts[2]
		const uintPLLeVM = BigInt("1266")
		const address5MkPSv = accounts[3]
		const addressOkKHiOD = accounts[1]
		const boolInKSjJg = await WOLFsB5nSCt.approveAndCall.call(addressDeJYjP1, uintAKwe6G6, {from: accounts[1]});
		const boolyV0Z23b = await WOLFsB5nSCt.transferFrom.call(addressNNRfZlR, addressM8QXweG, uintALW8bVZ, {from: accounts[1]});
		const booluxlRpZd = await WOLFsB5nSCt.transfer.call(addressLuStFMe, uintV2MJpeZ, {from: accounts[2]});
		const boolIIEFJKq = await WOLFsB5nSCt.approve.call(address5MkPSv, uintPLLeVM, {from: accounts[0]});
		const boolcD4Fyxj = await WOLFsB5nSCt.transferownership.call(addressOkKHiOD, {from: accounts[5]});

		assert.equal(boolInKSjJg, true)
		await expect(WOLFsB5nSCt.transferFrom.call(addressNNRfZlR, addressM8QXweG, uintALW8bVZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringrRahxDr = "fI8WYjsm9WYHg7JydNnkd"
		const stringsPmq4Fe = "VODw7dtEK9hGaRJqEeVRwLEDCVJ1jWylr7M"
		const uintRYAs0le = BigInt("426")
		const WOLFcwvdB4x = await WOLF.new(stringrRahxDr, stringsPmq4Fe, uintRYAs0le, {from: accounts[2]});
		const addressyeoJ10L = accounts[0]
		const uintTPI3M4T = BigInt("1220")
		const addressRcsu5z = accounts[4]
		const uintJBFbJbA = BigInt("1210")
		const addressedaDWn = accounts[1]
		const uintXToADEU = BigInt("104")
		const addressOy9V8L2 = accounts[1]
		const addresshBgcyvb = accounts[3]
		const boolaIImKiL = await WOLFcwvdB4x.transferownership.call(addressyeoJ10L, {from: accounts[0]});
		const booluGXzN7 = await WOLFcwvdB4x.approve.call(addressRcsu5z, uintTPI3M4T, {from: accounts[2]});
		const boolsUAp6yh = await WOLFcwvdB4x.approve.call(addressedaDWn, uintJBFbJbA, {from: accounts[4]});
		const booldssuc7u = await WOLFcwvdB4x.approve.call(addressOy9V8L2, uintXToADEU, {from: accounts[4]});
		const boolLW3fuYe = await WOLFcwvdB4x.transferownership.call(addresshBgcyvb, {from: accounts[0]});

		await expect(WOLFcwvdB4x.transferownership.call(addressyeoJ10L, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringhq5DpnE = "Cl2thfa5Er4DfvSob6KmdF"
		const stringsRiGhW = "1IJWRbfihJprpi5OMUvt7cyYM4SU7uhd0y7NA45lTaNCJgKXvMEqQGzT7wSkFWkBV4czljLUL6mG9SL44L2NVxAk2IzX"
		const uintTQmdDtQ = BigInt("923")
		const WOLFVIZUHq = await WOLF.new(stringhq5DpnE, stringsRiGhW, uintTQmdDtQ, {from: accounts[4]});
		const uintme1kjnQ = BigInt("1983")
		const addresskMHbUh4 = "0x0000000000000000000000000000000000000001"
		const uintqFb0yzo = BigInt("2011")
		const addressaDDqcrw = accounts[5]
		const uintniRRv0F = BigInt("695")
		const addressFag6nL4 = accounts[4]
		const boolwmbQIrl = await WOLFVIZUHq.transfer.call(addresskMHbUh4, uintme1kjnQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolP66iqI = await WOLFVIZUHq.approve.call(addressaDDqcrw, uintqFb0yzo, {from: accounts[1]});
		const booleyaBnnI = await WOLFVIZUHq.approve.call(addressFag6nL4, uintniRRv0F, {from: accounts[2]});

		await expect(WOLFVIZUHq.transfer.call(addresskMHbUh4, uintme1kjnQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringvLojrTV = "NrHq3qUeHhLFci9cAtGVxYehMyAalEc0iU1Azd46CD3H3uJyRIRWP4dtdDWWf8HKMoO3p5jBUqXguf72PjFPZfBp"
		const stringnrY06Iv = "8EOipcLmVce923qOlGIdK0D4Aw174OVlWXRrKyIVb0hq3ve3pTpAkD6keqX2YP3M68n66QrfR2L9Do3rHja"
		const uintFZLu7as = BigInt("1770")
		const WOLFAqbh7Zt = await WOLF.new(stringvLojrTV, stringnrY06Iv, uintFZLu7as, {from: accounts[1]});
		const uintqi2iPcW = BigInt("296")
		const addresseDa8XSy = accounts[1]
		const uintRZTyYfM = BigInt("910")
		const addressyqnFflB = accounts[3]
		const uintHDEW1UL = BigInt("272")
		const addressMpeark2 = accounts[1]
		const boolPfmBxtz = await WOLFAqbh7Zt.approve.call(addresseDa8XSy, uintqi2iPcW, {from: accounts[2]});
		const booly5qFZbI = await WOLFAqbh7Zt.approve.call(addressyqnFflB, uintRZTyYfM, {from: accounts[1]});
		const booldFOW3Mq = await WOLFAqbh7Zt.transfer.call(addressMpeark2, uintHDEW1UL, {from: accounts[5]});

		assert.equal(boolPfmBxtz, true)
		assert.equal(booly5qFZbI, true)
		await expect(WOLFAqbh7Zt.transfer.call(addressMpeark2, uintHDEW1UL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringoQ9df9v = "gfe3Ni9D87FQh34Apo7griUxnLVwAGNRnsDVdRBwheY"
		const stringEXexxUi = "lfMrUxt4E5VqvHfXPN5Z5FCZPsDo19NgJ9rPK1fPepfx8J45yl5z5w1IX81WcN2vp7L6W"
		const uintfKGXuWr = BigInt("215")
		const WOLFEsCVvB1 = await WOLF.new(stringoQ9df9v, stringEXexxUi, uintfKGXuWr, {from: "0x0000000000000000000000000000000000000001"});
		const addressmp7khK3 = accounts[3]
		const uintgkwhkU7 = BigInt("1654")
		const addressYSBVV3p = accounts[4]
		const addressPDs3cb7 = accounts[3]
		const uintbHjBmPk = BigInt("439")
		const addressOgKX5Mt = accounts[2]
		const boolDuKiQAx = await WOLFEsCVvB1.transferownership.call(addressmp7khK3, {from: accounts[5]});
		const boollfVX4td = await WOLFEsCVvB1.transfer.call(addressYSBVV3p, uintgkwhkU7, {from: accounts[4]});
		const boolvBu96zn = await WOLFEsCVvB1.transferownership.call(addressPDs3cb7, {from: accounts[2]});
		const boolZsUN2iz = await WOLFEsCVvB1.approve.call(addressOgKX5Mt, uintbHjBmPk, {from: accounts[4]});
	});

	it('test for WOLF', async () => {
		const stringYSYPRNz = "h12rT8ELJSEl98pzXD2MSioohxt7j5l472HzOadJv5QrINro0gJnSG7ZKLwTkJ4tUAAlxgq8FxclEGQjOJOf"
		const stringvHynxS = "MXiFcIcRaQfA5rtgwxd84jBo6QBFvukT"
		const uintQp1jOIG = BigInt("205")
		const WOLFtt2Bn8 = await WOLF.new(stringYSYPRNz, stringvHynxS, uintQp1jOIG, {from: accounts[1]});
		const uintuEXlg8n = BigInt("0")
		const addressgawTmCm = accounts[3]
		const uintGRcAMY = BigInt("455")
		const addressmCeWaA = "0x0000000000000000000000000000000000000001"
		const uintJyTwg4H = BigInt("1028")
		const addresscnCZvFA = accounts[4]
		const boolcbwF0L0 = await WOLFtt2Bn8.transfer.call(addressgawTmCm, uintuEXlg8n, {from: accounts[5]});
		const boolXhuIQd8 = await WOLFtt2Bn8.approveAndCall.call(addressmCeWaA, uintGRcAMY, {from: accounts[2]});
		const boola2fYGpm = await WOLFtt2Bn8.transfer.call(addresscnCZvFA, uintJyTwg4H, {from: accounts[0]});

		assert.equal(boolcbwF0L0, true)
		await expect(WOLFtt2Bn8.approveAndCall.call(addressmCeWaA, uintGRcAMY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringhq5DpnE = "Cl2thfa5Er4DfvSob6KmdF"
		const stringsRiGhW = "1IJWRbfihJprpi5OMUvt7cyYM4SU7uhd0y7NA45lTaNCJgKXvMEqQGzT7wSkFWkBV4czljLUL6mG9SL44L2NVxAk2IzX"
		const uintaYqhs0 = BigInt("923")
		const WOLFVIZUHq = await WOLF.new(stringhq5DpnE, stringsRiGhW, uintaYqhs0, {from: accounts[4]});
		const addressDJqd1m7 = accounts[1]
		const uintUx18bRc = BigInt("1481")
		const addressjEQ2ecW = accounts[3]
		const uintPrgiZxE = BigInt("1983")
		const addressLW5VZkV = "0x0000000000000000000000000000000000000002"
		const uintNoiAIso = BigInt("695")
		const addresswX91npe = accounts[4]
		const boolAIKBWdZ = await WOLFVIZUHq.transferownership.call(addressDJqd1m7, {from: accounts[4]});
		const boolnfC03ZM = await WOLFVIZUHq.approve.call(addressjEQ2ecW, uintUx18bRc, {from: accounts[2]});
		const boolwmbQIrl = await WOLFVIZUHq.transfer.call(addressLW5VZkV, uintPrgiZxE, {from: "0x0000000000000000000000000000000000000001"});
		const booleyaBnnI = await WOLFVIZUHq.approve.call(addresswX91npe, uintNoiAIso, {from: accounts[2]});

		assert.equal(boolAIKBWdZ, true)
		assert.equal(boolnfC03ZM, true)
		await expect(WOLFVIZUHq.transfer.call(addressLW5VZkV, uintPrgiZxE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringUxvOwq0 = "xrr54q9yEa66XCm3HEJBOg0fUJEsZV9wMRcgA1K4DzZqs74Wjsr961C2"
		const stringP5Ikq02 = "NqM18hkORe9kWK4uquoh1QCFAfBU9enJfYGNlCwsuYQ5lBOkxV9xDMTlECq26WirKhA7lmoS2voWFNSYTOOPimgtJngMOX"
		const uintkEyDijj = BigInt("606")
		const WOLFsB5nSCt = await WOLF.new(stringUxvOwq0, stringP5Ikq02, uintkEyDijj, {from: accounts[1]});
		const uintjpLPsx9 = BigInt("0")
		const addresshJoxkwl = accounts[5]
		const uintEbcuvD = BigInt("1849")
		const addressBfcCOay = accounts[1]
		const addressTFV4Qe = accounts[5]
		const uintU82vvCi = BigInt("1802")
		const addresseb2s7Yv = accounts[1]
		const boolgIs8PGo = await WOLFsB5nSCt.approveAndCall.call(addresshJoxkwl, uintjpLPsx9, {from: accounts[1]});
		const boolD3hSWy = await WOLFsB5nSCt.transferFrom.call(addressTFV4Qe, addressBfcCOay, uintEbcuvD, {from: accounts[4]});
		const booljWcPV9n = await WOLFsB5nSCt.transfer.call(addresseb2s7Yv, uintU82vvCi, {from: accounts[5]});

		assert.equal(boolgIs8PGo, true)
		await expect(WOLFsB5nSCt.transferFrom.call(addressTFV4Qe, addressBfcCOay, uintEbcuvD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringhq5DpnE = "Cl2thfa5Er4DfvSob6KmdF"
		const stringsRiGhW = "1IJWRbfihJprpi5OMUvt7cyYM4SU7uhd0y7NA45lTaNCJgKXvMEqQGzT7wSkFWkBV4czljLUL6mG9SL44L2NVxAk2IzX"
		const uintOriSE94 = BigInt("923")
		const WOLFVIZUHq = await WOLF.new(stringhq5DpnE, stringsRiGhW, uintOriSE94, {from: accounts[4]});
		const uintyuGHsUb = BigInt("1983")
		const addressK7qr6S = "0x00000000000000000000000000000000000000-1"
		const uintIk2Kxl3 = BigInt("899")
		const addresszR2SVIr = accounts[2]
		const uintfeaaywN = BigInt("679")
		const addressr3AGmdt = "0x0000000000000000000000000000000000000001"
		const uintW8ZdiKS = BigInt("1034")
		const addressQk6ccnd = accounts[2]
		const boolwmbQIrl = await WOLFVIZUHq.transfer.call(addressK7qr6S, uintyuGHsUb, {from: "0x0000000000000000000000000000000000000001"});
		const boolc3EMKNL = await WOLFVIZUHq.approve.call(addresszR2SVIr, uintIk2Kxl3, {from: accounts[0]});
		const boolblg1ekP = await WOLFVIZUHq.approveAndCall.call(addressr3AGmdt, uintfeaaywN, {from: accounts[1]});
		const boola6zGla6 = await WOLFVIZUHq.approve.call(addressQk6ccnd, uintW8ZdiKS, {from: accounts[2]});

		await expect(WOLFVIZUHq.transfer.call(addressK7qr6S, uintyuGHsUb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})