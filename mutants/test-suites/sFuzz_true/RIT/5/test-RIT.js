const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITdOnJHdJ = await RIT.new({from: accounts[4]});
		const uintn3qVlDT = BigInt("540")
		const uintklLbwAo = BigInt("279")
		const addressFDgpAAm = accounts[0]
//		const uint256nv2eFvn = await RITdOnJHdJ._burn.call(uintn3qVlDT, {from: accounts[4]});
//		const boolkRx96d4 = await RITdOnJHdJ.increaseAllowance.call(addressFDgpAAm, uintklLbwAo, {from: accounts[5]});

		await expect(RITdOnJHdJ._burn.call(uintn3qVlDT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITEj0zZhT = await RIT.new({from: accounts[4]});
		const uintfQMXjuU = BigInt("1561")
		const addressrbQkDrJ = accounts[1]
		const uintE4PpHWZ = BigInt("1346")
		const addressmnavDb = accounts[2]
		const uintOqlEK6i = BigInt("1749")
		const uint256ZB6TEbE = await RITEj0zZhT.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolmZSdSnf = await RITEj0zZhT.transfer.call(addressrbQkDrJ, uintfQMXjuU, {from: accounts[3]});
//		const boolCGpXepm = await RITEj0zZhT.approve.call(addressmnavDb, uintE4PpHWZ, {from: accounts[1]});
//		const uint256MFcrUQE = await RITEj0zZhT._burn.call(uintOqlEK6i, {from: accounts[0]});

		assert.equal(uint256ZB6TEbE, BigInt("500000000000000000000000000"))
		await expect(RITEj0zZhT.transfer.call(addressrbQkDrJ, uintfQMXjuU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITyjJRY0h = await RIT.new({from: accounts[4]});
		const uintdjkLhl = BigInt("143")
		const addresskNv1wlx = accounts[5]
		const addressTLUJ3AI = accounts[3]
		const addressWQ0iktC = accounts[1]
		const uintGIzTOeq = BigInt("1815")
		const addressAYeqVu = accounts[2]
		const addressJ3gzivh = accounts[3]
		const addressdHPggKP = accounts[3]
		const addressj7vOuSb = "0x0000000000000000000000000000000000000001"
		const stringgXPUKC1 = await RITyjJRY0h.name.call({from: accounts[1]});
		const boolWCCY9w = await RITyjJRY0h.approve.call(addresskNv1wlx, uintdjkLhl, {from: accounts[1]});
		const uint256NTmctaa = await RITyjJRY0h.allowance.call(addressWQ0iktC, addressTLUJ3AI, {from: accounts[3]});
		const boolZOtrke9 = await RITyjJRY0h.increaseAllowance.call(addressAYeqVu, uintGIzTOeq, {from: accounts[0]});
		const uint256IJUpHT7 = await RITyjJRY0h.allowance.call(addressdHPggKP, addressJ3gzivh, {from: accounts[1]});
		const uint256ztxhBRI = await RITyjJRY0h.balanceOf.call(addressj7vOuSb, {from: accounts[2]});

		assert.equal(boolWCCY9w, true)
		assert.equal(boolZOtrke9, true)
		assert.equal(stringgXPUKC1, "Real Estate Investment Token")
		assert.equal(uint256IJUpHT7, BigInt("0"))
		assert.equal(uint256NTmctaa, BigInt("0"))
		assert.equal(uint256ztxhBRI, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITw6GH13B = await RIT.new({from: accounts[2]});
		const addressur6KFbo = accounts[0]
		const addresssDks5Ah = accounts[0]
		const stringhveTHJm = await RITw6GH13B.symbol.call({from: accounts[1]});
		const uint256RVXw9xb = await RITw6GH13B.totalSupply.call({from: accounts[4]});
		const stringeLLzQ8 = await RITw6GH13B.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256fRTktlg = await RITw6GH13B.allowance.call(addresssDks5Ah, addressur6KFbo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringeLLzQ8, "RIT 2.0")
		assert.equal(stringhveTHJm, "RIT 2.0")
		assert.equal(uint256RVXw9xb, BigInt("500000000000000000000000000"))
		assert.equal(uint256fRTktlg, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITwcGfaK = await RIT.new({from: accounts[2]});
		const uintYncSUIL = BigInt("1828")
		const addressSF3ITO = accounts[4]
		const uintnLYif7y = BigInt("898")
		const addresswdlmGii = accounts[1]
		const uintlLoNkAt = BigInt("1918")
		const addressEIF3hDb = accounts[3]
		const stringOKV9Oi7 = await RITwcGfaK.symbol.call({from: accounts[3]});
		const boolaRLIwz6 = await RITwcGfaK.increaseAllowance.call(addressSF3ITO, uintYncSUIL, {from: accounts[0]});
		const uint8QiF1mUz = await RITwcGfaK.decimals.call({from: accounts[4]});
//		const boolYEtR2EQ = await RITwcGfaK.transfer.call(addresswdlmGii, uintnLYif7y, {from: accounts[0]});
//		const boolG1kVmyd = await RITwcGfaK.approve.call(addressEIF3hDb, uintlLoNkAt, {from: accounts[1]});

		assert.equal(boolaRLIwz6, true)
		assert.equal(stringOKV9Oi7, "RIT 2.0")
		assert.equal(uint8QiF1mUz, BigInt("18"))
		await expect(RITwcGfaK.transfer.call(addresswdlmGii, uintnLYif7y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITdOnJHdJ = await RIT.new({from: accounts[4]});
		const addresspxXkus = accounts[5]
		const addressuD0Zs2A = accounts[1]
		const uintwHA4fd = BigInt("258")
		const addressvHnRarf = accounts[0]
		const uintKcKZFTC = BigInt("1263")
		const addressGCxUKeZ = accounts[3]
		const address2CCsrv = accounts[3]
		const uint256V8ImVSt = await RITdOnJHdJ.balanceOf.call(addresspxXkus, {from: accounts[5]});
		const uint256ZClzVwK = await RITdOnJHdJ.balanceOf.call(addressuD0Zs2A, {from: accounts[2]});
		const boolkRx96d4 = await RITdOnJHdJ.increaseAllowance.call(addressvHnRarf, uintwHA4fd, {from: accounts[5]});
//		const boolQvz76pT = await RITdOnJHdJ.transferFrom.call(address2CCsrv, addressGCxUKeZ, uintKcKZFTC, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolkRx96d4, true)
		assert.equal(uint256V8ImVSt, BigInt("0"))
		assert.equal(uint256ZClzVwK, BigInt("0"))
		await expect(RITdOnJHdJ.transferFrom.call(address2CCsrv, addressGCxUKeZ, uintKcKZFTC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITdOnJHdJ = await RIT.new({from: accounts[4]});
		const uintb3TKGHz = BigInt("1124")
		const addressicdA2xZ = accounts[2]
		const uintUeYHH87 = BigInt("539")
//		const booldheAhIS = await RITdOnJHdJ.decreaseAllowance.call(addressicdA2xZ, uintb3TKGHz, {from: accounts[2]});
//		const uint256nv2eFvn = await RITdOnJHdJ._burn.call(uintUeYHH87, {from: accounts[4]});
//		const uint256PWAMpxB = await RITdOnJHdJ.totalSupply.call({from: accounts[4]});

		await expect(RITdOnJHdJ.decreaseAllowance.call(addressicdA2xZ, uintb3TKGHz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITeDPFNi = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressfVZk2KV = accounts[1]
		const addressDZ50Vcd = accounts[1]
		const addressA8sx2jo = "0x0000000000000000000000000000000000000001"
		const uint256nmTgxWZ = await RITeDPFNi.balanceOf.call(addressfVZk2KV, {from: accounts[0]});
		const uint8JDzwRRg = await RITeDPFNi.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Wf65tX5 = await RITeDPFNi.allowance.call(addressA8sx2jo, addressDZ50Vcd, {from: accounts[5]});
	});
})