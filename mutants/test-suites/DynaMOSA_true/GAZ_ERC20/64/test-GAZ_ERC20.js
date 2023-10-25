const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ZAbdgfu = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintnHLVnTk = BigInt("187")
		const addressD0iJpCs = accounts[4]
		const addressV80Cgxa = accounts[1]
		const bool3txsQo = await GAZ_ERC20ZAbdgfu.transfer.call(addressD0iJpCs, uintnHLVnTk, {from: accounts[0]});
		const boolpApOhV = await GAZ_ERC20ZAbdgfu.approve.call(addressV80Cgxa, {from: accounts[4]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Sbw33M7 = await GAZ_ERC20.new({from: accounts[1]});
		const uintLzweNJ4 = BigInt("330")
		const addressYTh7zHv = accounts[1]
		const uintiqaBHL7 = BigInt("834")
		const addressCTkhBOo = "0x0000000000000000000000000000000000000001"
		const uintS2gwyCz = BigInt("323")
		const addresseCsLTjB = accounts[4]
		const uintIlVZSJ = BigInt("419")
		const addressg1JXP0L = accounts[2]
		const addressjHQO9nZ = accounts[0]
		const boolSO8TmeV = await GAZ_ERC20Sbw33M7.transfer.call(addressYTh7zHv, uintLzweNJ4, {from: accounts[1]});
//		const boolpzznwm5 = await GAZ_ERC20Sbw33M7.transfer.call(addressCTkhBOo, uintiqaBHL7, {from: accounts[0]});
//		const boolRy58YkP = await GAZ_ERC20Sbw33M7.approve.call(addresseCsLTjB, uintS2gwyCz, {from: accounts[2]});
//		const boolR3MJNXa = await GAZ_ERC20Sbw33M7.transfer.call(addressg1JXP0L, uintIlVZSJ, {from: accounts[2]});
//		const boolT2jdQfi = await GAZ_ERC20Sbw33M7.approve.call(addressjHQO9nZ, {from: accounts[2]});

		assert.equal(boolSO8TmeV, true)
		await expect(GAZ_ERC20Sbw33M7.transfer.call(addressCTkhBOo, uintiqaBHL7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20yRupMVS = await GAZ_ERC20.new({from: accounts[2]});
		const addressoQWR0Ul = accounts[2]
		const uintapvc0wq = BigInt("1558")
		const addressJc3K9rn = accounts[3]
		const uintG0xuEI2 = BigInt("204")
		const addresscSU9FJR = accounts[3]
		const uintAHkuFJc = BigInt("1157")
		const addresswpSUgvU = accounts[3]
		const uint1Cv9B9 = BigInt("384")
		const addressssgVRAn = accounts[2]
//		const boolYstOGY = await GAZ_ERC20yRupMVS.approve.call(addressoQWR0Ul, {from: accounts[0]});
//		const booljy44tvE = await GAZ_ERC20yRupMVS.approve.call(addressJc3K9rn, uintapvc0wq, {from: accounts[5]});
//		const boolcZYYBK6 = await GAZ_ERC20yRupMVS.transfer.call(addresscSU9FJR, uintG0xuEI2, {from: accounts[4]});
//		const boolC01uQEl = await GAZ_ERC20yRupMVS.transfer.call(addresswpSUgvU, uintAHkuFJc, {from: accounts[2]});
//		const boolUknPCwD = await GAZ_ERC20yRupMVS.transfer.call(addressssgVRAn, uint1Cv9B9, {from: accounts[4]});

		await expect(GAZ_ERC20yRupMVS.approve.call(addressoQWR0Ul, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20VhB6geo = await GAZ_ERC20.new({from: accounts[3]});
		const uintnCxxs1c = BigInt("1838")
		const addressPQXHT86 = accounts[1]
		const addressGQVWj00 = accounts[1]
		const boolwrCMHUT = await GAZ_ERC20VhB6geo.approve.call(addressPQXHT86, uintnCxxs1c, {from: accounts[4]});
//		const boolE2totmH = await GAZ_ERC20VhB6geo.approve.call(addressGQVWj00, {from: accounts[0]});

		assert.equal(boolwrCMHUT, true)
		await expect(GAZ_ERC20VhB6geo.approve.call(addressGQVWj00, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ogB8nKR = await GAZ_ERC20.new({from: accounts[5]});
		const uintgCwl98l = BigInt("305")
		const addressGKJZU6O = accounts[3]
		const addressTZwB2Yx = accounts[4]
		const uinto1MQdO1 = BigInt("1055")
		const addressbAEdMiI = accounts[1]
		const uintRN6ax57 = BigInt("477")
		const addressFzszlbo = accounts[5]
		const uinthHqgkPS = BigInt("307")
		const addressgn74P3 = accounts[0]
//		const boolLMgbiGY = await GAZ_ERC20ogB8nKR.transferFrom.call(addressTZwB2Yx, addressGKJZU6O, uintgCwl98l, {from: accounts[1]});
//		const boolyAlmOTL = await GAZ_ERC20ogB8nKR.approve.call(addressbAEdMiI, uinto1MQdO1, {from: accounts[0]});
//		const boolEaDvOr8 = await GAZ_ERC20ogB8nKR.approve.call(addressFzszlbo, uintRN6ax57, {from: accounts[2]});
//		const boolONFF3tD = await GAZ_ERC20ogB8nKR.transfer.call(addressgn74P3, uinthHqgkPS, {from: accounts[4]});

		await expect(GAZ_ERC20ogB8nKR.transferFrom.call(addressTZwB2Yx, addressGKJZU6O, uintgCwl98l, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Id67X9m = await GAZ_ERC20.new({from: accounts[2]});
		const addressjazXkNs = accounts[2]
		const uintHCN5qn5 = BigInt("1962")
		const addresswuWrwgU = accounts[4]
		const addressax41w6Y = accounts[3]
		const uintUvihMIu = BigInt("1565")
		const addressBPsWXvW = accounts[0]
		const uintYJLz4BK = BigInt("1495")
		const addressXb1BZLx = "0x0000000000000000000000000000000000000001"
		const addressWDup0u = accounts[5]
		const addressTQhVpPB = accounts[4]
//		const boolKqW6thb = await GAZ_ERC20Id67X9m.approve.call(addressjazXkNs, {from: accounts[3]});
//		const boolNLm8Avz = await GAZ_ERC20Id67X9m.transferFrom.call(addressax41w6Y, addresswuWrwgU, uintHCN5qn5, {from: accounts[0]});
//		const boolp3ACph = await GAZ_ERC20Id67X9m.approve.call(addressBPsWXvW, uintUvihMIu, {from: accounts[2]});
//		const boolJYiqMc8 = await GAZ_ERC20Id67X9m.transferFrom.call(addressWDup0u, addressXb1BZLx, uintYJLz4BK, {from: accounts[0]});
//		const boolzSRdd9h = await GAZ_ERC20Id67X9m.approve.call(addressTQhVpPB, {from: accounts[3]});

		await expect(GAZ_ERC20Id67X9m.approve.call(addressjazXkNs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ogB8nKR = await GAZ_ERC20.new({from: accounts[5]});
		const addressBSqgiBi = accounts[1]
		const uintYWa8o7p = BigInt("305")
		const addressSHA4jJx = accounts[3]
		const addressFrgZnY = accounts[4]
		const uintt4BBAel = BigInt("1055")
		const addressHZBpKfb = accounts[1]
		const uintSMwVTPk = BigInt("862")
		const addressVe3sbhq = accounts[3]
		const uintBcOYiCj = BigInt("459")
		const addressScdyvvy = accounts[5]
		const uintxjFBXsj = BigInt("307")
		const addressjrEacmc = accounts[0]
//		const booluHzbtp1 = await GAZ_ERC20ogB8nKR.approve.call(addressBSqgiBi, {from: accounts[2]});
//		const boolLMgbiGY = await GAZ_ERC20ogB8nKR.transferFrom.call(addressFrgZnY, addressSHA4jJx, uintYWa8o7p, {from: accounts[1]});
//		const boolyAlmOTL = await GAZ_ERC20ogB8nKR.approve.call(addressHZBpKfb, uintt4BBAel, {from: accounts[0]});
//		const boolpdXr7zY = await GAZ_ERC20ogB8nKR.transfer.call(addressVe3sbhq, uintSMwVTPk, {from: accounts[0]});
//		const boolEaDvOr8 = await GAZ_ERC20ogB8nKR.approve.call(addressScdyvvy, uintBcOYiCj, {from: accounts[2]});
//		const boolONFF3tD = await GAZ_ERC20ogB8nKR.transfer.call(addressjrEacmc, uintxjFBXsj, {from: accounts[4]});

		await expect(GAZ_ERC20ogB8nKR.approve.call(addressBSqgiBi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20tbDxFuu = await GAZ_ERC20.new({from: accounts[1]});
		const uintXcV7DcN = BigInt("1756")
		const addressguBs0sz = accounts[1]
		const uint07z9C9 = BigInt("1706")
		const addressgZksdry = accounts[4]
		const addressfnaBJm3 = accounts[4]
		const addresshMCCHJ8 = accounts[0]
		const uint8ZMv5M = BigInt("1757")
		const addressD0kqKxG = "0x0000000000000000000000000000000000000001"
		const addresscuhJmkS = accounts[2]
		const boolcNRrfit = await GAZ_ERC20tbDxFuu.transfer.call(addressguBs0sz, uintXcV7DcN, {from: accounts[1]});
		const boolj9r1z3e = await GAZ_ERC20tbDxFuu.approve.call(addressgZksdry, uint07z9C9, {from: accounts[1]});
//		const boolxjnAhGL = await GAZ_ERC20tbDxFuu.approve.call(addressfnaBJm3, {from: accounts[4]});
//		const boolU5MBUj = await GAZ_ERC20tbDxFuu.approve.call(addresshMCCHJ8, {from: "0x0000000000000000000000000000000000000001"});
//		const boolkryKQc0 = await GAZ_ERC20tbDxFuu.transferFrom.call(addresscuhJmkS, addressD0kqKxG, uint8ZMv5M, {from: accounts[0]});

		assert.equal(boolcNRrfit, true)
		assert.equal(boolj9r1z3e, true)
		await expect(GAZ_ERC20tbDxFuu.approve.call(addressfnaBJm3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Id67X9m = await GAZ_ERC20.new({from: accounts[2]});
		const addresshbLW8Rt = accounts[1]
		const uintBHF9Fxr = BigInt("1962")
		const addressvWnLnNV = accounts[5]
		const addresss2Follw = accounts[3]
//		const boolaNPEQzp = await GAZ_ERC20Id67X9m.approve.call(addresshbLW8Rt, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNLm8Avz = await GAZ_ERC20Id67X9m.transferFrom.call(addresss2Follw, addressvWnLnNV, uintBHF9Fxr, {from: accounts[0]});

		await expect(GAZ_ERC20Id67X9m.approve.call(addresshbLW8Rt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Id67X9m = await GAZ_ERC20.new({from: accounts[2]});
		const addressOJImHqA = accounts[3]
		const uintzAltHIC = BigInt("1962")
		const addressimNhP5B = accounts[5]
		const addressxLuYkr9 = accounts[3]
		const addressMsiXdM9 = accounts[2]
//		const boolxjste57 = await GAZ_ERC20Id67X9m.approve.call(addressOJImHqA, {from: accounts[1]});
//		const boolNLm8Avz = await GAZ_ERC20Id67X9m.transferFrom.call(addressxLuYkr9, addressimNhP5B, uintzAltHIC, {from: accounts[0]});
//		const bools7cPAGn = await GAZ_ERC20Id67X9m.approve.call(addressMsiXdM9, {from: accounts[1]});

		await expect(GAZ_ERC20Id67X9m.approve.call(addressOJImHqA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Id67X9m = await GAZ_ERC20.new({from: accounts[2]});
		const addressy5Z5Fl = accounts[1]
		const uintvzD1qDI = BigInt("1962")
		const addressOq0un0a = accounts[4]
		const addressUCD995O = accounts[3]
		const uintVrAxfRt = BigInt("375")
		const addressTGKMiDg = accounts[3]
//		const boolYXqyzVa = await GAZ_ERC20Id67X9m.approve.call(addressy5Z5Fl, {from: accounts[5]});
//		const boolNLm8Avz = await GAZ_ERC20Id67X9m.transferFrom.call(addressUCD995O, addressOq0un0a, uintvzD1qDI, {from: accounts[0]});
//		const boolx0grEF = await GAZ_ERC20Id67X9m.transfer.call(addressTGKMiDg, uintVrAxfRt, {from: accounts[4]});

		await expect(GAZ_ERC20Id67X9m.approve.call(addressy5Z5Fl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})