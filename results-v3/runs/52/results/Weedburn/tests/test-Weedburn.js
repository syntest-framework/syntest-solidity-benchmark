const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const WeedburnbAnqiu6 = await Weedburn.new({from: accounts[0]});
		const uintagvCWdS = BigInt("304")
		const addressLZHqKC = "0x0000000000000000000000000000000000000001"
		const uinta3tp0no = BigInt("967")
		const addressKFY6fpr = accounts[3]
		const uintxQWI0O8 = BigInt("1979")
		const addressC6GHtQS = "0x0000000000000000000000000000000000000001"
		const boolEoUp8a2 = await WeedburnbAnqiu6.approve.call(addressLZHqKC, uintagvCWdS, {from: accounts[5]});
		const boolDQULZsm = await WeedburnbAnqiu6.increaseAllowance.call(addressKFY6fpr, uinta3tp0no, {from: accounts[1]});
		const boolTZOmTsA = await WeedburnbAnqiu6.increaseAllowance.call(addressC6GHtQS, uintxQWI0O8, {from: accounts[2]});

		assert.equal(boolDQULZsm, true)
		assert.equal(boolEoUp8a2, true)
		assert.equal(boolTZOmTsA, true)
	});

	it('test for Weedburn', async () => {
		const WeedburnA1k3DDx = await Weedburn.new({from: accounts[1]});
		const addressjuZALDd = accounts[5]
		const addressbxP2dwi = accounts[4]
		const addressUOhYe8j = accounts[3]
		const stringzMumt3 = await WeedburnA1k3DDx.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8RR93Hw = await WeedburnA1k3DDx.decimals.call({from: accounts[3]});
		const uint256dpEQKui = await WeedburnA1k3DDx.balanceOf.call(addressjuZALDd, {from: accounts[3]});
		const uint256YBwqAO = await WeedburnA1k3DDx.allowance.call(addressUOhYe8j, addressbxP2dwi, {from: accounts[1]});

		assert.equal(stringzMumt3, "Weedburn")
		assert.equal(uint256YBwqAO, BigInt("0"))
		assert.equal(uint256dpEQKui, BigInt("0"))
		assert.equal(uint8RR93Hw, BigInt("18"))
	});

	it('test for Weedburn', async () => {
		const stringTFVer4 = "MGNEfdPcGVTx2OXMir"
		const stringtS4OZO7 = "cVLyDjwnsgL2ICPBPjv87F12QPjaoAmLwifQgWSRliMDR1LdE8b3jF5GxIIPQpHl6My"
		const uintgSaEW2n = BigInt("163")
		const WeedburnYeanRKu = await Weedburn.new(stringTFVer4, stringtS4OZO7, uintgSaEW2n, {from: accounts[1]});
		const addresso09OygB = accounts[2]
		const addresspuHTyNK = accounts[4]
		const uintYkRMVP = BigInt("1996")
		const addresss5LrcX = accounts[4]
		const uint256shgVRaG = await WeedburnYeanRKu.totalSupply.call({from: accounts[2]});
		const uint256wz8IovL = await WeedburnYeanRKu.allowance.call(addresspuHTyNK, addresso09OygB, {from: accounts[3]});
		const boolRranqoO = await WeedburnYeanRKu.approve.call(addresss5LrcX, uintYkRMVP, {from: accounts[3]});
	});

	it('test for Weedburn', async () => {
		const WeedburnjNGESyI = await Weedburn.new({from: accounts[0]});
		const addresszgNSRgP = accounts[2]
		const addressbCktLfw = accounts[1]
		const addressBO2SCf3 = accounts[2]
		const addressP0amCkS = accounts[1]
		await WeedburnjNGESyI.disableLimitMode.call({from: accounts[1]});
		const uint256Lph7Ii = await WeedburnjNGESyI.allowance.call(addressbCktLfw, addresszgNSRgP, {from: accounts[4]});
		const uint256b45eFwU = await WeedburnjNGESyI.balanceOf.call(addressBO2SCf3, {from: accounts[5]});
		const uint256HnUdh3i = await WeedburnjNGESyI.balanceOf.call(addressP0amCkS, {from: accounts[3]});
		const stringJfjhC15 = await WeedburnjNGESyI.name.call({from: accounts[1]});

		await expect(WeedburnjNGESyI.disableLimitMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnGvY50bg = await Weedburn.new({from: accounts[3]});
		const addressQzEsyXI = accounts[5]
		const uintuXIHP8w = BigInt("933")
		const addressWOXshwc = accounts[2]
		const uintYEqJuu2 = BigInt("2015")
		const addressz0tVQhZ = accounts[5]
		const uintQpy8Ak = BigInt("1285")
		const addressYyHzeVk = accounts[3]
		const uint256tHdGCO7 = await WeedburnGvY50bg.balanceOf.call(addressQzEsyXI, {from: accounts[2]});
		const booljt7ttpm = await WeedburnGvY50bg.decreaseAllowance.call(addressWOXshwc, uintuXIHP8w, {from: "0x0000000000000000000000000000000000000001"});
		const boolTkjvrpO = await WeedburnGvY50bg.approve.call(addressz0tVQhZ, uintYEqJuu2, {from: accounts[2]});
		const boolrFRMkE2 = await WeedburnGvY50bg.decreaseAllowance.call(addressYyHzeVk, uintQpy8Ak, {from: accounts[0]});

		assert.equal(uint256tHdGCO7, BigInt("0"))
		await expect(WeedburnGvY50bg.decreaseAllowance.call(addressWOXshwc, uintuXIHP8w, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnZLT8JlK = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uinttwdc0Ky = BigInt("14")
		const uint256oW5B3yv = await WeedburnZLT8JlK.burn.call(uinttwdc0Ky, {from: accounts[0]});
		await WeedburnZLT8JlK.disableLimitMode.call({from: accounts[3]});
		await WeedburnZLT8JlK.disableDevMode.call({from: accounts[0]});
	});

	it('test for Weedburn', async () => {
		const WeedburnwgMdlnG = await Weedburn.new({from: accounts[2]});
		const uintqEGz7N = BigInt("1942")
		const addressJQ8PNDg = accounts[2]
		const uintGSq1mA1 = BigInt("643")
		const addressPZCS6GR = accounts[0]
		const boolu0VDQL0 = await WeedburnwgMdlnG.transfer.call(addressJQ8PNDg, uintqEGz7N, {from: accounts[1]});
		const boolsNk3hBK = await WeedburnwgMdlnG.approve.call(addressPZCS6GR, uintGSq1mA1, {from: accounts[3]});

		await expect(WeedburnwgMdlnG.transfer.call(addressJQ8PNDg, uintqEGz7N, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnYmKnJkP = await Weedburn.new({from: accounts[1]});
		const uintc2CP2ZD = BigInt("223")
		const addresshWVhx4B = accounts[1]
		const uintXKdu7t = BigInt("1906")
		const addressVfzU0jE = accounts[3]
		const addresswy5mRsz = accounts[6]
		const uintLHyslHa = BigInt("794")
		const address5LBN2Q = accounts[2]
		const uint8aVSGiNF = await WeedburnYmKnJkP.decimals.call({from: accounts[0]});
		await WeedburnYmKnJkP.enableDevMode.call({from: accounts[2]});
		const booltqcf5w3 = await WeedburnYmKnJkP.transfer.call(addresshWVhx4B, uintc2CP2ZD, {from: accounts[4]});
		const boole93dpv = await WeedburnYmKnJkP.transfer.call(addressVfzU0jE, uintXKdu7t, {from: accounts[1]});
		const uint256WcQsGS9 = await WeedburnYmKnJkP.balanceOf.call(addresswy5mRsz, {from: accounts[4]});
		const uint256clFINcK = await WeedburnYmKnJkP.totalSupply.call({from: accounts[0]});
		const boolt5fH6m3 = await WeedburnYmKnJkP.approve.call(address5LBN2Q, uintLHyslHa, {from: accounts[4]});
		await WeedburnYmKnJkP.enableDevMode.call({from: accounts[0]});
		const stringRRAeFAv = await WeedburnYmKnJkP.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8aVSGiNF, BigInt("18"))
		await expect(WeedburnYmKnJkP.enableDevMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnGvY50bg = await Weedburn.new({from: accounts[3]});
		const uinthdNVkdy = BigInt("1033")
		const addressJYqMoRv = accounts[2]
		const addressR9VDnOm = accounts[5]
		const uintQk747P = BigInt("980")
		const addressiJQKVoy = accounts[2]
		const uintyf9Y0gm = BigInt("2015")
		const addressHHvFPuR = accounts[5]
		const uintrI0Ybo = BigInt("1285")
		const addressCqIe1vG = accounts[3]
		const addressrIkClEu = await WeedburnGvY50bg.burnFrom.call(addressJYqMoRv, uinthdNVkdy, {from: accounts[4]});
		const uint256tHdGCO7 = await WeedburnGvY50bg.balanceOf.call(addressR9VDnOm, {from: accounts[2]});
		const booljt7ttpm = await WeedburnGvY50bg.decreaseAllowance.call(addressiJQKVoy, uintQk747P, {from: "0x0000000000000000000000000000000000000001"});
		const uint256r96k3FL = await WeedburnGvY50bg.totalSupply.call({from: accounts[4]});
		const boolTkjvrpO = await WeedburnGvY50bg.approve.call(addressHHvFPuR, uintyf9Y0gm, {from: accounts[2]});
		const boolrFRMkE2 = await WeedburnGvY50bg.decreaseAllowance.call(addressCqIe1vG, uintrI0Ybo, {from: accounts[0]});

		await expect(WeedburnGvY50bg.burnFrom.call(addressJYqMoRv, uinthdNVkdy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnYmKnJkP = await Weedburn.new({from: accounts[1]});
		const uint7vhqBU = BigInt("223")
		const addressLTBv3ym = accounts[1]
		const addressxh7KLK3 = accounts[5]
		const uintBvuvHbL = BigInt("794")
		const addressHjtQNG = accounts[2]
		await WeedburnYmKnJkP.enableLimitMode.call({from: accounts[1]});
		const uint8aVSGiNF = await WeedburnYmKnJkP.decimals.call({from: accounts[0]});
		const booltqcf5w3 = await WeedburnYmKnJkP.transfer.call(addressLTBv3ym, uint7vhqBU, {from: accounts[4]});
		const uint256WcQsGS9 = await WeedburnYmKnJkP.balanceOf.call(addressxh7KLK3, {from: accounts[4]});
		const uint256clFINcK = await WeedburnYmKnJkP.totalSupply.call({from: accounts[0]});
		const boolt5fH6m3 = await WeedburnYmKnJkP.approve.call(addressHjtQNG, uintBvuvHbL, {from: accounts[4]});
		await WeedburnYmKnJkP.enableDevMode.call({from: accounts[0]});

		await expect(WeedburnYmKnJkP.enableLimitMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnYmKnJkP = await Weedburn.new({from: accounts[1]});
		const uintqgnkwax = BigInt("223")
		const addressv648e9E = accounts[1]
		const addressJj9N0IE = accounts[5]
		const uintmhfxBVc = BigInt("794")
		const addressrXwwGHI = accounts[2]
		const uintbwWaodM = BigInt("1006")
		const addressZerfuH = accounts[3]
		const stringNwVJhBx = await WeedburnYmKnJkP.name.call({from: accounts[4]});
		const booltqcf5w3 = await WeedburnYmKnJkP.transfer.call(addressv648e9E, uintqgnkwax, {from: accounts[4]});
		const uint256WcQsGS9 = await WeedburnYmKnJkP.balanceOf.call(addressJj9N0IE, {from: accounts[4]});
		const uint256clFINcK = await WeedburnYmKnJkP.totalSupply.call({from: accounts[0]});
		const boolt5fH6m3 = await WeedburnYmKnJkP.approve.call(addressrXwwGHI, uintmhfxBVc, {from: accounts[4]});
		const boolmhwb0ZM = await WeedburnYmKnJkP.transfer.call(addressZerfuH, uintbwWaodM, {from: accounts[0]});
		await WeedburnYmKnJkP.enableDevMode.call({from: accounts[0]});

		assert.equal(stringNwVJhBx, "t.me/burnweed1")
		await expect(WeedburnYmKnJkP.transfer.call(addressv648e9E, uintqgnkwax, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnYmKnJkP = await Weedburn.new({from: accounts[1]});
		const uintpu3wqEl = BigInt("105")
		const addresshUIunU1 = accounts[3]
		const addressvwgdEdG = "0x0000000000000000000000000000000000000001"
		const addressPy8zYkQ = accounts[5]
		const uintVd9T0Jl = BigInt("794")
		const addressfNzWTqv = accounts[2]
		const uint8aVSGiNF = await WeedburnYmKnJkP.decimals.call({from: accounts[0]});
		const boolKS8fQbP = await WeedburnYmKnJkP.transferFrom.call(addressvwgdEdG, addresshUIunU1, uintpu3wqEl, {from: accounts[3]});
		const uint256WcQsGS9 = await WeedburnYmKnJkP.balanceOf.call(addressPy8zYkQ, {from: accounts[4]});
		const uint256clFINcK = await WeedburnYmKnJkP.totalSupply.call({from: accounts[0]});
		const boolt5fH6m3 = await WeedburnYmKnJkP.approve.call(addressfNzWTqv, uintVd9T0Jl, {from: accounts[4]});
		await WeedburnYmKnJkP.enableDevMode.call({from: accounts[0]});

		assert.equal(uint8aVSGiNF, BigInt("18"))
		await expect(WeedburnYmKnJkP.transferFrom.call(addressvwgdEdG, addresshUIunU1, uintpu3wqEl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnGvY50bg = await Weedburn.new({from: accounts[3]});
		const addressffR0WkG = accounts[5]
		const uintFNBMvkI = BigInt("1285")
		const addresso8L1H1b = accounts[3]
		const uint256tHdGCO7 = await WeedburnGvY50bg.balanceOf.call(addressffR0WkG, {from: accounts[2]});
		const uint256r96k3FL = await WeedburnGvY50bg.totalSupply.call({from: accounts[4]});
		const boolrFRMkE2 = await WeedburnGvY50bg.decreaseAllowance.call(addresso8L1H1b, uintFNBMvkI, {from: accounts[0]});

		assert.equal(uint256r96k3FL, BigInt("100000000000000000000000"))
		assert.equal(uint256tHdGCO7, BigInt("0"))
		await expect(WeedburnGvY50bg.decreaseAllowance.call(addresso8L1H1b, uintFNBMvkI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnxuOv7XD = await Weedburn.new({from: accounts[4]});
		const uintb6hzWU = BigInt("447")
		const uintA5lnDgm = BigInt("1")
		const addresstCGIDbA = accounts[2]
		const uint256sRQH0hk = await WeedburnxuOv7XD.burn.call(uintb6hzWU, {from: accounts[2]});
		const stringhxMxau = await WeedburnxuOv7XD.name.call({from: accounts[1]});
		const addressyKxzBfe = await WeedburnxuOv7XD.burnFrom.call(addresstCGIDbA, uintA5lnDgm, {from: accounts[2]});
		await WeedburnxuOv7XD.disableDevMode.call({from: accounts[3]});

		await expect(WeedburnxuOv7XD.burn.call(uintb6hzWU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnwgMdlnG = await Weedburn.new({from: accounts[2]});
		const uintuf3K0i7 = BigInt("647")
		const addressJmWLMSp = accounts[0]
		await WeedburnwgMdlnG.disableDevMode.call({from: "0x0000000000000000000000000000000000000001"});
		const boolsNk3hBK = await WeedburnwgMdlnG.approve.call(addressJmWLMSp, uintuf3K0i7, {from: accounts[3]});

		await expect(WeedburnwgMdlnG.disableDevMode.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnwgMdlnG = await Weedburn.new({from: accounts[2]});
		const uintzDpy29b = BigInt("643")
		const addressehsqb0Q = accounts[0]
		const uintBRrm6JD = BigInt("1953")
		const addressGAQLLxq = accounts[3]
		const uintEjGOLmx = BigInt("76")
		const addressp8QXmgI = accounts[1]
		const addresse4cXJC = accounts[2]
		const boolsNk3hBK = await WeedburnwgMdlnG.approve.call(addressehsqb0Q, uintzDpy29b, {from: accounts[3]});
		const uint8B8a8Oyo = await WeedburnwgMdlnG.decimals.call({from: accounts[0]});
		const boolfEpkWzp = await WeedburnwgMdlnG.increaseAllowance.call(addressGAQLLxq, uintBRrm6JD, {from: accounts[4]});
		const boolrW7rvYC = await WeedburnwgMdlnG.transferFrom.call(addresse4cXJC, addressp8QXmgI, uintEjGOLmx, {from: accounts[2]});

		assert.equal(boolfEpkWzp, true)
		assert.equal(boolsNk3hBK, true)
		assert.equal(uint8B8a8Oyo, BigInt("18"))
		await expect(WeedburnwgMdlnG.transferFrom.call(addresse4cXJC, addressp8QXmgI, uintEjGOLmx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnxuOv7XD = await Weedburn.new({from: accounts[4]});
		const uintdYSsBQY = BigInt("1297")
		const addressF95H0wA = accounts[1]
		const uintKUecOVx = BigInt("447")
		const uintJAVSL7x = BigInt("1355")
		const addressEU6ayxv = accounts[1]
		const uintylPoF8g = BigInt("1")
		const addressYrgy5FV = accounts[2]
		const booljauGwyI = await WeedburnxuOv7XD.transfer.call(addressF95H0wA, uintdYSsBQY, {from: accounts[4]});
		const uint256sRQH0hk = await WeedburnxuOv7XD.burn.call(uintKUecOVx, {from: accounts[2]});
		const stringhxMxau = await WeedburnxuOv7XD.name.call({from: accounts[1]});
		const boolgwReqF = await WeedburnxuOv7XD.transfer.call(addressEU6ayxv, uintJAVSL7x, {from: accounts[5]});
		const addressyKxzBfe = await WeedburnxuOv7XD.burnFrom.call(addressYrgy5FV, uintylPoF8g, {from: accounts[2]});
		await WeedburnxuOv7XD.disableDevMode.call({from: accounts[3]});

		assert.equal(booljauGwyI, true)
		await expect(WeedburnxuOv7XD.burn.call(uintKUecOVx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnwgMdlnG = await Weedburn.new({from: accounts[2]});
		const uintQTE5nkd = BigInt("1959")
		const addressuyf2Saw = accounts[5]
		const uintsFSOMa = BigInt("1907")
		const addressqpi9rJu = accounts[6]
		const uint256KBgKkl = await WeedburnwgMdlnG.burn.call(uintQTE5nkd, {from: accounts[2]});
		const uint256uYMF5en = await WeedburnwgMdlnG.balanceOf.call(addressuyf2Saw, {from: accounts[1]});
		const boolMBtYy1X = await WeedburnwgMdlnG.transfer.call(addressqpi9rJu, uintsFSOMa, {from: accounts[2]});

		assert.equal(boolMBtYy1X, true)
		assert.equal(uint256uYMF5en, BigInt("0"))
	});
})