const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressyQkWAnr = accounts[2]
		const uinti5YhOG = BigInt("497")
		const DatrixoEquityTokenszGoS9k = await DatrixoEquityToken.new(addressyQkWAnr, uinti5YhOG, {from: accounts[3]});
		const uintJBjy1rz = BigInt("525")
		const addressXa8UKsP = accounts[2]
		const uintgVxedu = BigInt("223")
		const addressefQXQLm = accounts[0]
		const addressbjjzWFx = accounts[4]
		const uintyTMYhQ3 = BigInt("1202")
		const addressKTs2eP = accounts[1]
		const addressXY6Q8ab = accounts[4]
		const uintiwI1zkD = BigInt("1103")
		const addressVlEgLFC = accounts[0]
		const uintXxE24gx = BigInt("2004")
		const addressLBgl3k8 = accounts[1]
//		await DatrixoEquityTokenszGoS9k.afterStartTime.call({from: accounts[0]});
//		const boolcO0cXQV = await DatrixoEquityTokenszGoS9k.transfer.call(addressXa8UKsP, uintJBjy1rz, {from: accounts[2]});
//		const boolc4rZz1F = await DatrixoEquityTokenszGoS9k.transferFrom.call(addressbjjzWFx, addressefQXQLm, uintgVxedu, {from: accounts[5]});
//		const boolBiEc4mg = await DatrixoEquityTokenszGoS9k.transferFrom.call(addressXY6Q8ab, addressKTs2eP, uintyTMYhQ3, {from: accounts[3]});
//		const boolONguzG3 = await DatrixoEquityTokenszGoS9k.transfer.call(addressVlEgLFC, uintiwI1zkD, {from: accounts[4]});
//		const boolGyclb5c = await DatrixoEquityTokenszGoS9k.transfer.call(addressLBgl3k8, uintXxE24gx, {from: accounts[0]});

		await expect(DatrixoEquityTokenszGoS9k.afterStartTime.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressDaiCsXm = accounts[1]
		const uintRVQQqLK = BigInt("605")
		const DatrixoEquityTokenQbAohh = await DatrixoEquityToken.new(addressDaiCsXm, uintRVQQqLK, {from: accounts[2]});
		const addressIN6cWGR = accounts[3]
		const addressUMUL0vq = accounts[5]
//		const boolWgPtgUS = await DatrixoEquityTokenQbAohh.removeShareholder.call(addressIN6cWGR, {from: "0x0000000000000000000000000000000000000001"});
//		const addressarrayn8rnyWu = await DatrixoEquityTokenQbAohh.getShareholdersArray.call({from: accounts[5]});
//		const boolG1Z0Ja5 = await DatrixoEquityTokenQbAohh.removeShareholder.call(addressUMUL0vq, {from: accounts[0]});
//		const addressarraybgGv78c = await DatrixoEquityTokenQbAohh.getShareholdersArray.call({from: accounts[5]});
//		await DatrixoEquityTokenQbAohh.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(DatrixoEquityTokenQbAohh.removeShareholder.call(addressIN6cWGR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressaj4GQOB = accounts[3]
		const uintxUAvuZ9 = BigInt("1765")
		const DatrixoEquityTokenJ5Tsxjj = await DatrixoEquityToken.new(addressaj4GQOB, uintxUAvuZ9, {from: accounts[4]});
		const uinthc44eEK = BigInt("1310")
		const addressQ2Excyd = accounts[3]
		const addressUjcsV1W = accounts[4]
		const addressarrayuOhKKW = await DatrixoEquityTokenJ5Tsxjj.getShareholdersArray.call({from: accounts[4]});
//		const boolxKGskOj = await DatrixoEquityTokenJ5Tsxjj.transfer.call(addressQ2Excyd, uinthc44eEK, {from: accounts[4]});
//		await DatrixoEquityTokenJ5Tsxjj.onlyOwner.call({from: accounts[1]});
//		const boolCrwdLNo = await DatrixoEquityTokenJ5Tsxjj.removeShareholder.call(addressUjcsV1W, {from: accounts[2]});
//		const addressarrayle9XGZO = await DatrixoEquityTokenJ5Tsxjj.getShareholdersArray.call({from: accounts[3]});
//		await DatrixoEquityTokenJ5Tsxjj.onlyOwner.call({from: accounts[0]});

		assert.equal(addressarrayuOhKKW, )
		await expect(DatrixoEquityTokenJ5Tsxjj.transfer.call(addressQ2Excyd, uinthc44eEK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressKhIW6Uq = accounts[0]
		const uinteRD4etI = BigInt("1593")
		const DatrixoEquityTokenXXYIuxZ = await DatrixoEquityToken.new(addressKhIW6Uq, uinteRD4etI, {from: "0x0000000000000000000000000000000000000001"});
		const uintOhuRNBg = BigInt("1527")
		const addresseGOhJWG = accounts[1]
		const uintaBe9fCZ = BigInt("771")
		const addressGVuc0w7 = accounts[2]
		const addressVarzmCq = accounts[3]
		const boolKSmIY1k = await DatrixoEquityTokenXXYIuxZ.transfer.call(addresseGOhJWG, uintOhuRNBg, {from: accounts[4]});
		await DatrixoEquityTokenXXYIuxZ.afterStartTime.call({from: accounts[3]});
		const boolS9vV6tv = await DatrixoEquityTokenXXYIuxZ.transferFrom.call(addressVarzmCq, addressGVuc0w7, uintaBe9fCZ, {from: accounts[3]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressnf3mwEg = accounts[1]
		const uintz27GZUM = BigInt("502")
		const DatrixoEquityTokenWHjumBx = await DatrixoEquityToken.new(addressnf3mwEg, uintz27GZUM, {from: accounts[4]});
		const uintXp6AbOB = BigInt("1734")
//		const uintdC7FZRH = await DatrixoEquityTokenWHjumBx.setStart.call(uintXp6AbOB, {from: accounts[1]});
//		await DatrixoEquityTokenWHjumBx.onlyOwner.call({from: accounts[0]});
//		await DatrixoEquityTokenWHjumBx.afterStartTime.call({from: accounts[4]});
//		await DatrixoEquityTokenWHjumBx.onlyOwner.call({from: accounts[4]});

		await expect(DatrixoEquityTokenWHjumBx.setStart.call(uintXp6AbOB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressdEiddl = "0x0000000000000000000000000000000000000001"
		const uintaOZcdls = BigInt("1244")
		const DatrixoEquityTokenZvF1PLg = await DatrixoEquityToken.new(addressdEiddl, uintaOZcdls, {from: accounts[5]});
		const uintkrTvjV9 = BigInt("1762")
		const addressKQEhE6u = accounts[0]
		const addressEHjyN4h = "0x0000000000000000000000000000000000000001"
		const uintySGgVX = BigInt("1412")
		const addressY5fzVCf = accounts[4]
		const boolZTX5xZN = await DatrixoEquityTokenZvF1PLg.transferFrom.call(addressEHjyN4h, addressKQEhE6u, uintkrTvjV9, {from: "0x0000000000000000000000000000000000000001"});
//		await DatrixoEquityTokenZvF1PLg.afterStartTime.call({from: accounts[2]});
//		const addressarraywlVnFM = await DatrixoEquityTokenZvF1PLg.getShareholdersArray.call({from: accounts[1]});
//		await DatrixoEquityTokenZvF1PLg.onlyOwner.call({from: accounts[2]});
//		const boolONDEWL = await DatrixoEquityTokenZvF1PLg.transfer.call(addressY5fzVCf, uintySGgVX, {from: accounts[3]});

		assert.equal(boolZTX5xZN, true)
		await expect(DatrixoEquityTokenZvF1PLg.afterStartTime.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresslfz7V0q = "0x0000000000000000000000000000000000000001"
		const uint5EAQvp = BigInt("1244")
		const DatrixoEquityTokenZvF1PLg = await DatrixoEquityToken.new(addresslfz7V0q, uint5EAQvp, {from: accounts[5]});
		const uinteubFR1R = BigInt("1762")
		const addresshPOY0g5 = accounts[0]
		const addressOi2pRng = accounts[5]
		const uinteHAfdiq = BigInt("1412")
		const addressXErGGwf = accounts[4]
//		const boolZTX5xZN = await DatrixoEquityTokenZvF1PLg.transferFrom.call(addressOi2pRng, addresshPOY0g5, uinteubFR1R, {from: "0x0000000000000000000000000000000000000001"});
//		await DatrixoEquityTokenZvF1PLg.afterStartTime.call({from: accounts[2]});
//		await DatrixoEquityTokenZvF1PLg.onlyOwner.call({from: accounts[2]});
//		const boolONDEWL = await DatrixoEquityTokenZvF1PLg.transfer.call(addressXErGGwf, uinteHAfdiq, {from: accounts[3]});

		await expect(DatrixoEquityTokenZvF1PLg.transferFrom.call(addressOi2pRng, addresshPOY0g5, uinteubFR1R, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressZyy5VMj = "0x0000000000000000000000000000000000000001"
		const uintiQI9dKL = BigInt("1244")
		const DatrixoEquityTokenZvF1PLg = await DatrixoEquityToken.new(addressZyy5VMj, uintiQI9dKL, {from: accounts[5]});
		const addresssfb6YJ = accounts[2]
		const uintMEeMll7 = BigInt("1739")
		const addresskguZliB = "0x0000000000000000000000000000000000000002"
		const addressCi5b4G = "0x0000000000000000000000000000000000000001"
//		const boolVW8dqCY = await DatrixoEquityTokenZvF1PLg.removeShareholder.call(addresssfb6YJ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolZTX5xZN = await DatrixoEquityTokenZvF1PLg.transferFrom.call(addressCi5b4G, addresskguZliB, uintMEeMll7, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DatrixoEquityTokenZvF1PLg.removeShareholder.call(addresssfb6YJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressYrOoyF0 = "0x0000000000000000000000000000000000000001"
		const uinth3Iqtxx = BigInt("1244")
		const DatrixoEquityTokenZvF1PLg = await DatrixoEquityToken.new(addressYrOoyF0, uinth3Iqtxx, {from: accounts[5]});
		const addressrHAlQue = "0x0000000000000000000000000000000000000000"
//		const boolVW8dqCY = await DatrixoEquityTokenZvF1PLg.removeShareholder.call(addressrHAlQue, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DatrixoEquityTokenZvF1PLg.removeShareholder.call(addressrHAlQue, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressbvVHUwo = "0x0000000000000000000000000000000000000001"
		const uintzX2RCDn = BigInt("1244")
		const DatrixoEquityTokenZvF1PLg = await DatrixoEquityToken.new(addressbvVHUwo, uintzX2RCDn, {from: accounts[5]});
		const uintwuPM4Yk = BigInt("315")
		const addressksoFRPf = accounts[4]
		const uintuJEbkbZ = BigInt("1739")
		const addresssG0PBRC = "0x0000000000000000000000000000000000000001"
		const addresstqb5LEk = "0x0000000000000000000000000000000000000001"
		const addressuZl1IAY = accounts[4]
		const boolPIDVFyg = await DatrixoEquityTokenZvF1PLg.transfer.call(addressksoFRPf, uintwuPM4Yk, {from: "0x0000000000000000000000000000000000000001"});
		const boolZTX5xZN = await DatrixoEquityTokenZvF1PLg.transferFrom.call(addresstqb5LEk, addresssG0PBRC, uintuJEbkbZ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolc1Jfvsn = await DatrixoEquityTokenZvF1PLg.removeShareholder.call(addressuZl1IAY, {from: accounts[3]});

		assert.equal(boolPIDVFyg, true)
		assert.equal(boolZTX5xZN, true)
		await expect(DatrixoEquityTokenZvF1PLg.removeShareholder.call(addressuZl1IAY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressvvvbhX8 = "0x0000000000000000000000000000000000000001"
		const uintq9LeSUy = BigInt("1244")
		const DatrixoEquityTokenZvF1PLg = await DatrixoEquityToken.new(addressvvvbhX8, uintq9LeSUy, {from: accounts[5]});
		const uintDolzu7t = BigInt("1739")
		const addressuJTWDy4 = "0x00000000000000000000000000000000000000-1"
		const addressDa5WSUS = "0x0000000000000000000000000000000000000001"
		const uintkKDikKU = BigInt("1445")
		const addressWdEC0rB = accounts[4]
		const addressEUXqOKl = accounts[2]
		const address22rBWy = accounts[4]
//		const boolZTX5xZN = await DatrixoEquityTokenZvF1PLg.transferFrom.call(addressDa5WSUS, addressuJTWDy4, uintDolzu7t, {from: "0x0000000000000000000000000000000000000001"});
//		const boolIDXe4Fr = await DatrixoEquityTokenZvF1PLg.transferFrom.call(addressEUXqOKl, addressWdEC0rB, uintkKDikKU, {from: accounts[4]});
//		const addressarrayAkg5HP3 = await DatrixoEquityTokenZvF1PLg.getShareholdersArray.call({from: accounts[5]});
//		const boolRNtAPY2 = await DatrixoEquityTokenZvF1PLg.removeShareholder.call(address22rBWy, {from: accounts[1]});

		await expect(DatrixoEquityTokenZvF1PLg.transferFrom.call(addressDa5WSUS, addressuJTWDy4, uintDolzu7t, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressynAjiu5 = "0x0000000000000000000000000000000000000001"
		const uintD3ZxjgY = BigInt("1244")
		const DatrixoEquityTokenZvF1PLg = await DatrixoEquityToken.new(addressynAjiu5, uintD3ZxjgY, {from: accounts[5]});
		const uintx2J61xI = BigInt("1018")
		const addresslW7a1Xb = accounts[3]
		const uintnlU89iR = BigInt("1598")
		const addressshUWO7i = "0x0000000000000000000000000000000000000001"
		const addressAUYfm7Q = "0x0000000000000000000000000000000000000001"
		const boolcjjTahL = await DatrixoEquityTokenZvF1PLg.transfer.call(addresslW7a1Xb, uintx2J61xI, {from: "0x0000000000000000000000000000000000000001"});
//		const boolVK6AdOX = await DatrixoEquityTokenZvF1PLg.transfer.call(addressshUWO7i, uintnlU89iR, {from: "0x0000000000000000000000000000000000000001"});
//		const boolVW8dqCY = await DatrixoEquityTokenZvF1PLg.removeShareholder.call(addressAUYfm7Q, {from: "0x0000000000000000000000000000000000000001"});
//		await DatrixoEquityTokenZvF1PLg.afterStartTime.call({from: accounts[3]});

		assert.equal(boolcjjTahL, true)
		await expect(DatrixoEquityTokenZvF1PLg.transfer.call(addressshUWO7i, uintnlU89iR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})