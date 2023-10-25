const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYug9OmiY = await LIBERAPAY.new({from: accounts[3]});
		const addressMmCPz4k = accounts[1]
		const uintVqyRdWf = BigInt("77")
		const addressHuutoUm = accounts[4]
		await LIBERAPAYug9OmiY.onlyNewOwner.call({from: accounts[1]});
		const uint256J3QXyin = await LIBERAPAYug9OmiY.currentBalanceOf.call(addressMmCPz4k, {from: accounts[2]});
		const boolnPmyflE = await LIBERAPAYug9OmiY.decreaseAllowance.call(addressHuutoUm, uintVqyRdWf, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYug9OmiY.onlyNewOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjpQi5eH = await LIBERAPAY.new({from: accounts[0]});
		const addressG9xatVI = accounts[4]
		const uintALw0s66 = BigInt("1898")
		const uintH0R1VwZ = BigInt("1672")
		const addressjsgZYXa = accounts[4]
		const uintxzsOc5 = BigInt("963")
		const addressucZgYXQ = accounts[3]
		const uintn0dN4s4 = BigInt("1226")
		const addressqZMJ2Go = accounts[0]
		const uint256vjrkaxA = await LIBERAPAYjpQi5eH.currentBalanceOf.call(addressG9xatVI, {from: accounts[4]});
		const boolFKtf2gG = await LIBERAPAYjpQi5eH.lock.call(addressjsgZYXa, uintH0R1VwZ, uintALw0s66, {from: accounts[2]});
		const boolBY2dbZ = await LIBERAPAYjpQi5eH.increaseAllowance.call(addressucZgYXQ, uintxzsOc5, {from: accounts[3]});
		const boolc3v8Hd = await LIBERAPAYjpQi5eH.decreaseAllowance.call(addressqZMJ2Go, uintn0dN4s4, {from: accounts[0]});
		const uint256yCL8Rfx = await LIBERAPAYjpQi5eH.totalSupply.call({from: accounts[0]});

		assert.equal(uint256vjrkaxA, BigInt("0"))
		await expect(LIBERAPAYjpQi5eH.lock.call(addressjsgZYXa, uintH0R1VwZ, uintALw0s66, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTDElRsd = await LIBERAPAY.new({from: accounts[4]});
		const uintAR4ERGA = BigInt("1452")
		const addressC0AG7x0 = accounts[2]
		const uintvXmIKBX = BigInt("1316")
		const uint256bqSNmoM = await LIBERAPAYTDElRsd.totalSupply.call({from: accounts[3]});
		const boolM6VX6ML = await LIBERAPAYTDElRsd.acceptOwnership.call({from: accounts[3]});
		const boolULInDPM = await LIBERAPAYTDElRsd.unlock.call(addressC0AG7x0, uintAR4ERGA, {from: accounts[0]});
		const booloPMXe6 = await LIBERAPAYTDElRsd.burn.call(uintvXmIKBX, {from: accounts[0]});

		assert.equal(uint256bqSNmoM, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYTDElRsd.acceptOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYflHRegV = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintllkcX7J = BigInt("771")
		const uintg7HWu81 = BigInt("1965")
		const addresslyDu3lE = accounts[1]
		const booluuFVGE4 = await LIBERAPAYflHRegV.burn.call(uintllkcX7J, {from: accounts[3]});
		const boolgiwvjNX = await LIBERAPAYflHRegV.unlock.call(addresslyDu3lE, uintg7HWu81, {from: accounts[3]});
		await LIBERAPAYflHRegV.pause.call({from: accounts[4]});
		await LIBERAPAYflHRegV.f.call({from: accounts[0]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYBXcyXrp = await LIBERAPAY.new({from: accounts[4]});
		const addressjZ9TIay = accounts[0]
		const uintpdjlzRf = BigInt("1215")
		const addressuGlWRv = accounts[2]
		const uint256ZSWx0Xv = await LIBERAPAYBXcyXrp.getNowTime.call({from: accounts[1]});
		const boollQxUFSV = await LIBERAPAYBXcyXrp.unfreezeAccount.call(addressjZ9TIay, {from: accounts[0]});
		await LIBERAPAYBXcyXrp.showLockState.call(addressuGlWRv, uintpdjlzRf, {from: accounts[4]});

		assert.equal(uint256ZSWx0Xv, BigInt("1630231160"))
		await expect(LIBERAPAYBXcyXrp.unfreezeAccount.call(addressjZ9TIay, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYdFBrzyr = await LIBERAPAY.new({from: accounts[4]});
		const addressGbcUUmW = accounts[2]
		const addressg3tq5gf = "0x0000000000000000000000000000000000000001"
		const uintXnvB08D = BigInt("1178")
		const uintOtcTmPA = BigInt("237")
		const uintFFW7AxJ = BigInt("906")
		const addressmOqlkPG = accounts[3]
		const uint256QRJeqcp = await LIBERAPAYdFBrzyr.allowance.call(addressg3tq5gf, addressGbcUUmW, {from: accounts[2]});
		const boolZ3G3B7 = await LIBERAPAYdFBrzyr.burn.call(uintXnvB08D, {from: accounts[1]});
		const boolMsZ8aRm = await LIBERAPAYdFBrzyr.lock.call(addressmOqlkPG, uintFFW7AxJ, uintOtcTmPA, {from: accounts[0]});

		assert.equal(uint256QRJeqcp, BigInt("0"))
		await expect(LIBERAPAYdFBrzyr.burn.call(uintXnvB08D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYXOO2mnh = await LIBERAPAY.new({from: accounts[0]});
		const uinto4vqCEk = BigInt("1798")
		const addressmBmObK5 = accounts[1]
		const addressdnUXPE = accounts[2]
		const addressopraaOY = accounts[2]
		await LIBERAPAYXOO2mnh.showLockState.call(addressmBmObK5, uinto4vqCEk, {from: accounts[4]});
		await LIBERAPAYXOO2mnh.f.call({from: accounts[4]});
		await LIBERAPAYXOO2mnh.f.call({from: accounts[1]});
		await LIBERAPAYXOO2mnh.onlyNewOwner.call({from: accounts[4]});
		const uint256XxkQ2K = await LIBERAPAYXOO2mnh.allowance.call(addressopraaOY, addressdnUXPE, {from: accounts[0]});

		await expect(LIBERAPAYXOO2mnh.showLockState.call(addressmBmObK5, uinto4vqCEk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjpQi5eH = await LIBERAPAY.new({from: accounts[0]});
		const addressRwgxBk = accounts[5]
		const uintSNw3FuE = BigInt("963")
		const addressF4l2KE = accounts[3]
		const uintVI1aHPC = BigInt("1226")
		const addressYL3RNxT = accounts[0]
		const uint256vjrkaxA = await LIBERAPAYjpQi5eH.currentBalanceOf.call(addressRwgxBk, {from: accounts[4]});
		const boolBY2dbZ = await LIBERAPAYjpQi5eH.increaseAllowance.call(addressF4l2KE, uintSNw3FuE, {from: accounts[3]});
		const boolc3v8Hd = await LIBERAPAYjpQi5eH.decreaseAllowance.call(addressYL3RNxT, uintVI1aHPC, {from: accounts[0]});
		const uint256yCL8Rfx = await LIBERAPAYjpQi5eH.totalSupply.call({from: accounts[0]});

		assert.equal(boolBY2dbZ, true)
		assert.equal(uint256vjrkaxA, BigInt("0"))
		await expect(LIBERAPAYjpQi5eH.decreaseAllowance.call(addressYL3RNxT, uintVI1aHPC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYceb9o3n = await LIBERAPAY.new({from: accounts[3]});
		const uintsJC97j1 = BigInt("1647")
		const addressGc5lzhf = accounts[3]
		const addressZJWIT0z = accounts[0]
		const addressqbecmYH = accounts[4]
		const booliy9ni8A = await LIBERAPAYceb9o3n.transferFrom.call(addressZJWIT0z, addressGc5lzhf, uintsJC97j1, {from: accounts[4]});
		await LIBERAPAYceb9o3n.pause.call({from: accounts[1]});
		const uint256otaI7mD = await LIBERAPAYceb9o3n.totalSupply.call({from: accounts[0]});
		const boolc4SlAXl = await LIBERAPAYceb9o3n.unfreezeAccount.call(addressqbecmYH, {from: accounts[1]});

		await expect(LIBERAPAYceb9o3n.transferFrom.call(addressZJWIT0z, addressGc5lzhf, uintsJC97j1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYXOO2mnh = await LIBERAPAY.new({from: accounts[0]});
		const uintBFNNe7h = BigInt("1208")
		const addressrRo6PW = accounts[1]
		const uintp8U2VeU = BigInt("2041")
		const addresscleKrW4 = accounts[0]
		const addressUqBZRwX = accounts[3]
		const addressvnpIhhp = accounts[2]
		const boole8cJset = await LIBERAPAYXOO2mnh.burnFrom.call(addressrRo6PW, uintBFNNe7h, {from: accounts[4]});
		await LIBERAPAYXOO2mnh.onlyNewOwner.call({from: accounts[4]});
		const boolaBSwSf7 = await LIBERAPAYXOO2mnh.unlock.call(addresscleKrW4, uintp8U2VeU, {from: accounts[2]});
		const uint256XxkQ2K = await LIBERAPAYXOO2mnh.allowance.call(addressvnpIhhp, addressUqBZRwX, {from: accounts[0]});

		await expect(LIBERAPAYXOO2mnh.burnFrom.call(addressrRo6PW, uintBFNNe7h, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYMft6fAf = await LIBERAPAY.new({from: accounts[1]});
		const uintryombY7 = BigInt("1421")
		const addressthxC36h = "0x0000000000000000000000000000000000000001"
		const addressFmNyIdU = accounts[3]
		const addressK4V7DdL = accounts[5]
		await LIBERAPAYMft6fAf.showLockState.call(addressthxC36h, uintryombY7, {from: accounts[1]});
		const uint256oaN9275 = await LIBERAPAYMft6fAf.currentBalanceOf.call(addressFmNyIdU, {from: accounts[0]});
		const addressym45GQP = await LIBERAPAYMft6fAf.transferOwnership.call(addressK4V7DdL, {from: accounts[1]});
		await LIBERAPAYMft6fAf.whenNotPaused.call({from: accounts[3]});
		await LIBERAPAYMft6fAf.f.call({from: accounts[2]});

		await expect(LIBERAPAYMft6fAf.showLockState.call(addressthxC36h, uintryombY7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYMft6fAf = await LIBERAPAY.new({from: accounts[1]});
		const uintEyDHW3 = BigInt("1421")
		const addressyjLy9iz = "0x0000000000000000000000000000000000000001"
		const uintYrSG79 = BigInt("1889")
		const addressU8ZrTL7 = accounts[1]
		await LIBERAPAYMft6fAf.showLockState.call(addressyjLy9iz, uintEyDHW3, {from: accounts[1]});
		const boolEdXXG7K = await LIBERAPAYMft6fAf.transfer.call(addressU8ZrTL7, uintYrSG79, {from: accounts[1]});
		await LIBERAPAYMft6fAf.f.call({from: accounts[2]});

		await expect(LIBERAPAYMft6fAf.showLockState.call(addressyjLy9iz, uintEyDHW3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYMft6fAf = await LIBERAPAY.new({from: accounts[1]});
		const uintlbzrPGe = BigInt("1421")
		const addressYkSV2iM = "0x0000000000000000000000000000000000000001"
		const uintjZJWiNg = BigInt("1954")
		const addressxnRWgc = accounts[3]
		await LIBERAPAYMft6fAf.showLockState.call(addressYkSV2iM, uintlbzrPGe, {from: accounts[1]});
		const booltdB220f = await LIBERAPAYMft6fAf.approve.call(addressxnRWgc, uintjZJWiNg, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYMft6fAf.showLockState.call(addressYkSV2iM, uintlbzrPGe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYXOO2mnh = await LIBERAPAY.new({from: accounts[0]});
		const addressyeyEHwh = "0x0000000000000000000000000000000000000001"
		const addressmX3WrZq = accounts[4]
		const addressZJtVYFL = accounts[2]
		const boolb1ERKvj = await LIBERAPAYXOO2mnh.freezeAccount.call(addressyeyEHwh, {from: accounts[0]});
		const uint256XxkQ2K = await LIBERAPAYXOO2mnh.allowance.call(addressZJtVYFL, addressmX3WrZq, {from: accounts[0]});

		assert.equal(boolb1ERKvj, true)
		assert.equal(uint256XxkQ2K, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYceb9o3n = await LIBERAPAY.new({from: accounts[3]});
		const uintkHEtESI = BigInt("1230")
		const address7WDoDQ = accounts[0]
		const uintHtQ9vnz = BigInt("1647")
		const addressdWB783y = accounts[5]
		const addresszdcKEnl = accounts[0]
		const uintUVGtc55 = BigInt("734")
		const addressR5242dH = accounts[2]
		const boolqS30Hz5 = await LIBERAPAYceb9o3n.burn.call(uintkHEtESI, {from: accounts[3]});
		const addressZ1Z1W8E = await LIBERAPAYceb9o3n.transferOwnership.call(address7WDoDQ, {from: accounts[3]});
		const booliy9ni8A = await LIBERAPAYceb9o3n.transferFrom.call(addresszdcKEnl, addressdWB783y, uintHtQ9vnz, {from: accounts[4]});
		const boolY9vFgP = await LIBERAPAYceb9o3n.approve.call(addressR5242dH, uintUVGtc55, {from: accounts[4]});

		assert.equal(boolqS30Hz5, true)
		await expect(LIBERAPAYceb9o3n.transferFrom.call(addresszdcKEnl, addressdWB783y, uintHtQ9vnz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYXOO2mnh = await LIBERAPAY.new({from: accounts[0]});
		const addressBWhxBDV = accounts[3]
		const addressYJrroNr = accounts[4]
		const addressshVZC9x = accounts[2]
		const uint256uJLmyfA = await LIBERAPAYXOO2mnh.balanceOf.call(addressBWhxBDV, {from: accounts[3]});
		const uint256XxkQ2K = await LIBERAPAYXOO2mnh.allowance.call(addressshVZC9x, addressYJrroNr, {from: accounts[0]});

		assert.equal(uint256XxkQ2K, BigInt("0"))
		assert.equal(uint256uJLmyfA, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYXOO2mnh = await LIBERAPAY.new({from: accounts[0]});
		const addressCuKLOUS = accounts[4]
		const addressNDY575A = accounts[4]
		const addressptagWM1 = accounts[2]
		const uintLxqYsEE = BigInt("1483")
		const addressNveILMJ = accounts[0]
		const addressfmu4LYV = accounts[4]
		const uint256uJLmyfA = await LIBERAPAYXOO2mnh.balanceOf.call(addressCuKLOUS, {from: accounts[3]});
		const uint256XxkQ2K = await LIBERAPAYXOO2mnh.allowance.call(addressptagWM1, addressNDY575A, {from: accounts[0]});
		await LIBERAPAYXOO2mnh.pause.call({from: accounts[0]});
		const boolr8Bh00I = await LIBERAPAYXOO2mnh.burn.call(uintLxqYsEE, {from: accounts[2]});
		const addressmR1jGLr = await LIBERAPAYXOO2mnh.notFrozen.call(addressNveILMJ, {from: accounts[1]});
		const addressvqKt94o = await LIBERAPAYXOO2mnh.upgradeTo.call(addressfmu4LYV, {from: accounts[1]});

		assert.equal(uint256XxkQ2K, BigInt("0"))
		assert.equal(uint256uJLmyfA, BigInt("0"))
		await expect(LIBERAPAYXOO2mnh.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYXOO2mnh = await LIBERAPAY.new({from: accounts[0]});
		const addressJOFvcnk = accounts[3]
		const address88rV6E = accounts[3]
		const uintF0gp511 = BigInt("33")
		const addressMayIOl = accounts[0]
		const uint256XxkQ2K = await LIBERAPAYXOO2mnh.allowance.call(address88rV6E, addressJOFvcnk, {from: accounts[0]});
		const boolB8Ww4jw = await LIBERAPAYXOO2mnh.unlock.call(addressMayIOl, uintF0gp511, {from: accounts[0]});
		const uint256VondJT7 = await LIBERAPAYXOO2mnh.getNowTime.call({from: accounts[0]});

		assert.equal(uint256XxkQ2K, BigInt("0"))
		await expect(LIBERAPAYXOO2mnh.unlock.call(addressMayIOl, uintF0gp511, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYXOO2mnh = await LIBERAPAY.new({from: accounts[0]});
		const addressfbDZzGK = accounts[3]
		const addressIGjrXv = accounts[3]
		const uinthydZnFp = BigInt("382")
		const uintE9iWeJC = BigInt("15")
		const addressCRVrT1s = accounts[4]
		const uint256XxkQ2K = await LIBERAPAYXOO2mnh.allowance.call(addressIGjrXv, addressfbDZzGK, {from: accounts[0]});
		const boolOTqNCC = await LIBERAPAYXOO2mnh.lock.call(addressCRVrT1s, uintE9iWeJC, uinthydZnFp, {from: accounts[0]});

		assert.equal(uint256XxkQ2K, BigInt("0"))
		await expect(LIBERAPAYXOO2mnh.lock.call(addressCRVrT1s, uintE9iWeJC, uinthydZnFp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYXOO2mnh = await LIBERAPAY.new({from: accounts[0]});
		const uintdAs7s0n = BigInt("1024")
		const addressW6fkwzH = accounts[5]
		const addressl2KJZxJ = accounts[5]
		const uintNebxfQ0 = BigInt("453")
		const addressNssrd1J = "0x0000000000000000000000000000000000000001"
		const addressCtbdJk9 = accounts[2]
		const boolQz52PZN = await LIBERAPAYXOO2mnh.distribute.call(addressW6fkwzH, uintdAs7s0n, {from: accounts[0]});
		const addressDJdLH9v = await LIBERAPAYXOO2mnh.transferOwnership.call(addressl2KJZxJ, {from: accounts[4]});
		await LIBERAPAYXOO2mnh.whenNotPaused.call({from: accounts[3]});
		const boolrhFbAxE = await LIBERAPAYXOO2mnh.transferFrom.call(addressCtbdJk9, addressNssrd1J, uintNebxfQ0, {from: accounts[1]});

		assert.equal(boolQz52PZN, true)
		await expect(LIBERAPAYXOO2mnh.transferOwnership.call(addressl2KJZxJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYw4aCec8 = await LIBERAPAY.new({from: accounts[0]});
		const uintCzA5Ve = BigInt("141")
		const addressGCo1gnA = accounts[5]
		const addressgfT2vNN = accounts[0]
		const uintrUOsZvC = BigInt("1660")
		const addressGqJQ9SK = accounts[4]
		const uintEIf1Kwj = BigInt("842")
		const uintoi194LH = BigInt("276")
		const addresstcWBZe1 = accounts[1]
		const uintoI1KaRH = BigInt("362")
		const addressXWHPRSb = accounts[4]
		const bool7jEw3A = await LIBERAPAYw4aCec8.transferFrom.call(addressgfT2vNN, addressGCo1gnA, uintCzA5Ve, {from: "0x0000000000000000000000000000000000000001"});
		await LIBERAPAYw4aCec8.whenPaused.call({from: accounts[3]});
		await LIBERAPAYw4aCec8.f.call({from: accounts[1]});
		const boolpoNTAPb = await LIBERAPAYw4aCec8.unlock.call(addressGqJQ9SK, uintrUOsZvC, {from: accounts[4]});
		const boolCOmIZ5 = await LIBERAPAYw4aCec8.lock.call(addresstcWBZe1, uintoi194LH, uintEIf1Kwj, {from: accounts[2]});
		const boolEUpiyb4 = await LIBERAPAYw4aCec8.distribute.call(addressXWHPRSb, uintoI1KaRH, {from: accounts[2]});

		await expect(LIBERAPAYw4aCec8.transferFrom.call(addressgfT2vNN, addressGCo1gnA, uintCzA5Ve, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYiyYOClP = await LIBERAPAY.new({from: accounts[0]});
		const addressjnALxp = accounts[1]
		const address48ES39 = accounts[1]
		const uintOHD5wqx = BigInt("1924")
		const address7kfWCh = "0x0000000000000000000000000000000000000001"
		const addressR4Zpjwa = accounts[3]
		const uint256sFcedlD = await LIBERAPAYiyYOClP.getNowTime.call({from: accounts[0]});
		const addressg194pTv = await LIBERAPAYiyYOClP.upgradeTo.call(addressjnALxp, {from: accounts[0]});
		const uint256KJq40Y = await LIBERAPAYiyYOClP.balanceOf.call(address48ES39, {from: accounts[2]});
		await LIBERAPAYiyYOClP.showLockState.call(address7kfWCh, uintOHD5wqx, {from: accounts[3]});
		const boolMjVZ4er = await LIBERAPAYiyYOClP.unfreezeAccount.call(addressR4Zpjwa, {from: accounts[4]});

		assert.equal(uint256KJq40Y, BigInt("0"))
		assert.equal(uint256sFcedlD, BigInt("1630231174"))
		await expect(LIBERAPAYiyYOClP.showLockState.call(address7kfWCh, uintOHD5wqx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYXOO2mnh = await LIBERAPAY.new({from: accounts[0]});
		const uintqD5qsuS = BigInt("1349")
		const addresskQt3ovM = "0x0000000000000000000000000000000000000001"
		const addressIkbFOPO = accounts[4]
		const addresskRuNqwM = accounts[2]
		const booltJIr5gi = await LIBERAPAYXOO2mnh.mint.call(addresskQt3ovM, uintqD5qsuS, {from: accounts[0]});
		const uint256XxkQ2K = await LIBERAPAYXOO2mnh.allowance.call(addresskRuNqwM, addressIkbFOPO, {from: accounts[0]});

		await expect(LIBERAPAYXOO2mnh.mint.call(addresskQt3ovM, uintqD5qsuS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYMft6fAf = await LIBERAPAY.new({from: accounts[1]});
		const addressbnxpwrr = "0x0000000000000000000000000000000000000001"
		const uintoZWyJpe = BigInt("779")
		const addressyntvGOc = accounts[1]
		const addressngbJpoN = accounts[5]
		const addressT1ZMPqY = accounts[1]
		const booljcPsjfS = await LIBERAPAYMft6fAf.unfreezeAccount.call(addressbnxpwrr, {from: accounts[1]});
		const boolU0hyiPN = await LIBERAPAYMft6fAf.transfer.call(addressyntvGOc, uintoZWyJpe, {from: accounts[2]});
		const uint256PQziiCl = await LIBERAPAYMft6fAf.allowance.call(addressT1ZMPqY, addressngbJpoN, {from: accounts[4]});

		await expect(LIBERAPAYMft6fAf.unfreezeAccount.call(addressbnxpwrr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})