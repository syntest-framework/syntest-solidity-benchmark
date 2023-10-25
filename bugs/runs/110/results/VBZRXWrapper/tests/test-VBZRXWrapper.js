const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractCXdiT9E = await VBZRXWrapper.new({from: accounts[3]});
		const valueRv7vdUt = BigInt("1583")
		const dstNEWpsrw = accounts[0]
		const srcOCcDbix = accounts[1]
		const valueWQTJu3 = BigInt("1951")
		const valuewX3JHg2 = BigInt("1416")
		const valueeYJ8IL8 = BigInt("1858")
		const nullm9ji08A = await contractCXdiT9E.transferFrom.call(srcOCcDbix, dstNEWpsrw, valueRv7vdUt, {from: accounts[4]});
		await contractCXdiT9E.deposit.call(valueWQTJu3, {from: accounts[0]});
		await contractCXdiT9E.withdraw.call(valuewX3JHg2, {from: accounts[2]});
		await contractCXdiT9E.deposit.call(valueeYJ8IL8, {from: accounts[2]});

		await expect(contractCXdiT9E.transferFrom.call(srcOCcDbix, dstNEWpsrw, valueRv7vdUt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractW9md8vA = await VBZRXWrapper.new({from: accounts[4]});
		const valuegq6Ev6y = BigInt("407")
		const valueCz9k6yD = BigInt("337")
		const values8i9wh = BigInt("1147")
		const dstAEB2rfd = accounts[5]
		const srcwfJ7Xz = "0x0000000000000000000000000000000000000001"
		await contractW9md8vA.deposit.call(valuegq6Ev6y, {from: accounts[3]});
		await contractW9md8vA.withdraw.call(valueCz9k6yD, {from: accounts[1]});
		const nullMDpAYFN = await contractW9md8vA.transferFrom.call(srcwfJ7Xz, dstAEB2rfd, values8i9wh, {from: accounts[1]});
		const nullImtAJfy = await contractW9md8vA.claim.call({from: accounts[4]});

		await expect(contractW9md8vA.deposit.call(valuegq6Ev6y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractSZ5bGpI = await VBZRXWrapper.new({from: accounts[4]});
		const valueztedVbO = BigInt("462")
		const valuef3BTWgM = BigInt("565")
		const dstt3TydYS = accounts[2]
		const srcFFtdpOI = accounts[4]
		const valueoUx2Wan = BigInt("1999")
		await contractSZ5bGpI.exit.call({from: accounts[3]});
		await contractSZ5bGpI.exit.call({from: accounts[4]});
		const nullidSJHN3 = await contractSZ5bGpI.claim.call({from: accounts[4]});
		await contractSZ5bGpI.deposit.call(valueztedVbO, {from: accounts[4]});
		const nullbkdWEHc = await contractSZ5bGpI.transferFrom.call(srcFFtdpOI, dstt3TydYS, valuef3BTWgM, {from: accounts[1]});
		await contractSZ5bGpI.deposit.call(valueoUx2Wan, {from: accounts[5]});

		await expect(contractSZ5bGpI.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractt5xjGX7 = await VBZRXWrapper.new({from: accounts[4]});
		const accountnWlsDUl = accounts[1]
		const nullIVfZQYz = await contractt5xjGX7.claimable.call(accountnWlsDUl, {from: accounts[2]});
		await contractt5xjGX7.exit.call({from: accounts[2]});
		const null8zkYFC = await contractt5xjGX7.claim.call({from: accounts[0]});

		await expect(contractt5xjGX7.claimable.call(accountnWlsDUl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractc5yVeEW = await VBZRXWrapper.new({from: accounts[1]});
		const valuehzJeNsK = BigInt("980")
		const dstPZA4Cbq = accounts[2]
		const valuei3o0kf = BigInt("1023")
		const valuecWMwbI6 = BigInt("57")
		const nullRxkTxK = await contractc5yVeEW.claim.call({from: accounts[0]});
		const nullnTr7iCQ = await contractc5yVeEW.transfer.call(dstPZA4Cbq, valuehzJeNsK, {from: accounts[2]});
		await contractc5yVeEW.deposit.call(valuei3o0kf, {from: accounts[2]});
		const nullyFRcoqc = await contractc5yVeEW.claim.call({from: accounts[4]});
		await contractc5yVeEW.deposit.call(valuecWMwbI6, {from: accounts[1]});

		assert.equal(nullRxkTxK, 0)
		await expect(contractc5yVeEW.transfer.call(dstPZA4Cbq, valuehzJeNsK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractaJPeA0Z = await VBZRXWrapper.new({from: accounts[0]});
		const valueuvDTCA3 = BigInt("1915")
		const spenderqMPa25Z = accounts[4]
		const valueReN2DCh = BigInt("627")
		const dsthuHmGTZ = accounts[5]
		const srccV01X69 = accounts[2]
		const valuecvXuJJZ = BigInt("1482")
		const spenderLVLcmWX = accounts[6]
		const valuesf2Agd = BigInt("980")
		const valueKnbpGjX = BigInt("1465")
		const dstEUx0tfs = accounts[3]
		const srccGciKJZ = accounts[4]
		const nullgNdcQRX = await contractaJPeA0Z.approve.call(spenderqMPa25Z, valueuvDTCA3, {from: accounts[2]});
		const nullE1aIB3k = await contractaJPeA0Z.transferFrom.call(srccV01X69, dsthuHmGTZ, valueReN2DCh, {from: "0x0000000000000000000000000000000000000001"});
		const nullc4aeaoZ = await contractaJPeA0Z.approve.call(spenderLVLcmWX, valuecvXuJJZ, {from: accounts[1]});
		await contractaJPeA0Z.exit.call({from: accounts[3]});
		await contractaJPeA0Z.exit.call({from: accounts[2]});
		await contractaJPeA0Z.deposit.call(valuesf2Agd, {from: accounts[3]});
		const nullg7kRv9 = await contractaJPeA0Z.transferFrom.call(srccGciKJZ, dstEUx0tfs, valueKnbpGjX, {from: accounts[4]});

		assert.equal(nullgNdcQRX, true)
		await expect(contractaJPeA0Z.transferFrom.call(srccV01X69, dsthuHmGTZ, valueReN2DCh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractveNbLQ0 = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valuetACOBtN = BigInt("1915")
		const dstlEU7w9d = accounts[3]
		const valueosM0EqK = BigInt("216")
		const spendercZMFVL5 = accounts[4]
		const accountdfyXaJm = accounts[3]
		const nullIoxKmu8 = await contractveNbLQ0.transfer.call(dstlEU7w9d, valuetACOBtN, {from: accounts[5]});
		const nullCpMfZxj = await contractveNbLQ0.approve.call(spendercZMFVL5, valueosM0EqK, {from: accounts[4]});
		const nullDK2gTAm = await contractveNbLQ0.claimable.call(accountdfyXaJm, {from: accounts[2]});
	});
})