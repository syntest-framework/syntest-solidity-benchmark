const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolhDjkWqY = await ETFXPool.new({from: accounts[5]});
		const uintGwMYxHN = BigInt("1934")
		const uintDpkWZ2q = BigInt("1611")
		const addressVvrcRuj = accounts[5]
		const uint256phlMpKu = await ETFXPoolhDjkWqY.stake.call(uintGwMYxHN, {from: accounts[1]});
		await ETFXPoolhDjkWqY.nonReentrant.call({from: accounts[3]});
		const boolpYCGS2 = await ETFXPoolhDjkWqY.increaseAllowance.call(addressVvrcRuj, uintDpkWZ2q, {from: accounts[0]});
		const uint256lXOp1a = await ETFXPoolhDjkWqY.rewardPerToken.call({from: accounts[2]});

		await expect(ETFXPoolhDjkWqY.stake.call(uintGwMYxHN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringgwPRXId = "FYK"
		const string2yVqIE = "JjawHn1LmNPKCfWeBkeWDIWyamUu"
		const uintUxZel2 = BigInt("164")
		const ETFXPoolcIfX8G4 = await ETFXPool.new(stringgwPRXId, string2yVqIE, uintUxZel2, {from: accounts[2]});
		const uintlYTZVB6 = BigInt("141")
		const addressB2Jba9k = accounts[3]
		const uintbpZegCA = BigInt("545")
		const addressMjh0NFf = accounts[4]
		const stringIkKFp7 = await ETFXPoolcIfX8G4.symbol.call({from: accounts[0]});
		const boolSSy4EUH = await ETFXPoolcIfX8G4.approve.call(addressB2Jba9k, uintlYTZVB6, {from: accounts[1]});
		await ETFXPoolcIfX8G4.exit.call({from: accounts[1]});
		const boolrP0nVCf = await ETFXPoolcIfX8G4.transfer.call(addressMjh0NFf, uintbpZegCA, {from: accounts[1]});
		await ETFXPoolcIfX8G4.getReward.call({from: accounts[2]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolMg8Wizj = await ETFXPool.new({from: accounts[2]});
		const addressVpnLU7T = accounts[2]
		const addressyRHrNf = accounts[2]
		const uintHlnPifM = BigInt("1054")
		const addressYplTEpy = accounts[0]
		const addressha6eAWg = await ETFXPoolMg8Wizj.transferOwnership.call(addressVpnLU7T, {from: "0x0000000000000000000000000000000000000001"});
		const addressmeL5NJM = await ETFXPoolMg8Wizj.transferOwnership.call(addressyRHrNf, {from: accounts[2]});
		const boolLcBGkoh = await ETFXPoolMg8Wizj.transfer.call(addressYplTEpy, uintHlnPifM, {from: accounts[4]});

		await expect(ETFXPoolMg8Wizj.transferOwnership.call(addressVpnLU7T, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolyC03Wa6 = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintm0tcco = BigInt("450")
		const addressj4XDavy = accounts[1]
		const addressFKmIKFI = await ETFXPoolyC03Wa6.owner.call({from: accounts[2]});
		const uint256CfMywM = await ETFXPoolyC03Wa6.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolevVHtvx = await ETFXPoolyC03Wa6.increaseAllowance.call(addressj4XDavy, uintm0tcco, {from: accounts[3]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolU7vHJf = await ETFXPool.new({from: accounts[4]});
		const uintU1Apebq = BigInt("1599")
		const addresssh3CwuV = accounts[4]
		const uintLsAXD0L = BigInt("1812")
		const uintPCDPMk7 = BigInt("1083")
		const stringZgKCML8 = await ETFXPoolU7vHJf.symbol.call({from: accounts[3]});
		const boolaiTLK6e = await ETFXPoolU7vHJf.approve.call(addresssh3CwuV, uintU1Apebq, {from: accounts[2]});
		await ETFXPoolU7vHJf.nonReentrant.call({from: accounts[1]});
		const uint256V2DixZy = await ETFXPoolU7vHJf.withdraw.call(uintLsAXD0L, {from: "0x0000000000000000000000000000000000000001"});
		const stringZrLcU2T = await ETFXPoolU7vHJf.symbol.call({from: accounts[5]});
		const uint256ERTP84l = await ETFXPoolU7vHJf.withdraw.call(uintPCDPMk7, {from: accounts[2]});

		assert.equal(boolaiTLK6e, true)
		assert.equal(stringZgKCML8, "FETFX")
		await expect(ETFXPoolU7vHJf.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolqy2uhn3 = await ETFXPool.new({from: accounts[0]});
		const uint420iWp = BigInt("1900")
		const addressHKEEWdC = accounts[2]
		const uintw3mY2vu = BigInt("46")
		const addressSmJDHp = accounts[1]
		const boolwYUhn0R = await ETFXPoolqy2uhn3.increaseAllowance.call(addressHKEEWdC, uint420iWp, {from: accounts[3]});
		const boolUlyixKJ = await ETFXPoolqy2uhn3.transfer.call(addressSmJDHp, uintw3mY2vu, {from: accounts[2]});

		assert.equal(boolwYUhn0R, true)
		await expect(ETFXPoolqy2uhn3.transfer.call(addressSmJDHp, uintw3mY2vu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoollkoGGR = await ETFXPool.new({from: accounts[4]});
		const uintCFvYnVD = BigInt("139")
		const addressGkH7jB = accounts[1]
		const addressjw38lmX = accounts[4]
		const boolVebe0IJ = await ETFXPoollkoGGR.transferFrom.call(addressjw38lmX, addressGkH7jB, uintCFvYnVD, {from: accounts[0]});
		await ETFXPoollkoGGR.nonReentrant.call({from: accounts[5]});

		await expect(ETFXPoollkoGGR.transferFrom.call(addressjw38lmX, addressGkH7jB, uintCFvYnVD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolhDjkWqY = await ETFXPool.new({from: accounts[5]});
		const uint3IrB40 = BigInt("1935")
		const uintIJ3c0X8 = BigInt("1934")
		const uintFHHbkq4 = BigInt("1611")
		const addressO4Mr5X3 = accounts[5]
		const uint256uk30IGh = await ETFXPoolhDjkWqY.withdraw.call(uint3IrB40, {from: accounts[2]});
		const uint256phlMpKu = await ETFXPoolhDjkWqY.stake.call(uintIJ3c0X8, {from: accounts[1]});
		await ETFXPoolhDjkWqY.nonReentrant.call({from: accounts[3]});
		const boolpYCGS2 = await ETFXPoolhDjkWqY.increaseAllowance.call(addressO4Mr5X3, uintFHHbkq4, {from: accounts[0]});
		const uint256lXOp1a = await ETFXPoolhDjkWqY.rewardPerToken.call({from: accounts[2]});

		await expect(ETFXPoolhDjkWqY.withdraw.call(uint3IrB40, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolqy2uhn3 = await ETFXPool.new({from: accounts[0]});
		const uintqrSZl65 = BigInt("1900")
		const addressarCIerI = accounts[2]
		const uintlUY8GDO = BigInt("46")
		const addressWZg5OYy = accounts[1]
		const boolwYUhn0R = await ETFXPoolqy2uhn3.increaseAllowance.call(addressarCIerI, uintqrSZl65, {from: accounts[3]});
		const stringiQ582LK = await ETFXPoolqy2uhn3.symbol.call({from: accounts[4]});
		const uint8yUwor1J = await ETFXPoolqy2uhn3.decimals.call({from: accounts[3]});
		const boolUlyixKJ = await ETFXPoolqy2uhn3.transfer.call(addressWZg5OYy, uintlUY8GDO, {from: accounts[2]});

		assert.equal(boolwYUhn0R, true)
		assert.equal(stringiQ582LK, "FETFX")
		assert.equal(uint8yUwor1J, BigInt("8"))
		await expect(ETFXPoolqy2uhn3.transfer.call(addressWZg5OYy, uintlUY8GDO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolhDjkWqY = await ETFXPool.new({from: accounts[5]});
		const addressnuv3Ewf = accounts[4]
		const addressQh6v8Ll = accounts[4]
		const uintziZKhg5 = BigInt("1935")
		const uintrApbCv = BigInt("1934")
		const uintOU15QVM = BigInt("1650")
		const addresszp3MvHp = accounts[5]
		const uint256zI0YLqU = await ETFXPoolhDjkWqY.allowance.call(addressQh6v8Ll, addressnuv3Ewf, {from: accounts[5]});
		const uint256uk30IGh = await ETFXPoolhDjkWqY.withdraw.call(uintziZKhg5, {from: accounts[2]});
		const uint256phlMpKu = await ETFXPoolhDjkWqY.stake.call(uintrApbCv, {from: accounts[1]});
		const boolpYCGS2 = await ETFXPoolhDjkWqY.increaseAllowance.call(addresszp3MvHp, uintOU15QVM, {from: accounts[0]});
		const uint256BvtEEVl = await ETFXPoolhDjkWqY.totalSupply.call({from: accounts[3]});
		const uint256lXOp1a = await ETFXPoolhDjkWqY.rewardPerToken.call({from: accounts[2]});

		assert.equal(uint256zI0YLqU, BigInt("0"))
		await expect(ETFXPoolhDjkWqY.withdraw.call(uintziZKhg5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolonlp4Fm = await ETFXPool.new({from: accounts[2]});
		const uint8MbG0S9H = await ETFXPoolonlp4Fm.decimals.call({from: accounts[4]});
		const stringiMHnX1w = await ETFXPoolonlp4Fm.symbol.call({from: accounts[0]});
		const uint256Mxi1Jcd = await ETFXPoolonlp4Fm.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const stringqrdoigf = await ETFXPoolonlp4Fm.name.call({from: accounts[4]});

		assert.equal(stringiMHnX1w, "FETFX")
		assert.equal(stringqrdoigf, "ETFX-FARM")
		assert.equal(uint256Mxi1Jcd, BigInt("0"))
		assert.equal(uint8MbG0S9H, BigInt("8"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolTuRVrHd = await ETFXPool.new({from: accounts[2]});
		const uint8av0GLpA = await ETFXPoolTuRVrHd.decimals.call({from: accounts[1]});
		const addressTRSSolI = await ETFXPoolTuRVrHd.owner.call({from: accounts[0]});
		await ETFXPoolTuRVrHd.getReward.call({from: accounts[3]});

		assert.equal(addressTRSSolI, 0x455F47A2036B3E6e0F1C281e5FF86c804391625F)
		assert.equal(uint8av0GLpA, BigInt("8"))
		await expect(ETFXPoolTuRVrHd.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolqy2uhn3 = await ETFXPool.new({from: accounts[0]});
		const uintwHz0zML = BigInt("1938")
		const addressJvcBWs0 = accounts[2]
		const uint256S6CR0L = await ETFXPoolqy2uhn3.rewardPerToken.call({from: accounts[2]});
		const boolwYUhn0R = await ETFXPoolqy2uhn3.increaseAllowance.call(addressJvcBWs0, uintwHz0zML, {from: accounts[3]});

		assert.equal(boolwYUhn0R, true)
		assert.equal(uint256S6CR0L, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolpBrxYKW = await ETFXPool.new({from: accounts[1]});
		const uintdEJIpgc = BigInt("1787")
		const addresswxeDPfe = accounts[4]
		const boolGACwQVI = await ETFXPoolpBrxYKW.decreaseAllowance.call(addresswxeDPfe, uintdEJIpgc, {from: accounts[1]});
		await ETFXPoolpBrxYKW.getReward.call({from: accounts[3]});

		await expect(ETFXPoolpBrxYKW.decreaseAllowance.call(addresswxeDPfe, uintdEJIpgc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolqy2uhn3 = await ETFXPool.new({from: accounts[0]});
		const addressfKwjne = accounts[0]
		const uintInv0xWa = BigInt("1945")
		const addressENSzIZ = accounts[2]
		const uint256c9RZNO5 = await ETFXPoolqy2uhn3.balanceOf.call(addressfKwjne, {from: accounts[0]});
		const boolwYUhn0R = await ETFXPoolqy2uhn3.increaseAllowance.call(addressENSzIZ, uintInv0xWa, {from: accounts[3]});

		assert.equal(boolwYUhn0R, true)
		assert.equal(uint256c9RZNO5, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolTuRVrHd = await ETFXPool.new({from: accounts[2]});
		const addressEuG5hQ = accounts[4]
		const addressRzuQKpM = await ETFXPoolTuRVrHd.transferOwnership.call(addressEuG5hQ, {from: accounts[2]});
		const addressTRSSolI = await ETFXPoolTuRVrHd.owner.call({from: accounts[0]});
		await ETFXPoolTuRVrHd.getReward.call({from: accounts[3]});

		assert.equal(addressTRSSolI, 0x455F47A2036B3E6e0F1C281e5FF86c804391625F)
		await expect(ETFXPoolTuRVrHd.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolqy2uhn3 = await ETFXPool.new({from: accounts[0]});
		const uintWizqZ9T = BigInt("286")
		const address57acgs = accounts[2]
		const uint256S6CR0L = await ETFXPoolqy2uhn3.rewardPerToken.call({from: accounts[2]});
		await ETFXPoolqy2uhn3.exit.call({from: accounts[3]});
		const boolwYUhn0R = await ETFXPoolqy2uhn3.increaseAllowance.call(address57acgs, uintWizqZ9T, {from: accounts[3]});

		assert.equal(uint256S6CR0L, BigInt("0"))
		await expect(ETFXPoolqy2uhn3.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})