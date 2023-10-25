const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALfPHKqBP = await NAL.new({from: accounts[5]});
		const addressi1tiPTl = accounts[0]
		const uintNFu1uYZ = BigInt("1881")
		const addressYuDLTnO = accounts[2]
		const uintAFGPA00 = BigInt("1608")
		const booleuS8051 = await NALfPHKqBP.isAdmin.call(addressi1tiPTl, {from: accounts[5]});
		const boolJdlTd4M = await NALfPHKqBP.transfer.call(addressYuDLTnO, uintNFu1uYZ, {from: accounts[0]});
		const uint256rpAJyth = await NALfPHKqBP.burn.call(uintAFGPA00, {from: accounts[4]});

		assert.equal(booleuS8051, false)
		await expect(NALfPHKqBP.transfer.call(addressYuDLTnO, uintNFu1uYZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALhn6caL = await NAL.new({from: accounts[1]});
		const uintg1A5Fay = BigInt("1102")
		const addressSuFwCi = accounts[1]
		const addressVWig7y = accounts[4]
		const uintRjYfnuo = BigInt("1852")
		const uintabWLW3 = BigInt("1409")
		const addresseauRlWJ = accounts[3]
		const addressi0JVEO = accounts[0]
		const boolqIgVWlr = await NALhn6caL.transferFrom.call(addressVWig7y, addressSuFwCi, uintg1A5Fay, {from: accounts[3]});
		const boolui1WRRA = await NALhn6caL.lock.call(addresseauRlWJ, uintabWLW3, uintRjYfnuo, {from: accounts[1]});
		const addressYIBeWi = await NALhn6caL.addAdmin.call(addressi0JVEO, {from: accounts[3]});

		await expect(NALhn6caL.transferFrom.call(addressVWig7y, addressSuFwCi, uintg1A5Fay, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtXUzIOk = await NAL.new({from: accounts[4]});
		const addressi5wppMf = accounts[3]
		const uintiLE37uB = BigInt("731")
		const addressgL9jAWG = accounts[1]
		const boolYVqPWRV = await NALtXUzIOk.isAdmin.call(addressi5wppMf, {from: accounts[3]});
		await NALtXUzIOk.pause.call({from: accounts[5]});
		const boolRu90ay = await NALtXUzIOk.decreaseAllowance.call(addressgL9jAWG, uintiLE37uB, {from: accounts[4]});
		await NALtXUzIOk.unpause.call({from: accounts[4]});
		await NALtXUzIOk.unpause.call({from: accounts[3]});

		assert.equal(boolYVqPWRV, false)
		await expect(NALtXUzIOk.pause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const stringTMYCkRv = "06pmvM5CSwKrR3Djel1lM2fd40VUEYRkdaNOnPNB3C86TeARsQs8t1"
		const stringGK6m2GS = "3Br3vgocSV7nSRHXVBpR3u1gojWa3S5jQ"
		const uintzSh7Dts = BigInt("36")
		const NALyEc9JO = await NAL.new(stringTMYCkRv, stringGK6m2GS, uintzSh7Dts, {from: accounts[1]});
		const addressaGDWYWR = accounts[3]
		const addressQHCbHcm = accounts[4]
		const uintyQle8zs = BigInt("1990")
		const addressPHNzCxd = accounts[0]
		const addressdIR3nia = accounts[2]
		const uint256BDBMLDX = await NALyEc9JO.balanceOf.call(addressaGDWYWR, {from: accounts[0]});
		await NALyEc9JO.whenNotPaused.call({from: accounts[2]});
		const boolD0hRldL = await NALyEc9JO.unfreezeAccount.call(addressQHCbHcm, {from: accounts[1]});
		const boolmqFji4u = await NALyEc9JO.transferFrom.call(addressdIR3nia, addressPHNzCxd, uintyQle8zs, {from: accounts[5]});
	});

	it('test for NAL', async () => {
		const NAL23fYRX = await NAL.new({from: accounts[4]});
		const addressUTVzpNl = accounts[5]
		const addressrsdx5Kt = "0x0000000000000000000000000000000000000001"
		const addressmOBCenC = accounts[3]
		const uint256MP7qNwH = await NAL23fYRX.balanceOf.call(addressUTVzpNl, {from: accounts[1]});
		const uint256rtE7EyJ = await NAL23fYRX.allowance.call(addressmOBCenC, addressrsdx5Kt, {from: accounts[2]});
		const boolWZaBDRs = await NAL23fYRX.paused.call({from: accounts[0]});

		assert.equal(boolWZaBDRs, false)
		assert.equal(uint256MP7qNwH, BigInt("0"))
		assert.equal(uint256rtE7EyJ, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NAL23fYRX = await NAL.new({from: accounts[4]});
		const uintjOy9Dnr = BigInt("1062")
		const addressncNApID = accounts[5]
		const addresssQ3sNUn = accounts[5]
		const addressaSOe92t = accounts[1]
		const boolBOt9d3d = await NAL23fYRX.increaseAllowance.call(addressncNApID, uintjOy9Dnr, {from: accounts[1]});
		const uint256MP7qNwH = await NAL23fYRX.balanceOf.call(addresssQ3sNUn, {from: accounts[1]});
		const boolELj9ngE = await NAL23fYRX.isOwner.call(addressaSOe92t, {from: accounts[1]});
		const boolWZaBDRs = await NAL23fYRX.paused.call({from: accounts[0]});

		assert.equal(boolBOt9d3d, true)
		assert.equal(boolELj9ngE, false)
		assert.equal(boolWZaBDRs, false)
		assert.equal(uint256MP7qNwH, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALbPXFca = await NAL.new({from: accounts[4]});
		const addressWnjKUiB = accounts[3]
		const uintKRRrIz7 = BigInt("609")
		const uintjm8ZJl = BigInt("243")
		const addresscIVdXy5 = accounts[5]
		const boolOMZu8Sw = await NALbPXFca.isAdmin.call(addressWnjKUiB, {from: accounts[0]});
		const boolT1njc3h = await NALbPXFca.transferWithLock.call(addresscIVdXy5, uintjm8ZJl, uintKRRrIz7, {from: accounts[4]});

		assert.equal(boolOMZu8Sw, false)
		assert.equal(boolT1njc3h, true)
	});

	it('test for NAL', async () => {
		const NALbPXFca = await NAL.new({from: accounts[4]});
		const uinty2fJBT = BigInt("800")
		const addresslWfXQZx = accounts[3]
		const addressDy3Egl9 = accounts[3]
		const uint256SK7ZZG7 = await NALbPXFca.burn.call(uinty2fJBT, {from: accounts[5]});
		const boolwKQORYA = await NALbPXFca.freezeAccount.call(addresslWfXQZx, {from: accounts[5]});
		const boolOMZu8Sw = await NALbPXFca.isAdmin.call(addressDy3Egl9, {from: accounts[0]});

		await expect(NALbPXFca.burn.call(uinty2fJBT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALfPHKqBP = await NAL.new({from: accounts[5]});
		const addressz55K7Ye = "0x0000000000000000000000000000000000000001"
		const addressZsdXTbp = accounts[0]
		const uintDDcXrqw = BigInt("1609")
		const addressWqzf4Ue = await NALfPHKqBP.notFrozen.call(addressz55K7Ye, {from: accounts[3]});
		const booleuS8051 = await NALfPHKqBP.isAdmin.call(addressZsdXTbp, {from: accounts[5]});
		const uint256rpAJyth = await NALfPHKqBP.burn.call(uintDDcXrqw, {from: accounts[4]});

		await expect(NALfPHKqBP.notFrozen.call(addressz55K7Ye, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL23fYRX = await NAL.new({from: accounts[4]});
		const uintIParN5e = BigInt("1062")
		const addressqti7IKW = accounts[5]
		const addressBQfbfyJ = accounts[5]
		const addressTXe3bt8 = accounts[1]
		const boolBOt9d3d = await NAL23fYRX.increaseAllowance.call(addressqti7IKW, uintIParN5e, {from: accounts[1]});
		const uint256MP7qNwH = await NAL23fYRX.balanceOf.call(addressBQfbfyJ, {from: accounts[1]});
		const boolELj9ngE = await NAL23fYRX.isOwner.call(addressTXe3bt8, {from: accounts[1]});
		const stringsdqlu26 = await NAL23fYRX.symbol.call({from: accounts[5]});
		const uint8rSk7fWd = await NAL23fYRX.decimals.call({from: accounts[1]});
		const boolWZaBDRs = await NAL23fYRX.paused.call({from: accounts[0]});

		assert.equal(boolBOt9d3d, true)
		assert.equal(boolELj9ngE, false)
		assert.equal(boolWZaBDRs, false)
		assert.equal(stringsdqlu26, "NAL")
		assert.equal(uint256MP7qNwH, BigInt("0"))
		assert.equal(uint8rSk7fWd, BigInt("18"))
	});

	it('test for NAL', async () => {
		const NALcQoQ1P = await NAL.new({from: accounts[1]});
		const uintZ6k2x2W = BigInt("174")
		const addressezeQjVq = accounts[4]
		const stringElxP4E = await NALcQoQ1P.name.call({from: accounts[1]});
		const addressAMtcohP = await NALcQoQ1P.burnFrom.call(addressezeQjVq, uintZ6k2x2W, {from: "0x0000000000000000000000000000000000000001"});
		const boolLHOOb8M = await NALcQoQ1P.paused.call({from: accounts[0]});
		await NALcQoQ1P.onlyAdmin.call({from: accounts[0]});

		assert.equal(stringElxP4E, "Personal Token")
		await expect(NALcQoQ1P.burnFrom.call(addressezeQjVq, uintZ6k2x2W, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbPXFca = await NAL.new({from: accounts[4]});
		const uintVYGps5I = BigInt("1456")
		const addressE3Wf7WB = accounts[3]
		const addresswRnWtpZ = accounts[3]
		const addressMrFOg33 = accounts[4]
		const uintcq7Wkr = BigInt("609")
		const uintGAK6xZ9 = BigInt("243")
		const addressWJLmsOY = accounts[5]
		const boolR9IIrai = await NALbPXFca.approve.call(addressE3Wf7WB, uintVYGps5I, {from: accounts[2]});
		const boolwKQORYA = await NALbPXFca.freezeAccount.call(addresswRnWtpZ, {from: accounts[5]});
		const boolOMZu8Sw = await NALbPXFca.isAdmin.call(addressMrFOg33, {from: accounts[0]});
		const boolT1njc3h = await NALbPXFca.transferWithLock.call(addressWJLmsOY, uintGAK6xZ9, uintcq7Wkr, {from: accounts[4]});

		assert.equal(boolR9IIrai, true)
		await expect(NALbPXFca.freezeAccount.call(addresswRnWtpZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALoE3LY2T = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintA5vF60R = BigInt("850")
		const addressHQLHHcX = accounts[5]
		const uintxGmwP5V = BigInt("1044")
		const addressQTvhLU = "0x0000000000000000000000000000000000000001"
		await NALoE3LY2T.pause.call({from: accounts[2]});
		const boolC9ADKn8 = await NALoE3LY2T.approve.call(addressHQLHHcX, uintA5vF60R, {from: accounts[4]});
		const booliQnsWVr = await NALoE3LY2T.increaseAllowance.call(addressQTvhLU, uintxGmwP5V, {from: accounts[2]});
	});

	it('test for NAL', async () => {
		const NAL23fYRX = await NAL.new({from: accounts[4]});
		const uintLV1K3a = BigInt("1062")
		const addressH74FyN1 = accounts[5]
		const addressN5Xp2Ai = accounts[5]
		const addressFIKmNpf = accounts[1]
		const boolBOt9d3d = await NAL23fYRX.increaseAllowance.call(addressH74FyN1, uintLV1K3a, {from: accounts[1]});
		const uint256MP7qNwH = await NAL23fYRX.balanceOf.call(addressN5Xp2Ai, {from: accounts[1]});
		const boolELj9ngE = await NAL23fYRX.isOwner.call(addressFIKmNpf, {from: accounts[1]});
		const boolWZaBDRs = await NAL23fYRX.paused.call({from: accounts[0]});
		const uint256n2pv8Q = await NAL23fYRX.totalSupply.call({from: accounts[3]});

		assert.equal(boolBOt9d3d, true)
		assert.equal(boolELj9ngE, false)
		assert.equal(boolWZaBDRs, false)
		assert.equal(uint256MP7qNwH, BigInt("0"))
		assert.equal(uint256n2pv8Q, BigInt("2000000000000000000000000000"))
	});

	it('test for NAL', async () => {
		const NALhn6caL = await NAL.new({from: accounts[1]});
		const uintj5pgF6k = BigInt("1852")
		const uintmofSoIc = BigInt("1409")
		const addressEcrtbvz = accounts[3]
		const boolui1WRRA = await NALhn6caL.lock.call(addressEcrtbvz, uintmofSoIc, uintj5pgF6k, {from: accounts[1]});

		await expect(NALhn6caL.lock.call(addressEcrtbvz, uintmofSoIc, uintj5pgF6k, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtyTOGTY = await NAL.new({from: accounts[1]});
		const addressd3YW2I = accounts[4]
		const uintEeUKQCy = BigInt("1883")
		const addressJoZUwEI = accounts[1]
		const uintuOXeYae = BigInt("401")
		const uintr6T4Nbi = BigInt("98")
		const addressvAuHD9G = accounts[5]
		const uint1XjP7r = BigInt("304")
		const addressESfnaWR = accounts[3]
		const boolj4pZ1Mr = await NALtyTOGTY.isAdmin.call(addressd3YW2I, {from: accounts[0]});
		const boolGBLuYFS = await NALtyTOGTY.decreaseAllowance.call(addressJoZUwEI, uintEeUKQCy, {from: accounts[4]});
		const boolGB7XIQ8 = await NALtyTOGTY.paused.call({from: accounts[2]});
		const boolLkwAWXM = await NALtyTOGTY.transferWithLock.call(addressvAuHD9G, uintr6T4Nbi, uintuOXeYae, {from: accounts[5]});
		const booleszP0RS = await NALtyTOGTY.increaseAllowance.call(addressESfnaWR, uint1XjP7r, {from: accounts[0]});

		assert.equal(boolj4pZ1Mr, false)
		await expect(NALtyTOGTY.decreaseAllowance.call(addressJoZUwEI, uintEeUKQCy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALs2xEOcb = await NAL.new({from: accounts[0]});
		const addressLmZCzHQ = accounts[4]
		const uintEphOskN = BigInt("751")
		const addressuptyBaG = accounts[2]
		const addresseiRHfqp = accounts[1]
		const addressEZdGCf = accounts[1]
		const uintZABBkra = BigInt("1638")
		const uintLKws22M = BigInt("1610")
		const addresseF1zaI5 = "0x0000000000000000000000000000000000000001"
		const addressfSSS99 = accounts[2]
		const addressIRygSE7 = accounts[0]
		const addressVgmZKFJ = accounts[4]
		const addressNxPzW6M = await NALs2xEOcb.removeAdmin.call(addressLmZCzHQ, {from: accounts[0]});
		await NALs2xEOcb.onlyAdmin.call({from: accounts[4]});
		const boolIPv44ba = await NALs2xEOcb.transfer.call(addressuptyBaG, uintEphOskN, {from: accounts[2]});
		const stringZ09IEsh = await NALs2xEOcb.symbol.call({from: accounts[3]});
		const uint256deoGNtD = await NALs2xEOcb.balanceOf.call(addresseiRHfqp, {from: accounts[2]});
		await NALs2xEOcb.onlyOwner.call({from: accounts[2]});
		const boolcPebZ4M = await NALs2xEOcb.freezeAccount.call(addressEZdGCf, {from: accounts[4]});
		const booltnFEcu7 = await NALs2xEOcb.lock.call(addresseF1zaI5, uintLKws22M, uintZABBkra, {from: accounts[3]});
		const addressUxflecq = await NALs2xEOcb.transferOwnership.call(addressfSSS99, {from: accounts[0]});
		const uint256Cr7lhO8 = await NALs2xEOcb.allowance.call(addressVgmZKFJ, addressIRygSE7, {from: accounts[2]});

		await expect(NALs2xEOcb.removeAdmin.call(addressLmZCzHQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALs2xEOcb = await NAL.new({from: accounts[0]});
		const uintuEqbK2X = BigInt("344")
		const addressdWtgN7t = accounts[2]
		await NALs2xEOcb.renounceAdmin.call({from: accounts[0]});
		const boolFOngXRe = await NALs2xEOcb.transfer.call(addressdWtgN7t, uintuEqbK2X, {from: accounts[5]});

		await expect(NALs2xEOcb.renounceAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL23fYRX = await NAL.new({from: accounts[4]});
		const addresslL5OJsB = accounts[5]
		const uintpxkDZG8 = BigInt("1062")
		const addresskz6oNpD = accounts[7]
		const addressOAb5oU6 = accounts[5]
		const addresstdMWnEr = accounts[4]
		const uintUnQxip = BigInt("1241")
		const addressDa2L5Yg = accounts[3]
		const addresskjczXiP = accounts[0]
		const boolrfV0DhS = await NAL23fYRX.isAdmin.call(addresslL5OJsB, {from: accounts[3]});
		const boolBOt9d3d = await NAL23fYRX.increaseAllowance.call(addresskz6oNpD, uintpxkDZG8, {from: accounts[1]});
		const uint256MP7qNwH = await NAL23fYRX.balanceOf.call(addressOAb5oU6, {from: accounts[1]});
		const boolELj9ngE = await NAL23fYRX.isOwner.call(addresstdMWnEr, {from: accounts[1]});
		const boolbDSiR7w = await NAL23fYRX.transferFrom.call(addresskjczXiP, addressDa2L5Yg, uintUnQxip, {from: accounts[0]});
		const boolWZaBDRs = await NAL23fYRX.paused.call({from: accounts[0]});

		assert.equal(boolBOt9d3d, true)
		assert.equal(boolELj9ngE, true)
		assert.equal(boolrfV0DhS, false)
		assert.equal(uint256MP7qNwH, BigInt("0"))
		await expect(NAL23fYRX.transferFrom.call(addresskjczXiP, addressDa2L5Yg, uintUnQxip, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALs2xEOcb = await NAL.new({from: accounts[0]});
		const addressUILSm8q = "0x0000000000000000000000000000000000000001"
		const uintJuuyfgy = BigInt("344")
		const addressZiUfAy = accounts[2]
		const addresszGHMZwy = await NALs2xEOcb.upgradeTo.call(addressUILSm8q, {from: accounts[0]});
		const boolFOngXRe = await NALs2xEOcb.transfer.call(addressZiUfAy, uintJuuyfgy, {from: accounts[5]});
		const stringCAK3hTY = await NALs2xEOcb.name.call({from: accounts[2]});

		await expect(NALs2xEOcb.transfer.call(addressZiUfAy, uintJuuyfgy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL23fYRX = await NAL.new({from: accounts[4]});
		const addressPHYPXM6 = accounts[4]
		const uintweLntBi = BigInt("1062")
		const addresspjth9GO = accounts[7]
		const address5LiUIm = accounts[5]
		const addressjx83Kvj = accounts[2]
		const addressWl9s4BQ = accounts[3]
		const uintick8KAF = BigInt("511")
		const addressIff9y9x = accounts[5]
		const uintY8aobKP = BigInt("1241")
		const addresswLcKaMW = accounts[4]
		const addressk2UFWgd = accounts[0]
		const boolrfV0DhS = await NAL23fYRX.isAdmin.call(addressPHYPXM6, {from: accounts[3]});
		const boolBOt9d3d = await NAL23fYRX.increaseAllowance.call(addresspjth9GO, uintweLntBi, {from: accounts[1]});
		const uint256MP7qNwH = await NAL23fYRX.balanceOf.call(address5LiUIm, {from: accounts[1]});
		const boolQjxsXxV = await NAL23fYRX.unfreezeAccount.call(addressjx83Kvj, {from: accounts[4]});
		const boolELj9ngE = await NAL23fYRX.isOwner.call(addressWl9s4BQ, {from: accounts[1]});
		const boolg4OyMOa = await NAL23fYRX.transfer.call(addressIff9y9x, uintick8KAF, {from: accounts[4]});
		const boolbDSiR7w = await NAL23fYRX.transferFrom.call(addressk2UFWgd, addresswLcKaMW, uintY8aobKP, {from: accounts[0]});
		const boolWZaBDRs = await NAL23fYRX.paused.call({from: accounts[0]});

		assert.equal(boolBOt9d3d, true)
		assert.equal(boolrfV0DhS, true)
		assert.equal(uint256MP7qNwH, BigInt("0"))
		await expect(NAL23fYRX.unfreezeAccount.call(addressjx83Kvj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALrmjTZN = await NAL.new({from: accounts[3]});
		const addressLXmbY11 = "0x0000000000000000000000000000000000000001"
		const addresslKP8YhC = accounts[1]
		const uintrheBL2T = BigInt("98")
		const addressJAjv9wq = accounts[3]
		const address0KWJ7x = accounts[5]
		const addressgvPMzkd = await NALrmjTZN.transferOwnership.call(addressLXmbY11, {from: accounts[3]});
		const stringTWv8aor = await NALrmjTZN.name.call({from: accounts[4]});
		const boolhYR9Auu = await NALrmjTZN.isOwner.call(addresslKP8YhC, {from: accounts[3]});
		const booldLcybMY = await NALrmjTZN.increaseAllowance.call(addressJAjv9wq, uintrheBL2T, {from: accounts[1]});
		const boolVzgZXR2 = await NALrmjTZN.unfreezeAccount.call(address0KWJ7x, {from: accounts[1]});
		const boolItB4cDs = await NALrmjTZN.paused.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booldLcybMY, true)
		assert.equal(boolhYR9Auu, false)
		assert.equal(stringTWv8aor, "Personal Token")
		await expect(NALrmjTZN.unfreezeAccount.call(address0KWJ7x, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL23fYRX = await NAL.new({from: accounts[4]});
		const addressr6cIQAY = accounts[1]
		const addressQXlXsOy = accounts[5]
		const uinttbbzJcc = BigInt("511")
		const addressfOBYerv = accounts[5]
		const uintaFYFVeU = BigInt("1241")
		const addressrYFDOrT = accounts[3]
		const addresszMZ54L = accounts[0]
		await NAL23fYRX.pause.call({from: accounts[4]});
		const boolIahM6x = await NAL23fYRX.isOwner.call(addressr6cIQAY, {from: accounts[2]});
		const boolrfV0DhS = await NAL23fYRX.isAdmin.call(addressQXlXsOy, {from: accounts[3]});
		const boolg4OyMOa = await NAL23fYRX.transfer.call(addressfOBYerv, uinttbbzJcc, {from: accounts[4]});
		const boolbDSiR7w = await NAL23fYRX.transferFrom.call(addresszMZ54L, addressrYFDOrT, uintaFYFVeU, {from: accounts[0]});
		const boolWZaBDRs = await NAL23fYRX.paused.call({from: accounts[0]});

		await expect(NAL23fYRX.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL23fYRX = await NAL.new({from: accounts[4]});
		const uintfH1cRWC = BigInt("734")
		const addressQxJCInq = "0x0000000000000000000000000000000000000001"
		const addressyCb6sWx = accounts[6]
		const uintFlgvO6E = BigInt("924")
		const addressmpcIJWZ = accounts[4]
		const booltY0IUbi = await NAL23fYRX.unlock.call(addressQxJCInq, uintfH1cRWC, {from: accounts[4]});
		const uint256MP7qNwH = await NAL23fYRX.balanceOf.call(addressyCb6sWx, {from: accounts[1]});
		const booljkeN8e7 = await NAL23fYRX.transfer.call(addressmpcIJWZ, uintFlgvO6E, {from: accounts[2]});

		await expect(NAL23fYRX.unlock.call(addressQxJCInq, uintfH1cRWC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})