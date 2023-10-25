const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITLg36X9c = await RIT.new({from: accounts[1]});
		const uintgDO30cU = BigInt("1588")
		const addressQXDcQby = accounts[3]
		const uintMgGYjeu = BigInt("955")
		const addressNqiqnbN = accounts[1]
		const addressy0xXGwN = accounts[0]
		const uintBd2qdj = BigInt("705")
		const addresshKxw4p1 = accounts[2]
		const addressYyLurn = accounts[0]
		const addressGc6mvY = accounts[3]
		const booldusZtHT = await RITLg36X9c.transfer.call(addressQXDcQby, uintgDO30cU, {from: accounts[3]});
		const boolMeTkawv = await RITLg36X9c.transferFrom.call(addressy0xXGwN, addressNqiqnbN, uintMgGYjeu, {from: accounts[2]});
		const boolYuOCisp = await RITLg36X9c.transfer.call(addresshKxw4p1, uintBd2qdj, {from: accounts[5]});
		const uint256p1uKxRU = await RITLg36X9c.allowance.call(addressGc6mvY, addressYyLurn, {from: accounts[4]});

		await expect(RITLg36X9c.transfer.call(addressQXDcQby, uintgDO30cU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITZoYzysC = await RIT.new({from: accounts[2]});
		const addresscifeFHi = accounts[1]
		const uintRGAr2j6 = BigInt("1382")
		const addressYGwwtS = accounts[0]
		const addressyezkPfI = accounts[3]
		const uintM3li7B1 = BigInt("1095")
		const addressZxQ7bIh = accounts[1]
		const addressLXnMZ1b = accounts[3]
		const addressTJLtTAe = accounts[4]
		const addressYxnmm8i = accounts[2]
		const uint256TAgvbQq = await RITZoYzysC.balanceOf.call(addresscifeFHi, {from: accounts[5]});
		const booltOMYAd = await RITZoYzysC.transferFrom.call(addressyezkPfI, addressYGwwtS, uintRGAr2j6, {from: accounts[4]});
		const stringWUl8d25 = await RITZoYzysC.symbol.call({from: accounts[3]});
		const bool0P3q4g = await RITZoYzysC.transferFrom.call(addressLXnMZ1b, addressZxQ7bIh, uintM3li7B1, {from: accounts[1]});
		const uint256Xk0amTQ = await RITZoYzysC.allowance.call(addressYxnmm8i, addressTJLtTAe, {from: accounts[4]});

		assert.equal(uint256TAgvbQq, BigInt("0"))
		await expect(RITZoYzysC.transferFrom.call(addressyezkPfI, addressYGwwtS, uintRGAr2j6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITsEaPe6P = await RIT.new({from: accounts[1]});
		const uintJSUhgt9 = BigInt("1012")
		const addressH4OzauY = accounts[0]
		const uintdy8SgY8 = BigInt("554")
		const addressunS2BP5 = accounts[1]
		const uintUjG6Jox = BigInt("59")
		const addressrQqKkxV = accounts[2]
		const uintCTebezV = BigInt("1738")
		const addressXXi3KBH = accounts[2]
		const uintHqllSDl = BigInt("844")
		const addressAsPSXjs = accounts[2]
		const boolViQNDvu = await RITsEaPe6P.decreaseAllowance.call(addressH4OzauY, uintJSUhgt9, {from: accounts[1]});
		const boolxNEwEhg = await RITsEaPe6P.transfer.call(addressunS2BP5, uintdy8SgY8, {from: accounts[4]});
		const boolbW6YrYa = await RITsEaPe6P.decreaseAllowance.call(addressrQqKkxV, uintUjG6Jox, {from: accounts[1]});
		const booll67h7uz = await RITsEaPe6P.transfer.call(addressXXi3KBH, uintCTebezV, {from: accounts[4]});
		const stringCev5rV4 = await RITsEaPe6P.name.call({from: accounts[4]});
		const boolHEBhhh = await RITsEaPe6P.transfer.call(addressAsPSXjs, uintHqllSDl, {from: accounts[0]});

		await expect(RITsEaPe6P.decreaseAllowance.call(addressH4OzauY, uintJSUhgt9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITPaPdaA = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintC3b1Y2S = BigInt("1970")
		const addressmX4v1J = accounts[4]
		const uintR6kZvm8 = BigInt("767")
		const addressiEmKAnd = accounts[0]
		const uintqbqsU3e = BigInt("125")
		const addresslIMmlEa = "0x0000000000000000000000000000000000000001"
		const addressYv6pO5V = accounts[2]
		const uintbVUrzN1 = BigInt("245")
		const addressjUlhse = accounts[0]
		const boolkW8EGOM = await RITPaPdaA.decreaseAllowance.call(addressmX4v1J, uintC3b1Y2S, {from: accounts[0]});
		const boolLXF83pe = await RITPaPdaA.increaseAllowance.call(addressiEmKAnd, uintR6kZvm8, {from: accounts[1]});
		const boolMiX3fB2 = await RITPaPdaA.transferFrom.call(addressYv6pO5V, addresslIMmlEa, uintqbqsU3e, {from: accounts[3]});
		const boolvbFF3YJ = await RITPaPdaA.approve.call(addressjUlhse, uintbVUrzN1, {from: accounts[3]});
	});

	it('test for RIT', async () => {
		const RIT44MjNq = await RIT.new({from: accounts[3]});
		const uintDcL4Rl5 = BigInt("29")
		const addressRNlJcZN = accounts[4]
		const uintCjrxLJ1 = BigInt("586")
		const addressxCNlFNN = accounts[3]
		const uintrkjFHjv = BigInt("1288")
		const addressJnQxEPY = accounts[2]
		const uintclL4bxH = BigInt("281")
		const addressTOsRnp = accounts[0]
		const stringtEGCdxx = await RIT44MjNq.name.call({from: accounts[3]});
		const boolUbWBb4 = await RIT44MjNq.increaseAllowance.call(addressRNlJcZN, uintDcL4Rl5, {from: accounts[3]});
		const boolOgwEMTy = await RIT44MjNq.transfer.call(addressxCNlFNN, uintCjrxLJ1, {from: accounts[5]});
		const boolEBxP27a = await RIT44MjNq.transfer.call(addressJnQxEPY, uintrkjFHjv, {from: accounts[4]});
		const boolBkbIzS = await RIT44MjNq.transfer.call(addressTOsRnp, uintclL4bxH, {from: accounts[3]});
		const uint8bynEWF = await RIT44MjNq.decimals.call({from: accounts[4]});

		assert.equal(boolUbWBb4, true)
		assert.equal(stringtEGCdxx, "Real Estate Investment Token")
		await expect(RIT44MjNq.transfer.call(addressxCNlFNN, uintCjrxLJ1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITZQc3r8p = await RIT.new({from: accounts[1]});
		const uintBAu6fyc = BigInt("2032")
		const addressGi1Yq1l = accounts[2]
		const addressaKam7g2 = accounts[4]
		const addressz3ohpE = accounts[1]
		const addressYG3ZPC = accounts[1]
		const addressNVBtEwR = accounts[0]
		const uint8a8wXUbu = await RITZQc3r8p.decimals.call({from: accounts[4]});
		const boolkSRuUYN = await RITZQc3r8p.decreaseAllowance.call(addressGi1Yq1l, uintBAu6fyc, {from: accounts[2]});
		const stringog9mVW3 = await RITZQc3r8p.symbol.call({from: accounts[2]});
		const uint256u1HW7sh = await RITZQc3r8p.allowance.call(addressz3ohpE, addressaKam7g2, {from: accounts[0]});
		const uint2569oTgy2 = await RITZQc3r8p.allowance.call(addressNVBtEwR, addressYG3ZPC, {from: accounts[1]});
		const uint256k3UnC7J = await RITZQc3r8p.totalSupply.call({from: accounts[4]});

		assert.equal(uint8a8wXUbu, BigInt("18"))
		await expect(RITZQc3r8p.decreaseAllowance.call(addressGi1Yq1l, uintBAu6fyc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITZoYzysC = await RIT.new({from: accounts[2]});
		const addresscXNry0B = accounts[1]
		const uintiP2MKxz = BigInt("1391")
		const addressuCIKvj = accounts[0]
		const addressqdMti8J = accounts[3]
		const uintCmI7GPn = BigInt("1113")
		const uintuK2uKk0 = BigInt("1095")
		const addressYLZ59YL = accounts[1]
		const addressfLMIR7u = accounts[3]
		const uint256KICeaf = await RITZoYzysC.totalSupply.call({from: accounts[1]});
		const uint256TAgvbQq = await RITZoYzysC.balanceOf.call(addresscXNry0B, {from: accounts[5]});
		const booltOMYAd = await RITZoYzysC.transferFrom.call(addressqdMti8J, addressuCIKvj, uintiP2MKxz, {from: accounts[4]});
		const uint256trcSFXk = await RITZoYzysC._burn.call(uintCmI7GPn, {from: accounts[0]});
		const stringWUl8d25 = await RITZoYzysC.symbol.call({from: accounts[3]});
		const bool0P3q4g = await RITZoYzysC.transferFrom.call(addressfLMIR7u, addressYLZ59YL, uintuK2uKk0, {from: accounts[1]});

		assert.equal(uint256KICeaf, BigInt("500000000000000000000000000"))
		assert.equal(uint256TAgvbQq, BigInt("0"))
		await expect(RITZoYzysC.transferFrom.call(addressqdMti8J, addressuCIKvj, uintiP2MKxz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITZoYzysC = await RIT.new({from: accounts[2]});
		const addressXbUM4Ll = accounts[2]
		const addresshFwNhq2 = accounts[0]
		const addressBebdpdA = accounts[0]
		const uinttnapcR2 = BigInt("1382")
		const addressCoeWRcp = accounts[0]
		const addressGYYTAc = accounts[3]
		const uintuXa3YDF = BigInt("1095")
		const addressuxXewOU = accounts[1]
		const addresshzjI2W = accounts[3]
		const addressoDxjfjk = accounts[4]
		const address8KCbJW = accounts[2]
		const uint256TAgvbQq = await RITZoYzysC.balanceOf.call(addressXbUM4Ll, {from: accounts[5]});
		const uint256D9egazd = await RITZoYzysC.allowance.call(addressBebdpdA, addresshFwNhq2, {from: accounts[0]});
		const stringaMgFMTV = await RITZoYzysC.name.call({from: accounts[2]});
		const booltOMYAd = await RITZoYzysC.transferFrom.call(addressGYYTAc, addressCoeWRcp, uinttnapcR2, {from: accounts[4]});
		const stringWUl8d25 = await RITZoYzysC.symbol.call({from: accounts[3]});
		const bool0P3q4g = await RITZoYzysC.transferFrom.call(addresshzjI2W, addressuxXewOU, uintuXa3YDF, {from: accounts[1]});
		const uint256Xk0amTQ = await RITZoYzysC.allowance.call(address8KCbJW, addressoDxjfjk, {from: accounts[4]});

		assert.equal(stringaMgFMTV, "Real Estate Investment Token")
		assert.equal(uint256D9egazd, BigInt("0"))
		assert.equal(uint256TAgvbQq, BigInt("0"))
		await expect(RITZoYzysC.transferFrom.call(addressGYYTAc, addressCoeWRcp, uinttnapcR2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITZoYzysC = await RIT.new({from: accounts[2]});
		const addressr9WGha8 = accounts[1]
		const uintch6lp5W = BigInt("1440")
		const addressLPQFi6 = accounts[2]
		const addressd0flhCI = "0x0000000000000000000000000000000000000001"
		const addressWlQvM8d = accounts[2]
		const addressWFYcMvi = accounts[0]
		const uintNk2TiDH = BigInt("1382")
		const addressuSvCl8g = accounts[0]
		const addressc8JYR9v = accounts[3]
		const uintI5kulpt = BigInt("1095")
		const addressARdQ37k = accounts[1]
		const addresseJhd2RA = accounts[3]
		const addressdikk6bS = accounts[4]
		const addressO82w8u8 = accounts[2]
		const uint256TAgvbQq = await RITZoYzysC.balanceOf.call(addressr9WGha8, {from: accounts[5]});
		const boolGcwlE0d = await RITZoYzysC.approve.call(addressLPQFi6, uintch6lp5W, {from: accounts[5]});
		const uint256aWLgaPS = await RITZoYzysC.allowance.call(addressWlQvM8d, addressd0flhCI, {from: accounts[3]});
		const uint256K12Ptfu = await RITZoYzysC.balanceOf.call(addressWFYcMvi, {from: accounts[2]});
		const booltOMYAd = await RITZoYzysC.transferFrom.call(addressc8JYR9v, addressuSvCl8g, uintNk2TiDH, {from: accounts[4]});
		const stringWUl8d25 = await RITZoYzysC.symbol.call({from: accounts[3]});
		const uint8hVw0QDs = await RITZoYzysC.decimals.call({from: accounts[0]});
		const bool0P3q4g = await RITZoYzysC.transferFrom.call(addresseJhd2RA, addressARdQ37k, uintI5kulpt, {from: accounts[1]});
		const uint256Xk0amTQ = await RITZoYzysC.allowance.call(addressO82w8u8, addressdikk6bS, {from: accounts[4]});

		assert.equal(boolGcwlE0d, true)
		assert.equal(uint256K12Ptfu, BigInt("0"))
		assert.equal(uint256TAgvbQq, BigInt("0"))
		assert.equal(uint256aWLgaPS, BigInt("0"))
		await expect(RITZoYzysC.transferFrom.call(addressc8JYR9v, addressuSvCl8g, uintNk2TiDH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITGPSklfc = await RIT.new({from: accounts[2]});
		const uintzVtoXnr = BigInt("663")
		const addressVIpuFy6 = "0x0000000000000000000000000000000000000001"
		const addressfs8oRfc = "0x0000000000000000000000000000000000000001"
		const stringx24HXwH = await RITGPSklfc.symbol.call({from: accounts[0]});
		const boolOOYblWr = await RITGPSklfc.approve.call(addressVIpuFy6, uintzVtoXnr, {from: accounts[2]});
		const uint256MPS1BvI = await RITGPSklfc.balanceOf.call(addressfs8oRfc, {from: accounts[3]});

		assert.equal(boolOOYblWr, true)
		assert.equal(stringx24HXwH, "RIT 2.0")
		assert.equal(uint256MPS1BvI, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITunWUeAj = await RIT.new({from: accounts[5]});
		const uintw3jQ94w = BigInt("1742")
		const uintW8bQgcC = BigInt("1020")
		const addresss5DPQbi = accounts[5]
		const uintAjhttU8 = BigInt("225")
		const addressUbS5C6j = accounts[3]
		const uintcbPrCQB = BigInt("31")
		const addressvgEGll = accounts[4]
		const uint256ub1OpJl = await RITunWUeAj._burn.call(uintw3jQ94w, {from: accounts[2]});
		const boolxoz0id = await RITunWUeAj.transfer.call(addresss5DPQbi, uintW8bQgcC, {from: accounts[3]});
		const boolQwkEjrN = await RITunWUeAj.decreaseAllowance.call(addressUbS5C6j, uintAjhttU8, {from: accounts[3]});
		const uint8jihIiym = await RITunWUeAj.decimals.call({from: accounts[3]});
		const boolaWDrsLk = await RITunWUeAj.increaseAllowance.call(addressvgEGll, uintcbPrCQB, {from: accounts[4]});

		await expect(RITunWUeAj._burn.call(uintw3jQ94w, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITZ8tqGiZ = await RIT.new({from: accounts[5]});
		const uintMSyLnl1 = BigInt("1456")
		const addressleRoI8 = "0x0000000000000000000000000000000000000000"
		const addressH0w68l = accounts[2]
		const uinttkMc9Vn = BigInt("449")
		const addressUPUzBV8 = accounts[1]
		const boolk6CqfY6 = await RITZ8tqGiZ.transfer.call(addressleRoI8, uintMSyLnl1, {from: "0x0000000000000000000000000000000000000001"});
		const uint256kgkVY9J = await RITZ8tqGiZ.balanceOf.call(addressH0w68l, {from: accounts[4]});
		const uint8wGEthPV = await RITZ8tqGiZ.decimals.call({from: accounts[0]});
		const boolYx5IRlC = await RITZ8tqGiZ.approve.call(addressUPUzBV8, uinttkMc9Vn, {from: accounts[0]});

		await expect(RITZ8tqGiZ.transfer.call(addressleRoI8, uintMSyLnl1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})