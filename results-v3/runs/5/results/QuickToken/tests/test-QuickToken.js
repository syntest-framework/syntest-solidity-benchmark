const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addresshhgraio = "0x0000000000000000000000000000000000000001"
		const addressweM8Y0t = accounts[0]
		const QuickTokenYMhoCw = await QuickToken.new(addresshhgraio, addressweM8Y0t, {from: accounts[2]});
		const addressP5An7nj = accounts[4]
		const address6L78f0 = accounts[5]
		const uintBNKYJBY = BigInt("930")
		const addresshejN0Y = accounts[0]
		const addressiLDTLAp = accounts[1]
		const addressu5UxLAs = accounts[3]
		const address6jGh79 = accounts[0]
		const addressitUABml = accounts[4]
		const uintwsvmeHq = await QuickTokenYMhoCw.allowance.call(address6L78f0, addressP5An7nj, {from: accounts[0]});
		const boolNv4q1p = await QuickTokenYMhoCw.transfer.call(addresshejN0Y, uintBNKYJBY, {from: accounts[2]});
		const uintYdNBBTx = await QuickTokenYMhoCw.allowance.call(addressu5UxLAs, addressiLDTLAp, {from: accounts[2]});
		const uintWjkk53Q = await QuickTokenYMhoCw.allowance.call(addressitUABml, address6jGh79, {from: accounts[0]});

		assert.equal(uintwsvmeHq, BigInt("0"))
		await expect(QuickTokenYMhoCw.transfer.call(addresshejN0Y, uintBNKYJBY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressiGzUzGy = accounts[0]
		const addressxqtTm6B = accounts[5]
		const QuickTokenxtQtn1h = await QuickToken.new(addressiGzUzGy, addressxqtTm6B, {from: accounts[2]});
		const addresshH90K1 = accounts[2]
		const uinthr3qcxr = BigInt("957")
		const addressuqm7Bgo = accounts[1]
		const addresslzHFovd = accounts[3]
		const addressH9EZ1bO = "0x0000000000000000000000000000000000000001"
		const addressUflzVdy = accounts[1]
		const addressZvmukd = accounts[3]
		const addressTCv8Wg1 = accounts[2]
		const addressfpjAeb6 = accounts[2]
		const addressVE9VD8N = accounts[1]
		const addressRaPvWN = await QuickTokenxtQtn1h.setMinter.call(addresshH90K1, {from: accounts[3]});
		const boolXCa0GS = await QuickTokenxtQtn1h.approve.call(addressuqm7Bgo, uinthr3qcxr, {from: accounts[1]});
		const uintIfIizzC = await QuickTokenxtQtn1h.allowance.call(addressH9EZ1bO, addresslzHFovd, {from: accounts[1]});
		const uint0wvAyB = await QuickTokenxtQtn1h.balanceOf.call(addressUflzVdy, {from: accounts[1]});
		const uintOU7EMGO = await QuickTokenxtQtn1h.allowance.call(addressTCv8Wg1, addressZvmukd, {from: accounts[4]});
		const uintjrgadW = await QuickTokenxtQtn1h.allowance.call(addressVE9VD8N, addressfpjAeb6, {from: accounts[2]});

		await expect(QuickTokenxtQtn1h.setMinter.call(addresshH90K1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressfrXz4Gy = accounts[5]
		const addressTrAzTSd = accounts[4]
		const QuickTokenmfPRID3 = await QuickToken.new(addressfrXz4Gy, addressTrAzTSd, {from: accounts[1]});
		const uintXKy6PyO = BigInt("484")
		const addressLQhSsyR = "0x0000000000000000000000000000000000000001"
		const uint55iEwU = BigInt("1877")
		const addressm0ggnCK = accounts[4]
		const uintHE46qpt = BigInt("798")
		const addressX4sBUEl = accounts[4]
		const addressHS8y7wf = accounts[0]
		const boolsqsbDq = await QuickTokenmfPRID3.transfer.call(addressLQhSsyR, uintXKy6PyO, {from: accounts[5]});
		const boolaF6bpIJ = await QuickTokenmfPRID3.approve.call(addressm0ggnCK, uint55iEwU, {from: accounts[4]});
		const boolUUHKUmG = await QuickTokenmfPRID3.transfer.call(addressX4sBUEl, uintHE46qpt, {from: accounts[0]});
		const uintTsp7ZWM = await QuickTokenmfPRID3.balanceOf.call(addressHS8y7wf, {from: accounts[3]});

		assert.equal(boolaF6bpIJ, true)
		assert.equal(boolsqsbDq, true)
		await expect(QuickTokenmfPRID3.transfer.call(addressX4sBUEl, uintHE46qpt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresspNoRywe = accounts[5]
		const addressWZQ4K7x = accounts[0]
		const QuickTokenYFpmfnA = await QuickToken.new(addresspNoRywe, addressWZQ4K7x, {from: accounts[0]});
		const uintLFq8Nn6 = BigInt("1764")
		const addressO3SgQ0I = "0x0000000000000000000000000000000000000001"
		const addressEL33hJr = accounts[0]
		const uint90x2ST = BigInt("1151")
		const addressqyZPUFS = accounts[4]
		const addressNAub05d = accounts[4]
		const addressNgVAut5 = await QuickTokenYFpmfnA.mint.call(addressO3SgQ0I, uintLFq8Nn6, {from: accounts[0]});
		const uintStPKXvq = await QuickTokenYFpmfnA.balanceOf.call(addressEL33hJr, {from: accounts[0]});
		const booljkY41cy = await QuickTokenYFpmfnA.transferFrom.call(addressNAub05d, addressqyZPUFS, uint90x2ST, {from: accounts[3]});

		assert.equal(uintStPKXvq, BigInt("0"))
		await expect(QuickTokenYFpmfnA.transferFrom.call(addressNAub05d, addressqyZPUFS, uint90x2ST, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressAuA0g4E = accounts[0]
		const addressohNkWLd = accounts[0]
		const QuickTokenEZRa5OY = await QuickToken.new(addressAuA0g4E, addressohNkWLd, {from: accounts[4]});
		const uintqOVNcDN = BigInt("1424")
		const addressHUJV74X = accounts[1]
		const uintYpqIzl = BigInt("1807")
		const addresstel0E6n = accounts[4]
		const uintJTTyYZX = BigInt("638")
		const addressVfpz9N = accounts[1]
		const addresscaAv7CC = accounts[0]
		const addressM8im7tp = "0x0000000000000000000000000000000000000001"
		const addressU7WwQwv = accounts[4]
		const addresstIpomGL = await QuickTokenEZRa5OY.mint.call(addressHUJV74X, uintqOVNcDN, {from: accounts[1]});
		const boolDl7nIN7 = await QuickTokenEZRa5OY.approve.call(addresstel0E6n, uintYpqIzl, {from: accounts[1]});
		const boolHUUbkqJ = await QuickTokenEZRa5OY.transfer.call(addressVfpz9N, uintJTTyYZX, {from: accounts[4]});
		const uintqmMCGP = await QuickTokenEZRa5OY.balanceOf.call(addresscaAv7CC, {from: accounts[0]});
		const uintPYfIUhs = await QuickTokenEZRa5OY.balanceOf.call(addressM8im7tp, {from: "0x0000000000000000000000000000000000000001"});
		const uintyYQbLb = await QuickTokenEZRa5OY.balanceOf.call(addressU7WwQwv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(QuickTokenEZRa5OY.mint.call(addressHUJV74X, uintqOVNcDN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressMZUblvy = accounts[2]
		const addressb6UB9Sb = accounts[1]
		const QuickTokengB13KO2 = await QuickToken.new(addressMZUblvy, addressb6UB9Sb, {from: "0x0000000000000000000000000000000000000001"});
		const uintOGzNJC5 = BigInt("746")
		const addressEMYajV7 = accounts[0]
		const addressnTTS50 = accounts[1]
		const uintlRbHmtm = BigInt("196")
		const addressObnyykq = accounts[4]
		const addressrV4JLJM = accounts[3]
		const addressPHTd4n = accounts[2]
		const uintD26jw7D = BigInt("1270")
		const addressAl2QyjA = accounts[1]
		const addresscgqtvEC = await QuickTokengB13KO2.mint.call(addressEMYajV7, uintOGzNJC5, {from: "0x0000000000000000000000000000000000000001"});
		const addressXbYtCL = await QuickTokengB13KO2.setMinter.call(addressnTTS50, {from: accounts[3]});
		const addressmj9uY8 = await QuickTokengB13KO2.mint.call(addressObnyykq, uintlRbHmtm, {from: accounts[5]});
		const uintdXHxLKQ = await QuickTokengB13KO2.allowance.call(addressPHTd4n, addressrV4JLJM, {from: accounts[3]});
		const boolFr2UuEf = await QuickTokengB13KO2.approve.call(addressAl2QyjA, uintD26jw7D, {from: accounts[2]});
	});
})