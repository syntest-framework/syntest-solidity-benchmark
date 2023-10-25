const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokensdHy7Xs = await POWToken.new({from: accounts[0]});
		const uintLD5Kitw = BigInt("323")
		const uintm9BTWsF = BigInt("629")
		const addressgY0qSE = accounts[1]
		const uintQmRMgz = BigInt("1173")
		const uintiTDjUgL = BigInt("1991")
		const addressbBhIKtv = accounts[3]
		const addressAngrDRG = accounts[3]
		const uint256mxaVe8b = await POWTokensdHy7Xs.setStakingRewardRatio.call(uintLD5Kitw, {from: accounts[3]});
		const addresskEpY3qr = await POWTokensdHy7Xs.mint.call(addressgY0qSE, uintm9BTWsF, {from: accounts[1]});
		const uint256JDzBUmk = await POWTokensdHy7Xs.setStartMiningTime.call(uintQmRMgz, {from: "0x0000000000000000000000000000000000000001"});
		const boolTYULfTl = await POWTokensdHy7Xs.transferFrom.call(addressAngrDRG, addressbBhIKtv, uintiTDjUgL, {from: accounts[3]});

		await expect(POWTokensdHy7Xs.setStakingRewardRatio.call(uintLD5Kitw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenK23Fhq = await POWToken.new({from: accounts[5]});
		const uintsTVqsKO = BigInt("195")
		const bytekVvElK = "0x1a0e16030c1f0c1b1508121b0a08021b18190a131a121b10120602000d0f0f02"
		const byteaMS8QxB = "0x0216051b130105190b0b04010d1a1f041f061d0803131d1315150c111f1c1210"
		const uintYaZEwKe = BigInt("71")
		const uintPh74wQ = BigInt("119")
		const uintMJBRRoG = BigInt("565")
		const addressrwt5aFi = accounts[1]
		const address6ISLQO = accounts[2]
		const uint256kL0zsEY = await POWTokenK23Fhq.stakingRewardRate.call({from: accounts[3]});
		const uint256hUZsBjA = await POWTokenK23Fhq.setMinerPoolFeeNumerator.call(uintsTVqsKO, {from: accounts[4]});
		const addressBv14tll = await POWTokenK23Fhq.permit.call(address6ISLQO, addressrwt5aFi, uintMJBRRoG, uintPh74wQ, uintYaZEwKe, byteaMS8QxB, bytekVvElK, {from: accounts[0]});
		const uint256g1yvgcs = await POWTokenK23Fhq.getCurWorkingRate.call({from: accounts[1]});
		await POWTokenK23Fhq.whenPaused.call({from: accounts[1]});

		assert.equal(uint256kL0zsEY, BigInt("0"))
		await expect(POWTokenK23Fhq.setMinerPoolFeeNumerator.call(uintsTVqsKO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenBFao6p = await POWToken.new({from: accounts[5]});
		const uintsl0IFwa = BigInt("807")
		const addressBWmWer = accounts[0]
		const boolRoAJLQs = await POWTokenBFao6p.transfer.call(addressBWmWer, uintsl0IFwa, {from: accounts[2]});
		const uint256EgpGlpt = await POWTokenBFao6p.remainingAmount.call({from: accounts[1]});
		await POWTokenBFao6p.whenPaused.call({from: accounts[2]});
		await POWTokenBFao6p.pause.call({from: accounts[5]});
		const uint256F27vYtZ = await POWTokenBFao6p.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[2]});

		await expect(POWTokenBFao6p.transfer.call(addressBWmWer, uintsl0IFwa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenaNx9vQ9 = await POWToken.new({from: accounts[2]});
		const uintWOy9AMC = BigInt("1918")
		const addressNjFHO9j = accounts[4]
		const addressFOqvy0F = accounts[2]
		const addressqoconOR = await POWTokenaNx9vQ9.mint.call(addressNjFHO9j, uintWOy9AMC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256DgGalJB = await POWTokenaNx9vQ9.stakingRewardRate.call({from: accounts[5]});
		const addressAxn1xiR = await POWTokenaNx9vQ9.setBtcParam.call(addressFOqvy0F, {from: accounts[3]});
		const uint256LRfsU2I = await POWTokenaNx9vQ9.remainingAmount.call({from: accounts[4]});

		await expect(POWTokenaNx9vQ9.mint.call(addressNjFHO9j, uintWOy9AMC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenfEJCnuo = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzmgUaBJ = BigInt("1030")
		const addressvi7KCy = accounts[5]
		const boolv5zAEsg = await POWTokenfEJCnuo.approve.call(addressvi7KCy, uintzmgUaBJ, {from: accounts[0]});
		await POWTokenfEJCnuo.updateIncomeRate.call({from: accounts[3]});
		const uint256fX8byN7 = await POWTokenfEJCnuo.getHistoryWorkingRate.call({from: accounts[4]});
		await POWTokenfEJCnuo.onlyOwner.call({from: accounts[2]});
	});

	it('test for POWToken', async () => {
		const POWTokenK23Fhq = await POWToken.new({from: accounts[5]});
		const uintMdH4at = BigInt("788")
		const addressrejaa5D = accounts[1]
		const addressczVOJg8 = accounts[5]
		const uintKyF68U = BigInt("195")
		const uint256kL0zsEY = await POWTokenK23Fhq.stakingRewardRate.call({from: accounts[3]});
		const boolmuc6qlW = await POWTokenK23Fhq.transferFrom.call(addressczVOJg8, addressrejaa5D, uintMdH4at, {from: accounts[4]});
		const uint256hUZsBjA = await POWTokenK23Fhq.setMinerPoolFeeNumerator.call(uintKyF68U, {from: accounts[4]});
		const uint256g1yvgcs = await POWTokenK23Fhq.getCurWorkingRate.call({from: accounts[1]});
		await POWTokenK23Fhq.whenPaused.call({from: accounts[1]});

		assert.equal(uint256kL0zsEY, BigInt("0"))
		await expect(POWTokenK23Fhq.transferFrom.call(addressczVOJg8, addressrejaa5D, uintMdH4at, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenqU1nn0d = await POWToken.new({from: accounts[0]});
		const uintEqmVcsA = BigInt("1204")
		const uintfL99u6y = BigInt("1777")
		const uintOAxitmT = BigInt("658")
		const uintKxmd9T4 = BigInt("388")
		const uintyieFavJ = BigInt("137")
		const addressLkSd0c8 = accounts[0]
		const addressoPu9BI = accounts[1]
		const addressbenpibr = accounts[3]
		const addressY0Ezkz2 = accounts[0]
		const addressiJmfDu = accounts[5]
		const addresscXKWdnU = accounts[4]
		const addressdTnMKOF = accounts[2]
		const addressVVxKEXY = accounts[0]
		const stringSp87mA = "xIdTKg62X2F6TcOnVifeIt96J3N"
		const stringSzTHt9W = "fvypwsfH"
		const uintCpbZKsB = BigInt("572")
		const addressW5o3CaU = accounts[2]
		const stringtjiJvlc = await POWTokenqU1nn0d.initialize.call(stringSzTHt9W, stringSp87mA, addressVVxKEXY, addressdTnMKOF, addresscXKWdnU, addressiJmfDu, addressY0Ezkz2, addressbenpibr, addressoPu9BI, addressLkSd0c8, uintyieFavJ, uintKxmd9T4, uintOAxitmT, uintfL99u6y, uintEqmVcsA, {from: accounts[1]});
		const addressFIzpY8 = await POWTokenqU1nn0d.inCaseTokensGetStuck.call(addressW5o3CaU, uintCpbZKsB, {from: accounts[4]});

		await expect(POWTokenqU1nn0d.initialize.call(stringSzTHt9W, stringSp87mA, addressVVxKEXY, addressdTnMKOF, addresscXKWdnU, addressiJmfDu, addressY0Ezkz2, addressbenpibr, addressoPu9BI, addressLkSd0c8, uintyieFavJ, uintKxmd9T4, uintOAxitmT, uintfL99u6y, uintEqmVcsA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenK23Fhq = await POWToken.new({from: accounts[5]});
		const uint256kL0zsEY = await POWTokenK23Fhq.stakingRewardRate.call({from: accounts[3]});
		await POWTokenK23Fhq.whenPaused.call({from: accounts[1]});

		assert.equal(uint256kL0zsEY, BigInt("0"))
		await expect(POWTokenK23Fhq.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenK23Fhq = await POWToken.new({from: accounts[5]});
		const uintjk2vHED = BigInt("702")
		const addressWd8Dg1Z = accounts[4]
		const uintTEaP5vY = BigInt("1044")
		const addressw5epNG = accounts[0]
		const uint256kL0zsEY = await POWTokenK23Fhq.stakingRewardRate.call({from: accounts[3]});
		const boolSKxJYZl = await POWTokenK23Fhq.approve.call(addressWd8Dg1Z, uintjk2vHED, {from: accounts[4]});
		await POWTokenK23Fhq.whenPaused.call({from: accounts[1]});
		const addressG37Ob1c = await POWTokenK23Fhq.inCaseTokensGetStuck.call(addressw5epNG, uintTEaP5vY, {from: accounts[0]});

		assert.equal(boolSKxJYZl, true)
		assert.equal(uint256kL0zsEY, BigInt("0"))
		await expect(POWTokenK23Fhq.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenqU1nn0d = await POWToken.new({from: accounts[0]});
		const uintQshCGn7 = BigInt("1559")
		const addresscOLAvg = accounts[4]
		const uintnk3otd = BigInt("1013")
		const addressuhHaZHr = accounts[3]
		const addressirQVdCf = await POWTokenqU1nn0d.claimIncome.call(addresscOLAvg, uintQshCGn7, {from: accounts[2]});
		const addressFIzpY8 = await POWTokenqU1nn0d.inCaseTokensGetStuck.call(addressuhHaZHr, uintnk3otd, {from: accounts[4]});

		await expect(POWTokenqU1nn0d.claimIncome.call(addresscOLAvg, uintQshCGn7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenK23Fhq = await POWToken.new({from: accounts[5]});
		const uint256kL0zsEY = await POWTokenK23Fhq.stakingRewardRate.call({from: accounts[3]});
		const uint256bshfSy = await POWTokenK23Fhq.remainingAmount.call({from: accounts[4]});
		await POWTokenK23Fhq.whenPaused.call({from: accounts[1]});
		const uint256svv35ie = await POWTokenK23Fhq.remainingAmount.call({from: accounts[2]});

		assert.equal(uint256bshfSy, BigInt("0"))
		assert.equal(uint256kL0zsEY, BigInt("0"))
		await expect(POWTokenK23Fhq.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenqU1nn0d = await POWToken.new({from: accounts[0]});
		const uintmcpZ2MX = BigInt("1013")
		const addresspbxvZgJ = accounts[3]
		const boolAhm79K = await POWTokenqU1nn0d.paused.call({from: accounts[4]});
		const addressFIzpY8 = await POWTokenqU1nn0d.inCaseTokensGetStuck.call(addresspbxvZgJ, uintmcpZ2MX, {from: accounts[4]});

		assert.equal(boolAhm79K, false)
		await expect(POWTokenqU1nn0d.inCaseTokensGetStuck.call(addresspbxvZgJ, uintmcpZ2MX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenK23Fhq = await POWToken.new({from: accounts[5]});
		const uint256kL0zsEY = await POWTokenK23Fhq.stakingRewardRate.call({from: accounts[3]});
		const uint256YHWmv4z = await POWTokenK23Fhq.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[4]});
		await POWTokenK23Fhq.whenNotPaused.call({from: accounts[5]});
		await POWTokenK23Fhq.whenPaused.call({from: accounts[1]});

		assert.equal(uint256kL0zsEY, BigInt("0"))
		await expect(POWTokenK23Fhq.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenK23Fhq = await POWToken.new({from: accounts[5]});
		const byteY7ep8bX = "0x0406040f03111e051d0a0d110e1a00011007191b171b050e160108060409020f"
		const byteHDal7fU = "0x02151b0f0b0e1618191c1a15120f0e090e19121f0e1511171b010c1006041318"
		const uintRnsiv9r = BigInt("130")
		const uintNJLeGq = BigInt("47")
		const uintz8n6FWJ = BigInt("736")
		const addressdfiRWEC = accounts[2]
		const addressuf3jDL8 = accounts[3]
		const uintCXgJq6 = BigInt("2041")
		const uint256oImgY8 = await POWTokenK23Fhq.getHistoryWorkingRate.call({from: accounts[4]});
		const uint256kL0zsEY = await POWTokenK23Fhq.stakingRewardRate.call({from: accounts[3]});
		const addresssje2Py = await POWTokenK23Fhq.permit.call(addressuf3jDL8, addressdfiRWEC, uintz8n6FWJ, uintNJLeGq, uintRnsiv9r, byteHDal7fU, byteY7ep8bX, {from: accounts[3]});
		const uint256OWLXcWD = await POWTokenK23Fhq.addHashRate.call(uintCXgJq6, {from: accounts[3]});

		await expect(POWTokenK23Fhq.getHistoryWorkingRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenc0d8j5p = await POWToken.new({from: accounts[4]});
		const uintw6g6xtR = BigInt("1378")
		const uinto3FKbDR = BigInt("333")
		const uintHlJgHa = BigInt("1729")
		const addressu3NFtoB = accounts[5]
		const uint256G1dToR = await POWTokenc0d8j5p.lpStakingRewardRate.call({from: accounts[3]});
		const uint2567WK4hE = await POWTokenc0d8j5p.setStartMiningTime.call(uintw6g6xtR, {from: accounts[0]});
		const uint256IlMAOuH = await POWTokenc0d8j5p.setElectricCharge.call(uinto3FKbDR, {from: accounts[3]});
		const addressS5hqOxV = await POWTokenc0d8j5p.claimReward.call(addressu3NFtoB, uintHlJgHa, {from: accounts[3]});
		const uint256I9tlKa2 = await POWTokenc0d8j5p.getHistoryWorkingRate.call({from: accounts[4]});

		assert.equal(uint256G1dToR, BigInt("0"))
		await expect(POWTokenc0d8j5p.setStartMiningTime.call(uintw6g6xtR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenK23Fhq = await POWToken.new({from: accounts[5]});
		const uint90rUhh = BigInt("970")
		const addresslk2B0hD = "0x0000000000000000000000000000000000000001"
		const uint256kL0zsEY = await POWTokenK23Fhq.stakingRewardRate.call({from: accounts[3]});
		const addressI6vZvlL = await POWTokenK23Fhq.claimReward.call(addresslk2B0hD, uint90rUhh, {from: accounts[1]});
		await POWTokenK23Fhq.updateIncomeRate.call({from: accounts[0]});

		assert.equal(uint256kL0zsEY, BigInt("0"))
		await expect(POWTokenK23Fhq.claimReward.call(addresslk2B0hD, uint90rUhh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenyHE8R0U = await POWToken.new({from: accounts[4]});
		const uintZ7stkXz = BigInt("1256")
		const addressPoWlFqV = accounts[3]
		const uint256CbvrfN6 = await POWTokenyHE8R0U.getIncomeBTCInWeiPerSec.call({from: "0x0000000000000000000000000000000000000001"});
		const addressWPocspa = await POWTokenyHE8R0U.mint.call(addressPoWlFqV, uintZ7stkXz, {from: accounts[0]});

		await expect(POWTokenyHE8R0U.getIncomeBTCInWeiPerSec.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenK23Fhq = await POWToken.new({from: accounts[5]});
		const byter6zz5V = "0x06030107101d111b0b090f140a041519020e060d1e1e151a030b1c1d111c1d1d"
		const bytemwko2yI = "0x0d1312191a17150d0f181e13030b0c01061e0309010e101c1f0c1f181c01131e"
		const uintHQDgsus = BigInt("163")
		const uintxsq74Ta = BigInt("1622")
		const uintVKLAuV6 = BigInt("252")
		const addressAEGnizt = accounts[3]
		const addressGGCTxX6 = accounts[3]
		const addressTszEMeQ = accounts[0]
		const addressYPO3oYR = await POWTokenK23Fhq.permit.call(addressGGCTxX6, addressAEGnizt, uintVKLAuV6, uintxsq74Ta, uintHQDgsus, bytemwko2yI, byter6zz5V, {from: accounts[2]});
		const uint256yj6jpnD = await POWTokenK23Fhq.stakingRewardRate.call({from: accounts[3]});
		const addressFkSZSyM = await POWTokenK23Fhq.transferOwnership.call(addressTszEMeQ, {from: accounts[2]});
		const uint256kL0zsEY = await POWTokenK23Fhq.stakingRewardRate.call({from: accounts[3]});

		await expect(POWTokenK23Fhq.permit.call(addressGGCTxX6, addressAEGnizt, uintVKLAuV6, uintxsq74Ta, uintHQDgsus, bytemwko2yI, byter6zz5V, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenK23Fhq = await POWToken.new({from: accounts[5]});
		const bytetpbOPw4 = "0x1f0a1015080c121a1d010e001511091b1d171f150c0d0212111a19180e0e191a"
		const byteKWRKDmv = "0x0e0e1e1d171c2007111012130614091f071a021905131e18141308151119091e"
		const uintbVCro7E = BigInt("26")
		const uintAK1WVht = BigInt("36")
		const uintv4RWsBA = BigInt("820")
		const addressqJYPLBf = accounts[2]
		const addressg89DCnm = accounts[0]
		await POWTokenK23Fhq.updateIncomeRate.call({from: accounts[4]});
		const uint256kL0zsEY = await POWTokenK23Fhq.stakingRewardRate.call({from: accounts[3]});
		const addressUYs2RFb = await POWTokenK23Fhq.permit.call(addressg89DCnm, addressqJYPLBf, uintv4RWsBA, uintAK1WVht, uintbVCro7E, byteKWRKDmv, bytetpbOPw4, {from: accounts[0]});

		await expect(POWTokenK23Fhq.updateIncomeRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})