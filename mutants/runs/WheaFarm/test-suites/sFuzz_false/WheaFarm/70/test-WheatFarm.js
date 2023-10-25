const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringTWg3qJS = "VeUua4CMuwkg7t2ssQ5HFvO6Y0"
		const stringY6ltzl0 = "AqvE3SehSBogxc7zXAIh5cLr62zNh9SlFLsqK87PbQxQ6aTUSLjMWr1qinDWxJKpAoVou5lCc81wQyBPm779BINtbqU0NBfH7z"
		const uintxX5NUgN = BigInt("123")
		const WheatFarmuxh4SiN = await WheatFarm.new(stringTWg3qJS, stringY6ltzl0, uintxX5NUgN, {from: accounts[4]});
		const uintRkMoYxm = BigInt("1089")
		const addressFlepKy = accounts[0]
		const uintAhWI3xK = BigInt("393")
		const addressdU8bZ7 = accounts[4]
		const uintkBpA2Xg = BigInt("1488")
		const addressd3Lftj = accounts[3]
		const uintv8jdAiJ = BigInt("276")
		const addressE3pgrlq = accounts[2]
		const addressqvrUneQ = accounts[4]
		const boolo8eEQVY = await WheatFarmuxh4SiN.approve.call(addressFlepKy, uintRkMoYxm, {from: accounts[2]});
		const uint8xtrBc0W = await WheatFarmuxh4SiN.decimals.call({from: accounts[2]});
		const booloGMTRv4 = await WheatFarmuxh4SiN.approveAndCall.call(addressdU8bZ7, uintAhWI3xK, {from: accounts[1]});
		const booleQqREy6 = await WheatFarmuxh4SiN.transfer.call(addressd3Lftj, uintkBpA2Xg, {from: accounts[0]});
		const boolf5bFx0a = await WheatFarmuxh4SiN.transferFrom.call(addressqvrUneQ, addressE3pgrlq, uintv8jdAiJ, {from: accounts[0]});

		assert.equal(boolo8eEQVY, true)
		assert.equal(uint8xtrBc0W, BigInt("18"))
		await expect(WheatFarmuxh4SiN.approveAndCall.call(addressdU8bZ7, uintAhWI3xK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringFm90uT2 = "V7tqwh8JzUHND8j6TyT9Svgz1Nr2h6fghAeoUUCakAcyjHR"
		const stringDGcE2tK = "m8Ov0WukfE7WXPs1ui7YJY8Z4JkHOlBsD4my2Qov3SprwTjAWyCUDJYLHKqZ9NBi64GRUgjY5lnIfwu5QY"
		const uintjgPXU4m = BigInt("1134")
		const WheatFarmz3s6Me5 = await WheatFarm.new(stringFm90uT2, stringDGcE2tK, uintjgPXU4m, {from: accounts[1]});
		const uintCJjmFFu = BigInt("1733")
		const addresszE7kJdR = accounts[3]
		const addressn6uA36W = accounts[3]
		const uintQGhtSFo = BigInt("1751")
		const address25WKna = accounts[1]
		const addresscDlgv96 = accounts[4]
		const uintOzNr4tJ = BigInt("898")
		const addresspDxFmZ8 = accounts[4]
		const boolDVVvrsS = await WheatFarmz3s6Me5.transferFrom.call(addressn6uA36W, addresszE7kJdR, uintCJjmFFu, {from: accounts[4]});
		const boolZfseF13 = await WheatFarmz3s6Me5.transferFrom.call(addresscDlgv96, address25WKna, uintQGhtSFo, {from: accounts[1]});
		const boolw069WR = await WheatFarmz3s6Me5.increaseAllowance.call(addresspDxFmZ8, uintOzNr4tJ, {from: accounts[3]});

		await expect(WheatFarmz3s6Me5.transferFrom.call(addressn6uA36W, addresszE7kJdR, uintCJjmFFu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringk3UeZB1 = "i"
		const stringMjeO15b = "bLRcykRNoVS9IaSu9weaDPrOmgRrDaOv8UPGkpH"
		const uintC2n5E3F = BigInt("133")
		const WheatFarmWSNj3f4 = await WheatFarm.new(stringk3UeZB1, stringMjeO15b, uintC2n5E3F, {from: accounts[0]});
		const uintM2Ss0co = BigInt("1384")
		const addressCPuKe8D = accounts[4]
		const addressyU5r1ji = accounts[1]
		const addressl0xWi5C = accounts[2]
		const uintsYTLjyU = BigInt("1446")
		const addresstamcBh = accounts[3]
		const boolqj8I4yF = await WheatFarmWSNj3f4.increaseAllowance.call(addressCPuKe8D, uintM2Ss0co, {from: accounts[3]});
		const uintnpxpqb8 = await WheatFarmWSNj3f4.allowance.call(addressl0xWi5C, addressyU5r1ji, {from: accounts[5]});
		const boolXGAkmTL = await WheatFarmWSNj3f4.decreaseAllowance.call(addresstamcBh, uintsYTLjyU, {from: "0x0000000000000000000000000000000000000001"});
		const stringVsA70H = await WheatFarmWSNj3f4.symbol.call({from: accounts[4]});

		await expect(WheatFarmWSNj3f4.increaseAllowance.call(addressCPuKe8D, uintM2Ss0co, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringprv3Xrt = "nxc49aTYbLnt6nqhLR6QFOBRsYjoqIELaAM0PuoEqbs2N1SLMxi57xqHJ8JLfDM"
		const string6Zcic6 = "9mD13xro2RxnS5a733PrWUzR9E1kVAGBevlxhc4iclpKbupqUzrgCxJyv7M2ddwX63Dq2ptDXp"
		const uintBgpcb2 = BigInt("1433")
		const WheatFarmkukwcQy = await WheatFarm.new(stringprv3Xrt, string6Zcic6, uintBgpcb2, {from: "0x0000000000000000000000000000000000000001"});
		const uintKL7K0fa = BigInt("314")
		const addressBNbINpf = accounts[4]
		const address7yLX4L = accounts[0]
		const addressi6rXEsj = accounts[2]
		const boolXFBWv0U = await WheatFarmkukwcQy.approveAndCall.call(addressBNbINpf, uintKL7K0fa, {from: accounts[3]});
		const uintnvglOUM = await WheatFarmkukwcQy.balanceOf.call(address7yLX4L, {from: accounts[3]});
		const uintGW9aExO = await WheatFarmkukwcQy.balanceOf.call(addressi6rXEsj, {from: accounts[4]});
		const stringeIpNai = await WheatFarmkukwcQy.name.call({from: accounts[1]});
	});

	it('test for WheatFarm', async () => {
		const stringHouuZud = "3x7bkd6UMxFPq69oAzBvXFsu"
		const stringhEjNEHP = "fJc9QwVjku3d0NV80bBzmlzcqUq9MejlUxc4ab2zlHRQu77OjHiiimHpfh7bIfxPyeDzV8i9sev"
		const uintAyAXaoQ = BigInt("1806")
		const WheatFarmxwwAlsR = await WheatFarm.new(stringHouuZud, stringhEjNEHP, uintAyAXaoQ, {from: accounts[3]});
		const uintE9HUn9W = BigInt("1038")
		const addressr1CiM3V = accounts[4]
		const uintlxwhexg = BigInt("133")
		const addressJEFX5xy = accounts[3]
		const addressJp4Dsst = accounts[3]
		const boolkwN1tp = await WheatFarmxwwAlsR.transfer.call(addressr1CiM3V, uintE9HUn9W, {from: accounts[3]});
		const uintPEdbKes = await WheatFarmxwwAlsR.totalSupply.call({from: accounts[3]});
		const boolvaiqzfv = await WheatFarmxwwAlsR.transferFrom.call(addressJp4Dsst, addressJEFX5xy, uintlxwhexg, {from: accounts[3]});

		assert.equal(boolkwN1tp, true)
		assert.equal(boolvaiqzfv, true)
		assert.equal(uintPEdbKes, BigInt("1806000000000000000000"))
	});

	it('test for WheatFarm', async () => {
		const stringitQORVU = "rJPXwH7mP3k0lrNI1HfnRINOgzxSdvm"
		const stringfraXUgl = "OmrzbwdedSAyqnVUzb4gCMJylenGN5Me1L667mzx3wqzgCvQC7P68FyG344cDNcI2lGI1lYOoOXjRVUAYsqSWAqS"
		const uintsPZXknI = BigInt("692")
		const WheatFarmlT1tDvS = await WheatFarm.new(stringitQORVU, stringfraXUgl, uintsPZXknI, {from: accounts[2]});
		const addresstvTVJJy = accounts[1]
		const uints8mEQCH = BigInt("1870")
		const addresssHUy8uM = "0x0000000000000000000000000000000000000001"
		const boolKd8t9fW = await WheatFarmlT1tDvS.transferownership.call(addresstvTVJJy, {from: accounts[2]});
		const uint8I6aIoH = await WheatFarmlT1tDvS.decimals.call({from: accounts[4]});
		const boolUFWiX7R = await WheatFarmlT1tDvS.transfer.call(addresssHUy8uM, uints8mEQCH, {from: "0x0000000000000000000000000000000000000001"});
		const stringILy69zj = await WheatFarmlT1tDvS.name.call({from: accounts[3]});
		const stringg87ZKVz = await WheatFarmlT1tDvS.name.call({from: accounts[1]});

		assert.equal(boolKd8t9fW, true)
		assert.equal(uint8I6aIoH, BigInt("18"))
		await expect(WheatFarmlT1tDvS.transfer.call(addresssHUy8uM, uints8mEQCH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringPDCECPR = "hGEGJCpZePB8SPCV35MdmLAEDQ9YSW31"
		const stringj7rWVe2 = "mu26syETBCzwFYY71B78A5rKAnS6Eq7gCpHdE6URW4pkdD83vc545hLRxw68fj5X1Dc63O5Fw"
		const uintgt9wWsG = BigInt("50")
		const WheatFarmpdFpVmz = await WheatFarm.new(stringPDCECPR, stringj7rWVe2, uintgt9wWsG, {from: accounts[1]});
		const uintE9Kmr9m = BigInt("92")
		const addressn7eu2f4 = accounts[1]
		const uintsguOdS7 = BigInt("126")
		const addressxjhzH9m = accounts[0]
		const addressTmyRIor = "0x0000000000000000000000000000000000000001"
		const uintWRl0vyM = BigInt("951")
		const addressDht0ldR = accounts[2]
		const uintsydQl08 = BigInt("1859")
		const addressPR5DKh4 = accounts[4]
		const boolQ7PkYfz = await WheatFarmpdFpVmz.approveAndCall.call(addressn7eu2f4, uintE9Kmr9m, {from: accounts[1]});
		const boolWROM8Ef = await WheatFarmpdFpVmz.transfer.call(addressxjhzH9m, uintsguOdS7, {from: accounts[0]});
		const stringoJDVwEN = await WheatFarmpdFpVmz.name.call({from: accounts[4]});
		const boolTa4Pnww = await WheatFarmpdFpVmz.transferownership.call(addressTmyRIor, {from: accounts[2]});
		const boollRgumnd = await WheatFarmpdFpVmz.increaseAllowance.call(addressDht0ldR, uintWRl0vyM, {from: accounts[3]});
		const boolBaQNXLV = await WheatFarmpdFpVmz.increaseAllowance.call(addressPR5DKh4, uintsydQl08, {from: accounts[0]});

		assert.equal(boolQ7PkYfz, true)
		await expect(WheatFarmpdFpVmz.transfer.call(addressxjhzH9m, uintsguOdS7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringPDCECPR = "hGEGJCpZePB8SPCV35MdmLAEDQ9YSW31"
		const stringj7rWVe2 = "mu26syETBCzwFYY71B78A5rKAnS6Eq7gCpHdE6URW4pkdD83vc545hLRxw68fj5X1Dc63O5Fw"
		const uintuEdDzGz = BigInt("50")
		const WheatFarmpdFpVmz = await WheatFarm.new(stringPDCECPR, stringj7rWVe2, uintuEdDzGz, {from: accounts[1]});
		const uintVmtyuRW = BigInt("569")
		const addressaJ8CFPc = accounts[2]
		const uintJUjuNog = BigInt("0")
		const addressYIxOWDW = accounts[1]
		const uinty084iMW = BigInt("1318")
		const addressjBH5DQN = accounts[4]
		const boolkjTO2xq = await WheatFarmpdFpVmz.approve.call(addressaJ8CFPc, uintVmtyuRW, {from: accounts[1]});
		const boolQ7PkYfz = await WheatFarmpdFpVmz.approveAndCall.call(addressYIxOWDW, uintJUjuNog, {from: accounts[1]});
		const stringn05OnPz = await WheatFarmpdFpVmz.name.call({from: accounts[0]});
		const string6hQMe9 = await WheatFarmpdFpVmz.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolKUlbDE = await WheatFarmpdFpVmz.transfer.call(addressjBH5DQN, uinty084iMW, {from: accounts[4]});
		const stringumMxuFc = await WheatFarmpdFpVmz.symbol.call({from: accounts[4]});

		assert.equal(boolQ7PkYfz, true)
		assert.equal(boolkjTO2xq, true)
		assert.equal(string6hQMe9, "mu26syETBCzwFYY71B78A5rKAnS6Eq7gCpHdE6URW4pkdD83vc545hLRxw68fj5X1Dc63O5Fw")
		assert.equal(stringn05OnPz, "hGEGJCpZePB8SPCV35MdmLAEDQ9YSW31")
		await expect(WheatFarmpdFpVmz.transfer.call(addressjBH5DQN, uinty084iMW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringPDCECPR = "hGEGJCpZePB8SPCV35MdmLAEDQ9YSW31"
		const stringj7rWVe2 = "mu26syETBCzwFYY71B78A5rKAnS6Eq7gCpHdE6URW4pkdD83vc545hLRxw68fj5X1Dc63O5Fw"
		const uintwblgclF = BigInt("50")
		const WheatFarmpdFpVmz = await WheatFarm.new(stringPDCECPR, stringj7rWVe2, uintwblgclF, {from: accounts[1]});
		const uintf0oBGfF = BigInt("0")
		const addressXjwGHH = accounts[1]
		const uintZOdt1Mb = BigInt("544")
		const addressGD572RX = accounts[4]
		const addressGJGqzm = accounts[3]
		const uintq3YqMmA = BigInt("1520")
		const addressKGEFZHQ = accounts[0]
		const boolWLVVj9s = await WheatFarmpdFpVmz.transfer.call(addressXjwGHH, uintf0oBGfF, {from: accounts[0]});
		const boole8RFQ6N = await WheatFarmpdFpVmz.transferFrom.call(addressGJGqzm, addressGD572RX, uintZOdt1Mb, {from: accounts[3]});
		const booluIipond = await WheatFarmpdFpVmz.increaseAllowance.call(addressKGEFZHQ, uintq3YqMmA, {from: accounts[4]});

		assert.equal(boolWLVVj9s, true)
		await expect(WheatFarmpdFpVmz.transferFrom.call(addressGJGqzm, addressGD572RX, uintZOdt1Mb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})