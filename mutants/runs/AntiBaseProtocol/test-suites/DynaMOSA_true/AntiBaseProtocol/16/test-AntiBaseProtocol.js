const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBxB7Dm9 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintzUOc0Cs = BigInt("611")
		const addressFebrlpK = accounts[2]
		const addressDxaqZvY = accounts[1]
		const boolDuJbFts = await AntiBaseProtocolBxB7Dm9.transferFrom.call(addressDxaqZvY, addressFebrlpK, uintzUOc0Cs, {from: accounts[0]});
		const stringqAdeTZy = await AntiBaseProtocolBxB7Dm9.symbol.call({from: accounts[2]});

		await expect(AntiBaseProtocolBxB7Dm9.transferFrom.call(addressDxaqZvY, addressFebrlpK, uintzUOc0Cs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const stringsaoD0g = "HpRBsC4kmIGD4cyuFAYGOQVsmj1UbalDr4Iu3bp8162eu1XQCPzF78OW5jcoEuET4cNCo4vFaIQ2knuZF9cNJ2tJaI"
		const stringV5Bc6x = "3IYdR9hKzoANKvoyqDpy3"
		const uintq4GMFMY = BigInt("91")
		const AntiBaseProtocoleFobQ1B = await AntiBaseProtocol.new(stringsaoD0g, stringV5Bc6x, uintq4GMFMY, {from: accounts[5]});
		const uintGPa46Z = BigInt("538")
		const addressgHW3QN = accounts[3]
		const addresseNY0Fh = accounts[5]
		const uintjxu4Is1 = BigInt("1950")
		const addressFXpdG4G = accounts[2]
		const addressJDuqMpR = accounts[2]
		const uintOFJVhT = BigInt("993")
		const addressqQrogwj = accounts[1]
		const uintpNxxxrT = BigInt("1946")
		const addressEXVJQzn = accounts[4]
		const addresst8XE4wz = await AntiBaseProtocoleFobQ1B.burnFrom.call(addressgHW3QN, uintGPa46Z, {from: accounts[0]});
		const addressBv96HNw = await AntiBaseProtocoleFobQ1B._transferOwnership.call(addresseNY0Fh, {from: accounts[1]});
		const boolNp1i0x7 = await AntiBaseProtocoleFobQ1B.decreaseAllowance.call(addressFXpdG4G, uintjxu4Is1, {from: accounts[4]});
		const addressEOZLrQL = await AntiBaseProtocoleFobQ1B._transferOwnership.call(addressJDuqMpR, {from: accounts[2]});
		const boolr5NE1QM = await AntiBaseProtocoleFobQ1B.transfer.call(addressqQrogwj, uintOFJVhT, {from: accounts[1]});
		const boolghpd2QF = await AntiBaseProtocoleFobQ1B.approve.call(addressEXVJQzn, uintpNxxxrT, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolY2kKGJ6 = await AntiBaseProtocol.new({from: accounts[2]});
		const addressNUmtqc4 = accounts[1]
		const addressEVwmpYx = accounts[0]
		const addressCmOuiyu = accounts[3]
		const uint256f9WwEnW = await AntiBaseProtocolY2kKGJ6.balanceOf.call(addressNUmtqc4, {from: accounts[3]});
		const uint256FCuCpMP = await AntiBaseProtocolY2kKGJ6.allowance.call(addressCmOuiyu, addressEVwmpYx, {from: accounts[5]});
		const stringJc4n5oT = await AntiBaseProtocolY2kKGJ6.name.call({from: accounts[0]});

		assert.equal(stringJc4n5oT, "https://t.me/antibaseprotocol")
		assert.equal(uint256FCuCpMP, BigInt("0"))
		assert.equal(uint256f9WwEnW, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBxB7Dm9 = await AntiBaseProtocol.new({from: accounts[5]});
		await AntiBaseProtocolBxB7Dm9.renounceOwnership.call({from: accounts[4]});
		const stringqAdeTZy = await AntiBaseProtocolBxB7Dm9.symbol.call({from: accounts[2]});

		await expect(AntiBaseProtocolBxB7Dm9.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBxB7Dm9 = await AntiBaseProtocol.new({from: accounts[5]});
		const stringqAdeTZy = await AntiBaseProtocolBxB7Dm9.symbol.call({from: accounts[2]});

		assert.equal(stringqAdeTZy, "ABASE")
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBxB7Dm9 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintNPIK3y = BigInt("955")
		const addressRjWxryK = accounts[1]
		const boolI7dSfKc = await AntiBaseProtocolBxB7Dm9.decreaseAllowance.call(addressRjWxryK, uintNPIK3y, {from: accounts[2]});
		const stringqAdeTZy = await AntiBaseProtocolBxB7Dm9.symbol.call({from: accounts[2]});

		await expect(AntiBaseProtocolBxB7Dm9.decreaseAllowance.call(addressRjWxryK, uintNPIK3y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBxB7Dm9 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintiWzQDnF = BigInt("611")
		const addressQt1Qf1t = accounts[2]
		const addressqQaNEYz = accounts[3]
		const addressz7xkRPB = accounts[2]
		const uint8xKsiJVy = await AntiBaseProtocolBxB7Dm9.decimals.call({from: accounts[4]});
		const boolDuJbFts = await AntiBaseProtocolBxB7Dm9.transferFrom.call(addressqQaNEYz, addressQt1Qf1t, uintiWzQDnF, {from: accounts[0]});
		const uint256MCxvtJX = await AntiBaseProtocolBxB7Dm9.balanceOf.call(addressz7xkRPB, {from: accounts[3]});

		assert.equal(uint8xKsiJVy, BigInt("18"))
		await expect(AntiBaseProtocolBxB7Dm9.transferFrom.call(addressqQaNEYz, addressQt1Qf1t, uintiWzQDnF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBxB7Dm9 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintSR3Szh7 = BigInt("611")
		const addressxxsIHQ2 = accounts[2]
		const addressX31CMc1 = accounts[4]
		const addressjdVDmL2 = accounts[2]
		const uint8xKsiJVy = await AntiBaseProtocolBxB7Dm9.decimals.call({from: accounts[4]});
		await AntiBaseProtocolBxB7Dm9.onlyOwner.call({from: accounts[5]});
		const boolDuJbFts = await AntiBaseProtocolBxB7Dm9.transferFrom.call(addressX31CMc1, addressxxsIHQ2, uintSR3Szh7, {from: accounts[0]});
		const uint256MCxvtJX = await AntiBaseProtocolBxB7Dm9.balanceOf.call(addressjdVDmL2, {from: accounts[3]});

		assert.equal(uint8xKsiJVy, BigInt("18"))
		await expect(AntiBaseProtocolBxB7Dm9.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBxB7Dm9 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintha8jnDN = BigInt("1604")
		const uintfdV57Z2 = BigInt("611")
		const addressgWdrb4y = "0x0000000000000000000000000000000000000002"
		const addresszyCcVLE = accounts[1]
		const uint2564qkpcu = await AntiBaseProtocolBxB7Dm9.findBurnFee.call(uintha8jnDN, {from: accounts[1]});
		const boolDuJbFts = await AntiBaseProtocolBxB7Dm9.transferFrom.call(addresszyCcVLE, addressgWdrb4y, uintfdV57Z2, {from: accounts[0]});
		const stringqAdeTZy = await AntiBaseProtocolBxB7Dm9.symbol.call({from: accounts[2]});

		assert.equal(uint2564qkpcu, BigInt("255"))
		await expect(AntiBaseProtocolBxB7Dm9.transferFrom.call(addresszyCcVLE, addressgWdrb4y, uintfdV57Z2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoljNGe2UG = await AntiBaseProtocol.new({from: accounts[4]});
		const uinto0k7RF5 = BigInt("535")
		const addressHbVCodY = accounts[3]
		const uintPEXj94P = BigInt("625")
		const addressfyS3D7 = accounts[3]
		const bool8LHbcx = await AntiBaseProtocoljNGe2UG.transfer.call(addressHbVCodY, uinto0k7RF5, {from: accounts[5]});
		const addressbrRlUaH = await AntiBaseProtocoljNGe2UG._burn.call(addressfyS3D7, uintPEXj94P, {from: accounts[3]});

		await expect(AntiBaseProtocoljNGe2UG.transfer.call(addressHbVCodY, uinto0k7RF5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBxB7Dm9 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintvVxQNJZ = BigInt("1247")
		const addressZHmt5KZ = accounts[2]
		const uintkvFmrHU = BigInt("611")
		const addressrZlUKcL = "0x0000000000000000000000000000000000000001"
		const addressDu1k1VM = accounts[1]
		const uintnWNgLG5 = BigInt("1330")
		const addressp8rTWK9 = accounts[1]
		const boolw8bvlM6 = await AntiBaseProtocolBxB7Dm9.increaseAllowance.call(addressZHmt5KZ, uintvVxQNJZ, {from: accounts[3]});
		const boolDuJbFts = await AntiBaseProtocolBxB7Dm9.transferFrom.call(addressDu1k1VM, addressrZlUKcL, uintkvFmrHU, {from: accounts[0]});
		const boolqHWR9Ip = await AntiBaseProtocolBxB7Dm9.approve.call(addressp8rTWK9, uintnWNgLG5, {from: accounts[4]});
		const stringqAdeTZy = await AntiBaseProtocolBxB7Dm9.symbol.call({from: accounts[2]});

		assert.equal(boolw8bvlM6, true)
		await expect(AntiBaseProtocolBxB7Dm9.transferFrom.call(addressDu1k1VM, addressrZlUKcL, uintkvFmrHU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolqd3PJDw = await AntiBaseProtocol.new({from: accounts[0]});
		const addressN6thkQI = accounts[4]
		const uintf7bGWF = BigInt("847")
		const addresshG3kGy = accounts[2]
		const uint256ai607w = await AntiBaseProtocolqd3PJDw.balanceOf.call(addressN6thkQI, {from: "0x0000000000000000000000000000000000000001"});
		const addressBQ10zqS = await AntiBaseProtocolqd3PJDw.burnFrom.call(addresshG3kGy, uintf7bGWF, {from: accounts[1]});
		const uint8bNN8w5 = await AntiBaseProtocolqd3PJDw.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolWsDuWc5 = await AntiBaseProtocolqd3PJDw.isOwner.call({from: accounts[1]});

		assert.equal(uint256ai607w, BigInt("0"))
		await expect(AntiBaseProtocolqd3PJDw.burnFrom.call(addresshG3kGy, uintf7bGWF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBxB7Dm9 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintTw0KtXN = BigInt("190")
		const uints1EEnHu = BigInt("1531")
		const addressLkzpM0 = accounts[4]
		const uintMT3ASAx = BigInt("611")
		const addressbIU6Qi = "0x0000000000000000000000000000000000000002"
		const addresszx0L364 = accounts[1]
		const uint2564qkpcu = await AntiBaseProtocolBxB7Dm9.findBurnFee.call(uintTw0KtXN, {from: accounts[1]});
		const uint256P1xDUCV = await AntiBaseProtocolBxB7Dm9.burn.call(uints1EEnHu, {from: accounts[1]});
		const addresst6iL10G = await AntiBaseProtocolBxB7Dm9._transferOwnership.call(addressLkzpM0, {from: accounts[0]});
		const boolDuJbFts = await AntiBaseProtocolBxB7Dm9.transferFrom.call(addresszx0L364, addressbIU6Qi, uintMT3ASAx, {from: accounts[0]});

		assert.equal(uint2564qkpcu, BigInt("30"))
		await expect(AntiBaseProtocolBxB7Dm9.burn.call(uints1EEnHu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBxB7Dm9 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintHCKxLeV = BigInt("876")
		const addressGrtm6L = accounts[2]
		const addresscsG9TjW = accounts[2]
		const boolcRqIk6L = await AntiBaseProtocolBxB7Dm9.isOwner.call({from: accounts[0]});
		const uint256HpjkYS = await AntiBaseProtocolBxB7Dm9.totalSupply.call({from: accounts[4]});
		const boolDuJbFts = await AntiBaseProtocolBxB7Dm9.transferFrom.call(addresscsG9TjW, addressGrtm6L, uintHCKxLeV, {from: accounts[0]});

		assert.equal(boolcRqIk6L, false)
		assert.equal(uint256HpjkYS, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolBxB7Dm9.transferFrom.call(addresscsG9TjW, addressGrtm6L, uintHCKxLeV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolFhS7lxu = await AntiBaseProtocol.new({from: accounts[3]});
		const uintQd4GVwX = BigInt("1238")
		const address4BE1dI = accounts[4]
		const addressUGiIqtU = accounts[5]
		const addressWQ05BmI = accounts[1]
		const addressTYA3Opx = accounts[3]
		const boolgmeNC6S = await AntiBaseProtocolFhS7lxu.transfer.call(address4BE1dI, uintQd4GVwX, {from: accounts[3]});
		const uint256JF2LfhC = await AntiBaseProtocolFhS7lxu.balanceOf.call(addressUGiIqtU, {from: accounts[0]});
		const uint256yMkTDaO = await AntiBaseProtocolFhS7lxu.allowance.call(addressTYA3Opx, addressWQ05BmI, {from: accounts[0]});
		const uint256wakp9Kl = await AntiBaseProtocolFhS7lxu.totalSupply.call({from: accounts[4]});

		assert.equal(boolgmeNC6S, true)
		assert.equal(uint256JF2LfhC, BigInt("0"))
		assert.equal(uint256wakp9Kl, BigInt("31250000000000000000"))
		assert.equal(uint256yMkTDaO, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBxB7Dm9 = await AntiBaseProtocol.new({from: accounts[5]});
		const uints3kBWVc = BigInt("190")
		const uintmy6hbtF = BigInt("762")
		const addresszhbwxn = accounts[4]
		const addressPWdo0ZC = accounts[2]
		const uintSHdjdUt = BigInt("611")
		const addressXXrqujM = "0x0000000000000000000000000000000000000002"
		const addressofm99ab = accounts[1]
		const uint2564qkpcu = await AntiBaseProtocolBxB7Dm9.findBurnFee.call(uints3kBWVc, {from: accounts[1]});
		const addressf7szCey = await AntiBaseProtocolBxB7Dm9.owner.call({from: accounts[3]});
		const uint256P1xDUCV = await AntiBaseProtocolBxB7Dm9.burn.call(uintmy6hbtF, {from: accounts[1]});
		const addresst6iL10G = await AntiBaseProtocolBxB7Dm9._transferOwnership.call(addresszhbwxn, {from: accounts[0]});
		const uint256CGFyOQK = await AntiBaseProtocolBxB7Dm9.balanceOf.call(addressPWdo0ZC, {from: accounts[2]});
		const boolDuJbFts = await AntiBaseProtocolBxB7Dm9.transferFrom.call(addressofm99ab, addressXXrqujM, uintSHdjdUt, {from: accounts[0]});

		assert.equal(addressf7szCey, 0x12E9aE447FafF55782b71b4d09cB3e23080Fd434)
		assert.equal(uint2564qkpcu, BigInt("30"))
		await expect(AntiBaseProtocolBxB7Dm9.burn.call(uintmy6hbtF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnILCI6w = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintlpwvZqm = BigInt("1430")
		const addressF0OwQOV = accounts[1]
		const addressr1fMHh9 = accounts[4]
		const addressdhmzi4 = accounts[0]
		const uint256HDaNNf = await AntiBaseProtocolnILCI6w.findRewardFee.call(uintlpwvZqm, {from: accounts[4]});
		await AntiBaseProtocolnILCI6w.renounceOwnership.call({from: accounts[2]});
		const stringGCpaib3 = await AntiBaseProtocolnILCI6w.symbol.call({from: accounts[1]});
		const uint256nD6IpKx = await AntiBaseProtocolnILCI6w.balanceOf.call(addressF0OwQOV, {from: accounts[3]});
		const uint256gZzbkUd = await AntiBaseProtocolnILCI6w.allowance.call(addressdhmzi4, addressr1fMHh9, {from: accounts[1]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBxB7Dm9 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintEXRcdf = BigInt("1268")
		const addressuYONFrH = accounts[0]
		const uintt9EQH3J = BigInt("611")
		const addressd6agDE = accounts[3]
		const addressMr37VgX = accounts[2]
		const uintEZkWjBT = BigInt("219")
		const boolcYvqHXf = await AntiBaseProtocolBxB7Dm9.approve.call(addressuYONFrH, uintEXRcdf, {from: accounts[5]});
		const boolDuJbFts = await AntiBaseProtocolBxB7Dm9.transferFrom.call(addressMr37VgX, addressd6agDE, uintt9EQH3J, {from: accounts[0]});
		const uint256HktRLU = await AntiBaseProtocolBxB7Dm9.findRewardFee.call(uintEZkWjBT, {from: accounts[4]});

		assert.equal(boolcYvqHXf, true)
		await expect(AntiBaseProtocolBxB7Dm9.transferFrom.call(addressMr37VgX, addressd6agDE, uintt9EQH3J, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBxB7Dm9 = await AntiBaseProtocol.new({from: accounts[5]});
		const addressPApIdXM = accounts[5]
		const uintlQGyFcx = BigInt("184")
		const uintr03imqr = BigInt("1315")
		const addressC7pti2L = "0x00000000000000000000000000000000000000-1"
		const uint2567GGWOe = await AntiBaseProtocolBxB7Dm9.balanceOf.call(addressPApIdXM, {from: accounts[0]});
		const uint2564qkpcu = await AntiBaseProtocolBxB7Dm9.findBurnFee.call(uintlQGyFcx, {from: accounts[1]});
		const booltIL8pB9 = await AntiBaseProtocolBxB7Dm9.transfer.call(addressC7pti2L, uintr03imqr, {from: accounts[4]});

		assert.equal(uint2564qkpcu, BigInt("30"))
		assert.equal(uint2567GGWOe, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolBxB7Dm9.transfer.call(addressC7pti2L, uintr03imqr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBxB7Dm9 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintiATohNY = BigInt("166")
		const uint2564qkpcu = await AntiBaseProtocolBxB7Dm9.findBurnFee.call(uintiATohNY, {from: accounts[1]});
		await AntiBaseProtocolBxB7Dm9.renounceOwnership.call({from: accounts[5]});

		assert.equal(uint2564qkpcu, BigInt("30"))
		await expect(AntiBaseProtocolBxB7Dm9.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolCPb2Yz = await AntiBaseProtocol.new({from: accounts[2]});
		const addressO0mkt4z = accounts[3]
		const addressgUVb1C5 = accounts[5]
		const addressbxYVkun = accounts[5]
		const uint256FEX4oL8 = await AntiBaseProtocolCPb2Yz.allowance.call(addressgUVb1C5, addressO0mkt4z, {from: accounts[0]});
		await AntiBaseProtocolCPb2Yz.renounceOwnership.call({from: accounts[2]});
		const stringpqqT0Q = await AntiBaseProtocolCPb2Yz.name.call({from: accounts[0]});
		const addressfL1mTIg = await AntiBaseProtocolCPb2Yz.transferOwnership.call(addressbxYVkun, {from: accounts[2]});

		assert.equal(uint256FEX4oL8, BigInt("0"))
		await expect(AntiBaseProtocolCPb2Yz.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBxB7Dm9 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintqk4zuNy = BigInt("430")
		const addressWMRMmvQ = accounts[5]
		const uintv46eiEe = BigInt("179")
		const addressz5JXXTw = await AntiBaseProtocolBxB7Dm9.burnFrom.call(addressWMRMmvQ, uintqk4zuNy, {from: accounts[2]});
		const uint2564qkpcu = await AntiBaseProtocolBxB7Dm9.findBurnFee.call(uintv46eiEe, {from: accounts[1]});

		await expect(AntiBaseProtocolBxB7Dm9.burnFrom.call(addressWMRMmvQ, uintqk4zuNy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBxB7Dm9 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintROa2jGp = BigInt("160")
		const addressGJJJuW = accounts[2]
		const addressC4N732a = accounts[5]
		const uintiEAW7q9 = BigInt("210")
		const addressIPvfeWH = accounts[1]
		const boolu6Kdac0 = await AntiBaseProtocolBxB7Dm9.transferFrom.call(addressC4N732a, addressGJJJuW, uintROa2jGp, {from: accounts[4]});
		const uint2564qkpcu = await AntiBaseProtocolBxB7Dm9.findBurnFee.call(uintiEAW7q9, {from: accounts[1]});
		const uint256WfweUxY = await AntiBaseProtocolBxB7Dm9.balanceOf.call(addressIPvfeWH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(AntiBaseProtocolBxB7Dm9.transferFrom.call(addressC4N732a, addressGJJJuW, uintROa2jGp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBxB7Dm9 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintD5oZ7K2 = BigInt("0")
		const uint2564qkpcu = await AntiBaseProtocolBxB7Dm9.findBurnFee.call(uintD5oZ7K2, {from: accounts[1]});
		await AntiBaseProtocolBxB7Dm9.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint2564qkpcu, BigInt("0"))
		await expect(AntiBaseProtocolBxB7Dm9.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})