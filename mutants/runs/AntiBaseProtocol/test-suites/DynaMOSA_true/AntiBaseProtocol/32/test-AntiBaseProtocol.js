const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const stringD211GPH = "JdcIDMvtbMwMHkfJ8YkdvRzsE00XM7nU1Tpj8YrKRMo2"
		const stringxhDbSZ3 = "21tArHzmlCDSJsibijqwxRJ98WMACwd176"
		const uintiv785Tv = BigInt("65")
		const AntiBaseProtocolqIDcoN9 = await AntiBaseProtocol.new(stringD211GPH, stringxhDbSZ3, uintiv785Tv, {from: accounts[4]});
		const addressownmKBb = accounts[5]
		const uintY84YwYn = BigInt("2037")
		const address88KGGi = accounts[5]
		const addressRv92JgB = accounts[3]
		const uintXb78sBz = BigInt("1977")
		const addressC0MpKCr = await AntiBaseProtocolqIDcoN9._transferOwnership.call(addressownmKBb, {from: accounts[0]});
		const addresstyKftJs = await AntiBaseProtocolqIDcoN9._burn.call(address88KGGi, uintY84YwYn, {from: accounts[1]});
		const addresshRupeuE = await AntiBaseProtocolqIDcoN9._transferOwnership.call(addressRv92JgB, {from: accounts[0]});
		const uint256CYYLDy = await AntiBaseProtocolqIDcoN9.burn.call(uintXb78sBz, {from: accounts[0]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolROTxcl = await AntiBaseProtocol.new({from: accounts[5]});
		const uintScfKpCv = BigInt("1323")
		const addressPms3krx = accounts[0]
		const uintW8dldTn = BigInt("610")
		const addressQBGR1ts = accounts[3]
		const addressUijqHM3 = accounts[1]
		const boolhLj58w = await AntiBaseProtocolROTxcl.transfer.call(addressPms3krx, uintScfKpCv, {from: accounts[0]});
		const addressD0fTwHw = await AntiBaseProtocolROTxcl._approve.call(addressUijqHM3, addressQBGR1ts, uintW8dldTn, {from: accounts[5]});

		await expect(AntiBaseProtocolROTxcl.transfer.call(addressPms3krx, uintScfKpCv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolxGbc0up = await AntiBaseProtocol.new({from: accounts[2]});
		const uintSvg8pwR = BigInt("833")
		const addressGSeGvlX = accounts[2]
		const uintvJAs9Rh = BigInt("880")
		const uintSGmNOnm = BigInt("1083")
		const addressndHhYW = accounts[5]
		const uint256OhKfO4v = await AntiBaseProtocolxGbc0up.burn.call(uintSvg8pwR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256E3kyPm = await AntiBaseProtocolxGbc0up.balanceOf.call(addressGSeGvlX, {from: accounts[0]});
		const uint256TIdnIr9 = await AntiBaseProtocolxGbc0up.findRewardFee.call(uintvJAs9Rh, {from: "0x0000000000000000000000000000000000000001"});
		const addressk8OF6He = await AntiBaseProtocolxGbc0up._mint.call(addressndHhYW, uintSGmNOnm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(AntiBaseProtocolxGbc0up.burn.call(uintSvg8pwR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolYTM7F7 = await AntiBaseProtocol.new({from: accounts[0]});
		const uintrO7DMBM = BigInt("294")
		const addressUbaIspH = accounts[0]
		const addresszUhXwoP = accounts[2]
		const uintMtvbNVp = BigInt("1629")
		const uintzu0W2R = BigInt("1822")
		const addressWCan2b6 = accounts[2]
		const uintzXbHvoY = BigInt("415")
		const addresslggLHO7 = await AntiBaseProtocolYTM7F7._approve.call(addresszUhXwoP, addressUbaIspH, uintrO7DMBM, {from: accounts[4]});
		const uint256z0BBtvJ = await AntiBaseProtocolYTM7F7.findRewardFee.call(uintMtvbNVp, {from: accounts[5]});
		const boolndV3i8g = await AntiBaseProtocolYTM7F7.increaseAllowance.call(addressWCan2b6, uintzu0W2R, {from: accounts[1]});
		const uint256QYE9gat = await AntiBaseProtocolYTM7F7.findRewardFee.call(uintzXbHvoY, {from: accounts[4]});

		await expect(AntiBaseProtocolYTM7F7._approve.call(addresszUhXwoP, addressUbaIspH, uintrO7DMBM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolxGbc0up = await AntiBaseProtocol.new({from: accounts[2]});
		const addresslUY397 = accounts[4]
		const uintwCPGi46 = BigInt("833")
		const addresstoUP92M = accounts[2]
		const uintMHfyUZG = BigInt("923")
		const uintkOYgRcU = BigInt("1083")
		const addressnTvXvZM = accounts[5]
		const addressOov16MX = await AntiBaseProtocolxGbc0up.transferOwnership.call(addresslUY397, {from: accounts[3]});
		const uint256OhKfO4v = await AntiBaseProtocolxGbc0up.burn.call(uintwCPGi46, {from: "0x0000000000000000000000000000000000000001"});
		const uint256E3kyPm = await AntiBaseProtocolxGbc0up.balanceOf.call(addresstoUP92M, {from: accounts[0]});
		const uint256TIdnIr9 = await AntiBaseProtocolxGbc0up.findRewardFee.call(uintMHfyUZG, {from: "0x0000000000000000000000000000000000000001"});
		const addressk8OF6He = await AntiBaseProtocolxGbc0up._mint.call(addressnTvXvZM, uintkOYgRcU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(AntiBaseProtocolxGbc0up.transferOwnership.call(addresslUY397, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolROTxcl = await AntiBaseProtocol.new({from: accounts[5]});
		const uinteZh4JYu = BigInt("1031")
		const addressBHyoFuC = accounts[0]
		const uintcz5bwYb = BigInt("1323")
		const addressnlgwB2A = accounts[1]
		const uintwDcRSvq = BigInt("610")
		const addressRKZcmtc = accounts[3]
		const addressDk0Fc3 = accounts[1]
		const boolpX0gKNG = await AntiBaseProtocolROTxcl.transfer.call(addressBHyoFuC, uinteZh4JYu, {from: accounts[5]});
		await AntiBaseProtocolROTxcl.onlyOwner.call({from: accounts[1]});
		const boolhLj58w = await AntiBaseProtocolROTxcl.transfer.call(addressnlgwB2A, uintcz5bwYb, {from: accounts[0]});
		const addressD0fTwHw = await AntiBaseProtocolROTxcl._approve.call(addressDk0Fc3, addressRKZcmtc, uintwDcRSvq, {from: accounts[5]});

		assert.equal(boolpX0gKNG, true)
		await expect(AntiBaseProtocolROTxcl.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolJWtVfvf = await AntiBaseProtocol.new({from: accounts[2]});
		const uintfbT8Np7 = BigInt("1708")
		const addressHWHe6d = "0x0000000000000000000000000000000000000001"
		const addressgLzTGlZ = accounts[2]
		const uintuhPIu5D = BigInt("1193")
		const addresseKYyaxw = accounts[4]
		await AntiBaseProtocolJWtVfvf.renounceOwnership.call({from: accounts[2]});
		const boolgAA6cS4 = await AntiBaseProtocolJWtVfvf.transferFrom.call(addressgLzTGlZ, addressHWHe6d, uintfbT8Np7, {from: accounts[3]});
		const boolLD0yo1d = await AntiBaseProtocolJWtVfvf.transfer.call(addresseKYyaxw, uintuhPIu5D, {from: accounts[5]});

		await expect(AntiBaseProtocolJWtVfvf.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolJWtVfvf = await AntiBaseProtocol.new({from: accounts[2]});
		const addressxocv8RD = accounts[2]
		const addressByYh2ST = accounts[4]
		const uintc5G9pE6 = BigInt("1708")
		const addresswr48tK = "0x0000000000000000000000000000000000000001"
		const address9rDx25 = accounts[2]
		await AntiBaseProtocolJWtVfvf.renounceOwnership.call({from: accounts[2]});
		const uint256n02p0kQ = await AntiBaseProtocolJWtVfvf.allowance.call(addressByYh2ST, addressxocv8RD, {from: accounts[2]});
		const boolgAA6cS4 = await AntiBaseProtocolJWtVfvf.transferFrom.call(address9rDx25, addresswr48tK, uintc5G9pE6, {from: accounts[3]});

		await expect(AntiBaseProtocolJWtVfvf.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolROTxcl = await AntiBaseProtocol.new({from: accounts[5]});
		const uintBej1sGp = BigInt("1413")
		const addressCPuUsw6 = accounts[5]
		const uintFR5lUlC = BigInt("1323")
		const addressv0iGFP = accounts[0]
		const addresseK634TV = accounts[2]
		const uintBVplSlV = BigInt("610")
		const addressbXstWM4 = accounts[3]
		const addressSg9x1L9 = accounts[1]
		const boolQNDlm8z = await AntiBaseProtocolROTxcl.approve.call(addressCPuUsw6, uintBej1sGp, {from: accounts[1]});
		const boolhLj58w = await AntiBaseProtocolROTxcl.transfer.call(addressv0iGFP, uintFR5lUlC, {from: accounts[0]});
		const addressm2qQ1k5 = await AntiBaseProtocolROTxcl.transferOwnership.call(addresseK634TV, {from: accounts[3]});
		const stringRUyDH6o = await AntiBaseProtocolROTxcl.symbol.call({from: accounts[3]});
		const addressD0fTwHw = await AntiBaseProtocolROTxcl._approve.call(addressSg9x1L9, addressbXstWM4, uintBVplSlV, {from: accounts[5]});
		await AntiBaseProtocolROTxcl.renounceOwnership.call({from: accounts[3]});

		assert.equal(boolQNDlm8z, true)
		await expect(AntiBaseProtocolROTxcl.transfer.call(addressv0iGFP, uintFR5lUlC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolROTxcl = await AntiBaseProtocol.new({from: accounts[5]});
		const uintNAVdfzq = BigInt("343")
		const uintPdaajU = BigInt("1453")
		const addressyVg4TJ2 = accounts[3]
		const addressI2P5wVT = accounts[3]
		const uintEnALI2s = BigInt("1174")
		const addressTY7f7G = accounts[2]
		const uintQwRqzU1 = BigInt("1323")
		const addressxv2Qvur = accounts[1]
		const uint256Crsvt8 = await AntiBaseProtocolROTxcl.findRewardFee.call(uintNAVdfzq, {from: accounts[3]});
		const boolujfRUwp = await AntiBaseProtocolROTxcl.approve.call(addressyVg4TJ2, uintPdaajU, {from: accounts[0]});
		const uint256sv5FQqO = await AntiBaseProtocolROTxcl.balanceOf.call(addressI2P5wVT, {from: accounts[2]});
		const addresst19j1f3 = await AntiBaseProtocolROTxcl._mint.call(addressTY7f7G, uintEnALI2s, {from: accounts[0]});
		await AntiBaseProtocolROTxcl.renounceOwnership.call({from: accounts[1]});
		const boolhLj58w = await AntiBaseProtocolROTxcl.transfer.call(addressxv2Qvur, uintQwRqzU1, {from: accounts[0]});

		assert.equal(boolujfRUwp, true)
		assert.equal(uint256Crsvt8, BigInt("20"))
		assert.equal(uint256sv5FQqO, BigInt("0"))
		await expect(AntiBaseProtocolROTxcl._mint.call(addressTY7f7G, uintEnALI2s, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolROTxcl = await AntiBaseProtocol.new({from: accounts[5]});
		const uint8LGbQa = BigInt("1739")
		const uintl3TxKFN = BigInt("1323")
		const addressV4L7PVz = accounts[1]
		const uint256Crsvt8 = await AntiBaseProtocolROTxcl.findRewardFee.call(uint8LGbQa, {from: accounts[3]});
		const stringqy27kWu = await AntiBaseProtocolROTxcl.name.call({from: accounts[4]});
		const boolhLj58w = await AntiBaseProtocolROTxcl.transfer.call(addressV4L7PVz, uintl3TxKFN, {from: accounts[0]});

		assert.equal(stringqy27kWu, "https://t.me/antibaseprotocol")
		assert.equal(uint256Crsvt8, BigInt("90"))
		await expect(AntiBaseProtocolROTxcl.transfer.call(addressV4L7PVz, uintl3TxKFN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolROTxcl = await AntiBaseProtocol.new({from: accounts[5]});
		const uintjWu4szL = BigInt("1302")
		const addressejzs3ae = accounts[0]
		const addresseZaupZD = await AntiBaseProtocolROTxcl.owner.call({from: accounts[1]});
		const boolhLj58w = await AntiBaseProtocolROTxcl.transfer.call(addressejzs3ae, uintjWu4szL, {from: accounts[0]});

		assert.equal(addresseZaupZD, 0x3c0835cC086A10584378209D39ed48A47f15C335)
		await expect(AntiBaseProtocolROTxcl.transfer.call(addressejzs3ae, uintjWu4szL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolROTxcl = await AntiBaseProtocol.new({from: accounts[5]});
		const uintVCe1J77 = BigInt("1739")
		const uintx7LIypM = BigInt("158")
		const addressZ2tJEWF = accounts[1]
		const addressZxX4Ggd = "0x0000000000000000000000000000000000000001"
		const addressZYOBhpY = accounts[3]
		const uintVep5xSS = BigInt("1323")
		const addressjviwj6g = accounts[1]
		const uint8KPNRMWh = await AntiBaseProtocolROTxcl.decimals.call({from: accounts[1]});
		const uint256Crsvt8 = await AntiBaseProtocolROTxcl.findRewardFee.call(uintVCe1J77, {from: accounts[3]});
		const stringqy27kWu = await AntiBaseProtocolROTxcl.name.call({from: accounts[4]});
		const boolq9ZVcE5 = await AntiBaseProtocolROTxcl.transferFrom.call(addressZxX4Ggd, addressZ2tJEWF, uintx7LIypM, {from: accounts[4]});
		const addressOlkUUsR = await AntiBaseProtocolROTxcl._transferOwnership.call(addressZYOBhpY, {from: accounts[2]});
		const boolhLj58w = await AntiBaseProtocolROTxcl.transfer.call(addressjviwj6g, uintVep5xSS, {from: accounts[0]});

		assert.equal(stringqy27kWu, "https://t.me/antibaseprotocol")
		assert.equal(uint256Crsvt8, BigInt("90"))
		assert.equal(uint8KPNRMWh, BigInt("18"))
		await expect(AntiBaseProtocolROTxcl.transferFrom.call(addressZxX4Ggd, addressZ2tJEWF, uintx7LIypM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolROTxcl = await AntiBaseProtocol.new({from: accounts[5]});
		const uintPq7oZqd = BigInt("1739")
		const uintMZDODYR = BigInt("224")
		const addressswz3hm = accounts[2]
		const uintl37sdGY = BigInt("120")
		const uint256Crsvt8 = await AntiBaseProtocolROTxcl.findRewardFee.call(uintPq7oZqd, {from: accounts[3]});
		const uint256IeEq9pG = await AntiBaseProtocolROTxcl.totalSupply.call({from: accounts[3]});
		const boolk952ylY = await AntiBaseProtocolROTxcl.transfer.call(addressswz3hm, uintMZDODYR, {from: accounts[3]});
		const uint256AK8rHAq = await AntiBaseProtocolROTxcl.findRewardFee.call(uintl37sdGY, {from: accounts[4]});
		const stringqy27kWu = await AntiBaseProtocolROTxcl.name.call({from: accounts[4]});

		assert.equal(uint256Crsvt8, BigInt("90"))
		assert.equal(uint256IeEq9pG, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolROTxcl.transfer.call(addressswz3hm, uintMZDODYR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolLYIuyLc = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintx6gKjDW = BigInt("988")
		const addressea51Nlh = accounts[5]
		const uintm1ZlRv = BigInt("1790")
		const addresst8JaAuD = accounts[0]
		const boolS7ZvZVU = await AntiBaseProtocolLYIuyLc.approve.call(addressea51Nlh, uintx6gKjDW, {from: accounts[2]});
		const addressM8b1kr = await AntiBaseProtocolLYIuyLc._burn.call(addresst8JaAuD, uintm1ZlRv, {from: accounts[3]});
		await AntiBaseProtocolLYIuyLc.requestGas.call({from: accounts[3]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolROTxcl = await AntiBaseProtocol.new({from: accounts[5]});
		const uintZctag3G = BigInt("154")
		const addressqhhhaFr = accounts[1]
		const uintZRWXBvC = BigInt("342")
		const uintO4OJmJf = BigInt("1323")
		const addressfGdgnVJ = accounts[2]
		const uintKBE4hlN = BigInt("1827")
		const addressf4iXs5H = accounts[2]
		const uintsUbKXxl = BigInt("749")
		const addressJmkCKff = accounts[1]
		const boolVaIfK49 = await AntiBaseProtocolROTxcl.decreaseAllowance.call(addressqhhhaFr, uintZctag3G, {from: accounts[4]});
		const uint256Crsvt8 = await AntiBaseProtocolROTxcl.findRewardFee.call(uintZRWXBvC, {from: accounts[3]});
		const boolhLj58w = await AntiBaseProtocolROTxcl.transfer.call(addressfGdgnVJ, uintO4OJmJf, {from: accounts[0]});
		const boolb9MpZA2 = await AntiBaseProtocolROTxcl.approve.call(addressf4iXs5H, uintKBE4hlN, {from: accounts[2]});
		const boolnSJjEx = await AntiBaseProtocolROTxcl.transfer.call(addressJmkCKff, uintsUbKXxl, {from: "0x0000000000000000000000000000000000000001"});
		const stringkrZez4n = await AntiBaseProtocolROTxcl.symbol.call({from: accounts[2]});

		await expect(AntiBaseProtocolROTxcl.decreaseAllowance.call(addressqhhhaFr, uintZctag3G, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZw2xtaY = await AntiBaseProtocol.new({from: accounts[5]});
		const addressUBLgQ7 = accounts[4]
		const uint256R6caFzp = await AntiBaseProtocolZw2xtaY.balanceOf.call(addressUBLgQ7, {from: accounts[3]});
		const uint2566yH6AH = await AntiBaseProtocolZw2xtaY.totalSupply.call({from: accounts[4]});
		const stringsjhmyLN = await AntiBaseProtocolZw2xtaY.symbol.call({from: accounts[4]});

		assert.equal(stringsjhmyLN, "ABASE")
		assert.equal(uint2566yH6AH, BigInt("31250000000000000000"))
		assert.equal(uint256R6caFzp, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolROTxcl = await AntiBaseProtocol.new({from: accounts[5]});
		const uintrD8bI4B = BigInt("342")
		const uintqtgxpQb = BigInt("1827")
		const addressUctE15 = accounts[2]
		const uinteg03mBa = BigInt("410")
		const addresswD6kWS = accounts[0]
		const uintaJJLjWm = BigInt("1918")
		const addressbXxkeCl = accounts[5]
		const uintknzmiKj = BigInt("749")
		const addressh5lu8TN = accounts[0]
		const addressRA5TiPN = await AntiBaseProtocolROTxcl.owner.call({from: accounts[2]});
		const uint256Crsvt8 = await AntiBaseProtocolROTxcl.findRewardFee.call(uintrD8bI4B, {from: accounts[3]});
		const uint8RmEbdTf = await AntiBaseProtocolROTxcl.decimals.call({from: accounts[0]});
		const boolb9MpZA2 = await AntiBaseProtocolROTxcl.approve.call(addressUctE15, uintqtgxpQb, {from: accounts[2]});
		const boolmBb9fx4 = await AntiBaseProtocolROTxcl.increaseAllowance.call(addresswD6kWS, uinteg03mBa, {from: accounts[3]});
		const addresse508rsw = await AntiBaseProtocolROTxcl._mint.call(addressbXxkeCl, uintaJJLjWm, {from: accounts[4]});
		const boolnSJjEx = await AntiBaseProtocolROTxcl.transfer.call(addressh5lu8TN, uintknzmiKj, {from: "0x0000000000000000000000000000000000000001"});
		const addressAGFBDkk = await AntiBaseProtocolROTxcl.owner.call({from: accounts[1]});

		assert.equal(addressRA5TiPN, 0x3c0835cC086A10584378209D39ed48A47f15C335)
		assert.equal(boolb9MpZA2, true)
		assert.equal(boolmBb9fx4, true)
		assert.equal(uint256Crsvt8, BigInt("20"))
		assert.equal(uint8RmEbdTf, BigInt("18"))
		await expect(AntiBaseProtocolROTxcl._mint.call(addressbXxkeCl, uintaJJLjWm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolROTxcl = await AntiBaseProtocol.new({from: accounts[5]});
		const uintWzZJvRr = BigInt("1739")
		const uintg4VhM7g = BigInt("828")
		const addressEpZoBDf = accounts[1]
		const uintgvLS4B7 = BigInt("224")
		const addressnUDL1F5 = accounts[3]
		const uintvmN30J = BigInt("1569")
		const addresspTOqlQb = accounts[3]
		const addresspy7Vuik = accounts[1]
		const uintpGns4EJ = BigInt("1603")
		const uintOwiDAcI = BigInt("352")
		const addressC6MlVNa = accounts[5]
		const addressl1OSzB6 = accounts[0]
		const addressKlbCKV = accounts[0]
		const uintHvBbiZn = BigInt("153")
		const uintmrIcDsJ = BigInt("597")
		const uintbnQgoDk = BigInt("978")
		const uintGo3W3u = BigInt("650")
		const addressGe46EV8 = accounts[2]
		const uintBwiWYy7 = BigInt("1323")
		const addressTXf5tcp = accounts[1]
		const uintMoNLV9S = BigInt("1651")
		const uint256Crsvt8 = await AntiBaseProtocolROTxcl.findRewardFee.call(uintWzZJvRr, {from: accounts[3]});
		const addressL7nzgIU = await AntiBaseProtocolROTxcl.burnFrom.call(addressEpZoBDf, uintg4VhM7g, {from: accounts[0]});
		const boolk952ylY = await AntiBaseProtocolROTxcl.transfer.call(addressnUDL1F5, uintgvLS4B7, {from: accounts[3]});
		const addresstwduB0 = await AntiBaseProtocolROTxcl._approve.call(addresspy7Vuik, addresspTOqlQb, uintvmN30J, {from: accounts[5]});
		const uint256AK8rHAq = await AntiBaseProtocolROTxcl.findRewardFee.call(uintpGns4EJ, {from: accounts[4]});
		const addressYsGTSq = await AntiBaseProtocolROTxcl._burn.call(addressC6MlVNa, uintOwiDAcI, {from: accounts[4]});
		const uint256NP1bFe = await AntiBaseProtocolROTxcl.allowance.call(addressKlbCKV, addressl1OSzB6, {from: accounts[3]});
		await AntiBaseProtocolROTxcl.renounceOwnership.call({from: accounts[0]});
		const uint256C1kpDHt = await AntiBaseProtocolROTxcl.findRewardFee.call(uintHvBbiZn, {from: accounts[0]});
		const uint256iUbK63A = await AntiBaseProtocolROTxcl.burn.call(uintmrIcDsJ, {from: accounts[1]});
		const uint256oUVFddE = await AntiBaseProtocolROTxcl.totalSupply.call({from: accounts[3]});
		const uint256Q4hbnxP = await AntiBaseProtocolROTxcl.findRewardFee.call(uintbnQgoDk, {from: accounts[1]});
		const stringXq0iTil = await AntiBaseProtocolROTxcl.symbol.call({from: accounts[2]});
		const uint8Kndo0Lk = await AntiBaseProtocolROTxcl.decimals.call({from: accounts[5]});
		await AntiBaseProtocolROTxcl.renounceOwnership.call({from: accounts[1]});
		await AntiBaseProtocolROTxcl.onlyOwner.call({from: accounts[2]});
		const boolADyy0qL = await AntiBaseProtocolROTxcl.transfer.call(addressGe46EV8, uintGo3W3u, {from: accounts[0]});
		const boolhLj58w = await AntiBaseProtocolROTxcl.transfer.call(addressTXf5tcp, uintBwiWYy7, {from: accounts[0]});
		const uint256UA6S4uP = await AntiBaseProtocolROTxcl.burn.call(uintMoNLV9S, {from: accounts[4]});

		assert.equal(uint256Crsvt8, BigInt("90"))
		await expect(AntiBaseProtocolROTxcl.burnFrom.call(addressEpZoBDf, uintg4VhM7g, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolROTxcl = await AntiBaseProtocol.new({from: accounts[5]});
		const uintlfW0bsX = BigInt("206")
		const uintTN2hMHk = BigInt("1158")
		const addressbhBDoj = "0x00000000000000000000000000000000000000-1"
		const uintXwfAD2 = BigInt("1011")
		const addressW50UpfE = accounts[2]
		const uint256wrLIyG = await AntiBaseProtocolROTxcl.findBurnFee.call(uintlfW0bsX, {from: accounts[0]});
		const uint8n2ZkGUh = await AntiBaseProtocolROTxcl.decimals.call({from: accounts[3]});
		const boolc1RsC6i = await AntiBaseProtocolROTxcl.transfer.call(addressbhBDoj, uintTN2hMHk, {from: accounts[0]});
		const boolk952ylY = await AntiBaseProtocolROTxcl.transfer.call(addressW50UpfE, uintXwfAD2, {from: accounts[3]});

		assert.equal(uint256wrLIyG, BigInt("45"))
		assert.equal(uint8n2ZkGUh, BigInt("18"))
		await expect(AntiBaseProtocolROTxcl.transfer.call(addressbhBDoj, uintTN2hMHk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolROTxcl = await AntiBaseProtocol.new({from: accounts[5]});
		const uintU1WwLqf = BigInt("179")
		const addressbIUJWU6 = accounts[2]
		const uintBz55q2w = BigInt("213")
		const addressdTpDQW = accounts[3]
		const uintqAUghyv = BigInt("10")
		const uintoVHgQgD = BigInt("1193")
		const addressipyLroE = "0x0000000000000000000000000000000000000001"
		const addressvGdXBya = accounts[5]
		const addresss0a6kPV = accounts[1]
		const uintPjr0gNj = BigInt("1311")
		const addressEUB2Sot = accounts[2]
		const uintTH9x71d = BigInt("70")
		const addressDAYGDSr = accounts[2]
		const addressCCLwm5F = accounts[3]
		const uint256Crsvt8 = await AntiBaseProtocolROTxcl.findRewardFee.call(uintU1WwLqf, {from: accounts[3]});
		const addresssS8qBr = await AntiBaseProtocolROTxcl.transferOwnership.call(addressbIUJWU6, {from: accounts[5]});
		const boolk952ylY = await AntiBaseProtocolROTxcl.transfer.call(addressdTpDQW, uintBz55q2w, {from: accounts[3]});
		const uint256nREqVAG = await AntiBaseProtocolROTxcl.burn.call(uintqAUghyv, {from: accounts[1]});
		const boolojxahsp = await AntiBaseProtocolROTxcl.approve.call(addressipyLroE, uintoVHgQgD, {from: accounts[2]});
		const uint256ozD6vrN = await AntiBaseProtocolROTxcl.allowance.call(addresss0a6kPV, addressvGdXBya, {from: accounts[2]});
		const addressZnI3d0G = await AntiBaseProtocolROTxcl._mint.call(addressEUB2Sot, uintPjr0gNj, {from: accounts[1]});
		const boolp00cn0 = await AntiBaseProtocolROTxcl.transferFrom.call(addressCCLwm5F, addressDAYGDSr, uintTH9x71d, {from: "0x0000000000000000000000000000000000000001"});
		const boolzvghXk2 = await AntiBaseProtocolROTxcl.isOwner.call({from: accounts[1]});

		assert.equal(uint256Crsvt8, BigInt("10"))
		await expect(AntiBaseProtocolROTxcl.transfer.call(addressdTpDQW, uintBz55q2w, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})