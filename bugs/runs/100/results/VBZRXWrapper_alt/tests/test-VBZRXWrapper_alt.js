const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractnmjk9Im = await VBZRXWrapper_alt.new({from: accounts[3]});
		const value4UnL97 = BigInt("904")
		const dstd0UjoF = accounts[3]
		const srcGmYt8o = accounts[3]
		const valuec8XOPXi = BigInt("524")
		const nullP8OSkaJ = await contractnmjk9Im.claim.call({from: accounts[1]});
		const nullERhwy42 = await contractnmjk9Im.transferFrom.call(srcGmYt8o, dstd0UjoF, value4UnL97, {from: accounts[2]});
		await contractnmjk9Im.deposit.call(valuec8XOPXi, {from: accounts[2]});
		await contractnmjk9Im.exit.call({from: accounts[3]});

		assert.equal(nullP8OSkaJ, 0)
		await expect(contractnmjk9Im.transferFrom.call(srcGmYt8o, dstd0UjoF, value4UnL97, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractuYhBde = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valuee2S8bE = BigInt("438")
		const accountjhvVG7l = accounts[3]
		const valuejEt5ojL = BigInt("920")
		const spenderSpn9SfL = accounts[4]
		const valuejVUPzh0 = BigInt("782")
		const dstDsSyzGC = accounts[2]
		const srcIPS3A3Q = accounts[0]
		await contractuYhBde.withdraw.call(valuee2S8bE, {from: accounts[5]});
		const nulllZd3bwL = await contractuYhBde.claimable.call(accountjhvVG7l, {from: accounts[3]});
		const nullNZblNXt = await contractuYhBde.approve.call(spenderSpn9SfL, valuejEt5ojL, {from: "0x0000000000000000000000000000000000000001"});
		const nullbagktPw = await contractuYhBde.transferFrom.call(srcIPS3A3Q, dstDsSyzGC, valuejVUPzh0, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractuYhBde.withdraw.call(valuee2S8bE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractRTIAX8y = await VBZRXWrapper_alt.new({from: accounts[2]});
		const value4zOrq6 = BigInt("1373")
		const spenderdGyOZiQ = accounts[5]
		const valueuAIwwIw = BigInt("249")
		const spender2LkAsl = accounts[4]
		const nullOzefOR2 = await contractRTIAX8y.claim.call({from: "0x0000000000000000000000000000000000000001"});
		const nullOxunPfQ = await contractRTIAX8y.approve.call(spenderdGyOZiQ, value4zOrq6, {from: accounts[2]});
		const nulli7O7TE7 = await contractRTIAX8y.approve.call(spender2LkAsl, valueuAIwwIw, {from: accounts[4]});

		assert.equal(nullOxunPfQ, true)
		assert.equal(nullOzefOR2, 0)
		assert.equal(nulli7O7TE7, true)
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractPhjwZ0F = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valueo6vEMy7 = BigInt("1848")
		const valueTJhp1ye = BigInt("2038")
		const spenderxKr5zU = accounts[0]
		await contractPhjwZ0F.deposit.call(valueo6vEMy7, {from: accounts[4]});
		const nullvgwl9i6 = await contractPhjwZ0F.approve.call(spenderxKr5zU, valueTJhp1ye, {from: accounts[4]});

		await expect(contractPhjwZ0F.deposit.call(valueo6vEMy7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractVOPZ83k = await VBZRXWrapper_alt.new({from: accounts[0]});
		const accountmVdBnt3 = accounts[1]
		const value2OU4G7 = BigInt("34")
		const nullB7gb4Tz = await contractVOPZ83k.claimable.call(accountmVdBnt3, {from: accounts[4]});
		await contractVOPZ83k.deposit.call(value2OU4G7, {from: accounts[5]});

		assert.equal(nullB7gb4Tz, 0)
		await expect(contractVOPZ83k.deposit.call(value2OU4G7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractuiHrppZ = await VBZRXWrapper_alt.new({from: accounts[1]});
		await contractuiHrppZ.exit.call({from: accounts[5]});
		const nullWn8odZi = await contractuiHrppZ.claim.call({from: accounts[0]});

		await expect(contractuiHrppZ.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractiGyalfb = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valuejx5rTW = BigInt("387")
		const spenderhJv0pbX = accounts[4]
		const toggleIIa1x98 = true
		const addrd4eEgYm = accounts[2]
		const toggleHf3D5kn = false
		const addrAxU0aBC = accounts[4]
		const nullbjqgTV = await contractiGyalfb.approve.call(spenderhJv0pbX, valuejx5rTW, {from: accounts[1]});
		await contractiGyalfb.setBridge.call(addrd4eEgYm, toggleIIa1x98, {from: accounts[5]});
		await contractiGyalfb.setBridge.call(addrAxU0aBC, toggleHf3D5kn, {from: accounts[1]});
		await contractiGyalfb.exit.call({from: accounts[2]});

		assert.equal(nullbjqgTV, true)
		await expect(contractiGyalfb.setBridge.call(addrd4eEgYm, toggleIIa1x98, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractDxcPMIk = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valueZT4Kes9 = BigInt("1683")
		const dstUusqcCX = accounts[4]
		const valueFFY2kAH = BigInt("1630")
		const spenderZ50r5He = accounts[3]
		const valueIJwmyC = BigInt("259")
		const dstRMAJK7h = accounts[3]
		const srcY4pPnRa = accounts[5]
		const valueNpMBw7O = BigInt("72")
		const dstCx5mwEy = accounts[1]
		const srclcOiJya = "0x0000000000000000000000000000000000000001"
		const nullKhbKrqt = await contractDxcPMIk.transfer.call(dstUusqcCX, valueZT4Kes9, {from: accounts[2]});
		const nullc96CTmy = await contractDxcPMIk.approve.call(spenderZ50r5He, valueFFY2kAH, {from: accounts[2]});
		const nullq3GTkxo = await contractDxcPMIk.transferFrom.call(srcY4pPnRa, dstRMAJK7h, valueIJwmyC, {from: accounts[4]});
		const nullWNDptBm = await contractDxcPMIk.transferFrom.call(srclcOiJya, dstCx5mwEy, valueNpMBw7O, {from: accounts[0]});
		await contractDxcPMIk.exit.call({from: accounts[4]});

		await expect(contractDxcPMIk.transfer.call(dstUusqcCX, valueZT4Kes9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractPA7ZzqN = await VBZRXWrapper_alt.new({from: accounts[4]});
		const accountcGIWmre = "0x00000000000000000000000000000000000000-1"
		const valuenmMztea = BigInt("529")
		const valuer1XnXSN = BigInt("553")
		const spenderJiIXZz6 = accounts[3]
		const accountmirMLU0 = accounts[5]
		const valueLaEWNsO = BigInt("842")
		const dstFRPYkVA = accounts[0]
		const srcaEf3sxI = accounts[4]
		const valuenQuI6gM = BigInt("629")
		const accountuu7FbRh = accounts[2]
		const accountl3HbbtZ = accounts[2]
		const valueCTcqeJm = BigInt("400")
		const dsthBnKis5 = accounts[3]
		const srcixZZbur = accounts[4]
		const nullf91JMEQ = await contractPA7ZzqN.claimable.call(accountcGIWmre, {from: accounts[5]});
		await contractPA7ZzqN.withdraw.call(valuenmMztea, {from: accounts[4]});
		const nullY9wv7F = await contractPA7ZzqN.claim.call({from: accounts[4]});
		const nullpW3LSUZ = await contractPA7ZzqN.approve.call(spenderJiIXZz6, valuer1XnXSN, {from: accounts[3]});
		const nullTQdc2dR = await contractPA7ZzqN.claimable.call(accountmirMLU0, {from: accounts[2]});
		const nulllRN0xmW = await contractPA7ZzqN.transferFrom.call(srcaEf3sxI, dstFRPYkVA, valueLaEWNsO, {from: "0x0000000000000000000000000000000000000001"});
		await contractPA7ZzqN.withdraw.call(valuenQuI6gM, {from: accounts[2]});
		const nulljpFUr5x = await contractPA7ZzqN.claimable.call(accountuu7FbRh, {from: accounts[3]});
		const nullauOkNt = await contractPA7ZzqN.claimable.call(accountl3HbbtZ, {from: accounts[5]});
		const nullv8JFY9E = await contractPA7ZzqN.transferFrom.call(srcixZZbur, dsthBnKis5, valueCTcqeJm, {from: accounts[0]});

		await expect(contractPA7ZzqN.claimable.call(accountcGIWmre, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractcMirLsV = await VBZRXWrapper_alt.new({from: accounts[4]});
		const accountd1f1iRA = "0x0000000000000000000000000000000000000001"
		const valueYTqvFL0 = BigInt("553")
		const spenderwv6Ay9O = accounts[3]
		const toggleViTFRDz = true
		const addro4dhdUx = accounts[1]
		const accountdCWdLq = accounts[5]
		const valueNAUYWhf = BigInt("842")
		const dstccIqkOL = accounts[1]
		const srcph1FVI = accounts[4]
		const valueuZQTJ5i = BigInt("629")
		const nullGvwkJbH = await contractcMirLsV.claimable.call(accountd1f1iRA, {from: accounts[5]});
		const nullxoGPYcV = await contractcMirLsV.approve.call(spenderwv6Ay9O, valueYTqvFL0, {from: accounts[3]});
		await contractcMirLsV.setBridge.call(addro4dhdUx, toggleViTFRDz, {from: accounts[4]});
		const nullwp9W31v = await contractcMirLsV.claimable.call(accountdCWdLq, {from: accounts[2]});
		const nullk2pA1dJ = await contractcMirLsV.transferFrom.call(srcph1FVI, dstccIqkOL, valueNAUYWhf, {from: "0x0000000000000000000000000000000000000001"});
		await contractcMirLsV.withdraw.call(valueuZQTJ5i, {from: accounts[2]});

		assert.equal(nullGvwkJbH, 0)
		assert.equal(nullwp9W31v, 0)
		assert.equal(nullxoGPYcV, true)
		await expect(contractcMirLsV.claimable.call(accountdCWdLq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contract80ei4c = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valueubKc5Qm = BigInt("1328")
		const nullmNYAX2s = await contract80ei4c.claim.call({from: accounts[1]});
		const nullUguBLGk = await contract80ei4c.claim.call({from: accounts[0]});
		await contract80ei4c.exit.call({from: accounts[2]});
		await contract80ei4c.deposit.call(valueubKc5Qm, {from: accounts[1]});
	});
})