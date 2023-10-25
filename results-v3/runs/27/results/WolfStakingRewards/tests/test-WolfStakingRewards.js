const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const addressOBJtlz8 = accounts[3]
		const addressnCrrWST = accounts[1]
		const addressZFu4NuJ = accounts[3]
		const WolfStakingRewardsUisbth = await WolfStakingRewards.new(addressOBJtlz8, addressnCrrWST, addressZFu4NuJ, {from: accounts[0]});
		const uintGMHs7xn = BigInt("1108")
		const addresss6o8uXN = accounts[5]
		const uintQWDvoc7 = BigInt("1211")
		const uintSD7gdrv = BigInt("1703")
		const uint8n99xOZU = await WolfStakingRewardsUisbth.decimals.call({from: accounts[1]});
		const uint256Rrio5Fo = await WolfStakingRewardsUisbth.balanceOfPerPool.call(addresss6o8uXN, uintGMHs7xn, {from: accounts[4]});
		const uint256zMpNp2 = await WolfStakingRewardsUisbth.rewardPerToken.call(uintQWDvoc7, {from: accounts[1]});
		const uint256rSxxxuh = await WolfStakingRewardsUisbth.lastTimeRewardApplicable.call(uintSD7gdrv, {from: accounts[1]});

		await expect(WolfStakingRewardsUisbth.decimals.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressV1krNdu = accounts[1]
		const addressMhpLmIX = accounts[0]
		const addressY72BOfR = accounts[3]
		const WolfStakingRewardspg5ulb4 = await WolfStakingRewards.new(addressV1krNdu, addressMhpLmIX, addressY72BOfR, {from: accounts[0]});
		const uintM5fFvg = BigInt("108")
		const addressh0bXHBt = accounts[0]
		const uintPYOqFQ = BigInt("71")
		const uintikVtNuy = BigInt("133")
		const uintaraa9zF = BigInt("1360")
		const uint256VpIPqq6 = await WolfStakingRewardspg5ulb4.earned.call(addressh0bXHBt, uintM5fFvg, {from: accounts[1]});
		const uint256f9AXdqw = await WolfStakingRewardspg5ulb4.stake.call(uintikVtNuy, uintPYOqFQ, {from: accounts[0]});
		const stringldHSCy5 = await WolfStakingRewardspg5ulb4.name.call({from: accounts[1]});
		const uint256rzdpVQL = await WolfStakingRewardspg5ulb4.rewardPerToken.call(uintaraa9zF, {from: accounts[5]});
		await WolfStakingRewardspg5ulb4.onlyRewardsDistribution.call({from: accounts[3]});

		assert.equal(uint256VpIPqq6, BigInt("0"))
		await expect(WolfStakingRewardspg5ulb4.stake.call(uintikVtNuy, uintPYOqFQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringkYwtmP7 = "HokTtnYNX9af64BIOlNAeFox4SRdRxhGJPTxJp48PsDVXv9egf"
		const stringSe0w7ib = "eQxW5Cif0oUnhf07GSQWRkVA8FcWqq297DT0xDYyEtTm5KRQjxIH3dDlzJYGMHZCcWSxqZRa"
		const uintoQxA8F = BigInt("8")
		const WolfStakingRewardsFCFGpWx = await WolfStakingRewards.new(stringkYwtmP7, stringSe0w7ib, uintoQxA8F, {from: accounts[1]});
		const uintOsQVlNm = BigInt("419")
		const uintIhh08e = BigInt("1453")
		const addresstxLMH7 = accounts[2]
		const uintewpp9z6 = BigInt("297")
		const uintRLXdkFI = BigInt("1327")
		const uint256IMyNDiz = await WolfStakingRewardsFCFGpWx.exit.call(uintOsQVlNm, {from: accounts[2]});
		const uint256DEj2xx6 = await WolfStakingRewardsFCFGpWx.earned.call(addresstxLMH7, uintIhh08e, {from: accounts[2]});
		const uint256arrayfO3GZfV = await WolfStakingRewardsFCFGpWx.updateNotifyRewardAmount.call(uintewpp9z6, {from: accounts[2]});
		await WolfStakingRewardsFCFGpWx.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256avLbxtB = await WolfStakingRewardsFCFGpWx.getRewardForDuration.call(uintRLXdkFI, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringunq5naE = "KlhxP2LpWh"
		const stringWH59y2z = "4QjSv00MZNv"
		const uintkWq63d = BigInt("133")
		const WolfStakingRewardsk87zZi5 = await WolfStakingRewards.new(stringunq5naE, stringWH59y2z, uintkWq63d, {from: accounts[1]});
		const uintRwP4WcB = BigInt("1343")
		const uintYW9hKSu = BigInt("76")
		await WolfStakingRewardsk87zZi5.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256srTZs5v = await WolfStakingRewardsk87zZi5.exit.call(uintRwP4WcB, {from: accounts[3]});
		const stringw9e0GcG = await WolfStakingRewardsk87zZi5.name.call({from: accounts[3]});
		const uint256arrayaN8KoVD = await WolfStakingRewardsk87zZi5.updateNotifyRewardAmount.call(uintYW9hKSu, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringTyFfTJd = "Y5eX1BxDfVdPn5NaSysNYhryyGSXLpKryXCmVmRU6"
		const stringu9fuuVp = "0GOcrDV341r1JyRTUWGU4B"
		const uintrQEJaPy = BigInt("110")
		const WolfStakingRewardsrB49P40 = await WolfStakingRewards.new(stringTyFfTJd, stringu9fuuVp, uintrQEJaPy, {from: accounts[1]});
		const uintWL34RAF = BigInt("1477")
		const uintmToQlk3 = BigInt("244")
		const addressrIXFacR = accounts[5]
		const uintToROOst = BigInt("1917")
		const uintUp0jdF8 = BigInt("1342")
		const uint0HpGtA = BigInt("581")
		const uint256gd1tUk = await WolfStakingRewardsrB49P40.totalSupplyPerPool.call(uintWL34RAF, {from: accounts[1]});
		const uint256uEg8DEI = await WolfStakingRewardsrB49P40.earned.call(addressrIXFacR, uintmToQlk3, {from: accounts[2]});
		const uint256ezCykJv = await WolfStakingRewardsrB49P40.totalSupplyPerPool.call(uintToROOst, {from: accounts[1]});
		await WolfStakingRewardsrB49P40.onlyRewardsDistribution.call({from: accounts[2]});
		const uint2561L8QUo = await WolfStakingRewardsrB49P40.withdraw.call(uint0HpGtA, uintUp0jdF8, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressYMXdVJn = accounts[4]
		const addressYV1UVPq = accounts[1]
		const addressPLeAVdX = accounts[3]
		const WolfStakingRewardssHgHkAv = await WolfStakingRewards.new(addressYMXdVJn, addressYV1UVPq, addressPLeAVdX, {from: "0x0000000000000000000000000000000000000001"});
		const uintrwQGOeg = BigInt("1668")
		const uintn1VZTM = BigInt("1709")
		const addressojLPr5 = accounts[4]
		const uint256SzcC0Zy = await WolfStakingRewardssHgHkAv.totalSupplyPerPool.call(uintrwQGOeg, {from: accounts[5]});
		const uint256AhepmI6 = await WolfStakingRewardssHgHkAv.earned.call(addressojLPr5, uintn1VZTM, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressPJsrb4U = accounts[4]
		const addressh9QLHjr = accounts[4]
		const address9AJYAB = accounts[5]
		const WolfStakingRewardsRPpk1bR = await WolfStakingRewards.new(addressPJsrb4U, addressh9QLHjr, address9AJYAB, {from: accounts[1]});
		const uintZzfH6A7 = BigInt("179")
		const uintDzoaPIY = BigInt("684")
		const uint256arrayhKf6bCc = await WolfStakingRewardsRPpk1bR.updateNotifyRewardAmount.call(uintZzfH6A7, {from: accounts[4]});
		const uint256VuqNeGM = await WolfStakingRewardsRPpk1bR.totalSupplyPerPool.call(uintDzoaPIY, {from: accounts[0]});
		const stringXGqlq1X = await WolfStakingRewardsRPpk1bR.name.call({from: accounts[1]});

		await expect(WolfStakingRewardsRPpk1bR.updateNotifyRewardAmount.call(uintZzfH6A7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const string7yav23 = "OHgJiNTLSEgWbtTpSk6louM3TC3251OF5EiR9gRRPitoqDnuyuENP9Eon9tqmi57A5gJGFRlR3xhb9WFleVlvvPs70Ru4Kuh"
		const stringDLkYfLt = "H2RtM1S5LbSQfq9SElGWlmfLTfrnxi3rtmGHZblFT"
		const uintBGYnAC9 = BigInt("246")
		const WolfStakingRewardsrWz5xKV = await WolfStakingRewards.new(string7yav23, stringDLkYfLt, uintBGYnAC9, {from: accounts[0]});
		const uintwgvOn66 = BigInt("217")
		const addressasBNUK = "0x0000000000000000000000000000000000000001"
		const uintTbYhrWu = BigInt("85")
		const uintC2whj3A = BigInt("1820")
		const uintAgMhmnU = BigInt("1148")
		const uint8euO8i5A = await WolfStakingRewardsrWz5xKV.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsrWz5xKV.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256XFRkq43 = await WolfStakingRewardsrWz5xKV.earned.call(addressasBNUK, uintwgvOn66, {from: accounts[1]});
		const uint256XpTz66B = await WolfStakingRewardsrWz5xKV.exit.call(uintTbYhrWu, {from: accounts[4]});
		const uint256VEVV65i = await WolfStakingRewardsrWz5xKV.stake.call(uintAgMhmnU, uintC2whj3A, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressAhtkjhR = accounts[3]
		const addressY47379h = accounts[1]
		const addressJhekVu = accounts[3]
		const WolfStakingRewardsUisbth = await WolfStakingRewards.new(addressAhtkjhR, addressY47379h, addressJhekVu, {from: accounts[0]});
		const uint96S8lb = BigInt("1108")
		const addressP6hDDON = accounts[2]
		const uintEGunhk0 = BigInt("1211")
		const uintaK2hfqk = BigInt("1703")
		const uint256Rrio5Fo = await WolfStakingRewardsUisbth.balanceOfPerPool.call(addressP6hDDON, uint96S8lb, {from: accounts[4]});
		const uint256zMpNp2 = await WolfStakingRewardsUisbth.rewardPerToken.call(uintEGunhk0, {from: accounts[1]});
		const uint256rSxxxuh = await WolfStakingRewardsUisbth.lastTimeRewardApplicable.call(uintaK2hfqk, {from: accounts[1]});

		assert.equal(uint256Rrio5Fo, BigInt("0"))
		assert.equal(uint256rSxxxuh, BigInt("0"))
		assert.equal(uint256zMpNp2, BigInt("0"))
	});

	it('test for WolfStakingRewards', async () => {
		const addressMY1XEKv = accounts[0]
		const addressUft0l6 = accounts[4]
		const addressNVoHlgi = accounts[0]
		const WolfStakingRewardsc5gQHNv = await WolfStakingRewards.new(addressMY1XEKv, addressUft0l6, addressNVoHlgi, {from: accounts[2]});
		const uintW6N3ec1 = BigInt("116")
		const addressNydavwH = accounts[1]
		const uintNJL8MkU = BigInt("78")
		const uintTr8DIzg = BigInt("995")
		const addresshUNHKy = accounts[0]
		const uint256GT5TVDV = await WolfStakingRewardsc5gQHNv.earned.call(addressNydavwH, uintW6N3ec1, {from: accounts[5]});
		const uint256Ss1eul3 = await WolfStakingRewardsc5gQHNv.totalSupplyPerPool.call(uintNJL8MkU, {from: accounts[0]});
		const stringSZAWx49 = await WolfStakingRewardsc5gQHNv.name.call({from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsc5gQHNv.onlyRewardsDistribution.call({from: accounts[0]});
		await WolfStakingRewardsc5gQHNv.nonReentrant.call({from: accounts[0]});
		const addressFJn3bFp = await WolfStakingRewardsc5gQHNv.updateReward.call(addresshUNHKy, uintTr8DIzg, {from: accounts[4]});

		assert.equal(uint256GT5TVDV, BigInt("0"))
		assert.equal(uint256Ss1eul3, BigInt("0"))
		await expect(WolfStakingRewardsc5gQHNv.name.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresshSHut2q = accounts[2]
		const addressTNGUGJX = accounts[1]
		const addressRkn3WHy = accounts[0]
		const WolfStakingRewardsHu3pc4c = await WolfStakingRewards.new(addresshSHut2q, addressTNGUGJX, addressRkn3WHy, {from: accounts[1]});
		const uintDVU98xv = BigInt("1197")
		const addressUrFHTz = "0x0000000000000000000000000000000000000001"
		const uintw3H8zH = BigInt("1885")
		const uintFf72iJ4 = BigInt("530")
		const uint256UPjM571 = await WolfStakingRewardsHu3pc4c.earned.call(addressUrFHTz, uintDVU98xv, {from: accounts[1]});
		const uintt2AWhea = await WolfStakingRewardsHu3pc4c.getReward.call(uintw3H8zH, {from: accounts[1]});
		const uint256yQiZjb = await WolfStakingRewardsHu3pc4c.lastTimeRewardApplicable.call(uintFf72iJ4, {from: accounts[3]});

		assert.equal(uint256UPjM571, BigInt("0"))
		assert.equal(uint256yQiZjb, BigInt("0"))
	});

	it('test for WolfStakingRewards', async () => {
		const stringuz8m0av = "utuBsemXqoIfEaf36NmVEOJz6pzH5iP1HSI30Fjt3henAUqeITSOgeaDoxkxx3XbCFR3vXSphA4PvySByaohOvW1Suk1Ne"
		const stringkHbG8U9 = "QayBcd2LTNs9Ht62irMKOfkdyuXaGCH4DLOnCDS8R"
		const uintdsssY5O = BigInt("245")
		const WolfStakingRewardsjY6XUVG = await WolfStakingRewards.new(stringuz8m0av, stringkHbG8U9, uintdsssY5O, {from: accounts[3]});
		const uintJoza0j2 = BigInt("1563")
		const uintll064BO = BigInt("1796")
		const addressqQmAFv5 = accounts[4]
		const uint256arrayTirhrF8 = await WolfStakingRewardsjY6XUVG.updateNotifyRewardAmount.call(uintJoza0j2, {from: "0x0000000000000000000000000000000000000001"});
		const addressrpFCUGe = await WolfStakingRewardsjY6XUVG.updateReward.call(addressqQmAFv5, uintll064BO, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressa1rI3vZ = accounts[2]
		const addressEbqNWqr = "0x0000000000000000000000000000000000000001"
		const addressjQ6WjRI = accounts[1]
		const WolfStakingRewardspd7MV2m = await WolfStakingRewards.new(addressa1rI3vZ, addressEbqNWqr, addressjQ6WjRI, {from: accounts[2]});
		const uintvrDYm8i = BigInt("667")
		const uintFQP7m7U = BigInt("1997")
		const uintzjgiuqJ = BigInt("1549")
		const uintIEhdAXv = BigInt("183")
		const uint256Uxq2vQl = await WolfStakingRewardspd7MV2m.withdraw.call(uintFQP7m7U, uintvrDYm8i, {from: accounts[3]});
		const uint256jf4KPHB = await WolfStakingRewardspd7MV2m.withdrawRemainingBalance.call(uintIEhdAXv, uintzjgiuqJ, {from: accounts[1]});
		await WolfStakingRewardspd7MV2m.onlyRewardsDistribution.call({from: accounts[5]});
		const stringB2MWo2X = await WolfStakingRewardspd7MV2m.symbol.call({from: accounts[3]});

		await expect(WolfStakingRewardspd7MV2m.withdraw.call(uintFQP7m7U, uintvrDYm8i, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringMAqVWEF = "8o6rEnvBT0n7BqJDOtJauXiE4ejahODp8fNkvY6v9PqlDk6ekLy3xHItXP15xRlpXdSIeUtvpa"
		const stringek6Rj95 = "BHFUfLZjrDikHmlxpgDDG1jpUWTQXbWdtUqRYudXl"
		const uintjzIx0wp = BigInt("213")
		const WolfStakingRewardseuJ3n1c = await WolfStakingRewards.new(stringMAqVWEF, stringek6Rj95, uintjzIx0wp, {from: accounts[0]});
		const uintzxpMFiQ = BigInt("1025")
		const uintNOsEA1o = BigInt("1509")
		const uintSaZz1A0 = BigInt("1615")
		const uintbzoA4Ss = BigInt("800")
		const uint256nZuyNq = await WolfStakingRewardseuJ3n1c.stake.call(uintNOsEA1o, uintzxpMFiQ, {from: accounts[2]});
		const uint256VLAwRNU = await WolfStakingRewardseuJ3n1c.exit.call(uintSaZz1A0, {from: accounts[4]});
		const uint256OUsPel = await WolfStakingRewardseuJ3n1c.getRewardForDuration.call(uintbzoA4Ss, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressDRWp9gP = accounts[2]
		const addressI0y4ATt = accounts[1]
		const addressoceQbsZ = accounts[0]
		const WolfStakingRewardsHu3pc4c = await WolfStakingRewards.new(addressDRWp9gP, addressI0y4ATt, addressoceQbsZ, {from: accounts[1]});
		const uintP7HfNT7 = BigInt("1197")
		const addresssspwfQ4 = accounts[1]
		const uintbWiKxl = BigInt("255")
		const uintUnlWZmJ = BigInt("1019")
		const uintFWQZBZ = BigInt("1643")
		const uintOSVyKo9 = BigInt("1388")
		const uint256UPjM571 = await WolfStakingRewardsHu3pc4c.earned.call(addresssspwfQ4, uintP7HfNT7, {from: accounts[1]});
		const uint256ybThE3R = await WolfStakingRewardsHu3pc4c.getRewardForDuration.call(uintbWiKxl, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NV7qL1 = await WolfStakingRewardsHu3pc4c.withdraw.call(uintFWQZBZ, uintUnlWZmJ, {from: accounts[5]});
		const uint256yQiZjb = await WolfStakingRewardsHu3pc4c.lastTimeRewardApplicable.call(uintOSVyKo9, {from: accounts[3]});

		assert.equal(uint256UPjM571, BigInt("0"))
		await expect(WolfStakingRewardsHu3pc4c.getRewardForDuration.call(uintbWiKxl, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringnRyzZt = "dtUgchTSXddNgDakJsRENWh5k6iK75mtbUaquzSCUbzMJ5QXe0lNNO9Clqggf7CKGBmLA5Fu"
		const stringuMfflK7 = "oJkNtEvzYIGCzJpCcP1PI1HvPO5UQaB3a8IKtydtykO5NuF5X"
		const uinthkunE2u = BigInt("155")
		const WolfStakingRewardsPJ2BzUE = await WolfStakingRewards.new(stringnRyzZt, stringuMfflK7, uinthkunE2u, {from: accounts[4]});
		const uintYRitFDV = BigInt("1242")
		const uintUficK4Y = BigInt("582")
		const uintg44NNB3 = BigInt("1855")
		const uintJm5S2qk = BigInt("1306")
		const uintHr2xqm6 = BigInt("871")
		const uintOrP8a6G = BigInt("527")
		const addresst4mCC09 = accounts[3]
		const uint256ue53pP2 = await WolfStakingRewardsPJ2BzUE.totalSupplyPerPool.call(uintYRitFDV, {from: accounts[0]});
		const uint256q6BuHc = await WolfStakingRewardsPJ2BzUE.rewardPerToken.call(uintUficK4Y, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NjCM2rL = await WolfStakingRewardsPJ2BzUE.totalSupplyPerPool.call(uintg44NNB3, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsPJ2BzUE.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256w3RpfZ = await WolfStakingRewardsPJ2BzUE.withdraw.call(uintHr2xqm6, uintJm5S2qk, {from: accounts[0]});
		const uint256QPksKmf = await WolfStakingRewardsPJ2BzUE.earned.call(addresst4mCC09, uintOrP8a6G, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringnszyu74 = "yHAQb5kDDyVAoAPw5HltFaQAFVRqKmLRAyMt6ymV7GrVMVYWM"
		const stringH33qoM9 = "oBJhOMY0LEQmMsThDRPWLlmq"
		const uintuROc5he = BigInt("209")
		const WolfStakingRewardsHeBiLh6 = await WolfStakingRewards.new(stringnszyu74, stringH33qoM9, uintuROc5he, {from: accounts[1]});
		const uintuR6lXr = BigInt("848")
		const uintsu8Fnru = BigInt("1011")
		const uintoMWqnhH = BigInt("888")
		const uintsu6MIvn = BigInt("238")
		const uint256NuhLD4I = await WolfStakingRewardsHeBiLh6.stake.call(uintsu8Fnru, uintuR6lXr, {from: accounts[5]});
		await WolfStakingRewardsHeBiLh6.nonReentrant.call({from: accounts[2]});
		const uintJ8GY0m4 = await WolfStakingRewardsHeBiLh6.getReward.call(uintoMWqnhH, {from: "0x0000000000000000000000000000000000000001"});
		const uintUHyUupo = await WolfStakingRewardsHeBiLh6.getReward.call(uintsu6MIvn, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHttAVQr = "K4YQYcYhBQuiVTMq5b71HYz76sNW8S"
		const stringfUfYw0C = "QbbGdC2jS6lxJ5h6BazOPVMOM8xKssvUwHkBtbBZsgaYIlUJG8toM"
		const uinth354IHJ = BigInt("73")
		const WolfStakingRewardsmzt86OH = await WolfStakingRewards.new(stringHttAVQr, stringfUfYw0C, uinth354IHJ, {from: accounts[5]});
		const uintQXjSr2P = BigInt("1025")
		const uintQWkBtLw = BigInt("1580")
		const uintQqpnaum = BigInt("1830")
		const uintua01tU = BigInt("19")
		const uintWiZpBwo = BigInt("1117")
		const uintWst134d = BigInt("1530")
		const uint256wYBi31x = await WolfStakingRewardsmzt86OH.lastTimeRewardApplicable.call(uintQXjSr2P, {from: accounts[3]});
		const uint256xrQhi6 = await WolfStakingRewardsmzt86OH.withdrawRemainingBalance.call(uintQqpnaum, uintQWkBtLw, {from: accounts[1]});
		const uint256nJZIO6V = await WolfStakingRewardsmzt86OH.withdrawRemainingBalance.call(uintWiZpBwo, uintua01tU, {from: accounts[0]});
		const uint256arraymTnPsv = await WolfStakingRewardsmzt86OH.updateNotifyRewardAmount.call(uintWst134d, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressjOXxIUg = accounts[2]
		const addressTGBcCM = accounts[1]
		const addressuT66qp = accounts[0]
		const WolfStakingRewardsHu3pc4c = await WolfStakingRewards.new(addressjOXxIUg, addressTGBcCM, addressuT66qp, {from: accounts[1]});
		const uintlcwcfAR = BigInt("1197")
		const addressCquMGJW = "0x0000000000000000000000000000000000000001"
		const uintiE033MZ = BigInt("385")
		const uintiVdBz9L = BigInt("1885")
		const uintbUwu1ow = BigInt("532")
		const uint256UPjM571 = await WolfStakingRewardsHu3pc4c.earned.call(addressCquMGJW, uintlcwcfAR, {from: accounts[1]});
		const uint256Ijw6fO = await WolfStakingRewardsHu3pc4c.exit.call(uintiE033MZ, {from: accounts[4]});
		const uintt2AWhea = await WolfStakingRewardsHu3pc4c.getReward.call(uintiVdBz9L, {from: accounts[1]});
		const stringPvUdxrZ = await WolfStakingRewardsHu3pc4c.name.call({from: accounts[0]});
		const uint256yQiZjb = await WolfStakingRewardsHu3pc4c.lastTimeRewardApplicable.call(uintbUwu1ow, {from: accounts[3]});

		assert.equal(uint256UPjM571, BigInt("0"))
		await expect(WolfStakingRewardsHu3pc4c.exit.call(uintiE033MZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressSPSkJBN = accounts[2]
		const addressjtccjCt = accounts[1]
		const addressgKiyMjU = accounts[0]
		const WolfStakingRewardsHu3pc4c = await WolfStakingRewards.new(addressSPSkJBN, addressjtccjCt, addressgKiyMjU, {from: accounts[1]});
		const uintWchyDbq = BigInt("1558")
		const uintzrwLhs = BigInt("0")
		const uintlCwLMXJ = BigInt("1371")
		const uint256dUqbe8q = await WolfStakingRewardsHu3pc4c.stake.call(uintzrwLhs, uintWchyDbq, {from: accounts[2]});
		const stringVgCuKwi = await WolfStakingRewardsHu3pc4c.name.call({from: accounts[1]});
		const uint256yQiZjb = await WolfStakingRewardsHu3pc4c.lastTimeRewardApplicable.call(uintlCwLMXJ, {from: accounts[3]});

		await expect(WolfStakingRewardsHu3pc4c.stake.call(uintzrwLhs, uintWchyDbq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringQxwbVfc = "J7GwLBEYFr7rCdH8jbzUxQY4WlfUCH6KlISwpMQJroykvmpbSnjL63d"
		const stringHMq6X1l = "Nbdk6"
		const uintjErx9Q0 = BigInt("162")
		const WolfStakingRewardsaOuPnRY = await WolfStakingRewards.new(stringQxwbVfc, stringHMq6X1l, uintjErx9Q0, {from: accounts[2]});
		const uintZiAE9cA = BigInt("1936")
		const uintkMGlEau = BigInt("1222")
		const uintLqKP39S = BigInt("1266")
		const stringgezoTxY = await WolfStakingRewardsaOuPnRY.symbol.call({from: accounts[1]});
		const uint256b7U5jyy = await WolfStakingRewardsaOuPnRY.exit.call(uintZiAE9cA, {from: accounts[3]});
		const uint1RDIJ7 = await WolfStakingRewardsaOuPnRY.getReward.call(uintkMGlEau, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gkNe3Bf = await WolfStakingRewardsaOuPnRY.rewardPerToken.call(uintLqKP39S, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringkJkcmfX = "UbSVXmU2LYvDa5sgqe28F1Q2uIdxJwC1g93GIDljqmWQyyp724kWw4UYbqWlED2MU7tmqgfNFew1NYudVIlPNYei1F25uL0cIH"
		const stringyGeq6QO = "kJDmD8ZyQPzHydPs6op9F9v5V50rb9R8o5B0c549ar2VBnKmHyXN4xPkk0lRM"
		const uintzT7JuY2 = BigInt("1")
		const WolfStakingRewardse0iIOA1 = await WolfStakingRewards.new(stringkJkcmfX, stringyGeq6QO, uintzT7JuY2, {from: accounts[2]});
		const uintD1x8RlD = BigInt("22")
		const addressx6mle9L = accounts[2]
		const uintXF7QGRi = BigInt("227")
		const uintR8uKxtN = BigInt("137")
		const uintr4dZQIL = BigInt("645")
		const stringHrPVHhk = await WolfStakingRewardse0iIOA1.name.call({from: accounts[4]});
		const addressScVjwl = await WolfStakingRewardse0iIOA1.updateReward.call(addressx6mle9L, uintD1x8RlD, {from: accounts[4]});
		await WolfStakingRewardse0iIOA1.nonReentrant.call({from: accounts[0]});
		const uint256mwdUQS4 = await WolfStakingRewardse0iIOA1.withdrawRemainingBalance.call(uintR8uKxtN, uintXF7QGRi, {from: accounts[3]});
		const uint256TrRqhFw = await WolfStakingRewardse0iIOA1.exit.call(uintr4dZQIL, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringO3s3QaR = "nSlvYxezi4bVMq86yCRthhIR9OWFy0w1PzfrfG5MYxK3KukQhAsKXfWKSTNPAyYyiC"
		const stringgCY3i4v = "89nmwuuOxg79hS8VGGuAGCAxWH8YRTaIBmzpZT36M"
		const uintQu7tNt7 = BigInt("5")
		const WolfStakingRewardsK2aXZkI = await WolfStakingRewards.new(stringO3s3QaR, stringgCY3i4v, uintQu7tNt7, {from: accounts[0]});
		const uintk8KUv5T = BigInt("1179")
		const uintt4fg6u4 = BigInt("731")
		const addressKpCQKMk = accounts[4]
		const uintq3l5rur = BigInt("1190")
		const addressTNGUBZZ = accounts[5]
		const stringqUuMI5S = await WolfStakingRewardsK2aXZkI.symbol.call({from: accounts[0]});
		const uint256HK05y4v = await WolfStakingRewardsK2aXZkI.exit.call(uintk8KUv5T, {from: accounts[3]});
		const addressqIYWrMA = await WolfStakingRewardsK2aXZkI.updateReward.call(addressKpCQKMk, uintt4fg6u4, {from: accounts[4]});
		const uint8AnOBdgx = await WolfStakingRewardsK2aXZkI.decimals.call({from: accounts[1]});
		const uint256tHPcNiY = await WolfStakingRewardsK2aXZkI.earned.call(addressTNGUBZZ, uintq3l5rur, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const addressbg0lbc = accounts[2]
		const addressVjYOHCQ = accounts[1]
		const addressA7o7ana = accounts[0]
		const WolfStakingRewardsHu3pc4c = await WolfStakingRewards.new(addressbg0lbc, addressVjYOHCQ, addressA7o7ana, {from: accounts[1]});
		const uintQvXk2OD = BigInt("1690")
		const uintwSwc5my = BigInt("1245")
		const uintXvv0zFL = BigInt("1558")
		const uintjy2r4Nw = BigInt("2001")
		const uint256juASbYR = await WolfStakingRewardsHu3pc4c.withdrawRemainingBalance.call(uintwSwc5my, uintQvXk2OD, {from: accounts[4]});
		const uint256dUqbe8q = await WolfStakingRewardsHu3pc4c.stake.call(uintjy2r4Nw, uintXvv0zFL, {from: accounts[2]});

		await expect(WolfStakingRewardsHu3pc4c.withdrawRemainingBalance.call(uintwSwc5my, uintQvXk2OD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringdJtr2n1 = "L4O5SxFuV6zycYoMJ3mN"
		const stringtpjIS1s = "KDbjGLIPy13T5UW7Wqu7x46hAaYijFgeMxXM7njKDyglrEcilegtfM3zQT"
		const uintAtBvl4S = BigInt("164")
		const WolfStakingRewardsjY996h7 = await WolfStakingRewards.new(stringdJtr2n1, stringtpjIS1s, uintAtBvl4S, {from: accounts[5]});
		const uintuSylqDZ = BigInt("1935")
		const uintxeN8vRv = BigInt("1674")
		const uintdwAL7xY = BigInt("1323")
		const addressIeCXPm2 = accounts[0]
		const uintwq1Jmcz = BigInt("925")
		const uinto4lUBz = BigInt("700")
		const uint256Lp5SK1d = await WolfStakingRewardsjY996h7.withdraw.call(uintxeN8vRv, uintuSylqDZ, {from: accounts[1]});
		const uint8bS5eXFt = await WolfStakingRewardsjY996h7.decimals.call({from: accounts[5]});
		const uint256GsxpSgB = await WolfStakingRewardsjY996h7.earned.call(addressIeCXPm2, uintdwAL7xY, {from: accounts[1]});
		const uint256JvV2Ydi = await WolfStakingRewardsjY996h7.stake.call(uinto4lUBz, uintwq1Jmcz, {from: accounts[5]});
		const stringrHHeNd0 = await WolfStakingRewardsjY996h7.name.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwovcLH7 = "dALQp5dZkM9nLmsw0KNggXGU"
		const stringdKnmlqt = "HwXrPz46XbrYfLC7"
		const uintEAboIIN = BigInt("50")
		const WolfStakingRewardsY5mq9YR = await WolfStakingRewards.new(stringwovcLH7, stringdKnmlqt, uintEAboIIN, {from: accounts[0]});
		const uintQDLzhiY = BigInt("1328")
		const uintqMLvEi9 = BigInt("319")
		const addressYaj3K6L = accounts[2]
		const uintCnRrzr = BigInt("1085")
		const uintXmG3QV = BigInt("371")
		const addressmlpHp9 = accounts[0]
		const stringfZJhKNB = await WolfStakingRewardsY5mq9YR.symbol.call({from: accounts[2]});
		const uint256Pp8Fio2 = await WolfStakingRewardsY5mq9YR.exit.call(uintQDLzhiY, {from: accounts[3]});
		const stringcQqO9dQ = await WolfStakingRewardsY5mq9YR.symbol.call({from: accounts[3]});
		const addressWXqfPT = await WolfStakingRewardsY5mq9YR.updateReward.call(addressYaj3K6L, uintqMLvEi9, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Fcfe5gO = await WolfStakingRewardsY5mq9YR.totalSupplyPerPool.call(uintCnRrzr, {from: accounts[2]});
		const addressvJEfU1f = await WolfStakingRewardsY5mq9YR.updateReward.call(addressmlpHp9, uintXmG3QV, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringp01xHg0 = "8ar9ivHcQCT3SaljAw47JXFQVktyY9O3OskuSTq7oBZQjAMsmYm3MUm1w6YhKZTb4k"
		const string2U1yCQ = "zz2i1rtS5VGbEVNZqdFc4E3Job1neuTDzd1H"
		const uinttElJOAK = BigInt("95")
		const WolfStakingRewardsSNtXRA8 = await WolfStakingRewards.new(stringp01xHg0, string2U1yCQ, uinttElJOAK, {from: accounts[3]});
		const uintfekpyP = BigInt("358")
		const uintkjpYB6c = BigInt("1745")
		const uintoqhW57 = BigInt("806")
		await WolfStakingRewardsSNtXRA8.onlyOwner.call({from: accounts[1]});
		await WolfStakingRewardsSNtXRA8.onlyRewardsDistribution.call({from: accounts[1]});
		const uint8xvf4bRI = await WolfStakingRewardsSNtXRA8.decimals.call({from: accounts[2]});
		await WolfStakingRewardsSNtXRA8.nonReentrant.call({from: accounts[4]});
		const uint256uuntxK6 = await WolfStakingRewardsSNtXRA8.rewardPerToken.call(uintfekpyP, {from: accounts[3]});
		const uint256PfK869G = await WolfStakingRewardsSNtXRA8.stake.call(uintoqhW57, uintkjpYB6c, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringtjgZd2S = "LbVkFWfxwbsJNkuqslmHynGFQH5VFBbfDNGBvevdg86083TX3KsQpAQK9t34YhhVvXUIkyiqKU"
		const stringMbHsOcd = "QIrzTQPUZrNJQW5oVwQ0znTaOXNXCSwzHADHpzjQnkjUfklx7M2cglIt68om"
		const uintoZ05rZP = BigInt("137")
		const WolfStakingRewardssbDJti2 = await WolfStakingRewards.new(stringtjgZd2S, stringMbHsOcd, uintoZ05rZP, {from: accounts[1]});
		const uintmBDlr1d = BigInt("38")
		const uintGohkBFg = BigInt("1856")
		const addresssKKAhTx = accounts[3]
		const uintw50sFv = BigInt("1308")
		await WolfStakingRewardssbDJti2.nonReentrant.call({from: accounts[4]});
		const uint8fl5Y2Ld = await WolfStakingRewardssbDJti2.decimals.call({from: accounts[2]});
		const uint256pFdBqIf = await WolfStakingRewardssbDJti2.totalSupplyPerPool.call(uintmBDlr1d, {from: accounts[0]});
		const uint256b2J4JJy = await WolfStakingRewardssbDJti2.balanceOfPerPool.call(addresssKKAhTx, uintGohkBFg, {from: "0x0000000000000000000000000000000000000001"});
		const uint256qDQbEuF = await WolfStakingRewardssbDJti2.rewardPerToken.call(uintw50sFv, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringEHlSLH3 = ""
		const stringnUK2ep4 = "21qmPQALemBIKHBPFrHUyeNiIKpQYVV2D4zz6eJMWpFQqY14M2TetwQDvGzRVo1oqWu0852O6"
		const uintw8oTZES = BigInt("23")
		const WolfStakingRewardsDzOd3JA = await WolfStakingRewards.new(stringEHlSLH3, stringnUK2ep4, uintw8oTZES, {from: accounts[4]});
		const uintnaj1wOL = BigInt("410")
		const uintqmKWYL = BigInt("183")
		const uintqm4I5l3 = BigInt("1435")
		const uintKI08jBJ = BigInt("495")
		const addressFJH7xfN = accounts[0]
		const stringY9BhHtZ = await WolfStakingRewardsDzOd3JA.symbol.call({from: accounts[5]});
		const uint256PORQW8g = await WolfStakingRewardsDzOd3JA.stake.call(uintqmKWYL, uintnaj1wOL, {from: accounts[5]});
		const uint256XarTLnh = await WolfStakingRewardsDzOd3JA.getRewardForDuration.call(uintqm4I5l3, {from: accounts[3]});
		await WolfStakingRewardsDzOd3JA.nonReentrant.call({from: accounts[2]});
		const uint256W5uattr = await WolfStakingRewardsDzOd3JA.balanceOfPerPool.call(addressFJH7xfN, uintKI08jBJ, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressCVXzp2 = accounts[2]
		const addressHOFWKW5 = accounts[1]
		const addressX6ZyVyN = accounts[0]
		const WolfStakingRewardsHu3pc4c = await WolfStakingRewards.new(addressCVXzp2, addressHOFWKW5, addressX6ZyVyN, {from: accounts[1]});
		const uintchFQuRF = BigInt("582")
		const uintVJ221W1 = BigInt("1742")
		const uintIGKc9mM = BigInt("140")
		const uintDrWTlre = BigInt("586")
		const uintx3VzMXS = BigInt("779")
		const uint256lS1F8EN = await WolfStakingRewardsHu3pc4c.withdrawRemainingBalance.call(uintVJ221W1, uintchFQuRF, {from: accounts[1]});
		const uint8DxWAI = await WolfStakingRewardsHu3pc4c.getReward.call(uintIGKc9mM, {from: accounts[5]});
		const uint256C9uBaZQ = await WolfStakingRewardsHu3pc4c.withdrawRemainingBalance.call(uintx3VzMXS, uintDrWTlre, {from: accounts[3]});

		await expect(WolfStakingRewardsHu3pc4c.withdrawRemainingBalance.call(uintVJ221W1, uintchFQuRF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringoUEpJYj = "gT663CWXR00bKiw1PpMks7Yd0eGk9LZeOzue4qixHSk114oNVAvPSoNBf8jv3oSbDA"
		const stringZWZ7K3P = "klLD9dCWMlVX3cYCzdm59V4jpa5E5zMYHs4xLCRnQNdOJl3jiCWzlCmwgJVCGnmJwz7JexR8x"
		const uintqOuHegG = BigInt("21")
		const WolfStakingRewardsoZztjy = await WolfStakingRewards.new(stringoUEpJYj, stringZWZ7K3P, uintqOuHegG, {from: "0x0000000000000000000000000000000000000001"});
		const uintOqFcNJ1 = BigInt("1607")
		const addressLDguvLF = accounts[4]
		const addressPUxmNm4 = await WolfStakingRewardsoZztjy.updateReward.call(addressLDguvLF, uintOqFcNJ1, {from: accounts[0]});
		const stringesllqwm = await WolfStakingRewardsoZztjy.symbol.call({from: accounts[4]});
		const uint8eNjpcog = await WolfStakingRewardsoZztjy.decimals.call({from: accounts[4]});
		const stringEdh0K3 = await WolfStakingRewardsoZztjy.symbol.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringE8u4zpJ = "yJre6ArXXtWFhRYJIHTRSee6eH"
		const stringouafM3E = "B6oU8D"
		const uintAViFZnN = BigInt("88")
		const WolfStakingRewardswbFR4BQ = await WolfStakingRewards.new(stringE8u4zpJ, stringouafM3E, uintAViFZnN, {from: accounts[2]});
		const uintpVFMFUX = BigInt("904")
		const stringq3GvVof = await WolfStakingRewardswbFR4BQ.symbol.call({from: accounts[3]});
		await WolfStakingRewardswbFR4BQ.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256w37Sylj = await WolfStakingRewardswbFR4BQ.lastTimeRewardApplicable.call(uintpVFMFUX, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringnakmQfi = "p7bC8uJJsPtWr2S"
		const stringATVmiS0 = "Fut49YGwLSwSAKrO7KCVfujrYicSKW8FLwlDUySFAq3DQU6xQE2AAeIIoqS"
		const uintkcnE006 = BigInt("2")
		const WolfStakingRewardsShyhZm = await WolfStakingRewards.new(stringnakmQfi, stringATVmiS0, uintkcnE006, {from: accounts[2]});
		const uintLf2ohJx = BigInt("1229")
		const uintX3sSbkg = BigInt("1837")
		const addresshMJ4KYH = "0x0000000000000000000000000000000000000001"
		const uintvbSzseZ = BigInt("1362")
		const uintz3uiGg = BigInt("1290")
		const uint256ypzaLYF = await WolfStakingRewardsShyhZm.totalSupplyPerPool.call(uintLf2ohJx, {from: accounts[1]});
		const uint256U9KCDSX = await WolfStakingRewardsShyhZm.earned.call(addresshMJ4KYH, uintX3sSbkg, {from: accounts[0]});
		const uint256EzxhzU = await WolfStakingRewardsShyhZm.getRewardForDuration.call(uintvbSzseZ, {from: accounts[5]});
		const uint256BXoCAk5 = await WolfStakingRewardsShyhZm.getRewardForDuration.call(uintz3uiGg, {from: accounts[2]});
		await WolfStakingRewardsShyhZm.onlyOwner.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringFkIYXyU = "W4EbH3EonapQ1izkwVCYyDP83y9bcmHjErRk"
		const stringzEautS = "hioXWz93AF3p1TVTJ5m31HOtnEVecRT4PFTy4T4Aoliumf7TwwUkiLf2Jns8gqpjcCgtE3CRUQvx5HvkjX9xD"
		const uintXo9wYvP = BigInt("62")
		const WolfStakingRewardsksl8G9t = await WolfStakingRewards.new(stringFkIYXyU, stringzEautS, uintXo9wYvP, {from: accounts[1]});
		const uintRApggHH = BigInt("528")
		const addressXO683IS = accounts[3]
		const uint8LPOykLu = await WolfStakingRewardsksl8G9t.decimals.call({from: accounts[4]});
		const addressyxrcyKz = await WolfStakingRewardsksl8G9t.updateReward.call(addressXO683IS, uintRApggHH, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringR2RA5Ar = "Z1QRVT7VEsUQ9YNzvDRWnCEXlenHMw7l"
		const stringNJkCZG = "M9Hy3fbFxNpodGOc"
		const uintEpJt2Kw = BigInt("244")
		const WolfStakingRewardsvHmtIk3 = await WolfStakingRewards.new(stringR2RA5Ar, stringNJkCZG, uintEpJt2Kw, {from: accounts[4]});
		const uintRzLDqaa = BigInt("593")
		const uinthyOvrhB = BigInt("1734")
		const stringKYpaHI = await WolfStakingRewardsvHmtIk3.symbol.call({from: accounts[3]});
		const uintg6RG7Xs = await WolfStakingRewardsvHmtIk3.getReward.call(uintRzLDqaa, {from: accounts[2]});
		const uintJBlfh0D = await WolfStakingRewardsvHmtIk3.getReward.call(uinthyOvrhB, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringzOtpw0f = "En4KrN5YVpw"
		const stringa1tnfx6 = "lOqINlskeQBjMxauxo33BymkjH0TPF8xoGR7ipWknaLabf6gau4e9rOALAEPqpS6tx8vKS5hHQCUrMYlvg1C1TfmE"
		const uintdXYChlT = BigInt("44")
		const WolfStakingRewardsFvG4ywX = await WolfStakingRewards.new(stringzOtpw0f, stringa1tnfx6, uintdXYChlT, {from: accounts[4]});
		const uintUXGaA1 = BigInt("1685")
		const uintXOMJKI = BigInt("1211")
		const uinto3f90cA = BigInt("2002")
		const uint256TvBV4Vq = await WolfStakingRewardsFvG4ywX.getRewardForDuration.call(uintUXGaA1, {from: accounts[2]});
		const uint256kyArm5 = await WolfStakingRewardsFvG4ywX.exit.call(uintXOMJKI, {from: accounts[1]});
		const stringhH4IQG = await WolfStakingRewardsFvG4ywX.symbol.call({from: accounts[2]});
		const uint256arrayMkWMTK3 = await WolfStakingRewardsFvG4ywX.updateNotifyRewardAmount.call(uinto3f90cA, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringBzPEA1m = "j1jSrI7xIO1jbIfMBew2dif327wF65PonARmH"
		const stringroN22KJ = "n8VVHODCtgoV1rVxaVflbh4f7slkzEsqSjpux"
		const uintNFyQe4 = BigInt("231")
		const WolfStakingRewardsKs1tAao = await WolfStakingRewards.new(stringBzPEA1m, stringroN22KJ, uintNFyQe4, {from: accounts[3]});
		const uintVKmdBjm = BigInt("1938")
		const uintXZX8Ba2 = BigInt("1761")
		const addressRPEmI6C = accounts[3]
		const uint256U3uYuOJ = await WolfStakingRewardsKs1tAao.totalSupplyPerPool.call(uintVKmdBjm, {from: accounts[1]});
		await WolfStakingRewardsKs1tAao.nonReentrant.call({from: accounts[1]});
		const uint256qn2lArD = await WolfStakingRewardsKs1tAao.earned.call(addressRPEmI6C, uintXZX8Ba2, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringXN1Zhuq = "nQ0K"
		const stringBVhogLU = "Y8TV1fpazSPZ92ui1JADMVUhasBfMtmJF0rR7KDT7IkXM4L8Y9XpLj9pfTkZKSxcIBejDzt2MCEUOao2hlaAODDUaAh2X1H"
		const uintvjGEYMf = BigInt("14")
		const WolfStakingRewardsDeOubaZ = await WolfStakingRewards.new(stringXN1Zhuq, stringBVhogLU, uintvjGEYMf, {from: accounts[0]});
		const uintERk1FWS = BigInt("1240")
		const addressOORkN30 = accounts[4]
		const uintkedmLS7 = BigInt("402")
		const uintSRt3wk = BigInt("896")
		const uintS2pjcmJ = BigInt("1011")
		const addressqN2Qlvn = accounts[1]
		const uintxQixgay = BigInt("1843")
		const uintp9mOnQn = BigInt("882")
		await WolfStakingRewardsDeOubaZ.nonReentrant.call({from: accounts[4]});
		const uint256ngvyYOP = await WolfStakingRewardsDeOubaZ.balanceOfPerPool.call(addressOORkN30, uintERk1FWS, {from: accounts[4]});
		const uint256XHbVy3 = await WolfStakingRewardsDeOubaZ.stake.call(uintSRt3wk, uintkedmLS7, {from: accounts[4]});
		const uint256TrEwbRi = await WolfStakingRewardsDeOubaZ.balanceOfPerPool.call(addressqN2Qlvn, uintS2pjcmJ, {from: accounts[4]});
		const uint256LzN0Byg = await WolfStakingRewardsDeOubaZ.lastTimeRewardApplicable.call(uintxQixgay, {from: accounts[4]});
		const uint256Kgs6Nbc = await WolfStakingRewardsDeOubaZ.exit.call(uintp9mOnQn, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQDQ2D0R = "Uqtt4VDkeb167gk5AFdld2nRy44inwEK3bQHQFYDikflqu18v0B52S80enVSlPbiTSB91yiGzR8jF87A"
		const stringpL273EU = "gsG4iheJi9PCpze65Phh"
		const uintzcyrixo = BigInt("124")
		const WolfStakingRewardsp5tuH27 = await WolfStakingRewards.new(stringQDQ2D0R, stringpL273EU, uintzcyrixo, {from: accounts[0]});
		const uintj8OtLc9 = BigInt("295")
		const uintSBGvHkP = BigInt("99")
		const uintH2F5fm9 = BigInt("1124")
		const uint256WyPVpRc = await WolfStakingRewardsp5tuH27.lastTimeRewardApplicable.call(uintj8OtLc9, {from: accounts[0]});
		const stringy8vC08d = await WolfStakingRewardsp5tuH27.name.call({from: accounts[0]});
		const uint256IIpsyx = await WolfStakingRewardsp5tuH27.withdraw.call(uintH2F5fm9, uintSBGvHkP, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHy4LcxK = "r9G7EbJCoObJcqeNMOkUy7D1TRhKSswtCYAieINQJjjGtt6L6QNwRidAl1LL69jno3GfS4jQ6hZpuGWyy0kY1imkboDE"
		const stringuvIPdd4 = "soVnDSTtfrlb496lV4u9xeCiioZTHXIG9RV8vFsg5etE"
		const uintdTzSRU5 = BigInt("51")
		const WolfStakingRewardssMayeTy = await WolfStakingRewards.new(stringHy4LcxK, stringuvIPdd4, uintdTzSRU5, {from: accounts[4]});
		const uintktY2ziF = BigInt("1454")
		const uintFjY6Hbp = BigInt("655")
		const uintHX8fCp = BigInt("1741")
		const uintn7hsATi = BigInt("1305")
		const stringhIAlUmo = await WolfStakingRewardssMayeTy.symbol.call({from: accounts[2]});
		const uint256LKomLbM = await WolfStakingRewardssMayeTy.withdrawRemainingBalance.call(uintFjY6Hbp, uintktY2ziF, {from: accounts[0]});
		const uint256BTOlSUE = await WolfStakingRewardssMayeTy.getRewardForDuration.call(uintHX8fCp, {from: accounts[1]});
		const uint256arrayALCXwuJ = await WolfStakingRewardssMayeTy.updateNotifyRewardAmount.call(uintn7hsATi, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringeXeC3k7 = "trS4NjsP5IoA9YqbalSIdjziaVht6KNbNGLqOMvBW"
		const stringfSSbRJG = "1PKb4tHmI6lJdCpTwh546jL3SpIiweQuIQnf6MS0xHM19qCQ2nevFYGESCQEzJgDG7IEvFJNWdO8MwiFp"
		const uinteRQQV7S = BigInt("240")
		const WolfStakingRewardsrRCVjah = await WolfStakingRewards.new(stringeXeC3k7, stringfSSbRJG, uinteRQQV7S, {from: accounts[4]});
		const uinttL1ITZb = BigInt("1652")
		const uintzNA98Ia = BigInt("199")
		const uintQSax1i = BigInt("356")
		const uintsJp8Zws = BigInt("1127")
		const uintXRKk0EQ = BigInt("1530")
		const uint256arrayysWhHg = await WolfStakingRewardsrRCVjah.updateNotifyRewardAmount.call(uinttL1ITZb, {from: accounts[2]});
		await WolfStakingRewardsrRCVjah.onlyRewardsDistribution.call({from: accounts[3]});
		const uintkTO1URT = await WolfStakingRewardsrRCVjah.getReward.call(uintzNA98Ia, {from: accounts[2]});
		const uint8qcap6c = await WolfStakingRewardsrRCVjah.decimals.call({from: accounts[4]});
		const uint256kd0v5J0 = await WolfStakingRewardsrRCVjah.exit.call(uintQSax1i, {from: accounts[1]});
		const uint2563Wrbrw = await WolfStakingRewardsrRCVjah.stake.call(uintXRKk0EQ, uintsJp8Zws, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringXFXmv8f = "xDbCmvirXokZTNdcoGVoxeVRbkjBDB8cTnyWiRHnV"
		const stringfurAHZF = "6mUevqDg0qmcC62pKwnaznjyOtj72SpviCudDWaPTxfyR"
		const uint6zgGvi = BigInt("65")
		const WolfStakingRewardsS9vR4XT = await WolfStakingRewards.new(stringXFXmv8f, stringfurAHZF, uint6zgGvi, {from: accounts[2]});
		const uintoTX8mRu = BigInt("1147")
		const addressz6gKuZR = accounts[3]
		const uintSJ2QI5 = BigInt("1214")
		const uintmNvre2n = BigInt("878")
		const stringEcv2mW8 = await WolfStakingRewardsS9vR4XT.name.call({from: accounts[4]});
		const uint256ZknnqiR = await WolfStakingRewardsS9vR4XT.earned.call(addressz6gKuZR, uintoTX8mRu, {from: accounts[3]});
		const uint256wfs0C8S = await WolfStakingRewardsS9vR4XT.stake.call(uintmNvre2n, uintSJ2QI5, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWpCiOYV = "CtaxL6U17Mvv9TwkMqbEbgiA8KerIl6u8tcpuq6qiHIoRBP6mbreHw4G7CdqPpxCNFNJaytrDFLnUPeK5h9l"
		const stringtCQmnqo = "heop95yrnpSf7A9ef3vs6B9LjsGgl1ufrKRLHMI4kLQxGe6jlyOqN5xvlHniI4jkTQ"
		const uintfS6rtH5 = BigInt("215")
		const WolfStakingRewardsvAvJ5u3 = await WolfStakingRewards.new(stringWpCiOYV, stringtCQmnqo, uintfS6rtH5, {from: accounts[1]});
		const uintHA8hksv = BigInt("1192")
		const uintyq0ZXAa = BigInt("1795")
		const uintUNoxw9R = BigInt("563")
		const uintpHYlV1N = BigInt("1948")
		const uintsQfsfYR = BigInt("1499")
		const uint256z5oSadz = await WolfStakingRewardsvAvJ5u3.getRewardForDuration.call(uintHA8hksv, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsvAvJ5u3.nonReentrant.call({from: accounts[4]});
		const uint256HoTZZfe = await WolfStakingRewardsvAvJ5u3.withdraw.call(uintUNoxw9R, uintyq0ZXAa, {from: accounts[4]});
		const uint256W68Fc9g = await WolfStakingRewardsvAvJ5u3.lastTimeRewardApplicable.call(uintpHYlV1N, {from: accounts[2]});
		const uintWcNfqhg = await WolfStakingRewardsvAvJ5u3.getReward.call(uintsQfsfYR, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvl37fZV = "G59LKiPhMgPQ"
		const stringrjVLK1A = "7cO"
		const uintIUQzGQ1 = BigInt("151")
		const WolfStakingRewardsKOwlW97 = await WolfStakingRewards.new(stringvl37fZV, stringrjVLK1A, uintIUQzGQ1, {from: accounts[5]});
		const uintzUN7IH = BigInt("9")
		const addressPnn097 = accounts[0]
		const uintgda7fYB = BigInt("1771")
		const uintBGKNTRK = BigInt("1866")
		const addressyEZJ4F = await WolfStakingRewardsKOwlW97.updateReward.call(addressPnn097, uintzUN7IH, {from: accounts[1]});
		const stringDZaF0Um = await WolfStakingRewardsKOwlW97.name.call({from: accounts[4]});
		const uint256pIkIMY0 = await WolfStakingRewardsKOwlW97.withdrawRemainingBalance.call(uintBGKNTRK, uintgda7fYB, {from: "0x0000000000000000000000000000000000000001"});
		const uint8crsomJs = await WolfStakingRewardsKOwlW97.decimals.call({from: accounts[1]});
		const stringQUOQeMu = await WolfStakingRewardsKOwlW97.symbol.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWSUjo4x = "A6R7um9C3yvBlsn6Sj856DY4LlgS6ipbRr7pieQpMOlGxnI7lkFEcbYQOoLt9C5dejDlyrlSaFUhiVOndWCuisKhhuPpCEHMVO"
		const stringdEVxW7m = "zSSL0Kw7HguO07EVEHkgjjmJ3qMn7hbnHgG3JOSklKikXcEQFzYVm7jLB3LbCexpQWB"
		const uintcFrgw6v = BigInt("144")
		const WolfStakingRewardsdC38pM0 = await WolfStakingRewards.new(stringWSUjo4x, stringdEVxW7m, uintcFrgw6v, {from: accounts[1]});
		const uintgbMZN5n = BigInt("1751")
		const uintOJW93pE = BigInt("807")
		const uintaf6SsWA = BigInt("1176")
		const uintSOttliX = BigInt("106")
		const uint256MH5ZzFb = await WolfStakingRewardsdC38pM0.exit.call(uintgbMZN5n, {from: accounts[4]});
		const stringlgLTmL = await WolfStakingRewardsdC38pM0.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256qCE3tm = await WolfStakingRewardsdC38pM0.stake.call(uintaf6SsWA, uintOJW93pE, {from: accounts[1]});
		const uint256Prrxwux = await WolfStakingRewardsdC38pM0.exit.call(uintSOttliX, {from: accounts[4]});
		await WolfStakingRewardsdC38pM0.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvlpdipa = "BMBBPa2MGXrIeXHWxMEJcyTZXgluL67IltdaTfD2qqjKztolzN8YqvfJ8nwcl"
		const stringvqlYUHQ = "cjUVB2KGrby5jvq9V2S4sz2mcHaF4Tw7jWM5Otjm2CwKjjjmFHAGc"
		const uintcbVoWFR = BigInt("6")
		const WolfStakingRewardsDlu6lXP = await WolfStakingRewards.new(stringvlpdipa, stringvqlYUHQ, uintcbVoWFR, {from: accounts[0]});
		const uintHzfvh5G = BigInt("1405")
		const uintOQD5Nzr = BigInt("560")
		const uintD0daVdm = BigInt("415")
		const uintw5mnvmW = BigInt("1915")
		const uint1DGjQn = BigInt("1063")
		const uint256yQfk5QD = await WolfStakingRewardsDlu6lXP.totalSupplyPerPool.call(uintHzfvh5G, {from: accounts[1]});
		const uintYlN6Jq4 = await WolfStakingRewardsDlu6lXP.getReward.call(uintOQD5Nzr, {from: accounts[1]});
		const uint256eBqnjaY = await WolfStakingRewardsDlu6lXP.stake.call(uintw5mnvmW, uintD0daVdm, {from: accounts[3]});
		const uint256arrayKDKGcyQ = await WolfStakingRewardsDlu6lXP.updateNotifyRewardAmount.call(uint1DGjQn, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZiV6PKM = "YT3RX1V4BYjvPTdgp8hXidRntWzo6kaxi7mmOSbRB7Ga73DI3pwej99L5OfDniWhOvjJ4bp2dfPELPcIo6hX"
		const stringkHaCJPE = "ckbECiATwGia5f4bCk"
		const uint6gX0On = BigInt("185")
		const WolfStakingRewardsGfFdWIM = await WolfStakingRewards.new(stringZiV6PKM, stringkHaCJPE, uint6gX0On, {from: accounts[1]});
		const uinttv8CwaA = BigInt("1644")
		const uintWVMcp7v = BigInt("1415")
		const uintkWSgbjV = BigInt("420")
		const uintBkboVNG = BigInt("1127")
		const addressp7MdHbD = accounts[1]
		const uinteLgMJno = BigInt("762")
		const uint256ZqlJj1N = await WolfStakingRewardsGfFdWIM.withdraw.call(uintWVMcp7v, uinttv8CwaA, {from: accounts[0]});
		const uint256ezonm62 = await WolfStakingRewardsGfFdWIM.rewardPerToken.call(uintkWSgbjV, {from: accounts[2]});
		const uint256uYihszs = await WolfStakingRewardsGfFdWIM.earned.call(addressp7MdHbD, uintBkboVNG, {from: accounts[2]});
		const uint256arrayXlyfcVp = await WolfStakingRewardsGfFdWIM.updateNotifyRewardAmount.call(uinteLgMJno, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const string5bhCsj = "Y7d4UBnllwHY3lgFodNdp2VDNv6QvTPqS9aGUa22heembZ69xVbVXaygskTIGc8pwcEC0Am13rMeoyHSPsbMVHV1Huxg1W3dZS"
		const stringoPu7eSA = "DdlG0xxtIDtpuCktpj2nDqAGVYnwo4H0kl1DSNNHv1xXAbj"
		const uintZNsHGBI = BigInt("170")
		const WolfStakingRewardsBU00daV = await WolfStakingRewards.new(string5bhCsj, stringoPu7eSA, uintZNsHGBI, {from: "0x0000000000000000000000000000000000000001"});
		const uintYwA0Xjk = BigInt("591")
		const uintGdohnsz = BigInt("817")
		const addressWiQuOke = accounts[5]
		const uintDLxM5XP = BigInt("831")
		const uint8QwPyuOA = await WolfStakingRewardsBU00daV.decimals.call({from: accounts[0]});
		const uint256pVWM7zb = await WolfStakingRewardsBU00daV.lastTimeRewardApplicable.call(uintYwA0Xjk, {from: accounts[0]});
		const stringpHpDe4L = await WolfStakingRewardsBU00daV.symbol.call({from: accounts[4]});
		const uint256m7r0Iws = await WolfStakingRewardsBU00daV.balanceOfPerPool.call(addressWiQuOke, uintGdohnsz, {from: accounts[1]});
		const uintjzb09Ns = await WolfStakingRewardsBU00daV.getReward.call(uintDLxM5XP, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringFjUCh34 = "wJbHbjJLj7WTtLUAAy2LOzmtti7uOs8XFW8O13WqzvnhQL2l3JMj0QxeyAS5zYvJ"
		const stringDkUr194 = "w821Dyu3v601PxCi4lNkuFaGu3FPUNC7hmYkIMYt4d8NbMYQy5WhLkcWAPBTgkcdtIaDj821SGvNbcnAVqOr"
		const uintovKWNgY = BigInt("96")
		const WolfStakingRewardslZXsQz5 = await WolfStakingRewards.new(stringFjUCh34, stringDkUr194, uintovKWNgY, {from: accounts[0]});
		const uintUXh0Lop = BigInt("1951")
		const uint8Z4Zyg = BigInt("1090")
		const uintfRb86L = BigInt("365")
		const uint256jBVxud8 = await WolfStakingRewardslZXsQz5.exit.call(uintUXh0Lop, {from: accounts[0]});
		const uint256qrhHElI = await WolfStakingRewardslZXsQz5.rewardPerToken.call(uint8Z4Zyg, {from: accounts[0]});
		const uint256i0MVSZB = await WolfStakingRewardslZXsQz5.rewardPerToken.call(uintfRb86L, {from: accounts[0]});
		const stringeQuGfDO = await WolfStakingRewardslZXsQz5.symbol.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringRekKLZz = "2Sp98yomxspBOB7ZKsO3Uysep9dQFSOCmtfy4wKQb3B1jCG4hNt4Waww5"
		const stringkiOYs0P = "Xte0hxmKG4l2DW0UvlHjxbQDVMqBYJdnaCe950j8g9z2gPfMwJVKJeSESirOO5paCEGkR1CqFMil7BHdffFNYI"
		const uintraUlkB8 = BigInt("193")
		const WolfStakingRewardsizIXaNJ = await WolfStakingRewards.new(stringRekKLZz, stringkiOYs0P, uintraUlkB8, {from: accounts[4]});
		const uintACqI9OL = BigInt("1098")
		const uintbSqOwn = BigInt("1569")
		const uintlN85jZC = BigInt("954")
		const uintBXaKZkV = BigInt("42")
		const addressaEMOkMB = accounts[3]
		const uint8FE2fJwv = await WolfStakingRewardsizIXaNJ.decimals.call({from: accounts[0]});
		const uint256arrayphFEwOD = await WolfStakingRewardsizIXaNJ.updateNotifyRewardAmount.call(uintACqI9OL, {from: accounts[1]});
		const uint256FayK2Sb = await WolfStakingRewardsizIXaNJ.getRewardForDuration.call(uintbSqOwn, {from: accounts[1]});
		await WolfStakingRewardsizIXaNJ.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256TUFAZIp = await WolfStakingRewardsizIXaNJ.exit.call(uintlN85jZC, {from: accounts[3]});
		const addressqmKrsEE = await WolfStakingRewardsizIXaNJ.updateReward.call(addressaEMOkMB, uintBXaKZkV, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringRMkTjXa = "HGk0zHg4tqFE7zl03RV3nde5E1yZkgNL54Go0vf1"
		const stringVuaxSyX = "Qy21TjyIkGKoafcSqVx1tOp1Ij1s9AU"
		const uinteFlsubX = BigInt("10")
		const WolfStakingRewardsEYUnawc = await WolfStakingRewards.new(stringRMkTjXa, stringVuaxSyX, uinteFlsubX, {from: accounts[2]});
		const uintVuF2lHd = BigInt("280")
		const uintdy24SfY = BigInt("1784")
		const uintbQ7X95x = BigInt("1194")
		const uintecElFx = BigInt("1161")
		const addressJZYFUT = "0x0000000000000000000000000000000000000001"
		const uintcmH4iOA = BigInt("129")
		const uintMIj6CMF = BigInt("566")
		const uint256arrayORETdZf = await WolfStakingRewardsEYUnawc.updateNotifyRewardAmount.call(uintVuF2lHd, {from: accounts[2]});
		await WolfStakingRewardsEYUnawc.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256AvU9y4e = await WolfStakingRewardsEYUnawc.withdraw.call(uintbQ7X95x, uintdy24SfY, {from: accounts[1]});
		const uint256QBzM9nr = await WolfStakingRewardsEYUnawc.balanceOfPerPool.call(addressJZYFUT, uintecElFx, {from: accounts[2]});
		const uint256KNINU9U = await WolfStakingRewardsEYUnawc.withdraw.call(uintMIj6CMF, uintcmH4iOA, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringEXCOxG = "goJlofg6f"
		const stringWU5PTQ = "ZAG50xNfJ8bBPUVKw08IzOBL33V3Tud5pU"
		const uintwdmOca = BigInt("141")
		const WolfStakingRewardsbWMjpCl = await WolfStakingRewards.new(stringEXCOxG, stringWU5PTQ, uintwdmOca, {from: accounts[2]});
		const uintgZwPXXZ = BigInt("1169")
		const uintkTURxAs = BigInt("1025")
		const uintLMEqjZv = BigInt("1984")
		const addressw0SSmXd = accounts[3]
		const uintwx7uWBK = BigInt("1680")
		const uintub2QdaV = BigInt("1410")
		const uintpbqUuxW = BigInt("77")
		const uintVM1wmPQ = BigInt("918")
		const addressQbYrKPh = accounts[0]
		const uint256wGlNlax = await WolfStakingRewardsbWMjpCl.withdrawRemainingBalance.call(uintkTURxAs, uintgZwPXXZ, {from: accounts[0]});
		const uint256mL0AQqA = await WolfStakingRewardsbWMjpCl.earned.call(addressw0SSmXd, uintLMEqjZv, {from: accounts[2]});
		const uint256g5aDQLm = await WolfStakingRewardsbWMjpCl.totalSupplyPerPool.call(uintwx7uWBK, {from: accounts[0]});
		const uint256nvqnxX2 = await WolfStakingRewardsbWMjpCl.withdrawRemainingBalance.call(uintpbqUuxW, uintub2QdaV, {from: accounts[3]});
		const uint256XGaxUt4 = await WolfStakingRewardsbWMjpCl.earned.call(addressQbYrKPh, uintVM1wmPQ, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringBC09nNQ = "HsRmG4ozznm6xbeKyz2S62AOymFXVeyc"
		const stringJnhtH9 = "SVjD8Ma5neYHuC7GoDwLwKBX8w2u3146ST48q"
		const uintU14EWcF = BigInt("118")
		const WolfStakingRewardsmvfapL5 = await WolfStakingRewards.new(stringBC09nNQ, stringJnhtH9, uintU14EWcF, {from: accounts[4]});
		const uintmkNRVn6 = BigInt("1375")
		const uintjyyVdEk = BigInt("1172")
		const addressGfpO4Dt = accounts[1]
		const uint8lp0H1A0 = await WolfStakingRewardsmvfapL5.decimals.call({from: accounts[3]});
		const uintGFp9F7 = await WolfStakingRewardsmvfapL5.getReward.call(uintmkNRVn6, {from: accounts[1]});
		await WolfStakingRewardsmvfapL5.onlyOwner.call({from: accounts[0]});
		const addressOyles0s = await WolfStakingRewardsmvfapL5.updateReward.call(addressGfpO4Dt, uintjyyVdEk, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringDYabnwH = "XEQDGAVFJBmbjykHJFEeqd5xE4aX6WlHC914Q4qt0wii2elGIwtBk4qRNxcLLVDlfHi"
		const stringbkyXLr0 = "5vtCVgU2mhnB8LhwxM1h7S7awpgRKziQ70wyW5LUIaaBa9t7wDoKASdSWdwH9axFg74QwrzY"
		const uintCrc26EQ = BigInt("227")
		const WolfStakingRewardsxKoedSK = await WolfStakingRewards.new(stringDYabnwH, stringbkyXLr0, uintCrc26EQ, {from: accounts[0]});
		const uintnOGozMv = BigInt("730")
		const addressw0nBtoR = accounts[1]
		const uint256Hrm1mC8 = await WolfStakingRewardsxKoedSK.balanceOfPerPool.call(addressw0nBtoR, uintnOGozMv, {from: accounts[4]});
		await WolfStakingRewardsxKoedSK.onlyOwner.call({from: accounts[2]});
		const stringyFhWpGg = await WolfStakingRewardsxKoedSK.name.call({from: accounts[5]});
		await WolfStakingRewardsxKoedSK.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringuUdcfBk = "Q97JAH2vWjUkeppgt8niTBMC8cQLx"
		const stringo8MjzK = "d7Usx3eqqMDQbnTmisJB7AKFagoLBVzFrSM5ROQdEtgpYk7TJsVH5e2IIa7cySQ758WNF3SSErSPEI98Uupst4G9"
		const uintENIvc4e = BigInt("32")
		const WolfStakingRewardsFYkbALa = await WolfStakingRewards.new(stringuUdcfBk, stringo8MjzK, uintENIvc4e, {from: accounts[2]});
		const uintysCJyw5 = BigInt("1924")
		const uintMh8Iu0p = BigInt("536")
		await WolfStakingRewardsFYkbALa.nonReentrant.call({from: accounts[0]});
		const uintsKf2yF = await WolfStakingRewardsFYkbALa.getReward.call(uintysCJyw5, {from: accounts[2]});
		const stringGvMX0vZ = await WolfStakingRewardsFYkbALa.symbol.call({from: accounts[3]});
		const uint256jWJJ0nN = await WolfStakingRewardsFYkbALa.getRewardForDuration.call(uintMh8Iu0p, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const string9vUPRF = "KSkOYqlq2JKUGHJmnXk9f4sUVynBs6Wi7VZIuEf0FW3zAhmS3ARUm8hYQ0QNQUlv8Dx"
		const stringxYl9rhz = "MkuSsn2C4XNrs1WInK4VK"
		const uintLXKlhmS = BigInt("101")
		const WolfStakingRewardsULXqRUZ = await WolfStakingRewards.new(string9vUPRF, stringxYl9rhz, uintLXKlhmS, {from: accounts[5]});
		const uintCjMF0oS = BigInt("49")
		const uintapkLX0D = BigInt("513")
		const uints56qp7T = BigInt("894")
		const uint256ZBfhz1 = await WolfStakingRewardsULXqRUZ.rewardPerToken.call(uintCjMF0oS, {from: accounts[4]});
		await WolfStakingRewardsULXqRUZ.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256GcsNnU3 = await WolfStakingRewardsULXqRUZ.rewardPerToken.call(uintapkLX0D, {from: accounts[1]});
		const uint2568diMbw = await WolfStakingRewardsULXqRUZ.lastTimeRewardApplicable.call(uints56qp7T, {from: accounts[0]});
		const stringHPJ7nGV = await WolfStakingRewardsULXqRUZ.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringSkdg2SQ = "JsZFx37LooIn2U8kSkSProCG1bRXPD4EJxiLlfFtyTRWdXhHg6nEHFQQsc"
		const stringO4W0ETp = "ZehDCJkxqHvpuqh4BxzbnG"
		const uintjKQYl7O = BigInt("31")
		const WolfStakingRewardsijws46l = await WolfStakingRewards.new(stringSkdg2SQ, stringO4W0ETp, uintjKQYl7O, {from: accounts[2]});
		const uintNeRxwe0 = BigInt("1588")
		const uinttyFhyrZ = BigInt("1795")
		const uintAuCbyju = BigInt("671")
		const addressIlcm2Y4 = accounts[1]
		const uintNUDkpjM = BigInt("1527")
		const uintUYMp1Py = BigInt("1595")
		await WolfStakingRewardsijws46l.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256SrMbYj = await WolfStakingRewardsijws46l.stake.call(uinttyFhyrZ, uintNeRxwe0, {from: accounts[4]});
		await WolfStakingRewardsijws46l.nonReentrant.call({from: accounts[4]});
		const uint256Nzlq8Tt = await WolfStakingRewardsijws46l.balanceOfPerPool.call(addressIlcm2Y4, uintAuCbyju, {from: accounts[0]});
		const uint256hbNEFuH = await WolfStakingRewardsijws46l.withdrawRemainingBalance.call(uintUYMp1Py, uintNUDkpjM, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringg79jpNI = "SEOx0Yh9wIZOGDJ92Doc4vrfeSGrxAhpJNA4lpGfCyDK2x5mtaipmk"
		const stringisTTyjX = "BtDSMNCoOY70JSpb2dZNvHSX7DAQJA1KtMFgdgc3IVmutCQNRYc2yznYb"
		const uintieViwyn = BigInt("163")
		const WolfStakingRewardsSRXt25q = await WolfStakingRewards.new(stringg79jpNI, stringisTTyjX, uintieViwyn, {from: accounts[0]});
		const uintKDqwFpf = BigInt("341")
		const uintVc0N75t = BigInt("78")
		const uintlHj8H0F = BigInt("1453")
		const uintM5PYbge = BigInt("134")
		const uintgrjD9BV = BigInt("664")
		const uintsf1ObMt = BigInt("864")
		const addressK3siyxC = accounts[1]
		const uint256TjCRqTh = await WolfStakingRewardsSRXt25q.stake.call(uintVc0N75t, uintKDqwFpf, {from: accounts[2]});
		await WolfStakingRewardsSRXt25q.nonReentrant.call({from: accounts[2]});
		const uint256Fcj7E2X = await WolfStakingRewardsSRXt25q.exit.call(uintlHj8H0F, {from: accounts[2]});
		const uint256Kj6YCEW = await WolfStakingRewardsSRXt25q.getRewardForDuration.call(uintM5PYbge, {from: accounts[4]});
		const uint256cp1ofb = await WolfStakingRewardsSRXt25q.getRewardForDuration.call(uintgrjD9BV, {from: accounts[3]});
		const uint256SScDDlC = await WolfStakingRewardsSRXt25q.earned.call(addressK3siyxC, uintsf1ObMt, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjILMFgm = "2Ij3nVG4zXAHyr1ZMtXIdZoVD75Jsd9SuswOy0BterQodg4wT6WU5cN2LBMwA9vPj92h0uzY"
		const stringUdYHAME = "LdQ8pz7uyJRVBNV"
		const uintatuDzkG = BigInt("219")
		const WolfStakingRewardsJ0AcVKx = await WolfStakingRewards.new(stringjILMFgm, stringUdYHAME, uintatuDzkG, {from: accounts[0]});
		const uintD2ZVyDq = BigInt("261")
		const uinttWVwzq = BigInt("1664")
		const uint256is29piI = await WolfStakingRewardsJ0AcVKx.getRewardForDuration.call(uintD2ZVyDq, {from: accounts[2]});
		const stringuSdPNcV = await WolfStakingRewardsJ0AcVKx.symbol.call({from: accounts[3]});
		const string35nXN4 = await WolfStakingRewardsJ0AcVKx.symbol.call({from: accounts[5]});
		const uint256gUA24Np = await WolfStakingRewardsJ0AcVKx.lastTimeRewardApplicable.call(uinttWVwzq, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringafgndUk = "pbukAEN6DzmmVz741MDblkjWs"
		const stringphFfThI = "abGSepXnsUsBFqWRYojEi5RxwtzFXtjWrEXlU6NETtb6q3hBSthlXSKOegdAFApzbZHEWnY"
		const uintJy7ES7v = BigInt("120")
		const WolfStakingRewardsU2vQ1ti = await WolfStakingRewards.new(stringafgndUk, stringphFfThI, uintJy7ES7v, {from: "0x0000000000000000000000000000000000000001"});
		const uintt1XqiSl = BigInt("960")
		const uintdOL9IDi = BigInt("806")
		const uintBEQZZFi = BigInt("787")
		const uint256j10qjRP = await WolfStakingRewardsU2vQ1ti.getRewardForDuration.call(uintt1XqiSl, {from: accounts[0]});
		const uint2568H0RTd = await WolfStakingRewardsU2vQ1ti.lastTimeRewardApplicable.call(uintdOL9IDi, {from: accounts[1]});
		await WolfStakingRewardsU2vQ1ti.onlyOwner.call({from: accounts[1]});
		const uint256QYwIVyp = await WolfStakingRewardsU2vQ1ti.totalSupplyPerPool.call(uintBEQZZFi, {from: accounts[5]});
		const uint8cVFGgn8 = await WolfStakingRewardsU2vQ1ti.decimals.call({from: accounts[4]});
	});
})