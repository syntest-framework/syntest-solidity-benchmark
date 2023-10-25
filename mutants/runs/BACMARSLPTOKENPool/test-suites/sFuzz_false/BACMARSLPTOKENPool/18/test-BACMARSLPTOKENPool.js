const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const addressD9W8dr7 = accounts[2]
		const addressTuRbpT9 = accounts[2]
		const addressbcfVuVI = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolZoFr16 = await BACMARSLPTOKENPool.new(addressD9W8dr7, addressTuRbpT9, addressbcfVuVI, {from: accounts[0]});
		const addressQcOvWVk = accounts[3]
		await BACMARSLPTOKENPoolZoFr16.nonReentrant.call({from: accounts[3]});
		await BACMARSLPTOKENPoolZoFr16.nonReentrant.call({from: accounts[3]});
		await BACMARSLPTOKENPoolZoFr16.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256MWji4PP = await BACMARSLPTOKENPoolZoFr16.balanceOf.call(addressQcOvWVk, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolZoFr16.nonReentrant.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringiuJIIyC = "7H9uCRMI6WMXITjeuTtJK"
		const stringOLPKcIK = "O00lyGXm9X"
		const uintwhgm3yl = BigInt("174")
		const BACMARSLPTOKENPooluZK4q4 = await BACMARSLPTOKENPool.new(stringiuJIIyC, stringOLPKcIK, uintwhgm3yl, {from: accounts[1]});
		const uintaBqzePC = BigInt("1972")
		const addressdbP8usB = accounts[1]
		const uintoBI8U8m = BigInt("836")
		const uint256kqQO3X7 = await BACMARSLPTOKENPooluZK4q4.withdraw.call(uintaBqzePC, {from: accounts[0]});
		const uint8yo4GWqb = await BACMARSLPTOKENPooluZK4q4.decimals.call({from: accounts[0]});
		const uint256VtNRquO = await BACMARSLPTOKENPooluZK4q4.balanceOf.call(addressdbP8usB, {from: accounts[4]});
		await BACMARSLPTOKENPooluZK4q4.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256QNTcT3c = await BACMARSLPTOKENPooluZK4q4.withdraw.call(uintoBI8U8m, {from: accounts[5]});
		const uint256LcrjcCQ = await BACMARSLPTOKENPooluZK4q4.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrrulTia = "XZVLuHPcDoU78b5"
		const stringeq0jby = "QJJqNbvX4FP7WlfX4vz1rQDs74OLRNsMIP3pTnfTo7p580mzhRl7WNCW9RoQsXpcDMSsPuOdyPr6zbBVaL8ECau2Wyc"
		const uinty2H1LAK = BigInt("140")
		const BACMARSLPTOKENPoolGbWw8Qy = await BACMARSLPTOKENPool.new(stringrrulTia, stringeq0jby, uinty2H1LAK, {from: accounts[4]});
		const byteMlrE0wT = "0x010b0d0b030d1612171b0e1419121c0b061d0306001a1018090109150402171b"
		const bytenlmvbqo = "0x140d1f1c1c02100f0d0412041c141e0a1c09150604031e1c150b0902050a0a19"
		const uintCDLjalW = BigInt("130")
		const uintq3m8UHh = BigInt("1243")
		const uintmTWc8oh = BigInt("129")
		await BACMARSLPTOKENPoolGbWw8Qy.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256bTc87Ql = await BACMARSLPTOKENPoolGbWw8Qy.stakeWithPermit.call(uintmTWc8oh, uintq3m8UHh, uintCDLjalW, bytenlmvbqo, byteMlrE0wT, {from: accounts[2]});
		const uint256ElYmY71 = await BACMARSLPTOKENPoolGbWw8Qy.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256MrPqDe = await BACMARSLPTOKENPoolGbWw8Qy.getRewardForDuration.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhwjYBqU = "gABLY2CFPLO7LDEneffmH6YrbnzROMqnEISFB7DHUw7vPX9GYel08jsMywNYkm38"
		const stringktQaXQK = "jmCT54qv1RtOGBSmmN8GrSFRHRFYguMAg9K588yriWISBffNOaWLforhbpaiSEErlARBJGrCytALHYwWGwTAH"
		const uintjkctLSb = BigInt("64")
		const BACMARSLPTOKENPoolAsk04Hu = await BACMARSLPTOKENPool.new(stringhwjYBqU, stringktQaXQK, uintjkctLSb, {from: accounts[5]});
		const byteW2R86Mb = "0x02150e18160c1b140d200f1c030b0e190c161c1f140b0700170f0d1e0119120c"
		const byte5mq3cE = "0x050f05040f100608040b0d1e090e1007031d191a0806070f0b0a1f081313170e"
		const uintOP3u8ID = BigInt("45")
		const uintWVlm5o0 = BigInt("1431")
		const uintwWajJn7 = BigInt("1951")
		const uint256NepgU1D = await BACMARSLPTOKENPoolAsk04Hu.stakeWithPermit.call(uintwWajJn7, uintWVlm5o0, uintOP3u8ID, byte5mq3cE, byteW2R86Mb, {from: accounts[5]});
		await BACMARSLPTOKENPoolAsk04Hu.nonReentrant.call({from: accounts[3]});
		const uint256OA7QlMn = await BACMARSLPTOKENPoolAsk04Hu.getRewardForDuration.call({from: accounts[0]});
		const stringJIDUvZZ = await BACMARSLPTOKENPoolAsk04Hu.name.call({from: accounts[4]});
		await BACMARSLPTOKENPoolAsk04Hu.nonReentrant.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringiaN7ECq = "yPdnOGfbFLf61fyPR4vXBpbV8rBifl3ATSeQzV3AJvND"
		const string0hI37l = "ntsgyb6xnCwhAJ"
		const uintYKDPtTe = BigInt("116")
		const BACMARSLPTOKENPoolCXH33UK = await BACMARSLPTOKENPool.new(stringiaN7ECq, string0hI37l, uintYKDPtTe, {from: accounts[2]});
		const byteYHPiL9Y = "0x151f16091e1a1d0317180b03060b1411190f1c0105011b18160606181e160017"
		const byterm7KVyT = "0x19161d1d171c1c0c07030d0a200314121c16040a140c040b12101c020c150b07"
		const uintxip3hLz = BigInt("65")
		const uintYdtGXw = BigInt("1615")
		const uinteQKZ9B9 = BigInt("1774")
		const byteQi5TqGU = "0x0c1105190a11151308111a150b181d01161806150e08100f0616050d01080719"
		const byteDXz2TO = "0x12031003030e17111e040300000d0e031c1f010e041e011a0514010d0c1f0c0f"
		const uintz1Kdw34 = BigInt("123")
		const uintyI9ubxD = BigInt("1319")
		const uintcogP6qU = BigInt("1332")
		const uint256r6fw6Zm = await BACMARSLPTOKENPoolCXH33UK.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256OAVpsCI = await BACMARSLPTOKENPoolCXH33UK.stakeWithPermit.call(uinteQKZ9B9, uintYdtGXw, uintxip3hLz, byterm7KVyT, byteYHPiL9Y, {from: accounts[0]});
		const uint256fuoAMxK = await BACMARSLPTOKENPoolCXH33UK.rewardPerToken.call({from: accounts[3]});
		await BACMARSLPTOKENPoolCXH33UK.exit.call({from: accounts[3]});
		const uint256XKduhOE = await BACMARSLPTOKENPoolCXH33UK.stakeWithPermit.call(uintcogP6qU, uintyI9ubxD, uintz1Kdw34, byteDXz2TO, byteQi5TqGU, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBwJQoY6 = "QD3TeiwUQImTDos1u78oLY8A5fotBac9V8xOTTP8DJgzMqjmfTyhXPLvlrbMOk9oi"
		const stringOTn3EX = "OAbcRWjg9q1XeLAR7OhFxJ7thhseBP4jU18ojL5aGcDmeyhbVeJ8KIIzTVkU6AnCTcL6x6XdarNAZEC1x2oDD0cBYtmGM"
		const uintX7sbzyI = BigInt("251")
		const BACMARSLPTOKENPool4HqCRi = await BACMARSLPTOKENPool.new(stringBwJQoY6, stringOTn3EX, uintX7sbzyI, {from: accounts[0]});
		const addressaSPpsx = accounts[5]
		const addressdH1m7wy = accounts[3]
		const uinty6GQ4IH = BigInt("329")
		const bytebttlNtu = "0x1b040c0c1d14091c12021f0909061016051f1d1b0a20111e130b0117021f0b0c"
		const byteOuRqIxB = "0x0e0d0c170c1014140d1a0c0007021a1e1d131a0d1d1906000a1b08031019020e"
		const uintV9bvYHU = BigInt("6")
		const uintKElemQ8 = BigInt("175")
		const uintrDmaFu = BigInt("1178")
		const addressRu0Ruo3 = accounts[1]
		const uint256dvEqTIl = await BACMARSLPTOKENPool4HqCRi.earned.call(addressaSPpsx, {from: accounts[0]});
		const addressUMWYErY = await BACMARSLPTOKENPool4HqCRi.updateReward.call(addressdH1m7wy, {from: accounts[5]});
		const uint256c3DD1oh = await BACMARSLPTOKENPool4HqCRi.stake.call(uinty6GQ4IH, {from: accounts[2]});
		const uint256q5zQig = await BACMARSLPTOKENPool4HqCRi.stakeWithPermit.call(uintrDmaFu, uintKElemQ8, uintV9bvYHU, byteOuRqIxB, bytebttlNtu, {from: accounts[0]});
		const uint256luIzN6o = await BACMARSLPTOKENPool4HqCRi.balanceOf.call(addressRu0Ruo3, {from: accounts[0]});
		const stringcnnLd2k = await BACMARSLPTOKENPool4HqCRi.name.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringImUtbM5 = "D9fcgxHCOtjhgKHGtlWnGcdmcjf9w65UyhJjSsdjakcYLDHP4W92JQ"
		const stringIenr1K2 = "oXdQBIIYDdnOVH7HZnimlWHlb26vG5juHZ33XFIEQRWpeDfZh516JrqLNqSUWVoV7JohQIjeuUqKeoSfU"
		const uintomrvvZZ = BigInt("131")
		const BACMARSLPTOKENPoolZiS87O6 = await BACMARSLPTOKENPool.new(stringImUtbM5, stringIenr1K2, uintomrvvZZ, {from: accounts[1]});
		const uint256Orcx3l2 = await BACMARSLPTOKENPoolZiS87O6.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256OB0UhJs = await BACMARSLPTOKENPoolZiS87O6.getRewardForDuration.call({from: accounts[4]});
		const stringCL75bt = await BACMARSLPTOKENPoolZiS87O6.symbol.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTF9iy7X = "jEGOnb6gQ0oeArQD1YCr0evHmdQbMg33Hmhv39VgPuCOE"
		const stringyjgd6iP = "SQQLUx7KdIuOGxd6a0DurBtCUNOT6mupSiamygBrGYRiqfkenBwUTLWoS8ndybfMnahwhkJOpduugtIUIpzcZ1AuJ"
		const uintUTfSidZ = BigInt("197")
		const BACMARSLPTOKENPoolsVMxfb = await BACMARSLPTOKENPool.new(stringTF9iy7X, stringyjgd6iP, uintUTfSidZ, {from: accounts[3]});
		const uintDNvDom1 = BigInt("1613")
		const addressQDvjsZF = accounts[0]
		const uintu0FsKIv = BigInt("1963")
		const uint256xhiEVLM = await BACMARSLPTOKENPoolsVMxfb.notifyRewardAmount.call(uintDNvDom1, {from: accounts[0]});
		const uint256EmnKSnc = await BACMARSLPTOKENPoolsVMxfb.rewardPerToken.call({from: accounts[0]});
		const uint256uU4yqQO = await BACMARSLPTOKENPoolsVMxfb.balanceOf.call(addressQDvjsZF, {from: accounts[2]});
		const uint256p5FXBV8 = await BACMARSLPTOKENPoolsVMxfb.withdraw.call(uintu0FsKIv, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressWD6e9FO = accounts[3]
		const addresstyqCA0d = accounts[5]
		const addresscFMg8q4 = accounts[2]
		const BACMARSLPTOKENPoolhiLK7g = await BACMARSLPTOKENPool.new(addressWD6e9FO, addresstyqCA0d, addresscFMg8q4, {from: accounts[5]});
		const addressh32B0I2 = accounts[3]
		const addressUyhM4i9 = accounts[6]
		const uint256jYhiS1p = await BACMARSLPTOKENPoolhiLK7g.earned.call(addressh32B0I2, {from: accounts[3]});
		const stringLANi2RP = await BACMARSLPTOKENPoolhiLK7g.symbol.call({from: accounts[4]});
		const addressSxxnPHA = await BACMARSLPTOKENPoolhiLK7g.updateReward.call(addressUyhM4i9, {from: accounts[2]});

		assert.equal(uint256jYhiS1p, BigInt("0"))
		await expect(BACMARSLPTOKENPoolhiLK7g.symbol.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const address9OSUA6 = accounts[3]
		const addressW1MYbjH = accounts[5]
		const addresscWc6Qem = accounts[2]
		const BACMARSLPTOKENPoolhiLK7g = await BACMARSLPTOKENPool.new(address9OSUA6, addressW1MYbjH, addresscWc6Qem, {from: accounts[5]});
		const byteYfXiAm6 = "0x0c1205031c1a010107121e16100f040e18150b080c100a140b0b0608070a1907"
		const byteUJDnW6k = "0x0c1912060211101b200a141f1101171a190b16021c0a061e1a02101a04161208"
		const uintHS6kma9 = BigInt("64")
		const uintNlbWu0E = BigInt("317")
		const uintTWFwxXJ = BigInt("472")
		const bytelpxOrjI = "0x100f0c11181e061d01121a17131002090009001510061b160a1f0c06011f0519"
		const byteA4FBGqN = "0x1d1f01141515011c03161c191d18151a07011e060d0e1209121d1e071c020409"
		const uintR4wnFTZ = BigInt("57")
		const uintvF6qowC = BigInt("1904")
		const uintWjBJqJG = BigInt("1136")
		const addressFHaLja = accounts[6]
		const uint256t1YeNIu = await BACMARSLPTOKENPoolhiLK7g.stakeWithPermit.call(uintTWFwxXJ, uintNlbWu0E, uintHS6kma9, byteUJDnW6k, byteYfXiAm6, {from: accounts[3]});
		const uint256FqgOzvf = await BACMARSLPTOKENPoolhiLK7g.stakeWithPermit.call(uintWjBJqJG, uintvF6qowC, uintR4wnFTZ, byteA4FBGqN, bytelpxOrjI, {from: accounts[0]});
		const stringLANi2RP = await BACMARSLPTOKENPoolhiLK7g.symbol.call({from: accounts[4]});
		const addressSxxnPHA = await BACMARSLPTOKENPoolhiLK7g.updateReward.call(addressFHaLja, {from: accounts[2]});

		await expect(BACMARSLPTOKENPoolhiLK7g.stakeWithPermit.call(uintTWFwxXJ, uintNlbWu0E, uintHS6kma9, byteUJDnW6k, byteYfXiAm6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringRRfmCKp = "LgpqPO7qdOYcj8v9E0f6Y5NIcPpCmaPrORqt5eCxrXyX"
		const stringE0DkysT = "LbA0mqQQi3NDhjj1BdEOWmv9UHqM5WD7X23MxRsH3cxwXNGaMkMlefL14fycrHV83JgXGUCMXpHDL"
		const uintRv1SwC = BigInt("177")
		const BACMARSLPTOKENPoolaHFI4DL = await BACMARSLPTOKENPool.new(stringRRfmCKp, stringE0DkysT, uintRv1SwC, {from: accounts[5]});
		const addressxA06iIo = accounts[2]
		const addresswyxDMsg = accounts[0]
		const uintyfcCYiH = BigInt("1713")
		const addressUYV6itt = await BACMARSLPTOKENPoolaHFI4DL.updateReward.call(addressxA06iIo, {from: "0x0000000000000000000000000000000000000001"});
		const uint256qoMC37 = await BACMARSLPTOKENPoolaHFI4DL.earned.call(addresswyxDMsg, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VUUjX0H = await BACMARSLPTOKENPoolaHFI4DL.stake.call(uintyfcCYiH, {from: "0x0000000000000000000000000000000000000001"});
		const uint8Hr59GRQ = await BACMARSLPTOKENPoolaHFI4DL.decimals.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressrW5ad3r = accounts[3]
		const addressRnnlie = accounts[5]
		const addressZkiEFQk = accounts[2]
		const BACMARSLPTOKENPoolhiLK7g = await BACMARSLPTOKENPool.new(addressrW5ad3r, addressRnnlie, addressZkiEFQk, {from: accounts[5]});
		const addresswNxnf54 = accounts[5]
		const uint256NC4JqnT = await BACMARSLPTOKENPoolhiLK7g.totalSupply.call({from: accounts[1]});
		const stringLANi2RP = await BACMARSLPTOKENPoolhiLK7g.symbol.call({from: accounts[4]});
		await BACMARSLPTOKENPoolhiLK7g.onlyRewardsDistribution.call({from: accounts[2]});
		const addressSxxnPHA = await BACMARSLPTOKENPoolhiLK7g.updateReward.call(addresswNxnf54, {from: accounts[2]});

		assert.equal(uint256NC4JqnT, BigInt("0"))
		await expect(BACMARSLPTOKENPoolhiLK7g.symbol.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const address0b4oOF = accounts[3]
		const addressSDKI7g = accounts[5]
		const addressi5sl5U4 = accounts[2]
		const BACMARSLPTOKENPoolhiLK7g = await BACMARSLPTOKENPool.new(address0b4oOF, addressSDKI7g, addressi5sl5U4, {from: accounts[5]});
		const addresskCnEJzh = accounts[5]
		const uint256wdtBgFs = await BACMARSLPTOKENPoolhiLK7g.getRewardForDuration.call({from: accounts[3]});
		const string8gGuq1 = await BACMARSLPTOKENPoolhiLK7g.name.call({from: accounts[5]});
		const stringLANi2RP = await BACMARSLPTOKENPoolhiLK7g.symbol.call({from: accounts[4]});
		const addressSxxnPHA = await BACMARSLPTOKENPoolhiLK7g.updateReward.call(addresskCnEJzh, {from: accounts[2]});

		assert.equal(uint256wdtBgFs, BigInt("0"))
		await expect(BACMARSLPTOKENPoolhiLK7g.name.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressN5LVDDl = "0x0000000000000000000000000000000000000001"
		const addressmTnRNFj = accounts[4]
		const addresstrePL3F = accounts[3]
		const BACMARSLPTOKENPoolRbQJcV = await BACMARSLPTOKENPool.new(addressN5LVDDl, addressmTnRNFj, addresstrePL3F, {from: accounts[2]});
		const uintAmVAmz = BigInt("1648")
		const uint256vNzPezS = await BACMARSLPTOKENPoolRbQJcV.notifyRewardAmount.call(uintAmVAmz, {from: accounts[3]});
		await BACMARSLPTOKENPoolRbQJcV.onlyRewardsDistribution.call({from: accounts[3]});
		const stringz4dnQyS = await BACMARSLPTOKENPoolRbQJcV.symbol.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPoolRbQJcV.notifyRewardAmount.call(uintAmVAmz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressfJWsN4 = accounts[3]
		const addressIfuja03 = accounts[5]
		const addressjXvsa3X = accounts[2]
		const BACMARSLPTOKENPoolhiLK7g = await BACMARSLPTOKENPool.new(addressfJWsN4, addressIfuja03, addressjXvsa3X, {from: accounts[5]});
		const uintAwdH73w = BigInt("1069")
		const byteZkDlf6W = "0x171c16070f10081911020a151b1d161b0f1c0a09111105171214070707130516"
		const byteXlRG2i7 = "0x170a0f05040911140f0019070a0109181f07101215171d1c1a131d040c1d0408"
		const uintareeBoY = BigInt("36")
		const uintbWlp6o2 = BigInt("355")
		const uintwlpBRBv = BigInt("1711")
		const addressR6Uzmz = accounts[4]
		await BACMARSLPTOKENPoolhiLK7g.exit.call({from: accounts[4]});
		const uint256Ae5DOiQ = await BACMARSLPTOKENPoolhiLK7g.notifyRewardAmount.call(uintAwdH73w, {from: accounts[4]});
		const uint256ytIWS1P = await BACMARSLPTOKENPoolhiLK7g.stakeWithPermit.call(uintwlpBRBv, uintbWlp6o2, uintareeBoY, byteXlRG2i7, byteZkDlf6W, {from: accounts[3]});
		const addressSxxnPHA = await BACMARSLPTOKENPoolhiLK7g.updateReward.call(addressR6Uzmz, {from: accounts[2]});

		await expect(BACMARSLPTOKENPoolhiLK7g.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringw8EW9HH = "BD63SlHiC8N3gHRdFvyzUbg"
		const stringz7HQYEa = "rhGSnHrsURzXM09BrAIXZa1SI14zGxhrQDBt8g45VrRnQNXXBxY6MlDLFTxpJ5"
		const uintQopqr3L = BigInt("69")
		const BACMARSLPTOKENPoolt75boKW = await BACMARSLPTOKENPool.new(stringw8EW9HH, stringz7HQYEa, uintQopqr3L, {from: accounts[1]});
		const uinto9kpBv8 = BigInt("1755")
		const addressexuHga7 = accounts[2]
		const uint256W1dnhok = await BACMARSLPTOKENPoolt75boKW.notifyRewardAmount.call(uinto9kpBv8, {from: accounts[2]});
		const uint256Vzuwr48 = await BACMARSLPTOKENPoolt75boKW.earned.call(addressexuHga7, {from: accounts[1]});
		const stringvFAMqY6 = await BACMARSLPTOKENPoolt75boKW.name.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressNdcJQ3Z = accounts[3]
		const addressqABXnr = accounts[5]
		const addressXUbPPwG = accounts[2]
		const BACMARSLPTOKENPoolhiLK7g = await BACMARSLPTOKENPool.new(addressNdcJQ3Z, addressqABXnr, addressXUbPPwG, {from: accounts[5]});
		const uintaLUsqIY = BigInt("1144")
		await BACMARSLPTOKENPoolhiLK7g.getReward.call({from: accounts[3]});
		const uint256oxD1hQN = await BACMARSLPTOKENPoolhiLK7g.withdraw.call(uintaLUsqIY, {from: accounts[1]});
		const stringLANi2RP = await BACMARSLPTOKENPoolhiLK7g.symbol.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolhiLK7g.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressmfCXsJb = accounts[3]
		const addressC4KVbvw = accounts[5]
		const addressyGL6Eg3 = accounts[2]
		const BACMARSLPTOKENPoolhiLK7g = await BACMARSLPTOKENPool.new(addressmfCXsJb, addressC4KVbvw, addressyGL6Eg3, {from: accounts[5]});
		const uintXGq5uGF = BigInt("451")
		const byteizQHMPp = "0x031e1d160d171e1b1802021f0c0a000b131a1d0f011c0d0c1b181a0703102000"
		const bytevNoisbJ = "0x0312110f1b10080412090002190407190e090e071b1e0f041d001a1b1d0e1711"
		const uintBdHo9V = BigInt("89")
		const uintsWiiIJj = BigInt("2031")
		const uint2gy06E = BigInt("575")
		const uint256N0rObY = await BACMARSLPTOKENPoolhiLK7g.stake.call(uintXGq5uGF, {from: "0x0000000000000000000000000000000000000001"});
		const stringLANi2RP = await BACMARSLPTOKENPoolhiLK7g.symbol.call({from: accounts[4]});
		const uint256j8Ht9oN = await BACMARSLPTOKENPoolhiLK7g.stakeWithPermit.call(uint2gy06E, uintsWiiIJj, uintBdHo9V, bytevNoisbJ, byteizQHMPp, {from: accounts[2]});
		const stringhGWpEhM = await BACMARSLPTOKENPoolhiLK7g.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BACMARSLPTOKENPoolhiLK7g.stake.call(uintXGq5uGF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringyIN6Qss = "YXero5ugCr31KkAtW6nPgw1V2tzL7IlMbKfR"
		const stringg0wySLC = "2vpatqAWPxqqm3DlSwGWuvQdpRsGeyXhPwAUK3Mrh4dW0CskW8MF3G2DMpn9ZwNUUja7f1x"
		const uintjAyIxpO = BigInt("58")
		const BACMARSLPTOKENPooltNXALqi = await BACMARSLPTOKENPool.new(stringyIN6Qss, stringg0wySLC, uintjAyIxpO, {from: accounts[4]});
		const addressPfya1M = accounts[4]
		const uintHeWCfQC = BigInt("1135")
		await BACMARSLPTOKENPooltNXALqi.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const stringP2cdsx4 = await BACMARSLPTOKENPooltNXALqi.symbol.call({from: accounts[2]});
		const addressKuzyWLn = await BACMARSLPTOKENPooltNXALqi.updateReward.call(addressPfya1M, {from: accounts[5]});
		await BACMARSLPTOKENPooltNXALqi.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256rOLbj00 = await BACMARSLPTOKENPooltNXALqi.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256nwG6EAl = await BACMARSLPTOKENPooltNXALqi.withdraw.call(uintHeWCfQC, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrCFbqCj = "o26tzU9ap5qnO7h76myRmCEWOVNma8zWSc0sDdt9tSUc"
		const stringQUEmi0K = "IrjfOdQVGkzndGrqiBbxIGFKwLTeSwcRdKqN5m"
		const uinttxXmkIa = BigInt("82")
		const BACMARSLPTOKENPoolIOjR1v = await BACMARSLPTOKENPool.new(stringrCFbqCj, stringQUEmi0K, uinttxXmkIa, {from: accounts[4]});
		const byteOLaeg4U = "0x16011a0c1714080e04150b1514001616140f0a101208011d0f15111f0e092011"
		const byteObjEj8 = "0x0f130f031f0111170717051d1d1c010c131d201c020d16141e030a171f1e1f18"
		const uintXfLVSry = BigInt("212")
		const uinty2sPvmf = BigInt("971")
		const uintnNI9gT = BigInt("2001")
		const uintTBvCDiV = BigInt("845")
		const uint256NVZxlXS = await BACMARSLPTOKENPoolIOjR1v.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256ZFw2BZy = await BACMARSLPTOKENPoolIOjR1v.stakeWithPermit.call(uintnNI9gT, uinty2sPvmf, uintXfLVSry, byteObjEj8, byteOLaeg4U, {from: accounts[0]});
		const uint256XpBmhYk = await BACMARSLPTOKENPoolIOjR1v.getRewardForDuration.call({from: accounts[0]});
		const uint2562ZqJ8f = await BACMARSLPTOKENPoolIOjR1v.withdraw.call(uintTBvCDiV, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringpVkJJ6S = "Y1TDeBNWmM3PlG8CTvfuwtT9sbwGPEh4XwgkIf"
		const stringOQVbNn = "rvTtoQBNBNZLComLHQZFPGkj6KkM2DQSsNVNBrSEBleoulWk63Jicjb5HYNB6EitI2fTNDieK60uENBG3MYKjd5lgCYF"
		const uintRT3vsI0 = BigInt("31")
		const BACMARSLPTOKENPoolMYPowop = await BACMARSLPTOKENPool.new(stringpVkJJ6S, stringOQVbNn, uintRT3vsI0, {from: accounts[2]});
		const uintftnWPkM = BigInt("1455")
		const bytetVZfw6t = "0x05061206031c09050c06041d190117020a201f170d021801080f0202130a0516"
		const byteFwh54K = "0x0e1d1b1711060f12031b07061110121f100e100705050611001d0f1708091916"
		const uintgNMrLny = BigInt("119")
		const uintqedlCIZ = BigInt("241")
		const uintHuxsdCJ = BigInt("1795")
		const addressafHtwOQ = accounts[5]
		const byteopBTGfd = "0x200616031b1b1908060b060d14161f160f050c061e0e120906170a01050f1d09"
		const bytey4t12qx = "0x0d1d061b161d1c080c1a010a1e03080d03140a07041c10140f04010d110e190a"
		const uintqwlgTjJ = BigInt("140")
		const uintQoHfLL = BigInt("123")
		const uintTQ4ieu1 = BigInt("1441")
		const uint256nqxaLlt = await BACMARSLPTOKENPoolMYPowop.notifyRewardAmount.call(uintftnWPkM, {from: accounts[2]});
		const uint256ktXL88M = await BACMARSLPTOKENPoolMYPowop.stakeWithPermit.call(uintHuxsdCJ, uintqedlCIZ, uintgNMrLny, byteFwh54K, bytetVZfw6t, {from: accounts[1]});
		const uint256zxotdSI = await BACMARSLPTOKENPoolMYPowop.earned.call(addressafHtwOQ, {from: accounts[1]});
		const uint256wtM3Q6Q = await BACMARSLPTOKENPoolMYPowop.stakeWithPermit.call(uintTQ4ieu1, uintQoHfLL, uintqwlgTjJ, bytey4t12qx, byteopBTGfd, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressbJezPWO = accounts[3]
		const addressasCPEyq = accounts[5]
		const addressVhSY7VO = accounts[2]
		const BACMARSLPTOKENPoolhiLK7g = await BACMARSLPTOKENPool.new(addressbJezPWO, addressasCPEyq, addressVhSY7VO, {from: accounts[5]});
		const addresszbuuD1O = accounts[5]
		const addressxGLKGTw = accounts[5]
		const uint256Tk2vsy = await BACMARSLPTOKENPoolhiLK7g.balanceOf.call(addresszbuuD1O, {from: accounts[3]});
		const addressmkTW56 = await BACMARSLPTOKENPoolhiLK7g.updateReward.call(addressxGLKGTw, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolhiLK7g.nonReentrant.call({from: accounts[3]});

		assert.equal(uint256Tk2vsy, BigInt("0"))
		await expect(BACMARSLPTOKENPoolhiLK7g.updateReward.call(addressxGLKGTw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHW8FFjS = "811FJyTbPAoCGFFxyVUY3N03zzBByqCunPGkCfrGCqpPIjASg7lBXbRxrUzZs95VnifYynorz"
		const stringj4eryqu = "2U5TgMrpWo98ZExfVGhv2LtWRDJRU8twjAK538oXzs7KA9lMUkgkloOHWSByeQdKgnfY1l6kcV5MlXBPlO3xizxpI"
		const uinth4ZcuI6 = BigInt("234")
		const BACMARSLPTOKENPoolQp22EeF = await BACMARSLPTOKENPool.new(stringHW8FFjS, stringj4eryqu, uinth4ZcuI6, {from: accounts[0]});
		const byteWWZFU3h = "0x101e15090513150a08181a11001309041617060a0a1e0e0a1c110e1e181e051e"
		const bytevmDPDXI = "0x1601061f060c081f0b1e04180a1c1a13060b0e151b1515111a01181404180710"
		const uinty2E2Ivo = BigInt("12")
		const uintseGYUcO = BigInt("1294")
		const uinthk1r8K9 = BigInt("769")
		const uintqR2XguB = BigInt("1478")
		const addressDY1WrIe = accounts[2]
		const uint256DP8wqaE = await BACMARSLPTOKENPoolQp22EeF.stakeWithPermit.call(uinthk1r8K9, uintseGYUcO, uinty2E2Ivo, bytevmDPDXI, byteWWZFU3h, {from: accounts[0]});
		const uint256SO0VxKf = await BACMARSLPTOKENPoolQp22EeF.rewardPerToken.call({from: accounts[0]});
		const uint256U2wPPfv = await BACMARSLPTOKENPoolQp22EeF.stake.call(uintqR2XguB, {from: accounts[4]});
		await BACMARSLPTOKENPoolQp22EeF.nonReentrant.call({from: accounts[4]});
		const uint256NEZZ65W = await BACMARSLPTOKENPoolQp22EeF.balanceOf.call(addressDY1WrIe, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSeGHdNP = "8iJAg9Bd6lOEeudVtYlFzlFfVfFMTCfU0I6m4TUK8PDV"
		const stringkCd5Hb3 = "dwunp"
		const uintPn3Xjrt = BigInt("125")
		const BACMARSLPTOKENPoolHqgGs31 = await BACMARSLPTOKENPool.new(stringSeGHdNP, stringkCd5Hb3, uintPn3Xjrt, {from: "0x0000000000000000000000000000000000000001"});
		const uintzb6E51g = BigInt("1138")
		const uint8lpPrlEJ = await BACMARSLPTOKENPoolHqgGs31.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const stringHZFXbFJ = await BACMARSLPTOKENPoolHqgGs31.symbol.call({from: accounts[1]});
		const uint256CumLR0G = await BACMARSLPTOKENPoolHqgGs31.stake.call(uintzb6E51g, {from: accounts[0]});
		await BACMARSLPTOKENPoolHqgGs31.getReward.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressncuqfk = accounts[3]
		const addressbRs6ahZ = accounts[5]
		const addressv3CsQqE = accounts[1]
		const BACMARSLPTOKENPoolaAeJ5ZE = await BACMARSLPTOKENPool.new(addressncuqfk, addressbRs6ahZ, addressv3CsQqE, {from: "0x0000000000000000000000000000000000000001"});
		const addressX98g9p2 = accounts[0]
		const uint256jrW2iY = await BACMARSLPTOKENPoolaAeJ5ZE.rewardPerToken.call({from: accounts[3]});
		const uint256Q507L9W = await BACMARSLPTOKENPoolaAeJ5ZE.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256Y1U2sv8 = await BACMARSLPTOKENPoolaAeJ5ZE.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256cee30nE = await BACMARSLPTOKENPoolaAeJ5ZE.balanceOf.call(addressX98g9p2, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolaAeJ5ZE.nonReentrant.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJPFa9Jz = "Q6mxxM9kRQmDaRViv4OKwzzkPARCDPtdFOBhSG4T62l0RPcQpCSpWYSPGDAfQzNrMyVq2xQldbSwCjtSmB8McvDARQrI"
		const stringkCeoUus = "7Q8S8uoOUUOF11GmVLkOaULhsaag"
		const uintC0qkHi = BigInt("210")
		const BACMARSLPTOKENPool1g47nn = await BACMARSLPTOKENPool.new(stringJPFa9Jz, stringkCeoUus, uintC0qkHi, {from: accounts[2]});
		const uint256UJEPRaA = await BACMARSLPTOKENPool1g47nn.rewardPerToken.call({from: accounts[4]});
		const uint256TYkKXDe = await BACMARSLPTOKENPool1g47nn.lastTimeRewardApplicable.call({from: accounts[3]});
		const stringyVcn5ei = await BACMARSLPTOKENPool1g47nn.symbol.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTyHmO7 = "XiiIXtIOZfIQV7bCfBJ69Axo70HjqaGD4Kf"
		const stringTQp1pw = "fH6oPRA1mSeys"
		const uintPKK3EwP = BigInt("81")
		const BACMARSLPTOKENPoolpfWwAj4 = await BACMARSLPTOKENPool.new(stringTyHmO7, stringTQp1pw, uintPKK3EwP, {from: accounts[2]});
		const uint256Kt1GyG8 = await BACMARSLPTOKENPoolpfWwAj4.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolpfWwAj4.exit.call({from: accounts[5]});
		const uint256rtrnn30 = await BACMARSLPTOKENPoolpfWwAj4.totalSupply.call({from: accounts[3]});
		await BACMARSLPTOKENPoolpfWwAj4.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjx0HqC3 = "BKAL7d3LAKuRPMRVcZ"
		const string9Ll1lr = "WpmybXhGiyhiVPJ82m0Rt2jcyheUxaIAxq1Bxhh4HW"
		const uintKfqW0yd = BigInt("104")
		const BACMARSLPTOKENPoolXQzCzHz = await BACMARSLPTOKENPool.new(stringjx0HqC3, string9Ll1lr, uintKfqW0yd, {from: accounts[2]});
		const byteCqtnNHA = "0x0e19080b051803120a16180b0b1e09161e1312141419040e0e151e1a0e131d05"
		const byteCePO7p = "0x0e1b0317180b0a061e13110a140c1d0e0803081b070203020c07150c03081b0b"
		const uintGqiT2R4 = BigInt("170")
		const uintIHlHUKH = BigInt("1397")
		const uintMzbDhc3 = BigInt("1173")
		const uintusj9DjY = BigInt("659")
		const uint256ZXE0ehS = await BACMARSLPTOKENPoolXQzCzHz.getRewardForDuration.call({from: accounts[3]});
		const uint256onywKo7 = await BACMARSLPTOKENPoolXQzCzHz.stakeWithPermit.call(uintMzbDhc3, uintIHlHUKH, uintGqiT2R4, byteCePO7p, byteCqtnNHA, {from: accounts[5]});
		const uint256TYF2Ra3 = await BACMARSLPTOKENPoolXQzCzHz.stake.call(uintusj9DjY, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringc9t5lHt = "Ea4aPl5Gg6icVFzzQ7CRKfIpDWFqLxKpcOPG9xiMw8ARoOXGUUxCY1W5lEpXJj"
		const stringKkIWL0S = "Mbm4UbufvtmPVtuxgaMrndgj6ohEAEzqEJvjPGaKAix64AR9TJQxlcx6awYiNSUEnUXicWQU9efcb9"
		const uintCUCsNoc = BigInt("202")
		const BACMARSLPTOKENPoolkcMuCh = await BACMARSLPTOKENPool.new(stringc9t5lHt, stringKkIWL0S, uintCUCsNoc, {from: accounts[4]});
		await BACMARSLPTOKENPoolkcMuCh.onlyRewardsDistribution.call({from: accounts[1]});
		await BACMARSLPTOKENPoolkcMuCh.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256eyszD5N = await BACMARSLPTOKENPoolkcMuCh.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolkcMuCh.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYFOXQhw = "YxqYJov5VGk5koY2XFZ0v3kzc7Wn19aNLRt3DGPCQzO38VGnhcJXMi5QI"
		const stringAYkkEyM = "1gIPdg4NW7z1MjBdJjCqSG56UuQJvgFlVBwJyyI4k"
		const uintfN6J94W = BigInt("45")
		const BACMARSLPTOKENPoolUi5NFLh = await BACMARSLPTOKENPool.new(stringYFOXQhw, stringAYkkEyM, uintfN6J94W, {from: accounts[0]});
		const addressArAKNh = accounts[0]
		const uintAwt7yAU = BigInt("1313")
		const addressDTCG95x = await BACMARSLPTOKENPoolUi5NFLh.updateReward.call(addressArAKNh, {from: accounts[3]});
		await BACMARSLPTOKENPoolUi5NFLh.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256dUeSNPN = await BACMARSLPTOKENPoolUi5NFLh.stake.call(uintAwt7yAU, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const strings25949d = "rsSTz096lZm6IUtITLmSM6F2NB"
		const stringU2NKsoZ = "5NMrYtSWcrybfMdaFzB7KHasJdKHji2g3f4UAy7QSvq88ecdajkpWptOCsvjexld626"
		const uintvjV3fB = BigInt("150")
		const BACMARSLPTOKENPoolrAAc5la = await BACMARSLPTOKENPool.new(strings25949d, stringU2NKsoZ, uintvjV3fB, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolrAAc5la.getReward.call({from: accounts[1]});
		const stringco4CCx6 = await BACMARSLPTOKENPoolrAAc5la.name.call({from: accounts[4]});
		await BACMARSLPTOKENPoolrAAc5la.getReward.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressWtJuCp = accounts[3]
		const addressRz77gGy = accounts[5]
		const addressR02VIxm = accounts[2]
		const BACMARSLPTOKENPoolhiLK7g = await BACMARSLPTOKENPool.new(addressWtJuCp, addressRz77gGy, addressR02VIxm, {from: accounts[5]});
		const uintWMTt2ZU = BigInt("70")
		const uintDmM7F5L = BigInt("547")
		const uint256KXR5ubW = await BACMARSLPTOKENPoolhiLK7g.notifyRewardAmount.call(uintWMTt2ZU, {from: accounts[3]});
		await BACMARSLPTOKENPoolhiLK7g.getReward.call({from: accounts[3]});
		const uint256epb355O = await BACMARSLPTOKENPoolhiLK7g.withdraw.call(uintDmM7F5L, {from: accounts[0]});

		await expect(BACMARSLPTOKENPoolhiLK7g.notifyRewardAmount.call(uintWMTt2ZU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string1vjgaK = "UjeRCO9nEhtPTuDyHEkPqsgwvr0V98bjBYwkDeBJJhJQH"
		const stringbXZI6j = "KD1uXIEXbeHYOkjjQfGB"
		const uintAVN6iBd = BigInt("146")
		const BACMARSLPTOKENPoolwyIW8FJ = await BACMARSLPTOKENPool.new(string1vjgaK, stringbXZI6j, uintAVN6iBd, {from: accounts[0]});
		const uintJtmW7my = BigInt("493")
		await BACMARSLPTOKENPoolwyIW8FJ.getReward.call({from: accounts[0]});
		const uint256WpViZEX = await BACMARSLPTOKENPoolwyIW8FJ.withdraw.call(uintJtmW7my, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXPCiGic = "zUslytmDJ2aFcba3MfDvfEvQaY1EMongIzqD"
		const stringiB1dThh = "HjTpGr2jfNmwjUZxXvUdMX4futYxmKFNfxKCKmunWsg13dfyD6WIV1AFShPT8WdxCUs"
		const uintFwTZMsP = BigInt("8")
		const BACMARSLPTOKENPoolp4fgjG = await BACMARSLPTOKENPool.new(stringXPCiGic, stringiB1dThh, uintFwTZMsP, {from: accounts[2]});
		const uintLXwPRe6 = BigInt("1745")
		const uint256UUgYweT = await BACMARSLPTOKENPoolp4fgjG.getRewardForDuration.call({from: accounts[1]});
		const uint256TKADdh5 = await BACMARSLPTOKENPoolp4fgjG.withdraw.call(uintLXwPRe6, {from: accounts[0]});
		const stringwFt0rch = await BACMARSLPTOKENPoolp4fgjG.symbol.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWEJ5aDB = "sCcliWF71ilS"
		const stringy3aQ3Y = "MOhR1B7Qo"
		const uintnBAt5i = BigInt("215")
		const BACMARSLPTOKENPoolrQ8Wq2 = await BACMARSLPTOKENPool.new(stringWEJ5aDB, stringy3aQ3Y, uintnBAt5i, {from: accounts[1]});
		const addressXscyvqI = accounts[0]
		const uint256azxHxwb = await BACMARSLPTOKENPoolrQ8Wq2.rewardPerToken.call({from: accounts[1]});
		const uint256uZFdvYP = await BACMARSLPTOKENPoolrQ8Wq2.totalSupply.call({from: accounts[4]});
		const uint256eIZrIx7 = await BACMARSLPTOKENPoolrQ8Wq2.balanceOf.call(addressXscyvqI, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringDV1JJgW = "VeeT"
		const stringJsnkql = "wlwCfDUja1DygWRNITFUtDZZMTWrw0ig694LhyvY5sQiFPt85Ii2E"
		const uintzDmy4Rm = BigInt("171")
		const BACMARSLPTOKENPoolWaMXJKt = await BACMARSLPTOKENPool.new(stringDV1JJgW, stringJsnkql, uintzDmy4Rm, {from: accounts[2]});
		const uintlsjMVvk = BigInt("1645")
		const stringcfWghBY = await BACMARSLPTOKENPoolWaMXJKt.symbol.call({from: accounts[1]});
		await BACMARSLPTOKENPoolWaMXJKt.getReward.call({from: accounts[4]});
		const uint256LaWVTx1 = await BACMARSLPTOKENPoolWaMXJKt.withdraw.call(uintlsjMVvk, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTxs0yEs = "2cB5tjX9rimBPSiFqDASL8HzzJTaxdkJT"
		const stringge0W7IY = "aS68AI8mcsYRvHdx"
		const uintTL6jfOL = BigInt("93")
		const BACMARSLPTOKENPooluO3n3DZ = await BACMARSLPTOKENPool.new(stringTxs0yEs, stringge0W7IY, uintTL6jfOL, {from: accounts[1]});
		const addressQy1LQ1D = accounts[0]
		const uint256zpnB5Kd = await BACMARSLPTOKENPooluO3n3DZ.balanceOf.call(addressQy1LQ1D, {from: "0x0000000000000000000000000000000000000001"});
		const uint8w4CFmlE = await BACMARSLPTOKENPooluO3n3DZ.decimals.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlVYkMId = "n166zOF0a4iC0GNta4mxc3pgDf0Y83NWi9QtB1pgQ93zChz6dDA9EyChMkZG9Gek1uwVm1SzQtPHMrTLUWaNZxMQwokgM"
		const stringE8NyrEH = "pufD5cHv98rdTHWWzg4Gia8M1sQcoBJFGWfR7QwPv20bydaQi72Y0T7Ez7SJzItCzd7gwhfpdugLms7dOwYtYZawVZ"
		const uintJZ5DwV = BigInt("11")
		const BACMARSLPTOKENPoolh8UMChX = await BACMARSLPTOKENPool.new(stringlVYkMId, stringE8NyrEH, uintJZ5DwV, {from: accounts[3]});
		const addressbw51QWT = accounts[5]
		const uint256vtajY8l = await BACMARSLPTOKENPoolh8UMChX.earned.call(addressbw51QWT, {from: accounts[0]});
		const stringOCrcXJw = await BACMARSLPTOKENPoolh8UMChX.symbol.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringunT7Q6Q = "eIn3RNWJS"
		const stringR5XWgC0 = "3zkY9RnziqnURxHGI2qw1veXc"
		const uintEXSCWj1 = BigInt("212")
		const BACMARSLPTOKENPoolFuXuSN = await BACMARSLPTOKENPool.new(stringunT7Q6Q, stringR5XWgC0, uintEXSCWj1, {from: accounts[2]});
		await BACMARSLPTOKENPoolFuXuSN.getReward.call({from: accounts[0]});
		const uint256MWCBKe6 = await BACMARSLPTOKENPoolFuXuSN.totalSupply.call({from: accounts[1]});
		const stringnypWZMC = await BACMARSLPTOKENPoolFuXuSN.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsZn4bq0 = "xqoQlTcWof42rrpNWTVjH6dyKW6VfEsySsB2mN4EeaLcz6Q14mwAyxi2IGyWERitk77WsLqqORJSENEIOe3SHT"
		const stringPKIvKt = "1KborB4saZA4Ah40ENRuVOSi2QnaZD7sQtooTm2eMYtbO8u4ZQ8Oi4xn0EMWhtevZAAIya06hjP4MqE"
		const uintE49FFMI = BigInt("209")
		const BACMARSLPTOKENPoolD2Q0U0F = await BACMARSLPTOKENPool.new(stringsZn4bq0, stringPKIvKt, uintE49FFMI, {from: accounts[3]});
		const address5jBSSt = accounts[1]
		const uintmxrKnRx = BigInt("1431")
		const uint256SjuaSGB = await BACMARSLPTOKENPoolD2Q0U0F.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256VfsB9XD = await BACMARSLPTOKENPoolD2Q0U0F.balanceOf.call(address5jBSSt, {from: accounts[3]});
		const uint256QubQEPL = await BACMARSLPTOKENPoolD2Q0U0F.withdraw.call(uintmxrKnRx, {from: "0x0000000000000000000000000000000000000001"});
		const uint256e9CcyZy = await BACMARSLPTOKENPoolD2Q0U0F.lastTimeRewardApplicable.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string7ZwkIu = "9hpct6vgpok24s7XnVJpkxtLnQiR4piOBOkHtbwezIWdoGDfKEfDD8q"
		const stringVEyjmFq = "b7eqLTUhSOUT"
		const uintYwi8Mez = BigInt("5")
		const BACMARSLPTOKENPoolaCSrX1 = await BACMARSLPTOKENPool.new(string7ZwkIu, stringVEyjmFq, uintYwi8Mez, {from: accounts[5]});
		const uintUs9BKE = BigInt("1635")
		const uintvkSylio = BigInt("853")
		await BACMARSLPTOKENPoolaCSrX1.nonReentrant.call({from: accounts[1]});
		const uint256gKVYKG1 = await BACMARSLPTOKENPoolaCSrX1.stake.call(uintUs9BKE, {from: accounts[0]});
		const uint256Sk24dG = await BACMARSLPTOKENPoolaCSrX1.totalSupply.call({from: accounts[3]});
		const uint256M00trZD = await BACMARSLPTOKENPoolaCSrX1.getRewardForDuration.call({from: accounts[3]});
		const uint256oGaxdx = await BACMARSLPTOKENPoolaCSrX1.withdraw.call(uintvkSylio, {from: accounts[1]});
		const uint256p53mAzV = await BACMARSLPTOKENPoolaCSrX1.rewardPerToken.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTNLAE2b = "pwJbsU3NvXsudpzBys"
		const stringn9qiLB3 = "FhnCAepD0zX69PsA2PqXJbaVtBRau2zSQDENvrBq4ipaHMwCxKS59vBJmn7Zl8tpBWwFQ4LPbExc5FDCdb2YWj5qlX4UG8I7"
		const uintrenrz5e = BigInt("19")
		const BACMARSLPTOKENPoolXIfiEff = await BACMARSLPTOKENPool.new(stringTNLAE2b, stringn9qiLB3, uintrenrz5e, {from: accounts[1]});
		const uint3OI8wX = BigInt("425")
		const uint256kAvzZ14 = await BACMARSLPTOKENPoolXIfiEff.rewardPerToken.call({from: accounts[2]});
		const uint8kecHArQ = await BACMARSLPTOKENPoolXIfiEff.decimals.call({from: accounts[1]});
		await BACMARSLPTOKENPoolXIfiEff.nonReentrant.call({from: accounts[3]});
		const stringPWssYXu = await BACMARSLPTOKENPoolXIfiEff.symbol.call({from: accounts[3]});
		const uint256rBctRTd = await BACMARSLPTOKENPoolXIfiEff.stake.call(uint3OI8wX, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pJDCF22 = await BACMARSLPTOKENPoolXIfiEff.lastTimeRewardApplicable.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringz5NWUci = "1S2wrwZkPkb8KFauVEn1KOfYe5da"
		const stringquZjGt2 = "e7FLg8SEAnbOJHof"
		const uinttThgqpj = BigInt("195")
		const BACMARSLPTOKENPoolApXtCXV = await BACMARSLPTOKENPool.new(stringz5NWUci, stringquZjGt2, uinttThgqpj, {from: accounts[5]});
		const uint256fglRuS9 = await BACMARSLPTOKENPoolApXtCXV.rewardPerToken.call({from: accounts[1]});
		await BACMARSLPTOKENPoolApXtCXV.onlyRewardsDistribution.call({from: accounts[4]});
		const stringmo0rPkO = await BACMARSLPTOKENPoolApXtCXV.name.call({from: accounts[5]});
		const uint256oWDbAjm = await BACMARSLPTOKENPoolApXtCXV.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringC9S7p7 = "nyCP2fPyauqkADwwdI0CWVPeziyg"
		const stringC2EYLI2 = "HcjxHpxK3JBxvQCfgaBA5h9Pkm4U3qb5YECovngdPhe9xkO"
		const uintmbb91aV = BigInt("107")
		const BACMARSLPTOKENPoolr2umv46 = await BACMARSLPTOKENPool.new(stringC9S7p7, stringC2EYLI2, uintmbb91aV, {from: accounts[0]});
		const addressv4wZtUp = accounts[4]
		const bytedcUDHOI = "0x020304160d0a15000b0305080d1a1c0a1805131c101f1719070a1d0f0e001017"
		const byteaWgMIef = "0x0c1015100e1d0c0b19160b0a130c180202161b07120d071f0118160915151e08"
		const uintOBRxRcV = BigInt("93")
		const uintR4RBXA6 = BigInt("857")
		const uintk82PjQp = BigInt("1595")
		const uinteimTLuL = BigInt("2002")
		const uintZQ0sMP = BigInt("1012")
		const uint256wBUFHgv = await BACMARSLPTOKENPoolr2umv46.earned.call(addressv4wZtUp, {from: accounts[5]});
		const uint256P8otVH3 = await BACMARSLPTOKENPoolr2umv46.getRewardForDuration.call({from: accounts[0]});
		const uint256GmxPQTB = await BACMARSLPTOKENPoolr2umv46.stakeWithPermit.call(uintk82PjQp, uintR4RBXA6, uintOBRxRcV, byteaWgMIef, bytedcUDHOI, {from: accounts[1]});
		const uint256sKBXF4z = await BACMARSLPTOKENPoolr2umv46.notifyRewardAmount.call(uinteimTLuL, {from: accounts[5]});
		const uint256plDOYmn = await BACMARSLPTOKENPoolr2umv46.notifyRewardAmount.call(uintZQ0sMP, {from: accounts[2]});
		const uint256ub35S0 = await BACMARSLPTOKENPoolr2umv46.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvTSNHiC = "tOUALoqu8cGm"
		const stringobX64Sa = "nfn9UNdPQNDA4PVy6rvQYcFP8KLs9UP7dSNuoLx6"
		const uintyWShiuN = BigInt("171")
		const BACMARSLPTOKENPooljWuhSD0 = await BACMARSLPTOKENPool.new(stringvTSNHiC, stringobX64Sa, uintyWShiuN, {from: accounts[4]});
		const uint256HSSeBlD = await BACMARSLPTOKENPooljWuhSD0.totalSupply.call({from: accounts[1]});
		const uint256JCQonCK = await BACMARSLPTOKENPooljWuhSD0.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256ejaoPvR = await BACMARSLPTOKENPooljWuhSD0.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTyCP9y1 = "NmL"
		const stringSQDckPt = "pPfr"
		const uintxGy4mkh = BigInt("170")
		const BACMARSLPTOKENPoolLHYEKXV = await BACMARSLPTOKENPool.new(stringTyCP9y1, stringSQDckPt, uintxGy4mkh, {from: accounts[2]});
		const addressmRURGUG = accounts[4]
		const addressQ5NbcuN = accounts[4]
		const uint256XpVLh4r = await BACMARSLPTOKENPoolLHYEKXV.balanceOf.call(addressmRURGUG, {from: accounts[3]});
		const uint256u09VNxj = await BACMARSLPTOKENPoolLHYEKXV.getRewardForDuration.call({from: accounts[3]});
		const uint256vSKQFiH = await BACMARSLPTOKENPoolLHYEKXV.earned.call(addressQ5NbcuN, {from: accounts[4]});
		const stringAEmaIEX = await BACMARSLPTOKENPoolLHYEKXV.symbol.call({from: accounts[0]});
		await BACMARSLPTOKENPoolLHYEKXV.getReward.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJjRh4Hc = "2EX6yrjKOnnK94VgqE4q6ehvVM5vITqfq66GnakUUzsK"
		const stringheSZ731 = "JpnpAD8uc3U4sKKqWw2"
		const uintLvJ86gk = BigInt("44")
		const BACMARSLPTOKENPoolAAFBVtR = await BACMARSLPTOKENPool.new(stringJjRh4Hc, stringheSZ731, uintLvJ86gk, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NtSSTrU = await BACMARSLPTOKENPoolAAFBVtR.getRewardForDuration.call({from: accounts[3]});
		const uint256Rjskiui = await BACMARSLPTOKENPoolAAFBVtR.rewardPerToken.call({from: accounts[5]});
		await BACMARSLPTOKENPoolAAFBVtR.exit.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringIK2dZN1 = "Mdqhh1jqzuCl1QPJlGuxDz0y69CCOe6bbC4ey3sdjkWMNhpw"
		const stringFhqtRP = "NOXPCtHBqYXCmcF9Ir6"
		const uintgq7WuOj = BigInt("152")
		const BACMARSLPTOKENPoolVembPdE = await BACMARSLPTOKENPool.new(stringIK2dZN1, stringFhqtRP, uintgq7WuOj, {from: accounts[4]});
		const uintm9wMqRS = BigInt("1050")
		const addressDg95ukQ = accounts[3]
		const uint8mrdjgEd = await BACMARSLPTOKENPoolVembPdE.decimals.call({from: accounts[1]});
		const stringNzacsrs = await BACMARSLPTOKENPoolVembPdE.symbol.call({from: accounts[4]});
		await BACMARSLPTOKENPoolVembPdE.exit.call({from: accounts[3]});
		const uint256NV6bt76 = await BACMARSLPTOKENPoolVembPdE.notifyRewardAmount.call(uintm9wMqRS, {from: accounts[3]});
		const uint256kCeYyKn = await BACMARSLPTOKENPoolVembPdE.earned.call(addressDg95ukQ, {from: accounts[2]});
		const uint256RBMH6Ti = await BACMARSLPTOKENPoolVembPdE.lastTimeRewardApplicable.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtMz6tJt = "uDf8xuieFjfFwIKYMUFnzUOz9PdX"
		const stringJKvZ5Te = "XimAeU3BEAJVewdBpdsPmDIv81yhqvXorSh5nWLH3BSK1baARoLkwWqaWwpdii85PR6bcxLevv14cHavBRLK"
		const uintJSQKq0D = BigInt("214")
		const BACMARSLPTOKENPoolPTLetPI = await BACMARSLPTOKENPool.new(stringtMz6tJt, stringJKvZ5Te, uintJSQKq0D, {from: accounts[1]});
		const byteuKMv5lJ = "0x1c071e0118080b0b0b030b060e161b171b03110e08151c081b1c120b1920060e"
		const bytelsl8P5 = "0x111f0a02110c1c07111e15180f0c0c08000a03051d170e0d0b03040c0d04130c"
		const uintaSflhG = BigInt("66")
		const uintlDOaevb = BigInt("782")
		const uintBZmH7UB = BigInt("1957")
		const uintO9ecsAm = BigInt("977")
		const stringnnnYFT = await BACMARSLPTOKENPoolPTLetPI.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256IsNgOxE = await BACMARSLPTOKENPoolPTLetPI.stakeWithPermit.call(uintBZmH7UB, uintlDOaevb, uintaSflhG, bytelsl8P5, byteuKMv5lJ, {from: accounts[4]});
		const uint256HD8Znmk = await BACMARSLPTOKENPoolPTLetPI.getRewardForDuration.call({from: accounts[3]});
		const uint256Mt2gJb1 = await BACMARSLPTOKENPoolPTLetPI.notifyRewardAmount.call(uintO9ecsAm, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkSzBhQZ = "ozB0nLU"
		const stringCJivKb6 = "2aCSO8"
		const uintft0eDuk = BigInt("134")
		const BACMARSLPTOKENPoolW1GZEck = await BACMARSLPTOKENPool.new(stringkSzBhQZ, stringCJivKb6, uintft0eDuk, {from: accounts[1]});
		const addressRdcon5P = accounts[1]
		const uint8F8d3zp2 = await BACMARSLPTOKENPoolW1GZEck.decimals.call({from: accounts[0]});
		await BACMARSLPTOKENPoolW1GZEck.nonReentrant.call({from: accounts[4]});
		const uint256euJ2zvb = await BACMARSLPTOKENPoolW1GZEck.totalSupply.call({from: accounts[4]});
		const addressVXJLbcP = await BACMARSLPTOKENPoolW1GZEck.updateReward.call(addressRdcon5P, {from: accounts[3]});
		const uint256BuCuafC = await BACMARSLPTOKENPoolW1GZEck.totalSupply.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringeDVR5pu = "y2bbU7bx52lkYmR4a85cAr4ChEGR7OjWhw6UgfOzSNhY9GT2b7H56SMBKh6wwVQrOQOycbcouMlMvFNghmYJIk"
		const stringQMTRcbU = "S8u50b0OEMHlI62INgSb15Tujrycuggvb1dZf1JFJ6SBNT1k0PGFSJx5DgI6Wp9hD"
		const uintIq9Xf57 = BigInt("186")
		const BACMARSLPTOKENPoolxafgvLT = await BACMARSLPTOKENPool.new(stringeDVR5pu, stringQMTRcbU, uintIq9Xf57, {from: accounts[3]});
		const uint4uBicW = BigInt("1847")
		await BACMARSLPTOKENPoolxafgvLT.getReward.call({from: accounts[3]});
		const uint256NCwLVFq = await BACMARSLPTOKENPoolxafgvLT.rewardPerToken.call({from: accounts[5]});
		await BACMARSLPTOKENPoolxafgvLT.onlyRewardsDistribution.call({from: accounts[1]});
		await BACMARSLPTOKENPoolxafgvLT.getReward.call({from: accounts[2]});
		const uint256k5kGvHq = await BACMARSLPTOKENPoolxafgvLT.withdraw.call(uint4uBicW, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQwx3YZo = "VyvltBhJcrcBRip1zYTdrodduFVG8zd4yVKmiTgYJ9Se0iGtne24AUDpQIWCVahzy2tjB3L"
		const stringBw7nbHE = "4XbCsgonx06TgsKGTRuSgCumdzPAoTULfyaCSdPd4PqrUMGQmV6qNDWwECYUy5NzkOzVWtOFErFwPiXrbQBRz"
		const uintvTWU3Ag = BigInt("230")
		const BACMARSLPTOKENPooloNEyIQq = await BACMARSLPTOKENPool.new(stringQwx3YZo, stringBw7nbHE, uintvTWU3Ag, {from: accounts[1]});
		const uint256d8bzM4f = await BACMARSLPTOKENPooloNEyIQq.lastTimeRewardApplicable.call({from: accounts[1]});
		await BACMARSLPTOKENPooloNEyIQq.getReward.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringynwsHD0 = "icEaumwBuf"
		const stringnnTC9i = "A3elDwvSCgoEfq9rHOJWvXxjwIdr6EKbL52s76w3B4IlFsJl93BwBxl9xlF0oEJrkb9n8Fr1Amtc4Hw2xQNs6un8"
		const uintJ6psoL8 = BigInt("166")
		const BACMARSLPTOKENPoolORlXsWR = await BACMARSLPTOKENPool.new(stringynwsHD0, stringnnTC9i, uintJ6psoL8, {from: accounts[5]});
		const uintGjVqnDw = BigInt("1535")
		await BACMARSLPTOKENPoolORlXsWR.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256QMJ5d6C = await BACMARSLPTOKENPoolORlXsWR.withdraw.call(uintGjVqnDw, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfgZBn27 = "hSi84EGTXY2fhk7SG3ilcAeA1Vdyqh5CjNUOrt3UFtpjcFWewdblanmfAY66JJK2LSFPFww6pwMBWr3ytCB9"
		const stringgGSbcGE = "qqgQjYLEkseYpolzceRwBIAWJEAAmKpQ0VzfHgZNQQxiC6F9b2"
		const uintvujeiVp = BigInt("247")
		const BACMARSLPTOKENPooljnVIiT2 = await BACMARSLPTOKENPool.new(stringfgZBn27, stringgGSbcGE, uintvujeiVp, {from: accounts[3]});
		const uintf1TPAcm = BigInt("1710")
		await BACMARSLPTOKENPooljnVIiT2.getReward.call({from: accounts[4]});
		const uint256wCuNbtj = await BACMARSLPTOKENPooljnVIiT2.getRewardForDuration.call({from: accounts[0]});
		await BACMARSLPTOKENPooljnVIiT2.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256J2qs7rE = await BACMARSLPTOKENPooljnVIiT2.stake.call(uintf1TPAcm, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringRpQrpg = "jNRA1tC8ZoY65EVEOkzOym7UELDapflMyIvzswYxXmJjboXkLw9ON6jnWaDUNwKrySxCpJWsrR1J"
		const stringYqUd7oA = "opqilcVVj1EuQQXa"
		const uintEaCbj6q = BigInt("120")
		const BACMARSLPTOKENPooll3tetJh = await BACMARSLPTOKENPool.new(stringRpQrpg, stringYqUd7oA, uintEaCbj6q, {from: "0x0000000000000000000000000000000000000001"});
		const addressCwQXzcU = accounts[1]
		const uint256PhWSKfA = await BACMARSLPTOKENPooll3tetJh.balanceOf.call(addressCwQXzcU, {from: accounts[3]});
		const stringEaAAknW = await BACMARSLPTOKENPooll3tetJh.symbol.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUe022NR = "QTouk1pYSXN"
		const stringu01isnL = "w3NYy4nit72wEAO896Db"
		const uintzeDpCHS = BigInt("79")
		const BACMARSLPTOKENPoolYxBBiBl = await BACMARSLPTOKENPool.new(stringUe022NR, stringu01isnL, uintzeDpCHS, {from: "0x0000000000000000000000000000000000000001"});
		const addressUxnAPol = "0x0000000000000000000000000000000000000001"
		const uint256QGjAp6v = await BACMARSLPTOKENPoolYxBBiBl.balanceOf.call(addressUxnAPol, {from: accounts[5]});
		const stringdP2xArL = await BACMARSLPTOKENPoolYxBBiBl.symbol.call({from: accounts[3]});
		const stringE7uzlSK = await BACMARSLPTOKENPoolYxBBiBl.symbol.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFNJ79PS = "xbbflwzW6P7J3njtDPSsukbYWFcafWGCaQ2ANpBgywGFx4rhrvF0Q"
		const stringsfakfxq = "FYCk8wQhvrVyIwuT5G1vjXgov5assYEwZD0FEcrJm6vvdlCBpl5WnxjfKnCxVgVbUmc28sHQmS"
		const uintJKDzU3N = BigInt("227")
		const BACMARSLPTOKENPoolJqJS5Vp = await BACMARSLPTOKENPool.new(stringFNJ79PS, stringsfakfxq, uintJKDzU3N, {from: accounts[2]});
		const byteblGL9Go = "0x1e15170a09201f0d191e171b0506070504061913140e040218130a0507011313"
		const byteeN8WaAQ = "0x0e000a081d1a1b1b1e18121b18071d07051900051708061811021c03130a1412"
		const uintFmXN2NX = BigInt("142")
		const uintzNRU3Ux = BigInt("1583")
		const uintmBQY69A = BigInt("640")
		const bytefcLTzva = "0x1212011906121e001e1a0309150f0412201b011f151d1b1f1415170202110e1a"
		const byteskRlrxh = "0x1212070b06181a0f121d05020b07020c0b180b0c09150d0b1d03010412111b0f"
		const uintiI6Aj9s = BigInt("80")
		const uintzwkUvV = BigInt("870")
		const uintTYm7yMV = BigInt("1318")
		const uintqp06JG4 = BigInt("834")
		const uint256ah7Lem3 = await BACMARSLPTOKENPoolJqJS5Vp.stakeWithPermit.call(uintmBQY69A, uintzNRU3Ux, uintFmXN2NX, byteeN8WaAQ, byteblGL9Go, {from: accounts[3]});
		const uint256KDCm4uh = await BACMARSLPTOKENPoolJqJS5Vp.stakeWithPermit.call(uintTYm7yMV, uintzwkUvV, uintiI6Aj9s, byteskRlrxh, bytefcLTzva, {from: accounts[2]});
		const uint256NYATsjr = await BACMARSLPTOKENPoolJqJS5Vp.stake.call(uintqp06JG4, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringxeQfpG7 = "IzVEDS5y68ws7A4t8HmhQFYyECJzIAqP5jwnQnh2NfYkftZRZNnzC"
		const stringyvfBfIL = "RG9c54fUYxmFLVr6h3GG7PKxFVz4llxGvckh"
		const uintqXEnhlX = BigInt("47")
		const BACMARSLPTOKENPoolZkjdU7P = await BACMARSLPTOKENPool.new(stringxeQfpG7, stringyvfBfIL, uintqXEnhlX, {from: accounts[0]});
		const uint256TFPcBan = await BACMARSLPTOKENPoolZkjdU7P.rewardPerToken.call({from: accounts[5]});
		const stringSdbtlgf = await BACMARSLPTOKENPoolZkjdU7P.symbol.call({from: accounts[2]});
		const uint8JKDxjGh = await BACMARSLPTOKENPoolZkjdU7P.decimals.call({from: accounts[5]});
		const uint256wpmskSx = await BACMARSLPTOKENPoolZkjdU7P.totalSupply.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressIOzgJBt = accounts[3]
		const addressKFDtDey = accounts[5]
		const addressYO8m3H3 = accounts[2]
		const BACMARSLPTOKENPoolhiLK7g = await BACMARSLPTOKENPool.new(addressIOzgJBt, addressKFDtDey, addressYO8m3H3, {from: accounts[5]});
		const byteFAZnn0 = "0x171c16070f10081911020a151b1d161b0f1c0a09111105171214070707130516"
		const byten1e8k2 = "0x170a0f05040911140fffffffff19070a0109181f07101215171d1c1a131d040c1d0408"
		const uintyD3LUlo = BigInt("36")
		const uinttM44IiK = BigInt("355")
		const uintuwsXQol = BigInt("1711")
		const uintkTHlAAK = BigInt("1638")
		const uint256ytIWS1P = await BACMARSLPTOKENPoolhiLK7g.stakeWithPermit.call(uintuwsXQol, uinttM44IiK, uintyD3LUlo, byten1e8k2, byteFAZnn0, {from: accounts[3]});
		await BACMARSLPTOKENPoolhiLK7g.exit.call({from: accounts[3]});
		const uint256d7FLwZK = await BACMARSLPTOKENPoolhiLK7g.notifyRewardAmount.call(uintkTHlAAK, {from: accounts[5]});

		await expect(BACMARSLPTOKENPoolhiLK7g.stakeWithPermit.call(uintuwsXQol, uinttM44IiK, uintyD3LUlo, byten1e8k2, byteFAZnn0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})