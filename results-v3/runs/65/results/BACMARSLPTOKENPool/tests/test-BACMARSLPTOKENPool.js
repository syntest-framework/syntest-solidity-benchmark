const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const stringsFAWUMU = "nYUnGPvZlM7K18xldzj624g9iuCQVSsO6KWBINcfawAK4SSfHBDlRFdWAg7HUhiujkngROX"
		const stringneZU3Pk = "tHP7o8EhYH0VMsjXrEMB2ri34ui3w7y4vJxK"
		const uintW8MAnLv = BigInt("206")
		const BACMARSLPTOKENPoolCbn8dhl = await BACMARSLPTOKENPool.new(stringsFAWUMU, stringneZU3Pk, uintW8MAnLv, {from: accounts[2]});
		const addressjQ2SOoc = accounts[2]
		const addressExRnB7 = accounts[1]
		const addressiN4qOd3 = accounts[0]
		const uint256vqeymuN = await BACMARSLPTOKENPoolCbn8dhl.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256H4JFk9e = await BACMARSLPTOKENPoolCbn8dhl.lastTimeRewardApplicable.call({from: accounts[4]});
		const addressT9qw3t0 = await BACMARSLPTOKENPoolCbn8dhl.updateReward.call(addressjQ2SOoc, {from: accounts[4]});
		await BACMARSLPTOKENPoolCbn8dhl.exit.call({from: accounts[1]});
		const uint256agJ5Bo = await BACMARSLPTOKENPoolCbn8dhl.earned.call(addressExRnB7, {from: "0x0000000000000000000000000000000000000001"});
		const uint256a0pczKN = await BACMARSLPTOKENPoolCbn8dhl.balanceOf.call(addressiN4qOd3, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressF0zYwG7 = accounts[3]
		const addressVUYB2P = accounts[4]
		const addressZuxF0f = accounts[3]
		const BACMARSLPTOKENPoolojprZVM = await BACMARSLPTOKENPool.new(addressF0zYwG7, addressVUYB2P, addressZuxF0f, {from: accounts[4]});
		const uintA5LQh6h = BigInt("1193")
		const addressKRzne1p = accounts[4]
		const byteJ09au6a = "0x1d0c071c180e01141e1315071f1f1e1d0c151312161505110b070116120e0c14"
		const byteKVdqsvg = "0x030f14001a091c14021c1a0c08021b1a07020f11031e0b0202020a18061d1716"
		const uintHYTTku = BigInt("204")
		const uintLLT7Hgd = BigInt("1061")
		const uintxeCOK0s = BigInt("1258")
		const addressiVYYvyn = accounts[0]
		await BACMARSLPTOKENPoolojprZVM.nonReentrant.call({from: accounts[1]});
		const uint256fNHqEM = await BACMARSLPTOKENPoolojprZVM.withdraw.call(uintA5LQh6h, {from: accounts[0]});
		const uint256L3rZskL = await BACMARSLPTOKENPoolojprZVM.rewardPerToken.call({from: accounts[0]});
		const uint256VNEnftG = await BACMARSLPTOKENPoolojprZVM.balanceOf.call(addressKRzne1p, {from: accounts[5]});
		const uint256XkeKzFr = await BACMARSLPTOKENPoolojprZVM.stakeWithPermit.call(uintxeCOK0s, uintLLT7Hgd, uintHYTTku, byteKVdqsvg, byteJ09au6a, {from: accounts[2]});
		const uint256RR3qDDY = await BACMARSLPTOKENPoolojprZVM.balanceOf.call(addressiVYYvyn, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolojprZVM.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUX6m6OO = "g3Tdkt2OBCJyicFL20cVfbPcwQ4j2RzC9hmYr1ndyrWMod1hNMJx6xL49CrtiwGwp3h"
		const stringVTWvcE = "gH49v8vSWySwHvP3SROAEjnK9dQna1sQHwW3OjdTqBkOQlp6htie3"
		const uintPuZ9vxB = BigInt("150")
		const BACMARSLPTOKENPoolAGjC4zq = await BACMARSLPTOKENPool.new(stringUX6m6OO, stringVTWvcE, uintPuZ9vxB, {from: accounts[1]});
		const addresscECRXe = accounts[5]
		const uintP0isiAi = BigInt("530")
		const uint256frLbYCF = await BACMARSLPTOKENPoolAGjC4zq.balanceOf.call(addresscECRXe, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VYlqrZB = await BACMARSLPTOKENPoolAGjC4zq.withdraw.call(uintP0isiAi, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrdCTxfZ = "ixsukGg3uAIC9dUgiThHLzAqRCz3Y"
		const stringIGxWmKC = "gK85dnTTQps8dcWpsTttdhyzMqBAzgX5Se2m9J6tKlAYaR1BAxt2nkZVx84rU94bz6vMP0KnHBoMFlaSCV0J847PA08XcCS"
		const uintBuOmxI4 = BigInt("233")
		const BACMARSLPTOKENPoolGCpxHof = await BACMARSLPTOKENPool.new(stringrdCTxfZ, stringIGxWmKC, uintBuOmxI4, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LrzSk0E = await BACMARSLPTOKENPoolGCpxHof.totalSupply.call({from: accounts[4]});
		await BACMARSLPTOKENPoolGCpxHof.exit.call({from: accounts[3]});
		await BACMARSLPTOKENPoolGCpxHof.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresscoij4Z5 = accounts[1]
		const addresst6PQ8WC = accounts[0]
		const addressPXdKOyG = accounts[4]
		const BACMARSLPTOKENPoolVL184Jc = await BACMARSLPTOKENPool.new(addresscoij4Z5, addresst6PQ8WC, addressPXdKOyG, {from: accounts[4]});
		const uintr91pDG7 = BigInt("400")
		const addressYhUkh4y = accounts[3]
		await BACMARSLPTOKENPoolVL184Jc.exit.call({from: accounts[0]});
		const uint256Ee1sFCp = await BACMARSLPTOKENPoolVL184Jc.totalSupply.call({from: accounts[4]});
		const uint256vhHvT7 = await BACMARSLPTOKENPoolVL184Jc.withdraw.call(uintr91pDG7, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolVL184Jc.getReward.call({from: accounts[4]});
		const uint256l0xw5vP = await BACMARSLPTOKENPoolVL184Jc.earned.call(addressYhUkh4y, {from: accounts[4]});

		await expect(BACMARSLPTOKENPoolVL184Jc.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSUDMEno = "L3ZzjdibErx6dQnqLkqBMzB5K5lrXmdTyDh8l"
		const stringCM3pL6H = "gmD9q9X6dqy"
		const uintZSo4XFG = BigInt("173")
		const BACMARSLPTOKENPooldqHkGDD = await BACMARSLPTOKENPool.new(stringSUDMEno, stringCM3pL6H, uintZSo4XFG, {from: accounts[2]});
		const bytejXIGgh = "0x1a10021706041c021e121e0a1c15151d141c10161305151713170d180e1c1d17"
		const bytelUS7uVt = "0x0814040519071c02060d02180d0f1e0a1c160e0600181720170805141e19020d"
		const uintEG9hQzV = BigInt("234")
		const uintHeSKUBe = BigInt("1326")
		const uint1PJZMB = BigInt("1043")
		const addressNAdc0U7 = accounts[0]
		const uint256vsTxSW = await BACMARSLPTOKENPooldqHkGDD.stakeWithPermit.call(uint1PJZMB, uintHeSKUBe, uintEG9hQzV, bytelUS7uVt, bytejXIGgh, {from: accounts[2]});
		const uint256QvgMzQn = await BACMARSLPTOKENPooldqHkGDD.balanceOf.call(addressNAdc0U7, {from: accounts[3]});
		const uint256QtsnCcr = await BACMARSLPTOKENPooldqHkGDD.lastTimeRewardApplicable.call({from: accounts[1]});
		await BACMARSLPTOKENPooldqHkGDD.nonReentrant.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringh4d2QPb = "aOrYg3HcicZnwIMzygVziEta7bfqkEsiSoADicJyeXdYYTokTCVoHFLByiRXJl5yvEzDMwlYIgVCuyyfNuwREaoq3VkAlI2DY"
		const stringGKrzgUB = "8S2pj7U06HYxy35KSrfhzaMUu3GEsnMzXnXKINxjLCPDC9Qk"
		const uintiX8QfsJ = BigInt("212")
		const BACMARSLPTOKENPoolTXlsUkf = await BACMARSLPTOKENPool.new(stringh4d2QPb, stringGKrzgUB, uintiX8QfsJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint1N0ITV = BigInt("1878")
		const uintrXOX3g = BigInt("1909")
		const uint256Ggy54kt = await BACMARSLPTOKENPoolTXlsUkf.notifyRewardAmount.call(uint1N0ITV, {from: accounts[3]});
		const uint256xGSpxFf = await BACMARSLPTOKENPoolTXlsUkf.notifyRewardAmount.call(uintrXOX3g, {from: accounts[1]});
		await BACMARSLPTOKENPoolTXlsUkf.nonReentrant.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXhP5msU = "iG0NAH0QDNibN9Y8dKdr8hTDtu1I191fJkuJOUIR3j94QLdNYd"
		const stringBGHqGJ5 = "iebnbO8yQOIt4ip5hNujvbG6ggw3kcgT"
		const uintyyAly0c = BigInt("153")
		const BACMARSLPTOKENPoolV3MkJ7 = await BACMARSLPTOKENPool.new(stringXhP5msU, stringBGHqGJ5, uintyyAly0c, {from: accounts[0]});
		const uintDXj1cs2 = BigInt("1325")
		const uintJjsrbzv = BigInt("757")
		const addressR7BVWq7 = "0x0000000000000000000000000000000000000001"
		const addressw7vWvq = accounts[0]
		const uint256V1Wur8a = await BACMARSLPTOKENPoolV3MkJ7.withdraw.call(uintDXj1cs2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256rGhR1yF = await BACMARSLPTOKENPoolV3MkJ7.withdraw.call(uintJjsrbzv, {from: accounts[0]});
		const uint256sDvnY2Y = await BACMARSLPTOKENPoolV3MkJ7.balanceOf.call(addressR7BVWq7, {from: accounts[4]});
		const uint8twOptot = await BACMARSLPTOKENPoolV3MkJ7.decimals.call({from: accounts[0]});
		const addressKKD8DK = await BACMARSLPTOKENPoolV3MkJ7.updateReward.call(addressw7vWvq, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressQOm0D5L = accounts[1]
		const addressyiT3FK = accounts[0]
		const addressZlQrX4J = accounts[4]
		const BACMARSLPTOKENPoolVL184Jc = await BACMARSLPTOKENPool.new(addressQOm0D5L, addressyiT3FK, addressZlQrX4J, {from: accounts[4]});
		const uintuOxiXHj = BigInt("400")
		const addressoL8xTqQ = accounts[3]
		const uint256Ee1sFCp = await BACMARSLPTOKENPoolVL184Jc.totalSupply.call({from: accounts[4]});
		const uint256vhHvT7 = await BACMARSLPTOKENPoolVL184Jc.withdraw.call(uintuOxiXHj, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolVL184Jc.getReward.call({from: accounts[4]});
		const uint256rOHhXQa = await BACMARSLPTOKENPoolVL184Jc.rewardPerToken.call({from: accounts[3]});
		const uint256l0xw5vP = await BACMARSLPTOKENPoolVL184Jc.earned.call(addressoL8xTqQ, {from: accounts[4]});

		assert.equal(uint256Ee1sFCp, BigInt("0"))
		await expect(BACMARSLPTOKENPoolVL184Jc.withdraw.call(uintuOxiXHj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressJFE29K7 = "0x0000000000000000000000000000000000000001"
		const addressN8Mx6va = accounts[5]
		const addressvOo1wuD = accounts[5]
		const BACMARSLPTOKENPoolMj8s6K = await BACMARSLPTOKENPool.new(addressJFE29K7, addressN8Mx6va, addressvOo1wuD, {from: accounts[3]});
		const bytelL1x2A = "0x0d061e1c0b0f1b01160311060a000b0a09120614130d0f08150815031019021f"
		const bytepeVfYwB = "0x0c05141c030211160a181e19000f0c02130713160b120b030e16031403160510"
		const uintHvwBqcK = BigInt("66")
		const uintqLEThFk = BigInt("302")
		const uintWReB49j = BigInt("1712")
		const uint256VNlqj3U = await BACMARSLPTOKENPoolMj8s6K.stakeWithPermit.call(uintWReB49j, uintqLEThFk, uintHvwBqcK, bytepeVfYwB, bytelL1x2A, {from: accounts[5]});
		const stringJzxud2l = await BACMARSLPTOKENPoolMj8s6K.symbol.call({from: accounts[3]});
		await BACMARSLPTOKENPoolMj8s6K.nonReentrant.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPoolMj8s6K.stakeWithPermit.call(uintWReB49j, uintqLEThFk, uintHvwBqcK, bytepeVfYwB, bytelL1x2A, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressZVnXFqi = accounts[4]
		const addressnh3V0Fc = accounts[1]
		const addresswfxvlpb = accounts[2]
		const BACMARSLPTOKENPoolrkmYQD3 = await BACMARSLPTOKENPool.new(addressZVnXFqi, addressnh3V0Fc, addresswfxvlpb, {from: accounts[0]});
		const addressNGLLm0l = accounts[2]
		const uintbv0KRpQ = BigInt("409")
		const uint256KuhJuE9 = await BACMARSLPTOKENPoolrkmYQD3.balanceOf.call(addressNGLLm0l, {from: accounts[1]});
		const uint256NCBGKG = await BACMARSLPTOKENPoolrkmYQD3.stake.call(uintbv0KRpQ, {from: accounts[0]});
		const uint256tajqTe4 = await BACMARSLPTOKENPoolrkmYQD3.getRewardForDuration.call({from: accounts[0]});
		const stringJa9IOvD = await BACMARSLPTOKENPoolrkmYQD3.symbol.call({from: accounts[0]});
		const uint256GteDS6s = await BACMARSLPTOKENPoolrkmYQD3.totalSupply.call({from: accounts[2]});
		await BACMARSLPTOKENPoolrkmYQD3.onlyRewardsDistribution.call({from: accounts[4]});

		assert.equal(uint256KuhJuE9, BigInt("0"))
		await expect(BACMARSLPTOKENPoolrkmYQD3.stake.call(uintbv0KRpQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressKqOJ9ym = "0x0000000000000000000000000000000000000001"
		const addressYuKOdC = accounts[5]
		const addressdv6jzNu = accounts[5]
		const BACMARSLPTOKENPoolMj8s6K = await BACMARSLPTOKENPool.new(addressKqOJ9ym, addressYuKOdC, addressdv6jzNu, {from: accounts[3]});
		const byteqSF2PI = "0x0d061e1c0b0f1b01160311060a000b0a09120614130d0f08150815031019021f"
		const byteQgmHSN = "0x0c05141c030211160a181e19000f0c02130713160b120b030e16031403160510"
		const uintNGUxJD4 = BigInt("37")
		const uintyws16Cn = BigInt("297")
		const uintlHLTE47 = BigInt("1712")
		await BACMARSLPTOKENPoolMj8s6K.getReward.call({from: accounts[2]});
		const uint256VNlqj3U = await BACMARSLPTOKENPoolMj8s6K.stakeWithPermit.call(uintlHLTE47, uintyws16Cn, uintNGUxJD4, byteQgmHSN, byteqSF2PI, {from: accounts[5]});

		await expect(BACMARSLPTOKENPoolMj8s6K.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringo3ay86 = "5GIV4nWV1Vac9SUrY9wTGaU2pROksnpzFHUQt3ImPK"
		const stringiD3CaXK = "IV4nnfCaAfkDEp8G9xguUqlWnS7l9n7lvlY81gGVmywuGAIp8RmWARgIP8bWP0mn"
		const uintOxJUyfZ = BigInt("75")
		const BACMARSLPTOKENPoolFY5j6K2 = await BACMARSLPTOKENPool.new(stringo3ay86, stringiD3CaXK, uintOxJUyfZ, {from: accounts[3]});
		const byteFkngI72 = "0x200006141101081a1b191f0e161f070f190b02091d001607030118171f09171b"
		const byteiTWfKVt = "0x0b17180d0c0f07191f09200a091618080f13011b1001110e0a061c1f16191e06"
		const uintTlgxwNN = BigInt("79")
		const uintIUTUfP7 = BigInt("860")
		const uintEnqS2rk = BigInt("1544")
		const uint256fB2jZ7f = await BACMARSLPTOKENPoolFY5j6K2.stakeWithPermit.call(uintEnqS2rk, uintIUTUfP7, uintTlgxwNN, byteiTWfKVt, byteFkngI72, {from: accounts[4]});
		const uint256PlaCfqw = await BACMARSLPTOKENPoolFY5j6K2.totalSupply.call({from: accounts[1]});
		await BACMARSLPTOKENPoolFY5j6K2.nonReentrant.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresscGB1f0I = accounts[4]
		const addressHLlhSac = accounts[1]
		const addressQEiIJ1E = accounts[2]
		const BACMARSLPTOKENPoolrkmYQD3 = await BACMARSLPTOKENPool.new(addresscGB1f0I, addressHLlhSac, addressQEiIJ1E, {from: accounts[0]});
		const addressgvklSff = accounts[5]
		const uintiEQ4KkC = BigInt("409")
		const uint256KuhJuE9 = await BACMARSLPTOKENPoolrkmYQD3.balanceOf.call(addressgvklSff, {from: accounts[1]});
		const uint256NCBGKG = await BACMARSLPTOKENPoolrkmYQD3.stake.call(uintiEQ4KkC, {from: accounts[0]});
		const uint256tajqTe4 = await BACMARSLPTOKENPoolrkmYQD3.getRewardForDuration.call({from: accounts[0]});
		const stringJa9IOvD = await BACMARSLPTOKENPoolrkmYQD3.symbol.call({from: accounts[0]});
		const stringSk4fBBl = await BACMARSLPTOKENPoolrkmYQD3.symbol.call({from: accounts[3]});
		await BACMARSLPTOKENPoolrkmYQD3.onlyRewardsDistribution.call({from: accounts[4]});

		assert.equal(uint256KuhJuE9, BigInt("0"))
		await expect(BACMARSLPTOKENPoolrkmYQD3.stake.call(uintiEQ4KkC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressLb2NWt0 = "0x0000000000000000000000000000000000000001"
		const addressUiMDjZV = accounts[5]
		const addresserNmqzG = accounts[5]
		const BACMARSLPTOKENPoolMj8s6K = await BACMARSLPTOKENPool.new(addressLb2NWt0, addressUiMDjZV, addresserNmqzG, {from: accounts[3]});
		const uintZ7AH7JS = BigInt("1835")
		const byteMYr66CL = "0x180f1d201e1b1a000c1f1a0a051908051f01021c1b020b0f110c101e0f1c150e"
		const bytekOHuxqq = "0x050d1207071e181806050a1c03070f000711051619060d1708110c131d171f06"
		const uintZ3Q599M = BigInt("113")
		const uintFw5jkK4 = BigInt("1960")
		const uintyCwcGAy = BigInt("807")
		const byteiRVVDqb = "0x0d061e1c0b0f1b01160311060a000b0a09120614130d0f08150815031019021f"
		const byteOtUtruL = "0x0c05141c030211160a181e19000f0c02130713160b120b030e16031403160510"
		const uintZHcE2v = BigInt("36")
		const uintiBUtvDI = BigInt("282")
		const uintsBaBZ4c = BigInt("1712")
		const uint8uR6RI = BigInt("1654")
		await BACMARSLPTOKENPoolMj8s6K.exit.call({from: accounts[2]});
		const uint256oWlz7H9 = await BACMARSLPTOKENPoolMj8s6K.withdraw.call(uintZ7AH7JS, {from: accounts[3]});
		const uint256TLQn7w = await BACMARSLPTOKENPoolMj8s6K.stakeWithPermit.call(uintyCwcGAy, uintFw5jkK4, uintZ3Q599M, bytekOHuxqq, byteMYr66CL, {from: accounts[3]});
		const uint256OOn5YOP = await BACMARSLPTOKENPoolMj8s6K.rewardPerToken.call({from: accounts[0]});
		const uint256VNlqj3U = await BACMARSLPTOKENPoolMj8s6K.stakeWithPermit.call(uintsBaBZ4c, uintiBUtvDI, uintZHcE2v, byteOtUtruL, byteiRVVDqb, {from: accounts[5]});
		const uint256tuIguNi = await BACMARSLPTOKENPoolMj8s6K.stake.call(uint8uR6RI, {from: accounts[0]});
		const stringJzxud2l = await BACMARSLPTOKENPoolMj8s6K.symbol.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolMj8s6K.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressPHl4kO = "0x0000000000000000000000000000000000000001"
		const address2eJrev = accounts[5]
		const address5octJF = accounts[5]
		const BACMARSLPTOKENPoolMj8s6K = await BACMARSLPTOKENPool.new(addressPHl4kO, address2eJrev, address5octJF, {from: accounts[3]});
		const addressMre4hlj = accounts[4]
		const uintWZ98L6C = BigInt("1835")
		const byteK3TkT21 = "0x180f1d201e1b1a000c1f1a0a051908051f01021c1b020b0f110c101e0f1c150e"
		const bytedJKR41S = "0x050d1207071e181806050a1c03070f000711051619060d1708110c131d171f06"
		const uintwJk8HE2 = BigInt("113")
		const uinteRHxVua = BigInt("1960")
		const uintuoKWcX1 = BigInt("807")
		const bytejcbs03b = "0x0d061e1c0b0f1b01160311060a000b0a09120614130d0f08150815031019021f"
		const byteuxAyHIp = "0x0c05141c030211160a181e19000f0c02130713160b120b030e16031403160510"
		const uintbEx8PLa = BigInt("36")
		const uintJlgZWxb = BigInt("282")
		const uintihWnLXH = BigInt("1712")
		const uintVnDBuut = BigInt("1654")
		const uint256pkzNJa = await BACMARSLPTOKENPoolMj8s6K.earned.call(addressMre4hlj, {from: accounts[4]});
		const uint256oWlz7H9 = await BACMARSLPTOKENPoolMj8s6K.withdraw.call(uintWZ98L6C, {from: accounts[3]});
		const uint256TLQn7w = await BACMARSLPTOKENPoolMj8s6K.stakeWithPermit.call(uintuoKWcX1, uinteRHxVua, uintwJk8HE2, bytedJKR41S, byteK3TkT21, {from: accounts[3]});
		const uint256OOn5YOP = await BACMARSLPTOKENPoolMj8s6K.rewardPerToken.call({from: accounts[0]});
		const uint256VNlqj3U = await BACMARSLPTOKENPoolMj8s6K.stakeWithPermit.call(uintihWnLXH, uintJlgZWxb, uintbEx8PLa, byteuxAyHIp, bytejcbs03b, {from: accounts[5]});
		const uint256tuIguNi = await BACMARSLPTOKENPoolMj8s6K.stake.call(uintVnDBuut, {from: accounts[0]});
		const stringJzxud2l = await BACMARSLPTOKENPoolMj8s6K.symbol.call({from: accounts[3]});

		assert.equal(uint256pkzNJa, BigInt("0"))
		await expect(BACMARSLPTOKENPoolMj8s6K.withdraw.call(uintWZ98L6C, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressMKP3BqS = accounts[0]
		const addressC8SUDGS = accounts[0]
		const addressDGa8EPC = accounts[4]
		const BACMARSLPTOKENPoolou74G1h = await BACMARSLPTOKENPool.new(addressMKP3BqS, addressC8SUDGS, addressDGa8EPC, {from: accounts[0]});
		const addressqoVx0Lp = accounts[1]
		const uintXTXzKE7 = BigInt("1753")
		const uint256leJHNlH = await BACMARSLPTOKENPoolou74G1h.getRewardForDuration.call({from: accounts[0]});
		const uint256svhumGn = await BACMARSLPTOKENPoolou74G1h.balanceOf.call(addressqoVx0Lp, {from: accounts[2]});
		const uint8gJUgMfT = await BACMARSLPTOKENPoolou74G1h.decimals.call({from: accounts[5]});
		const uint256vpkX3uF = await BACMARSLPTOKENPoolou74G1h.notifyRewardAmount.call(uintXTXzKE7, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256leJHNlH, BigInt("0"))
		assert.equal(uint256svhumGn, BigInt("0"))
		await expect(BACMARSLPTOKENPoolou74G1h.decimals.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringD5PSC6a = "Vrlh9a"
		const stringGu7xyVx = "O"
		const uintdW4SXxV = BigInt("191")
		const BACMARSLPTOKENPoolX5gAVDB = await BACMARSLPTOKENPool.new(stringD5PSC6a, stringGu7xyVx, uintdW4SXxV, {from: accounts[4]});
		const uintL009Cyb = BigInt("981")
		await BACMARSLPTOKENPoolX5gAVDB.onlyRewardsDistribution.call({from: accounts[2]});
		await BACMARSLPTOKENPoolX5gAVDB.exit.call({from: accounts[2]});
		const uint256pqa5lT6 = await BACMARSLPTOKENPoolX5gAVDB.notifyRewardAmount.call(uintL009Cyb, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressmZkiw5r = "0x0000000000000000000000000000000000000001"
		const addressKQzHnHp = accounts[5]
		const addressko682Lx = accounts[5]
		const BACMARSLPTOKENPoolMj8s6K = await BACMARSLPTOKENPool.new(addressmZkiw5r, addressKQzHnHp, addressko682Lx, {from: accounts[3]});
		const uintucjDwoQ = BigInt("855")
		await BACMARSLPTOKENPoolMj8s6K.getReward.call({from: accounts[2]});
		const uint256ewLpOWj = await BACMARSLPTOKENPoolMj8s6K.notifyRewardAmount.call(uintucjDwoQ, {from: accounts[2]});

		await expect(BACMARSLPTOKENPoolMj8s6K.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringi65rrcs = "VjCujNN5iuWq4Jv"
		const stringQ4MJGyj = "Xx85O6uRJNKpv5iN2cJrNsSVEgiAQJH31cuWBtNMI3qsPrFGpysJQvXi39HfQM0kRrNwwyAQYqxjG3oNWG9QHFmL4ghpTp"
		const uintMB05hgu = BigInt("153")
		const BACMARSLPTOKENPoolVuBHK2 = await BACMARSLPTOKENPool.new(stringi65rrcs, stringQ4MJGyj, uintMB05hgu, {from: accounts[0]});
		const addressjuHGcHx = accounts[2]
		await BACMARSLPTOKENPoolVuBHK2.nonReentrant.call({from: accounts[0]});
		const addressOpJzlLG = await BACMARSLPTOKENPoolVuBHK2.updateReward.call(addressjuHGcHx, {from: accounts[2]});
		const uint256TPeBCAU = await BACMARSLPTOKENPoolVuBHK2.totalSupply.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOVLX099 = "5wMx1VW92nhSyJTxY9TtO5Er8CL8HpqNq9hWm1EsRSkPRu7ksqXqJCvkftd4"
		const stringbajbW9R = "e76tPDuzKENl5OpM8UMqNzqRer2AjFT83wNLOYYMuuAKFuRQBG4f8873EnC2CtDa8JTJ"
		const uintARodFs9 = BigInt("166")
		const BACMARSLPTOKENPoolZzGT2lH = await BACMARSLPTOKENPool.new(stringOVLX099, stringbajbW9R, uintARodFs9, {from: accounts[3]});
		const uintZFdAMZ = BigInt("303")
		const uinto9aIK0U = BigInt("1020")
		const uint256noU6SIt = await BACMARSLPTOKENPoolZzGT2lH.stake.call(uintZFdAMZ, {from: accounts[0]});
		await BACMARSLPTOKENPoolZzGT2lH.nonReentrant.call({from: accounts[4]});
		const uint8SYAuvSz = await BACMARSLPTOKENPoolZzGT2lH.decimals.call({from: accounts[1]});
		const uint256dR73oWJ = await BACMARSLPTOKENPoolZzGT2lH.withdraw.call(uinto9aIK0U, {from: accounts[5]});
		const uint8tIiXz7X = await BACMARSLPTOKENPoolZzGT2lH.decimals.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringocUDvjt = "EawwRvg3ZbqXlhMyFzV6sqHGM19"
		const stringe25b5Ww = "TFX9Vdkltr3uFbmtE00ciBOvKdl4CnOTi7XWfhGbgQCsqQo1Fn6ydYuGQOOM7NB8CJzDkvzOxYqxNFoY"
		const uint411CMp = BigInt("124")
		const BACMARSLPTOKENPoolyhiIbmJ = await BACMARSLPTOKENPool.new(stringocUDvjt, stringe25b5Ww, uint411CMp, {from: accounts[2]});
		const uintfuYR0bS = BigInt("1085")
		const uintpOM1S1e = BigInt("233")
		const byteCgcuwZc = "0x0b071a1e030110070e131f051b12011e011f17190e1c070f0211050a0e111c04"
		const byteeUty660 = "0x081a060201011f17010c100e131017030d1e1017081b1f011f0d1914031b0a14"
		const uintNMZ73Po = BigInt("10")
		const uintBiCS71v = BigInt("1479")
		const uintlnjH43z = BigInt("1471")
		const uint256OedV6yk = await BACMARSLPTOKENPoolyhiIbmJ.withdraw.call(uintfuYR0bS, {from: accounts[0]});
		await BACMARSLPTOKENPoolyhiIbmJ.exit.call({from: accounts[1]});
		const stringZsxE1az = await BACMARSLPTOKENPoolyhiIbmJ.symbol.call({from: accounts[1]});
		const uint2569b3dt2 = await BACMARSLPTOKENPoolyhiIbmJ.stake.call(uintpOM1S1e, {from: accounts[3]});
		const uint256HgORFHZ = await BACMARSLPTOKENPoolyhiIbmJ.stakeWithPermit.call(uintlnjH43z, uintBiCS71v, uintNMZ73Po, byteeUty660, byteCgcuwZc, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJIhuSsJ = "TUZRdUYFdniN3qQH32Lwy5x6621WB3yM7CoQttxwf3cfJP7Ha1"
		const stringVXNss9q = "9ORCdonvbthdUuM6RJmR7rJGst8299L5stF6shGo2oDBGJifytUolnWM8fgQiS0M9S"
		const uintxYW8f3 = BigInt("169")
		const BACMARSLPTOKENPoolqiRb4c0 = await BACMARSLPTOKENPool.new(stringJIhuSsJ, stringVXNss9q, uintxYW8f3, {from: accounts[1]});
		const uint256WfYHWW = await BACMARSLPTOKENPoolqiRb4c0.getRewardForDuration.call({from: accounts[3]});
		await BACMARSLPTOKENPoolqiRb4c0.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringk0ZGM3T = "lMdzaTPgBlKmsOjFGpwANoz0cYUCsOtfaX7B"
		const stringSGwmJc6 = "SSJzB5pGhyxaFzIxzWvbjX204LlH7AG"
		const uintMe2L97h = BigInt("238")
		const BACMARSLPTOKENPoolQDGVavG = await BACMARSLPTOKENPool.new(stringk0ZGM3T, stringSGwmJc6, uintMe2L97h, {from: "0x0000000000000000000000000000000000000001"});
		const uintEuMgkXa = BigInt("356")
		const addressGZkbvgq = "0x0000000000000000000000000000000000000001"
		const uint256zqoe4TI = await BACMARSLPTOKENPoolQDGVavG.getRewardForDuration.call({from: accounts[2]});
		const uint256ApzCQVI = await BACMARSLPTOKENPoolQDGVavG.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256Tiy6ht = await BACMARSLPTOKENPoolQDGVavG.withdraw.call(uintEuMgkXa, {from: accounts[4]});
		await BACMARSLPTOKENPoolQDGVavG.nonReentrant.call({from: accounts[0]});
		await BACMARSLPTOKENPoolQDGVavG.exit.call({from: accounts[3]});
		const uint256SSnZWM4 = await BACMARSLPTOKENPoolQDGVavG.earned.call(addressGZkbvgq, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressyEuAeWi = "0x0000000000000000000000000000000000000001"
		const addressVwHX2h4 = accounts[5]
		const addressUfL0zDJ = accounts[5]
		const BACMARSLPTOKENPoolMj8s6K = await BACMARSLPTOKENPool.new(addressyEuAeWi, addressVwHX2h4, addressUfL0zDJ, {from: accounts[3]});
		const byteP3fgcRe = "0x0d061e1c0b0f1bffffffff160311060a000b0a09120614130d0f08150815031019021f"
		const byteg7oiJLS = "0x0c05141c030211160a181e19000f0c02130713160b120b030e16031403160510"
		const uintbFzgpty = BigInt("37")
		const uintJBinBEJ = BigInt("297")
		const uintIzpl8G = BigInt("1712")
		const uint256VNlqj3U = await BACMARSLPTOKENPoolMj8s6K.stakeWithPermit.call(uintIzpl8G, uintJBinBEJ, uintbFzgpty, byteg7oiJLS, byteP3fgcRe, {from: accounts[5]});
		const uint8KnNL44W = await BACMARSLPTOKENPoolMj8s6K.decimals.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolMj8s6K.stakeWithPermit.call(uintIzpl8G, uintJBinBEJ, uintbFzgpty, byteg7oiJLS, byteP3fgcRe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOP7eibO = "rdgOdk3AEWjni869JsGXq5jKDfrTHfXxC3rbIY9GPGA1m5qvvDkVyrG5gd6SjrEW1gODt6rqlFV"
		const string9yM4yT = "CVY6JuIPK1WoBrUyfb8WqLoed3jPqy2V59Fn660OxiE41tbszxesI"
		const uintoTa6Z9w = BigInt("158")
		const BACMARSLPTOKENPoolEAeHb7 = await BACMARSLPTOKENPool.new(stringOP7eibO, string9yM4yT, uintoTa6Z9w, {from: accounts[3]});
		const byteygCuTGq = "0x0a1e1c041c201217110914000510191a051b1a0b1a0702120318100e15191d1b"
		const byteZpu7jo = "0x1d1e031b0a0c16161d0812090f09080f0b040810111b03200a0e060100020811"
		const uintKzqpVxB = BigInt("106")
		const uintfxBDr0T = BigInt("1596")
		const uintPYrxyZQ = BigInt("1454")
		await BACMARSLPTOKENPoolEAeHb7.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolEAeHb7.nonReentrant.call({from: accounts[3]});
		const uint8aNw33WJ = await BACMARSLPTOKENPoolEAeHb7.decimals.call({from: accounts[2]});
		const uint256tKP98fh = await BACMARSLPTOKENPoolEAeHb7.stakeWithPermit.call(uintPYrxyZQ, uintfxBDr0T, uintKzqpVxB, byteZpu7jo, byteygCuTGq, {from: accounts[3]});
		const stringLjIXi5y = await BACMARSLPTOKENPoolEAeHb7.symbol.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringKEiOrQx = "1CATFfysQ3kdUS8hqDyl"
		const stringwzTR0fo = "A5sCXCvC8kFl8DdkzQTa6b12bsr"
		const uintjKMwqyc = BigInt("40")
		const BACMARSLPTOKENPoolCesAdc = await BACMARSLPTOKENPool.new(stringKEiOrQx, stringwzTR0fo, uintjKMwqyc, {from: accounts[0]});
		const addressZGXCvJa = accounts[5]
		const uint256obRBO5i = await BACMARSLPTOKENPoolCesAdc.balanceOf.call(addressZGXCvJa, {from: accounts[0]});
		await BACMARSLPTOKENPoolCesAdc.nonReentrant.call({from: accounts[5]});
		const uint256gnSUrWo = await BACMARSLPTOKENPoolCesAdc.rewardPerToken.call({from: accounts[1]});
		const uint8nTkINGp = await BACMARSLPTOKENPoolCesAdc.decimals.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuKca6bP = "c9bXtrBfp8vrx1vLboYkC9sZMsgehrSX8OOhbF1plYP9HxLaikLfXoqLTerSNTy7MFTEVJxNI67z1MbAY41u"
		const stringKJFUeui = "Qw2GMUqO2p0AHbQu72LWnmOEvKk1LUUvrXD4c1u7DIh4JzNe3Lja7JSUsIoLbbfIzLHGF"
		const uintLqWZfs = BigInt("113")
		const BACMARSLPTOKENPoolvGkEIQZ = await BACMARSLPTOKENPool.new(stringuKca6bP, stringKJFUeui, uintLqWZfs, {from: accounts[4]});
		const addressev0klUm = accounts[1]
		const uintmrAwcs = BigInt("1138")
		const uint256MomjmHx = await BACMARSLPTOKENPoolvGkEIQZ.earned.call(addressev0klUm, {from: accounts[3]});
		const uint256ml7rqHj = await BACMARSLPTOKENPoolvGkEIQZ.getRewardForDuration.call({from: accounts[4]});
		const uint256PUElwsL = await BACMARSLPTOKENPoolvGkEIQZ.getRewardForDuration.call({from: accounts[4]});
		const uint256dxKETIM = await BACMARSLPTOKENPoolvGkEIQZ.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256UGpo2VR = await BACMARSLPTOKENPoolvGkEIQZ.stake.call(uintmrAwcs, {from: accounts[4]});
		const uint256EeqM7p = await BACMARSLPTOKENPoolvGkEIQZ.rewardPerToken.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEAuxJyd = "LBN"
		const stringrfbdSH = "pUqYTDf0CUJQ98QY60lcWgc7X1AmfjxVevWjKLht41g1Q1qEyXvglpoOhWDE5cmhJ7gNgn7cktqs8UdAEmJywlOvszx"
		const uintcbMx3Sd = BigInt("48")
		const BACMARSLPTOKENPoolaTzicym = await BACMARSLPTOKENPool.new(stringEAuxJyd, stringrfbdSH, uintcbMx3Sd, {from: accounts[1]});
		const addressCcMeQUp = accounts[2]
		await BACMARSLPTOKENPoolaTzicym.exit.call({from: accounts[2]});
		const uint256AOC7qLG = await BACMARSLPTOKENPoolaTzicym.balanceOf.call(addressCcMeQUp, {from: accounts[5]});
		await BACMARSLPTOKENPoolaTzicym.onlyRewardsDistribution.call({from: accounts[4]});
		await BACMARSLPTOKENPoolaTzicym.onlyRewardsDistribution.call({from: accounts[0]});
		await BACMARSLPTOKENPoolaTzicym.exit.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSDqjEOX = "QmoFeJHVtedpgmf7dV"
		const stringpCoBvs2 = "HN6LBRkLoTA9MHhF25pNbHzMjCShnTgOhLnZCnoMR3GgcGgOGIA"
		const uintaUgmB0p = BigInt("153")
		const BACMARSLPTOKENPoolHCwNngr = await BACMARSLPTOKENPool.new(stringSDqjEOX, stringpCoBvs2, uintaUgmB0p, {from: accounts[0]});
		const uintqClgVjh = BigInt("1899")
		const addressTAQ75YK = accounts[5]
		const uint256Pcld8kS = await BACMARSLPTOKENPoolHCwNngr.notifyRewardAmount.call(uintqClgVjh, {from: accounts[1]});
		await BACMARSLPTOKENPoolHCwNngr.getReward.call({from: accounts[2]});
		const uint256Kcrnr16 = await BACMARSLPTOKENPoolHCwNngr.balanceOf.call(addressTAQ75YK, {from: accounts[2]});
		await BACMARSLPTOKENPoolHCwNngr.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressmplsxVE = accounts[5]
		const addressDVtMP1L = "0x0000000000000000000000000000000000000001"
		const addressbwq8qce = accounts[0]
		const BACMARSLPTOKENPoolutGW1Vy = await BACMARSLPTOKENPool.new(addressmplsxVE, addressDVtMP1L, addressbwq8qce, {from: "0x0000000000000000000000000000000000000001"});
		const uintjc6h59m = BigInt("880")
		const uintL4SIQHj = BigInt("1580")
		const uint256DDaIHnW = await BACMARSLPTOKENPoolutGW1Vy.notifyRewardAmount.call(uintjc6h59m, {from: accounts[1]});
		const uint256M8za4vh = await BACMARSLPTOKENPoolutGW1Vy.getRewardForDuration.call({from: accounts[4]});
		const uint256IuBgJdX = await BACMARSLPTOKENPoolutGW1Vy.stake.call(uintL4SIQHj, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressc2EKQZp = "0x0000000000000000000000000000000000000001"
		const addresstCSVFRh = accounts[5]
		const addressANniVyx = accounts[5]
		const BACMARSLPTOKENPoolMj8s6K = await BACMARSLPTOKENPool.new(addressc2EKQZp, addresstCSVFRh, addressANniVyx, {from: accounts[3]});
		const byteoJk3omi = "0x0d061e1c0b0f1b01160311060a000b0a09120614130d0f08150815031019021f"
		const bytetDTb1W8 = "0x0c05141c03ffffffff11160a181e19000f0c02130713160b120b030e16031403160510"
		const uintu69PEax = BigInt("37")
		const uintSknivtS = BigInt("297")
		const uintEkNwdna = BigInt("1712")
		const uint256VNlqj3U = await BACMARSLPTOKENPoolMj8s6K.stakeWithPermit.call(uintEkNwdna, uintSknivtS, uintu69PEax, bytetDTb1W8, byteoJk3omi, {from: accounts[5]});

		await expect(BACMARSLPTOKENPoolMj8s6K.stakeWithPermit.call(uintEkNwdna, uintSknivtS, uintu69PEax, bytetDTb1W8, byteoJk3omi, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPFrFQu = "XEsx8WQMK6PB7lnAIQrvFSK1bu2UsKOTB9YeodYdxg9HE6LIbo"
		const stringOesM2an = "9OMktMmat2vWA51czPbvTqwk7xP9Gha647GG3TL6tN8EaeP9xGJUgcpDxYvCnVH2VNobvmku18XBLyDD1xCu5wUtExSUzjW"
		const uintFJci2Sc = BigInt("115")
		const BACMARSLPTOKENPoolVYisDj9 = await BACMARSLPTOKENPool.new(stringPFrFQu, stringOesM2an, uintFJci2Sc, {from: accounts[2]});
		await BACMARSLPTOKENPoolVYisDj9.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const stringNjpQtaf = await BACMARSLPTOKENPoolVYisDj9.symbol.call({from: accounts[4]});
		await BACMARSLPTOKENPoolVYisDj9.nonReentrant.call({from: accounts[3]});
		await BACMARSLPTOKENPoolVYisDj9.getReward.call({from: accounts[1]});
		const uint256IibcEMK = await BACMARSLPTOKENPoolVYisDj9.totalSupply.call({from: accounts[1]});
		const uint256ouLEss = await BACMARSLPTOKENPoolVYisDj9.rewardPerToken.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYGnA69W = "snjxvbqDq7ByLDvlnEK4Im0YhFejhhydkp2qi6mGbdlXa95QmsYeCv5Rcp9AKXz8ZHIXQH9rABKbbRVvFXutOdFLCWro"
		const stringh1BgSQ = "OuvpF"
		const uintDT1Oqk = BigInt("173")
		const BACMARSLPTOKENPoolT6NY7kL = await BACMARSLPTOKENPool.new(stringYGnA69W, stringh1BgSQ, uintDT1Oqk, {from: "0x0000000000000000000000000000000000000001"});
		const addressniYVbU = accounts[2]
		const uintyrkyJdh = BigInt("898")
		const addressVnk4TCs = accounts[2]
		const string0zMCMk = await BACMARSLPTOKENPoolT6NY7kL.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256qdzDFQE = await BACMARSLPTOKENPoolT6NY7kL.earned.call(addressniYVbU, {from: accounts[0]});
		await BACMARSLPTOKENPoolT6NY7kL.nonReentrant.call({from: accounts[4]});
		const uint256ecX0Fh = await BACMARSLPTOKENPoolT6NY7kL.withdraw.call(uintyrkyJdh, {from: accounts[5]});
		const addresst1jpzvg = await BACMARSLPTOKENPoolT6NY7kL.updateReward.call(addressVnk4TCs, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNndpTKX = "ySqAM9OK4xpM1scMCTv50GASxHae7O3J2I9tIywVCyG"
		const stringis7XvIk = "ejSdvdSBGwy"
		const uintFTzyOse = BigInt("95")
		const BACMARSLPTOKENPoolSA9ip4h = await BACMARSLPTOKENPool.new(stringNndpTKX, stringis7XvIk, uintFTzyOse, {from: accounts[5]});
		const addressQlNYm6 = accounts[3]
		const byteDBajGN = "0x001d0e1a1f18191217110a1e1306150c010a0c0c1f06151d100f0b0a1a151415"
		const byteotTbtpz = "0x190f0305151b0f1102090a1d1116030e0f03150419150e0a031816141d141a11"
		const uinttJ1Ov74 = BigInt("194")
		const uintuki54D4 = BigInt("1610")
		const uintJJzTLp4 = BigInt("1079")
		const uint256bSY1L6u = await BACMARSLPTOKENPoolSA9ip4h.earned.call(addressQlNYm6, {from: "0x0000000000000000000000000000000000000001"});
		const uint25618NY3Z = await BACMARSLPTOKENPoolSA9ip4h.rewardPerToken.call({from: accounts[0]});
		await BACMARSLPTOKENPoolSA9ip4h.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256AIuXKM1 = await BACMARSLPTOKENPoolSA9ip4h.stakeWithPermit.call(uintJJzTLp4, uintuki54D4, uinttJ1Ov74, byteotTbtpz, byteDBajGN, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringaOjT2Ow = "m49QhyPDXoDhF6PUs7OXtsMqx7AxyodSmXbtcd4lyNseu7rqQnsbZn7V8C"
		const stringesobLTQ = "cCyemvSqIUxHqpm2SMB7ubMCKSlTP7NjlBvPvuO3mig8tuwNgI5Enl"
		const uintNdJzBjN = BigInt("174")
		const BACMARSLPTOKENPoolXHq6s1t = await BACMARSLPTOKENPool.new(stringaOjT2Ow, stringesobLTQ, uintNdJzBjN, {from: accounts[5]});
		const stringKSzCV6 = await BACMARSLPTOKENPoolXHq6s1t.name.call({from: accounts[4]});
		const uint256CfvstNM = await BACMARSLPTOKENPoolXHq6s1t.lastTimeRewardApplicable.call({from: accounts[4]});
		await BACMARSLPTOKENPoolXHq6s1t.nonReentrant.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFrWUmBj = "tsQxlSsQQ6hOyn1qIMWVMYWBFHBugqNKtFR2S91mv33t54wuhqLyoaKKWnoPH1zRGVqlR6IdQNyvoC"
		const stringDF29Dqg = "r81NJHIHleJ1t23uv2taOLSliV9eBT4Ud6EVfG5EsV78KAC1tMv3uD2iNBGY5UoX"
		const uintFkaCCP4 = BigInt("14")
		const BACMARSLPTOKENPoolrpkTQ4N = await BACMARSLPTOKENPool.new(stringFrWUmBj, stringDF29Dqg, uintFkaCCP4, {from: accounts[1]});
		await BACMARSLPTOKENPoolrpkTQ4N.nonReentrant.call({from: accounts[3]});
		const stringKJC8KSN = await BACMARSLPTOKENPoolrpkTQ4N.symbol.call({from: accounts[4]});
		const uint8tv2VDXj = await BACMARSLPTOKENPoolrpkTQ4N.decimals.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQ1xgJRV = "Ko"
		const stringS4JqbBF = "44mUt2PvC6O8MTdchSpEuoYLo36l5J4sBkWBy9OORVtQWiyX1Vvpp7L8V6VCVPNebIxKIXtQKoRfMblhKKM"
		const uintpOtQEgN = BigInt("63")
		const BACMARSLPTOKENPoolKr09EmR = await BACMARSLPTOKENPool.new(stringQ1xgJRV, stringS4JqbBF, uintpOtQEgN, {from: accounts[5]});
		const uintFs4ilCP = BigInt("1741")
		await BACMARSLPTOKENPoolKr09EmR.getReward.call({from: accounts[0]});
		const uint256LADYyHo = await BACMARSLPTOKENPoolKr09EmR.notifyRewardAmount.call(uintFs4ilCP, {from: accounts[4]});
		const uint8dN2Voim = await BACMARSLPTOKENPoolKr09EmR.decimals.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZi2ec6 = "TwTEI9uSsfgOuBLVVTGtiFJegHSIcWyMjSkGiBGqNMKPyoB3x"
		const stringy0cHS6n = "xLQ6O4vzfqwMv0y0"
		const uintPqO3YJ4 = BigInt("135")
		const BACMARSLPTOKENPoolZ6Aevmi = await BACMARSLPTOKENPool.new(stringZi2ec6, stringy0cHS6n, uintPqO3YJ4, {from: accounts[2]});
		const uint8XuI26VP = await BACMARSLPTOKENPoolZ6Aevmi.decimals.call({from: accounts[3]});
		const uint256cg5Yar5 = await BACMARSLPTOKENPoolZ6Aevmi.lastTimeRewardApplicable.call({from: accounts[1]});
		await BACMARSLPTOKENPoolZ6Aevmi.exit.call({from: accounts[2]});
		await BACMARSLPTOKENPoolZ6Aevmi.getReward.call({from: accounts[0]});
		const stringxToogrs = await BACMARSLPTOKENPoolZ6Aevmi.symbol.call({from: accounts[4]});
		await BACMARSLPTOKENPoolZ6Aevmi.getReward.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrRmzCe7 = "frwjdKkyJ"
		const stringOMr9dKF = "b9TUs8PbNzsklGgTNZ8XxXk0bjWv5B1YvFvL2Lxq3S6nYWzIW6KMUlPwDOfByMZqMWcTxmtcsWH97vrIgcqxyMnUv1oAstvUos"
		const uintxJG05j = BigInt("41")
		const BACMARSLPTOKENPooln9eG4G8 = await BACMARSLPTOKENPool.new(stringrRmzCe7, stringOMr9dKF, uintxJG05j, {from: accounts[4]});
		const addressSBwiLIT = accounts[5]
		const addresslM9c1G8 = await BACMARSLPTOKENPooln9eG4G8.updateReward.call(addressSBwiLIT, {from: accounts[0]});
		const uint256Czlud6 = await BACMARSLPTOKENPooln9eG4G8.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPooln9eG4G8.onlyRewardsDistribution.call({from: accounts[3]});
		const uint8i6mLcX = await BACMARSLPTOKENPooln9eG4G8.decimals.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfcdRPcf = "oNsu11GrgqCRd9IRmABD1RqOkniwmgn45emjr1YSjQFvMRcGSO9jyPOUKsEQOVOx06PA9qWk"
		const stringOEK6Mhb = "xKv2vNUcu1AAFvvJPvkGVEu22JXRC2NsGv9rbBB085dxbGIjkPasDUWOHDicF8YHNgmKnVg64nGEKVFvUFTm5PRFKTv"
		const uintD6iiL0 = BigInt("203")
		const BACMARSLPTOKENPoolrkRUWJW = await BACMARSLPTOKENPool.new(stringfcdRPcf, stringOEK6Mhb, uintD6iiL0, {from: accounts[0]});
		const uintRFdpjYd = BigInt("42")
		const uint256XCjMoVd = await BACMARSLPTOKENPoolrkRUWJW.lastTimeRewardApplicable.call({from: accounts[4]});
		const stringReEY3y = await BACMARSLPTOKENPoolrkRUWJW.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ntUG6ma = await BACMARSLPTOKENPoolrkRUWJW.stake.call(uintRFdpjYd, {from: accounts[2]});
		const uint8qUvnOT = await BACMARSLPTOKENPoolrkRUWJW.decimals.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOj2VqAC = "JOLmPSF3"
		const stringOdJKZWF = "MGv8EyV4pXblgkQQjc7Avr7Ra8ZS7Vw0v8MYBwbWgDtuL0zImmwwE94ok8k8lCyIYY34xW0D"
		const uinticTJrJ4 = BigInt("77")
		const BACMARSLPTOKENPoolkKItawX = await BACMARSLPTOKENPool.new(stringOj2VqAC, stringOdJKZWF, uinticTJrJ4, {from: "0x0000000000000000000000000000000000000001"});
		const addressglaPwf = accounts[4]
		const uint2562vvPGx = await BACMARSLPTOKENPoolkKItawX.balanceOf.call(addressglaPwf, {from: accounts[2]});
		const stringB45q4hc = await BACMARSLPTOKENPoolkKItawX.symbol.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringdoMR2Rb = "jkzg87DrHCERACZIzxlp1"
		const stringua2gItZ = "gOWfU6bk1QyCYFCigLm"
		const uintn19N1mj = BigInt("210")
		const BACMARSLPTOKENPoolqVCabs0 = await BACMARSLPTOKENPool.new(stringdoMR2Rb, stringua2gItZ, uintn19N1mj, {from: accounts[2]});
		const byteh8McA4i = "0x07010b1a030e0f02021815171906081a161206131e0c1102020018191001081c"
		const bytee95Yo4q = "0x151500150f0f1d191c07190c0101021d15040406012009140b0f080b1d1a0c02"
		const uintpOLvauV = BigInt("42")
		const uintL27UXzq = BigInt("507")
		const uintgrHdYv = BigInt("791")
		const byteDFTnDgn = "0x1516090318091d1a031a1d161410150d0d1520101418121a110d0b180d021c20"
		const byteSXo8Hag = "0x1d0c0e1d0407160706121e1a10161c0e09030f1a0902130d0a2003071319150e"
		const uintj9uzn6k = BigInt("236")
		const uintzmeoUYa = BigInt("223")
		const uintaM1Ix0p = BigInt("165")
		const uint256Lf6A7g6 = await BACMARSLPTOKENPoolqVCabs0.stakeWithPermit.call(uintgrHdYv, uintL27UXzq, uintpOLvauV, bytee95Yo4q, byteh8McA4i, {from: accounts[0]});
		const uint256fGUi0W = await BACMARSLPTOKENPoolqVCabs0.stakeWithPermit.call(uintaM1Ix0p, uintzmeoUYa, uintj9uzn6k, byteSXo8Hag, byteDFTnDgn, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCZ9r7ub = "lvj6PWfRwUwtRPiqm51D5TtRAbybIoIE2ZtD5IXDDJLEBizp0L1KEdeACV3rEJ9hjU0ooVggVmJx9fQAaPmXiH7"
		const stringrupR8lK = "G4DrniILXpiL7arGEEE6iqJlMpRmLAXYWK3WQ1nkU5mGLzkgCiOweusNhXhpKtqEb"
		const uintLQ6OMY2 = BigInt("105")
		const BACMARSLPTOKENPoolkfiXNCN = await BACMARSLPTOKENPool.new(stringCZ9r7ub, stringrupR8lK, uintLQ6OMY2, {from: accounts[1]});
		const uint256CLQHkkx = await BACMARSLPTOKENPoolkfiXNCN.totalSupply.call({from: accounts[3]});
		const uint256OCnWFtr = await BACMARSLPTOKENPoolkfiXNCN.rewardPerToken.call({from: accounts[2]});
		const uint8fY1gk1D = await BACMARSLPTOKENPoolkfiXNCN.decimals.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHfwxuMg = "FX68NjnE2jwhJbo"
		const string5H6YK4 = "SxQmz9L9WSd4jjTSSofU70Urj60HUTXs7wNoPL8pkdYCv8VUWzlb43dAn"
		const uintMJY0sck = BigInt("132")
		const BACMARSLPTOKENPoolSjRgOdZ = await BACMARSLPTOKENPool.new(stringHfwxuMg, string5H6YK4, uintMJY0sck, {from: accounts[3]});
		const addressJwrKcYD = accounts[4]
		const uintL3ClD9 = BigInt("1947")
		const addresspZSeKXA = accounts[1]
		const uint256evjHkNB = await BACMARSLPTOKENPoolSjRgOdZ.balanceOf.call(addressJwrKcYD, {from: accounts[3]});
		const uint256F623YVK = await BACMARSLPTOKENPoolSjRgOdZ.withdraw.call(uintL3ClD9, {from: accounts[4]});
		const uint256y3Em3py = await BACMARSLPTOKENPoolSjRgOdZ.lastTimeRewardApplicable.call({from: accounts[0]});
		const stringIPQztdM = await BACMARSLPTOKENPoolSjRgOdZ.name.call({from: accounts[3]});
		const uint256StHbmUE = await BACMARSLPTOKENPoolSjRgOdZ.earned.call(addresspZSeKXA, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCC32hFz = "DABG9HozL5LE"
		const stringawJUC8 = "UHBWryzLGEe8BKyvdj44bIIcSwwzJd6HRNkqzfVp4k88CHp"
		const uintLvYqjrH = BigInt("57")
		const BACMARSLPTOKENPoolFAGiTpS = await BACMARSLPTOKENPool.new(stringCC32hFz, stringawJUC8, uintLvYqjrH, {from: accounts[3]});
		const addressiSnC7dI = accounts[0]
		const byteVZyrRc = "0x140b1e15080c041c091c0814120e1c0f04010f1d1503130b16111f000a070913"
		const byteArb7kQc = "0x0609080f20061305121d061c1104192010150a02011202180c0d0907071d0515"
		const uintP4lv78h = BigInt("119")
		const uintRL2wlwB = BigInt("872")
		const uintALwlrYw = BigInt("832")
		const uintUC3CF2A = BigInt("1787")
		const stringdTmly7C = await BACMARSLPTOKENPoolFAGiTpS.symbol.call({from: accounts[3]});
		const uint256U3pQORG = await BACMARSLPTOKENPoolFAGiTpS.earned.call(addressiSnC7dI, {from: accounts[2]});
		const uint256rFEYlJT = await BACMARSLPTOKENPoolFAGiTpS.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256lnzz8rb = await BACMARSLPTOKENPoolFAGiTpS.stakeWithPermit.call(uintALwlrYw, uintRL2wlwB, uintP4lv78h, byteArb7kQc, byteVZyrRc, {from: accounts[1]});
		const uint256AqVQsyV = await BACMARSLPTOKENPoolFAGiTpS.withdraw.call(uintUC3CF2A, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressvlkFTL3 = accounts[4]
		const addressbQjmDV6 = accounts[1]
		const addressGdYASgg = accounts[2]
		const BACMARSLPTOKENPoolrkmYQD3 = await BACMARSLPTOKENPool.new(addressvlkFTL3, addressbQjmDV6, addressGdYASgg, {from: accounts[0]});
		const uintBXfanXS = BigInt("1184")
		const uintPUasDHd = BigInt("1282")
		const uint256UanIV4j = await BACMARSLPTOKENPoolrkmYQD3.notifyRewardAmount.call(uintBXfanXS, {from: accounts[4]});
		const uint256NCBGKG = await BACMARSLPTOKENPoolrkmYQD3.stake.call(uintPUasDHd, {from: accounts[0]});

		await expect(BACMARSLPTOKENPoolrkmYQD3.notifyRewardAmount.call(uintBXfanXS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringoK2H2SB = "g"
		const stringlHdgIok = "iFQVom1a"
		const uintHMXXn34 = BigInt("118")
		const BACMARSLPTOKENPoolqD4OqT2 = await BACMARSLPTOKENPool.new(stringoK2H2SB, stringlHdgIok, uintHMXXn34, {from: accounts[4]});
		const byteWBSZ796 = "0x0b18111d0f1d031002121e16141c03061f141b141a1c081c1a100810140c0e03"
		const bytel3sUdaS = "0x160e050e1e02160b1f090917070319160e0d021705190d131208111d1d140e14"
		const uintSfnVDxM = BigInt("103")
		const uintH9p8t3m = BigInt("249")
		const uintXa0h6eL = BigInt("61")
		const uintyn4rRCd = BigInt("220")
		const uintRzxf98U = BigInt("1088")
		await BACMARSLPTOKENPoolqD4OqT2.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256fUyXhaR = await BACMARSLPTOKENPoolqD4OqT2.stakeWithPermit.call(uintXa0h6eL, uintH9p8t3m, uintSfnVDxM, bytel3sUdaS, byteWBSZ796, {from: accounts[0]});
		await BACMARSLPTOKENPoolqD4OqT2.nonReentrant.call({from: accounts[0]});
		const uint256XTRuxZZ = await BACMARSLPTOKENPoolqD4OqT2.stake.call(uintyn4rRCd, {from: accounts[0]});
		const uint256m88AIL0 = await BACMARSLPTOKENPoolqD4OqT2.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256XfM76Ot = await BACMARSLPTOKENPoolqD4OqT2.stake.call(uintRzxf98U, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYZ6Z9i = "ze2Fp78YY8acJ7h9doWzSKw1Y7C6dvYCpBgGSCbzMnuydPQQxU5zQgi"
		const stringai5uDh2 = "RX8qk4MmpTR9EUzE8Qfl0MsOVUfo8YCpjTwu"
		const uintaqAVhMA = BigInt("59")
		const BACMARSLPTOKENPooltC3E5N1 = await BACMARSLPTOKENPool.new(stringYZ6Z9i, stringai5uDh2, uintaqAVhMA, {from: accounts[4]});
		const byteIyRBhj = "0x1002020820100a0916180416201015170e0608161b040803161d030e1604151e"
		const byteYPx5MWC = "0x0d0b080112170f180f1b17151d081f1f080009021816201a1401100e0410070c"
		const uintqg7KZNr = BigInt("13")
		const uintHuKbWt8 = BigInt("1043")
		const uintqGyg4NQ = BigInt("1845")
		const uint256cbLJOOO = await BACMARSLPTOKENPooltC3E5N1.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256f9SENA = await BACMARSLPTOKENPooltC3E5N1.stakeWithPermit.call(uintqGyg4NQ, uintHuKbWt8, uintqg7KZNr, byteYPx5MWC, byteIyRBhj, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEoUoOCe = "mLjurVspixbFwWaUheRMK4f24UJUXJatFF7NJi7NbtxdVLEKoGHqWOfjyIxecfw1tESLyf8SNUWnWvnJQwbX"
		const string8pseMx = "As2mnhKydRG6YLRcTHhqcIuwLgN9IwWXhkVuvJXr1ynIphARNbPQ2ESgr7LDOL"
		const uintpSaGVku = BigInt("103")
		const BACMARSLPTOKENPoolrvS0UXB = await BACMARSLPTOKENPool.new(stringEoUoOCe, string8pseMx, uintpSaGVku, {from: accounts[1]});
		const uintzTSRuco = BigInt("21")
		const byteLO3318L = "0x0f0709091a011310041c100c02200b1d201a090c070e1c031b1c100007051f0d"
		const byteAr5gMA7 = "0x15041101110c0f14101f160c190f0c1808150d1608190d20111e0a1304160220"
		const uintfHpghTW = BigInt("15")
		const uintEPl5vzm = BigInt("1236")
		const uintqao5Epg = BigInt("1438")
		const uint256IS39aN = await BACMARSLPTOKENPoolrvS0UXB.withdraw.call(uintzTSRuco, {from: accounts[1]});
		await BACMARSLPTOKENPoolrvS0UXB.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256eyXFWSs = await BACMARSLPTOKENPoolrvS0UXB.stakeWithPermit.call(uintqao5Epg, uintEPl5vzm, uintfHpghTW, byteAr5gMA7, byteLO3318L, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringgCvCm0y = "TswdcvQKdYMhAqNgvts6TeaNk2sddMA2r5s4QzIRAd3"
		const stringEel4W88 = "GUfLt9t5RDTfk9fbNnn7fYpT4oDt5miJfcEPCXHVwfKx9p1vIpUV1JSnqTaiXUs7DgMu1K1BrrzCOrNEWaX"
		const uintjXYlaEq = BigInt("199")
		const BACMARSLPTOKENPools9wqQBr = await BACMARSLPTOKENPool.new(stringgCvCm0y, stringEel4W88, uintjXYlaEq, {from: accounts[1]});
		const uinteM9KBOA = BigInt("534")
		const addressJ2C7lze = accounts[3]
		const uint8SLmLapr = await BACMARSLPTOKENPools9wqQBr.decimals.call({from: accounts[3]});
		const uint256rEZomjF = await BACMARSLPTOKENPools9wqQBr.withdraw.call(uinteM9KBOA, {from: accounts[2]});
		const addressssLOTW = await BACMARSLPTOKENPools9wqQBr.updateReward.call(addressJ2C7lze, {from: accounts[0]});
		await BACMARSLPTOKENPools9wqQBr.nonReentrant.call({from: accounts[0]});
		const stringyuOVJEA = await BACMARSLPTOKENPools9wqQBr.name.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSaYVy3o = "0DRkWEJb"
		const stringHY2AZWG = "MPIg1F3jvzBP5kLJWfRbnDLympbc9RPaE6TjwnqRdYnQuvuBzUzFsystKxjaDxaf9N"
		const uintkQeRgew = BigInt("116")
		const BACMARSLPTOKENPoolkSkJrw = await BACMARSLPTOKENPool.new(stringSaYVy3o, stringHY2AZWG, uintkQeRgew, {from: accounts[0]});
		const uint256iNHiqpx = await BACMARSLPTOKENPoolkSkJrw.getRewardForDuration.call({from: accounts[0]});
		const uint256u4FnMmZ = await BACMARSLPTOKENPoolkSkJrw.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolkSkJrw.getReward.call({from: accounts[3]});
		const uint2563O9ASE = await BACMARSLPTOKENPoolkSkJrw.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLbxHV44 = "cZG78PpLrAG7w4woESe7WYnuUvMs8J5z4yR3e8YCxoXzGwxPJWo"
		const stringsY0gZZA = "ohKTPcLPeSdh6APBPH4AxbLXS5P8lau9TaDFSs09KNYbvEDplcA5v3fdDhp8eCwj75ZMxR1Z3tfwMT3MWCHY4"
		const uintM7qARrw = BigInt("203")
		const BACMARSLPTOKENPoolp1fPT6 = await BACMARSLPTOKENPool.new(stringLbxHV44, stringsY0gZZA, uintM7qARrw, {from: accounts[4]});
		const addressi528JQl = accounts[5]
		const uintVD3tdo = BigInt("1394")
		await BACMARSLPTOKENPoolp1fPT6.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Z2GbZIA = await BACMARSLPTOKENPoolp1fPT6.earned.call(addressi528JQl, {from: accounts[1]});
		const uint2563YAILH = await BACMARSLPTOKENPoolp1fPT6.stake.call(uintVD3tdo, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqHxYw3q = "jEX8f6flAOhvqZ0VCVYJe6QtaRagpsKv8yrkdY8YmsUbcqEznGc1UWCNlpmGYZkUnxXeG6j02OEYk47aPJy4jTmU827MCuye"
		const stringoNCMaB0 = "FFbhxwyAvqTBgiRsooMWTWxemCnyHEOD3OozAhYHcahxzROsoXyeQ7BoplSFIwV7b6L5NAwDfWvbwZ4VcCHJoKfJAS5p"
		const uintijrHnum = BigInt("117")
		const BACMARSLPTOKENPooloxtUYuQ = await BACMARSLPTOKENPool.new(stringqHxYw3q, stringoNCMaB0, uintijrHnum, {from: accounts[4]});
		const addressGmd4nb = accounts[2]
		const uint256wYr0Gfq = await BACMARSLPTOKENPooloxtUYuQ.getRewardForDuration.call({from: accounts[3]});
		const addressFM3BKoq = await BACMARSLPTOKENPooloxtUYuQ.updateReward.call(addressGmd4nb, {from: "0x0000000000000000000000000000000000000001"});
		const stringD9Tqxzc = await BACMARSLPTOKENPooloxtUYuQ.symbol.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtJJRFpQ = "crw1LibjzLNYwaEAHahpqnxW9jtFhX6WC6THBYwXFbOBUDYHNCGmgEtur1hSkAKQoGZs8UHwkMU"
		const stringatJQ7X = "Xh"
		const uintgELWMOU = BigInt("179")
		const BACMARSLPTOKENPoolQUW9A4 = await BACMARSLPTOKENPool.new(stringtJJRFpQ, stringatJQ7X, uintgELWMOU, {from: accounts[3]});
		const uintYltV7yH = BigInt("555")
		const uintwPIe10Q = BigInt("1262")
		await BACMARSLPTOKENPoolQUW9A4.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256Jdnf52A = await BACMARSLPTOKENPoolQUW9A4.getRewardForDuration.call({from: accounts[2]});
		const uint256TQWwsaQ = await BACMARSLPTOKENPoolQUW9A4.getRewardForDuration.call({from: accounts[3]});
		const uint256UB5KM3v = await BACMARSLPTOKENPoolQUW9A4.stake.call(uintYltV7yH, {from: accounts[4]});
		const uint256p41Hgk = await BACMARSLPTOKENPoolQUW9A4.notifyRewardAmount.call(uintwPIe10Q, {from: accounts[1]});
		await BACMARSLPTOKENPoolQUW9A4.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlyASL5m = "5mVRlnyHBHgvSTF3d5M1741olYBE4FCaM9LfZGVJYFFHqwk"
		const stringXYoAGSw = "HCGL"
		const uintWDCFimG = BigInt("112")
		const BACMARSLPTOKENPoolErxm6Bd = await BACMARSLPTOKENPool.new(stringlyASL5m, stringXYoAGSw, uintWDCFimG, {from: accounts[2]});
		const uintiMUIpKB = BigInt("1607")
		await BACMARSLPTOKENPoolErxm6Bd.onlyRewardsDistribution.call({from: accounts[0]});
		const uint8z4VF8HL = await BACMARSLPTOKENPoolErxm6Bd.decimals.call({from: accounts[0]});
		await BACMARSLPTOKENPoolErxm6Bd.nonReentrant.call({from: accounts[1]});
		const uint25658em5Q = await BACMARSLPTOKENPoolErxm6Bd.getRewardForDuration.call({from: accounts[0]});
		const uint256Z0JLWNe = await BACMARSLPTOKENPoolErxm6Bd.withdraw.call(uintiMUIpKB, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUht0gy = "Er4r3sOg4ol5yeRIryqz8EOqp5RMCLsAxrOfcksdTt12JDuf6x2QDwi35w6jabm"
		const stringaQyR2IC = "8chiFVunbBPuzFO3SjpXm4LiSG8Be9n26tyk2aAaJqsYwU8"
		const uintZCSMyER = BigInt("206")
		const BACMARSLPTOKENPoolKVRGNgz = await BACMARSLPTOKENPool.new(stringUht0gy, stringaQyR2IC, uintZCSMyER, {from: "0x0000000000000000000000000000000000000001"});
		const addressvlpzRoq = accounts[4]
		const uintZIjdQk9 = BigInt("1312")
		const uint8cHSvblF = await BACMARSLPTOKENPoolKVRGNgz.decimals.call({from: accounts[3]});
		const uint256buPq7P8 = await BACMARSLPTOKENPoolKVRGNgz.balanceOf.call(addressvlpzRoq, {from: accounts[3]});
		await BACMARSLPTOKENPoolKVRGNgz.getReward.call({from: accounts[0]});
		const uint256Ysisrk8 = await BACMARSLPTOKENPoolKVRGNgz.withdraw.call(uintZIjdQk9, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringc8P3mfN = "IMn4zfS9mOqHxRu8DP54KYvB73akStRKQxKyKlGSWZxzWrDb6vrl4tmzVkSdh"
		const stringnuF6hD = "6uqq4sG1GnRktGT7vwJDdFMDGImMkTqxe82YRhTRTHmA6qlaK32"
		const uintIc5hbvU = BigInt("223")
		const BACMARSLPTOKENPoolYAKSahA = await BACMARSLPTOKENPool.new(stringc8P3mfN, stringnuF6hD, uintIc5hbvU, {from: accounts[5]});
		const addressXKujMM = accounts[1]
		const uintXGDy0fv = BigInt("1227")
		const addressQnSGhZW = accounts[1]
		const uintKgDzPnJ = BigInt("1765")
		const addresslCKZfEa = await BACMARSLPTOKENPoolYAKSahA.updateReward.call(addressXKujMM, {from: accounts[4]});
		const uint256K59dmSP = await BACMARSLPTOKENPoolYAKSahA.stake.call(uintXGDy0fv, {from: accounts[0]});
		const uint2565QFaKA = await BACMARSLPTOKENPoolYAKSahA.earned.call(addressQnSGhZW, {from: accounts[4]});
		const uint256nU0FB1 = await BACMARSLPTOKENPoolYAKSahA.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256T7qr11m = await BACMARSLPTOKENPoolYAKSahA.notifyRewardAmount.call(uintKgDzPnJ, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringKnVh6p = "8fCgQseUlhe"
		const stringm4BZeRf = "oycL9bmHCVLlkMaMGptVc"
		const uintYM8Av3C = BigInt("50")
		const BACMARSLPTOKENPoolJ5IQvjO = await BACMARSLPTOKENPool.new(stringKnVh6p, stringm4BZeRf, uintYM8Av3C, {from: accounts[1]});
		const uintlElxcX = BigInt("1228")
		const stringAtFvTdT = await BACMARSLPTOKENPoolJ5IQvjO.symbol.call({from: accounts[4]});
		await BACMARSLPTOKENPoolJ5IQvjO.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256B1KeHpo = await BACMARSLPTOKENPoolJ5IQvjO.getRewardForDuration.call({from: accounts[3]});
		const uint256i4OP0LQ = await BACMARSLPTOKENPoolJ5IQvjO.notifyRewardAmount.call(uintlElxcX, {from: "0x0000000000000000000000000000000000000001"});
		const uint256kNk1D0m = await BACMARSLPTOKENPoolJ5IQvjO.rewardPerToken.call({from: accounts[4]});
		await BACMARSLPTOKENPoolJ5IQvjO.nonReentrant.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringKHCWiZZ = "icEWsUyGU8EUgY1ifk4qvTNjdPziGBuwKBfsY9doI5dBVu7qPuxPNsKheab8gthkl6QDVxuRE1Sn3u3"
		const stringX2PPKVS = "Gc"
		const uintZHSMnmZ = BigInt("214")
		const BACMARSLPTOKENPooltfCPT2I = await BACMARSLPTOKENPool.new(stringKHCWiZZ, stringX2PPKVS, uintZHSMnmZ, {from: accounts[0]});
		const addressosnRtek = accounts[3]
		const byteo1Ut3ac = "0x120314130317061001141f191a0e180e020f171a1d0617180409140417031b0c"
		const byteOlHPTIm = "0x040f1f1f010d050e100213051a09091210080811180d12170e0d01020e160504"
		const uintlc8wL8i = BigInt("67")
		const uintWBD6rLp = BigInt("2023")
		const uintLAgzlCV = BigInt("621")
		const uint256T9MbnCo = await BACMARSLPTOKENPooltfCPT2I.earned.call(addressosnRtek, {from: accounts[0]});
		const uint256BpHYDX = await BACMARSLPTOKENPooltfCPT2I.stakeWithPermit.call(uintLAgzlCV, uintWBD6rLp, uintlc8wL8i, byteOlHPTIm, byteo1Ut3ac, {from: accounts[3]});
		const uint8A8y8ecm = await BACMARSLPTOKENPooltfCPT2I.decimals.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringE3yVm5j = "PFl1iX0AG2NeAhqkkftHOh7pVqQBtyOCojesBO5QUs14h1XN6Xye"
		const stringIZqfxT0 = "BADd1IFdesNAwkdQ6jhWMqea41kazGBJ3R7y4aAVQRrR28DCiKXaoBY98b"
		const uintJUpsTh = BigInt("30")
		const BACMARSLPTOKENPoolP1UTy1V = await BACMARSLPTOKENPool.new(stringE3yVm5j, stringIZqfxT0, uintJUpsTh, {from: accounts[5]});
		const addressg7q3JqF = accounts[0]
		const string4f0TmX = await BACMARSLPTOKENPoolP1UTy1V.symbol.call({from: accounts[2]});
		const uint256hVV7vwn = await BACMARSLPTOKENPoolP1UTy1V.rewardPerToken.call({from: accounts[1]});
		const uint256sEBJwR3 = await BACMARSLPTOKENPoolP1UTy1V.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256oNWJly6 = await BACMARSLPTOKENPoolP1UTy1V.balanceOf.call(addressg7q3JqF, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbE5fok = "QjxtTBd1MA9wfdeWQcISvT11dRSVcT"
		const stringtKm7NeP = "Gc3Dab6Vp7QK2ZGCiRBiUzXvC"
		const uintHR3okBt = BigInt("214")
		const BACMARSLPTOKENPoolrP7Xuh = await BACMARSLPTOKENPool.new(stringbE5fok, stringtKm7NeP, uintHR3okBt, {from: accounts[4]});
		const uintE041xp2 = BigInt("1522")
		const uint256EBIrUum = await BACMARSLPTOKENPoolrP7Xuh.rewardPerToken.call({from: accounts[0]});
		const stringRjUnFcr = await BACMARSLPTOKENPoolrP7Xuh.symbol.call({from: accounts[4]});
		const stringaVDQXud = await BACMARSLPTOKENPoolrP7Xuh.name.call({from: accounts[2]});
		const uint256ZNlN5VW = await BACMARSLPTOKENPoolrP7Xuh.notifyRewardAmount.call(uintE041xp2, {from: accounts[0]});
	});
})