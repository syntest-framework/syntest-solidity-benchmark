const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractIlhxe19 = await HTDD_contract.new({from: accounts[2]});
		const uintNb6zy5O = BigInt("706")
		const addressXvLhTp0 = accounts[4]
		const uintZM6JlaT = BigInt("414")
		const address3YE9HF = accounts[0]
		const uintf5O7fQT = BigInt("1766")
		const addressEaz54qg = accounts[5]
		const addressw9sF87s = accounts[2]
		const uintR8r2HDl = BigInt("649")
		const addressHV5SX5V = accounts[0]
		const uintgNw8iWd = BigInt("2044")
		const addressGYm96Gu = accounts[2]
		const booly8TEfqd = await HTDD_contractIlhxe19.approve.call(addressXvLhTp0, uintNb6zy5O, {from: accounts[3]});
		const boolhNszUqq = await HTDD_contractIlhxe19.approve.call(address3YE9HF, uintZM6JlaT, {from: accounts[0]});
		const boolI9kFht = await HTDD_contractIlhxe19.transferFrom.call(addressw9sF87s, addressEaz54qg, uintf5O7fQT, {from: "0x0000000000000000000000000000000000000001"});
		const boolC9vvH2P = await HTDD_contractIlhxe19.approve.call(addressHV5SX5V, uintR8r2HDl, {from: accounts[0]});
		const boolLGHwH7h = await HTDD_contractIlhxe19.transfer.call(addressGYm96Gu, uintgNw8iWd, {from: accounts[3]});

		assert.equal(boolhNszUqq, true)
		assert.equal(booly8TEfqd, true)
		await expect(HTDD_contractIlhxe19.transferFrom.call(addressw9sF87s, addressEaz54qg, uintf5O7fQT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractyflH3nl = await HTDD_contract.new({from: accounts[0]});
		const addressN9WEz3i = accounts[3]
		const addressSXZAeF = accounts[3]
		const addressl01WZmJ = accounts[0]
		const addressh21Q0dl = accounts[1]
		const uintce4WWg = BigInt("493")
		const addressdFswabR = accounts[1]
		const uint256gq9OfBx = await HTDD_contractyflH3nl.allowance.call(addressSXZAeF, addressN9WEz3i, {from: accounts[4]});
		const uint256F4ja0f0 = await HTDD_contractyflH3nl.allowance.call(addressh21Q0dl, addressl01WZmJ, {from: accounts[4]});
		const boolvo71lu6 = await HTDD_contractyflH3nl.transfer.call(addressdFswabR, uintce4WWg, {from: accounts[1]});

		assert.equal(uint256F4ja0f0, BigInt("0"))
		assert.equal(uint256gq9OfBx, BigInt("0"))
		await expect(HTDD_contractyflH3nl.transfer.call(addressdFswabR, uintce4WWg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractI122dGx = await HTDD_contract.new({from: accounts[0]});
		const uintmA15KF = BigInt("173")
		const addressh7PtxcE = accounts[2]
		const uinttZ1RLm6 = BigInt("1259")
		const addresslP6Kpm5 = accounts[2]
		const uintzMP2aG = BigInt("818")
		const addresstLoHE9L = accounts[3]
		const addressLpOBUMJ = accounts[3]
		const addressTA9GZGt = accounts[3]
		const addressP8Dt4wf = accounts[5]
		const uintsCrgoVQ = BigInt("1293")
		const addressIR672Al = accounts[2]
		const addressTyBRrcy = accounts[1]
		const boolURL3mpe = await HTDD_contractI122dGx.approve.call(addressh7PtxcE, uintmA15KF, {from: accounts[3]});
		const boolERvmMFK = await HTDD_contractI122dGx.transfer.call(addresslP6Kpm5, uinttZ1RLm6, {from: accounts[0]});
		const boolwL7y7hm = await HTDD_contractI122dGx.transferFrom.call(addressLpOBUMJ, addresstLoHE9L, uintzMP2aG, {from: accounts[1]});
		const uint256J2Afubw = await HTDD_contractI122dGx.allowance.call(addressP8Dt4wf, addressTA9GZGt, {from: accounts[1]});
		const boolvCaZk42 = await HTDD_contractI122dGx.transferFrom.call(addressTyBRrcy, addressIR672Al, uintsCrgoVQ, {from: accounts[5]});

		assert.equal(boolERvmMFK, true)
		assert.equal(boolURL3mpe, true)
		await expect(HTDD_contractI122dGx.transferFrom.call(addressLpOBUMJ, addresstLoHE9L, uintzMP2aG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractsuCeHY2 = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintR6Kd6z = BigInt("1703")
		const addresssiaD91z = accounts[5]
		const uintuQxPtue = BigInt("1799")
		const addressxacI9GR = accounts[5]
		const addressO88K4Os = accounts[0]
		const uintopO1vAY = BigInt("75")
		const addressZYDXXi = accounts[1]
		const addresspoHITy = accounts[0]
		const boolQJxOXnP = await HTDD_contractsuCeHY2.approve.call(addresssiaD91z, uintR6Kd6z, {from: accounts[5]});
		const boolLjHUvJ8 = await HTDD_contractsuCeHY2.transferFrom.call(addressO88K4Os, addressxacI9GR, uintuQxPtue, {from: accounts[3]});
		const boolBtDrGKq = await HTDD_contractsuCeHY2.transferFrom.call(addresspoHITy, addressZYDXXi, uintopO1vAY, {from: accounts[5]});
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractIlhxe19 = await HTDD_contract.new({from: accounts[2]});
		const uintPiqeMX1 = BigInt("706")
		const addressHk495NX = accounts[4]
		const uintuHsL3n = BigInt("0")
		const addressOcIr7zl = accounts[1]
		const addressy6AoqnZ = accounts[0]
		const uintehgnJyX = BigInt("523")
		const addressm0dwsWc = accounts[2]
		const addressC3wJ2VQ = accounts[1]
		const uintGVN7Ii9 = BigInt("1321")
		const addressg59WRKp = accounts[2]
		const addresscMdfvAL = "0x0000000000000000000000000000000000000001"
		const uintSN9TT0a = BigInt("1766")
		const addressyArmISQ = accounts[5]
		const addressbfmoSRM = accounts[2]
		const uintWD7eP4D = BigInt("649")
		const addresswkY0hS8 = accounts[0]
		const uintwLhdvpG = BigInt("2044")
		const addresszM71Kw = accounts[3]
		const booly8TEfqd = await HTDD_contractIlhxe19.approve.call(addressHk495NX, uintPiqeMX1, {from: accounts[3]});
		const boolvWmoUBn = await HTDD_contractIlhxe19.transferFrom.call(addressy6AoqnZ, addressOcIr7zl, uintuHsL3n, {from: accounts[3]});
		const boolQQie3io = await HTDD_contractIlhxe19.transferFrom.call(addressC3wJ2VQ, addressm0dwsWc, uintehgnJyX, {from: accounts[1]});
		const boolHC26R8 = await HTDD_contractIlhxe19.transferFrom.call(addresscMdfvAL, addressg59WRKp, uintGVN7Ii9, {from: accounts[2]});
		const boolI9kFht = await HTDD_contractIlhxe19.transferFrom.call(addressbfmoSRM, addressyArmISQ, uintSN9TT0a, {from: "0x0000000000000000000000000000000000000001"});
		const boolC9vvH2P = await HTDD_contractIlhxe19.approve.call(addresswkY0hS8, uintWD7eP4D, {from: accounts[0]});
		const boolLGHwH7h = await HTDD_contractIlhxe19.transfer.call(addresszM71Kw, uintwLhdvpG, {from: accounts[3]});

		assert.equal(boolvWmoUBn, true)
		assert.equal(booly8TEfqd, true)
		await expect(HTDD_contractIlhxe19.transferFrom.call(addressC3wJ2VQ, addressm0dwsWc, uintehgnJyX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractjWaD8il = await HTDD_contract.new({from: accounts[3]});
		const uinthUnSnIC = BigInt("479")
		const addressuFhER5I = "0x00000000000000000000000000000000000000-1"
		const addresshclRpaz = accounts[0]
		const boold7LJlQw = await HTDD_contractjWaD8il.transferFrom.call(addresshclRpaz, addressuFhER5I, uinthUnSnIC, {from: accounts[3]});

		await expect(HTDD_contractjWaD8il.transferFrom.call(addresshclRpaz, addressuFhER5I, uinthUnSnIC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})