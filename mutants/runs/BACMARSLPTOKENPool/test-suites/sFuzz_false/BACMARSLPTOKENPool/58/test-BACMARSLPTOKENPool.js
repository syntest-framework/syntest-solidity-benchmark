const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const stringMYbpJFU = "ERv8CG4NjCF2CcKUbCzQJWmQOhjLYYmqulmM6L"
		const stringmmQfKHP = "7zzI5eJkV61dtDktDJjNFJKQhA"
		const uintlyrYsCO = BigInt("74")
		const BACMARSLPTOKENPooltfmQ8fL = await BACMARSLPTOKENPool.new(stringMYbpJFU, stringmmQfKHP, uintlyrYsCO, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPooltfmQ8fL.exit.call({from: accounts[4]});
		await BACMARSLPTOKENPooltfmQ8fL.onlyRewardsDistribution.call({from: accounts[0]});
		const uint2568kjPSm = await BACMARSLPTOKENPooltfmQ8fL.getRewardForDuration.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEM4LG0P = "71vnnSrqbiYLaJn54EM4V5mdiuPjQuM9aNJwDfDCwCLUgPfLd2BpKXTwSejXXSC2"
		const stringBQXtXdS = "PFKveylfpvH3ZplBqG1P8zw7TjpFkAQP79W1hycMJkZYD87MhHZmJBKf75Ro3j8gMKgiAEZdV56H7XF0ldo161C"
		const uintbdgIf7U = BigInt("240")
		const BACMARSLPTOKENPool8gAC14 = await BACMARSLPTOKENPool.new(stringEM4LG0P, stringBQXtXdS, uintbdgIf7U, {from: accounts[0]});
		const uintmFo8QII = BigInt("1548")
		const uint8yg1S0EM = await BACMARSLPTOKENPool8gAC14.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Xoz4Ws = await BACMARSLPTOKENPool8gAC14.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256is7OEaY = await BACMARSLPTOKENPool8gAC14.withdraw.call(uintmFo8QII, {from: accounts[0]});
		const stringACsRwYA = await BACMARSLPTOKENPool8gAC14.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPo2Frjd = "Gpgh1l8xPnC7CtzWUpdpwI2SAp2PMgu0XwbIS6XVzyOUDgztnir1dw86gL98ZO3PZlWPcfAGjWX2pjvX9mIJMQrnfTP"
		const stringdx9ardS = "Cqn0S6rTQKEe9BJiTlspwKWOjPlrRxvodMIdDinct54ivBxNQ4V"
		const uintATbp4vi = BigInt("87")
		const BACMARSLPTOKENPoolHstTju8 = await BACMARSLPTOKENPool.new(stringPo2Frjd, stringdx9ardS, uintATbp4vi, {from: accounts[4]});
		await BACMARSLPTOKENPoolHstTju8.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256bzQMpYJ = await BACMARSLPTOKENPoolHstTju8.rewardPerToken.call({from: accounts[4]});
		await BACMARSLPTOKENPoolHstTju8.exit.call({from: accounts[2]});
		const stringtjxaR7T = await BACMARSLPTOKENPoolHstTju8.name.call({from: accounts[4]});
		const stringGsQ3mtV = await BACMARSLPTOKENPoolHstTju8.symbol.call({from: accounts[0]});
		await BACMARSLPTOKENPoolHstTju8.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPIg2PKr = "eOvPN9paRTE0Ug8WycVszodOkDgvlSdMNkqL7O8jGGQGuhzfZYR"
		const stringSV9Irq2 = "2HlWNdaV9kLNDUZEDujC3"
		const uintaxhaieE = BigInt("28")
		const BACMARSLPTOKENPoolUZTOuQ = await BACMARSLPTOKENPool.new(stringPIg2PKr, stringSV9Irq2, uintaxhaieE, {from: accounts[3]});
		const uintTSAZhYq = BigInt("379")
		await BACMARSLPTOKENPoolUZTOuQ.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256cT1kShE = await BACMARSLPTOKENPoolUZTOuQ.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256Ae6tAPQ = await BACMARSLPTOKENPoolUZTOuQ.withdraw.call(uintTSAZhYq, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressZb0K2GL = accounts[4]
		const addressyZ4OJ4V = accounts[0]
		const addressyrCoKF = accounts[0]
		const BACMARSLPTOKENPoolIKr22P2 = await BACMARSLPTOKENPool.new(addressZb0K2GL, addressyZ4OJ4V, addressyrCoKF, {from: accounts[0]});
		const uintcHihpY1 = BigInt("2025")
		await BACMARSLPTOKENPoolIKr22P2.exit.call({from: accounts[1]});
		const uint256bCET7Jm = await BACMARSLPTOKENPoolIKr22P2.rewardPerToken.call({from: accounts[2]});
		await BACMARSLPTOKENPoolIKr22P2.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256nJxXEzC = await BACMARSLPTOKENPoolIKr22P2.notifyRewardAmount.call(uintcHihpY1, {from: accounts[5]});
		const uint8L27t5sR = await BACMARSLPTOKENPoolIKr22P2.decimals.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPoolIKr22P2.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressovpntUO = accounts[2]
		const address9h7VlX = accounts[4]
		const addressvHyvay1 = accounts[3]
		const BACMARSLPTOKENPoolFespdDK = await BACMARSLPTOKENPool.new(addressovpntUO, address9h7VlX, addressvHyvay1, {from: accounts[1]});
		const byteOtSAUxG = "0x0f0e151f1310111e091d19181d1d020a1c1e09011004030b0e1f071814160907"
		const byteQx3zpRV = "0x0c131f0e01161c1b11161a0018070c06041216140e0b0e020f02131f08041306"
		const uinthHtOkYs = BigInt("11")
		const uintTVYAZPL = BigInt("127")
		const uintIlV27Bd = BigInt("265")
		const addressga7MbI3 = accounts[4]
		const addressiwc8j1q = accounts[0]
		const uint256OwSY469 = await BACMARSLPTOKENPoolFespdDK.rewardPerToken.call({from: accounts[3]});
		const uint256ucKOvDD = await BACMARSLPTOKENPoolFespdDK.stakeWithPermit.call(uintIlV27Bd, uintTVYAZPL, uinthHtOkYs, byteQx3zpRV, byteOtSAUxG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256nKYLzK = await BACMARSLPTOKENPoolFespdDK.getRewardForDuration.call({from: accounts[2]});
		const addressBxAgYGS = await BACMARSLPTOKENPoolFespdDK.updateReward.call(addressga7MbI3, {from: accounts[0]});
		const uint256YwWNbuy = await BACMARSLPTOKENPoolFespdDK.earned.call(addressiwc8j1q, {from: accounts[2]});

		assert.equal(uint256OwSY469, BigInt("0"))
		await expect(BACMARSLPTOKENPoolFespdDK.stakeWithPermit.call(uintIlV27Bd, uintTVYAZPL, uinthHtOkYs, byteQx3zpRV, byteOtSAUxG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressXRUZfQW = accounts[4]
		const addressoFBPG4L = accounts[3]
		const addressZ2FtGiL = accounts[4]
		const BACMARSLPTOKENPoolPI1CrHY = await BACMARSLPTOKENPool.new(addressXRUZfQW, addressoFBPG4L, addressZ2FtGiL, {from: accounts[0]});
		const uintpj7HNF = BigInt("678")
		const uint202L6s = BigInt("1620")
		const uint8TR9vTHx = await BACMARSLPTOKENPoolPI1CrHY.decimals.call({from: accounts[5]});
		const uint256qDWCbBa = await BACMARSLPTOKENPoolPI1CrHY.notifyRewardAmount.call(uintpj7HNF, {from: accounts[2]});
		const uint256Cz7RIkp = await BACMARSLPTOKENPoolPI1CrHY.rewardPerToken.call({from: accounts[0]});
		const uint256tMbVNo = await BACMARSLPTOKENPoolPI1CrHY.getRewardForDuration.call({from: accounts[0]});
		const uint256U34m2Q4 = await BACMARSLPTOKENPoolPI1CrHY.notifyRewardAmount.call(uint202L6s, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolPI1CrHY.decimals.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLW68ciF = "Bok"
		const stringmQzx3sF = "2DWq2B15AEWR4PwuF6ANfI1mFTambb7FmAkHcl0HUIUNP67L2TwcRiykDoRx3kQcpWUW4tH3br4x9myflIJ"
		const uintJSdBcy = BigInt("4")
		const BACMARSLPTOKENPoolHFkwSHs = await BACMARSLPTOKENPool.new(stringLW68ciF, stringmQzx3sF, uintJSdBcy, {from: accounts[4]});
		const addresstLLUhTM = accounts[3]
		const uint256FWJSF7s = await BACMARSLPTOKENPoolHFkwSHs.earned.call(addresstLLUhTM, {from: accounts[1]});
		await BACMARSLPTOKENPoolHFkwSHs.exit.call({from: accounts[3]});
		const stringFvLuNXS = await BACMARSLPTOKENPoolHFkwSHs.symbol.call({from: accounts[2]});
		await BACMARSLPTOKENPoolHFkwSHs.exit.call({from: accounts[1]});
		const uint256Kr5QTF7 = await BACMARSLPTOKENPoolHFkwSHs.rewardPerToken.call({from: accounts[1]});
		const uint256Inpwnfp = await BACMARSLPTOKENPoolHFkwSHs.totalSupply.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTMhDvoq = "j7e6vv4lBj6aVzInMyaQdxtBb9atftRKB5UHmTYCC4EYfb9FQTrtrz"
		const stringzsb9eot = "OfQRqnb8VFlgr6knZFbonlmgdmEyy08YSe3lcojqLD5Npud4sN9sb39QRIwnEXsQ6sNP9PkcjM6JgeMk3vlLZ"
		const uintPQa1zlc = BigInt("240")
		const BACMARSLPTOKENPoolfLrJvg5 = await BACMARSLPTOKENPool.new(stringTMhDvoq, stringzsb9eot, uintPQa1zlc, {from: accounts[2]});
		const addressR2ND8fV = accounts[4]
		const uintcSTb7lV = BigInt("880")
		await BACMARSLPTOKENPoolfLrJvg5.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256DAh8eI = await BACMARSLPTOKENPoolfLrJvg5.earned.call(addressR2ND8fV, {from: accounts[3]});
		const uint256cEMTGLh = await BACMARSLPTOKENPoolfLrJvg5.getRewardForDuration.call({from: accounts[5]});
		const uint256gq51rad = await BACMARSLPTOKENPoolfLrJvg5.notifyRewardAmount.call(uintcSTb7lV, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressoRMs7V3 = accounts[4]
		const addressBxWdv0j = accounts[1]
		const addressSXViRnj = accounts[3]
		const BACMARSLPTOKENPool2ZyMju = await BACMARSLPTOKENPool.new(addressoRMs7V3, addressBxWdv0j, addressSXViRnj, {from: accounts[3]});
		const uintz9muXis = BigInt("1860")
		const uintRYHph7 = BigInt("2009")
		const uint256KumN5u1 = await BACMARSLPTOKENPool2ZyMju.withdraw.call(uintz9muXis, {from: accounts[1]});
		const uint256oE4YUbW = await BACMARSLPTOKENPool2ZyMju.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPool2ZyMju.nonReentrant.call({from: accounts[0]});
		await BACMARSLPTOKENPool2ZyMju.nonReentrant.call({from: accounts[3]});
		const uint256BbGJtdm = await BACMARSLPTOKENPool2ZyMju.notifyRewardAmount.call(uintRYHph7, {from: accounts[4]});

		await expect(BACMARSLPTOKENPool2ZyMju.withdraw.call(uintz9muXis, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringgK3oh5c = "RPoWWcLrsFWGhvHPXpxbTfB4jL"
		const stringEc67icq = "y9GJBnT7qwfFNpdUswXpWxuBZm5oIUNIC2S4PJBO55IS1NbF98Tg8BOeCIVAxGZp977OseayT8Wcml3St0xt1Xxu8"
		const uintMYQwFmL = BigInt("45")
		const BACMARSLPTOKENPooli3kRNEH = await BACMARSLPTOKENPool.new(stringgK3oh5c, stringEc67icq, uintMYQwFmL, {from: accounts[1]});
		const uint256BF6xOCG = await BACMARSLPTOKENPooli3kRNEH.lastTimeRewardApplicable.call({from: accounts[4]});
		const stringDV4c4Wg = await BACMARSLPTOKENPooli3kRNEH.symbol.call({from: accounts[1]});
		const uint256nnyCQIA = await BACMARSLPTOKENPooli3kRNEH.rewardPerToken.call({from: accounts[0]});
		const uint256JElIto = await BACMARSLPTOKENPooli3kRNEH.totalSupply.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringzfeXIQz = "5KyYJBbrZpdcLMnDnyE8DynbGYdNnyCeAZxhszlOFNS9aWB2cKiFFUihOjcWYZj2CeIFcAa1goijzVaRWhBVdPxjrrB5ryL"
		const stringq3wmnRB = "zMi8omLnn3Kc3JHSjlB48KtidT6aEbLj9nvW"
		const uintmgWWVKX = BigInt("217")
		const BACMARSLPTOKENPoolfZOXtk3 = await BACMARSLPTOKENPool.new(stringzfeXIQz, stringq3wmnRB, uintmgWWVKX, {from: accounts[0]});
		const uintQUdgWpo = BigInt("1934")
		const addressX6RfE7u = accounts[1]
		const uintb2KXPn = BigInt("1879")
		const byteL81D0ki = "0x08111b1c1f1c051f0012170e020211050b001d02140b1d090e0a1e190a0c030f"
		const byterID9WCG = "0x16061e0811161608000109141f111a0e0d07200f0907150e1811150d0d0d0519"
		const uintvsqoTnO = BigInt("41")
		const uinteMq26lu = BigInt("927")
		const uintVYAXsFi = BigInt("1471")
		const uint256Xgir9EH = await BACMARSLPTOKENPoolfZOXtk3.withdraw.call(uintQUdgWpo, {from: accounts[1]});
		const uint256uJVG5Ak = await BACMARSLPTOKENPoolfZOXtk3.getRewardForDuration.call({from: accounts[3]});
		const uint256VvUaH5y = await BACMARSLPTOKENPoolfZOXtk3.balanceOf.call(addressX6RfE7u, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ZzJUiG = await BACMARSLPTOKENPoolfZOXtk3.withdraw.call(uintb2KXPn, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xtChpYH = await BACMARSLPTOKENPoolfZOXtk3.stakeWithPermit.call(uintVYAXsFi, uinteMq26lu, uintvsqoTnO, byterID9WCG, byteL81D0ki, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressw8JmTv = accounts[1]
		const addresslwCr1eY = accounts[4]
		const addressRsDaHUa = accounts[0]
		const BACMARSLPTOKENPooloKWeNTO = await BACMARSLPTOKENPool.new(addressw8JmTv, addresslwCr1eY, addressRsDaHUa, {from: accounts[2]});
		const addressFxEWoUf = accounts[2]
		const addressNbjCQ2H = accounts[3]
		const uintvTvsDV = BigInt("2028")
		const byteDXxoWvu = "0x1d101d0a06080a0612101b020f1c0a020d1e051b09190c001801190613190701"
		const byteYkJHGaJ = "0x0d091f1703131e1013161706111b0009130305121c04020f0805131911011f11"
		const uintWEC9vI7 = BigInt("21")
		const uintbWtqx5Y = BigInt("693")
		const uintLl4t1T3 = BigInt("58")
		const uint256b5j52yk = await BACMARSLPTOKENPooloKWeNTO.balanceOf.call(addressFxEWoUf, {from: accounts[4]});
		const uint256Z3uYAZn = await BACMARSLPTOKENPooloKWeNTO.balanceOf.call(addressNbjCQ2H, {from: accounts[2]});
		const uint256flDWdbj = await BACMARSLPTOKENPooloKWeNTO.totalSupply.call({from: accounts[0]});
		const uint256BEGX6wr = await BACMARSLPTOKENPooloKWeNTO.notifyRewardAmount.call(uintvTvsDV, {from: accounts[0]});
		const uint256247wah = await BACMARSLPTOKENPooloKWeNTO.stakeWithPermit.call(uintLl4t1T3, uintbWtqx5Y, uintWEC9vI7, byteYkJHGaJ, byteDXxoWvu, {from: accounts[4]});

		assert.equal(uint256Z3uYAZn, BigInt("0"))
		assert.equal(uint256b5j52yk, BigInt("0"))
		assert.equal(uint256flDWdbj, BigInt("0"))
		await expect(BACMARSLPTOKENPooloKWeNTO.notifyRewardAmount.call(uintvTvsDV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressRQ5KQQF = accounts[4]
		const addressX0hSjQ = accounts[0]
		const addresstufPb4o = accounts[0]
		const BACMARSLPTOKENPoolIKr22P2 = await BACMARSLPTOKENPool.new(addressRQ5KQQF, addressX0hSjQ, addresstufPb4o, {from: accounts[0]});
		const uint256CNk0toH = await BACMARSLPTOKENPoolIKr22P2.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolIKr22P2.getReward.call({from: accounts[0]});
		const uint8L27t5sR = await BACMARSLPTOKENPoolIKr22P2.decimals.call({from: accounts[1]});

		assert.equal(uint256CNk0toH, BigInt("0"))
		await expect(BACMARSLPTOKENPoolIKr22P2.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringio7oNc = "A5ORZsiab1RPKzMUpvB5d2UrFR7gQF2LaS9PGnqkOVGQzVKHUIGmnflCXaQtPpvH5OJKg0rfJlrDX7IXgGmBdg"
		const stringhE3RcL = "woqY2DpJxX6wpvkfWeWNjdgHxPyrPQ"
		const uintJd9osKl = BigInt("180")
		const BACMARSLPTOKENPoolT6vK6bX = await BACMARSLPTOKENPool.new(stringio7oNc, stringhE3RcL, uintJd9osKl, {from: accounts[2]});
		const addressqRb3LY = accounts[5]
		const uint256O4xGdx7 = await BACMARSLPTOKENPoolT6vK6bX.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256SmeBF8O = await BACMARSLPTOKENPoolT6vK6bX.balanceOf.call(addressqRb3LY, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringGRTtP5i = "N2D4TLkfg1GhJLU2KpAY7ugVvtMX2LYc32A6L4rNxyEqH9ZcDRuODSij0arZ1cLeWzYiILy3bFaINHrAjYe"
		const stringRU9OJpE = "CX8ABq2a4WYnDRqCQCdO9m"
		const uintd3G8h5 = BigInt("84")
		const BACMARSLPTOKENPooljotb1nD = await BACMARSLPTOKENPool.new(stringGRTtP5i, stringRU9OJpE, uintd3G8h5, {from: accounts[2]});
		const uintZKMOer7 = BigInt("376")
		const uint256i3PFvJQ = await BACMARSLPTOKENPooljotb1nD.withdraw.call(uintZKMOer7, {from: accounts[0]});
		await BACMARSLPTOKENPooljotb1nD.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressOfbXyQv = accounts[4]
		const addressock2V6 = accounts[0]
		const addressx2KCGtp = accounts[0]
		const BACMARSLPTOKENPoolIKr22P2 = await BACMARSLPTOKENPool.new(addressOfbXyQv, addressock2V6, addressx2KCGtp, {from: accounts[0]});
		const uint256oQit3zS = await BACMARSLPTOKENPoolIKr22P2.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolIKr22P2.nonReentrant.call({from: accounts[4]});
		await BACMARSLPTOKENPoolIKr22P2.getReward.call({from: accounts[0]});

		assert.equal(uint256oQit3zS, BigInt("0"))
		await expect(BACMARSLPTOKENPoolIKr22P2.nonReentrant.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringdB7Uyvo = "gnEpSgjk4hzUxr9Gc49V"
		const stringv9lVaQQ = "PqTbw4T0iggkJU6oxCUXPSqzd5GkUFRY6ksvFVBQTcVJrIMV6NO"
		const uintePSXY9T = BigInt("52")
		const BACMARSLPTOKENPoolh0bLRiX = await BACMARSLPTOKENPool.new(stringdB7Uyvo, stringv9lVaQQ, uintePSXY9T, {from: accounts[4]});
		const uintg19t383 = BigInt("89")
		const uint256e4Bbqkv = await BACMARSLPTOKENPoolh0bLRiX.notifyRewardAmount.call(uintg19t383, {from: accounts[5]});
		const uint256CcvnLm2 = await BACMARSLPTOKENPoolh0bLRiX.rewardPerToken.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressFYsFGNq = accounts[4]
		const addressJdIQ5ZC = accounts[0]
		const addressTD3SxzD = accounts[0]
		const BACMARSLPTOKENPoolIKr22P2 = await BACMARSLPTOKENPool.new(addressFYsFGNq, addressJdIQ5ZC, addressTD3SxzD, {from: accounts[0]});
		const uintK17VaQh = BigInt("901")
		const uint256lkFblC1 = await BACMARSLPTOKENPoolIKr22P2.rewardPerToken.call({from: accounts[5]});
		const uint256OGMwsk = await BACMARSLPTOKENPoolIKr22P2.stake.call(uintK17VaQh, {from: accounts[5]});
		await BACMARSLPTOKENPoolIKr22P2.getReward.call({from: accounts[0]});

		assert.equal(uint256lkFblC1, BigInt("0"))
		await expect(BACMARSLPTOKENPoolIKr22P2.stake.call(uintK17VaQh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFrMqHBU = "XU35ZNam7AHHFYjYkzHyeNGShrbDmOlH0p8jSCy"
		const stringRvLjGYP = "nl6MtjbYmeqZxSxb5rnAhBCklXkNtCvk2uViKulf29r6ZjqrDTKt9oIivYNoKuacCpzpBwmPqs9cD8t4lbrnq1S4lC2"
		const uintmwz8dAK = BigInt("19")
		const BACMARSLPTOKENPoolN6l4I2 = await BACMARSLPTOKENPool.new(stringFrMqHBU, stringRvLjGYP, uintmwz8dAK, {from: accounts[3]});
		const uintbi7lLq5 = BigInt("1214")
		const uint256gXiVUww = await BACMARSLPTOKENPoolN6l4I2.rewardPerToken.call({from: accounts[2]});
		await BACMARSLPTOKENPoolN6l4I2.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256MoPtluv = await BACMARSLPTOKENPoolN6l4I2.stake.call(uintbi7lLq5, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringn9CWi4Q = "lGQapxEYRaV"
		const stringLaBNcD8 = "vbUMcwiToIEbWJGss5DWPRxW"
		const uintqAwEjKP = BigInt("52")
		const BACMARSLPTOKENPoolcFmuwgZ = await BACMARSLPTOKENPool.new(stringn9CWi4Q, stringLaBNcD8, uintqAwEjKP, {from: accounts[0]});
		const uint8KfG6duC = await BACMARSLPTOKENPoolcFmuwgZ.decimals.call({from: accounts[2]});
		await BACMARSLPTOKENPoolcFmuwgZ.exit.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringu1obmrU = "WNR9s"
		const stringc1gO0uu = "8xR1vqHmsSkCr8SCZqPX6AGbcJFTgMdwcAL"
		const uintlKKSVcd = BigInt("120")
		const BACMARSLPTOKENPoolTrGAx1w = await BACMARSLPTOKENPool.new(stringu1obmrU, stringc1gO0uu, uintlKKSVcd, {from: accounts[0]});
		const addressHaJDjbb = accounts[0]
		const uintlAa3API = BigInt("865")
		const stringc2sMp0D = await BACMARSLPTOKENPoolTrGAx1w.symbol.call({from: accounts[1]});
		const stringPm6LLRV = await BACMARSLPTOKENPoolTrGAx1w.name.call({from: accounts[1]});
		const uint256jfwekYR = await BACMARSLPTOKENPoolTrGAx1w.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256swYrfzp = await BACMARSLPTOKENPoolTrGAx1w.earned.call(addressHaJDjbb, {from: accounts[1]});
		const uint8fAuiWOK = await BACMARSLPTOKENPoolTrGAx1w.decimals.call({from: accounts[4]});
		const uint256KyHExa1 = await BACMARSLPTOKENPoolTrGAx1w.notifyRewardAmount.call(uintlAa3API, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSQEKkU = "KFjWdve79V8F0Xvy3GpXzZ6teOhfQn67kqP9b5Sarj82VXDXIw3"
		const stringTS7VhvK = "Hx4SHhzLYb2lLjidwJMkeOggep8Z8"
		const uintlwCheq4 = BigInt("84")
		const BACMARSLPTOKENPoolTB2lpwa = await BACMARSLPTOKENPool.new(stringSQEKkU, stringTS7VhvK, uintlwCheq4, {from: accounts[1]});
		const addresstV2LU6G = accounts[3]
		const uintzlQ08Rv = BigInt("554")
		const uint256zT26oXm = await BACMARSLPTOKENPoolTB2lpwa.balanceOf.call(addresstV2LU6G, {from: accounts[4]});
		await BACMARSLPTOKENPoolTB2lpwa.onlyRewardsDistribution.call({from: accounts[1]});
		const stringqtrpM3w = await BACMARSLPTOKENPoolTB2lpwa.symbol.call({from: accounts[4]});
		await BACMARSLPTOKENPoolTB2lpwa.nonReentrant.call({from: accounts[1]});
		const uint256e3YSbVO = await BACMARSLPTOKENPoolTB2lpwa.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256hvP9AID = await BACMARSLPTOKENPoolTB2lpwa.stake.call(uintzlQ08Rv, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressZmFj3vr = "0x0000000000000000000000000000000000000001"
		const addressQUgytKB = accounts[4]
		const addresstArTwrx = accounts[4]
		const BACMARSLPTOKENPoolMaNxLan = await BACMARSLPTOKENPool.new(addressZmFj3vr, addressQUgytKB, addresstArTwrx, {from: "0x0000000000000000000000000000000000000001"});
		const uintzIY0bCL = BigInt("1641")
		await BACMARSLPTOKENPoolMaNxLan.nonReentrant.call({from: accounts[1]});
		const uint256Ceoevl = await BACMARSLPTOKENPoolMaNxLan.withdraw.call(uintzIY0bCL, {from: accounts[2]});
		const stringRifBO1 = await BACMARSLPTOKENPoolMaNxLan.symbol.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhncxSAs = "0hC2g9hfcJkVrm9qDEZzWxQK1znkGBy5QxsDSFykk8HMYIQeD5I90EDjrFqRmfbqzhUJWh7DpTjFRPwe"
		const stringxdj5y5g = "SsSmyjE0MljDEwb0xWN2l6pjNrzrXzSJbMx24EEemQfdF3qlLWogcAMh59"
		const uintr6sSVHp = BigInt("144")
		const BACMARSLPTOKENPoolK2DtpA6 = await BACMARSLPTOKENPool.new(stringhncxSAs, stringxdj5y5g, uintr6sSVHp, {from: accounts[4]});
		await BACMARSLPTOKENPoolK2DtpA6.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256O6X2ldc = await BACMARSLPTOKENPoolK2DtpA6.rewardPerToken.call({from: accounts[2]});
		const uint256Vb0yOfM = await BACMARSLPTOKENPoolK2DtpA6.getRewardForDuration.call({from: accounts[5]});
		const uint256VnTJthp = await BACMARSLPTOKENPoolK2DtpA6.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256v9FcNhB = await BACMARSLPTOKENPoolK2DtpA6.getRewardForDuration.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringc2hSuBA = "4i9DXEVfAisPbgSGy1"
		const string97QHEZ = "9KHwz2ejdCPa7W9ccFxv9hFhgEfSqyoFCbLQOF7AC9bNAL3zN0RvNSyrR1XL4NBfgPlcxJwRjnyOs6CgPnb1I6PhzIu8"
		const uintuUpLf2e = BigInt("187")
		const BACMARSLPTOKENPoolWkpKka2 = await BACMARSLPTOKENPool.new(stringc2hSuBA, string97QHEZ, uintuUpLf2e, {from: accounts[5]});
		const bytezvXVdL5 = "0x1a0d1a0a0817060611150b1604001c0b0b161d00140c1916111b080b1e1b1418"
		const byteVbMSLol = "0x0d0b160d07160e0e06021d0d0d01141410150f1e10051d1a110a031f090e1813"
		const uintU0eE3qu = BigInt("171")
		const uintDFuskLc = BigInt("55")
		const uint0a0UT1 = BigInt("723")
		const uint256hzTbJd = await BACMARSLPTOKENPoolWkpKka2.totalSupply.call({from: accounts[0]});
		const uint256yGtduJr = await BACMARSLPTOKENPoolWkpKka2.stakeWithPermit.call(uint0a0UT1, uintDFuskLc, uintU0eE3qu, byteVbMSLol, bytezvXVdL5, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJeaWMyV = "RFxmsKBi0YKs9AKyvR9xFwMrVF"
		const stringxxYAWWf = "hj9TQycvzbKIKbqcVl3lX28OeYJU5MY1ikl0CvCOkuYdwKn9wmfnK598BBqU0"
		const uintjFSk15T = BigInt("81")
		const BACMARSLPTOKENPoolX7suB5w = await BACMARSLPTOKENPool.new(stringJeaWMyV, stringxxYAWWf, uintjFSk15T, {from: accounts[3]});
		const bytek1gASTI = "0x1114070615140b10190a0f0e0c041a090c1b1a0a1a1b090b04020e0f200c0011"
		const bytev4XxHwN = "0x090a070c0400111f1914130b1d0a130410050c1d130c07141d0d1712160c151f"
		const uintUzzzb3D = BigInt("76")
		const uintZCaaxoZ = BigInt("75")
		const uintVLfou7D = BigInt("152")
		const uintvMPgCIO = BigInt("1584")
		const uint8VyO6rV = await BACMARSLPTOKENPoolX7suB5w.decimals.call({from: accounts[3]});
		const uint256bVwiC1E = await BACMARSLPTOKENPoolX7suB5w.stakeWithPermit.call(uintVLfou7D, uintZCaaxoZ, uintUzzzb3D, bytev4XxHwN, bytek1gASTI, {from: accounts[4]});
		const uint256pAxR8CM = await BACMARSLPTOKENPoolX7suB5w.stake.call(uintvMPgCIO, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressKs0zAIe = accounts[4]
		const addressZ9fLfaI = accounts[0]
		const addressbZMOXl7 = accounts[0]
		const BACMARSLPTOKENPoolIKr22P2 = await BACMARSLPTOKENPool.new(addressKs0zAIe, addressZ9fLfaI, addressbZMOXl7, {from: accounts[0]});
		const uintkcxjof = BigInt("875")
		const uint256OGtCJwP = await BACMARSLPTOKENPoolIKr22P2.notifyRewardAmount.call(uintkcxjof, {from: accounts[4]});
		await BACMARSLPTOKENPoolIKr22P2.getReward.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPoolIKr22P2.notifyRewardAmount.call(uintkcxjof, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressKRuWEPD = accounts[4]
		const addressLjYCvO = accounts[0]
		const addresslon3T31 = accounts[0]
		const BACMARSLPTOKENPoolIKr22P2 = await BACMARSLPTOKENPool.new(addressKRuWEPD, addressLjYCvO, addresslon3T31, {from: accounts[0]});
		const byteZkGZ3D = "0x10011a061616011e1c0a0e080a1d0d06161b091a110c0a1a090e1613171d0503"
		const byteG8UQnk1 = "0x1d000e05111d181c141a200216011e081402000808091b11191412141f10191b"
		const uintNCfkoZi = BigInt("1")
		const uintQoQrCOa = BigInt("1880")
		const uintKDgFwO2 = BigInt("0")
		const address8nHVBh = accounts[1]
		await BACMARSLPTOKENPoolIKr22P2.getReward.call({from: accounts[0]});
		const uint256e1bffpu = await BACMARSLPTOKENPoolIKr22P2.stakeWithPermit.call(uintKDgFwO2, uintQoQrCOa, uintNCfkoZi, byteG8UQnk1, byteZkGZ3D, {from: accounts[0]});
		const uint256p9I6DR = await BACMARSLPTOKENPoolIKr22P2.balanceOf.call(address8nHVBh, {from: accounts[0]});

		await expect(BACMARSLPTOKENPoolIKr22P2.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringt9MVP6j = "DCNpp3w9VVfPkezpvfqvgwiTls"
		const stringEebUMNl = "2Q9jzojognkr9QDRpVKiKndubl9Gh6"
		const uintthwbD1h = BigInt("189")
		const BACMARSLPTOKENPoolTD1j9Uz = await BACMARSLPTOKENPool.new(stringt9MVP6j, stringEebUMNl, uintthwbD1h, {from: accounts[5]});
		const uintIl650CD = BigInt("1915")
		const uint256mSv25eG = await BACMARSLPTOKENPoolTD1j9Uz.withdraw.call(uintIl650CD, {from: accounts[5]});
		const uint256OcxRwfj = await BACMARSLPTOKENPoolTD1j9Uz.totalSupply.call({from: accounts[3]});
		await BACMARSLPTOKENPoolTD1j9Uz.nonReentrant.call({from: accounts[4]});
		await BACMARSLPTOKENPoolTD1j9Uz.exit.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringz1Os6K = "SotBSs6kep3DO7ia48LEG6XBJ"
		const stringwpYp1hS = "EbbkjNOkBXsJHLRn4OKPpBihTptrnqOzUUmB0gKVG5bYliHfd4W4CVqlKqFdqz3ojepJa5SLNDDBSx6oCd6l4bCVnJ6K"
		const uintw0GRiqA = BigInt("160")
		const BACMARSLPTOKENPooledylaP8 = await BACMARSLPTOKENPool.new(stringz1Os6K, stringwpYp1hS, uintw0GRiqA, {from: accounts[5]});
		const uintLaMJ5uR = BigInt("330")
		const uint256WK8P8us = await BACMARSLPTOKENPooledylaP8.stake.call(uintLaMJ5uR, {from: accounts[3]});
		await BACMARSLPTOKENPooledylaP8.getReward.call({from: accounts[2]});
		const uint256dTaGwl2 = await BACMARSLPTOKENPooledylaP8.totalSupply.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhi1VF9 = "J"
		const stringO7ZCDsu = "tus1jYdlix5sWZkvmog18MqfzFcEcGeF2VIFxPVCPb6oe4znazJ3HjvTWgudWmQRoEiMHsogws7K3VaIsDIDW8bmUo0nQzIzDVm"
		const uintxUYOuF8 = BigInt("89")
		const BACMARSLPTOKENPoolLRzWzy5 = await BACMARSLPTOKENPool.new(stringhi1VF9, stringO7ZCDsu, uintxUYOuF8, {from: accounts[3]});
		const uint8GhJVSIG = await BACMARSLPTOKENPoolLRzWzy5.decimals.call({from: accounts[3]});
		await BACMARSLPTOKENPoolLRzWzy5.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256VA7QMTn = await BACMARSLPTOKENPoolLRzWzy5.getRewardForDuration.call({from: accounts[1]});
		const uint8iUeUNW6 = await BACMARSLPTOKENPoolLRzWzy5.decimals.call({from: accounts[1]});
		await BACMARSLPTOKENPoolLRzWzy5.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLfk8zGj = "UqOhRCOSRS"
		const stringUITtTbi = "5akhGxby48WErUcrKZwxFSRCE7t61nQlzA"
		const uintFGA70if = BigInt("228")
		const BACMARSLPTOKENPoolZzHZCFY = await BACMARSLPTOKENPool.new(stringLfk8zGj, stringUITtTbi, uintFGA70if, {from: accounts[0]});
		const uint8QBSldG0 = await BACMARSLPTOKENPoolZzHZCFY.decimals.call({from: accounts[1]});
		await BACMARSLPTOKENPoolZzHZCFY.nonReentrant.call({from: accounts[3]});
		const uint256Htg4YD0 = await BACMARSLPTOKENPoolZzHZCFY.getRewardForDuration.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringoKt9eYo = "YymOsRUqyA3TDUsf8Ceg5t2FyhqCsjz0btZIKN1Uq2Y9omm02lqO35AInytTYdFIgx"
		const stringZMvoCrk = "o3wQJwwIEfobk3jULA8IlRkjiSHI1v31IwwVrZmAnGqxxzIjs7JGLwwa7B715DRoJPDJ7MJjdUgyxoGMN4xkrGMc1kDLEXB7"
		const uintijobBY = BigInt("167")
		const BACMARSLPTOKENPoolv7Uf0oZ = await BACMARSLPTOKENPool.new(stringoKt9eYo, stringZMvoCrk, uintijobBY, {from: accounts[0]});
		const uint256USPPRn5 = await BACMARSLPTOKENPoolv7Uf0oZ.getRewardForDuration.call({from: accounts[0]});
		await BACMARSLPTOKENPoolv7Uf0oZ.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256LXwqwcQ = await BACMARSLPTOKENPoolv7Uf0oZ.totalSupply.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZ1wvZsJ = "nobfPB5E9t9mL9lOEhOtYbBHEaiMOUJtPbO83Ne1nT8L8WSp"
		const stringnaHbGiY = ""
		const uintNnLkJkl = BigInt("96")
		const BACMARSLPTOKENPoolovF0YGU = await BACMARSLPTOKENPool.new(stringZ1wvZsJ, stringnaHbGiY, uintNnLkJkl, {from: accounts[1]});
		const addressTLVXoSd = accounts[2]
		const uintHpRsIG4 = BigInt("1551")
		const addressDWcr93f = accounts[2]
		const addressAx6xfi9 = accounts[1]
		const uintlHTXdki = BigInt("32")
		const uint256jFEOXyJ = await BACMARSLPTOKENPoolovF0YGU.earned.call(addressTLVXoSd, {from: accounts[0]});
		const uint256Ga7A790 = await BACMARSLPTOKENPoolovF0YGU.notifyRewardAmount.call(uintHpRsIG4, {from: accounts[4]});
		const uint256hocGW0r = await BACMARSLPTOKENPoolovF0YGU.earned.call(addressDWcr93f, {from: accounts[3]});
		const uint256hBekpdq = await BACMARSLPTOKENPoolovF0YGU.earned.call(addressAx6xfi9, {from: accounts[3]});
		const uint256Jpzxyxh = await BACMARSLPTOKENPoolovF0YGU.stake.call(uintlHTXdki, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrCptfBb = "aFW4HxQAzVFOYIFCMEHOzCfMaLQeuWNHE55k6QDrLQMIuVebQzsIMvqQ2qEIVd6ERpah6ErcHQnFZ3l0RUcc5usEUb9zJG"
		const stringSgPJWhO = "CIJCkahaF55U4R5GdoVWJtfpUKLJJpv4iJUUojVVODfwNKBGsfjFVO1oXiWL1ASWSH7HiGL1Nib"
		const uintd6bq9fN = BigInt("211")
		const BACMARSLPTOKENPoolyUsIPLY = await BACMARSLPTOKENPool.new(stringrCptfBb, stringSgPJWhO, uintd6bq9fN, {from: accounts[1]});
		const uintOUtU7BG = BigInt("368")
		const uint256zTAu1Rq = await BACMARSLPTOKENPoolyUsIPLY.getRewardForDuration.call({from: accounts[1]});
		const uint256xsQ3A8b = await BACMARSLPTOKENPoolyUsIPLY.totalSupply.call({from: accounts[0]});
		const uint256kuj9Rxg = await BACMARSLPTOKENPoolyUsIPLY.stake.call(uintOUtU7BG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256MeLOD8 = await BACMARSLPTOKENPoolyUsIPLY.rewardPerToken.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringu5tjmMb = "Yj46qCGUyomJrtzukD2tyBwcyMlSSkkFCbFxdFcZIFs993lnr6dyzdW1t98kIq1Xx"
		const stringhSsMXC3 = "C4frqutFeAyrWi8HyguWo4wI8Z9j72iuVPNWOLZsXG17yQTvixqNPNmLR5Y37N7Psb0iM2My4SX7iEk00NhiUVMqWu8I2"
		const uinti0KprZC = BigInt("192")
		const BACMARSLPTOKENPoolBdWJlxL = await BACMARSLPTOKENPool.new(stringu5tjmMb, stringhSsMXC3, uinti0KprZC, {from: accounts[2]});
		const uintKu8QXGx = BigInt("1395")
		await BACMARSLPTOKENPoolBdWJlxL.exit.call({from: accounts[0]});
		const uint256VC1gLw = await BACMARSLPTOKENPoolBdWJlxL.totalSupply.call({from: accounts[3]});
		const uint256IK1leOz = await BACMARSLPTOKENPoolBdWJlxL.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256mQTivfl = await BACMARSLPTOKENPoolBdWJlxL.notifyRewardAmount.call(uintKu8QXGx, {from: accounts[3]});
		const uint256T0CdWob = await BACMARSLPTOKENPoolBdWJlxL.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXzSXKm9 = "YKKr6QXrVS82KQZmj1GUKuwcqMN3dhoiFCt1DdjRg86L"
		const string1eGsGG = "3T4BFbKt3PMPdGfRNwK8OQ3iVqWDovqdEN5QnrV42tDycDoAy6PWu1tGcqhU5HJEhmPdBoLKCpHN"
		const uintuDoSmHK = BigInt("26")
		const BACMARSLPTOKENPoolAqfSSS5 = await BACMARSLPTOKENPool.new(stringXzSXKm9, string1eGsGG, uintuDoSmHK, {from: accounts[0]});
		const uintQd7S9C6 = BigInt("1455")
		await BACMARSLPTOKENPoolAqfSSS5.nonReentrant.call({from: accounts[4]});
		const uint256OQaIAI0 = await BACMARSLPTOKENPoolAqfSSS5.totalSupply.call({from: accounts[1]});
		const uint256THlAPs4 = await BACMARSLPTOKENPoolAqfSSS5.stake.call(uintQd7S9C6, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringoTlFvTf = "1lXsdiqEiwzpmrDZS498AKE6PqoO1KLCBVHWrA97lUJp9hIAU"
		const stringEp8VC86 = "G4x67KDBJslkIPuwCVZUMdXGaJkdA8YvKr6CcXldbHoWo5braJVI2LA2a"
		const uintw2PVDkt = BigInt("112")
		const BACMARSLPTOKENPoolxwexssd = await BACMARSLPTOKENPool.new(stringoTlFvTf, stringEp8VC86, uintw2PVDkt, {from: accounts[2]});
		await BACMARSLPTOKENPoolxwexssd.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256RJTETnF = await BACMARSLPTOKENPoolxwexssd.totalSupply.call({from: accounts[2]});
		await BACMARSLPTOKENPoolxwexssd.getReward.call({from: accounts[4]});
		const stringRn4QtDm = await BACMARSLPTOKENPoolxwexssd.symbol.call({from: accounts[3]});
		const stringiwGJlaY = await BACMARSLPTOKENPoolxwexssd.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJLCB7Dz = "GCoytcCcndpyQJkkJ7DDytFKWcYm9fJKQsJMqIhq7Su2xyerxJaCWlLIL6WxAmzxET1lYO8G58C39uW6xUAhQU9Tn0Xp0xPOLj"
		const stringiEXWVHB = "qvuCXLwJP0p9BQ6iNlAu6OMtu3t7KpJ"
		const uintzJVjtr = BigInt("212")
		const BACMARSLPTOKENPooleBl9fa8 = await BACMARSLPTOKENPool.new(stringJLCB7Dz, stringiEXWVHB, uintzJVjtr, {from: accounts[2]});
		const addressvgMNb0 = accounts[4]
		await BACMARSLPTOKENPooleBl9fa8.getReward.call({from: accounts[4]});
		const uint256kJ1Iw7C = await BACMARSLPTOKENPooleBl9fa8.earned.call(addressvgMNb0, {from: accounts[1]});
		await BACMARSLPTOKENPooleBl9fa8.getReward.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSRa1LhZ = "cLNhANkPrQAxTA8cDTHbVO1J4E7mbqYgkvgpUoZVgWIZAtBHXBRyZXpUXMCMzfwfvFr4WlrjNaM5khUKFxdUFBE2w0bCegFC"
		const stringUcD3ur = "2FR5rgchOG5Sde9Jv6IdFT05zeM7lSD19GWC3OpUxVfhJIcGeCiYkNAQeM4yIN7zWqYzG3M"
		const uintQFMrV3R = BigInt("45")
		const BACMARSLPTOKENPoolKWkSzdA = await BACMARSLPTOKENPool.new(stringSRa1LhZ, stringUcD3ur, uintQFMrV3R, {from: accounts[1]});
		const addressP3DuC3R = accounts[1]
		const string5ThQEJ = await BACMARSLPTOKENPoolKWkSzdA.symbol.call({from: accounts[1]});
		const uint256UhN0Pjn = await BACMARSLPTOKENPoolKWkSzdA.balanceOf.call(addressP3DuC3R, {from: accounts[2]});
		const uint256GlUUznF = await BACMARSLPTOKENPoolKWkSzdA.lastTimeRewardApplicable.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringw5lEkam = "vFxiVrYFLDNYaQSs4IZf6l3LVdXSgH25AB2anp6GmIiqYC98DBbzI2nSpGcmUIpMKtyiW7voiDyh6MHcCnDdf"
		const stringgrPNZMs = "grqXa1AKkaTb8SKtQkBp7KCHaQu3L9ULwWf"
		const uintsxq6AYp = BigInt("128")
		const BACMARSLPTOKENPoolIMpftT1 = await BACMARSLPTOKENPool.new(stringw5lEkam, stringgrPNZMs, uintsxq6AYp, {from: accounts[2]});
		const byteIm72jMx = "0x1a09161a1909000e01041f1a0c01201c16160a10151b1a0b161305080e0b0402"
		const byteS6USrGE = "0x161d0920031c191e201100180d0f191017081b1d0c1415061a15100e0b06191b"
		const uintwjpATa3 = BigInt("150")
		const uintIXERBfa = BigInt("48")
		const uintvqa5GdT = BigInt("473")
		const addressMhCnx9c = accounts[0]
		const uint256RKAanvd = await BACMARSLPTOKENPoolIMpftT1.stakeWithPermit.call(uintvqa5GdT, uintIXERBfa, uintwjpATa3, byteS6USrGE, byteIm72jMx, {from: accounts[3]});
		await BACMARSLPTOKENPoolIMpftT1.exit.call({from: accounts[3]});
		const uint256gThijy = await BACMARSLPTOKENPoolIMpftT1.balanceOf.call(addressMhCnx9c, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const strings6VfOQZ = "jL2wozkI4c2dCjAGUkOiU759ppIc8yBScr3nLsFzlIkOY"
		const stringVIbQOcW = "5qFsAeKS9gcFl2nt6QyailhoA7bmqkMvmciGO2QPMrneCPGd2SS8m"
		const uintTiGRCHT = BigInt("39")
		const BACMARSLPTOKENPoolWn5tfKx = await BACMARSLPTOKENPool.new(strings6VfOQZ, stringVIbQOcW, uintTiGRCHT, {from: accounts[0]});
		const addressCVBg0lW = accounts[4]
		const uint8COOAhz3 = await BACMARSLPTOKENPoolWn5tfKx.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256E4fFl2t = await BACMARSLPTOKENPoolWn5tfKx.balanceOf.call(addressCVBg0lW, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPCrighT = "s7dKYCMROx4mYH97LK"
		const stringozWOdlu = "JidM0BmOjrK7NLwX7e9ZtAPGyOmNCHGxzivXNFf59bBUg6uj"
		const uintwCI3Zh8 = BigInt("236")
		const BACMARSLPTOKENPoolhRIkixM = await BACMARSLPTOKENPool.new(stringPCrighT, stringozWOdlu, uintwCI3Zh8, {from: accounts[5]});
		const uintuuxDR4d = BigInt("1410")
		const addresstwr0SO6 = accounts[1]
		await BACMARSLPTOKENPoolhRIkixM.nonReentrant.call({from: accounts[4]});
		const stringf67CrJU = await BACMARSLPTOKENPoolhRIkixM.symbol.call({from: accounts[5]});
		const uint256OOC7so4 = await BACMARSLPTOKENPoolhRIkixM.withdraw.call(uintuuxDR4d, {from: accounts[4]});
		await BACMARSLPTOKENPoolhRIkixM.getReward.call({from: accounts[1]});
		const uint256D6RsD14 = await BACMARSLPTOKENPoolhRIkixM.earned.call(addresstwr0SO6, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvjW3STE = "dHvDXWF29VgB0zsrUPFBXkpGrMg7TqOv2kBDSJdIE"
		const stringjNysMcR = "U1IbRe5ctRbGmaVeOerly4cANa2TqOtecboQ2r6751ykjyXxXmgZ3abTEyew99wKKPAHLTg3l4p8Dl"
		const uintcoA7vNu = BigInt("66")
		const BACMARSLPTOKENPoolIxzcbIu = await BACMARSLPTOKENPool.new(stringvjW3STE, stringjNysMcR, uintcoA7vNu, {from: accounts[2]});
		const addressLPqn4r = "0x0000000000000000000000000000000000000001"
		const uint256mjdj8vM = await BACMARSLPTOKENPoolIxzcbIu.earned.call(addressLPqn4r, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolIxzcbIu.nonReentrant.call({from: accounts[2]});
		await BACMARSLPTOKENPoolIxzcbIu.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256Mfl7uCM = await BACMARSLPTOKENPoolIxzcbIu.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint8dcVRZgm = await BACMARSLPTOKENPoolIxzcbIu.decimals.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringgcLHgc7 = "XBc2rb6LW6PfiD"
		const stringOVWY59r = "fGbi8P"
		const uint7SehV2 = BigInt("142")
		const BACMARSLPTOKENPoolNAHCoW0 = await BACMARSLPTOKENPool.new(stringgcLHgc7, stringOVWY59r, uint7SehV2, {from: accounts[4]});
		const bytePsUNxR7 = "0x0a1f061e0d1815050b130814081e031f1d1f13141810190e021e111a0f1b0f04"
		const byteBUeibGx = "0x1d1f19061d0d2012141d200414190a1d0d0b08090f14081a0b17131a01070d02"
		const uintxf5AVDF = BigInt("238")
		const uintaHrC8K = BigInt("912")
		const uintBeiXfir = BigInt("911")
		const uint256qbjij9l = await BACMARSLPTOKENPoolNAHCoW0.rewardPerToken.call({from: accounts[3]});
		const uint256Lj82qnr = await BACMARSLPTOKENPoolNAHCoW0.rewardPerToken.call({from: accounts[1]});
		const uint256id033Vt = await BACMARSLPTOKENPoolNAHCoW0.stakeWithPermit.call(uintBeiXfir, uintaHrC8K, uintxf5AVDF, byteBUeibGx, bytePsUNxR7, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringY4udzxN = "JFzBlpjfIAaEyl4zGpLqiCsJyOkGIxjUFchKfedy3n1cD"
		const stringEEPo6LB = "jEx2L"
		const uintih592Sh = BigInt("38")
		const BACMARSLPTOKENPoolUjbzR7m = await BACMARSLPTOKENPool.new(stringY4udzxN, stringEEPo6LB, uintih592Sh, {from: accounts[5]});
		const addressVExKYi = "0x0000000000000000000000000000000000000001"
		const addressjCoB2Wy = accounts[0]
		const uintCzt0Ime = BigInt("696")
		const addressu6Dmsqn = await BACMARSLPTOKENPoolUjbzR7m.updateReward.call(addressVExKYi, {from: accounts[3]});
		const stringVqRa08j = await BACMARSLPTOKENPoolUjbzR7m.symbol.call({from: accounts[3]});
		const uint256pcxZUO3 = await BACMARSLPTOKENPoolUjbzR7m.earned.call(addressjCoB2Wy, {from: accounts[1]});
		const stringiPA2V8U = await BACMARSLPTOKENPoolUjbzR7m.symbol.call({from: accounts[4]});
		const uint256KNJ7e1N = await BACMARSLPTOKENPoolUjbzR7m.notifyRewardAmount.call(uintCzt0Ime, {from: accounts[4]});
		await BACMARSLPTOKENPoolUjbzR7m.getReward.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringDYu3itQ = "8bqP"
		const stringrIyRIHY = "jT0caB7U6h9rgExoo71c2KgoFCuuhO59zNZhx3vD"
		const uinte0EATOJ = BigInt("67")
		const BACMARSLPTOKENPoolYtPlfSv = await BACMARSLPTOKENPool.new(stringDYu3itQ, stringrIyRIHY, uinte0EATOJ, {from: accounts[1]});
		const bytekuOEmHX = "0x021d04070305020c1a110802110606120413001317110a1702171f051a080e0d"
		const byte2zDLoa = "0x061e1d100b1f13141f171c20181a191c091f1302060c041f0b001312161e020f"
		const uintQvGUQb2 = BigInt("148")
		const uintzmefiy8 = BigInt("1600")
		const uintUMn6E9l = BigInt("1071")
		const addressERRiBk = accounts[3]
		const uint256kQrhkIq = await BACMARSLPTOKENPoolYtPlfSv.getRewardForDuration.call({from: accounts[1]});
		const uint8OVGD00 = await BACMARSLPTOKENPoolYtPlfSv.decimals.call({from: accounts[3]});
		const uint256nLlQbDe = await BACMARSLPTOKENPoolYtPlfSv.stakeWithPermit.call(uintUMn6E9l, uintzmefiy8, uintQvGUQb2, byte2zDLoa, bytekuOEmHX, {from: accounts[4]});
		const uint256e1SfWSS = await BACMARSLPTOKENPoolYtPlfSv.earned.call(addressERRiBk, {from: accounts[2]});
		await BACMARSLPTOKENPoolYtPlfSv.exit.call({from: accounts[2]});
		const uint256rtBZP4n = await BACMARSLPTOKENPoolYtPlfSv.rewardPerToken.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringu74T4nE = "rUUk4hZWOe6KwXd4XyP2EjSyWSbBukRWvvpEoE94rxu38wDN6GjUvHUBHAT0qIjGeBBLrFXapfNSMLAv5foe"
		const stringwKjuIV = ""
		const uintSKGvEBJ = BigInt("182")
		const BACMARSLPTOKENPoolQZntpEv = await BACMARSLPTOKENPool.new(stringu74T4nE, stringwKjuIV, uintSKGvEBJ, {from: accounts[3]});
		const uintL6tbmEg = BigInt("1201")
		const uintRHAqMiu = BigInt("1816")
		const addressxZnnur = accounts[2]
		const uint256kUE6mF0 = await BACMARSLPTOKENPoolQZntpEv.stake.call(uintL6tbmEg, {from: accounts[3]});
		const uint256ZdZfUlf = await BACMARSLPTOKENPoolQZntpEv.notifyRewardAmount.call(uintRHAqMiu, {from: accounts[0]});
		await BACMARSLPTOKENPoolQZntpEv.getReward.call({from: accounts[2]});
		const uint256xxIjSbl = await BACMARSLPTOKENPoolQZntpEv.balanceOf.call(addressxZnnur, {from: accounts[4]});
		const uint256QXLZkmo = await BACMARSLPTOKENPoolQZntpEv.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringeDaEejO = "A3SEPDRJ9zOxT7uQJHmkS3s53oAfcoAKQJR1hJeOFFlOeSgLmlIUXYYBGHPy8z11lTM1VZaR7V6wVkLgMqyqgNV1DsyygwPX2j"
		const stringo6UbB2m = "S5EBq3FbFC6LSgzm9N92FKguAFReHC2DbyMglMlcuwxc"
		const uintnq2YkFj = BigInt("235")
		const BACMARSLPTOKENPooll3yzidT = await BACMARSLPTOKENPool.new(stringeDaEejO, stringo6UbB2m, uintnq2YkFj, {from: accounts[0]});
		const addressDiKwc3d = accounts[3]
		const uintOocxfJD = BigInt("900")
		const uint256v4Ld5Jt = await BACMARSLPTOKENPooll3yzidT.balanceOf.call(addressDiKwc3d, {from: accounts[2]});
		const uint256mcixDa3 = await BACMARSLPTOKENPooll3yzidT.withdraw.call(uintOocxfJD, {from: accounts[3]});
		await BACMARSLPTOKENPooll3yzidT.onlyRewardsDistribution.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZoVJGI2 = "qkwCzFWMisl1cu9iXtzMJUE8CN8nHez8uA"
		const stringsJ0y7zf = "B5UBQRCYv9mXh"
		const uintj60qftl = BigInt("61")
		const BACMARSLPTOKENPoolMBbewI4 = await BACMARSLPTOKENPool.new(stringZoVJGI2, stringsJ0y7zf, uintj60qftl, {from: accounts[2]});
		await BACMARSLPTOKENPoolMBbewI4.nonReentrant.call({from: accounts[0]});
		const uint256zYpLPeP = await BACMARSLPTOKENPoolMBbewI4.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmKCr4w5 = "Yv6BWjgsGdU3cDdo46KE0VNy61XWI57o2hW"
		const stringPOS71lZ = "O5YQW6utCdnwuRjUDqTOVPPcc6BHbzjBFEZUgNqL9d6wOV2sn4le6wTrhi0j5mNAn4yVxJi9FfwU25BNuyYV4cKU"
		const uintfVEDfS8 = BigInt("187")
		const BACMARSLPTOKENPoolFHJJdrQ = await BACMARSLPTOKENPool.new(stringmKCr4w5, stringPOS71lZ, uintfVEDfS8, {from: accounts[0]});
		const uintJ6mWHkW = BigInt("1963")
		await BACMARSLPTOKENPoolFHJJdrQ.exit.call({from: accounts[2]});
		const uint256ZF1b7Ka = await BACMARSLPTOKENPoolFHJJdrQ.withdraw.call(uintJ6mWHkW, {from: accounts[5]});
		const uint256yW6H9dJ = await BACMARSLPTOKENPoolFHJJdrQ.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringljjhXo4 = "RDkzBmuF3hrN8t"
		const stringDlei15 = "L7OO76cLNmg0Ebkwij4wFoc3628z4iOWrWJUgbXhDaSaEPQzAtqUg6lgOnNIVM1"
		const uintdA5Bce = BigInt("76")
		const BACMARSLPTOKENPooldR8qhUK = await BACMARSLPTOKENPool.new(stringljjhXo4, stringDlei15, uintdA5Bce, {from: accounts[4]});
		const byteI0t2FDm = "0x181b0f0c011f1109091114010f081a0113131d081902101e121b120608060814"
		const bytenLxkV2M = "0x130f201f1d04051e1a130d17111911131e0c191708080c02160d09120b102008"
		const uintsSsGDS = BigInt("203")
		const uintehoDUuw = BigInt("1586")
		const uintTZkVsf = BigInt("2038")
		const uint256R2fZSgQ = await BACMARSLPTOKENPooldR8qhUK.getRewardForDuration.call({from: accounts[4]});
		await BACMARSLPTOKENPooldR8qhUK.getReward.call({from: accounts[4]});
		const uint256VfJnHOB = await BACMARSLPTOKENPooldR8qhUK.stakeWithPermit.call(uintTZkVsf, uintehoDUuw, uintsSsGDS, bytenLxkV2M, byteI0t2FDm, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringibRIMuw = "tjV9vXVx6V22zbA5DcVLBFsdR31RjGoXGEUkWic5vRFixLZUg835T2VTUcYt5bMdTHHaYpEFMTXBoPcruJoTPs5bN"
		const stringho9UOQ = "DnsiQrkbTJ1FgxGFw6LNDgBM"
		const uintQrRins5 = BigInt("127")
		const BACMARSLPTOKENPooloct3FJ0 = await BACMARSLPTOKENPool.new(stringibRIMuw, stringho9UOQ, uintQrRins5, {from: accounts[1]});
		const uintwCc8lw3 = BigInt("1179")
		const uint256pUi5Zr = await BACMARSLPTOKENPooloct3FJ0.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPooloct3FJ0.onlyRewardsDistribution.call({from: accounts[5]});
		const uint2568LKpff = await BACMARSLPTOKENPooloct3FJ0.stake.call(uintwCc8lw3, {from: accounts[4]});
		await BACMARSLPTOKENPooloct3FJ0.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlV5bmHE = "gL2JbPoznzUI3CFph9TKqArjvaqCMbcqBDyGHpJnND"
		const stringHo7WHv5 = "F4QYATjh24Pfg1NGTKwvKY8qWEy8ymMr"
		const uintQ5CBp1m = BigInt("3")
		const BACMARSLPTOKENPool1ZJwNB = await BACMARSLPTOKENPool.new(stringlV5bmHE, stringHo7WHv5, uintQ5CBp1m, {from: accounts[3]});
		const uintCmfKepd = BigInt("1672")
		const bytegU7iVk9 = "0x020b0b070d1f08170d041f0f17141a0f1d110f0d1c161d0a0616190b18150118"
		const byteJ6utd7 = "0x020b080c0b0c101e0d0a1a10040c1318150d021317111c16121e0c0604180901"
		const uintywzEaG1 = BigInt("238")
		const uintHB7tS01 = BigInt("1842")
		const uintkr7QLEB = BigInt("1541")
		const addressN0l1QXo = accounts[1]
		const uint256WGRgfFt = await BACMARSLPTOKENPool1ZJwNB.stake.call(uintCmfKepd, {from: accounts[0]});
		await BACMARSLPTOKENPool1ZJwNB.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256qFoag7k = await BACMARSLPTOKENPool1ZJwNB.stakeWithPermit.call(uintkr7QLEB, uintHB7tS01, uintywzEaG1, byteJ6utd7, bytegU7iVk9, {from: accounts[2]});
		const uint256VgSv3RV = await BACMARSLPTOKENPool1ZJwNB.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256HxmQqla = await BACMARSLPTOKENPool1ZJwNB.earned.call(addressN0l1QXo, {from: accounts[1]});
		await BACMARSLPTOKENPool1ZJwNB.onlyRewardsDistribution.call({from: accounts[0]});
	});
})