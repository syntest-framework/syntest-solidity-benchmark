const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const TPAanug4Nn = await TPA.new({from: accounts[0]});
		const addresssE6tT2d = accounts[3]
		const uintRNdZKKU = BigInt("1211")
		const addresshTEhm9x = "0x0000000000000000000000000000000000000001"
		const addressUp75gTi = accounts[4]
		const uintDNurhVa = BigInt("552")
		const uinte0ZIU0q = BigInt("317")
		const addressvPN3ur9 = accounts[0]
		const uint256s72Qbyf = await TPAanug4Nn.balanceOf.call(addresssE6tT2d, {from: accounts[0]});
		const boolSimacv = await TPAanug4Nn.transferFrom.call(addressUp75gTi, addresshTEhm9x, uintRNdZKKU, {from: accounts[5]});
		const boolZC9DZrW = await TPAanug4Nn.lock.call(addressvPN3ur9, uinte0ZIU0q, uintDNurhVa, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256s72Qbyf, BigInt("0"))
		await expect(TPAanug4Nn.transferFrom.call(addressUp75gTi, addresshTEhm9x, uintRNdZKKU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const stringyM0VPcM = "prNW9cRHi6gHZrBu2pcD3kIfqnS7Ck6CeEgUayCXPy3XPm8sOGlrZctZXpcjsGy7n4jgR1aW5RA8YA7mYFjLKy0pj2"
		const stringhml73g3 = "5AA7p"
		const uintPeLAEOk = BigInt("186")
		const TPAGqThpX = await TPA.new(stringyM0VPcM, stringhml73g3, uintPeLAEOk, {from: accounts[5]});
		const uintEeSP9vg = BigInt("241")
		const addresss9jnvAd = accounts[4]
		const uintCPU4YWU = BigInt("1021")
		const addressAAi34tS = "0x0000000000000000000000000000000000000001"
		const addressSRt1O1s = accounts[5]
		const uintVGqvoNs = BigInt("445")
		const addressEARC8B = accounts[2]
		const addressHGFKxeq = accounts[3]
		const addressk8HNPmg = accounts[5]
		const boolNOTkKI1 = await TPAGqThpX.transfer.call(addresss9jnvAd, uintEeSP9vg, {from: accounts[2]});
		const boolzowk9om = await TPAGqThpX.transferFrom.call(addressSRt1O1s, addressAAi34tS, uintCPU4YWU, {from: accounts[4]});
		await TPAGqThpX.whenNotPaused.call({from: accounts[3]});
		const boolSXKNXL = await TPAGqThpX.transferFrom.call(addressHGFKxeq, addressEARC8B, uintVGqvoNs, {from: accounts[0]});
		const addressFwdGtMU = await TPAGqThpX.notFrozen.call(addressk8HNPmg, {from: accounts[1]});
		await TPAGqThpX.renounceAdmin.call({from: accounts[4]});
	});

	it('test for TPA', async () => {
		const TPAE16Fqzy = await TPA.new({from: accounts[4]});
		const uintb3dtrVG = BigInt("917")
		const uintkW8DscZ = BigInt("591")
		const addressyapwAb = accounts[3]
		const addressc5CTatg = accounts[3]
		await TPAE16Fqzy.onlyAdmin.call({from: accounts[5]});
		const boolXV3I6e5 = await TPAE16Fqzy.lock.call(addressyapwAb, uintkW8DscZ, uintb3dtrVG, {from: accounts[2]});
		const boolGKzC4ZC = await TPAE16Fqzy.isAdmin.call(addressc5CTatg, {from: accounts[5]});

		await expect(TPAE16Fqzy.onlyAdmin.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAMCFYOcz = await TPA.new({from: accounts[3]});
		const uinttlZAow9 = BigInt("1807")
		const addresscJCmeex = "0x0000000000000000000000000000000000000001"
		const uintd3cxyOY = BigInt("1663")
		const addressyCYqhb5 = accounts[5]
		const uintzxNkc2f = BigInt("95")
		const addressnJXzoy1 = accounts[3]
		const boolrLuClHm = await TPAMCFYOcz.increaseAllowance.call(addresscJCmeex, uinttlZAow9, {from: accounts[2]});
		await TPAMCFYOcz.pause.call({from: accounts[3]});
		const addressr0RLM5h = await TPAMCFYOcz.burnFrom.call(addressyCYqhb5, uintd3cxyOY, {from: accounts[3]});
		const boolKk23gx5 = await TPAMCFYOcz.decreaseAllowance.call(addressnJXzoy1, uintzxNkc2f, {from: accounts[0]});

		assert.equal(boolrLuClHm, true)
		await expect(TPAMCFYOcz.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPALK4a5ux = await TPA.new({from: accounts[5]});
		const uintJo5JWEn = BigInt("1590")
		const uintbU0ewLK = BigInt("961")
		const addressuTkpW0 = accounts[4]
		const uinteyInz5H = BigInt("1711")
		const addressMspNOci = accounts[2]
		const addressaJVblaA = accounts[2]
		const boolhSKbN45 = await TPALK4a5ux.lock.call(addressuTkpW0, uintbU0ewLK, uintJo5JWEn, {from: accounts[3]});
		const addresskpulQGR = await TPALK4a5ux.burnFrom.call(addressMspNOci, uinteyInz5H, {from: accounts[5]});
		const addressichVls8 = await TPALK4a5ux.removeAdmin.call(addressaJVblaA, {from: accounts[2]});
		const stringtb8G42c = await TPALK4a5ux.name.call({from: accounts[0]});

		await expect(TPALK4a5ux.lock.call(addressuTkpW0, uintbU0ewLK, uintJo5JWEn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAanug4Nn = await TPA.new({from: accounts[0]});
		const uintFjehI7z = BigInt("1949")
		const addressvwHc2EH = accounts[4]
		const addressdskcWZ1 = accounts[3]
		const uintS4JMu9j = BigInt("1211")
		const addressXA2re2O = "0x0000000000000000000000000000000000000001"
		const addressar89wTl = accounts[4]
		const uintUvlxW5Z = BigInt("552")
		const uintHiI1krX = BigInt("306")
		const addressIskE3gE = accounts[0]
		const boolWDFGOq1 = await TPAanug4Nn.approve.call(addressvwHc2EH, uintFjehI7z, {from: accounts[0]});
		const uint256s72Qbyf = await TPAanug4Nn.balanceOf.call(addressdskcWZ1, {from: accounts[0]});
		const boolSimacv = await TPAanug4Nn.transferFrom.call(addressar89wTl, addressXA2re2O, uintS4JMu9j, {from: accounts[5]});
		const boolZC9DZrW = await TPAanug4Nn.lock.call(addressIskE3gE, uintHiI1krX, uintUvlxW5Z, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolWDFGOq1, true)
		assert.equal(uint256s72Qbyf, BigInt("0"))
		await expect(TPAanug4Nn.transferFrom.call(addressar89wTl, addressXA2re2O, uintS4JMu9j, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAanug4Nn = await TPA.new({from: accounts[0]});
		const addressDCZPgAf = accounts[3]
		const uintVbdmon4 = BigInt("1743")
		const uintAXd3EtC = BigInt("1888")
		const addressmhSgSx = accounts[0]
		const uintn3rJzWc = BigInt("1211")
		const addressy8NeoS6 = "0x0000000000000000000000000000000000000001"
		const addressk4J00Jp = accounts[4]
		const uintjp6GIH2 = BigInt("572")
		const uintmfWFIo2 = BigInt("317")
		const addresswiZWDux = accounts[0]
		const uint256s72Qbyf = await TPAanug4Nn.balanceOf.call(addressDCZPgAf, {from: accounts[0]});
		await TPAanug4Nn.renounceAdmin.call({from: accounts[3]});
		const boolSQaY6RX = await TPAanug4Nn.transferWithLock.call(addressmhSgSx, uintAXd3EtC, uintVbdmon4, {from: "0x0000000000000000000000000000000000000001"});
		const boolSimacv = await TPAanug4Nn.transferFrom.call(addressk4J00Jp, addressy8NeoS6, uintn3rJzWc, {from: accounts[5]});
		const boolZC9DZrW = await TPAanug4Nn.lock.call(addresswiZWDux, uintmfWFIo2, uintjp6GIH2, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256s72Qbyf, BigInt("0"))
		await expect(TPAanug4Nn.renounceAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAqdgAg0X = await TPA.new({from: accounts[0]});
		const addresscBcCxa = "0x0000000000000000000000000000000000000001"
		const uintQWIJNj = BigInt("327")
		const addressSHCLzVI = accounts[2]
		const uint256RLasRM4 = await TPAqdgAg0X.totalSupply.call({from: accounts[4]});
		const uint8tX4Gxqe = await TPAqdgAg0X.decimals.call({from: accounts[1]});
		const booltyCQaIO = await TPAqdgAg0X.isOwner.call(addresscBcCxa, {from: accounts[1]});
		const boolphCF735 = await TPAqdgAg0X.transfer.call(addressSHCLzVI, uintQWIJNj, {from: accounts[0]});

		assert.equal(boolphCF735, true)
		assert.equal(booltyCQaIO, false)
		assert.equal(uint256RLasRM4, BigInt("10000000000000000000000000000"))
		assert.equal(uint8tX4Gxqe, BigInt("18"))
	});

	it('test for TPA', async () => {
		const TPAqdgAg0X = await TPA.new({from: accounts[0]});
		const uintM3hrt5F = BigInt("347")
		const addressqUhg6xj = "0x0000000000000000000000000000000000000001"
		const addressnstA3p = "0x0000000000000000000000000000000000000001"
		const uintJnPABrz = BigInt("344")
		const addressfTSO9k7 = accounts[2]
		const boolRPdVmlF = await TPAqdgAg0X.decreaseAllowance.call(addressqUhg6xj, uintM3hrt5F, {from: accounts[1]});
		const uint256RLasRM4 = await TPAqdgAg0X.totalSupply.call({from: accounts[4]});
		const uint8tX4Gxqe = await TPAqdgAg0X.decimals.call({from: accounts[1]});
		const booltyCQaIO = await TPAqdgAg0X.isOwner.call(addressnstA3p, {from: accounts[1]});
		const stringpUgePb3 = await TPAqdgAg0X.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolphCF735 = await TPAqdgAg0X.transfer.call(addressfTSO9k7, uintJnPABrz, {from: accounts[0]});

		await expect(TPAqdgAg0X.decreaseAllowance.call(addressqUhg6xj, uintM3hrt5F, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAanug4Nn = await TPA.new({from: accounts[0]});
		const uintRJHc9JQ = BigInt("1939")
		const addressarofFNF = accounts[4]
		const addresslXL15SG = accounts[0]
		const uintb3gkFTo = BigInt("1211")
		const addressMCq1545 = "0x0000000000000000000000000000000000000001"
		const addressjq64W3E = accounts[4]
		const addressulPMJnn = accounts[1]
		const uintZOUPhFU = BigInt("552")
		const uinte02m5Lo = BigInt("306")
		const addressOrQJFia = accounts[0]
		const boolWDFGOq1 = await TPAanug4Nn.approve.call(addressarofFNF, uintRJHc9JQ, {from: accounts[0]});
		const addressHtW3yJk = await TPAanug4Nn.transferOwnership.call(addresslXL15SG, {from: accounts[0]});
		const boolSimacv = await TPAanug4Nn.transferFrom.call(addressjq64W3E, addressMCq1545, uintb3gkFTo, {from: accounts[5]});
		const addressMzXAjnl = await TPAanug4Nn.addAdmin.call(addressulPMJnn, {from: accounts[3]});
		const boolZC9DZrW = await TPAanug4Nn.lock.call(addressOrQJFia, uinte02m5Lo, uintZOUPhFU, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolWDFGOq1, true)
		await expect(TPAanug4Nn.transferFrom.call(addressjq64W3E, addressMCq1545, uintb3gkFTo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAanug4Nn = await TPA.new({from: accounts[0]});
		const addressve1Cl3S = accounts[3]
		const uintN8tHXfc = BigInt("403")
		const uintFDmimhG = BigInt("1059")
		const addressX13cQPm = accounts[4]
		const uintJQrSikf = BigInt("1208")
		const addresslqZ3IRS = "0x0000000000000000000000000000000000000001"
		const addressq4qxBCa = accounts[4]
		const uint256s72Qbyf = await TPAanug4Nn.balanceOf.call(addressve1Cl3S, {from: accounts[0]});
		const stringcOwFilW = await TPAanug4Nn.name.call({from: accounts[4]});
		const boolZl2lcGG = await TPAanug4Nn.transferWithLock.call(addressX13cQPm, uintFDmimhG, uintN8tHXfc, {from: accounts[2]});
		const boolSimacv = await TPAanug4Nn.transferFrom.call(addressq4qxBCa, addresslqZ3IRS, uintJQrSikf, {from: accounts[5]});

		assert.equal(stringcOwFilW, "TPA")
		assert.equal(uint256s72Qbyf, BigInt("0"))
		await expect(TPAanug4Nn.transferWithLock.call(addressX13cQPm, uintFDmimhG, uintN8tHXfc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAanug4Nn = await TPA.new({from: accounts[0]});
		const addressUNsb183 = accounts[3]
		const addressIIxIqPX = accounts[5]
		const addressW050kY7 = accounts[4]
		const uintL532YF9 = BigInt("1716")
		const uintmmFnFnt = BigInt("1888")
		const addressVKaSQ1q = accounts[0]
		const uintdISLnbv = BigInt("572")
		const uintwSQVHvY = BigInt("317")
		const addressoT3CNJw = accounts[1]
		const uint256s72Qbyf = await TPAanug4Nn.balanceOf.call(addressUNsb183, {from: accounts[0]});
		const uint256BYGgNvV = await TPAanug4Nn.allowance.call(addressW050kY7, addressIIxIqPX, {from: accounts[1]});
		const boolSQaY6RX = await TPAanug4Nn.transferWithLock.call(addressVKaSQ1q, uintmmFnFnt, uintL532YF9, {from: "0x0000000000000000000000000000000000000001"});
		const boolZC9DZrW = await TPAanug4Nn.lock.call(addressoT3CNJw, uintwSQVHvY, uintdISLnbv, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256BYGgNvV, BigInt("0"))
		assert.equal(uint256s72Qbyf, BigInt("0"))
		await expect(TPAanug4Nn.transferWithLock.call(addressVKaSQ1q, uintmmFnFnt, uintL532YF9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAanug4Nn = await TPA.new({from: accounts[0]});
		const addressgYAV73K = accounts[0]
		const addressGdBsVVi = accounts[5]
		const boolJxBW69E = await TPAanug4Nn.isOwner.call(addressgYAV73K, {from: accounts[4]});
		const uint256s72Qbyf = await TPAanug4Nn.balanceOf.call(addressGdBsVVi, {from: accounts[0]});
		const boolri4RNnT = await TPAanug4Nn.paused.call({from: accounts[3]});

		assert.equal(boolJxBW69E, true)
		assert.equal(boolri4RNnT, false)
		assert.equal(uint256s72Qbyf, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAqdgAg0X = await TPA.new({from: accounts[0]});
		const uintFTG5So = BigInt("634")
		const addresszXDojNy = accounts[3]
		const uintax9FMJA = BigInt("194")
		const uintcTy2HH = BigInt("1625")
		const addressbtoIh1S = accounts[4]
		const uintJQ9rdRm = BigInt("1501")
		const addressojt3OLL = accounts[4]
		const addressHYCEc4V = "0x0000000000000000000000000000000000000001"
		const uintDLluSQo = BigInt("64")
		const addressNtQ78G = accounts[2]
		const booloxjT7h7 = await TPAqdgAg0X.increaseAllowance.call(addresszXDojNy, uintFTG5So, {from: "0x0000000000000000000000000000000000000001"});
		const uint256uex5VHu = await TPAqdgAg0X.burn.call(uintax9FMJA, {from: accounts[5]});
		const uint8zpeH6h = await TPAqdgAg0X.decimals.call({from: accounts[4]});
		const boolS4hcq0N = await TPAqdgAg0X.approve.call(addressbtoIh1S, uintcTy2HH, {from: accounts[3]});
		const boolfu5dkDV = await TPAqdgAg0X.increaseAllowance.call(addressojt3OLL, uintJQ9rdRm, {from: accounts[3]});
		const booltyCQaIO = await TPAqdgAg0X.isOwner.call(addressHYCEc4V, {from: accounts[1]});
		const boolphCF735 = await TPAqdgAg0X.transfer.call(addressNtQ78G, uintDLluSQo, {from: accounts[0]});

		assert.equal(booloxjT7h7, true)
		await expect(TPAqdgAg0X.burn.call(uintax9FMJA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAanug4Nn = await TPA.new({from: accounts[0]});
		const addressF0u6lx = accounts[3]
		const uintev84Vbt = BigInt("1557")
		const uintgD9IRsy = BigInt("611")
		const addressNv6G6w = accounts[5]
		const uintszYQcIO = BigInt("626")
		const addressrWiLjVT = accounts[5]
		const addressbd8QIVV = accounts[2]
		const uintMEpK3mw = BigInt("1716")
		const uintJVzgxGT = BigInt("1888")
		const addressycXeJrb = accounts[0]
		const uintoMzAs1r = BigInt("556")
		const uintKyXBU5H = BigInt("317")
		const addressWASsjwp = accounts[0]
		const uint256s72Qbyf = await TPAanug4Nn.balanceOf.call(addressF0u6lx, {from: accounts[0]});
		const boolLfKUzmY = await TPAanug4Nn.lock.call(addressNv6G6w, uintgD9IRsy, uintev84Vbt, {from: accounts[0]});
		const boolyF9EudF = await TPAanug4Nn.transferFrom.call(addressbd8QIVV, addressrWiLjVT, uintszYQcIO, {from: accounts[2]});
		const boolSQaY6RX = await TPAanug4Nn.transferWithLock.call(addressycXeJrb, uintJVzgxGT, uintMEpK3mw, {from: "0x0000000000000000000000000000000000000001"});
		await TPAanug4Nn.whenPaused.call({from: accounts[1]});
		const boolZC9DZrW = await TPAanug4Nn.lock.call(addressWASsjwp, uintKyXBU5H, uintoMzAs1r, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256s72Qbyf, BigInt("0"))
		await expect(TPAanug4Nn.lock.call(addressNv6G6w, uintgD9IRsy, uintev84Vbt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAanug4Nn = await TPA.new({from: accounts[0]});
		const addressJAVQqG = accounts[5]
		const stringfsxbzLs = await TPAanug4Nn.symbol.call({from: accounts[2]});
		const uint256s72Qbyf = await TPAanug4Nn.balanceOf.call(addressJAVQqG, {from: accounts[0]});

		assert.equal(stringfsxbzLs, "TPA")
		assert.equal(uint256s72Qbyf, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAanug4Nn = await TPA.new({from: accounts[0]});
		const addresszL9jheh = accounts[5]
		const addressLo0HTly = accounts[0]
		const addressQmWhy68 = accounts[3]
		const uinty7FKFSl = BigInt("1810")
		const uintUTtWopu = BigInt("94")
		const addressff57omg = accounts[4]
		const uintzuP48zM = BigInt("2025")
		const addressVgENvwM = accounts[0]
		const uintkX50JvL = BigInt("437")
		const addressF0aSl8E = accounts[5]
		const uint256s72Qbyf = await TPAanug4Nn.balanceOf.call(addresszL9jheh, {from: accounts[0]});
		const uint256rgYNUzf = await TPAanug4Nn.allowance.call(addressQmWhy68, addressLo0HTly, {from: accounts[4]});
		const booltAHy3l9 = await TPAanug4Nn.transferWithLock.call(addressff57omg, uintUTtWopu, uinty7FKFSl, {from: accounts[0]});
		const boolhVno1Ww = await TPAanug4Nn.unlock.call(addressVgENvwM, uintzuP48zM, {from: accounts[1]});
		const boolRfrkSas = await TPAanug4Nn.transfer.call(addressF0aSl8E, uintkX50JvL, {from: accounts[2]});

		assert.equal(booltAHy3l9, true)
		assert.equal(uint256rgYNUzf, BigInt("0"))
		assert.equal(uint256s72Qbyf, BigInt("0"))
		await expect(TPAanug4Nn.unlock.call(addressVgENvwM, uintzuP48zM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAqdgAg0X = await TPA.new({from: accounts[0]});
		const uintylff1Sn = BigInt("698")
		const address5Fpk14 = accounts[2]
		const addressFwocFiw = "0x0000000000000000000000000000000000000001"
		const boolphCF735 = await TPAqdgAg0X.transfer.call(address5Fpk14, uintylff1Sn, {from: accounts[0]});
		const addressF10RgP9 = await TPAqdgAg0X.addAdmin.call(addressFwocFiw, {from: accounts[0]});

		assert.equal(boolphCF735, true)
	});

	it('test for TPA', async () => {
		const TPAanug4Nn = await TPA.new({from: accounts[0]});
		const addressKwyWvd7 = "0x0000000000000000000000000000000000000001"
		const uintjd2YNVf = BigInt("678")
		const uintaIuQk4d = BigInt("1086")
		const addressWxdEpAa = accounts[3]
		const addressag7W5C = accounts[5]
		const boolYEK7V9 = await TPAanug4Nn.freezeAccount.call(addressKwyWvd7, {from: accounts[0]});
		const bools0TbTN8 = await TPAanug4Nn.transferWithLock.call(addressWxdEpAa, uintaIuQk4d, uintjd2YNVf, {from: accounts[3]});
		await TPAanug4Nn.unpause.call({from: accounts[0]});
		const uint256s72Qbyf = await TPAanug4Nn.balanceOf.call(addressag7W5C, {from: accounts[0]});

		assert.equal(boolYEK7V9, true)
		await expect(TPAanug4Nn.transferWithLock.call(addressWxdEpAa, uintaIuQk4d, uintjd2YNVf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPARZpdWKR = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const addressLLcmu6B = accounts[3]
		const addressIdgHXMl = accounts[1]
		const uintiLW8Ypp = BigInt("1042")
		const addressBn1Qvsz = accounts[2]
		const uintDyGWnNp = BigInt("185")
		const addressRerjNN = accounts[3]
		const uintnr4sTaJ = BigInt("47")
		const addressJvSobyE = accounts[1]
		const boollKiAtGD = await TPARZpdWKR.isOwner.call(addressLLcmu6B, {from: accounts[2]});
		const uint256zITjLBN = await TPARZpdWKR.balanceOf.call(addressIdgHXMl, {from: accounts[5]});
		const boold9VqTSx = await TPARZpdWKR.transfer.call(addressBn1Qvsz, uintiLW8Ypp, {from: accounts[0]});
		const addresssegVlcd = await TPARZpdWKR.burnFrom.call(addressRerjNN, uintDyGWnNp, {from: accounts[5]});
		const boolcieaSXe = await TPARZpdWKR.approve.call(addressJvSobyE, uintnr4sTaJ, {from: accounts[1]});
	});

	it('test for TPA', async () => {
		const TPAqdgAg0X = await TPA.new({from: accounts[0]});
		const uintUM4cP8 = BigInt("1075")
		const uintpFSpDAH = BigInt("836")
		const addressa5fexXW = accounts[0]
		const uintXcSF7lE = BigInt("656")
		const addressHXXYqY = accounts[4]
		const uintVYVjWOy = BigInt("1879")
		const addressolMKU2V = "0x0000000000000000000000000000000000000001"
		const uintiM1LCjS = BigInt("170")
		const addressvbzSCBx = "0x0000000000000000000000000000000000000001"
		const uintqZgMCdS = BigInt("1226")
		const addressi2U6Yk9 = accounts[4]
		const addresslAIARSl = accounts[2]
		const uint256H3Wom9 = await TPAqdgAg0X.burn.call(uintUM4cP8, {from: accounts[0]});
		const booleEKqEgs = await TPAqdgAg0X.unlock.call(addressa5fexXW, uintpFSpDAH, {from: accounts[0]});
		const boolphCF735 = await TPAqdgAg0X.transfer.call(addressHXXYqY, uintXcSF7lE, {from: accounts[0]});
		const addressBqex4rO = await TPAqdgAg0X.burnFrom.call(addressolMKU2V, uintVYVjWOy, {from: accounts[4]});
		const boolWKpcc2G = await TPAqdgAg0X.increaseAllowance.call(addressvbzSCBx, uintiM1LCjS, {from: accounts[2]});
		const boolIEVTMQW = await TPAqdgAg0X.transferFrom.call(addresslAIARSl, addressi2U6Yk9, uintqZgMCdS, {from: accounts[4]});

		await expect(TPAqdgAg0X.unlock.call(addressa5fexXW, uintpFSpDAH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})