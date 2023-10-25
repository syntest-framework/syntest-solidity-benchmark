const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolkWrBrIP = await AntiBaseProtocol.new({from: accounts[4]});
		const uintFi1aztz = BigInt("1543")
		const addressqLbKEnE = accounts[3]
		const uintoO7r3Rr = BigInt("1887")
		const uintifj5SQs = BigInt("1038")
		const addressBefv53k = "0x0000000000000000000000000000000000000001"
		const boolLjIk1C7 = await AntiBaseProtocolkWrBrIP.transfer.call(addressqLbKEnE, uintFi1aztz, {from: accounts[4]});
		const uint256WGaFoMJ = await AntiBaseProtocolkWrBrIP.findRewardFee.call(uintoO7r3Rr, {from: accounts[5]});
		const boolB1YvbNX = await AntiBaseProtocolkWrBrIP.isOwner.call({from: accounts[1]});
		const boolBl1ijzt = await AntiBaseProtocolkWrBrIP.decreaseAllowance.call(addressBefv53k, uintifj5SQs, {from: accounts[3]});
		const uint8zp83qGi = await AntiBaseProtocolkWrBrIP.decimals.call({from: accounts[3]});

		assert.equal(boolB1YvbNX, false)
		assert.equal(boolLjIk1C7, true)
		assert.equal(uint256WGaFoMJ, BigInt("95"))
		await expect(AntiBaseProtocolkWrBrIP.decreaseAllowance.call(addressBefv53k, uintifj5SQs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const stringFROyjYW = "FoV2RiDVX4y14qeUeYlof4VhMcM7vCxOtPAtQ1FWrC8Izfsipj5IBpcXTN"
		const stringHSh5rv = "3OFFaEwYsW3J8vzWDZaO61"
		const uintZtf62m5 = BigInt("229")
		const AntiBaseProtocoltcUxh6g = await AntiBaseProtocol.new(stringFROyjYW, stringHSh5rv, uintZtf62m5, {from: accounts[1]});
		const uintNhB49gy = BigInt("974")
		const addressZtoXGpC = accounts[2]
		const uint7tHKLM = BigInt("588")
		const addressTX5OJmz = accounts[4]
		const uintfX5MVL6 = BigInt("87")
		const addressOYBwPiD = accounts[4]
		const addressFGN2aLN = accounts[3]
		const uintbULHbc = BigInt("1998")
		const addressQulN9Cn = accounts[1]
		const boolrbSWInW = await AntiBaseProtocoltcUxh6g.approve.call(addressZtoXGpC, uintNhB49gy, {from: accounts[5]});
		const boolxmoL5cE = await AntiBaseProtocoltcUxh6g.decreaseAllowance.call(addressTX5OJmz, uint7tHKLM, {from: accounts[2]});
		const boolSH6nspM = await AntiBaseProtocoltcUxh6g.transferFrom.call(addressFGN2aLN, addressOYBwPiD, uintfX5MVL6, {from: accounts[4]});
		const uint256z3KMtBs = await AntiBaseProtocoltcUxh6g.totalSupply.call({from: accounts[5]});
		const addressJOpT3qZ = await AntiBaseProtocoltcUxh6g._burn.call(addressQulN9Cn, uintbULHbc, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolgxaQn1y = await AntiBaseProtocol.new({from: accounts[1]});
		const address2a4XkH = "0x0000000000000000000000000000000000000001"
		const uintD447HQY = BigInt("29")
		const addressVpbySOq = accounts[4]
		const addressYEwJJwp = "0x0000000000000000000000000000000000000001"
		const addressQXEZ2Ps = accounts[2]
		const addressgdXKPBr = accounts[4]
		const addressETz8ASv = await AntiBaseProtocolgxaQn1y._transferOwnership.call(address2a4XkH, {from: accounts[1]});
		const addressM263pgY = await AntiBaseProtocolgxaQn1y._approve.call(addressYEwJJwp, addressVpbySOq, uintD447HQY, {from: accounts[4]});
		await AntiBaseProtocolgxaQn1y.renounceOwnership.call({from: accounts[4]});
		const uint256YnSoX8M = await AntiBaseProtocolgxaQn1y.balanceOf.call(addressQXEZ2Ps, {from: accounts[2]});
		const addressdm6Qdc0 = await AntiBaseProtocolgxaQn1y.transferOwnership.call(addressgdXKPBr, {from: accounts[0]});

		await expect(AntiBaseProtocolgxaQn1y._transferOwnership.call(address2a4XkH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDLzgv90 = await AntiBaseProtocol.new({from: accounts[1]});
		const uintv8aNcQb = BigInt("1141")
		const addressJiSewd = "0x0000000000000000000000000000000000000001"
		const uintSxf2hw = BigInt("958")
		const uintPFI23vP = BigInt("2023")
		const addressYa3QyK = accounts[0]
		const boolDey2RyR = await AntiBaseProtocolDLzgv90.approve.call(addressJiSewd, uintv8aNcQb, {from: accounts[4]});
		const uint256IeuIE5Q = await AntiBaseProtocolDLzgv90.findRewardFee.call(uintSxf2hw, {from: accounts[4]});
		const addresskWeMKB3 = await AntiBaseProtocolDLzgv90._burn.call(addressYa3QyK, uintPFI23vP, {from: accounts[4]});

		assert.equal(boolDey2RyR, true)
		assert.equal(uint256IeuIE5Q, BigInt("50"))
		await expect(AntiBaseProtocolDLzgv90._burn.call(addressYa3QyK, uintPFI23vP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoln3vxT4 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintH5tDKP = BigInt("1003")
		const addressAJL0xOr = accounts[2]
		const uint256s8Pzz0 = await AntiBaseProtocoln3vxT4.totalSupply.call({from: accounts[1]});
		const boolVYLQPC = await AntiBaseProtocoln3vxT4.approve.call(addressAJL0xOr, uintH5tDKP, {from: accounts[0]});

		assert.equal(boolVYLQPC, true)
		assert.equal(uint256s8Pzz0, BigInt("31250000000000000000"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDLzgv90 = await AntiBaseProtocol.new({from: accounts[1]});
		const uintl6r9stb = BigInt("1141")
		const addressZvruK9R = "0x0000000000000000000000000000000000000001"
		const uintfHE9L4 = BigInt("2023")
		const addressUiKnW9n = accounts[0]
		const uint8PF5ucPr = await AntiBaseProtocolDLzgv90.decimals.call({from: accounts[0]});
		const boolDey2RyR = await AntiBaseProtocolDLzgv90.approve.call(addressZvruK9R, uintl6r9stb, {from: accounts[4]});
		const addresskWeMKB3 = await AntiBaseProtocolDLzgv90._burn.call(addressUiKnW9n, uintfHE9L4, {from: accounts[4]});

		assert.equal(boolDey2RyR, true)
		assert.equal(uint8PF5ucPr, BigInt("18"))
		await expect(AntiBaseProtocolDLzgv90._burn.call(addressUiKnW9n, uintfHE9L4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolkWrBrIP = await AntiBaseProtocol.new({from: accounts[4]});
		const uintHHOuxSD = BigInt("657")
		const addressoVKyKGe = "0x0000000000000000000000000000000000000001"
		const uintdXOT57 = BigInt("1543")
		const addressjvta7PV = accounts[3]
		const uintkl6ioBC = BigInt("1887")
		const uintjHibzKH = BigInt("1038")
		const addressYpHobgl = "0x0000000000000000000000000000000000000001"
		const boolQ9nAL5 = await AntiBaseProtocolkWrBrIP.increaseAllowance.call(addressoVKyKGe, uintHHOuxSD, {from: accounts[3]});
		const boolLjIk1C7 = await AntiBaseProtocolkWrBrIP.transfer.call(addressjvta7PV, uintdXOT57, {from: accounts[4]});
		const uint256WGaFoMJ = await AntiBaseProtocolkWrBrIP.findRewardFee.call(uintkl6ioBC, {from: accounts[5]});
		const boolB1YvbNX = await AntiBaseProtocolkWrBrIP.isOwner.call({from: accounts[1]});
		const boolBl1ijzt = await AntiBaseProtocolkWrBrIP.decreaseAllowance.call(addressYpHobgl, uintjHibzKH, {from: accounts[3]});
		const uint8zp83qGi = await AntiBaseProtocolkWrBrIP.decimals.call({from: accounts[3]});

		assert.equal(boolB1YvbNX, false)
		assert.equal(boolLjIk1C7, true)
		assert.equal(boolQ9nAL5, true)
		assert.equal(uint256WGaFoMJ, BigInt("95"))
		await expect(AntiBaseProtocolkWrBrIP.decreaseAllowance.call(addressYpHobgl, uintjHibzKH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDLzgv90 = await AntiBaseProtocol.new({from: accounts[1]});
		const uintIYUDg3f = BigInt("1313")
		const addresss49AVJk = accounts[3]
		const addressEBrDhDS = accounts[0]
		const uinth9Hl3pd = BigInt("1141")
		const addressnykwEZl = "0x0000000000000000000000000000000000000001"
		const uintiREv99 = BigInt("502")
		const boolTmaIOP4 = await AntiBaseProtocolDLzgv90.transferFrom.call(addressEBrDhDS, addresss49AVJk, uintIYUDg3f, {from: accounts[0]});
		const boolDey2RyR = await AntiBaseProtocolDLzgv90.approve.call(addressnykwEZl, uinth9Hl3pd, {from: accounts[4]});
		const uint256IeuIE5Q = await AntiBaseProtocolDLzgv90.findRewardFee.call(uintiREv99, {from: accounts[4]});

		await expect(AntiBaseProtocolDLzgv90.transferFrom.call(addressEBrDhDS, addresss49AVJk, uintIYUDg3f, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolrCAi8ds = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHq0LjJl = BigInt("881")
		const addressyLmR3Pv = accounts[0]
		const uintH1aI81P = BigInt("987")
		const addressQY798gH = accounts[3]
		const addressMwJZeW = accounts[4]
		const uintgDjNATT = BigInt("1195")
		const addressxzglD0s = accounts[1]
		const uintOGsLJI = BigInt("683")
		const addressygtGJ75 = accounts[5]
		const bool9qF9r4 = await AntiBaseProtocolrCAi8ds.transfer.call(addressyLmR3Pv, uintHq0LjJl, {from: accounts[3]});
		const booln7pxM2U = await AntiBaseProtocolrCAi8ds.approve.call(addressQY798gH, uintH1aI81P, {from: accounts[4]});
		const addressu8TKFQ9 = await AntiBaseProtocolrCAi8ds._transferOwnership.call(addressMwJZeW, {from: accounts[4]});
		const boolxnEH6hK = await AntiBaseProtocolrCAi8ds.transfer.call(addressxzglD0s, uintgDjNATT, {from: accounts[5]});
		const addressO551UCS = await AntiBaseProtocolrCAi8ds.burnFrom.call(addressygtGJ75, uintOGsLJI, {from: accounts[1]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDLzgv90 = await AntiBaseProtocol.new({from: accounts[1]});
		const uintzgk8nHR = BigInt("1766")
		const addresshzVSwgJ = accounts[0]
		const uintaMJhP3V = BigInt("1313")
		const addressLXRPpSm = accounts[3]
		const addressgtUPGy9 = accounts[0]
		const uintBRUVPQ = BigInt("1115")
		const addressmfXZslk = "0x0000000000000000000000000000000000000001"
		const uintQ7JG35T = BigInt("502")
		const addressdAhLGJ = await AntiBaseProtocolDLzgv90.burnFrom.call(addresshzVSwgJ, uintzgk8nHR, {from: accounts[4]});
		const boolTmaIOP4 = await AntiBaseProtocolDLzgv90.transferFrom.call(addressgtUPGy9, addressLXRPpSm, uintaMJhP3V, {from: accounts[0]});
		const boolDey2RyR = await AntiBaseProtocolDLzgv90.approve.call(addressmfXZslk, uintBRUVPQ, {from: accounts[4]});
		const uint256IeuIE5Q = await AntiBaseProtocolDLzgv90.findRewardFee.call(uintQ7JG35T, {from: accounts[4]});

		await expect(AntiBaseProtocolDLzgv90.burnFrom.call(addresshzVSwgJ, uintzgk8nHR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDLzgv90 = await AntiBaseProtocol.new({from: accounts[1]});
		const addressVBqMKci = accounts[4]
		const uintpHWED2c = BigInt("1699")
		const addresswXAo8As = accounts[1]
		const uintpf5L0Zj = BigInt("503")
		const addressYI5KZbb = await AntiBaseProtocolDLzgv90.transferOwnership.call(addressVBqMKci, {from: accounts[3]});
		const addressb1yiUMc = await AntiBaseProtocolDLzgv90.burnFrom.call(addresswXAo8As, uintpHWED2c, {from: "0x0000000000000000000000000000000000000001"});
		const uint256IeuIE5Q = await AntiBaseProtocolDLzgv90.findRewardFee.call(uintpf5L0Zj, {from: accounts[4]});

		await expect(AntiBaseProtocolDLzgv90.transferOwnership.call(addressVBqMKci, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDLzgv90 = await AntiBaseProtocol.new({from: accounts[1]});
		const uintEk5Edgt = BigInt("477")
		const addressSka5we3 = accounts[0]
		const addressvvWr3c = accounts[2]
		const uint256IeuIE5Q = await AntiBaseProtocolDLzgv90.findRewardFee.call(uintEk5Edgt, {from: accounts[4]});
		const boolRBc2XMn = await AntiBaseProtocolDLzgv90.isOwner.call({from: accounts[4]});
		const uint256gD65FTN = await AntiBaseProtocolDLzgv90.allowance.call(addressvvWr3c, addressSka5we3, {from: accounts[5]});

		assert.equal(boolRBc2XMn, false)
		assert.equal(uint256IeuIE5Q, BigInt("25"))
		assert.equal(uint256gD65FTN, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDLzgv90 = await AntiBaseProtocol.new({from: accounts[1]});
		const uintDRZRtBw = BigInt("502")
		const uintvhNegj0 = BigInt("608")
		const uintzNYMNuY = BigInt("1236")
		const addressCTUdECN = accounts[4]
		const addressOcJQc8E = accounts[1]
		const uint256IeuIE5Q = await AntiBaseProtocolDLzgv90.findRewardFee.call(uintDRZRtBw, {from: accounts[4]});
		const uint256cpx9C2S = await AntiBaseProtocolDLzgv90.findBurnFee.call(uintvhNegj0, {from: accounts[4]});
		const boolEVbsj9f = await AntiBaseProtocolDLzgv90.transferFrom.call(addressOcJQc8E, addressCTUdECN, uintzNYMNuY, {from: accounts[4]});

		assert.equal(uint256IeuIE5Q, BigInt("30"))
		assert.equal(uint256cpx9C2S, BigInt("105"))
		await expect(AntiBaseProtocolDLzgv90.transferFrom.call(addressOcJQc8E, addressCTUdECN, uintzNYMNuY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDLzgv90 = await AntiBaseProtocol.new({from: accounts[1]});
		const uintkUGWJCG = BigInt("531")
		const uintQMLUM1g = BigInt("664")
		const uintF4yPc0K = BigInt("1664")
		const uint256IeuIE5Q = await AntiBaseProtocolDLzgv90.findRewardFee.call(uintkUGWJCG, {from: accounts[4]});
		const uint256f2aUO6i = await AntiBaseProtocolDLzgv90.burn.call(uintQMLUM1g, {from: accounts[2]});
		const uint256S7YptQr = await AntiBaseProtocolDLzgv90.totalSupply.call({from: accounts[0]});
		const uint256CBL7ryn = await AntiBaseProtocolDLzgv90.findBurnFee.call(uintF4yPc0K, {from: accounts[1]});

		assert.equal(uint256IeuIE5Q, BigInt("30"))
		await expect(AntiBaseProtocolDLzgv90.burn.call(uintQMLUM1g, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDLzgv90 = await AntiBaseProtocol.new({from: accounts[1]});
		const uintluEeB99 = BigInt("449")
		const addressmrQ17QF = "0x0000000000000000000000000000000000000001"
		const uintblUTm62 = BigInt("502")
		const stringc6Ei1wN = await AntiBaseProtocolDLzgv90.name.call({from: "0x0000000000000000000000000000000000000001"});
		const addressT1xE5my = await AntiBaseProtocolDLzgv90._mint.call(addressmrQ17QF, uintluEeB99, {from: accounts[3]});
		const uint256IeuIE5Q = await AntiBaseProtocolDLzgv90.findRewardFee.call(uintblUTm62, {from: accounts[4]});

		assert.equal(stringc6Ei1wN, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocolDLzgv90._mint.call(addressmrQ17QF, uintluEeB99, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolkWrBrIP = await AntiBaseProtocol.new({from: accounts[4]});
		const uint627xqF = BigInt("1543")
		const addresshyiPx1G = accounts[3]
		const uintWdsNtYp = BigInt("1887")
		const addressylfrXF = accounts[1]
		const uintvFsWvtd = BigInt("1717")
		const addressegpajsy = accounts[3]
		const uintppyrRfk = BigInt("841")
		const addressf31pCao = accounts[1]
		const uintg42MRe8 = BigInt("1038")
		const addressyioyY1Y = "0x0000000000000000000000000000000000000001"
		const boolLjIk1C7 = await AntiBaseProtocolkWrBrIP.transfer.call(addresshyiPx1G, uint627xqF, {from: accounts[4]});
		const uint256WGaFoMJ = await AntiBaseProtocolkWrBrIP.findRewardFee.call(uintWdsNtYp, {from: accounts[5]});
		const uint256oM80wsy = await AntiBaseProtocolkWrBrIP.balanceOf.call(addressylfrXF, {from: accounts[0]});
		const boolB1YvbNX = await AntiBaseProtocolkWrBrIP.isOwner.call({from: accounts[1]});
		const boolaoIZNe5 = await AntiBaseProtocolkWrBrIP.increaseAllowance.call(addressegpajsy, uintvFsWvtd, {from: accounts[1]});
		const boolmld39eH = await AntiBaseProtocolkWrBrIP.transfer.call(addressf31pCao, uintppyrRfk, {from: accounts[1]});
		const boolBl1ijzt = await AntiBaseProtocolkWrBrIP.decreaseAllowance.call(addressyioyY1Y, uintg42MRe8, {from: accounts[3]});
		const uint8zp83qGi = await AntiBaseProtocolkWrBrIP.decimals.call({from: accounts[3]});

		assert.equal(boolB1YvbNX, false)
		assert.equal(boolLjIk1C7, true)
		assert.equal(boolaoIZNe5, true)
		assert.equal(uint256WGaFoMJ, BigInt("95"))
		assert.equal(uint256oM80wsy, BigInt("0"))
		await expect(AntiBaseProtocolkWrBrIP.transfer.call(addressf31pCao, uintppyrRfk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDLzgv90 = await AntiBaseProtocol.new({from: accounts[1]});
		const uintajOSErl = BigInt("507")
		const uint256IeuIE5Q = await AntiBaseProtocolDLzgv90.findRewardFee.call(uintajOSErl, {from: accounts[4]});
		const stringgfutsFM = await AntiBaseProtocolDLzgv90.symbol.call({from: accounts[1]});

		assert.equal(stringgfutsFM, "ABASE")
		assert.equal(uint256IeuIE5Q, BigInt("30"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDLzgv90 = await AntiBaseProtocol.new({from: accounts[1]});
		const uintWyLlNAP = BigInt("502")
		const uint256IeuIE5Q = await AntiBaseProtocolDLzgv90.findRewardFee.call(uintWyLlNAP, {from: accounts[4]});
		const addressCTE7eyu = await AntiBaseProtocolDLzgv90.owner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressCTE7eyu, 0x47AEcf922C984856Bde95f80735a058fc1762F37)
		assert.equal(uint256IeuIE5Q, BigInt("30"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDLzgv90 = await AntiBaseProtocol.new({from: accounts[1]});
		const uintqzM6cMl = BigInt("484")
		const addressskK3ESI = accounts[4]
		const uint256IeuIE5Q = await AntiBaseProtocolDLzgv90.findRewardFee.call(uintqzM6cMl, {from: accounts[4]});
		const addressEYxX95t = await AntiBaseProtocolDLzgv90.transferOwnership.call(addressskK3ESI, {from: accounts[1]});
		const addressNNF6R6e = await AntiBaseProtocolDLzgv90.owner.call({from: accounts[2]});
		const addressFQwQ7tr = await AntiBaseProtocolDLzgv90.owner.call({from: accounts[2]});

		assert.equal(addressFQwQ7tr, 0x47AEcf922C984856Bde95f80735a058fc1762F37)
		assert.equal(addressNNF6R6e, 0x47AEcf922C984856Bde95f80735a058fc1762F37)
		assert.equal(uint256IeuIE5Q, BigInt("25"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDLzgv90 = await AntiBaseProtocol.new({from: accounts[1]});
		const uintflBA9jI = BigInt("0")
		const addresstci6yCs = accounts[4]
		const addressqD2wl8P = accounts[2]
		const uintcqEyXXe = BigInt("515")
		const uint256F9dQhnB = await AntiBaseProtocolDLzgv90.findRewardFee.call(uintflBA9jI, {from: accounts[0]});
		await AntiBaseProtocolDLzgv90.renounceOwnership.call({from: accounts[3]});
		await AntiBaseProtocolDLzgv90.renounceOwnership.call({from: accounts[4]});
		const uint256VKC5fA = await AntiBaseProtocolDLzgv90.allowance.call(addressqD2wl8P, addresstci6yCs, {from: accounts[2]});
		const uint256IeuIE5Q = await AntiBaseProtocolDLzgv90.findRewardFee.call(uintcqEyXXe, {from: accounts[4]});

		assert.equal(uint256F9dQhnB, BigInt("0"))
		await expect(AntiBaseProtocolDLzgv90.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolkWrBrIP = await AntiBaseProtocol.new({from: accounts[4]});
		const uintEEOM0Tk = BigInt("164")
		const address3xl71P = accounts[2]
		await AntiBaseProtocolkWrBrIP.renounceOwnership.call({from: accounts[4]});
		const boolmld39eH = await AntiBaseProtocolkWrBrIP.transfer.call(address3xl71P, uintEEOM0Tk, {from: accounts[1]});

		await expect(AntiBaseProtocolkWrBrIP.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDLzgv90 = await AntiBaseProtocol.new({from: accounts[1]});
		const uintKrJ0MFi = BigInt("604")
		const addresshKMsNHW = accounts[1]
		const uintzdvUnSl = BigInt("1309")
		const uintlR8xwvc = BigInt("1601")
		const addressBGo070j = await AntiBaseProtocolDLzgv90.burnFrom.call(addresshKMsNHW, uintKrJ0MFi, {from: accounts[4]});
		const uint256IeuIE5Q = await AntiBaseProtocolDLzgv90.findRewardFee.call(uintzdvUnSl, {from: accounts[4]});
		const uint256QyEtmRn = await AntiBaseProtocolDLzgv90.findBurnFee.call(uintlR8xwvc, {from: accounts[5]});

		await expect(AntiBaseProtocolDLzgv90.burnFrom.call(addresshKMsNHW, uintKrJ0MFi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolCgCdkiV = await AntiBaseProtocol.new({from: accounts[1]});
		const uintieikvMi = BigInt("861")
		const addresshwGZkX = "0x00000000000000000000000000000000000000-1"
		const addressyIESewo = "0x0000000000000000000000000000000000000001"
		const boolE4cOznO = await AntiBaseProtocolCgCdkiV.transferFrom.call(addressyIESewo, addresshwGZkX, uintieikvMi, {from: accounts[4]});

		await expect(AntiBaseProtocolCgCdkiV.transferFrom.call(addressyIESewo, addresshwGZkX, uintieikvMi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolCgCdkiV = await AntiBaseProtocol.new({from: accounts[1]});
		const uintN32mqgb = BigInt("5")
		const addressfOTnITZ = accounts[1]
		const uintoIzJrpI = BigInt("840")
		const addressAZSDyE = "0x0000000000000000000000000000000000000000"
		const addressVur6FGX = "0x00000000000000000000000000000000000000-1"
		const booloondCP = await AntiBaseProtocolCgCdkiV.increaseAllowance.call(addressfOTnITZ, uintN32mqgb, {from: accounts[3]});
		const boolE4cOznO = await AntiBaseProtocolCgCdkiV.transferFrom.call(addressVur6FGX, addressAZSDyE, uintoIzJrpI, {from: accounts[4]});

		assert.equal(booloondCP, true)
		await expect(AntiBaseProtocolCgCdkiV.transferFrom.call(addressVur6FGX, addressAZSDyE, uintoIzJrpI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})