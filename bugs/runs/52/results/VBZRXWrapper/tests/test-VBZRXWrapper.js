const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractqFedfx = await VBZRXWrapper.new({from: accounts[1]});
		const valueigP0aqM = BigInt("845")
		const dstUsaFdoq = accounts[3]
		const srcYYpOMGc = accounts[3]
		const valueEbEHrT9 = BigInt("1677")
		const dstizuMaaV = accounts[3]
		const valueK4LXEbc = BigInt("1356")
		const spenderj0yFWRZ = accounts[1]
		await contractqFedfx.exit.call({from: accounts[5]});
		const nullGsu3dbc = await contractqFedfx.transferFrom.call(srcYYpOMGc, dstUsaFdoq, valueigP0aqM, {from: accounts[0]});
		const nullXCHmUIC = await contractqFedfx.transfer.call(dstizuMaaV, valueEbEHrT9, {from: accounts[3]});
		const nullRn4gCPk = await contractqFedfx.approve.call(spenderj0yFWRZ, valueK4LXEbc, {from: accounts[5]});

		await expect(contractqFedfx.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractqv6U9zB = await VBZRXWrapper.new({from: accounts[1]});
		const valueZGRJThr = BigInt("677")
		const valuewSWxkXz = BigInt("866")
		const nulljDovvUH = await contractqv6U9zB.claim.call({from: accounts[1]});
		await contractqv6U9zB.withdraw.call(valueZGRJThr, {from: "0x0000000000000000000000000000000000000001"});
		await contractqv6U9zB.deposit.call(valuewSWxkXz, {from: accounts[2]});

		assert.equal(nulljDovvUH, 0)
		await expect(contractqv6U9zB.withdraw.call(valueZGRJThr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractjevgrT = await VBZRXWrapper.new({from: accounts[3]});
		const accountfGK6yNC = accounts[1]
		const valuexQwXWnD = BigInt("75")
		const dst2jZ1gB = accounts[5]
		const srcFDdwDG = accounts[3]
		const nullBnXMK17 = await contractjevgrT.claim.call({from: accounts[4]});
		const nullAJzM3Cp = await contractjevgrT.claimable.call(accountfGK6yNC, {from: accounts[0]});
		const nullgen2cGf = await contractjevgrT.transferFrom.call(srcFDdwDG, dst2jZ1gB, valuexQwXWnD, {from: accounts[2]});

		assert.equal(nullBnXMK17, 0)
		await expect(contractjevgrT.claimable.call(accountfGK6yNC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractSTVWdsT = await VBZRXWrapper.new({from: accounts[1]});
		const valueJLgZkR = BigInt("1921")
		const valuesItjAJ = BigInt("1462")
		const spenderosgmKee = accounts[0]
		const valueDYhjvZi = BigInt("856")
		const spenderlwJbuSp = accounts[5]
		await contractSTVWdsT.deposit.call(valueJLgZkR, {from: accounts[3]});
		const nullHbg328i = await contractSTVWdsT.approve.call(spenderosgmKee, valuesItjAJ, {from: accounts[1]});
		const nulljNTxXje = await contractSTVWdsT.approve.call(spenderlwJbuSp, valueDYhjvZi, {from: accounts[1]});

		await expect(contractSTVWdsT.deposit.call(valueJLgZkR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractEPJ5qr = await VBZRXWrapper.new({from: accounts[0]});
		const valueguUJ6A0 = BigInt("457")
		const dstCZw3nh6 = accounts[2]
		const accountiX1A95p = "0x0000000000000000000000000000000000000001"
		const valueRNhAgPV = BigInt("1911")
		const dstr154I7H = accounts[4]
		const srcXWxTOo = accounts[0]
		const valueug4OWL8 = BigInt("446")
		const dstembCwcq = accounts[0]
		const src1VQb38 = accounts[4]
		const valuekHPuMMA = BigInt("530")
		const spenderYX6Csyp = accounts[2]
		const nullakosEXH = await contractEPJ5qr.transfer.call(dstCZw3nh6, valueguUJ6A0, {from: accounts[0]});
		const nullbkBJQHj = await contractEPJ5qr.claimable.call(accountiX1A95p, {from: accounts[2]});
		const nullnf1LGNd = await contractEPJ5qr.transferFrom.call(srcXWxTOo, dstr154I7H, valueRNhAgPV, {from: "0x0000000000000000000000000000000000000001"});
		const nullFJlfPP3 = await contractEPJ5qr.transferFrom.call(src1VQb38, dstembCwcq, valueug4OWL8, {from: accounts[5]});
		const nullj8ttNsl = await contractEPJ5qr.approve.call(spenderYX6Csyp, valuekHPuMMA, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractEPJ5qr.transfer.call(dstCZw3nh6, valueguUJ6A0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractm78kvhK = await VBZRXWrapper.new({from: accounts[1]});
		const valueCaGWPQh = BigInt("1605")
		const spendervY5wjTP = accounts[4]
		const valuetnWTtyt = BigInt("182")
		const null4fuTeP = await contractm78kvhK.approve.call(spendervY5wjTP, valueCaGWPQh, {from: accounts[0]});
		await contractm78kvhK.withdraw.call(valuetnWTtyt, {from: accounts[0]});
		const nullJFN2r5O = await contractm78kvhK.claim.call({from: accounts[1]});
		await contractm78kvhK.exit.call({from: accounts[3]});
		const nullr2RVXie = await contractm78kvhK.claim.call({from: accounts[2]});

		assert.equal(null4fuTeP, true)
		await expect(contractm78kvhK.withdraw.call(valuetnWTtyt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractmBDXgv = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const accountzqlGJgi = accounts[1]
		const valueMgmkud6 = BigInt("826")
		const spenderS5FO7Eb = accounts[3]
		const valueaexpw7R = BigInt("1913")
		const dstdLGyUt8 = accounts[4]
		const srcMEZgtU = accounts[2]
		const valuep3qBDyV = BigInt("240")
		const spenderZyFpq6 = accounts[0]
		const accountKZcWvvr = accounts[0]
		const nulliaEs4Se = await contractmBDXgv.claimable.call(accountzqlGJgi, {from: accounts[0]});
		await contractmBDXgv.exit.call({from: accounts[4]});
		const nullg1SuoZ = await contractmBDXgv.approve.call(spenderS5FO7Eb, valueMgmkud6, {from: accounts[0]});
		const nullElAdXvo = await contractmBDXgv.transferFrom.call(srcMEZgtU, dstdLGyUt8, valueaexpw7R, {from: accounts[0]});
		const nullloFUri5 = await contractmBDXgv.approve.call(spenderZyFpq6, valuep3qBDyV, {from: accounts[0]});
		const nullw28FVa = await contractmBDXgv.claimable.call(accountKZcWvvr, {from: accounts[4]});
	});
})