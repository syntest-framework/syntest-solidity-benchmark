const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressjwCovMB = accounts[5]
		const uintGV8OUEk = BigInt("1865")
		const DatrixoEquityTokenSzjZRxq = await DatrixoEquityToken.new(addressjwCovMB, uintGV8OUEk, {from: accounts[1]});
		const uintW6muJU = BigInt("1509")
		const addressd9HQuxy = accounts[3]
		const uintGLG9qT1 = BigInt("557")
		const addressJnRKKrO = accounts[4]
		const addressrWjbXiA = accounts[2]
		const uintEAGFQSh = BigInt("382")
		const addressmguZ6O5 = accounts[5]
		const addressydGIwQh = accounts[4]
		const addressdPeuNu = accounts[1]
		const uintCNqrnty = BigInt("1441")
		const boolhUYYX0 = await DatrixoEquityTokenSzjZRxq.transfer.call(addressd9HQuxy, uintW6muJU, {from: accounts[4]});
		const boolJ4GfUzs = await DatrixoEquityTokenSzjZRxq.transferFrom.call(addressrWjbXiA, addressJnRKKrO, uintGLG9qT1, {from: accounts[2]});
		const booll6QvLzP = await DatrixoEquityTokenSzjZRxq.transferFrom.call(addressydGIwQh, addressmguZ6O5, uintEAGFQSh, {from: "0x0000000000000000000000000000000000000001"});
		const boolpSZ83QN = await DatrixoEquityTokenSzjZRxq.removeShareholder.call(addressdPeuNu, {from: accounts[5]});
		const addressarrayLR4TDl = await DatrixoEquityTokenSzjZRxq.getShareholdersArray.call({from: accounts[5]});
		const uintzjSexhp = await DatrixoEquityTokenSzjZRxq.setStart.call(uintCNqrnty, {from: accounts[5]});

		await expect(DatrixoEquityTokenSzjZRxq.transfer.call(addressd9HQuxy, uintW6muJU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressN9LfCzX = accounts[5]
		const uintkgBz0s0 = BigInt("571")
		const DatrixoEquityToken07gv2M = await DatrixoEquityToken.new(addressN9LfCzX, uintkgBz0s0, {from: accounts[4]});
		const addressYmPHIO3 = accounts[1]
		await DatrixoEquityToken07gv2M.afterStartTime.call({from: accounts[0]});
		const boolCukQYg2 = await DatrixoEquityToken07gv2M.removeShareholder.call(addressYmPHIO3, {from: accounts[4]});

		await expect(DatrixoEquityToken07gv2M.afterStartTime.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressLQPXu2p = accounts[2]
		const uintuGW72AR = BigInt("1813")
		const DatrixoEquityTokenoItrU95 = await DatrixoEquityToken.new(addressLQPXu2p, uintuGW72AR, {from: accounts[4]});
		const uintWtX7h6J = BigInt("207")
		const addressHLYHQbc = accounts[3]
		const addresspbdYWN = accounts[5]
		const uintxt54VIt = BigInt("1995")
		const addressIE58SgA = accounts[1]
		const addressDAG3wmv = accounts[2]
		const addressarrayrsfXeBv = await DatrixoEquityTokenoItrU95.getShareholdersArray.call({from: accounts[3]});
		await DatrixoEquityTokenoItrU95.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"});
		const boolFlz0lEA = await DatrixoEquityTokenoItrU95.transferFrom.call(addresspbdYWN, addressHLYHQbc, uintWtX7h6J, {from: accounts[4]});
		await DatrixoEquityTokenoItrU95.onlyOwner.call({from: accounts[3]});
		const addressarrayisvNIJM = await DatrixoEquityTokenoItrU95.getShareholdersArray.call({from: accounts[0]});
		const boolKEoVm8e = await DatrixoEquityTokenoItrU95.transferFrom.call(addressDAG3wmv, addressIE58SgA, uintxt54VIt, {from: accounts[1]});

		assert.equal(addressarrayrsfXeBv, )
		await expect(DatrixoEquityTokenoItrU95.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressu5FWpNu = accounts[1]
		const uintAfRwtkO = BigInt("1665")
		const DatrixoEquityTokenidud0C1 = await DatrixoEquityToken.new(addressu5FWpNu, uintAfRwtkO, {from: accounts[2]});
		const uintQsoqx6 = BigInt("579")
		const addresshc53ORe = accounts[3]
		const uintn8aV7i = BigInt("1233")
		const addressBrJQmdO = accounts[1]
		const addressCHJNKEy = accounts[4]
		const uintNjxVXqX = BigInt("1178")
		const addressqETNjMV = accounts[2]
		const booltVDqKMe = await DatrixoEquityTokenidud0C1.transfer.call(addresshc53ORe, uintQsoqx6, {from: accounts[1]});
		const boolBeXIVaY = await DatrixoEquityTokenidud0C1.transferFrom.call(addressCHJNKEy, addressBrJQmdO, uintn8aV7i, {from: accounts[3]});
		const boolD8iqQOq = await DatrixoEquityTokenidud0C1.transfer.call(addressqETNjMV, uintNjxVXqX, {from: accounts[3]});

		assert.equal(booltVDqKMe, true)
		await expect(DatrixoEquityTokenidud0C1.transferFrom.call(addressCHJNKEy, addressBrJQmdO, uintn8aV7i, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressBH3PUog = accounts[1]
		const uintWjBpjrL = BigInt("1665")
		const DatrixoEquityTokenidud0C1 = await DatrixoEquityToken.new(addressBH3PUog, uintWjBpjrL, {from: accounts[2]});
		const uintfMKiK0H = BigInt("64")
		const addressJyV88mb = accounts[3]
		const addressW1GCYJU = accounts[1]
		const uintGnVxMcC = BigInt("1522")
		const addressPHgJS6a = accounts[5]
		const uintn2QHwdr = BigInt("903")
		const addressd9cgir = accounts[1]
		const boolEwVC5ks = await DatrixoEquityTokenidud0C1.transferFrom.call(addressW1GCYJU, addressJyV88mb, uintfMKiK0H, {from: accounts[1]});
		const booltVDqKMe = await DatrixoEquityTokenidud0C1.transfer.call(addressPHgJS6a, uintGnVxMcC, {from: accounts[1]});
		const boolD8iqQOq = await DatrixoEquityTokenidud0C1.transfer.call(addressd9cgir, uintn2QHwdr, {from: accounts[3]});

		assert.equal(boolEwVC5ks, true)
		assert.equal(booltVDqKMe, true)
		await expect(DatrixoEquityTokenidud0C1.transfer.call(addressd9cgir, uintn2QHwdr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressT74X4VN = accounts[1]
		const uintdnBbpUF = BigInt("1665")
		const DatrixoEquityTokenidud0C1 = await DatrixoEquityToken.new(addressT74X4VN, uintdnBbpUF, {from: accounts[2]});
		const uintFZzfhyA = BigInt("633")
		const address3WarNF = accounts[1]
		const addressi92QoFR = accounts[0]
		const booltVDqKMe = await DatrixoEquityTokenidud0C1.transfer.call(address3WarNF, uintFZzfhyA, {from: accounts[1]});
		const boolExsoPDv = await DatrixoEquityTokenidud0C1.removeShareholder.call(addressi92QoFR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DatrixoEquityTokenidud0C1.transfer.call(address3WarNF, uintFZzfhyA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressJ1uHMYX = accounts[1]
		const uintFytxKQi = BigInt("1665")
		const DatrixoEquityTokenidud0C1 = await DatrixoEquityToken.new(addressJ1uHMYX, uintFytxKQi, {from: accounts[2]});
		const uintssuKyds = BigInt("1839")
		const addressmiam0XS = accounts[0]
		const addresst5rLWy = "0x0000000000000000000000000000000000000001"
		const uintOgKaYe = BigInt("564")
		const addressG4NyzYl = accounts[3]
		const boolMMHsq5k = await DatrixoEquityTokenidud0C1.transferFrom.call(addresst5rLWy, addressmiam0XS, uintssuKyds, {from: accounts[1]});
		const booltVDqKMe = await DatrixoEquityTokenidud0C1.transfer.call(addressG4NyzYl, uintOgKaYe, {from: accounts[1]});

		await expect(DatrixoEquityTokenidud0C1.transferFrom.call(addresst5rLWy, addressmiam0XS, uintssuKyds, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressCxizVnS = accounts[1]
		const uintnncDg0Y = BigInt("1665")
		const DatrixoEquityTokenidud0C1 = await DatrixoEquityToken.new(addressCxizVnS, uintnncDg0Y, {from: accounts[2]});
		const uintZrDNoW9 = BigInt("237")
		const uintlmtyJsM = BigInt("579")
		const addressJMS4bI = accounts[6]
		const uintAKivyUk = BigInt("932")
		const addressQecModu = accounts[0]
		const uinteit5pFP = await DatrixoEquityTokenidud0C1.setStart.call(uintZrDNoW9, {from: accounts[1]});
		const booltVDqKMe = await DatrixoEquityTokenidud0C1.transfer.call(addressJMS4bI, uintlmtyJsM, {from: accounts[1]});
		const boolP4GW1PE = await DatrixoEquityTokenidud0C1.transfer.call(addressQecModu, uintAKivyUk, {from: accounts[4]});

		assert.equal(booltVDqKMe, true)
		await expect(DatrixoEquityTokenidud0C1.transfer.call(addressQecModu, uintAKivyUk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressRrBOPa = accounts[0]
		const uintdDDfdsm = BigInt("669")
		const DatrixoEquityTokenW49c3Ah = await DatrixoEquityToken.new(addressRrBOPa, uintdDDfdsm, {from: accounts[3]});
		const addresstZVtKVZ = accounts[5]
		const uintEs2HE3F = BigInt("224")
		const addressSkLvb70 = accounts[2]
		const addressJDG7t0B = accounts[0]
		const boolw0HVdf = await DatrixoEquityTokenW49c3Ah.removeShareholder.call(addresstZVtKVZ, {from: accounts[0]});
		const addressarrayTwYCCI = await DatrixoEquityTokenW49c3Ah.getShareholdersArray.call({from: accounts[4]});
		const boolPdpeBSL = await DatrixoEquityTokenW49c3Ah.transferFrom.call(addressJDG7t0B, addressSkLvb70, uintEs2HE3F, {from: accounts[0]});

		await expect(DatrixoEquityTokenW49c3Ah.removeShareholder.call(addresstZVtKVZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresshjXeN3H = accounts[3]
		const uintSLJ3FH = BigInt("1451")
		const DatrixoEquityToken4kPf1X = await DatrixoEquityToken.new(addresshjXeN3H, uintSLJ3FH, {from: "0x0000000000000000000000000000000000000001"});
		const addressnNGsPOx = accounts[3]
		const uintZcaxDuz = BigInt("1329")
		const addresseqUGeio = accounts[1]
		const uintZFEfSy4 = BigInt("126")
		const addressZ5x9Osn = "0x0000000000000000000000000000000000000001"
		const addressbroXNJz = accounts[0]
		const addressarrayx12j5po = await DatrixoEquityToken4kPf1X.getShareholdersArray.call({from: accounts[4]});
		const boolzRmsdYL = await DatrixoEquityToken4kPf1X.removeShareholder.call(addressnNGsPOx, {from: accounts[4]});
		const boolXzPjyNv = await DatrixoEquityToken4kPf1X.transfer.call(addresseqUGeio, uintZcaxDuz, {from: accounts[3]});
		const boolGA1pwxz = await DatrixoEquityToken4kPf1X.transferFrom.call(addressbroXNJz, addressZ5x9Osn, uintZFEfSy4, {from: accounts[3]});
		await DatrixoEquityToken4kPf1X.onlyOwner.call({from: accounts[5]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressStK8w7 = accounts[0]
		const uintSTNsAl4 = BigInt("669")
		const DatrixoEquityTokenW49c3Ah = await DatrixoEquityToken.new(addressStK8w7, uintSTNsAl4, {from: accounts[3]});
		const uintSwDnmTh = BigInt("224")
		const addressKdcfxv9 = accounts[1]
		const addresszPbsQpa = accounts[0]
		const uintHyBwQgr = BigInt("1582")
		const boolPdpeBSL = await DatrixoEquityTokenW49c3Ah.transferFrom.call(addresszPbsQpa, addressKdcfxv9, uintSwDnmTh, {from: accounts[0]});
		const uintBOdkMQR = await DatrixoEquityTokenW49c3Ah.setStart.call(uintHyBwQgr, {from: accounts[0]});

		assert.equal(boolPdpeBSL, true)
		await expect(DatrixoEquityTokenW49c3Ah.setStart.call(uintHyBwQgr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})