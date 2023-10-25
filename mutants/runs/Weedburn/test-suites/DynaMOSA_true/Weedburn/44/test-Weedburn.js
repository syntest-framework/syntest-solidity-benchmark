const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const stringoC7zT44 = "imMysxgevotozkSMsthnqVTmsXgU8N2zD7baF"
		const stringoG7vSbM = "UCUjVhnHmBbuKHYeVY3Y1C9PoEWLYqqQx68FEaBgV06xA7yU3XoHRJ"
		const uintpuUYFy = BigInt("237")
		const WeedburnFcdBa73 = await Weedburn.new(stringoC7zT44, stringoG7vSbM, uintpuUYFy, {from: accounts[1]});
		const uintxCzs952 = BigInt("1914")
		const addressHgFIo9 = accounts[2]
		const uintocIfpDZ = BigInt("1770")
		const addressODS8nD = accounts[4]
		const uintzwFAsKq = BigInt("30")
		const addressBtBa5pl = accounts[4]
		const boolG2ErsCd = await WeedburnFcdBa73.approve.call(addressHgFIo9, uintxCzs952, {from: accounts[4]});
		const boolDya9N7A = await WeedburnFcdBa73.approve.call(addressODS8nD, uintocIfpDZ, {from: accounts[5]});
		const boolWZJanxq = await WeedburnFcdBa73.decreaseAllowance.call(addressBtBa5pl, uintzwFAsKq, {from: accounts[4]});
	});

	it('test for Weedburn', async () => {
		const WeedburnQZoeh9 = await Weedburn.new({from: accounts[2]});
		const uintuqU42el = BigInt("1985")
		const addressRVjpIJt = accounts[2]
		const uintN2xdRLq = BigInt("1280")
		const addressuQc7SSI = accounts[5]
		const uint256VrIyiP = await WeedburnQZoeh9.totalSupply.call({from: accounts[3]});
		const booluj1a6KD = await WeedburnQZoeh9.decreaseAllowance.call(addressRVjpIJt, uintuqU42el, {from: accounts[2]});
		const addressnKcddXw = await WeedburnQZoeh9.burnFrom.call(addressuQc7SSI, uintN2xdRLq, {from: accounts[4]});

		assert.equal(uint256VrIyiP, BigInt("100000000000000000000000"))
		await expect(WeedburnQZoeh9.decreaseAllowance.call(addressRVjpIJt, uintuqU42el, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnCcjrG7H = await Weedburn.new({from: accounts[2]});
		const uintVy7ckG1 = BigInt("1877")
		const addressem4vYFF = accounts[5]
		const uintc1ZkDr5 = BigInt("710")
		const addressZiD3n1e = accounts[0]
		await WeedburnCcjrG7H.enableDevMode.call({from: accounts[1]});
		const boolVpeT2SD = await WeedburnCcjrG7H.transfer.call(addressem4vYFF, uintVy7ckG1, {from: accounts[0]});
		await WeedburnCcjrG7H.enableLimitMode.call({from: accounts[4]});
		const stringeZKdxVZ = await WeedburnCcjrG7H.symbol.call({from: accounts[4]});
		const boolbR6SJzY = await WeedburnCcjrG7H.increaseAllowance.call(addressZiD3n1e, uintc1ZkDr5, {from: accounts[1]});

		await expect(WeedburnCcjrG7H.enableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburncltYblA = await Weedburn.new({from: accounts[0]});
		const uintT0BjEmZ = BigInt("1498")
		const addressmUsMP2h = "0x0000000000000000000000000000000000000001"
		await WeedburncltYblA.disableLimitMode.call({from: accounts[3]});
		const uint256hbeb9hF = await WeedburncltYblA.burn.call(uintT0BjEmZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint8pmpujAr = await WeedburncltYblA.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256pms8LZ = await WeedburncltYblA.balanceOf.call(addressmUsMP2h, {from: accounts[0]});

		await expect(WeedburncltYblA.disableLimitMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnYbOBXgR = await Weedburn.new({from: accounts[0]});
		const uintGJI7cGr = BigInt("1108")
		const addressOJRSQ10 = accounts[0]
		const uint256QA6ugum = await WeedburnYbOBXgR.totalSupply.call({from: accounts[0]});
		const boolL8lzcyV = await WeedburnYbOBXgR.transfer.call(addressOJRSQ10, uintGJI7cGr, {from: accounts[3]});
		await WeedburnYbOBXgR.enableDevMode.call({from: accounts[0]});
		await WeedburnYbOBXgR.enableLimitMode.call({from: accounts[3]});
		const stringH518PcC = await WeedburnYbOBXgR.name.call({from: accounts[2]});

		assert.equal(uint256QA6ugum, BigInt("100000000000000000000000"))
		await expect(WeedburnYbOBXgR.transfer.call(addressOJRSQ10, uintGJI7cGr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnYbOBXgR = await Weedburn.new({from: accounts[0]});
		const addressfBbH3ES = accounts[5]
		const uintezu7UCW = BigInt("1108")
		const addressUbhEcKa = accounts[0]
		const uintJobtH4q = BigInt("1642")
		const addressaQHIUul = accounts[2]
		const uint256QA6ugum = await WeedburnYbOBXgR.totalSupply.call({from: accounts[0]});
		const uint256qaH5q1H = await WeedburnYbOBXgR.balanceOf.call(addressfBbH3ES, {from: accounts[5]});
		const stringvHrCQaJ = await WeedburnYbOBXgR.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolL8lzcyV = await WeedburnYbOBXgR.transfer.call(addressUbhEcKa, uintezu7UCW, {from: accounts[3]});
		await WeedburnYbOBXgR.enableDevMode.call({from: accounts[0]});
		await WeedburnYbOBXgR.enableLimitMode.call({from: accounts[3]});
		const booleyLPliJ = await WeedburnYbOBXgR.transfer.call(addressaQHIUul, uintJobtH4q, {from: accounts[5]});
		const stringH518PcC = await WeedburnYbOBXgR.name.call({from: accounts[2]});

		assert.equal(stringvHrCQaJ, "t.me/burnweed1")
		assert.equal(uint256QA6ugum, BigInt("100000000000000000000000"))
		assert.equal(uint256qaH5q1H, BigInt("0"))
		await expect(WeedburnYbOBXgR.transfer.call(addressUbhEcKa, uintezu7UCW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnYbOBXgR = await Weedburn.new({from: accounts[0]});
		const uintz8DLIOA = BigInt("835")
		const uintZ81WagA = BigInt("1108")
		const addressDtt2Q9j = accounts[0]
		await WeedburnYbOBXgR.enableLimitMode.call({from: accounts[0]});
		const uint256gkFgvHC = await WeedburnYbOBXgR.burn.call(uintz8DLIOA, {from: accounts[3]});
		const boolL8lzcyV = await WeedburnYbOBXgR.transfer.call(addressDtt2Q9j, uintZ81WagA, {from: accounts[3]});
		await WeedburnYbOBXgR.enableDevMode.call({from: accounts[0]});
		await WeedburnYbOBXgR.enableLimitMode.call({from: accounts[3]});
		const stringH518PcC = await WeedburnYbOBXgR.name.call({from: accounts[2]});

		await expect(WeedburnYbOBXgR.enableLimitMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnQZoeh9 = await Weedburn.new({from: accounts[2]});
		const uinttfvbmnx = BigInt("682")
		const addressXIegXXj = accounts[2]
		const uintWRBrvV1 = BigInt("1280")
		const addresszwDKMKx = accounts[5]
		const uint8AXTb1RV = await WeedburnQZoeh9.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256VrIyiP = await WeedburnQZoeh9.totalSupply.call({from: accounts[3]});
		const booluj1a6KD = await WeedburnQZoeh9.decreaseAllowance.call(addressXIegXXj, uinttfvbmnx, {from: accounts[2]});
		const addressnKcddXw = await WeedburnQZoeh9.burnFrom.call(addresszwDKMKx, uintWRBrvV1, {from: accounts[4]});

		assert.equal(uint256VrIyiP, BigInt("100000000000000000000000"))
		assert.equal(uint8AXTb1RV, BigInt("18"))
		await expect(WeedburnQZoeh9.decreaseAllowance.call(addressXIegXXj, uinttfvbmnx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnXol9F08 = await Weedburn.new({from: accounts[4]});
		const uintyu1lwxg = BigInt("1613")
		const addressEPVHdkg = accounts[5]
		const addressvVbNQbX = "0x0000000000000000000000000000000000000001"
		const addressqFv1poS = accounts[4]
		const uintxyLEGdz = BigInt("1602")
		const addressmGb8gxH = accounts[1]
		const uintY3sU14d = BigInt("550")
		const addressooRDoUF = accounts[1]
		const boolxTkcxU = await WeedburnXol9F08.transferFrom.call(addressvVbNQbX, addressEPVHdkg, uintyu1lwxg, {from: accounts[1]});
		const uint256HnTbC0C = await WeedburnXol9F08.balanceOf.call(addressqFv1poS, {from: accounts[4]});
		const boolwWpqsOL = await WeedburnXol9F08.decreaseAllowance.call(addressmGb8gxH, uintxyLEGdz, {from: accounts[5]});
		const boolJBK15iu = await WeedburnXol9F08.increaseAllowance.call(addressooRDoUF, uintY3sU14d, {from: accounts[4]});

		await expect(WeedburnXol9F08.transferFrom.call(addressvVbNQbX, addressEPVHdkg, uintyu1lwxg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnYbOBXgR = await Weedburn.new({from: accounts[0]});
		const addressRvEJWio = accounts[5]
		const uintvGjJ2VF = BigInt("1002")
		const addressJdLmOrO = accounts[3]
		const uintIg9LJgF = BigInt("1096")
		const addressqJIoloj = accounts[0]
		const uintX0NFgWo = BigInt("1642")
		const addressEy65q29 = accounts[2]
		const uint256QA6ugum = await WeedburnYbOBXgR.totalSupply.call({from: accounts[0]});
		const uint256qaH5q1H = await WeedburnYbOBXgR.balanceOf.call(addressRvEJWio, {from: accounts[5]});
		const stringvHrCQaJ = await WeedburnYbOBXgR.name.call({from: "0x0000000000000000000000000000000000000001"});
		const addresskFgRPVo = await WeedburnYbOBXgR.burnFrom.call(addressJdLmOrO, uintvGjJ2VF, {from: accounts[4]});
		const boolL8lzcyV = await WeedburnYbOBXgR.transfer.call(addressqJIoloj, uintIg9LJgF, {from: accounts[3]});
		await WeedburnYbOBXgR.enableDevMode.call({from: accounts[0]});
		await WeedburnYbOBXgR.enableLimitMode.call({from: accounts[3]});
		const booleyLPliJ = await WeedburnYbOBXgR.transfer.call(addressEy65q29, uintX0NFgWo, {from: accounts[5]});
		const stringH518PcC = await WeedburnYbOBXgR.name.call({from: accounts[2]});

		assert.equal(stringvHrCQaJ, "t.me/burnweed1")
		assert.equal(uint256QA6ugum, BigInt("100000000000000000000000"))
		assert.equal(uint256qaH5q1H, BigInt("0"))
		await expect(WeedburnYbOBXgR.burnFrom.call(addressJdLmOrO, uintvGjJ2VF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnYbOBXgR = await Weedburn.new({from: accounts[0]});
		const uintHUcO0R7 = BigInt("1279")
		const addressslhKlCP = accounts[4]
		const uintf9NN4tS = BigInt("835")
		const uintGNd7UlN = BigInt("1108")
		const addressiBgskx7 = accounts[1]
		const boolBHfPSZ2 = await WeedburnYbOBXgR.approve.call(addressslhKlCP, uintHUcO0R7, {from: "0x0000000000000000000000000000000000000001"});
		await WeedburnYbOBXgR.enableLimitMode.call({from: accounts[0]});
		const uint256gkFgvHC = await WeedburnYbOBXgR.burn.call(uintf9NN4tS, {from: accounts[3]});
		const boolL8lzcyV = await WeedburnYbOBXgR.transfer.call(addressiBgskx7, uintGNd7UlN, {from: accounts[3]});
		await WeedburnYbOBXgR.enableDevMode.call({from: accounts[0]});
		await WeedburnYbOBXgR.enableLimitMode.call({from: accounts[3]});
		const stringH518PcC = await WeedburnYbOBXgR.name.call({from: accounts[2]});

		assert.equal(boolBHfPSZ2, true)
		await expect(WeedburnYbOBXgR.enableLimitMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnepIfLw3 = await Weedburn.new({from: accounts[2]});
		const uintP8GQQ3a = BigInt("974")
		const addressidC4rEg = "0x0000000000000000000000000000000000000001"
		const addresslqao1G = accounts[1]
		const addressn2nXxPG = accounts[0]
		const addressnf0FDYw = accounts[5]
		const booluVma4Rq = await WeedburnepIfLw3.increaseAllowance.call(addressidC4rEg, uintP8GQQ3a, {from: accounts[3]});
		const uint256ZR4DBi5 = await WeedburnepIfLw3.allowance.call(addressn2nXxPG, addresslqao1G, {from: accounts[1]});
		const uint87mOglA = await WeedburnepIfLw3.decimals.call({from: accounts[1]});
		const uint256F646DII = await WeedburnepIfLw3.balanceOf.call(addressnf0FDYw, {from: accounts[0]});
		const uint256GCAKFsS = await WeedburnepIfLw3.totalSupply.call({from: accounts[5]});

		assert.equal(booluVma4Rq, true)
		assert.equal(uint256F646DII, BigInt("0"))
		assert.equal(uint256GCAKFsS, BigInt("100000000000000000000000"))
		assert.equal(uint256ZR4DBi5, BigInt("0"))
		assert.equal(uint87mOglA, BigInt("18"))
	});

	it('test for Weedburn', async () => {
		const WeedburnYbOBXgR = await Weedburn.new({from: accounts[0]});
		const uint9bR5CE = BigInt("1369")
		const uintYFmR1M4 = BigInt("835")
		const uintne6J88S = BigInt("1108")
		const addressNiFQnBy = accounts[0]
		const uint256zpBXioW = await WeedburnYbOBXgR.burn.call(uint9bR5CE, {from: accounts[0]});
		await WeedburnYbOBXgR.enableLimitMode.call({from: accounts[0]});
		const uint256gkFgvHC = await WeedburnYbOBXgR.burn.call(uintYFmR1M4, {from: accounts[3]});
		const boolL8lzcyV = await WeedburnYbOBXgR.transfer.call(addressNiFQnBy, uintne6J88S, {from: accounts[3]});
		await WeedburnYbOBXgR.enableDevMode.call({from: accounts[0]});
		const stringH518PcC = await WeedburnYbOBXgR.name.call({from: accounts[2]});

		await expect(WeedburnYbOBXgR.enableLimitMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnOauYHtG = await Weedburn.new({from: accounts[4]});
		const uintfs3iYTP = BigInt("1925")
		const addressbVpC04e = accounts[5]
		const addressx8zd52o = "0x0000000000000000000000000000000000000001"
		const stringxCFUfWi = await WeedburnOauYHtG.symbol.call({from: accounts[3]});
		const boolVR4v1H = await WeedburnOauYHtG.transferFrom.call(addressx8zd52o, addressbVpC04e, uintfs3iYTP, {from: accounts[2]});

		assert.equal(stringxCFUfWi, "Weedburn")
		await expect(WeedburnOauYHtG.transferFrom.call(addressx8zd52o, addressbVpC04e, uintfs3iYTP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnOauYHtG = await Weedburn.new({from: accounts[4]});
		const uintvsDnrpN = BigInt("1929")
		const addressNedJvzs = accounts[5]
		const addressB91Eamw = "0x0000000000000000000000000000000000000001"
		const uint8cwYBgy = await WeedburnOauYHtG.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		await WeedburnOauYHtG.disableDevMode.call({from: accounts[1]});
		const boolVR4v1H = await WeedburnOauYHtG.transferFrom.call(addressB91Eamw, addressNedJvzs, uintvsDnrpN, {from: accounts[2]});

		assert.equal(uint8cwYBgy, BigInt("18"))
		await expect(WeedburnOauYHtG.disableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnOauYHtG = await Weedburn.new({from: accounts[4]});
		const addresshAtKuEC = accounts[3]
		const addressRiLDHk = "0x0000000000000000000000000000000000000001"
		const uintIT3qMpu = BigInt("1411")
		const addressDFt1n3 = accounts[0]
		const addressHSVAiXc = accounts[4]
		const uint256PyYBFoa = await WeedburnOauYHtG.allowance.call(addressRiLDHk, addresshAtKuEC, {from: accounts[0]});
		const boolyeX5Qy7 = await WeedburnOauYHtG.transferFrom.call(addressHSVAiXc, addressDFt1n3, uintIT3qMpu, {from: accounts[3]});
		await WeedburnOauYHtG.enableLimitMode.call({from: accounts[4]});

		assert.equal(uint256PyYBFoa, BigInt("0"))
		await expect(WeedburnOauYHtG.transferFrom.call(addressHSVAiXc, addressDFt1n3, uintIT3qMpu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnYbOBXgR = await Weedburn.new({from: accounts[0]});
		const addressKfqrWQe = accounts[0]
		const addressKiCyifb = accounts[2]
		const addressov8REBH = accounts[1]
		const uintPurGNeo = BigInt("927")
		const addresstA4L4A6 = accounts[5]
		const uintpyugz5k = BigInt("1061")
		const addressbBY0qep = accounts[0]
		const uint256cIIQdhh = await WeedburnYbOBXgR.allowance.call(addressKiCyifb, addressKfqrWQe, {from: accounts[4]});
		const uint256FONpJVs = await WeedburnYbOBXgR.balanceOf.call(addressov8REBH, {from: accounts[3]});
		const boolV8ZrVjI = await WeedburnYbOBXgR.transfer.call(addresstA4L4A6, uintPurGNeo, {from: accounts[0]});
		const boolL8lzcyV = await WeedburnYbOBXgR.transfer.call(addressbBY0qep, uintpyugz5k, {from: accounts[3]});

		assert.equal(boolV8ZrVjI, true)
		assert.equal(uint256FONpJVs, BigInt("0"))
		assert.equal(uint256cIIQdhh, BigInt("0"))
		await expect(WeedburnYbOBXgR.transfer.call(addressbBY0qep, uintpyugz5k, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburncilEyCJ = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const addressjfFUi3s = accounts[0]
		const addressF3i9vKk = accounts[3]
		const uintRWoGjYd = BigInt("1453")
		const addressm2YGHFp = accounts[4]
		const addressnP1GtFy = accounts[2]
		const uintny3JZXa = BigInt("691")
		const addressaf2Qfr = accounts[3]
		const uint2569p08Jp = await WeedburncilEyCJ.allowance.call(addressF3i9vKk, addressjfFUi3s, {from: accounts[1]});
		const addressPcIobiv = await WeedburncilEyCJ.burnFrom.call(addressm2YGHFp, uintRWoGjYd, {from: accounts[4]});
		const stringOsCNOHH = await WeedburncilEyCJ.symbol.call({from: accounts[4]});
		const uint256ZLip2l = await WeedburncilEyCJ.balanceOf.call(addressnP1GtFy, {from: accounts[3]});
		const boolNEO0Hx = await WeedburncilEyCJ.decreaseAllowance.call(addressaf2Qfr, uintny3JZXa, {from: accounts[4]});
		const uint256NKVMEEn = await WeedburncilEyCJ.totalSupply.call({from: accounts[3]});
	});
})