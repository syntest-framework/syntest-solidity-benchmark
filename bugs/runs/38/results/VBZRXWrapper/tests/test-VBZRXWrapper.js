const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractsJJZTp7 = await VBZRXWrapper.new({from: accounts[4]});
		const valuebAuJmty = BigInt("1269")
		const dstBOP3m4K = accounts[0]
		const nulliHRo3iz = await contractsJJZTp7.claim.call({from: accounts[2]});
		const nullzzwVhCT = await contractsJJZTp7.transfer.call(dstBOP3m4K, valuebAuJmty, {from: accounts[2]});

		assert.equal(nulliHRo3iz, 0)
		await expect(contractsJJZTp7.transfer.call(dstBOP3m4K, valuebAuJmty, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractmhjcNST = await VBZRXWrapper.new({from: accounts[4]});
		const valueul2comF = BigInt("454")
		const valuezfLhI6q = BigInt("166")
		const dstQqaVpF = "0x0000000000000000000000000000000000000001"
		const srcMv98wKw = "0x0000000000000000000000000000000000000001"
		const valueElLsyOz = BigInt("1802")
		const dstUjCWNSY = accounts[3]
		const srciaSpN0 = accounts[5]
		const accountiOuS90 = accounts[0]
		await contractmhjcNST.deposit.call(valueul2comF, {from: accounts[2]});
		const nullgq2Tr0B = await contractmhjcNST.transferFrom.call(srcMv98wKw, dstQqaVpF, valuezfLhI6q, {from: accounts[3]});
		const nullwBEctvz = await contractmhjcNST.transferFrom.call(srciaSpN0, dstUjCWNSY, valueElLsyOz, {from: accounts[4]});
		const nullyDD4E2D = await contractmhjcNST.claimable.call(accountiOuS90, {from: accounts[1]});
		await contractmhjcNST.exit.call({from: accounts[0]});

		await expect(contractmhjcNST.deposit.call(valueul2comF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contracts8jWEY6 = await VBZRXWrapper.new({from: accounts[4]});
		const valuexD5hCdZ = BigInt("532")
		const valueVnXBTrh = BigInt("1012")
		const valueosp9qzO = BigInt("350")
		const dstAzw1dcH = accounts[3]
		const srcJQOFbY8 = accounts[0]
		await contracts8jWEY6.withdraw.call(valuexD5hCdZ, {from: accounts[3]});
		await contracts8jWEY6.deposit.call(valueVnXBTrh, {from: accounts[1]});
		const nullwJC8dbO = await contracts8jWEY6.claim.call({from: accounts[2]});
		const nullONk4DMR = await contracts8jWEY6.claim.call({from: accounts[5]});
		const nullhVwHey6 = await contracts8jWEY6.claim.call({from: accounts[3]});
		const nullq5CEyRi = await contracts8jWEY6.transferFrom.call(srcJQOFbY8, dstAzw1dcH, valueosp9qzO, {from: accounts[2]});

		await expect(contracts8jWEY6.withdraw.call(valuexD5hCdZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractuz1QTh = await VBZRXWrapper.new({from: accounts[1]});
		const accountYFDhqXR = accounts[2]
		const valuexLP7Tr = BigInt("994")
		const dstUra8mGe = accounts[2]
		const nullZqVuvaM = await contractuz1QTh.claimable.call(accountYFDhqXR, {from: accounts[0]});
		const nullY1tJKm2 = await contractuz1QTh.transfer.call(dstUra8mGe, valuexLP7Tr, {from: accounts[4]});

		await expect(contractuz1QTh.claimable.call(accountYFDhqXR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractxQVtbaP = await VBZRXWrapper.new({from: accounts[2]});
		const valueF1GDz7T = BigInt("486")
		const dstwIvSp06 = accounts[1]
		await contractxQVtbaP.exit.call({from: accounts[5]});
		await contractxQVtbaP.exit.call({from: accounts[2]});
		await contractxQVtbaP.exit.call({from: accounts[2]});
		const nullx4V0ecR = await contractxQVtbaP.transfer.call(dstwIvSp06, valueF1GDz7T, {from: accounts[5]});

		await expect(contractxQVtbaP.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contract8xQlss = await VBZRXWrapper.new({from: accounts[4]});
		const valuemH5iuj9 = BigInt("1819")
		const spenderh5cFsa = accounts[3]
		const valueWiUEqLC = BigInt("1269")
		const dstdcuK8KB = accounts[0]
		const nulljzooL3 = await contract8xQlss.claim.call({from: accounts[1]});
		const nullAQzNYeT = await contract8xQlss.claim.call({from: accounts[2]});
		const nullaa9jXJS = await contract8xQlss.approve.call(spenderh5cFsa, valuemH5iuj9, {from: accounts[0]});
		const nullwUrkM4t = await contract8xQlss.claim.call({from: accounts[3]});
		const nullFtFUH7f = await contract8xQlss.transfer.call(dstdcuK8KB, valueWiUEqLC, {from: accounts[2]});

		assert.equal(nullAQzNYeT, 0)
		assert.equal(nullaa9jXJS, true)
		assert.equal(nulljzooL3, 0)
		assert.equal(nullwUrkM4t, 0)
		await expect(contract8xQlss.transfer.call(dstdcuK8KB, valueWiUEqLC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractVdcfXux = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const accountGp3jRGn = accounts[1]
		const valueZOnzcm4 = BigInt("1580")
		const spenderIULos3t = accounts[0]
		const nully0vSaCU = await contractVdcfXux.claimable.call(accountGp3jRGn, {from: accounts[1]});
		await contractVdcfXux.exit.call({from: accounts[0]});
		const nullyqnHEo8 = await contractVdcfXux.approve.call(spenderIULos3t, valueZOnzcm4, {from: accounts[2]});
	});
})