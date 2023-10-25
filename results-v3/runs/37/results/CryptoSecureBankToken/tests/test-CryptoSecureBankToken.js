const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenFMXlOb = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressx16z4jm = accounts[1]
		const addressTXfsQk = accounts[4]
		const addressULlnVca = accounts[1]
		const addressWt8K8a = accounts[3]
		const addresssdEAoKY = "0x0000000000000000000000000000000000000001"
		const uintcg3QBlI = BigInt("1670")
		const addressFM4bNPL = accounts[2]
		const addressqiVuu23 = accounts[0]
		const uintH3t4Lnl = BigInt("1001")
		const addressaCiTp8M = accounts[5]
		const addresspyQFCq1 = accounts[2]
		const addressG8zy4v = accounts[0]
		const uintPqtOsis = await CryptoSecureBankTokenFMXlOb.allowance.call(addressTXfsQk, addressx16z4jm, {from: accounts[2]});
		const uintrIGoimg = await CryptoSecureBankTokenFMXlOb.balanceOf.call(addressULlnVca, {from: accounts[0]});
		const uintbUQcyvn = await CryptoSecureBankTokenFMXlOb.allowance.call(addresssdEAoKY, addressWt8K8a, {from: accounts[1]});
		const boolax6Oodn = await CryptoSecureBankTokenFMXlOb.transferFrom.call(addressqiVuu23, addressFM4bNPL, uintcg3QBlI, {from: accounts[5]});
		const boollH6NVuG = await CryptoSecureBankTokenFMXlOb.transferFrom.call(addresspyQFCq1, addressaCiTp8M, uintH3t4Lnl, {from: accounts[4]});
		const uintYbQJt8 = await CryptoSecureBankTokenFMXlOb.balanceOf.call(addressG8zy4v, {from: accounts[2]});

		assert.equal(uintPqtOsis, BigInt("0"))
		assert.equal(uintbUQcyvn, BigInt("0"))
		assert.equal(uintrIGoimg, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenFMXlOb.transferFrom.call(addressqiVuu23, addressFM4bNPL, uintcg3QBlI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenwxT65O = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressb3pCofJ = accounts[4]
		const addressMeq17Gc = accounts[3]
		const uintMjNkJRw = BigInt("1401")
		const addressPkMeJ1E = accounts[4]
		const boolJYfPIOP = await CryptoSecureBankTokenwxT65O.deprecate.call(addressb3pCofJ, {from: accounts[2]});
		const addressJDO3IO5 = await CryptoSecureBankTokenwxT65O.removeBlackList.call(addressMeq17Gc, {from: accounts[3]});
		const addressdUyfHzc = await CryptoSecureBankTokenwxT65O.getOwner.call({from: accounts[2]});
		const uintbTioCvl = await CryptoSecureBankTokenwxT65O.totalSupply.call({from: accounts[1]});
		const bool88A6Gt = await CryptoSecureBankTokenwxT65O.transfer.call(addressPkMeJ1E, uintMjNkJRw, {from: accounts[0]});

		await expect(CryptoSecureBankTokenwxT65O.deprecate.call(addressb3pCofJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenbr30ZBt = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintyklSqf = BigInt("184")
		const addressZ4KF2gi = accounts[1]
		const addressghHHZGF = accounts[2]
		const addressp5VmYXS = accounts[5]
		const uintBlrE1DA = BigInt("784")
		const addressxPnDbG = "0x0000000000000000000000000000000000000001"
		const addressXeClEkI = "0x0000000000000000000000000000000000000001"
		const boolTIeyIDz = await CryptoSecureBankTokenbr30ZBt.approve.call(addressZ4KF2gi, uintyklSqf, {from: accounts[2]});
		const uintwy6ot5e = await CryptoSecureBankTokenbr30ZBt.allowance.call(addressp5VmYXS, addressghHHZGF, {from: accounts[0]});
		const booloJH1WPf = await CryptoSecureBankTokenbr30ZBt.transfer.call(addressxPnDbG, uintBlrE1DA, {from: accounts[0]});
		const addressh0u4WnF = await CryptoSecureBankTokenbr30ZBt.setOwner2.call(addressXeClEkI, {from: accounts[1]});
		const uintlN0o9d4 = await CryptoSecureBankTokenbr30ZBt.totalSupply.call({from: accounts[2]});

		assert.equal(boolTIeyIDz, true)
		assert.equal(uintwy6ot5e, BigInt("0"))
		await expect(CryptoSecureBankTokenbr30ZBt.transfer.call(addressxPnDbG, uintBlrE1DA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenKUaKJNq = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressL1SmBHW = accounts[5]
		const uintdw1H2Jl = await CryptoSecureBankTokenKUaKJNq.totalSupply.call({from: accounts[5]});
		const uintJ1LZwHM = await CryptoSecureBankTokenKUaKJNq.balanceOf.call(addressL1SmBHW, {from: accounts[2]});

		assert.equal(uintJ1LZwHM, BigInt("0"))
		assert.equal(uintdw1H2Jl, BigInt("100000000000000000000000000"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenhe8jlPO = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintA57uAlB = BigInt("1462")
		const addressMat39Fo = accounts[4]
		const uintSOiBcQS = BigInt("1462")
		const addressVlIBkDM = accounts[4]
		const boolZwPHWcU = await CryptoSecureBankTokenhe8jlPO.approve.call(addressMat39Fo, uintA57uAlB, {from: accounts[3]});
		await CryptoSecureBankTokenhe8jlPO.whenNotPaused.call({from: accounts[4]});
		await CryptoSecureBankTokenhe8jlPO.unpause.call({from: accounts[2]});
		const uintvcN6pZg = await CryptoSecureBankTokenhe8jlPO.onlyPayloadSize.call(uintSOiBcQS, {from: accounts[3]});
		await CryptoSecureBankTokenhe8jlPO.whenNotPaused.call({from: accounts[0]});
		const uintZMquWY1 = await CryptoSecureBankTokenhe8jlPO.balanceOf.call(addressVlIBkDM, {from: accounts[3]});

		assert.equal(boolZwPHWcU, true)
		await expect(CryptoSecureBankTokenhe8jlPO.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenBmheBqu = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressFdKbS8u = accounts[0]
		const addressT8iVUlz = accounts[0]
		const addresskO9ows = accounts[1]
		const addressdDbtTTu = accounts[1]
		const addressbeJAw00 = accounts[1]
		const addressZNVFCSV = accounts[3]
		const addressXFUqxe = accounts[0]
		const boolx7p8z7j = await CryptoSecureBankTokenBmheBqu.getBlackListStatus.call(addressFdKbS8u, {from: accounts[3]});
		const addressfUtGScV = await CryptoSecureBankTokenBmheBqu.transferOwnership.call(addressT8iVUlz, {from: accounts[3]});
		const uint2MGJ49 = await CryptoSecureBankTokenBmheBqu.allowance.call(addressdDbtTTu, addresskO9ows, {from: accounts[1]});
		const uintPpuFt5q = await CryptoSecureBankTokenBmheBqu.allowance.call(addressZNVFCSV, addressbeJAw00, {from: "0x0000000000000000000000000000000000000001"});
		const uintRhHLgAK = await CryptoSecureBankTokenBmheBqu.balanceOf.call(addressXFUqxe, {from: accounts[2]});
		await CryptoSecureBankTokenBmheBqu.whenPaused.call({from: accounts[5]});

		assert.equal(boolx7p8z7j, false)
		await expect(CryptoSecureBankTokenBmheBqu.transferOwnership.call(addressT8iVUlz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankToken2Ubg1n = await CryptoSecureBankToken.new({from: accounts[5]});
		const uints0I9yuo = BigInt("2028")
		const boolNtJZ6S4 = await CryptoSecureBankToken2Ubg1n.redeem.call(uints0I9yuo, {from: accounts[5]});
		await CryptoSecureBankToken2Ubg1n.whenNotPaused.call({from: accounts[0]});
		const uintwJPriuY = await CryptoSecureBankToken2Ubg1n.totalSupply.call({from: accounts[5]});

		assert.equal(boolNtJZ6S4, true)
		await expect(CryptoSecureBankToken2Ubg1n.whenNotPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenKUaKJNq = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressc4rjvGr = accounts[0]
		const addresszhhCCZ = accounts[1]
		const addressMRpckO2 = accounts[6]
		const uintP3NiTJH = await CryptoSecureBankTokenKUaKJNq.balanceOf.call(addressc4rjvGr, {from: accounts[3]});
		const uintdw1H2Jl = await CryptoSecureBankTokenKUaKJNq.totalSupply.call({from: accounts[5]});
		const addressp3x9jRw = await CryptoSecureBankTokenKUaKJNq.addBlackList.call(addresszhhCCZ, {from: accounts[4]});
		const uintJ1LZwHM = await CryptoSecureBankTokenKUaKJNq.balanceOf.call(addressMRpckO2, {from: accounts[2]});

		assert.equal(uintJ1LZwHM, BigInt("0"))
		assert.equal(uintP3NiTJH, BigInt("0"))
		assert.equal(uintdw1H2Jl, BigInt("100000000000000000000000000"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenVDAVAQy = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressY3xGTut = accounts[0]
		const uintfyUWoCJ = BigInt("369")
		const addresskaHvmDO = "0x0000000000000000000000000000000000000001"
		const uintVBHO7g9 = BigInt("1218")
		const addressxqU7iP3 = "0x0000000000000000000000000000000000000001"
		const uintduXSUYg = BigInt("1856")
		const addressyeJwqF = accounts[2]
		const uintdTS9jiC = await CryptoSecureBankTokenVDAVAQy.balanceOf.call(addressY3xGTut, {from: accounts[1]});
		const boolKHX9bNS = await CryptoSecureBankTokenVDAVAQy.transfer.call(addresskaHvmDO, uintfyUWoCJ, {from: accounts[4]});
		const boolr1k9bZw = await CryptoSecureBankTokenVDAVAQy.approve.call(addressxqU7iP3, uintVBHO7g9, {from: accounts[5]});
		const boolmFoqDV = await CryptoSecureBankTokenVDAVAQy.transfer.call(addressyeJwqF, uintduXSUYg, {from: accounts[0]});
		await CryptoSecureBankTokenVDAVAQy.unpause.call({from: accounts[0]});

		assert.equal(boolKHX9bNS, true)
		assert.equal(boolr1k9bZw, true)
		assert.equal(uintdTS9jiC, BigInt("0"))
		await expect(CryptoSecureBankTokenVDAVAQy.transfer.call(addressyeJwqF, uintduXSUYg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenKUaKJNq = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressvNc8OPu = accounts[2]
		const addressqetgkoK = accounts[5]
		const addressNVkMubm = await CryptoSecureBankTokenKUaKJNq.getOwner.call({from: accounts[3]});
		const addressVbh71m = await CryptoSecureBankTokenKUaKJNq.setOwner2.call(addressvNc8OPu, {from: accounts[3]});
		const uintdw1H2Jl = await CryptoSecureBankTokenKUaKJNq.totalSupply.call({from: accounts[5]});
		const uintJ1LZwHM = await CryptoSecureBankTokenKUaKJNq.balanceOf.call(addressqetgkoK, {from: accounts[2]});

		assert.equal(addressNVkMubm, 0x0A64fb994D6697bfaF7c926231679a1A124Dd316)
		await expect(CryptoSecureBankTokenKUaKJNq.setOwner2.call(addressvNc8OPu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenT1ck7Cx = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addresstzHoAOz = accounts[0]
		const uintNKEppbb = BigInt("1626")
		const addressgicjOgv = accounts[2]
		const addresslAdpMd = accounts[0]
		const uintyb6AFTI = BigInt("135")
		const addressUFSaURW = accounts[4]
		const addressKi4vZVx = accounts[4]
		const uintsD09MM = BigInt("1475")
		const addresselCxOzT = accounts[4]
		const addressTPUAHzc = await CryptoSecureBankTokenT1ck7Cx.addBlackList.call(addresstzHoAOz, {from: accounts[0]});
		const boolI52KBCg = await CryptoSecureBankTokenT1ck7Cx.transferFrom.call(addresslAdpMd, addressgicjOgv, uintNKEppbb, {from: accounts[0]});
		const boolL75Gn6y = await CryptoSecureBankTokenT1ck7Cx.transferFrom.call(addressKi4vZVx, addressUFSaURW, uintyb6AFTI, {from: accounts[1]});
		const boolisfjVmY = await CryptoSecureBankTokenT1ck7Cx.transfer.call(addresselCxOzT, uintsD09MM, {from: accounts[3]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenVDAVAQy = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressaBDboe = accounts[0]
		const uintYrhEpNq = BigInt("369")
		const addressCPmbaf = "0x0000000000000000000000000000000000000002"
		const addressBRSrd5G = "0x0000000000000000000000000000000000000001"
		const addressGugxz5M = accounts[1]
		const uintIUBXAZs = BigInt("1218")
		const addressjHyWEg2 = "0x0000000000000000000000000000000000000001"
		const addressOOd4gd = accounts[1]
		const uintdTS9jiC = await CryptoSecureBankTokenVDAVAQy.balanceOf.call(addressaBDboe, {from: accounts[1]});
		const boolKHX9bNS = await CryptoSecureBankTokenVDAVAQy.transfer.call(addressCPmbaf, uintYrhEpNq, {from: accounts[4]});
		const uintxJZvgA = await CryptoSecureBankTokenVDAVAQy.allowance.call(addressGugxz5M, addressBRSrd5G, {from: accounts[3]});
		const boolr1k9bZw = await CryptoSecureBankTokenVDAVAQy.approve.call(addressjHyWEg2, uintIUBXAZs, {from: accounts[5]});
		const addresskwhuIcd = await CryptoSecureBankTokenVDAVAQy.destroyBlackFunds.call(addressOOd4gd, {from: accounts[4]});
		await CryptoSecureBankTokenVDAVAQy.unpause.call({from: accounts[0]});

		assert.equal(boolKHX9bNS, true)
		assert.equal(boolr1k9bZw, true)
		assert.equal(uintdTS9jiC, BigInt("0"))
		assert.equal(uintxJZvgA, BigInt("0"))
		await expect(CryptoSecureBankTokenVDAVAQy.destroyBlackFunds.call(addressOOd4gd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendpfnoLZ = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressPOrL63B = "0x0000000000000000000000000000000000000001"
		const uintutvrRFk = BigInt("1651")
		const addressCWMbyp8 = accounts[3]
		const addressMkBQmB = accounts[1]
		const addressuBQ97T = await CryptoSecureBankTokendpfnoLZ.removeBlackList.call(addressPOrL63B, {from: accounts[0]});
		const boolZWjlwTc = await CryptoSecureBankTokendpfnoLZ.transferFrom.call(addressMkBQmB, addressCWMbyp8, uintutvrRFk, {from: accounts[3]});

		await expect(CryptoSecureBankTokendpfnoLZ.transferFrom.call(addressMkBQmB, addressCWMbyp8, uintutvrRFk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenLZv9ioH = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintjb0zjcn = BigInt("0")
		const addresslVIzows = accounts[5]
		const uinthB22FE = BigInt("1684")
		const addresse9nlios = accounts[4]
		const boologNK6cr = await CryptoSecureBankTokenLZv9ioH.transfer.call(addresslVIzows, uintjb0zjcn, {from: accounts[0]});
		const boolqft3usj = await CryptoSecureBankTokenLZv9ioH.approve.call(addresse9nlios, uinthB22FE, {from: accounts[1]});

		assert.equal(boologNK6cr, true)
		assert.equal(boolqft3usj, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenLZv9ioH = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressJVKUubd = accounts[2]
		await CryptoSecureBankTokenLZv9ioH.pause.call({from: accounts[4]});
		const addressoxSeyhF = await CryptoSecureBankTokenLZv9ioH.transferOwnership.call(addressJVKUubd, {from: accounts[0]});

		await expect(CryptoSecureBankTokenLZv9ioH.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenVDAVAQy = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintCs7HJo0 = BigInt("366")
		const addressECBgqGu = "0x00000000000000000000000000000000000000-1"
		const boolKHX9bNS = await CryptoSecureBankTokenVDAVAQy.transfer.call(addressECBgqGu, uintCs7HJo0, {from: accounts[4]});

		await expect(CryptoSecureBankTokenVDAVAQy.transfer.call(addressECBgqGu, uintCs7HJo0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenclzvxq5 = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintdPuHqTL = BigInt("727")
		const uintHR3lRh = BigInt("785")
		const uinttcTL5oO = await CryptoSecureBankTokenclzvxq5.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uintobd0NyX = await CryptoSecureBankTokenclzvxq5.setParams.call(uintHR3lRh, uintdPuHqTL, {from: accounts[1]});

		assert.equal(uinttcTL5oO, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenclzvxq5.setParams.call(uintHR3lRh, uintdPuHqTL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenLZv9ioH = await CryptoSecureBankToken.new({from: accounts[4]});
		const uint9B87Dy = BigInt("691")
		const addressmLQT7rs = accounts[0]
		const addressll3mhsp = accounts[1]
		const boolA619Ny3 = await CryptoSecureBankTokenLZv9ioH.approve.call(addressmLQT7rs, uint9B87Dy, {from: accounts[5]});
		const boolTXg0Foq = await CryptoSecureBankTokenLZv9ioH.deprecate.call(addressll3mhsp, {from: accounts[4]});

		assert.equal(boolA619Ny3, true)
		assert.equal(boolTXg0Foq, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenDg3uYbb = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintA75S0qO = BigInt("973")
		const addressbPPq1MY = accounts[0]
		const addressnGJ8S7f = "0x0000000000000000000000000000000000000001"
		const address01qtKG = accounts[0]
		const addressrmVqSAa = accounts[5]
		const uintT8K8ln6 = BigInt("1154")
		const addressi6mBugy = "0x0000000000000000000000000000000000000001"
		const uintpk1dPut = await CryptoSecureBankTokenDg3uYbb.totalSupply.call({from: accounts[4]});
		const boolkEQLazJ = await CryptoSecureBankTokenDg3uYbb.transfer.call(addressbPPq1MY, uintA75S0qO, {from: accounts[3]});
		const addressZEIVaEO = await CryptoSecureBankTokenDg3uYbb.transferOwnership.call(addressnGJ8S7f, {from: accounts[3]});
		const uintTazqMN = await CryptoSecureBankTokenDg3uYbb.allowance.call(addressrmVqSAa, address01qtKG, {from: accounts[4]});
		const boolS6NtPQj = await CryptoSecureBankTokenDg3uYbb.approve.call(addressi6mBugy, uintT8K8ln6, {from: accounts[1]});

		assert.equal(boolS6NtPQj, true)
		assert.equal(boolkEQLazJ, true)
		assert.equal(uintTazqMN, BigInt("0"))
		assert.equal(uintpk1dPut, BigInt("100000000000000000000000000"))
	});
})