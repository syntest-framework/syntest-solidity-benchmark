const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractluIKmKG = await IUSDT.new({from: accounts[3]});
		const amountLkGTJiX = BigInt("880")
		const recipientsqWA4FY = accounts[5]
		const sendervwKfs5b = accounts[3]
		const accountXWuHzKa = accounts[4]
		const amountshuFE38 = BigInt("898")
		const recipientX8SgTm = accounts[0]
		const senderkaULxqy = "0x0000000000000000000000000000000000000001"
		const amountuL5dbdY = BigInt("522")
		const recipientF0qGq9 = accounts[4]
		const amountjaTbBiJ = BigInt("175")
		const recipientLD3NiV4 = accounts[0]
		await contractluIKmKG.transferFrom.call(sendervwKfs5b, recipientsqWA4FY, amountLkGTJiX, {from: accounts[5]});
		const nullIF5HALu = await contractluIKmKG.balanceOf.call(accountXWuHzKa, {from: "0x0000000000000000000000000000000000000001"});
		await contractluIKmKG.transferFrom.call(senderkaULxqy, recipientX8SgTm, amountshuFE38, {from: accounts[4]});
		await contractluIKmKG.transfer.call(recipientF0qGq9, amountuL5dbdY, {from: accounts[4]});
		await contractluIKmKG.transfer.call(recipientLD3NiV4, amountjaTbBiJ, {from: accounts[3]});
	});
})