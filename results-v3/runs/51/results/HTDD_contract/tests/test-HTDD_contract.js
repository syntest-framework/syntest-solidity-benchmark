const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractpCXce2R = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGsdBYEG = BigInt("1561")
		const addressTuyfVmV = accounts[2]
		const addresswVtk6vn = accounts[4]
		const uintQZv9FQK = BigInt("1617")
		const addressUC7CiXt = accounts[5]
		const uintY0n3I3J = BigInt("42")
		const addressPBOhav7 = accounts[4]
		const boolpljev9T = await HTDD_contractpCXce2R.transferFrom.call(addresswVtk6vn, addressTuyfVmV, uintGsdBYEG, {from: accounts[2]});
		const bool5uSPu7 = await HTDD_contractpCXce2R.transfer.call(addressUC7CiXt, uintQZv9FQK, {from: accounts[4]});
		const boolDIiRlsp = await HTDD_contractpCXce2R.approve.call(addressPBOhav7, uintY0n3I3J, {from: accounts[3]});
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractHrWGHNr = await HTDD_contract.new({from: accounts[3]});
		const uintFfnYplj = BigInt("648")
		const addressfZhgmkr = accounts[4]
		const uintW0CuCW = BigInt("1596")
		const addressi9oRWka = accounts[3]
		const addressD7sftcI = accounts[3]
		const address8InAl0 = accounts[3]
		const addressKghKRc2 = accounts[3]
		const uintnkPwPwI = BigInt("452")
		const addressxg44Ghq = accounts[3]
		const addressARQM8d1 = accounts[0]
		const addressmTMORvm = accounts[1]
		const addressSX0CBt4 = accounts[5]
		const boolMAwdSuA = await HTDD_contractHrWGHNr.approve.call(addressfZhgmkr, uintFfnYplj, {from: accounts[3]});
		const boolMEbujlm = await HTDD_contractHrWGHNr.transferFrom.call(addressD7sftcI, addressi9oRWka, uintW0CuCW, {from: accounts[3]});
		const uint256xD9rLGn = await HTDD_contractHrWGHNr.allowance.call(addressKghKRc2, address8InAl0, {from: accounts[0]});
		const boolwv0KUG = await HTDD_contractHrWGHNr.transferFrom.call(addressARQM8d1, addressxg44Ghq, uintnkPwPwI, {from: accounts[1]});
		const uint256Ha7QRoP = await HTDD_contractHrWGHNr.allowance.call(addressSX0CBt4, addressmTMORvm, {from: accounts[0]});

		assert.equal(boolMAwdSuA, true)
		await expect(HTDD_contractHrWGHNr.transferFrom.call(addressD7sftcI, addressi9oRWka, uintW0CuCW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractQrgn8FO = await HTDD_contract.new({from: accounts[2]});
		const uintTrskCIy = BigInt("1145")
		const addressWnFkRmI = accounts[5]
		const uintJgKo7jE = BigInt("1568")
		const addresstqtO7Jj = accounts[5]
		const uintGwdCO2 = BigInt("607")
		const addressMuNfEEm = accounts[3]
		const uintN22ojZ = BigInt("351")
		const addressXUdU9Jw = accounts[3]
		const uintQZWat9K = BigInt("1105")
		const addressJqX4k3d = accounts[3]
		const addressd8XIT5b = accounts[4]
		const booli2ZjgE = await HTDD_contractQrgn8FO.approve.call(addressWnFkRmI, uintTrskCIy, {from: accounts[4]});
		const boolFgerXzH = await HTDD_contractQrgn8FO.approve.call(addresstqtO7Jj, uintJgKo7jE, {from: accounts[4]});
		const boolPI2J2cm = await HTDD_contractQrgn8FO.transfer.call(addressMuNfEEm, uintGwdCO2, {from: accounts[5]});
		const booltFeP47H = await HTDD_contractQrgn8FO.approve.call(addressXUdU9Jw, uintN22ojZ, {from: accounts[1]});
		const boolRPldwNu = await HTDD_contractQrgn8FO.transferFrom.call(addressd8XIT5b, addressJqX4k3d, uintQZWat9K, {from: accounts[2]});

		assert.equal(boolFgerXzH, true)
		assert.equal(booli2ZjgE, true)
		await expect(HTDD_contractQrgn8FO.transfer.call(addressMuNfEEm, uintGwdCO2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contract0iyZVS = await HTDD_contract.new({from: accounts[5]});
		const uintYe1k98D = BigInt("67")
		const addressVdyTr8q = accounts[0]
		const address8PWdWy = accounts[2]
		const addressCWOFCld = accounts[5]
		const uintuT93sEU = BigInt("413")
		const addressxdZTAzY = accounts[3]
		const addressveiR1d3 = accounts[3]
		const addressCwywZu6 = "0x0000000000000000000000000000000000000001"
		const addressBtJvJtg = accounts[2]
		const addressyVvtfQk = accounts[3]
		const addresspNQSqSz = accounts[0]
		const uinttKIaKB8 = BigInt("1760")
		const addressxkIErjS = accounts[3]
		const boolyrLg1Sh = await HTDD_contract0iyZVS.approve.call(addressVdyTr8q, uintYe1k98D, {from: accounts[2]});
		const uint256D5kAHKI = await HTDD_contract0iyZVS.allowance.call(addressCWOFCld, address8PWdWy, {from: accounts[0]});
		const boolhvnP7xR = await HTDD_contract0iyZVS.transferFrom.call(addressveiR1d3, addressxdZTAzY, uintuT93sEU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256J7cWTuk = await HTDD_contract0iyZVS.allowance.call(addressBtJvJtg, addressCwywZu6, {from: accounts[3]});
		const uint256NKyWAtZ = await HTDD_contract0iyZVS.allowance.call(addresspNQSqSz, addressyVvtfQk, {from: accounts[1]});
		const boolBT5e1f5 = await HTDD_contract0iyZVS.approve.call(addressxkIErjS, uinttKIaKB8, {from: accounts[1]});

		assert.equal(boolyrLg1Sh, true)
		assert.equal(uint256D5kAHKI, BigInt("0"))
		await expect(HTDD_contract0iyZVS.transferFrom.call(addressveiR1d3, addressxdZTAzY, uintuT93sEU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})