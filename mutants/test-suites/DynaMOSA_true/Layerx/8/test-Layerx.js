const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressSJcoLjR = accounts[3]
		const LayerxtymHWUc = await Layerx.new(addressSJcoLjR, {from: accounts[5]});
		const addressWxxBBz1 = accounts[0]
		const uintCHPTaNu = BigInt("536")
		const addressnos4fvk = accounts[1]
		const uintTRqLOnE = await LayerxtymHWUc.balanceOf.call(addressWxxBBz1, {from: accounts[0]});
//		const booljdHnH6v = await LayerxtymHWUc.transfer.call(addressnos4fvk, uintCHPTaNu, {from: accounts[1]});

		assert.equal(uintTRqLOnE, BigInt("0"))
		await expect(LayerxtymHWUc.transfer.call(addressnos4fvk, uintCHPTaNu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressP2X60do = accounts[3]
		const LayerxpeUkYWa = await Layerx.new(addressP2X60do, {from: accounts[2]});
		const addressWKQdXeT = accounts[1]
		const uintccntCxc = BigInt("399")
		const addressWhDeuy3 = accounts[0]
//		const addressCbDt9W8 = await LayerxpeUkYWa.transferOwnership.call(addressWKQdXeT, {from: accounts[4]});
//		const booljrnu4u = await LayerxpeUkYWa.approve.call(addressWhDeuy3, uintccntCxc, {from: accounts[2]});

		await expect(LayerxpeUkYWa.transferOwnership.call(addressWKQdXeT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresstNiclq = accounts[2]
		const LayerxOyYrfjE = await Layerx.new(addresstNiclq, {from: "0x0000000000000000000000000000000000000001"});
		const uintpzoVQY = BigInt("1067")
		const addressZOuFebL = accounts[2]
		const uintkzEtdP = BigInt("705")
		const boolSSBIoL = await LayerxOyYrfjE.approve.call(addressZOuFebL, uintpzoVQY, {from: accounts[0]});
		const uintq0ux2It = await LayerxOyYrfjE.withdraw.call(uintkzEtdP, {from: accounts[4]});
		await LayerxOyYrfjE.paused.call({from: accounts[1]});
	});

	it('test for Layerx', async () => {
		const addressrUS4KqN = "0x0000000000000000000000000000000000000001"
		const Layerxk12khr8 = await Layerx.new(addressrUS4KqN, {from: accounts[3]});
		const uintnq4aX3k = BigInt("1727")
		const uintFHqA9Qa = BigInt("1780")
//		const uintAE5zIQ = await Layerxk12khr8.withdraw.call(uintnq4aX3k, {from: accounts[0]});
//		const uint256D6UaaJK = await Layerxk12khr8.burn.call(uintFHqA9Qa, {from: accounts[2]});

		await expect(Layerxk12khr8.withdraw.call(uintnq4aX3k, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressL24Xlkn = accounts[5]
		const LayerxdVm43G2 = await Layerx.new(addressL24Xlkn, {from: accounts[3]});
		const addressK00onQa = accounts[0]
		const addressotMMJNq = accounts[0]
		const uintlm9Pdwg = BigInt("1073")
		const addressDhNGoWE = accounts[4]
		const addressq5rHIPy = accounts[0]
		const uintiifikD = await LayerxdVm43G2.allowance.call(addressotMMJNq, addressK00onQa, {from: accounts[3]});
//		const boolOMRQ6K = await LayerxdVm43G2.transferFrom.call(addressq5rHIPy, addressDhNGoWE, uintlm9Pdwg, {from: accounts[0]});

		assert.equal(uintiifikD, BigInt("0"))
		await expect(LayerxdVm43G2.transferFrom.call(addressq5rHIPy, addressDhNGoWE, uintlm9Pdwg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressnFHtlMR = accounts[4]
		const Layerxvkq5FTc = await Layerx.new(addressnFHtlMR, {from: accounts[2]});
		const uintIAsfkIC = BigInt("781")
		const addressE8rJ2Ub = accounts[3]
//		await Layerxvkq5FTc.unlock.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintIkYlWOy = await Layerxvkq5FTc.getStakesNum.call({from: accounts[3]});
//		const boolHmmcwz = await Layerxvkq5FTc.approve.call(addressE8rJ2Ub, uintIAsfkIC, {from: accounts[3]});

		await expect(Layerxvkq5FTc.unlock.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressuir1Pcd = "0x0000000000000000000000000000000000000001"
		const LayerxJYY2bc = await Layerx.new(addressuir1Pcd, {from: accounts[5]});
		const uintuvxkJ1E = BigInt("436")
		const uint9FYAwS = BigInt("612")
//		const uintsnD0rPz = await LayerxJYY2bc.lock.call(uintuvxkJ1E, {from: accounts[3]});
//		const uintg9YlOTH = await LayerxJYY2bc.lock.call(uint9FYAwS, {from: accounts[1]});

		await expect(LayerxJYY2bc.lock.call(uintuvxkJ1E, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressVTX3UsF = accounts[5]
		const LayerxdVm43G2 = await Layerx.new(addressVTX3UsF, {from: accounts[3]});
		const addressmMKx3G = accounts[0]
		const addressrSgXt8b = accounts[0]
		const uintXZtSGQx = BigInt("1073")
		const addressclusTt8 = accounts[5]
		const addressohLrjnO = accounts[0]
		const uintiifikD = await LayerxdVm43G2.allowance.call(addressrSgXt8b, addressmMKx3G, {from: accounts[3]});
		const uinttbyDICj = await LayerxdVm43G2.getStakesNum.call({from: accounts[3]});
//		await LayerxdVm43G2.onlyOwner.call({from: accounts[1]});
//		const boolOMRQ6K = await LayerxdVm43G2.transferFrom.call(addressohLrjnO, addressclusTt8, uintXZtSGQx, {from: accounts[0]});

		assert.equal(uintiifikD, BigInt("0"))
		assert.equal(uinttbyDICj, BigInt("1"))
		await expect(LayerxdVm43G2.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressJ2Bdf88 = accounts[2]
		const LayerxgrHSJF9 = await Layerx.new(addressJ2Bdf88, {from: accounts[0]});
		const uintZGJoq2d = BigInt("382")
		const addressKTcSw4Y = accounts[1]
		const uintG0t9PQ0 = BigInt("601")
		const addressWeGekwn = accounts[0]
		const uintaEP0of = BigInt("1248")
		const addressIp1EJud = accounts[2]
		const uintE1KAXM = BigInt("1138")
		const boolduWzCLQ = await LayerxgrHSJF9.approve.call(addressKTcSw4Y, uintZGJoq2d, {from: accounts[3]});
//		const uint256s5jPcvC = await LayerxgrHSJF9.burn.call(uintG0t9PQ0, {from: accounts[0]});
//		const addressIIimxXc = await LayerxgrHSJF9.setNewStakeCreator.call(addressWeGekwn, {from: accounts[2]});
//		await LayerxgrHSJF9.f.call({from: accounts[5]});
//		const booltRFBaFG = await LayerxgrHSJF9.transfer.call(addressIp1EJud, uintaEP0of, {from: accounts[3]});
//		const uint256qfHWHAt = await LayerxgrHSJF9.burn.call(uintE1KAXM, {from: accounts[0]});

		assert.equal(boolduWzCLQ, true)
		await expect(LayerxgrHSJF9.burn.call(uintG0t9PQ0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressLWftzl2 = accounts[3]
		const LayerxtymHWUc = await Layerx.new(addressLWftzl2, {from: accounts[5]});
		const addressyImKWFu = accounts[6]
		const uintMeyaqoB = BigInt("536")
		const addressO2kECc6 = accounts[1]
		const uintJSUjTEo = await LayerxtymHWUc.totalSupply.call({from: accounts[0]});
		const uintTRqLOnE = await LayerxtymHWUc.balanceOf.call(addressyImKWFu, {from: accounts[0]});
//		const booljdHnH6v = await LayerxtymHWUc.transfer.call(addressO2kECc6, uintMeyaqoB, {from: accounts[1]});

		assert.equal(uintJSUjTEo, BigInt("40000000000000000000000"))
		assert.equal(uintTRqLOnE, BigInt("0"))
		await expect(LayerxtymHWUc.transfer.call(addressO2kECc6, uintMeyaqoB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressIBhKQnC = accounts[5]
		const LayerxdVm43G2 = await Layerx.new(addressIBhKQnC, {from: accounts[3]});
		const addressrzysfsj = accounts[0]
		const uintkPOcRcX = BigInt("1359")
		const addressuJpkZdC = accounts[3]
		const uintAzEg7A = BigInt("1073")
		const addressTXoueMz = accounts[5]
		const addressxug115G = accounts[0]
		const addressjh6KeM9 = await LayerxdVm43G2.transferOwnership.call(addressrzysfsj, {from: accounts[5]});
//		await LayerxdVm43G2.f.call({from: accounts[5]});
//		const boolVtIYy6m = await LayerxdVm43G2.approve.call(addressuJpkZdC, uintkPOcRcX, {from: accounts[0]});
//		const boolOMRQ6K = await LayerxdVm43G2.transferFrom.call(addressxug115G, addressTXoueMz, uintAzEg7A, {from: accounts[0]});

		await expect(LayerxdVm43G2.f.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressy9o4SAK = accounts[5]
		const LayerxdVm43G2 = await Layerx.new(addressy9o4SAK, {from: accounts[3]});
		const byteXTQh4He = "0x0714120406"
		const uintY98Pne6 = BigInt("577")
		const addressy5b14A = "0x0000000000000000000000000000000000000001"
		const uintcj7ewre = BigInt("1063")
		const addresshybayp = accounts[4]
		const addresse3hE6sy = accounts[0]
//		const boolnw1BEhZ = await LayerxdVm43G2.approveAndCall.call(addressy5b14A, uintY98Pne6, byteXTQh4He, {from: accounts[4]});
//		const boolOMRQ6K = await LayerxdVm43G2.transferFrom.call(addresse3hE6sy, addresshybayp, uintcj7ewre, {from: accounts[0]});

		await expect(LayerxdVm43G2.approveAndCall.call(addressy5b14A, uintY98Pne6, byteXTQh4He, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressfbbT532 = accounts[4]
		const Layerxvkq5FTc = await Layerx.new(addressfbbT532, {from: accounts[2]});
		const uintPm6D0gz = BigInt("781")
		const addressX8weAm5 = accounts[2]
		const addressDoe27Xy = accounts[1]
		const bytec64T256 = "0x18061d0c1112120a08030414"
		const uintyDm08qI = BigInt("768")
		const addressKynj5kG = accounts[3]
//		await Layerxvkq5FTc.addStakePayment.call({from: accounts[4]});
//		const boolHmmcwz = await Layerxvkq5FTc.approve.call(addressX8weAm5, uintPm6D0gz, {from: accounts[3]});
//		const addressRODMrtL = await Layerxvkq5FTc.setNewStakeCreator.call(addressDoe27Xy, {from: accounts[4]});
//		const boola8UZMEb = await Layerxvkq5FTc.approveAndCall.call(addressKynj5kG, uintyDm08qI, bytec64T256, {from: accounts[4]});

		await expect(Layerxvkq5FTc.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresssZCRMy4 = accounts[4]
		const LayerxA0B6rsX = await Layerx.new(addresssZCRMy4, {from: accounts[0]});
		const uintigRtavl = BigInt("20")
		const addressY0dIi0g = accounts[1]
		const addressYDTClcB = accounts[3]
		const uintclWUYfW = BigInt("659")
		const addresshHB81xG = accounts[0]
		const boolkZ67W56 = await LayerxA0B6rsX.approve.call(addressY0dIi0g, uintigRtavl, {from: accounts[1]});
//		await LayerxA0B6rsX.addStakePayment.call({from: accounts[2]});
//		const uintfO7zaoT = await LayerxA0B6rsX.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintAdsZnfp = await LayerxA0B6rsX.balanceOf.call(addressYDTClcB, {from: accounts[2]});
//		const uintLcxatqf = await LayerxA0B6rsX.getStakesNum.call({from: accounts[2]});
//		const boolnR1rNFG = await LayerxA0B6rsX.transfer.call(addresshHB81xG, uintclWUYfW, {from: accounts[2]});

		assert.equal(boolkZ67W56, true)
		await expect(LayerxA0B6rsX.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressXYhxTqH = accounts[4]
		const Layerxvkq5FTc = await Layerx.new(addressXYhxTqH, {from: accounts[2]});
		const uintDtM9ht = BigInt("1918")
//		await Layerxvkq5FTc.addStakePayment.call({from: accounts[4]});
//		const uint256KIhscq2 = await Layerxvkq5FTc.burn.call(uintDtM9ht, {from: accounts[4]});
//		await Layerxvkq5FTc.addStakePayment.call({from: accounts[1]});

		await expect(Layerxvkq5FTc.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressh2j6z8U = "0x0000000000000000000000000000000000000001"
		const LayerxJYY2bc = await Layerx.new(addressh2j6z8U, {from: accounts[5]});
		const boolDDOY8pb = true
		const addressQehYxBi = accounts[4]
		const uintVjAzZY = BigInt("301")
		const uintTfVYvDj = BigInt("1303")
		const uintDvFeeB5 = BigInt("1627")
		const addressm5VW4MM = "0x0000000000000000000000000000000000000001"
		const uintRtO54hV = BigInt("1448")
		const addressF5iRniD = accounts[5]
		const boolC2LxWz = await LayerxJYY2bc.setIsPaused.call(boolDDOY8pb, {from: "0x0000000000000000000000000000000000000001"});
//		await LayerxJYY2bc.addStakePayment.call({from: "0x0000000000000000000000000000000000000001"});
//		await LayerxJYY2bc.unlock.call({from: accounts[0]});
//		await LayerxJYY2bc.unlock.call({from: accounts[4]});
//		const uintVVfOEoW = await LayerxJYY2bc.balanceOf.call(addressQehYxBi, {from: accounts[2]});
//		await LayerxJYY2bc.addStakePayment.call({from: accounts[2]});
//		const uintHhe1nFG = await LayerxJYY2bc.withdraw.call(uintVjAzZY, {from: accounts[3]});
//		const uintVOLvTik = await LayerxJYY2bc.withdraw.call(uintTfVYvDj, {from: accounts[2]});
//		const boolHDI6Q4T = await LayerxJYY2bc.approve.call(addressm5VW4MM, uintDvFeeB5, {from: accounts[3]});
//		const boolBMgQarS = await LayerxJYY2bc.approve.call(addressF5iRniD, uintRtO54hV, {from: accounts[0]});
//		await LayerxJYY2bc.paused.call({from: accounts[2]});

		await expect(LayerxJYY2bc.addStakePayment.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressW7yIFWp = accounts[4]
		const Layerxvkq5FTc = await Layerx.new(addressW7yIFWp, {from: accounts[2]});
		const uintENPQSA2 = BigInt("0")
//		const uintcXV4vBN = await Layerxvkq5FTc.lock.call(uintENPQSA2, {from: accounts[3]});
//		const uinty6WXZsQ = await Layerxvkq5FTc.totalSupply.call({from: accounts[4]});
//		await Layerxvkq5FTc.unlock.call({from: accounts[4]});

		await expect(Layerxvkq5FTc.lock.call(uintENPQSA2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})