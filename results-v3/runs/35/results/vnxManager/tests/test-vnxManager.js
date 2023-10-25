const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerme6mj6O = await vnxManager.new({from: accounts[2]});
		const stringkCzdk1Q = "rHPhkQjFVTcviurAXbNZBcigStOqOt3prz83K8t1Pw0VJpUkneCetlgdqG"
		const addresshfjKvCq = accounts[0]
		const addressqPkDzq = accounts[4]
		const addressVUdaCJ = accounts[0]
		const addressp4l6vwq = accounts[4]
		const uint256K5ZFgm = await vnxManagerme6mj6O.addRootRole.call(stringkCzdk1Q, {from: accounts[0]});
		const boolbfKgSro = await vnxManagerme6mj6O.transferContractOwnership.call(addressqPkDzq, addresshfjKvCq, {from: "0x0000000000000000000000000000000000000001"});
		const boolX1joEXw = await vnxManagerme6mj6O.transferContractOwnership.call(addressp4l6vwq, addressVUdaCJ, {from: accounts[4]});
		const boolSeIrh5U = await vnxManagerme6mj6O.isOwner.call({from: accounts[0]});
		const uint256EZmeQ5R = await vnxManagerme6mj6O.totalRoles.call({from: accounts[2]});

		assert.equal(uint256K5ZFgm, BigInt("0"))
		await expect(vnxManagerme6mj6O.transferContractOwnership.call(addressqPkDzq, addresshfjKvCq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerm4ehIrS = await vnxManager.new({from: accounts[3]});
		const uintEVzeZ3g = BigInt("661")
		const addressBAJaHdI = "0x0000000000000000000000000000000000000001"
		const uintb1o5axf = BigInt("1119")
		const addressLSSMSBM = accounts[0]
		const boolRNKEwRh = await vnxManagerm4ehIrS.hasRole.call(addressBAJaHdI, uintEVzeZ3g, {from: accounts[3]});
		const addressMxx0EpP = await vnxManagerm4ehIrS.removeBearer.call(addressLSSMSBM, uintb1o5axf, {from: accounts[3]});
		await vnxManagerm4ehIrS.onlyAdmin.call({from: accounts[2]});

		assert.equal(boolRNKEwRh, false)
		await expect(vnxManagerm4ehIrS.removeBearer.call(addressLSSMSBM, uintb1o5axf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerfgo7oPK = await vnxManager.new({from: accounts[2]});
		const addressKetVOjV = accounts[5]
		const stringNWEaQF0 = "4CLvAeDCFglqIWdIKQksqgaWtIjQwH7rbYWXXgzLJrpi40HsLkqzgL9hNyycmLerMNC5ef8nvncuXTUAzif8"
		const addressiQhZPbk = await vnxManagerfgo7oPK.transferOwnership.call(addressKetVOjV, {from: accounts[1]});
		await vnxManagerfgo7oPK.renounceOwnership.call({from: accounts[0]});
		const uint256lerHoCG = await vnxManagerfgo7oPK.addRootRole.call(stringNWEaQF0, {from: accounts[3]});

		await expect(vnxManagerfgo7oPK.transferOwnership.call(addressKetVOjV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerDFn3Sil = await vnxManager.new({from: accounts[1]});
		const uintV35AI28 = BigInt("181")
		const addressglUkemD = accounts[3]
		const addressSLBIJU = accounts[4]
		const uintKbH12rr = BigInt("291")
		const addresse9WUuZi = accounts[0]
		const addressFCcWLiB = await vnxManagerDFn3Sil.addBearer.call(addressglUkemD, uintV35AI28, {from: accounts[3]});
		const addresshjQELWe = await vnxManagerDFn3Sil.transferOwnership.call(addressSLBIJU, {from: accounts[0]});
		const addressLVBxPCu = await vnxManagerDFn3Sil.addBearer.call(addresse9WUuZi, uintKbH12rr, {from: "0x0000000000000000000000000000000000000001"});

		await expect(vnxManagerDFn3Sil.addBearer.call(addressglUkemD, uintV35AI28, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerZZYMwID = await vnxManager.new({from: accounts[2]});
		const uintJkubrjp = BigInt("473")
		const addressm43gMK = accounts[3]
		const uintsnGh0eg = BigInt("1797")
		const addressQNnS8H9 = accounts[0]
		const uintTaTnigi = BigInt("1679")
		const addressHauWbAa = accounts[1]
		const booltlkUycr = await vnxManagerZZYMwID.isAdmin.call({from: accounts[2]});
		await vnxManagerZZYMwID.onlyAdmin.call({from: accounts[1]});
		const addressvXFLYS = await vnxManagerZZYMwID.removeBearer.call(addressm43gMK, uintJkubrjp, {from: accounts[4]});
		const addressHaT5Za0 = await vnxManagerZZYMwID.removeBearer.call(addressQNnS8H9, uintsnGh0eg, {from: accounts[3]});
		const boolang3eRU = await vnxManagerZZYMwID.hasRole.call(addressHauWbAa, uintTaTnigi, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booltlkUycr, true)
		await expect(vnxManagerZZYMwID.onlyAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerMpxFApF = await vnxManager.new({from: accounts[3]});
		const uintbj0JjhP = BigInt("118")
		const stringJIKEMMk = "Tz7rVRmsG87K32sMAoIamPaFMGKdXKLUOovkPOKRe"
		const uintOXUrYv = BigInt("1151")
		const stringC4sk912 = "ZDpEXf1ShAMVUoHsZMY8PDmv7Rz"
		const uint256LlAZ4hY = await vnxManagerMpxFApF.addRole.call(stringJIKEMMk, uintbj0JjhP, {from: accounts[4]});
		const uint256sxmPsHf = await vnxManagerMpxFApF.addRole.call(stringC4sk912, uintOXUrYv, {from: accounts[5]});

		await expect(vnxManagerMpxFApF.addRole.call(stringJIKEMMk, uintbj0JjhP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerwAOMWEi = await vnxManager.new({from: accounts[5]});
		const uintebGj83P = BigInt("88")
		const stringnaMTqKg = "Q8EG9cWE6DNHEADfjCGL6SvQQtRIO9CGgvfbv0SxWo9gUvgTpKNo"
		const uint256taqPW5s = await vnxManagerwAOMWEi.totalRoles.call({from: accounts[1]});
		const uint256ysabfP = await vnxManagerwAOMWEi.addRole.call(stringnaMTqKg, uintebGj83P, {from: accounts[0]});
		const uint256DvYnKaz = await vnxManagerwAOMWEi.totalRoles.call({from: accounts[2]});

		assert.equal(uint256taqPW5s, BigInt("1"))
		await expect(vnxManagerwAOMWEi.addRole.call(stringnaMTqKg, uintebGj83P, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerm4ehIrS = await vnxManager.new({from: accounts[3]});
		const addressDvayF07 = accounts[3]
		const uinthwnrpnD = BigInt("661")
		const addressFis2QYF = "0x0000000000000000000000000000000000000001"
		const addressXbGoyqb = await vnxManagerm4ehIrS.transferOwnership.call(addressDvayF07, {from: accounts[3]});
		const boolRNKEwRh = await vnxManagerm4ehIrS.hasRole.call(addressFis2QYF, uinthwnrpnD, {from: accounts[3]});
		await vnxManagerm4ehIrS.onlyAdmin.call({from: accounts[2]});

		assert.equal(boolRNKEwRh, false)
		await expect(vnxManagerm4ehIrS.onlyAdmin.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagergYEtSnn = await vnxManager.new({from: accounts[3]});
		const uintP97ffxd = BigInt("177")
		const addressdBuzrQz = accounts[2]
		const uintIMnQCKz = BigInt("821")
		const addressLWi2YeK = accounts[1]
		const addressJ0WL9fL = accounts[3]
		const boolenApVqA = await vnxManagergYEtSnn.hasRole.call(addressdBuzrQz, uintP97ffxd, {from: accounts[2]});
		const boolKLDJTJQ = await vnxManagergYEtSnn.hasRole.call(addressLWi2YeK, uintIMnQCKz, {from: accounts[1]});
		const boolURxrHvc = await vnxManagergYEtSnn.isAdmin.call({from: accounts[3]});
		const addresswZMRQtw = await vnxManagergYEtSnn.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressUrqINeR = await vnxManagergYEtSnn.transferOwnership.call(addressJ0WL9fL, {from: accounts[3]});

		assert.equal(addresswZMRQtw, 0xA9e6Eec01A5A0608df17e9E674f81dC62f8D9213)
		assert.equal(boolKLDJTJQ, false)
		assert.equal(boolURxrHvc, true)
		assert.equal(boolenApVqA, false)
	});

	it('test for vnxManager', async () => {
		const vnxManager59MIT7 = await vnxManager.new({from: accounts[2]});
		const uintotOGB7A = BigInt("88")
		const addresslVqEUws = accounts[0]
		const addressKLjNCHx = accounts[3]
		const uintg9liQaC = BigInt("164")
		const addressgzioFe5 = accounts[3]
		const uintJmuvwQg = BigInt("4")
		const stringEznbPW2 = "jmEW8fJOaDgg81Kscv2n6jizx4nLqTQUY30A6poXv6VIeDPxQ48rcE7f67c"
		await vnxManager59MIT7.renounceOwnership.call({from: accounts[2]});
		const addressoi6D9ZD = await vnxManager59MIT7.removeBearer.call(addresslVqEUws, uintotOGB7A, {from: accounts[0]});
		const addressR68tOKa = await vnxManager59MIT7.transferOwnership.call(addressKLjNCHx, {from: accounts[0]});
		const boollz54kmm = await vnxManager59MIT7.hasRole.call(addressgzioFe5, uintg9liQaC, {from: accounts[1]});
		const uint256lTKpMO = await vnxManager59MIT7.addRole.call(stringEznbPW2, uintJmuvwQg, {from: accounts[4]});
		await vnxManager59MIT7.onlyOwner.call({from: accounts[1]});

		await expect(vnxManager59MIT7.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagercXo2MVA = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const addressRqyrNZ4 = accounts[0]
		const addressR77OjrJ = accounts[4]
		const addressdGIde8 = accounts[1]
		const addressu1PlJbS = accounts[0]
		const addressWXjc0HI = accounts[2]
		const uint256uGpF7Bf = await vnxManagercXo2MVA.totalRoles.call({from: accounts[3]});
		const uint256rvOg9wp = await vnxManagercXo2MVA.totalRoles.call({from: accounts[3]});
		const addresstoKNp9O = await vnxManagercXo2MVA.transferOwnership.call(addressRqyrNZ4, {from: accounts[2]});
		const boolu5uDml = await vnxManagercXo2MVA.transferContractOwnership.call(addressdGIde8, addressR77OjrJ, {from: accounts[4]});
		const boolrAI67lS = await vnxManagercXo2MVA.transferContractOwnership.call(addressWXjc0HI, addressu1PlJbS, {from: accounts[3]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerm4ehIrS = await vnxManager.new({from: accounts[3]});
		const uintmFIIwX = BigInt("661")
		const address6FsEg3 = "0x0000000000000000000000000000000000000002"
		const addresssgMdmXm = accounts[1]
		const addressI9jnGSJ = accounts[2]
		const uintEJewBmj = BigInt("1119")
		const addressY3T1M3u = accounts[0]
		const boolRNKEwRh = await vnxManagerm4ehIrS.hasRole.call(address6FsEg3, uintmFIIwX, {from: accounts[3]});
		const boolXyS5gbu = await vnxManagerm4ehIrS.transferContractOwnership.call(addressI9jnGSJ, addresssgMdmXm, {from: accounts[3]});
		const addressMxx0EpP = await vnxManagerm4ehIrS.removeBearer.call(addressY3T1M3u, uintEJewBmj, {from: accounts[3]});

		assert.equal(boolRNKEwRh, false)
		await expect(vnxManagerm4ehIrS.transferContractOwnership.call(addressI9jnGSJ, addresssgMdmXm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})