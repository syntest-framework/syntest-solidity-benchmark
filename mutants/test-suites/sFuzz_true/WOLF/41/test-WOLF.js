const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringO3nZWmL = "nQ5oPOGg3e2R8ah2pcfSHLgTChd4UwA5CVTJH1WStpJEDNBJjahfNedeZp0GqfawPaE4bu8x"
		const stringqIaBPvT = "A57kpglDHo4IvhsumwlJLRgR6l42Q3xOag3JpnuvMqj2ucetSONI5gpIEMbwnoR1poyBKo"
		const uintV6aJKCr = BigInt("1573")
		const WOLFstNpsR9 = await WOLF.new(stringO3nZWmL, stringqIaBPvT, uintV6aJKCr, {from: accounts[0]});
		const uintHA5rLTu = BigInt("1721")
		const addressvQbb4qE = accounts[2]
		const uintY6PBWLu = BigInt("97")
		const addressLXxaVzn = accounts[1]
		const uinti4avmNV = BigInt("493")
		const addressH3pQTiA = accounts[3]
		const uintlqU9l18 = BigInt("909")
		const addresslwbEU1b = accounts[4]
		const uintIZUdMq = BigInt("452")
		const addressl8vc5w = accounts[1]
		const uint8p0mGO = BigInt("1728")
		const addressJVs33Pa = accounts[1]
		const boolraO747X = await WOLFstNpsR9.approve.call(addressvQbb4qE, uintHA5rLTu, {from: accounts[0]});
//		const boollV0TaPm = await WOLFstNpsR9.transfer.call(addressLXxaVzn, uintY6PBWLu, {from: "0x0000000000000000000000000000000000000001"});
//		const boolphxTRM = await WOLFstNpsR9.transfer.call(addressH3pQTiA, uinti4avmNV, {from: accounts[0]});
//		const booldLqcDjs = await WOLFstNpsR9.approve.call(addresslwbEU1b, uintlqU9l18, {from: accounts[4]});
//		const boolJ3jrEHY = await WOLFstNpsR9.approveAndCall.call(addressl8vc5w, uintIZUdMq, {from: accounts[2]});
//		const boolCZIg0mU = await WOLFstNpsR9.approve.call(addressJVs33Pa, uint8p0mGO, {from: accounts[0]});

		assert.equal(boolraO747X, true)
		await expect(WOLFstNpsR9.transfer.call(addressLXxaVzn, uintY6PBWLu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringjRMOQa6 = "CMnh7358CL8sC9aTTmLx2DVpKMOAGivPf2ydBJniCA7XH1kcfixoNqbwj"
		const stringgs15LDm = "37OGEdFYeMrXQXDAAntXy5YcvMWCNVMEZlnNYOQN17dK3qVoJ"
		const uinto8P7luO = BigInt("528")
		const WOLFbpao0wK = await WOLF.new(stringjRMOQa6, stringgs15LDm, uinto8P7luO, {from: "0x0000000000000000000000000000000000000001"});
		const uintiPsXbKO = BigInt("1918")
		const addressqVLQCAt = accounts[4]
		const addressKoJLVWq = accounts[2]
		const address3YXyHl = accounts[4]
		const addressli20Xw2 = accounts[2]
		const uintKQBJhYh = BigInt("1507")
		const addressb1Xhrc = accounts[4]
		const addressxRb7E9 = accounts[0]
		const boolQeJod58 = await WOLFbpao0wK.transferFrom.call(addressKoJLVWq, addressqVLQCAt, uintiPsXbKO, {from: accounts[5]});
		const boole6Dofg = await WOLFbpao0wK.transferownership.call(address3YXyHl, {from: accounts[5]});
		const boolzRmhwwS = await WOLFbpao0wK.transferownership.call(addressli20Xw2, {from: accounts[1]});
		const boolcBDxTAK = await WOLFbpao0wK.transfer.call(addressb1Xhrc, uintKQBJhYh, {from: accounts[2]});
		const boolxZ8W8br = await WOLFbpao0wK.transferownership.call(addressxRb7E9, {from: accounts[5]});
	});

	it('test for WOLF', async () => {
		const stringv1aVeKL = "nY6MOQptwCvzPVsgW3qFyVR9PdpKScpf2"
		const stringaxpYF7x = "SDfWwDwEUYhN5sy3rVhIvb1tqPRbHFL69T8FmnkAtQYEqS9PLAMLGB2VTr5pE"
		const uintr8hojXB = BigInt("921")
		const WOLFXPdKviA = await WOLF.new(stringv1aVeKL, stringaxpYF7x, uintr8hojXB, {from: accounts[1]});
		const addressgDBjDhk = accounts[3]
		const uintvsUaMs6 = BigInt("1808")
		const addresskU8mdj = accounts[1]
		const uintEFB9A8b = BigInt("1020")
		const addressTYh6kzw = accounts[3]
		const uint313Exr = BigInt("1587")
		const addressM8dxz0V = accounts[4]
//		const boolDUN71nX = await WOLFXPdKviA.transferownership.call(addressgDBjDhk, {from: accounts[2]});
//		const boolNbHoYQi = await WOLFXPdKviA.approveAndCall.call(addresskU8mdj, uintvsUaMs6, {from: accounts[2]});
//		const boolGEqelom = await WOLFXPdKviA.transfer.call(addressTYh6kzw, uintEFB9A8b, {from: accounts[1]});
//		const boolHgNzUKs = await WOLFXPdKviA.approveAndCall.call(addressM8dxz0V, uint313Exr, {from: accounts[0]});

		await expect(WOLFXPdKviA.transferownership.call(addressgDBjDhk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const string7W0cLI = "r7fU0qERSwaHAXGrCXfeeQ"
		const stringOFV5D4t = "UFxnyWQmhrBauRlgZMWqSongP8OMSZzJtlBMFhIssgUiClxz07"
		const uintN8rE9Xa = BigInt("1864")
		const WOLFXMJ0hwV = await WOLF.new(string7W0cLI, stringOFV5D4t, uintN8rE9Xa, {from: accounts[0]});
		const uintVBrR86R = BigInt("1143")
		const addressNkqWmx = accounts[2]
		const uintOGM2zd4 = BigInt("1445")
		const addressupi2Ske = accounts[3]
		const uintIvKXw1 = BigInt("571")
		const addressZCFx2g = accounts[5]
		const addresslpyyAyv = accounts[2]
		const booltawccP = await WOLFXMJ0hwV.approve.call(addressNkqWmx, uintVBrR86R, {from: accounts[0]});
//		const boolh9jomHJ = await WOLFXMJ0hwV.approveAndCall.call(addressupi2Ske, uintOGM2zd4, {from: accounts[5]});
//		const boolHyClEc5 = await WOLFXMJ0hwV.approve.call(addressZCFx2g, uintIvKXw1, {from: accounts[0]});
//		const boollntVoh = await WOLFXMJ0hwV.transferownership.call(addresslpyyAyv, {from: accounts[3]});

		assert.equal(booltawccP, true)
		await expect(WOLFXMJ0hwV.approveAndCall.call(addressupi2Ske, uintOGM2zd4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringO3nZWmL = "nQ5oPOGg3e2R8ah2pcfSHLgTChd4UwA5CVTJH1WStpJEDNBJjahfNedeZp0GqfawPaE4bu8x"
		const stringqIaBPvT = "A57kpglDHo4IvhsumwlJLRgR6l42Q3xOag3JpnuvMqj2ucetSONI5gpIEMbwnoR1poyBKo"
		const uints1zvxsQ = BigInt("1573")
		const WOLFstNpsR9 = await WOLF.new(stringO3nZWmL, stringqIaBPvT, uints1zvxsQ, {from: accounts[0]});
		const uintymUTlJO = BigInt("1721")
		const addressu8ZjKHt = accounts[2]
		const uintZWPoFl = BigInt("1436")
		const addresssk5hp1 = accounts[2]
		const addressmnOPsRD = accounts[4]
		const uintHK77W74 = BigInt("97")
		const addressTLwHwgb = accounts[1]
		const uint7eJGcv = BigInt("493")
		const addressU5by9i3 = accounts[3]
		const uintW9PuJF = BigInt("909")
		const addressbLcaho8 = accounts[4]
		const uintGJSUywA = BigInt("1728")
		const addressD2lqkip = accounts[1]
		const boolraO747X = await WOLFstNpsR9.approve.call(addressu8ZjKHt, uintymUTlJO, {from: accounts[0]});
//		const boolwPMU4VT = await WOLFstNpsR9.transferFrom.call(addressmnOPsRD, addresssk5hp1, uintZWPoFl, {from: accounts[0]});
//		const boollV0TaPm = await WOLFstNpsR9.transfer.call(addressTLwHwgb, uintHK77W74, {from: "0x0000000000000000000000000000000000000001"});
//		const boolphxTRM = await WOLFstNpsR9.transfer.call(addressU5by9i3, uint7eJGcv, {from: accounts[0]});
//		const booldLqcDjs = await WOLFstNpsR9.approve.call(addressbLcaho8, uintW9PuJF, {from: accounts[4]});
//		const boolCZIg0mU = await WOLFstNpsR9.approve.call(addressD2lqkip, uintGJSUywA, {from: accounts[0]});

		assert.equal(boolraO747X, true)
		await expect(WOLFstNpsR9.transferFrom.call(addressmnOPsRD, addresssk5hp1, uintZWPoFl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringzAWQEVE = "fMsgPJFSRIA0BeBgSuvWErbuhMtiVd1NnHh3spld6FsgdL66RNbt8KWM9GTAVcuBVt1HZr"
		const stringzI7KCeZ = "MsZPAb9UJNO32Z0Zq4GPhIYmXH4RvA29HJYMAyOUeJLwkzTFuMPAtqa6pJgUvA"
		const uintY9o3yog = BigInt("1703")
		const WOLFI2oJ2MK = await WOLF.new(stringzAWQEVE, stringzI7KCeZ, uintY9o3yog, {from: accounts[5]});
		const uintuohdMY = BigInt("1635")
		const address2tzK18 = accounts[4]
		const addressFYyxulX = accounts[2]
		const boolBNKhFbU = await WOLFI2oJ2MK.approveAndCall.call(address2tzK18, uintuohdMY, {from: accounts[5]});
		const boolTCA9v9 = await WOLFI2oJ2MK.transferownership.call(addressFYyxulX, {from: accounts[5]});

		assert.equal(boolBNKhFbU, true)
		assert.equal(boolTCA9v9, true)
	});

	it('test for WOLF', async () => {
		const stringzAWQEVE = "fMsgPJFSRIA0BeBgSuvWErbuhMtiVd1NnHh3spld6FsgdL66RNbt8KWM9GTAVcuBVt1HZr"
		const stringzI7KCeZ = "MsZPAb9UJNO32Z0Zq4GPhIYmXH4RvA29HJYMAyOUeJLwkzTFuMPAtqa6pJgUvA"
		const uintMB7v5Ka = BigInt("1703")
		const WOLFI2oJ2MK = await WOLF.new(stringzAWQEVE, stringzI7KCeZ, uintMB7v5Ka, {from: accounts[5]});
		const uintd2OSms = BigInt("1684")
		const addressSa8jV2r = accounts[5]
//		const boolGBA5siQ = await WOLFI2oJ2MK.transfer.call(addressSa8jV2r, uintd2OSms, {from: accounts[1]});

		await expect(WOLFI2oJ2MK.transfer.call(addressSa8jV2r, uintd2OSms, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringzAWQEVE = "fMsgPJFSRIA0BeBgSuvWErbuhMtiVd1NnHh3spld6FsgdL66RNbt8KWM9GTAVcuBVt1HZr"
		const stringzI7KCeZ = "MsZPAb9UJNO32Z0Zq4GPhIYmXH4RvA29HJYMAyOUeJLwkzTFuMPAtqa6pJgUvA"
		const uintY70TUOB = BigInt("1703")
		const WOLFI2oJ2MK = await WOLF.new(stringzAWQEVE, stringzI7KCeZ, uintY70TUOB, {from: accounts[5]});
		const uintHYP4jkO = BigInt("0")
		const addressq3TMj3D = accounts[3]
		const addressJz1fVsO = accounts[1]
		const uintM3ioxI2 = BigInt("579")
		const addressaK4Cglj = accounts[2]
		const boolYAtujG = await WOLFI2oJ2MK.transferFrom.call(addressJz1fVsO, addressq3TMj3D, uintHYP4jkO, {from: accounts[1]});
//		const boolCBIsR0k = await WOLFI2oJ2MK.approveAndCall.call(addressaK4Cglj, uintM3ioxI2, {from: accounts[2]});

		assert.equal(boolYAtujG, true)
		await expect(WOLFI2oJ2MK.approveAndCall.call(addressaK4Cglj, uintM3ioxI2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringzAWQEVE = "fMsgPJFSRIA0BeBgSuvWErbuhMtiVd1NnHh3spld6FsgdL66RNbt8KWM9GTAVcuBVt1HZr"
		const stringzI7KCeZ = "MsZPAb9UJNO32Z0Zq4GPhIYmXH4RvA29HJYMAyOUeJLwkzTFuMPAtqa6pJgUvA"
		const uintuuPQEpt = BigInt("1703")
		const WOLFI2oJ2MK = await WOLF.new(stringzAWQEVE, stringzI7KCeZ, uintuuPQEpt, {from: accounts[5]});
		const uintWBhByGa = BigInt("0")
		const addressfxg1pB7 = "0x0000000000000000000000000000000000000001"
		const booltPy82oX = await WOLFI2oJ2MK.approveAndCall.call(addressfxg1pB7, uintWBhByGa, {from: accounts[5]});

		assert.equal(booltPy82oX, true)
	});
})