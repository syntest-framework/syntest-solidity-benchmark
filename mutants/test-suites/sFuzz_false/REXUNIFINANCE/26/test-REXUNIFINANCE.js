const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCExU8yHK0 = await REXUNIFINANCE.new({from: accounts[4]});
		const uintu644Imn = BigInt("179")
		const addressxSuTZ8a = accounts[2]
		const addressOThma7X = accounts[0]
		const uintOJl1zRY = BigInt("1148")
		const addressj56BqzT = accounts[4]
		const addressELfiXH = accounts[0]
//		const boolgEs9UGH = await REXUNIFINANCExU8yHK0.transferFrom.call(addressOThma7X, addressxSuTZ8a, uintu644Imn, {from: accounts[2]});
//		const boolNUNQWwV = await REXUNIFINANCExU8yHK0.transferFrom.call(addressELfiXH, addressj56BqzT, uintOJl1zRY, {from: accounts[4]});

		await expect(REXUNIFINANCExU8yHK0.transferFrom.call(addressOThma7X, addressxSuTZ8a, uintu644Imn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEo2FeqTb = await REXUNIFINANCE.new({from: accounts[1]});
		const addressPQR3t9D = accounts[2]
		const addresseZ16OpW = accounts[3]
		const uintBTqk7SS = BigInt("1475")
		const addressJGwO1Oa = accounts[3]
		const uintiUuAuDd = BigInt("1993")
		const addressPj2kEBx = accounts[3]
		const uintFgL2Db3 = BigInt("830")
		const addressG394Yec = accounts[4]
		const addressgRCXxbp = accounts[4]
		const uint256NMyPqs = await REXUNIFINANCEo2FeqTb.balanceOf.call(addressPQR3t9D, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NEakYV4 = await REXUNIFINANCEo2FeqTb.balanceOf.call(addresseZ16OpW, {from: accounts[0]});
		const boolQu15eU = await REXUNIFINANCEo2FeqTb.approve.call(addressJGwO1Oa, uintBTqk7SS, {from: accounts[5]});
		const boolm1bVjxg = await REXUNIFINANCEo2FeqTb.decreaseApproval.call(addressPj2kEBx, uintiUuAuDd, {from: accounts[0]});
//		const boolPUMKNxi = await REXUNIFINANCEo2FeqTb.transferFrom.call(addressgRCXxbp, addressG394Yec, uintFgL2Db3, {from: accounts[4]});

		assert.equal(boolQu15eU, true)
		assert.equal(boolm1bVjxg, true)
		assert.equal(uint256NEakYV4, BigInt("0"))
		assert.equal(uint256NMyPqs, BigInt("0"))
		await expect(REXUNIFINANCEo2FeqTb.transferFrom.call(addressgRCXxbp, addressG394Yec, uintFgL2Db3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEV8Sf4Ad = await REXUNIFINANCE.new({from: accounts[4]});
		const addressp0QE4mO = accounts[2]
		const uint0CcHan = BigInt("708")
		const addressLuvD9b4 = accounts[1]
		const uintTi8Q66A = BigInt("1214")
		const addressGyiAL57 = accounts[0]
		const addressBCbVcJA = accounts[3]
		const uinthaJSGgu = BigInt("827")
		const addressBwpTXch = accounts[0]
		const uintQUnA59q = BigInt("105")
		const addresshL82ada = accounts[1]
//		const addressgRhcdvC = await REXUNIFINANCEV8Sf4Ad.transferOwnership.call(addressp0QE4mO, {from: accounts[5]});
//		const boole23XhXp = await REXUNIFINANCEV8Sf4Ad.increaseApproval.call(addressLuvD9b4, uint0CcHan, {from: accounts[0]});
//		const boolx0D3q4P = await REXUNIFINANCEV8Sf4Ad.transfer.call(addressGyiAL57, uintTi8Q66A, {from: accounts[4]});
//		const addressqjHf6Z = await REXUNIFINANCEV8Sf4Ad.transferOwnership.call(addressBCbVcJA, {from: accounts[3]});
//		const boolBCvQERo = await REXUNIFINANCEV8Sf4Ad.approve.call(addressBwpTXch, uinthaJSGgu, {from: accounts[1]});
//		const boolUqPEXtQ = await REXUNIFINANCEV8Sf4Ad.approve.call(addresshL82ada, uintQUnA59q, {from: accounts[1]});

		await expect(REXUNIFINANCEV8Sf4Ad.transferOwnership.call(addressp0QE4mO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEpMilW0E = await REXUNIFINANCE.new({from: accounts[4]});
		const uintYmu7FKH = BigInt("199")
		const addressoCzq2Cn = accounts[0]
		const uintfLwZuZp = BigInt("485")
		const addressokM00Yh = accounts[1]
		const uintzrrcRJ8 = BigInt("1775")
		const addressd2k6hTL = accounts[0]
		const uintURFtEq = BigInt("1653")
		const addressf2AeTFP = accounts[0]
		const boolmWE4dp = await REXUNIFINANCEpMilW0E.approve.call(addressoCzq2Cn, uintYmu7FKH, {from: accounts[5]});
		const boolde9ZaQ3 = await REXUNIFINANCEpMilW0E.increaseApproval.call(addressokM00Yh, uintfLwZuZp, {from: accounts[2]});
		const boolewpjLh = await REXUNIFINANCEpMilW0E.increaseApproval.call(addressd2k6hTL, uintzrrcRJ8, {from: accounts[1]});
		const boolqByzifm = await REXUNIFINANCEpMilW0E.increaseApproval.call(addressf2AeTFP, uintURFtEq, {from: accounts[4]});

		assert.equal(boolde9ZaQ3, true)
		assert.equal(boolewpjLh, true)
		assert.equal(boolmWE4dp, true)
		assert.equal(boolqByzifm, true)
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCET24JzSO = await REXUNIFINANCE.new({from: accounts[3]});
		const uintDbnNvqV = BigInt("1085")
		const addressXLWOChS = accounts[3]
		const addresskiI6eT8 = accounts[3]
		const addressS1WhJdq = accounts[3]
		const addressOv2SnY = accounts[0]
//		const boolgJ7AD6 = await REXUNIFINANCET24JzSO.transfer.call(addressXLWOChS, uintDbnNvqV, {from: accounts[2]});
//		const addressHtpDwRU = await REXUNIFINANCET24JzSO.transferOwnership.call(addresskiI6eT8, {from: accounts[4]});
//		const uint256OBN6MJv = await REXUNIFINANCET24JzSO.balanceOf.call(addressS1WhJdq, {from: accounts[1]});
//		const uint256cknv1dP = await REXUNIFINANCET24JzSO.balanceOf.call(addressOv2SnY, {from: accounts[4]});

		await expect(REXUNIFINANCET24JzSO.transfer.call(addressXLWOChS, uintDbnNvqV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEg8hkZmr = await REXUNIFINANCE.new({from: accounts[3]});
		const addressfrGnoAc = accounts[3]
		const addressW0DnS6 = accounts[5]
		const uintPnyc65y = BigInt("685")
		const addressEuWGqU = accounts[3]
		const uintDdBSWXh = BigInt("1222")
		const addressYe3dd68 = accounts[5]
		const uintjeF6L7s = BigInt("36")
		const addressCNbHXpY = accounts[2]
		const uintZmjWPQP = BigInt("701")
		const addressomOuOJx = accounts[3]
		const uintJtRqcMl = BigInt("1768")
		const addressZpGJ5p = accounts[3]
		const uint256XJRmWmi = await REXUNIFINANCEg8hkZmr.allowance.call(addressW0DnS6, addressfrGnoAc, {from: accounts[1]});
		const boolU9Ng5dk = await REXUNIFINANCEg8hkZmr.approve.call(addressEuWGqU, uintPnyc65y, {from: accounts[5]});
//		const boolak1HWtZ = await REXUNIFINANCEg8hkZmr.transfer.call(addressYe3dd68, uintDdBSWXh, {from: accounts[2]});
//		const boolcTjPK5Q = await REXUNIFINANCEg8hkZmr.transfer.call(addressCNbHXpY, uintjeF6L7s, {from: accounts[2]});
//		const boolMR4OnQ = await REXUNIFINANCEg8hkZmr.transfer.call(addressomOuOJx, uintZmjWPQP, {from: accounts[0]});
//		const booljidoug9 = await REXUNIFINANCEg8hkZmr.increaseApproval.call(addressZpGJ5p, uintJtRqcMl, {from: accounts[1]});

		assert.equal(boolU9Ng5dk, true)
		assert.equal(uint256XJRmWmi, BigInt("0"))
		await expect(REXUNIFINANCEg8hkZmr.transfer.call(addressYe3dd68, uintDdBSWXh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEMFOK2cY = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUgDrLvT = BigInt("1607")
		const addressqDdpxbY = accounts[3]
		const uintoDzUgwG = BigInt("1485")
		const addressmG1A5KJ = accounts[1]
		const uintKIR2pG = BigInt("1301")
		const addressX8nidHr = accounts[0]
		const uintMNbtszZ = BigInt("1129")
		const addressFDJXpm9 = "0x0000000000000000000000000000000000000001"
		const addressjktaqXV = accounts[1]
		const addressfGMqrX = accounts[3]
		const addressaCB7v3c = accounts[3]
		const booltcJP6Eg = await REXUNIFINANCEMFOK2cY.transfer.call(addressqDdpxbY, uintUgDrLvT, {from: accounts[3]});
		const booljx9iEb4 = await REXUNIFINANCEMFOK2cY.approve.call(addressmG1A5KJ, uintoDzUgwG, {from: accounts[5]});
		const boolSbo2NnB = await REXUNIFINANCEMFOK2cY.transfer.call(addressX8nidHr, uintKIR2pG, {from: accounts[4]});
		const boolWy4x5NK = await REXUNIFINANCEMFOK2cY.transfer.call(addressFDJXpm9, uintMNbtszZ, {from: accounts[0]});
		const uint256sjoVMZK = await REXUNIFINANCEMFOK2cY.allowance.call(addressfGMqrX, addressjktaqXV, {from: accounts[1]});
		const uint256UvllIP = await REXUNIFINANCEMFOK2cY.balanceOf.call(addressaCB7v3c, {from: accounts[3]});
	});
})