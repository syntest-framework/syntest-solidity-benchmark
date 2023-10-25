const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringiT6miAc = "3rhoYE1gHEtZ1T4R"
		const stringyQJ3QBe = "EY9ImxA6v7pVnrJnjIodABAkkVeX4Txw9tbLTEzyFLmIU8WGRooTiNsp2peMzBh1WOoaanTnsKozJ0IYFzXSBTeHBjXWN6FzRO"
		const uintod7lqj = BigInt("1529")
		const WheatFarmi12L5fS = await WheatFarm.new(stringiT6miAc, stringyQJ3QBe, uintod7lqj, {from: accounts[1]});
		const uintu5AtYn8 = BigInt("610")
		const addressd74QOF = accounts[1]
		const uintIFTdxyE = BigInt("847")
		const addresspb0CiJ9 = accounts[4]
		const uintfRWADQl = BigInt("1966")
		const addressbcwHynX = accounts[5]
		const addressbbq9gFl = accounts[4]
		const uintor7tqHW = BigInt("519")
		const addressYAAiG0 = accounts[0]
//		const booln3HbYwO = await WheatFarmi12L5fS.transfer.call(addressd74QOF, uintu5AtYn8, {from: accounts[5]});
//		const boolhg6Ujlx = await WheatFarmi12L5fS.increaseAllowance.call(addresspb0CiJ9, uintIFTdxyE, {from: accounts[3]});
//		const uintRJfGy1W = await WheatFarmi12L5fS.totalSupply.call({from: accounts[5]});
//		const boolZiRNFfU = await WheatFarmi12L5fS.approve.call(addressbcwHynX, uintfRWADQl, {from: "0x0000000000000000000000000000000000000001"});
//		const uintfgV5Nja = await WheatFarmi12L5fS.balanceOf.call(addressbbq9gFl, {from: accounts[0]});
//		const boolzPx4AH = await WheatFarmi12L5fS.transfer.call(addressYAAiG0, uintor7tqHW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WheatFarmi12L5fS.transfer.call(addressd74QOF, uintu5AtYn8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringO9kdLoF = "rzuTxD"
		const stringv9HGE8 = "TelwaLac3uokaJg4rR71YBYqjjQYDKx97GNOgQG0hublir8c6Sm3CMvEktxkzSfwSPxPI3l7Q3araLovX4rLVABTbGjBiyg1Cj"
		const uintAM96aEW = BigInt("757")
		const WheatFarmR4dkAfl = await WheatFarm.new(stringO9kdLoF, stringv9HGE8, uintAM96aEW, {from: accounts[2]});
		const uintWnGnQYz = BigInt("703")
		const addressG1v8EI = accounts[5]
		const uintz4Vmhpd = BigInt("1137")
		const addressRCp2iKd = accounts[1]
		const addresstaA68L5 = accounts[4]
		const uintqcXuoeF = BigInt("2015")
		const addressZnkMch = accounts[3]
//		const boolBhMTgUJ = await WheatFarmR4dkAfl.transfer.call(addressG1v8EI, uintWnGnQYz, {from: accounts[3]});
//		const boolwwCytRM = await WheatFarmR4dkAfl.transferFrom.call(addresstaA68L5, addressRCp2iKd, uintz4Vmhpd, {from: "0x0000000000000000000000000000000000000001"});
//		const boolyTY5rDG = await WheatFarmR4dkAfl.approve.call(addressZnkMch, uintqcXuoeF, {from: accounts[4]});

		await expect(WheatFarmR4dkAfl.transfer.call(addressG1v8EI, uintWnGnQYz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringnQiQED = "UeH5YnTdc3Rrpn5yHF5IcXAGJKNhdjnB2Aeh2cq9kWpbe35b"
		const stringpH25P93 = "b7aKbY5ENEU7BzUiYF4qXVRT2SWglS3fz2twLegsqo3wx9qlDNp6LwhFKpmH7"
		const uintsbE9ADl = BigInt("67")
		const WheatFarmjl8DtgO = await WheatFarm.new(stringnQiQED, stringpH25P93, uintsbE9ADl, {from: accounts[4]});
		const uinte2ex5iI = BigInt("1174")
		const addressytPXS6h = accounts[5]
		const uintXG6WsH3 = BigInt("1670")
		const addressWDGWhu = "0x0000000000000000000000000000000000000001"
		const uintLxiEJJ = BigInt("1049")
		const addressgXDBj9c = accounts[2]
		const addressVPV1iO = accounts[4]
		const boolKUE3bL3 = await WheatFarmjl8DtgO.approve.call(addressytPXS6h, uinte2ex5iI, {from: accounts[0]});
//		const boolg1lWo1U = await WheatFarmjl8DtgO.decreaseAllowance.call(addressWDGWhu, uintXG6WsH3, {from: accounts[4]});
//		const boolrmpHyuR = await WheatFarmjl8DtgO.transferFrom.call(addressVPV1iO, addressgXDBj9c, uintLxiEJJ, {from: accounts[1]});

		assert.equal(boolKUE3bL3, true)
		await expect(WheatFarmjl8DtgO.decreaseAllowance.call(addressWDGWhu, uintXG6WsH3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringCypN855 = "BNy9WtWe0vaVWJGM50CaDaeu1nZ6CCqAYjZG7ghBDVhPF8Rrp4chGT82"
		const stringWrTyMrR = "buFBpGrm5yGlMp1jrVwRCmu3mIELEtKvMsvR7kVL"
		const uintYflJvFJ = BigInt("129")
		const WheatFarmydWvoJO = await WheatFarm.new(stringCypN855, stringWrTyMrR, uintYflJvFJ, {from: accounts[4]});
		const uintmxG2jD = BigInt("998")
		const addresshElqjBb = accounts[4]
		const addressQevzf96 = accounts[4]
		const uintViVtDW2 = BigInt("1673")
		const addressaCHxsHC = accounts[4]
		const addressLLfhq6m = accounts[4]
		const uintkzRYPr = BigInt("872")
		const addressMwlWzev = accounts[4]
//		const boolRGBc80d = await WheatFarmydWvoJO.transferFrom.call(addressQevzf96, addresshElqjBb, uintmxG2jD, {from: accounts[1]});
//		const boolwBKZ5dI = await WheatFarmydWvoJO.increaseAllowance.call(addressaCHxsHC, uintViVtDW2, {from: accounts[3]});
//		const boolavS3cFE = await WheatFarmydWvoJO.transferownership.call(addressLLfhq6m, {from: accounts[2]});
//		const boolzS6q63h = await WheatFarmydWvoJO.decreaseAllowance.call(addressMwlWzev, uintkzRYPr, {from: accounts[2]});

		await expect(WheatFarmydWvoJO.transferFrom.call(addressQevzf96, addresshElqjBb, uintmxG2jD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringiFCmgxj = "RhT58kJ6lLKsrjSBHiDHyWl1duiTxhQrno8OHIrnv"
		const stringFanEYO1 = "yoxQZxuacxcC4DahKrfliR7TSjFlwpx6VuXNoJDsfCwtxYmdMM"
		const uintWJP13ii = BigInt("74")
		const WheatFarmAHXlArY = await WheatFarm.new(stringiFCmgxj, stringFanEYO1, uintWJP13ii, {from: accounts[1]});
		const uintnhmjmBv = BigInt("339")
		const addresszv9BSZ = accounts[2]
		const addresswSDaAS6 = accounts[0]
		const uintrA0wILj = BigInt("1585")
		const addressbzql0Jf = accounts[0]
		const uintYev8cs5 = BigInt("1249")
		const addressK0EDVxk = accounts[4]
		const uintboJmx96 = BigInt("750")
		const addressYKiI6gt = accounts[0]
		const uintISf2Ivi = BigInt("597")
		const addressBR1pTB = accounts[0]
		const boolD8ISN1s = await WheatFarmAHXlArY.transfer.call(addresszv9BSZ, uintnhmjmBv, {from: accounts[1]});
//		const boolP45knHr = await WheatFarmAHXlArY.transferownership.call(addresswSDaAS6, {from: accounts[0]});
//		const boolOGYEawZ = await WheatFarmAHXlArY.decreaseAllowance.call(addressbzql0Jf, uintrA0wILj, {from: accounts[5]});
//		const boolXTVIhh = await WheatFarmAHXlArY.approve.call(addressK0EDVxk, uintYev8cs5, {from: accounts[4]});
//		const boolWdo7rRi = await WheatFarmAHXlArY.approveAndCall.call(addressYKiI6gt, uintboJmx96, {from: accounts[0]});
//		const boolYpIi8hd = await WheatFarmAHXlArY.approve.call(addressBR1pTB, uintISf2Ivi, {from: accounts[2]});

		assert.equal(boolD8ISN1s, true)
		await expect(WheatFarmAHXlArY.transferownership.call(addresswSDaAS6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringiFCmgxj = "RhT58kJ6lLKsrjSBHiDHyWl1duiTxhQrno8OHIrnv"
		const stringFanEYO1 = "yoxQZxuacxcC4DahKrfliR7TSjFlwpx6VuXNoJDsfCwtxYmdMM"
		const uintdKfu9Fu = BigInt("74")
		const WheatFarmAHXlArY = await WheatFarm.new(stringiFCmgxj, stringFanEYO1, uintdKfu9Fu, {from: accounts[1]});
		const uintVWyyQg8 = BigInt("339")
		const addresstPyJGM8 = accounts[2]
		const uintEuWUY7N = BigInt("1249")
		const addressaqJm0lA = accounts[4]
		const uinteqbMeA9 = BigInt("750")
		const addressXWQuMAT = accounts[0]
		const uintsf7vZ8C = BigInt("597")
		const addressouSrz0l = accounts[0]
		const boolD8ISN1s = await WheatFarmAHXlArY.transfer.call(addresstPyJGM8, uintVWyyQg8, {from: accounts[1]});
		const boolXTVIhh = await WheatFarmAHXlArY.approve.call(addressaqJm0lA, uintEuWUY7N, {from: accounts[4]});
//		const boolWdo7rRi = await WheatFarmAHXlArY.approveAndCall.call(addressXWQuMAT, uinteqbMeA9, {from: accounts[0]});
//		const boolYpIi8hd = await WheatFarmAHXlArY.approve.call(addressouSrz0l, uintsf7vZ8C, {from: accounts[2]});

		assert.equal(boolD8ISN1s, true)
		assert.equal(boolXTVIhh, true)
		await expect(WheatFarmAHXlArY.approveAndCall.call(addressXWQuMAT, uinteqbMeA9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringiFCmgxj = "RhT58kJ6lLKsrjSBHiDHyWl1duiTxhQrno8OHIrnv"
		const stringFanEYO1 = "yoxQZxuacxcC4DahKrfliR7TSjFlwpx6VuXNoJDsfCwtxYmdMM"
		const uintJgSMbaW = BigInt("74")
		const WheatFarmAHXlArY = await WheatFarm.new(stringiFCmgxj, stringFanEYO1, uintJgSMbaW, {from: accounts[1]});
		const uintL2GElsP = BigInt("904")
		const addressdkd0ONF = accounts[1]
		const uintMOBkZnN = BigInt("339")
		const addressB2XKXnu = accounts[2]
		const uintUMDv2YI = BigInt("750")
		const addressmxIp5yp = accounts[0]
		const uintarMJ7q = BigInt("236")
		const addressY5o8zKh = accounts[3]
		const uintYmePAwc = BigInt("597")
		const addressRfrXp1A = accounts[0]
		const bool6MwlVO = await WheatFarmAHXlArY.approveAndCall.call(addressdkd0ONF, uintL2GElsP, {from: accounts[1]});
		const boolD8ISN1s = await WheatFarmAHXlArY.transfer.call(addressB2XKXnu, uintMOBkZnN, {from: accounts[1]});
//		const boolWdo7rRi = await WheatFarmAHXlArY.approveAndCall.call(addressmxIp5yp, uintUMDv2YI, {from: accounts[0]});
//		const boolrIASaL0 = await WheatFarmAHXlArY.increaseAllowance.call(addressY5o8zKh, uintarMJ7q, {from: accounts[1]});
//		const boolYpIi8hd = await WheatFarmAHXlArY.approve.call(addressRfrXp1A, uintYmePAwc, {from: accounts[2]});

		assert.equal(bool6MwlVO, true)
		assert.equal(boolD8ISN1s, true)
		await expect(WheatFarmAHXlArY.approveAndCall.call(addressmxIp5yp, uintUMDv2YI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringb1kqJq7 = "X9g0w6IVal1bbRfzXOMEGTjL4ECMV15dd2xgsDIVMBRWHqW2AN5Ev5ukcRI5sgK0WSzIhSk4WU3mhf7LRR7jwiVLBFJ4JOrL8"
		const stringfXWbu3F = "Cz4mdel27"
		const uintJrfLDGg = BigInt("610")
		const WheatFarmHlVT3Nt = await WheatFarm.new(stringb1kqJq7, stringfXWbu3F, uintJrfLDGg, {from: "0x0000000000000000000000000000000000000001"});
		const uintcx098aQ = BigInt("455")
		const addressGUMYcCR = accounts[1]
		const uint8rWl4pN = await WheatFarmHlVT3Nt.decimals.call({from: accounts[3]});
		const stringgfx9NUV = await WheatFarmHlVT3Nt.symbol.call({from: accounts[2]});
		const boolvMapBGC = await WheatFarmHlVT3Nt.increaseAllowance.call(addressGUMYcCR, uintcx098aQ, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WheatFarm', async () => {
		const stringO9kdLoF = "rzuTxD"
		const stringv9HGE8 = "TelwaLac3uokaJg4rR71YBYqjjQYDKx97GNOgQG0hublir8c6Sm3CMvEktxkzSfwSPxPI3l7Q3araLovX4rLVABTbGjBiyg1Cj"
		const uintMHjxK9q = BigInt("757")
		const WheatFarmR4dkAfl = await WheatFarm.new(stringO9kdLoF, stringv9HGE8, uintMHjxK9q, {from: accounts[2]});
		const uinthi3msTA = BigInt("0")
		const addressPvN5Tlz = accounts[1]
		const addressQz4kACX = accounts[0]
		const uintFqmwNKG = BigInt("2021")
		const addressbH6sgrt = accounts[5]
		const boolCQkm0yQ = await WheatFarmR4dkAfl.transferFrom.call(addressQz4kACX, addressPvN5Tlz, uinthi3msTA, {from: accounts[5]});
//		const boolBhMTgUJ = await WheatFarmR4dkAfl.transfer.call(addressbH6sgrt, uintFqmwNKG, {from: accounts[3]});

		assert.equal(boolCQkm0yQ, true)
		await expect(WheatFarmR4dkAfl.transfer.call(addressbH6sgrt, uintFqmwNKG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringO9kdLoF = "rzuTxD"
		const stringv9HGE8 = "TelwaLac3uokaJg4rR71YBYqjjQYDKx97GNOgQG0hublir8c6Sm3CMvEktxkzSfwSPxPI3l7Q3araLovX4rLVABTbGjBiyg1Cj"
		const uintbDt3OeS = BigInt("757")
		const WheatFarmR4dkAfl = await WheatFarm.new(stringO9kdLoF, stringv9HGE8, uintbDt3OeS, {from: accounts[2]});
		const addressEHOdD9 = accounts[4]
		const uintw7OVcvO = BigInt("2028")
		const addressHoD4ZOW = accounts[6]
		const boollfdtVsN = await WheatFarmR4dkAfl.transferownership.call(addressEHOdD9, {from: accounts[2]});
		const uint8vAOHI19 = await WheatFarmR4dkAfl.decimals.call({from: accounts[4]});
//		const boolBhMTgUJ = await WheatFarmR4dkAfl.transfer.call(addressHoD4ZOW, uintw7OVcvO, {from: accounts[3]});

		assert.equal(boollfdtVsN, true)
		assert.equal(uint8vAOHI19, BigInt("18"))
		await expect(WheatFarmR4dkAfl.transfer.call(addressHoD4ZOW, uintw7OVcvO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})