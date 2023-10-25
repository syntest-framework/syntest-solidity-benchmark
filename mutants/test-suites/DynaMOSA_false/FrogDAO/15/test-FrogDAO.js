const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOmPzfTPG = await FrogDAO.new({from: accounts[3]});
		const uintngo6s0B = BigInt("1204")
		const uintIBhJ1IV = BigInt("804")
		const uintrwpbKqi = BigInt("722")
		const uintmnWG9Gk = BigInt("575")
		const uintvBVniZo = BigInt("577")
		const uintGylfofm = BigInt("371")
		const uintxHouI0I = BigInt("1401")
		const uintD5V5vIX = BigInt("896")
		const uintBXXXYZl = await FrogDAOmPzfTPG.safeAdd.call(uintIBhJ1IV, uintngo6s0B, {from: accounts[2]});
//		const uintrED0H8v = await FrogDAOmPzfTPG.safeSub.call(uintmnWG9Gk, uintrwpbKqi, {from: accounts[1]});
//		const uintDQXeWrV = await FrogDAOmPzfTPG.safeDiv.call(uintGylfofm, uintvBVniZo, {from: accounts[2]});
//		const uintECUpiB9 = await FrogDAOmPzfTPG.safeMul.call(uintD5V5vIX, uintxHouI0I, {from: accounts[3]});

		assert.equal(uintBXXXYZl, BigInt("2008"))
		await expect(FrogDAOmPzfTPG.safeSub.call(uintmnWG9Gk, uintrwpbKqi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOFTAEw4X = await FrogDAO.new({from: accounts[1]});
		const uintMen1aAQ = BigInt("1961")
		const addressv5Pvuss = accounts[3]
		const uintVIXzbsR = BigInt("1785")
		const uintST4QpoQ = BigInt("155")
		const uintaBuSlbT = BigInt("635")
		const uintNPJCnQj = BigInt("1574")
		const boollwU1EjQ = await FrogDAOFTAEw4X.approve.call(addressv5Pvuss, uintMen1aAQ, {from: accounts[3]});
		const uintahXU0ZP = await FrogDAOFTAEw4X.totalSupply.call({from: accounts[1]});
		const uintGRrs7P9 = await FrogDAOFTAEw4X.safeDiv.call(uintST4QpoQ, uintVIXzbsR, {from: accounts[2]});
		const uintIfAtd1j = await FrogDAOFTAEw4X.safeMul.call(uintNPJCnQj, uintaBuSlbT, {from: accounts[3]});

		assert.equal(boollwU1EjQ, true)
		assert.equal(uintGRrs7P9, BigInt("0"))
		assert.equal(uintIfAtd1j, BigInt("999490"))
		assert.equal(uintahXU0ZP, BigInt("1000000000000000000000000"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOPWgJ5C = await FrogDAO.new({from: accounts[2]});
		const addressaSvNCU9 = accounts[4]
		const addressKPhz8x2 = accounts[5]
		const addressAUk0reh = accounts[3]
		const addressRHOemeZ = accounts[5]
		const uintwSBtzW0 = BigInt("612")
		const addressm6QWAEK = accounts[4]
		const uintJK94l3Q = await FrogDAOPWgJ5C.balanceOf.call(addressaSvNCU9, {from: accounts[3]});
		const uintXECKm0y = await FrogDAOPWgJ5C.allowance.call(addressAUk0reh, addressKPhz8x2, {from: accounts[4]});
		const uintVdsuqMD = await FrogDAOPWgJ5C.balanceOf.call(addressRHOemeZ, {from: accounts[0]});
//		const boolLroolzJ = await FrogDAOPWgJ5C.transfer.call(addressm6QWAEK, uintwSBtzW0, {from: accounts[4]});

		assert.equal(uintJK94l3Q, BigInt("0"))
		assert.equal(uintVdsuqMD, BigInt("0"))
		assert.equal(uintXECKm0y, BigInt("0"))
		await expect(FrogDAOPWgJ5C.transfer.call(addressm6QWAEK, uintwSBtzW0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOnJpisTG = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintKjPvwpZ = BigInt("1732")
		const uintQpzluPZ = BigInt("1660")
		const uintE5C6UA = BigInt("27")
		const uintBIS85OY = BigInt("132")
		const uintfR49O9 = BigInt("136")
		const uintKwUfcLg = BigInt("1960")
		const uintSr6AAud = BigInt("925")
		const uintLYxAdAA = BigInt("1642")
		const uintWaizwMb = await FrogDAOnJpisTG.safeAdd.call(uintQpzluPZ, uintKjPvwpZ, {from: accounts[1]});
		const uintdz0Cjfq = await FrogDAOnJpisTG.safeDiv.call(uintBIS85OY, uintE5C6UA, {from: accounts[3]});
		const uintN5AJ1H = await FrogDAOnJpisTG.safeAdd.call(uintKwUfcLg, uintfR49O9, {from: accounts[0]});
		const uintSgaDoF2 = await FrogDAOnJpisTG.safeDiv.call(uintLYxAdAA, uintSr6AAud, {from: accounts[0]});
		const uintUZx2zti = await FrogDAOnJpisTG.totalSupply.call({from: accounts[4]});
	});

	it('test for FrogDAO', async () => {
		const FrogDAOSWgNt9o = await FrogDAO.new({from: accounts[2]});
		const addressNRvHLLF = accounts[0]
		const addressD7vVus = accounts[2]
		const uintzmt6AZS = BigInt("1505")
		const uintJV6wLwc = BigInt("276")
		const uintnmif9u8 = BigInt("1432")
		const addresswhNSCTt = accounts[3]
		const addressrfUT5ry = accounts[4]
		const uintsNmQcYg = BigInt("647")
		const uintfe4nAP3 = BigInt("2024")
		const addressJJnnhO0 = accounts[1]
		const addressebvHm9P = accounts[0]
		const uintSZstw8j = await FrogDAOSWgNt9o.allowance.call(addressD7vVus, addressNRvHLLF, {from: "0x0000000000000000000000000000000000000001"});
		const uintoWqGKgo = await FrogDAOSWgNt9o.safeMul.call(uintJV6wLwc, uintzmt6AZS, {from: accounts[3]});
//		const bool89wcZV = await FrogDAOSWgNt9o.transferFrom.call(addressrfUT5ry, addresswhNSCTt, uintnmif9u8, {from: accounts[3]});
//		const uintypLSrU = await FrogDAOSWgNt9o.safeAdd.call(uintfe4nAP3, uintsNmQcYg, {from: accounts[2]});
//		const uintKkTH3Xu = await FrogDAOSWgNt9o.allowance.call(addressebvHm9P, addressJJnnhO0, {from: accounts[4]});
//		const uintC2lAgrC = await FrogDAOSWgNt9o.totalSupply.call({from: accounts[2]});

		assert.equal(uintSZstw8j, BigInt("0"))
		assert.equal(uintoWqGKgo, BigInt("415380"))
		await expect(FrogDAOSWgNt9o.transferFrom.call(addressrfUT5ry, addresswhNSCTt, uintnmif9u8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})